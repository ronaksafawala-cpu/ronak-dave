// ============================================================================
// Batch Google Indexing Script
// Run: npx tsx scripts/batch-index.ts
// Requires: GOOGLE_SERVICE_ACCOUNT_EMAIL, GOOGLE_PRIVATE_KEY, REINDEX_API_KEY
// ============================================================================

const SITE_URL = "https://ronakdave.com";
const API_URL = `${SITE_URL}/api/reindex`;

// Import city and keyword data directly for URL generation
// These mirror the arrays in lib/ronak-dave-seo.ts
function getAllUrls(): string[] {
  const urls: string[] = [
    `${SITE_URL}`,
    `${SITE_URL}/services`,
  ];

  // We read the generated sitemap to get all URLs
  return urls;
}

async function fetchAllSitemapUrls(): Promise<string[]> {
  const urls: string[] = [];
  
  // Fetch sitemap index first
  try {
    const indexRes = await fetch(`${SITE_URL}/sitemap.xml`);
    const indexText = await indexRes.text();
    
    // Parse sitemap index for child sitemap URLs
    const sitemapUrls = indexText.match(/<loc>(.*?)<\/loc>/g)?.map(m => m.replace(/<\/?loc>/g, '')) || [];
    
    for (const sitemapUrl of sitemapUrls) {
      try {
        const res = await fetch(sitemapUrl);
        const text = await res.text();
        const pageUrls = text.match(/<loc>(.*?)<\/loc>/g)?.map(m => m.replace(/<\/?loc>/g, '')) || [];
        urls.push(...pageUrls);
      } catch (err) {
        console.error(`Failed to fetch ${sitemapUrl}: ${err}`);
      }
    }
  } catch (err) {
    console.error(`Failed to fetch sitemap index: ${err}`);
    console.log("Falling back to manual URL generation...");
    // Fallback: generate URLs manually
    urls.push(`${SITE_URL}`, `${SITE_URL}/services`);
  }

  return [...new Set(urls)];
}

async function main() {
  console.log("🔍 Fetching all URLs from sitemap...");
  const urls = await fetchAllSitemapUrls();
  
  console.log(`📄 Found ${urls.length} URLs to index`);
  console.log("📤 Submitting to Google Indexing API...\n");
  
  const apiKey = process.env.REINDEX_API_KEY;
  if (!apiKey) {
    console.error("❌ Missing REINDEX_API_KEY environment variable");
    process.exit(1);
  }

  // Process in batches of 50
  const batchSize = 50;
  let successCount = 0;
  let failCount = 0;

  for (let i = 0; i < urls.length; i += batchSize) {
    const batch = urls.slice(i, i + batchSize);
    const batchNum = Math.floor(i / batchSize) + 1;
    const totalBatches = Math.ceil(urls.length / batchSize);
    console.log(`Batch ${batchNum}/${totalBatches}: Submitting ${batch.length} URLs...`);
    
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${apiKey}`,
        },
        body: JSON.stringify({ urls: batch }),
      });
      
      const data = await response.json();
      if (data.successful) successCount += data.successful;
      if (data.failed) failCount += data.failed;
      console.log(`  ✅ ${data.successful || 0} success, ❌ ${data.failed || 0} failed`);
    } catch (err) {
      console.error(`  ❌ Batch failed: ${err}`);
      failCount += batch.length;
    }
    
    // Rate limit delay
    if (i + batchSize < urls.length) {
      await new Promise(r => setTimeout(r, 2000));
    }
  }

  console.log(`\n🎉 Done! ✅ ${successCount} success, ❌ ${failCount} failed, Total: ${urls.length}`);
}

main().catch(console.error);
