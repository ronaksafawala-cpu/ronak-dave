// ─── SEO Keywords Matrix — all keyword patterns with unique content data ────

export interface KeywordData {
  slug: string
  label: string
  type: "india" | "international"
  serviceTitle: string
  serviceDesc: string
  intentSignal: string   // What is the user looking for
  contentAngle: string   // Unique angle for this keyword's page
  faqs: { q: string; a: string }[]
  relatedKeywords: string[]
}

// ── 20 India keyword patterns ──────────────────────────────────────────────
export const INDIA_KEYWORDS: KeywordData[] = [
  {
    slug: "safa",
    label: "Safa",
    type: "india",
    serviceTitle: "Wedding Safa Service",
    serviceDesc: "Traditional Indian wedding safa tying service by Ronak Dave — India's No.1 Safawala with 40+ years of heritage. Premium handcrafted safas for grooms and barati across all Indian wedding traditions.",
    intentSignal: "Bride/groom family searching for a safa specialist locally",
    contentAngle: "Heritage + trust + local expertise — position as THE safa expert in this city",
    faqs: [
      { q: "What is a safa?", a: "A safa is a traditional Indian wedding turban worn by the groom and male guests. It is a symbol of honour, family pride, and cultural identity. Different regions have distinct safa styles — Rajasthani, Jodhpuri, Marwari, Gujarati, and more." },
      { q: "How long does it take to tie a safa?", a: "A standard safa takes 5–10 minutes. A premium designer safa may take 20–30 minutes. Ronak Dave holds the world record for the fastest safa tying." },
      { q: "What safa styles does Ronak Dave offer?", a: "Rajasthani, Jodhpuri, Marwari, Gujarati, Bandhani, Patiala, Pheta, and 50+ regional styles tailored to your community and preference." }
    ],
    relatedKeywords: ["wedding safa", "safa tying", "safa service", "safawala", "turban"]
  },
  {
    slug: "wedding-safa",
    label: "Wedding Safa",
    type: "india",
    serviceTitle: "Premium Wedding Safa",
    serviceDesc: "Exclusive premium wedding safa service by Ronak Dave. Designer safas for grooms crafted with the finest fabrics — silk, brocade, and georgette — tied in the style of your wedding theme and family tradition.",
    intentSignal: "Actively planning a wedding and searching for a safa service",
    contentAngle: "Premium quality + wedding-specific styling + matching to sherwani and venue theme",
    faqs: [
      { q: "Can the safa be matched to my sherwani?", a: "Yes — Ronak Dave's team coordinates fabric, colour, and style with your sherwani, baraat theme, and venue decor." },
      { q: "How early should I book for my wedding?", a: "Book 4–8 weeks in advance for the wedding season (Oct–Mar). For destination weddings or celebrity-level service, book 3 months ahead." },
      { q: "Do you provide safas for all family members?", a: "Yes — we provide complete baraat packages covering groom, father, brothers, and all male guests." }
    ],
    relatedKeywords: ["groom safa", "safa for wedding", "wedding turban", "shadi safa"]
  },
  {
    slug: "groom-safa",
    label: "Groom Safa",
    type: "india",
    serviceTitle: "Exclusive Groom Safa",
    serviceDesc: "The groom's safa is the crown of his wedding day. Ronak Dave creates bespoke groom safas with premium fabrics, kalgi, sehra, and decorative brooches — styled for the groom's personality, sherwani, and wedding theme.",
    intentSignal: "Specifically looking for a high-quality safa for the groom himself",
    contentAngle: "Personalisation + exclusivity + the groom as the most important person on his wedding day",
    faqs: [
      { q: "What is included in a groom safa package?", a: "Premium safa fabric, professional tying, kalgi (ornament), sehra option, decorative brooches, and a touch-up service throughout the event." },
      { q: "Can I choose my own fabric for the groom safa?", a: "Absolutely. Ronak Dave's team assists with fabric selection — silk, raw silk, brocade, georgette, or custom embroidered fabric from your preferred source." },
      { q: "Does Ronak Dave personally tie the groom's safa?", a: "For premium and celebrity-level bookings, Ronak Dave personally ties the groom's safa. Contact us for his personal attendance availability." }
    ],
    relatedKeywords: ["groom turban", "dulha safa", "wedding day safa", "groom pagdi"]
  },
  {
    slug: "barati-safa",
    label: "Barati Safa",
    type: "india",
    serviceTitle: "Barati Safa Service",
    serviceDesc: "Coordinated safa service for the entire baraat — from 10 to 1000+ guests. Ronak Dave's team ensures colour-coordinated, theme-matched safas for all male baraat members, creating a visually stunning procession.",
    intentSignal: "Wedding family looking for bulk safa service for baraat guests",
    contentAngle: "Coordination + scale + the visual impact of a perfectly matching baraat procession",
    faqs: [
      { q: "What is the minimum order for barati safas?", a: "We serve any size — from 10 to 1000+ barati guests. Packages start from ₹500 per person for standard safas." },
      { q: "Can all barati safas be colour-matched?", a: "Yes — we coordinate all barati safas with the groom's colour theme, ensuring a visually unified and spectacular baraat procession." },
      { q: "How many tying professionals do you send for large baraats?", a: "We send 1 professional per 25 guests. For 100 barati, we deploy 4 professionals ensuring everyone is ready on time." }
    ],
    relatedKeywords: ["baraat safa", "guest turban", "bulk safa service", "barati turban"]
  },
  {
    slug: "safa-wala",
    label: "Safawala",
    type: "india",
    serviceTitle: "Safawala Service",
    serviceDesc: "Ronak Dave — India's most celebrated Safawala. The name 'Safawala' refers to the specialist who ties wedding turbans, and Ronak Dave is India's #1 Safawala with a Guinness World Record, 40+ years of family heritage, and 4.5 Lakh+ happy clients.",
    intentSignal: "Searching for a safawala (turban tier) near them or by name",
    contentAngle: "Authority + the meaning of 'safawala' as a respected craft + India's No.1 position",
    faqs: [
      { q: "What does safawala mean?", a: "A safawala is a specialist artisan who ties wedding turbans (safas). Like a master calligrapher or a master chef, a skilled safawala has years of training in multiple regional styles. Ronak Dave is India's most famous safawala." },
      { q: "Why choose a professional safawala over a family member?", a: "A professional safawala ensures the safa stays perfectly in place throughout the event, matches the outfit precisely, and is tied in the correct regional style for your tradition." },
      { q: "Is Ronak Dave available in my city?", a: "Yes — Ronak Dave and his team serve 200+ cities across India. Contact +91-9725295691 to confirm availability for your city and date." }
    ],
    relatedKeywords: ["safa service", "turban specialist", "pagdi expert", "professional safa tier"]
  },
  {
    slug: "safa-on-rent",
    label: "Safa on Rent",
    type: "india",
    serviceTitle: "Safa Rental Service",
    serviceDesc: "Premium safa rental service by Ronak Dave — hire beautifully crafted safas for your wedding day without the cost of purchase. Our rental collection includes 50+ styles, fabrics, and colours with professional tying included.",
    intentSignal: "Budget-conscious family looking to hire safas rather than buy",
    contentAngle: "Value + variety + the smart choice — rental access to premium safas",
    faqs: [
      { q: "What is included in safa on rent?", a: "The safa fabric, professional tying at your venue, and collection after the event. Kalgi and accessories available at additional cost." },
      { q: "What is the cost of safa on rent?", a: "Rental safas start from ₹300 per person with professional tying. Premium designer rental safas start from ₹1,500. Contact us for package rates for large baraats." },
      { q: "Can I keep the rental safa as a souvenir?", a: "Yes — we offer a 'keep the safa' upgrade where you pay the difference between rental and purchase price. Many families choose this for the groom's safa as a lifetime memento." }
    ],
    relatedKeywords: ["safa hire", "turban rental", "rent a safa", "safa for rent"]
  },
  {
    slug: "safa-rental",
    label: "Safa Rental",
    type: "india",
    serviceTitle: "Wedding Safa Rental",
    serviceDesc: "India's premier wedding safa rental service — access to 200+ premium safas across all styles and traditions, with professional tying by Ronak Dave's certified artisans. Available for single grooms or entire baraats of any size.",
    intentSignal: "Specifically searching for safa rental service in their city",
    contentAngle: "Selection + quality + convenience of not having to source and purchase yourself",
    faqs: [
      { q: "How does the safa rental process work?", a: "Book online or call us, choose your safa style and colours, our team arrives at your venue on the wedding day, professionally ties each safa, and collects after the event." },
      { q: "Do you offer safa rental for destination weddings?", a: "Yes — our team travels with a complete rental collection to destination weddings across India and abroad. Travel charges apply." },
      { q: "How many safa styles are available in the rental collection?", a: "200+ safas covering all major Indian regional styles — Rajasthani, Jodhpuri, Marwari, Gujarati Bandhani, Punjabi Patiala, Maharashtrian Pheta, and many more." }
    ],
    relatedKeywords: ["safa on rent", "turban for hire", "safa shop near me"]
  },
  {
    slug: "safa-tying-service",
    label: "Safa Tying Service",
    type: "india",
    serviceTitle: "Professional Safa Tying Service",
    serviceDesc: "Professional safa tying service by certified artisans trained by Ronak Dave. We tie safas for grooms, barati guests, and all wedding functions — precisely, quickly, and in perfect regional style.",
    intentSignal: "Has a safa but needs a professional to tie it correctly",
    contentAngle: "Skill + speed + the world record in fastest safa tying — trust the expert",
    faqs: [
      { q: "Can you tie my own safa fabric?", a: "Yes — bring your fabric and our professionals will tie it in any style you choose. We work with customer-supplied fabrics regularly." },
      { q: "Why is professional safa tying important?", a: "An improperly tied safa falls apart during the baraat, looks asymmetrical in photos, and can cause embarrassment. Ronak Dave's professionals ensure your safa stays perfect all day." },
      { q: "Do you offer on-site safa tying at the venue?", a: "Yes — we come to your hotel, banquet hall, or home. Our team sets up a dedicated safa tying station for your event." }
    ],
    relatedKeywords: ["safa bandhna", "turban tying", "professional turban tier", "how to tie a safa"]
  },
  {
    slug: "wedding-turban",
    label: "Wedding Turban",
    type: "india",
    serviceTitle: "Wedding Turban Service",
    serviceDesc: "Ronak Dave's signature wedding turban service — where traditional safa craftsmanship meets modern wedding aesthetics. Available in 50+ regional styles for all Indian wedding communities.",
    intentSignal: "Using the English word 'turban' — may be NRI, urban, or younger demographic",
    contentAngle: "Bridge between Western language and Indian tradition — explain the safa = turban",
    faqs: [
      { q: "What is the difference between a turban and a safa?", a: "In Indian weddings, 'turban' and 'safa' refer to the same thing — the ceremonial headwear worn by the groom. 'Safa' is the Hindi/Gujarati/Rajasthani term; 'turban' is the English equivalent. Pagdi and peta are other regional names." },
      { q: "What types of wedding turbans does Ronak Dave make?", a: "Rajasthani safas, Jodhpuri pagdis, Gujarati safas, Patiala turbans, Marathi phetas, Sikh turbans, and custom designer turbans for all communities." },
      { q: "Can I get a matching turban for my wedding photos?", a: "Yes — we create photoshoot-ready turbans with perfect folds, symmetry, and colour matching to your outfit and wedding colour palette." }
    ],
    relatedKeywords: ["groom turban", "Indian wedding turban", "turban for wedding", "dastar"]
  },
  {
    slug: "groom-turban",
    label: "Groom Turban",
    type: "india",
    serviceTitle: "Groom Turban Specialist",
    serviceDesc: "India's most celebrated groom turban specialist. Ronak Dave personally oversees groom turban styling for premium bookings — ensuring the groom looks absolutely regal on his most important day.",
    intentSignal: "Looking specifically for a high-quality turban specialist for the groom",
    contentAngle: "The groom as king — his turban is his crown — only the best specialist is good enough",
    faqs: [
      { q: "What makes a good groom turban?", a: "The perfect groom turban fits perfectly on the head, stays in place throughout the ceremony and baraat, complements the sherwani colour and fabric, and reflects the groom's community tradition." },
      { q: "How much does a groom turban cost?", a: "Groom turban styling starts from ₹2,000 for standard service and goes up to ₹50,000+ for bespoke celebrity-level designer turbans with premium fabrics and accessories." },
      { q: "Can Ronak Dave personally attend my wedding?", a: "Yes — Ronak Dave personally attends weddings under our premium packages. Call +91-9725295691 to discuss personal attendance availability and pricing." }
    ],
    relatedKeywords: ["dulha turban", "groom safa", "wedding turban for groom"]
  },
  {
    slug: "barati-turban",
    label: "Barati Turban",
    type: "india",
    serviceTitle: "Barati Turban Service",
    serviceDesc: "Complete barati turban coordination service — ensuring every male wedding guest wears a perfectly matched, professionally tied turban. Available for baraats from 10 to 1000+ guests across India.",
    intentSignal: "Looking for bulk turban service for baraat procession",
    contentAngle: "Visual cohesion of the baraat + the power of a unified procession",
    faqs: [
      { q: "How are barati turbans coordinated with the groom's turban?", a: "We tie all barati turbans in a complementary colour and style to the groom's safa, ensuring a visually unified baraat that looks spectacular in wedding photographs and videos." },
      { q: "What is the cost for barati turban service?", a: "Barati turban service starts from ₹500 per person. Bulk packages available — contact us for quote based on your guest count." },
      { q: "How quickly can your team tie turbans for a large baraat?", a: "Our team ties one turban every 5–7 minutes. For 100 guests, we deploy 4 professionals and complete all turbans within 2 hours." }
    ],
    relatedKeywords: ["guest turban", "baraat turban", "bulk turban service"]
  },
  {
    slug: "turban-tying",
    label: "Turban Tying",
    type: "india",
    serviceTitle: "Expert Turban Tying Service",
    serviceDesc: "Expert turban tying by Ronak Dave's certified professionals — trained in 50+ Indian regional turban styles. Holders of the world record for fastest turban tying. Available at your venue, hotel, or home.",
    intentSignal: "Searching for someone skilled in the craft of turban tying",
    contentAngle: "Skill + world record + the technical expertise behind great turban tying",
    faqs: [
      { q: "How many styles of turban tying does Ronak Dave know?", a: "Ronak Dave and his team are trained in 50+ regional Indian turban styles including all major Rajasthani styles, Gujarati safas, Punjabi Patiala, Marathi pheta, Sikh styles, and NRI fusion styles." },
      { q: "Is there a world record for turban tying?", a: "Yes — Ronak Dave holds the official world record for the fastest safa tying. This record demonstrates his extraordinary technical mastery of the craft." },
      { q: "Can I learn turban tying from Ronak Dave?", a: "Yes — Ronak Dave offers safa tying workshops for individuals and groups. Contact us for workshop bookings and corporate cultural events." }
    ],
    relatedKeywords: ["how to tie a turban", "turban tying service", "dastar bandi"]
  },
  {
    slug: "pagdi-service",
    label: "Pagdi Service",
    type: "india",
    serviceTitle: "Traditional Pagdi Service",
    serviceDesc: "Traditional Indian pagdi service by Ronak Dave — specialist in all regional pagdi styles including Rajasthani Jodhpuri pagdi, Gujarati safa, Marathi pheta, Rajputana pagdi, and more. Heritage craftsmanship for every community.",
    intentSignal: "Using the term 'pagdi' — likely Rajasthani, Gujarati, or Hindi-belt community",
    contentAngle: "Regional specificity + heritage + the pagdi as a symbol of family honour",
    faqs: [
      { q: "What is the difference between a safa and a pagdi?", a: "Both are regional terms for the Indian wedding turban. 'Pagdi' is commonly used in Rajasthan and Hindi-belt states; 'safa' is more common in Gujarat and Rajasthan. 'Peta' is used in Maharashtra; 'Dastar' in Sikh tradition." },
      { q: "What styles of pagdi does Ronak Dave offer?", a: "Jodhpuri pagdi, Jaipur rajputana pagdi, Mewar pagdi, Marwari safa, Banati pagdi, Kesariya safa, and 40+ more Rajasthani and Hindi-belt regional styles." },
      { q: "How is a pagdi different from a regular turban?", a: "A pagdi is a pre-shaped, structured ceremonial turban with specific pleating techniques unique to each region. It requires trained hands to tie correctly and maintain throughout a wedding day." }
    ],
    relatedKeywords: ["pagdi tying", "wedding pagdi", "Rajasthani pagdi", "dulha ki pagdi"]
  },
  {
    slug: "wedding-pagdi",
    label: "Wedding Pagdi",
    type: "india",
    serviceTitle: "Wedding Pagdi Specialist",
    serviceDesc: "Wedding pagdi specialist serving all communities across India. Ronak Dave's artisans create perfectly structured pagdis in traditional regional styles — tied with precision for the most important day of your son's life.",
    intentSignal: "Wedding-focused pagdi search — ready to book",
    contentAngle: "The pagdi ceremony as a cultural milestone — not just headwear but a rite of passage",
    faqs: [
      { q: "What is the significance of the pagdi ceremony?", a: "The pagdi ceremony (or safa bandi) is often performed before the baraat begins. The groom's father or senior male relative ties the first layer, symbolising the passing of family responsibility. Ronak Dave assists this sacred moment with expertise and dignity." },
      { q: "Do you offer pagdi for all wedding functions?", a: "Yes — safa/pagdi for Haldi, Mehendi, Sangeet, Baraat, Pheras, and Reception. Each function can have a different colour or style." },
      { q: "What is the cost of a wedding pagdi?", a: "Wedding pagdi service starts from ₹2,000 for the groom and ₹500 per barati. Full wedding packages covering all functions are available — contact us for custom quotes." }
    ],
    relatedKeywords: ["dulha ki pagdi", "pagdi service", "groom pagdi"]
  },
  {
    slug: "rajasthani-safa",
    label: "Rajasthani Safa",
    type: "india",
    serviceTitle: "Rajasthani Safa Service",
    serviceDesc: "Authentic Rajasthani safa service by Ronak Dave — specialist in all traditional Rajasthani regional styles including Jodhpuri, Jaipur, Mewar, Bikaner, and Jaisalmer safa traditions. The most detailed and culturally accurate Rajasthani safas available.",
    intentSignal: "Specifically wants the Rajasthani style — royal and traditional wedding",
    contentAngle: "Authenticity + the specific styles of Rajasthan + cultural accuracy as selling point",
    faqs: [
      { q: "What are the different Rajasthani safa styles?", a: "Key Rajasthani styles include: Jodhpuri safa (stiff, structured, usually saffron/red), Jaipur Rajputana safa (elaborate with gold border), Mewar safa (associated with Udaipur royal tradition), Bikaner safa (bold colours, high rise), and Marwari Bandhani safa (tie-dyed fabric)." },
      { q: "Which Rajasthani safa is most popular for weddings?", a: "The Jodhpuri safa in saffron or red is the most popular for north Indian Hindu weddings. Bandhani safas are popular in Gujarat-Rajasthan border communities. Rajput families typically prefer the royal Rajputana style." },
      { q: "Can Ronak Dave tie a Rajasthani safa for a non-Rajasthani groom?", a: "Absolutely — Rajasthani safas are worn across India for their regal appearance. Many grooms from all communities choose Rajasthani styles for their visual impact. Ronak Dave advises on which style suits your outfit best." }
    ],
    relatedKeywords: ["Rajasthan safa", "Jodhpuri safa", "Rajputana turban", "desert wedding safa"]
  },
  {
    slug: "jodhpuri-safa",
    label: "Jodhpuri Safa",
    type: "india",
    serviceTitle: "Jodhpuri Safa Specialist",
    serviceDesc: "India's most acclaimed Jodhpuri safa specialist. The Jodhpuri safa — stiff, structured, and imperially grand — is the definitive Rajputana statement. Ronak Dave has tied Jodhpuri safas for Bollywood stars, Ambani family weddings, and hundreds of royal families.",
    intentSignal: "Knows exactly which style they want — high purchase intent",
    contentAngle: "Expertise in one specific iconic style + celebrity validation",
    faqs: [
      { q: "What makes a Jodhpuri safa distinctive?", a: "The Jodhpuri safa is characterised by its structured stiffness, high rise, and dramatic angular shape. It is typically saffron, red, or ivory and takes significant skill to maintain its shape throughout a long wedding day." },
      { q: "What fabric is used for a Jodhpuri safa?", a: "Traditional Jodhpuri safas use stiff silk or raw silk. Modern versions also use silk-cotton blends or polyester silk for durability. Gold zari borders are common for royal-style safas." },
      { q: "Has Ronak Dave tied Jodhpuri safas for celebrities?", a: "Yes — Ronak Dave has tied Jodhpuri-style safas for numerous Bollywood celebrities and industrialist families. His portfolio includes the Ambani family, Vicky Kaushal, and hundreds of other prominent clients." }
    ],
    relatedKeywords: ["Jodhpuri turban", "Blue City safa", "Rajputana safa", "Rathore safa"]
  },
  {
    slug: "marwari-turban",
    label: "Marwari Turban",
    type: "india",
    serviceTitle: "Marwari Turban Service",
    serviceDesc: "Authentic Marwari turban service for the Marwari business community's most important day. Ronak Dave is the most respected name in Marwari turban traditions — serving Marwari families from Jodhpur to Kolkata.",
    intentSignal: "From the Marwari community — strong cultural affinity with the craft",
    contentAngle: "Community-specific appeal — Marwari identity and pride",
    faqs: [
      { q: "What is the traditional Marwari turban style?", a: "Traditional Marwari turbans use Bandhani (tie-dye) or Leheriya (wave pattern) fabrics in bright colours — saffron, red, pink, or yellow with gold borders. The style is typically multi-layered with a centre ridge." },
      { q: "How is the Marwari turban different from other Rajasthani styles?", a: "Marwari turbans tend to use Bandhani and Leheriya fabrics unique to the Jodhpur-Bikaner region. The tying style has regional variations specific to different Marwari clans and sub-communities." },
      { q: "Does Ronak Dave serve Marwari communities outside Rajasthan?", a: "Yes — Marwari families across Mumbai, Kolkata, Delhi, Hyderabad, Chennai, and internationally all have access to Ronak Dave's services. We travel to serve the Marwari community wherever they celebrate." }
    ],
    relatedKeywords: ["Marwari safa", "Marwari wedding turban", "Bandhani safa", "Leheriya turban"]
  },
  {
    slug: "best-safa-service",
    label: "Best Safa Service",
    type: "india",
    serviceTitle: "Best Safa Service in India",
    serviceDesc: "Looking for the best safa service? Look no further — Ronak Dave is India's most awarded, most reviewed, and most trusted safa specialist. Guinness World Record holder. 4.5 Lakh+ happy clients. The definitive answer to the question.",
    intentSignal: "Comparison-shopping — looking for the 'best' before committing",
    contentAngle: "Direct claim to #1 position backed by evidence — world records, celebrity clients, decades of heritage",
    faqs: [
      { q: "What makes Ronak Dave the best safa service in India?", a: "Three things: 1) Guinness World Record for World's Biggest Turban and World Record for Fastest Safa Tying, 2) 40+ years of three-generation family heritage, 3) 4.5 Lakh+ satisfied clients including 500+ celebrities." },
      { q: "Are there customer reviews for Ronak Dave's safa service?", a: "Yes — thousands of verified reviews across Google, Facebook, and wedding platforms. Ronak Dave maintains a 4.8+ rating across all platforms based on thousands of reviews." },
      { q: "What guarantees do you offer?", a: "We guarantee: on-time arrival, professional quality, safa remaining perfectly tied throughout your event, and complete satisfaction or we re-tie free of charge." }
    ],
    relatedKeywords: ["top safa service", "No.1 safawala", "best turban service India"]
  },
  {
    slug: "safa-near-me",
    label: "Safa Near Me",
    type: "india",
    serviceTitle: "Safa Service Near Me",
    serviceDesc: "Looking for a safa service near you? Ronak Dave's team is available across 200+ cities in India. We come to your venue — no need to travel. Local service, national expertise.",
    intentSignal: "Hyperlocal intent — wants someone nearby, possibly last-minute",
    contentAngle: "Availability + convenience + we come to you — no local store needed",
    faqs: [
      { q: "Do I need to visit a shop or do you come to me?", a: "We come to you — at your home, hotel, or banquet hall. On-site service means no travel hassle on your wedding morning." },
      { q: "Are you available in my city?", a: "Ronak Dave serves 200+ cities across India. Even if your city isn't listed, we can arrange for a certified professional to travel to your location. Call +91-9725295691 to confirm." },
      { q: "Can I book for same-day or urgent safa service?", a: "Subject to availability, we accommodate urgent requests. Call +91-9725295691 immediately for urgent bookings — we will do our best to serve you." }
    ],
    relatedKeywords: ["safa service near me", "safawala near me", "turban tying near me"]
  },
  {
    slug: "safawala",
    label: "Safawala",
    type: "india",
    serviceTitle: "Safawala — Ronak Dave",
    serviceDesc: "Safawala.com — India's most trusted wedding turban brand — is Ronak Dave's flagship service. The word 'safawala' means turban specialist, and Ronak Dave is India's acknowledged #1 Safawala with world records, celebrity clients, and 40+ years of heritage.",
    intentSignal: "Brand-aware search — either knows Safawala.com or is looking for a generic safawala",
    contentAngle: "Brand story + what 'safawala' means + why Ronak Dave IS the Safawala",
    faqs: [
      { q: "Who is the most famous safawala in India?", a: "Ronak Dave — known as 'The Turban Man of India' — is India's most famous safawala. He holds two world records, has styled 500+ celebrities, and founded Safawala.com — India's first premium safa rental platform." },
      { q: "What services does Safawala.com offer?", a: "Safawala.com offers groom safa, barati safa, safa rental, destination wedding safa, celebrity wedding styling, corporate event turbans, and custom designer safas across India and internationally." },
      { q: "How do I contact Safawala / Ronak Dave?", a: "Call or WhatsApp: +91-9725295691. USA: +1 (201) 238-9208. Email: care@ronakdave.com. Or book through the form on this page." }
    ],
    relatedKeywords: ["safawala.com", "Ronak Dave safawala", "safa brand India"]
  },
]

// ── 10 International keyword patterns ─────────────────────────────────────
export const INTERNATIONAL_KEYWORDS: KeywordData[] = [
  {
    slug: "indian-wedding-turban",
    label: "Indian Wedding Turban",
    type: "international",
    serviceTitle: "Indian Wedding Turban Service Abroad",
    serviceDesc: "Ronak Dave's international Indian wedding turban service — bringing authentic safa artistry to Indian diaspora weddings worldwide. Available in UAE, UK, USA, Canada, Australia, Singapore, and 15+ countries.",
    intentSignal: "NRI family or destination wedding planner abroad searching for an Indian turban specialist",
    contentAngle: "Authentic Indian tradition brought to your international wedding — world-record artist travels globally",
    faqs: [
      { q: "Can Ronak Dave travel for international weddings?", a: "Yes — Ronak Dave and his certified team travel to 15+ countries for Indian weddings. UAE, UK, USA, Canada, Australia, Singapore, Thailand, Bali, and more are regularly served." },
      { q: "How far in advance should I book for an international wedding?", a: "Book 3–6 months in advance for international travel bookings, especially for peak season (Oct–Mar). Popular locations like Dubai and London require early booking." },
      { q: "What is included in international wedding turban service?", a: "Travel to your venue, professional safa tying for groom and all barati guests, full event coverage, and all accessories (kalgi, brooches). Travel and accommodation costs are additional." }
    ],
    relatedKeywords: ["Indian turban abroad", "safa international", "NRI wedding turban"]
  },
  {
    slug: "indian-wedding-safa",
    label: "Indian Wedding Safa",
    type: "international",
    serviceTitle: "Authentic Indian Wedding Safa",
    serviceDesc: "Ronak Dave brings the authentic Indian safa tradition to destination weddings worldwide. Whether your wedding is in Dubai, London, New York, or Bali — India's No.1 Safawala ensures your wedding has the real thing.",
    intentSignal: "Wants authenticity — not a local shop approximation but the real Indian tradition",
    contentAngle: "Authenticity cannot be found locally abroad — bringing the real expert is worth it",
    faqs: [
      { q: "Why hire Ronak Dave for a safa abroad when local shops exist?", a: "Local tailors or party suppliers abroad rarely have authentic knowledge of Indian safa styles. Ronak Dave is India's world-record holder with 40+ years of genuine expertise — the difference in quality and authenticity is immediately visible." },
      { q: "What Indian wedding safa styles does Ronak Dave offer for international weddings?", a: "All Indian regional styles — Rajasthani, Jodhpuri, Gujarati, Punjabi, Marathi, South Indian fusion — tailored to your community and wedding theme." },
      { q: "Do you bring your own safa fabrics or do we need to provide them?", a: "We bring a complete collection of fabrics to international destinations. You can also source fabric locally and we will tie it for you in your chosen style." }
    ],
    relatedKeywords: ["Indian safa abroad", "wedding turban destination", "safa overseas wedding"]
  },
  {
    slug: "indian-groom-turban",
    label: "Indian Groom Turban",
    type: "international",
    serviceTitle: "Indian Groom Turban — International Service",
    serviceDesc: "The Indian groom's turban is his cultural crown — especially meaningful when worn at an international wedding. Ronak Dave specialises in creating authentic Indian groom turbans that honour tradition while photographing spectacularly in global settings.",
    intentSignal: "NRI groom or destination wedding — wants to honour Indian tradition abroad",
    contentAngle: "Cultural identity + pride in Indian heritage at an international wedding",
    faqs: [
      { q: "Why is an authentic Indian groom turban important at an international wedding?", a: "For NRI families, the groom's turban is the most powerful statement of Indian cultural identity at the wedding. It tells the world that despite living abroad, your roots and traditions are deeply honoured." },
      { q: "Can the turban be styled to match a western venue?", a: "Yes — Ronak Dave creates turbans that honour Indian tradition while photographing beautifully in international settings. The style can be contemporary while remaining authentically Indian." },
      { q: "What is the cost for international groom turban service?", a: "International groom turban service pricing depends on destination, travel requirements, and package size. Contact +91-9725295691 or USA: +1 (201) 238-9208 for a custom quote." }
    ],
    relatedKeywords: ["NRI groom turban", "Indian groom abroad", "turban for Indian wedding"]
  },
  {
    slug: "nri-wedding-safa",
    label: "NRI Wedding Safa",
    type: "international",
    serviceTitle: "NRI Wedding Safa Service",
    serviceDesc: "Dedicated NRI wedding safa service by Ronak Dave — understanding the unique needs of non-resident Indian families celebrating Indian weddings abroad. We bridge the gap between your global lifestyle and your Indian traditions.",
    intentSignal: "Self-identifies as NRI — specifically wants service for their diaspora wedding context",
    contentAngle: "Cultural bridge — understanding the NRI experience of maintaining traditions abroad",
    faqs: [
      { q: "Why do NRI families choose Ronak Dave for their wedding safa?", a: "NRI families trust Ronak Dave because he understands the cultural importance of getting the safa perfectly right when celebrating away from India. He has served NRI families in 15+ countries and understands the significance of maintaining authentic traditions abroad." },
      { q: "Can you coordinate with our wedding planner abroad?", a: "Yes — we work closely with international wedding planners and wedding coordinators. Contact us early so we can plan logistics together seamlessly." },
      { q: "Do you offer video consultation for NRI families before the wedding?", a: "Yes — we offer complimentary video consultation to discuss safa styles, fabrics, colours, and coordination with your outfit. This helps NRI families plan from abroad with full confidence." }
    ],
    relatedKeywords: ["Indian diaspora wedding", "abroad Indian wedding safa", "desi wedding abroad turban"]
  },
  {
    slug: "destination-wedding-turban",
    label: "Destination Wedding Turban",
    type: "international",
    serviceTitle: "Destination Wedding Turban Service",
    serviceDesc: "India's premier destination wedding turban service — Ronak Dave travels globally to bring authentic Indian safa artistry to destination weddings at the world's most spectacular venues, from Italian villas to Thai beach resorts.",
    intentSignal: "Planning a destination wedding and wants safa covered as part of it",
    contentAngle: "The complete destination wedding picture — safa is the final element that ties everything together",
    faqs: [
      { q: "What destinations does Ronak Dave travel to for weddings?", a: "UAE, UK, USA, Canada, Australia, Thailand, Bali, Singapore, Malaysia, Kenya, Mauritius, South Africa, Oman, Qatar, Turkey, Italy, France, Greece, and more. New destinations added regularly." },
      { q: "How does destination wedding turban booking work?", a: "Contact us 3–6 months ahead with your destination, date, and guest count. We will prepare a complete proposal including logistics, travel, accommodation, and safa service pricing." },
      { q: "What if my destination country has import restrictions on fabric?", a: "We have experience navigating customs for all major wedding destinations. Our team brings professional samples and coordinates with local suppliers to ensure nothing is delayed." }
    ],
    relatedKeywords: ["destination safa", "turban destination wedding", "international wedding turban India"]
  },
  {
    slug: "safawala-abroad",
    label: "Safawala Abroad",
    type: "international",
    serviceTitle: "Safawala Service — International",
    serviceDesc: "Safawala goes global — Ronak Dave's world-famous safa tying service is available internationally. If you want an authentic Indian safawala at your wedding abroad, there is only one name: Ronak Dave.",
    intentSignal: "Brand or category search from an international location",
    contentAngle: "The name 'safawala' itself carries cultural weight — and Ronak Dave IS the safawala",
    faqs: [
      { q: "Can I hire an Indian safawala for my wedding in [country]?", a: "Yes — Ronak Dave's team is available for international weddings. With 15+ countries already served and hundreds of international wedding clients, we have the logistics and experience to make your international safa experience seamless." },
      { q: "Is there a safawala in my country?", a: "While some local shops may offer turban services abroad, they rarely have authentic Indian safa training. Ronak Dave — India's world-record safawala — travels internationally to ensure your wedding gets the real expertise." },
      { q: "How much does it cost to hire a safawala internationally?", a: "International safawala service pricing includes the professional fee plus travel and accommodation. Contact us for a transparent, all-inclusive quote for your destination and guest count." }
    ],
    relatedKeywords: ["Indian turban tier abroad", "safawala overseas", "safa expert international"]
  },
  {
    slug: "safa-tying-service-international",
    label: "Safa Tying Service International",
    type: "international",
    serviceTitle: "International Safa Tying Service",
    serviceDesc: "Professional Indian safa tying service available internationally. Ronak Dave's certified team travels to your destination to tie safas for grooms and all baraat guests — ensuring every photograph from your international wedding includes perfectly tied, culturally authentic safas.",
    intentSignal: "Has the safa but needs professional tying at an international venue",
    contentAngle: "Professional tying skill + logistics capability = the complete solution",
    faqs: [
      { q: "We have our safa fabrics — can you just tie them at our international venue?", a: "Yes — bring your fabrics or source them locally; our professionals will tie them expertly in your chosen style. We work with customer-supplied fabrics regularly at international venues." },
      { q: "How many safas can your team tie at an international wedding?", a: "Our international team can tie safas for any size wedding. We deploy the right number of professionals based on your guest count — from intimate 20-person affairs to 500+ guest celebrations." },
      { q: "Do you coordinate with the venue's bridal party timing?", a: "Yes — we work with your wedding coordinator and venue staff to create a safa tying schedule that fits perfectly within your event's timeline." }
    ],
    relatedKeywords: ["turban tying international", "safa service abroad", "professional safa tier"]
  },
  {
    slug: "indian-barati-turban",
    label: "Indian Barati Turban",
    type: "international",
    serviceTitle: "Indian Barati Turban — International",
    serviceDesc: "Complete Indian barati turban service for international weddings — ensuring all male wedding guests are perfectly dressed in coordinated safas for the baraat procession, no matter where in the world your wedding takes place.",
    intentSignal: "Planning full baraat experience at an international venue",
    contentAngle: "The visual spectacle of a coordinated Indian baraat abroad — cultural pride amplified by location",
    faqs: [
      { q: "How do you manage barati turban service for guests flying from different countries?", a: "We coordinate with your wedding planner to set up a safa tying station at the hotel or venue. All guests get their turbans tied in one session before the baraat begins — regardless of where they flew in from." },
      { q: "Can guests bring their own safa fabrics from India?", a: "Yes — many guests prefer to bring their own fabrics as souvenirs. Our team ties both rental and customer-owned fabrics with equal care and expertise." },
      { q: "What colours work best for an international baraat setting?", a: "For international settings, we often recommend coordinated jewel tones — deep saffron, burgundy, navy, or emerald — that photograph beautifully in outdoor or large ballroom settings." }
    ],
    relatedKeywords: ["baraat abroad", "Indian wedding procession turban", "barati dress international"]
  },
  {
    slug: "rajasthani-turban-abroad",
    label: "Rajasthani Turban Abroad",
    type: "international",
    serviceTitle: "Authentic Rajasthani Turban — International",
    serviceDesc: "Authentic Rajasthani turban service for international weddings — for families who want the specific Rajasthani safa tradition even when celebrating outside India. Ronak Dave brings Rajasthan's royal turban heritage to weddings worldwide.",
    intentSignal: "Rajasthani family or fan of Rajasthani style planning a wedding abroad",
    contentAngle: "Specific Rajasthani identity + authenticity only available from the source",
    faqs: [
      { q: "Why choose a Rajasthani turban for an international wedding?", a: "The Rajasthani turban — with its bold colours, structured style, and royal association — is India's most visually dramatic wedding turban. It photographs extraordinarily well in international settings and makes a powerful statement of cultural identity." },
      { q: "Which Rajasthani turban style is best for international weddings?", a: "The Jodhpuri safa (structured, saffron) and the Bandhani safa (tie-dyed, colourful) are most popular for international weddings. They photograph beautifully against any backdrop — from European castles to Asian beaches." },
      { q: "Can you source authentic Rajasthani fabric for international weddings?", a: "Yes — we source authentic Rajasthani Bandhani, Leheriya, and silk brocade fabrics from Jodhpur and Jaipur for international weddings. We can ship fabrics ahead or bring them with our team." }
    ],
    relatedKeywords: ["Rajasthani safa abroad", "Jodhpuri turban overseas", "Bandhani safa destination wedding"]
  },
  {
    slug: "indian-pagdi-service",
    label: "Indian Pagdi Service",
    type: "international",
    serviceTitle: "Indian Pagdi Service — Worldwide",
    serviceDesc: "Ronak Dave's authentic Indian pagdi service available worldwide — connecting the Indian diaspora to their wedding turban traditions no matter which country they celebrate in. Hindi-belt, Gujarati, Rajasthani, and all Indian community pagdi styles available.",
    intentSignal: "Using 'pagdi' specifically — from Hindi-belt or Rajasthani background living abroad",
    contentAngle: "Linguistic + cultural identity connection — 'pagdi' users know what they want",
    faqs: [
      { q: "Do you offer pagdi service in [specific international country]?", a: "We serve 15+ countries. Contact us with your location — we will confirm availability and coordinate our team's travel to your wedding destination." },
      { q: "What is included in international pagdi service?", a: "Professional pagdi tying for groom and all guests who want one, coordination with your wedding timeline, accessories including kalgi on request, and touch-up service throughout the event." },
      { q: "How do I communicate my preferred pagdi style from abroad?", a: "We offer video consultations where we show you our complete style reference book. You can choose your exact pagdi style, colour, and fabric with us over video before we travel to your wedding." }
    ],
    relatedKeywords: ["pagdi service international", "Indian turban pagdi", "pagdi tying abroad"]
  },
]

// ── State data for hub pages ────────────────────────────────────────────────
export const INDIA_STATES = [
  { name: "Gujarat", slug: "gujarat", capital: "Gandhinagar", weddingNote: "Home of Ronak Dave and India's most prosperous Gujarati wedding tradition", keyCity: "Ahmedabad" },
  { name: "Rajasthan", slug: "rajasthan", capital: "Jaipur", weddingNote: "India's royal wedding capital — palace weddings, Rajput traditions, and the most photogenic safa styles", keyCity: "Jaipur" },
  { name: "Maharashtra", slug: "maharashtra", capital: "Mumbai", weddingNote: "Bollywood meets Maratha tradition — India's most diverse wedding state", keyCity: "Mumbai" },
  { name: "Delhi", slug: "delhi", capital: "New Delhi", weddingNote: "India's political and social capital — grand farmhouse weddings and five-star celebrations", keyCity: "New Delhi" },
  { name: "Uttar Pradesh", slug: "uttar-pradesh", capital: "Lucknow", weddingNote: "India's most populous state with the deepest Sanskrit wedding traditions", keyCity: "Lucknow" },
  { name: "Karnataka", slug: "karnataka", capital: "Bengaluru", weddingNote: "South India's tech capital — progressive weddings honouring Kannada traditions", keyCity: "Bengaluru" },
  { name: "Punjab", slug: "punjab", capital: "Chandigarh", weddingNote: "Bhangra baraat country — Punjabi Sikh weddings are India's most energetic", keyCity: "Amritsar" },
  { name: "Haryana", slug: "haryana", capital: "Chandigarh", weddingNote: "Jat warrior culture — safas carry deep pride in Haryanvi weddings", keyCity: "Gurugram" },
  { name: "Madhya Pradesh", slug: "madhya-pradesh", capital: "Bhopal", weddingNote: "Heart of India — Malwa, Bundeli, and Bagheli wedding traditions", keyCity: "Indore" },
  { name: "Telangana", slug: "telangana", capital: "Hyderabad", weddingNote: "Nizami grandeur meets Telugu business prosperity", keyCity: "Hyderabad" },
  { name: "Andhra Pradesh", slug: "andhra-pradesh", capital: "Amaravati", weddingNote: "Krishna and Godavari river valley — proud Telugu wedding traditions", keyCity: "Visakhapatnam" },
  { name: "Tamil Nadu", slug: "tamil-nadu", capital: "Chennai", weddingNote: "Ancient Dravidian wedding culture — temple-blessed celebrations", keyCity: "Chennai" },
  { name: "Kerala", slug: "kerala", capital: "Thiruvananthapuram", weddingNote: "God's Own Country — backwater weddings and Gulf NRI homecoming celebrations", keyCity: "Kochi" },
  { name: "Goa", slug: "goa", capital: "Panaji", weddingNote: "India's destination wedding paradise — beaches, villas, and Mandovi baraats", keyCity: "Panaji" },
  { name: "West Bengal", slug: "west-bengal", capital: "Kolkata", weddingNote: "Bengali intellectual culture meets Marwari business grandeur", keyCity: "Kolkata" },
  { name: "Uttarakhand", slug: "uttarakhand", capital: "Dehradun", weddingNote: "Himalayan foothills — military families and hill-station destination weddings", keyCity: "Dehradun" },
  { name: "Himachal Pradesh", slug: "himachal-pradesh", capital: "Shimla", weddingNote: "Snow-capped destination weddings in India's mountain paradise", keyCity: "Shimla" },
  { name: "Jammu & Kashmir", slug: "jammu-kashmir", capital: "Srinagar", weddingNote: "Dal Lake paradise — India's most ethereal destination wedding location", keyCity: "Srinagar" },
  { name: "Bihar", slug: "bihar", capital: "Patna", weddingNote: "Ancient Vedic tradition — the deepest ritual wedding culture in India", keyCity: "Patna" },
  { name: "Chhattisgarh", slug: "chhattisgarh", capital: "Raipur", weddingNote: "Mineral wealth drives spectacular weddings in central India", keyCity: "Raipur" },
  { name: "Odisha", slug: "odisha", capital: "Bhubaneswar", weddingNote: "Temple City traditions — Odishan art and culture in every wedding", keyCity: "Bhubaneswar" },
  { name: "Assam", slug: "assam", capital: "Dispur", weddingNote: "Brahmaputra valley — northeast India's cultural and commercial hub", keyCity: "Guwahati" },
  { name: "Jharkhand", slug: "jharkhand", capital: "Ranchi", weddingNote: "Steel belt prosperity — north Indian traditions in eastern India", keyCity: "Ranchi" },
  { name: "Chandigarh", slug: "chandigarh", capital: "Chandigarh", weddingNote: "India's most planned city — perfect weddings for India's elite", keyCity: "Chandigarh" },
  { name: "Kolhapur", slug: "kolhapur", capital: "Kolhapur", weddingNote: "Maharashtra's wrestling and heritage capital", keyCity: "Kolhapur" },
]

// ── Country data for international hub pages ────────────────────────────────
export const COUNTRIES = [
  { name: "UAE", slug: "uae", flag: "🇦🇪", diaspora: "3.5M+", hub: "Dubai", note: "World's largest Indian diaspora city" },
  { name: "United Kingdom", slug: "uk", flag: "🇬🇧", diaspora: "1.5M+", hub: "London", note: "Britain's South Asian community" },
  { name: "USA", slug: "usa", flag: "🇺🇸", diaspora: "4M+", hub: "New York", note: "Largest Indian diaspora globally" },
  { name: "Canada", slug: "canada", flag: "🇨🇦", diaspora: "1.8M+", hub: "Toronto", note: "Brampton — Punjab's overseas capital" },
  { name: "Australia", slug: "australia", flag: "🇦🇺", diaspora: "700K+", hub: "Sydney", note: "Growing Indian community with strong wedding culture" },
  { name: "Singapore", slug: "singapore", flag: "🇸🇬", diaspora: "350K+", hub: "Singapore City", note: "South Asian hub of Southeast Asia" },
  { name: "Malaysia", slug: "malaysia", flag: "🇲🇾", diaspora: "1.8M+", hub: "Kuala Lumpur", note: "Generationally established Indian community" },
  { name: "Thailand", slug: "thailand", flag: "🇹🇭", diaspora: "100K+", hub: "Bangkok", note: "India's top destination wedding country" },
  { name: "Indonesia", slug: "indonesia", flag: "🇮🇩", diaspora: "100K+", hub: "Bali", note: "Bali — India's favourite destination wedding island" },
  { name: "Qatar", slug: "qatar", flag: "🇶🇦", diaspora: "700K+", hub: "Doha", note: "Gulf Indian community" },
  { name: "Oman", slug: "oman", flag: "🇴🇲", diaspora: "650K+", hub: "Muscat", note: "Multi-generational Indian community" },
  { name: "Bahrain", slug: "bahrain", flag: "🇧🇭", diaspora: "350K+", hub: "Manama", note: "Island Indian community" },
  { name: "South Africa", slug: "south-africa", flag: "🇿🇦", diaspora: "1.2M+", hub: "Johannesburg", note: "Tamil and Gujarati community" },
  { name: "Mauritius", slug: "mauritius", flag: "🇲🇺", diaspora: "800K+", hub: "Grand Baie", note: "70% Indian origin — Indo-Mauritian culture" },
  { name: "Kenya", slug: "kenya", flag: "🇰🇪", diaspora: "100K+", hub: "Nairobi", note: "East African Gujarati community" },
  { name: "Italy", slug: "italy", flag: "🇮🇹", diaspora: "150K+", hub: "Lake Como", note: "Premier destination wedding country" },
  { name: "France", slug: "france", flag: "🇫🇷", diaspora: "200K+", hub: "Paris", note: "Paris — the romantic backdrop" },
  { name: "Greece", slug: "greece", flag: "🇬🇷", diaspora: "50K+", hub: "Santorini", note: "Santorini — most Instagrammed wedding backdrop" },
  { name: "Turkey", slug: "turkey", flag: "🇹🇷", diaspora: "50K+", hub: "Istanbul", note: "Cappadocia and Istanbul destination weddings" },
  { name: "Sri Lanka", slug: "sri-lanka", flag: "🇱🇰", diaspora: "200K+", hub: "Colombo", note: "Closest international destination for south Indian weddings" },
]

// ── Slug builder helpers ────────────────────────────────────────────────────

export function buildIndiaCityKeywordSlug(citySlug: string, keywordSlug: string): string {
  return `${citySlug}-${keywordSlug}`
}

export function buildIntlCityKeywordSlug(citySlug: string, keywordSlug: string): string {
  return `${citySlug}-${keywordSlug}`
}

export function buildStatSlug(stateSlug: string, keywordSlug: string): string {
  return `${stateSlug}-${keywordSlug}`
}

export function buildCountrySlug(countrySlug: string, keywordSlug: string): string {
  return `${countrySlug}-${keywordSlug}`
}

// All slugs for static generation
export const ALL_INDIA_KEYWORD_SLUGS = INDIA_KEYWORDS.map(k => k.slug)
export const ALL_INTL_KEYWORD_SLUGS = INTERNATIONAL_KEYWORDS.map(k => k.slug)
