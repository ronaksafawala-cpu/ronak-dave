/**
 * Unique content data for each keyword category
 * Each category has genuinely different descriptions, features, benefits, FAQs
 * No keyword swapping - truly unique prose per category
 */

// Gallery images available in /public/gallery/
const GALLERY_IMAGES = [
  "/gallery/1-6.webp", "/gallery/1-7.webp", "/gallery/2-6.webp", "/gallery/2-7.webp",
  "/gallery/3-5.webp", "/gallery/3-6.webp", "/gallery/4-3.webp", "/gallery/4-4.webp",
  "/gallery/5-3.webp", "/gallery/5-4.webp", "/gallery/6-3.webp", "/gallery/6-4.webp",
  "/gallery/7-3.webp", "/gallery/7-4.webp", "/gallery/8-3.webp", "/gallery/8-4.webp",
  "/gallery/9-3.webp", "/gallery/9-4.webp", "/gallery/10-3.webp", "/gallery/10-4.webp",
  "/gallery/11-3.webp", "/gallery/11-4.webp", "/gallery/12-4.webp", "/gallery/12-5.webp",
  "/gallery/13-3.webp", "/gallery/13-4.webp", "/gallery/14-3.webp", "/gallery/14-4.webp",
  "/gallery/15-2.webp", "/gallery/15-3.webp", "/gallery/16-3.webp", "/gallery/16-4.webp",
  "/gallery/17-3.webp", "/gallery/17-4.webp", "/gallery/18-3.webp", "/gallery/18-4.webp",
  "/gallery/19-3.webp", "/gallery/19-4.webp", "/gallery/20-3.webp", "/gallery/20-4.webp",
]

// Root-level images for hero/feature sections
export const HERO_IMAGES = [
  "/1-6.webp", "/11-3.webp", "/12-4.webp", "/12-5.webp",
  "/13-3.webp", "/14-3.webp", "/14-4.webp", "/15-2.webp",
  "/17-3.webp", "/18-4.webp", "/19-3.webp", "/20-3.webp",
  "/21-3.webp", "/23-3.webp", "/25-3.webp", "/27-3.webp",
  "/28-3.webp", "/33-3.webp", "/36-3.webp", "/37-3.webp",
  "/38-3.webp", "/4-3.webp", "/40-3.webp", "/5-3.webp",
  "/52-3.webp", "/54-3.webp", "/56-3.webp", "/59-3.webp",
  "/7-3.webp", "/8-3.webp", "/9-3.webp",
]

export function getGalleryImages(keyword: string): string[] {
  // Deterministic image selection based on keyword hash
  const hash = keyword.split('').reduce((a, c) => a + c.charCodeAt(0), 0)
  const startIdx = hash % Math.max(1, GALLERY_IMAGES.length - 6)
  return GALLERY_IMAGES.slice(startIdx, startIdx + 6)
}

export function getHeroImage(keyword: string): string {
  const hash = keyword.split('').reduce((a, c) => a + c.charCodeAt(0), 0)
  return HERO_IMAGES[hash % HERO_IMAGES.length]
}

interface KeywordCategory {
  id: string
  keywords: string[]
  heroTitle: string
  heroSubtitle: string
  aboutTitle: string
  aboutDescription: string
  uniqueParagraph: string
  craftProcess: string[]
  features: { title: string; description: string }[]
  benefits: string[]
  faqs: { question: string; answer: string }[]
  priceRange: string
  idealFor: string[]
  fabricTypes: string[]
}

const KEYWORD_CATEGORIES: KeywordCategory[] = [
  {
    id: "safa-general",
    keywords: ["safa", "safa design", "safa garments", "safa for men", "buy wedding safa", "safa shop"],
    heroTitle: "Handcrafted Royal Safas",
    heroSubtitle: "India's finest collection of wedding safas — from classic Rajasthani bandhej to contemporary designer drapes",
    aboutTitle: "The Art of the Safa — A Legacy Woven Through Generations",
    aboutDescription: "The safa is far more than a piece of cloth wrapped around the head. In Indian culture, it represents honour, pride, and the spirit of celebration. At Ronak Dave Safawala, each safa is hand-selected from the finest mills across Rajasthan and Gujarat. Our artisans use time-tested folding techniques passed down through three generations — techniques that create the crisp pleats, regal height, and perfectly balanced silhouette that no machine can replicate.",
    uniqueParagraph: "Every safa in our collection begins its journey in the textile havens of Jodhpur and Jaipur, where skilled weavers create fabrics using traditional loom methods. We personally inspect each bolt of cloth for colour vibrancy, thread count, and drape quality before it enters our workshop. Our master craftsmen then shape each safa by hand, ensuring that the turban holds its form through hours of celebration — from the baraat procession to the late-night reception.",
    craftProcess: [
      "Fabric sourced from heritage looms in Rajasthan and Gujarat",
      "Hand-dyed using colourfast techniques for lasting vibrancy",
      "Pre-shaped by master craftsmen for effortless on-site tying",
      "Quality-checked across 12 parameters before delivery",
      "Steamed and pressed for a flawless finish every time"
    ],
    features: [
      { title: "Heritage Fabrics", description: "We source silk, cotton-silk blends, and bandhani textiles from generational weavers who understand the soul of each fabric." },
      { title: "Hand-Tied Perfection", description: "Unlike clip-on or pre-made options, every safa is tied live by our trained team — giving you a bespoke fit and authentic regal look." },
      { title: "Colour Matching", description: "Send us a photo of your sherwani or outfit, and we'll match your safa to the exact shade — whether pastel mint or deep maroon." },
      { title: "12-Hour Hold Guarantee", description: "Our tying technique ensures your safa stays crisp and secure from baraat to reception — no retying needed." }
    ],
    benefits: [
      "Over 500 fabric options across silk, brocade, chanderi, and bandhani",
      "Custom colour-matching for any sherwani or wedding theme",
      "On-site professional tying at your doorstep or venue",
      "Sehra, kalgi, and moti accessories included in groom packages",
      "Bulk coordination for barati groups of any size",
      "Free trial session for groom 1 week before the event",
      "Pan-India doorstep delivery within 48 hours",
      "Emergency same-day service for last-minute bookings"
    ],
    faqs: [
      { question: "How many fabric options do you offer for a safa?", answer: "We carry over 500 fabric variants including pure silk, satin-silk blends, Banarasi brocade, Rajasthani bandhani, and imported velvet. Each season we add 50+ new patterns sourced from weavers across India." },
      { question: "Can you match the safa fabric to my sherwani?", answer: "Absolutely. Share a photo of your outfit or the fabric swatch, and our colour specialists will match your safa to the precise shade. We achieve 99% colour accuracy through our custom dyeing process." },
      { question: "What is the average price of a wedding safa?", answer: "Barati safas start at ₹500 per piece. Groom safas range from ₹2,000 for premium options to ₹50,000+ for bespoke designer creations with real zari and stone work. Bulk packages offer significant savings." },
      { question: "How far in advance should I book the safa service?", answer: "We recommend booking 3-4 weeks before the wedding for custom work. During peak season (November-March), earlier booking is advisable. Same-day emergency service is available based on team availability." },
      { question: "Do you ship safas for self-tying?", answer: "Yes, we offer ready-to-wear pre-shaped safas that ship across India. These come with a video tutorial and can be tied without professional help — perfect for NRI clients or intimate ceremonies." },
      { question: "What makes Ronak Dave's safas different from local shops?", answer: "Three things — authenticity, consistency, and scale. We personally train every stylist, use only colourfast heritage fabrics, and have served 4.5 lakh+ clients including the Ambani and Adani families. No local shop matches that breadth of expertise." }
    ],
    priceRange: "₹500 - ₹50,000+",
    idealFor: ["Wedding grooms", "Barati guests", "Mehndi functions", "Sangeet ceremonies", "Corporate events", "Festival celebrations"],
    fabricTypes: ["Pure Silk", "Brocade", "Bandhani", "Chanderi", "Satin-Silk", "Velvet", "Gota Patti", "Leheriya"]
  },
  {
    id: "turban",
    keywords: ["turban", "wedding turban", "wedding turban for groom", "wedding turban for barati", "mens wedding turban", "wedding turban for groom online", "ready made turban", "groom turban", "luxury wedding turban", "designer wedding turban", "wedding turban draping", "luxury wedding turban for groom", "royal groom turban for destination wedding", "destination wedding turban", "hand-tied turban for international wedding", "traditional indian wedding turban for groom", "indian dulha turban"],
    heroTitle: "Royal Wedding Turbans",
    heroSubtitle: "Crown your special day with turbans that blend centuries of Rajput heritage with modern luxury styling",
    aboutTitle: "The Turban — India's Crowning Glory, Perfected for Your Wedding",
    aboutDescription: "The turban holds a sacred place in Indian history — it was the crown of kings, the armour of warriors, and the mark of honour among nobles. At Ronak Dave Safawala, we preserve this regal tradition while infusing it with contemporary elegance. Our turbans are not mass-produced accessories; they are living artworks crafted through a meticulous process involving fabric selection, hand-pleating, structural wiring, and ornamental finishing.",
    uniqueParagraph: "What separates our wedding turbans from ordinary options is architectural precision. Each turban is engineered for the wearer's head size, face shape, and outfit style. We use an internal support framework developed by Ronak Dave himself — a technique that keeps the turban towering and symmetrical for 12+ hours without sagging. This innovation is why celebrities from Virat Kohli to Vicky Kaushal have trusted us for their most photographed moments.",
    craftProcess: [
      "Head measurement and face-shape analysis before design",
      "Internal support framework fitted for all-day hold",
      "Hand-pleated layers for depth and dimensional beauty",
      "Ornamental elements — kalgi, brooch, and feather — placed for balance",
      "Final steam-press and photo-readiness check"
    ],
    features: [
      { title: "Architectural Turban Design", description: "Each turban is structurally engineered with an internal framework that maintains its shape for 12+ hours — even in extreme heat or dancing." },
      { title: "Celebrity-Proven Styles", description: "The same turban techniques used for Virat Kohli, Vicky Kaushal, and Ranbir Kapoor weddings — now available for your celebration." },
      { title: "Face-Shape Customization", description: "Our stylists adjust the turban height, width, and angle to complement your face shape — round, oval, or angular — for the most flattering look." },
      { title: "International Shipping", description: "We deliver ready-to-wear turbans worldwide with video tutorials, so NRI grooms in the USA, UK, or Dubai can enjoy the same royal look." }
    ],
    benefits: [
      "Structural framework ensures 12+ hour hold without adjustment",
      "Custom-designed to complement your sherwani and body type",
      "Available in 30+ heritage styles including Rajputana, Mughal, and modern fusion",
      "Professional on-site draping by Ronak Dave's trained experts",
      "Matching turbans available for father-of-the-groom and best man",
      "Includes sehra, kalgi, brooch, and decorative pins",
      "Same-day rush service available for destination weddings",
      "Worldwide delivery for international ceremonies"
    ],
    faqs: [
      { question: "What is the difference between a turban and a safa?", answer: "A turban is the broader term for any cloth wrapped around the head. A safa specifically refers to the celebratory Indian turban worn at weddings and festivals. At Ronak Dave Safawala, we use both terms — but every piece gets the same premium craftsmanship." },
      { question: "Can the turban be customized for different wedding themes?", answer: "Yes — we create turbans for Rajasthani royal themes, Mughal-inspired settings, contemporary minimalist décor, beach destination weddings, and more. Share your wedding mood board and we'll design accordingly." },
      { question: "How long does it take to tie a wedding turban?", answer: "A groom's turban takes 15-20 minutes for our expert team. Barati turbans take 5-8 minutes each. For a group of 100, we deploy 4 stylists and complete all tying in about 2 hours." },
      { question: "Do you provide turbans for destination weddings outside India?", answer: "Absolutely. We've styled weddings in Dubai, Thailand, Bali, London, New York, and more. We either ship ready-to-wear turbans or send our team on-site — depending on your package." },
      { question: "What if the turban falls or loosens during the event?", answer: "Our structural framework makes this virtually impossible. However, we always station a stylist on-site for the entire event to handle any touch-ups. This is included in our groom packages at no extra cost." },
      { question: "Can I try the turban before the wedding day?", answer: "Yes, we offer a free trial session 5-7 days before the wedding. This lets us perfect the fit, confirm the style, and make any last-minute fabric adjustments." }
    ],
    priceRange: "₹2,000 - ₹75,000+",
    idealFor: ["Wedding grooms", "Destination weddings", "International weddings", "Celebrity-style ceremonies", "Royal themed events"],
    fabricTypes: ["Royal Silk", "Zari Brocade", "Banarasi Silk", "Imported Satin", "Velvet with Gold Thread", "Organza Overlay"]
  },
  {
    id: "pagdi",
    keywords: ["pagdi", "pagadi", "paghdi", "pagdi for wedding", "pagdi for groom", "pagdi for marriage", "dulha pagdi", "groom pagdi", "wedding pagdi", "premium pagdi with kalgi", "vadodara groom pagdi", "wedding pagdi for destination wedding", "wedding pagdi shop"],
    heroTitle: "Exquisite Wedding Pagdis",
    heroSubtitle: "The pagdi is the jewel of Indian groom styling — each one a masterpiece of heritage artistry and cultural pride",
    aboutTitle: "The Pagdi — Where Honour Meets Artistry in Every Fold",
    aboutDescription: "In Indian tradition, the pagdi is not merely headwear — it is a symbol of dignity bestowed upon a man during the most significant moments of his life. The wedding pagdi carries special weight: it marks the groom's transition into a new chapter, wrapped in the blessings of his family's legacy. At Ronak Dave Safawala, we understand this deep cultural significance, which is why every pagdi we create is treated as a ceremonial artifact rather than a fashion accessory.",
    uniqueParagraph: "Our pagdi-making process begins with understanding the family's regional traditions. A Rajasthani pagdi differs vastly from a Gujarati one — in shape, in fabric, in the number of folds, and in the way it sits on the head. We maintain a library of 200+ regional pagdi patterns, documented through years of working with families from every corner of India. When you book with us, we don't just tie cloth — we honour your heritage.",
    craftProcess: [
      "Consultation to understand family's regional pagdi tradition",
      "Selection from 200+ documented regional patterns",
      "Fabric chosen based on cultural significance and outfit coordination",
      "Multi-layered folding technique specific to the regional style",
      "Embellishment with kalgi, brooch, or traditional motifs as per custom"
    ],
    features: [
      { title: "200+ Regional Patterns", description: "From Rajasthani fan-fold to Gujarati dome-style to Marathi pheta — we know the exact folding technique for every region's pagdi tradition." },
      { title: "Cultural Authenticity", description: "We consult with families to ensure the pagdi matches their community's specific customs — the correct number of folds, the right fabric, the proper ornamentation." },
      { title: "Ceremonial Precision", description: "The pagdi is tied at the auspicious moment of the ceremony — our team coordinates with your pandit to ensure perfect timing." },
      { title: "Full Kalgi Set", description: "Every groom pagdi comes with a coordinated kalgi (ornamental crest), moti mala, and decorative pins — sourced from Jaipur's finest jewellers." }
    ],
    benefits: [
      "200+ regional patterns covering all Indian communities",
      "Cultural consultation to match your family's specific traditions",
      "Full kalgi, moti mala, and ornamental pin set included",
      "Ceremonially timed tying coordinated with your pandit",
      "Lightweight construction for comfort during long ceremonies",
      "Matching pagdis for father, uncle, and family elders",
      "Photo-ready finishing with perfect symmetry guaranteed",
      "Heritage documentation — we record your family's pagdi style for future events"
    ],
    faqs: [
      { question: "What is a pagdi and how is it different from a safa?", answer: "A pagdi (also spelled pagadi or paghdi) is the traditional Indian ceremonial turban specifically associated with honour and blessings. While 'safa' is the broader term for wedding turbans, 'pagdi' emphasises the ceremonial and cultural aspects — it's the turban tied during the formal rituals." },
      { question: "How do you ensure the pagdi matches our family tradition?", answer: "During booking, we conduct a brief consultation about your community, region, and family customs. We maintain a library of 200+ regional patterns and can also recreate a style from a family photo or description of what your grandfather or father wore." },
      { question: "Can the pagdi be made in my wedding's colour theme?", answer: "Yes, we custom-dye fabrics to match any colour palette. Whether your wedding theme is blush pink, royal blue, or gold, we'll create a pagdi that integrates seamlessly with your décor and attire." },
      { question: "What accessories come with the groom pagdi?", answer: "Our groom pagdi package includes a kalgi (ornamental crest), moti mala (pearl string), decorative brooch, and securing pins. Premium packages also include a sehra and matching pocket square." },
      { question: "Can you tie pagdis for all the male elders in the family?", answer: "Absolutely. In fact, this is one of our most popular requests. We offer coordinated elder pagdi packages where the father, grandfather, and uncles each receive a pagdi that respects their seniority while matching the wedding theme." },
      { question: "How long does a ceremonial pagdi tying take?", answer: "The groom's pagdi takes 15-20 minutes due to the intricate folding and embellishment. For elders, it's about 8-10 minutes each. We always arrive well ahead of the muhurat to ensure everything is perfect." }
    ],
    priceRange: "₹1,500 - ₹40,000+",
    idealFor: ["Wedding grooms", "Engagement ceremonies", "Pagdi rasam", "Family elders", "Religious ceremonies", "Tilak ceremonies"],
    fabricTypes: ["Raw Silk", "Tissue Silk", "Chanderi", "Maheshwari", "Kota Doria", "Zari Work"]
  },
  {
    id: "pagri",
    keywords: ["pagri", "wedding pagri", "dulha pagri", "groom pagri", "jodhpuri pagri", "marriage pagdi"],
    heroTitle: "Traditional Wedding Pagris",
    heroSubtitle: "The pagri symbolises the pride of Indian manhood — we tie each one with the reverence it deserves",
    aboutTitle: "The Pagri Tradition — Tying Pride, One Fold at a Time",
    aboutDescription: "The pagri occupies a singular position in Indian masculine identity. Historically, a man's pagri represented his clan, his status, and his word of honour. In Rajasthan, exchanging pagris was equivalent to a sworn oath. At weddings, the groom's pagri is the most photographed element of his attire — it frames his face, adds height and gravitas, and signals to the world that today, he stands as the centre of his family's joy. Ronak Dave Safawala takes this responsibility seriously.",
    uniqueParagraph: "Our approach to the pagri combines old-world craftsmanship with event-management precision. We don't simply arrive and tie — we plan. Our team studies venue lighting, photography angles, and the groom's outfit weeks in advance. The result is a pagri that doesn't just look good in person but photographs stunningly from every angle. This attention to the photographic outcome is something we pioneered in the industry, and it's why wedding photographers specifically request our team.",
    craftProcess: [
      "Pre-event venue and lighting study for photo-perfect results",
      "Fabric selected to photograph well under specific venue lighting",
      "Structure built to create the ideal silhouette for the groom's height",
      "Decorative elements positioned for photography-friendly angles",
      "On-site touch-up before each key photo moment (baraat, jaimala, pheras)"
    ],
    features: [
      { title: "Photography-Optimized Styling", description: "We study your venue's lighting and plan the pagri colour and shape to look stunning in photos — natural light, indoor, or twilight." },
      { title: "Height-Proportioned Design", description: "Our stylists build the pagri height proportional to the groom's stature — taller grooms get wider styles, while others get height-enhancing silhouettes." },
      { title: "All-Day Comfort", description: "We use lightweight fabrics and breathable underlayers so the pagri remains comfortable through 8+ hours of ceremonies and celebrations." },
      { title: "Touch-Up Service", description: "A dedicated stylist stays on-site throughout your event, ready to refresh the pagri before each key moment — baraat, jaimala, vidaai." }
    ],
    benefits: [
      "Photography-optimized design for Instagram-worthy results",
      "Proportioned to the groom's height and build for a flattering silhouette",
      "Lightweight breathable construction for all-day comfort",
      "Dedicated on-site stylist for touch-ups at key ceremony moments",
      "Quick-change capability for different ceremony looks",
      "Matching pagri styling for the groom's squad",
      "Weather-adaptive options for outdoor and destination weddings",
      "Post-event preservation packaging on request"
    ],
    faqs: [
      { question: "Is a pagri the same as a pagdi?", answer: "Yes, 'pagri' and 'pagdi' are regional variations of the same word. In Rajasthan and Haryana, 'pagri' is more common, while in Gujarat and Maharashtra, 'pagdi' or 'pagadi' is preferred. The styling techniques are the same." },
      { question: "Will the pagri be comfortable for the whole day?", answer: "Absolutely. We use breathable inner linings and lightweight fabrics that make the pagri comfortable even in summer heat. Our structural technique distributes weight evenly so there's no pressure on any one point." },
      { question: "Can you create a pagri that makes me look taller?", answer: "Yes, this is one of our specialities. By adjusting the pagri height, width, and angle, we can add 3-6 inches of visual height. We also use vertical patterns and strategic pleating to create a lengthening effect." },
      { question: "Do you provide pagri service for the wedding party?", answer: "Yes, we offer coordinated pagri packages for the groom's friends and groomsmen. These match the wedding theme while being slightly simpler than the groom's to maintain hierarchy." },
      { question: "How do you handle outdoor/destination wedding pagris?", answer: "For outdoor weddings, we use wind-resistant tying techniques and weather-appropriate fabrics. For beach weddings, we opt for lighter materials; for mountain venues, we use heavier, warmer fabrics. We adapt to your venue." },
      { question: "Can you save and replicate my pagri style for future family weddings?", answer: "Yes, we document every groom's pagri style — the patterns, folds, embellishments, and dimensions. When a family member has their wedding, we can create a matching or complementary design." }
    ],
    priceRange: "₹1,000 - ₹35,000+",
    idealFor: ["Grooms seeking photography-perfect results", "Outdoor weddings", "Destination events", "Groomsmen coordination"],
    fabricTypes: ["Lightweight Silk", "Cotton-Silk Blend", "Breathable Brocade", "Summer Chanderi", "Climate-Adaptive Fabrics"]
  },
  {
    id: "safa-pagdi",
    keywords: ["safa pagdi", "safa for groom", "groom safa", "groom safa bandhej", "royal wedding safa", "designer wedding safa", "traditional wedding safa", "custom wedding safa", "wedding safa for groom", "wedding safa bandhej", "safa design for barati", "professional safa tying", "wedding safa draping"],
    heroTitle: "Signature Groom Safa Collections",
    heroSubtitle: "The centrepiece of the groom's look — designed, crafted, and tied with world-record precision",
    aboutTitle: "The Groom's Safa — Commanding Every Eye in the Room",
    aboutDescription: "The groom's safa is the single most impactful element of Indian wedding styling. It transforms a well-dressed man into a maharaja. At Ronak Dave Safawala, we've perfected the art of the groom safa through 4.5 lakh+ weddings — each one teaching us something new about proportion, colour theory, and the psychology of powerful dressing. The result is a groom safa service that doesn't just meet expectations — it redefines them.",
    uniqueParagraph: "Our signature groom safa process begins 3-4 weeks before the event with a detailed style consultation. We analyse the groom's face structure, outfit palette, venue aesthetics, and personal style. Then our design team creates a custom mood board with 3-5 safa options. The chosen design is hand-crafted in our Vadodara atelier, steam-finished, and delivered for a trial fitting. On the wedding day, our lead stylist personally ties the safa — ensuring every fold, every pleat, and every embellishment is positioned for maximum impact.",
    craftProcess: [
      "Style consultation analysing face shape, outfit, and venue",
      "Custom mood board with 3-5 curated design options",
      "Hand-crafted in our Vadodara atelier with premium fabrics",
      "Trial fitting 5-7 days before the wedding",
      "Lead stylist personally ties and perfects on the wedding day"
    ],
    features: [
      { title: "Personal Style Consultation", description: "A 30-minute session where our design team analyses your face structure, outfit, and wedding theme to recommend the perfect safa style." },
      { title: "Atelier-Crafted Quality", description: "Each groom safa is hand-crafted in our workshop — not pulled from a generic inventory. Your safa is made specifically for you." },
      { title: "Trial Fitting Session", description: "We arrange a pre-wedding fitting so you can see and feel the safa before the big day. Adjustments are made at no extra cost." },
      { title: "Lead Stylist Service", description: "Your groom safa is tied by our most experienced stylist — the same team that has styled Ambani and Adani family weddings." }
    ],
    benefits: [
      "Personalised style consultation with mood board",
      "Atelier-crafted safa made exclusively for you",
      "Pre-wedding trial fitting included at no extra cost",
      "Lead stylist (10+ years experience) ties your safa personally",
      "Complete accessory set — sehra, kalgi, brooch, moti mala",
      "Coordinated barati safas in matching theme",
      "Photography coordination with your videographer",
      "Complimentary safa preservation box for keepsake"
    ],
    faqs: [
      { question: "How is the groom safa different from barati safas?", answer: "The groom safa is the hero piece — crafted with premium fabrics, intricate embellishments, and a taller, more elaborate structure. Barati safas are coordinated to complement the groom without overshadowing him, using simpler designs in matching colours." },
      { question: "What does the style consultation involve?", answer: "We discuss your wedding theme, analyse your outfit and jewellery, study the venue photos, and assess your face shape and height. Based on this, we create a mood board with 3-5 recommended safa designs for you to choose from." },
      { question: "Can the groom safa match my fiancée's lehenga?", answer: "Yes, and we highly recommend this for a coordinated royal look. Share the lehenga fabric or colour reference, and we'll create a safa in complementary tones — not an exact match, but a harmonious pairing." },
      { question: "Do you offer a preservation service?", answer: "Yes, after the wedding we offer a premium preservation box where your safa is professionally cleaned, shaped, and stored in an acid-free archival box — perfect as a family heirloom or memento." },
      { question: "What if I want to change the style on the wedding day?", answer: "We always bring 2-3 backup options to every event. If you want a last-minute change, our stylist can adapt on the spot. Flexibility is built into our service." },
      { question: "Is the bandhej (tie-dye) safa hand-made?", answer: "Every bandhej safa in our collection is handcrafted using the traditional tie-and-dye process from Kutch, Gujarat. No printing, no shortcuts — genuine artisan handiwork that you can see and feel in the fabric's texture." }
    ],
    priceRange: "₹5,000 - ₹75,000+",
    idealFor: ["Grooms who want a showstopping look", "Coordinated couple styling", "Heritage-themed weddings", "High-end celebrations"],
    fabricTypes: ["Designer Brocade", "Hand-Bandhej", "Zardozi Silk", "Kundan-Embellished", "Gold Tissue", "Printed Organza"]
  },
  {
    id: "jodhpuri",
    keywords: ["jodhpuri safa", "jodhpuri pagdi", "jodhpuri pagri", "jodhpuri safa design", "jodhpuri safa for groom", "jodhpuri safa for wedding"],
    heroTitle: "Authentic Jodhpuri Safas",
    heroSubtitle: "Straight from the royal courts of Marwar — Jodhpuri safas that carry the weight of 500 years of Rajput heritage",
    aboutTitle: "The Jodhpuri Safa — Born in the Courts of Rajput Royalty",
    aboutDescription: "The Jodhpuri safa is not a style — it's a statement of lineage. Originating in the royal courts of Jodhpur, this distinctive turban is characterised by its fan-like pleats, curved silhouette, and bold fabric choices. Historically, only Rajput nobility wore the Jodhpuri safa, and its specific fold pattern indicated the wearer's clan and rank. Today, it remains the most prestigious wedding turban style in India — and at Ronak Dave Safawala, we are its leading modern custodians.",
    uniqueParagraph: "Our Jodhpuri safa collection is sourced directly from the safa-making families of Jodhpur's old city — artisans whose ancestors created turbans for the Rathore dynasty. We maintain exclusive partnerships with three heritage weaving families who produce our signature leheriya and mothra patterns using century-old techniques. When you wear a Ronak Dave Jodhpuri safa, you're wearing fabric that carries the DNA of Rajputana craftsmanship.",
    craftProcess: [
      "Fabric sourced from heritage Jodhpuri weaving families",
      "Authentic leheriya and mothra patterns using traditional techniques",
      "Fan-fold construction requiring 7-12 meters of fabric per safa",
      "Curved silhouette shaped using the traditional Rathore method",
      "Finished with Rajput-style brooch and kalgi placement"
    ],
    features: [
      { title: "Heritage Weaver Partnerships", description: "Our fabrics come from Jodhpur weaving families whose ancestors served the Rathore royal court — authentic heritage, not factory reproductions." },
      { title: "Authentic Fan-Fold Technique", description: "The classic Jodhpuri safa uses 7-12 meters of fabric folded into signature fan pleats. Our team masters this labour-intensive technique." },
      { title: "Leheriya & Mothra Patterns", description: "We offer genuine hand-dyed leheriya (wave pattern) and mothra (tie-dye) — not printed imitations. Each piece is unique." },
      { title: "Rajput-Style Embellishments", description: "Authentic Rajput-era brooch styles, turra-kalgi sets, and sarpech ornaments sourced from Jodhpur's heritage jewellers." }
    ],
    benefits: [
      "Authentic Jodhpuri fabrics from heritage weaving families",
      "Genuine leheriya and mothra hand-dyed patterns",
      "7-12 meter fabric construction for full regal volume",
      "Rajput-style turra, kalgi, and sarpech included",
      "Expert tying by Jodhpuri-trained stylists",
      "Available in 50+ colour combinations",
      "Coordination with Jodhpuri bandh-gala outfit styling",
      "Cultural briefing on the significance of your safa style"
    ],
    faqs: [
      { question: "What makes a Jodhpuri safa different from other styles?", answer: "The Jodhpuri safa is distinguished by its fan-shaped pleats, curved profile, and substantial volume — typically requiring 7-12 meters of fabric. It originates from the Rathore Rajput tradition and carries a more dramatic, regal look compared to simpler styles." },
      { question: "How much fabric goes into a Jodhpuri safa?", answer: "A traditional Jodhpuri safa uses 7-12 meters of fabric depending on the style. The extra fabric creates the signature volume and fan-fold pattern that gives the Jodhpuri safa its commanding presence." },
      { question: "Can a Jodhpuri safa work with a non-Rajasthani outfit?", answer: "Absolutely. While it pairs naturally with Jodhpuri bandh-gala suits, the Jodhpuri safa also looks magnificent with Indo-Western outfits, plain sherwanis, and even tuxedos for a fusion look." },
      { question: "Is there a leheriya pattern for every colour?", answer: "Leheriya can be created in virtually any colour combination. The most popular are red-yellow (traditional), pink-orange (contemporary), and custom palettes matched to the wedding theme." },
      { question: "Do you have Jodhpuri-trained tying experts?", answer: "Yes, several of our senior stylists trained directly in Jodhpur under master safa-tyers. They understand the specific cultural nuances — the correct tail length, the precise angle of the peak, and the right placement of ornaments." },
      { question: "Can I pair a Jodhpuri safa with a modern wedding theme?", answer: "Definitely. Jodhpuri safas in pastel colours, metallic fabrics, or minimalist designs work beautifully with modern and destination wedding themes. We help you find the right balance of heritage and contemporary." }
    ],
    priceRange: "₹3,000 - ₹60,000+",
    idealFor: ["Rajasthani weddings", "Royal-themed celebrations", "Rajput families", "Destination weddings in Rajasthan", "Heritage venue events"],
    fabricTypes: ["Leheriya Hand-Dye", "Mothra Tie-Dye", "Jodhpuri Silk", "Marwar Brocade", "Gold Zari Border", "Mirror Work"]
  },
  {
    id: "rajasthani-rajput",
    keywords: ["rajasthani safa", "rajasthani wedding safa", "rajputi safa", "rajputi safa design", "rajput pagdi", "rajwadi pagdi", "rajwadi safa", "maharaja safa", "marwadi safa"],
    heroTitle: "Rajasthani & Rajput Royal Safas",
    heroSubtitle: "Embodying the warrior spirit and royal grandeur of Rajputana — safas fit for a maharaja",
    aboutTitle: "Rajasthani Safas — Carrying the Spirit of the Desert Kings",
    aboutDescription: "Rajasthan's turban tradition is perhaps the most visually spectacular in all of India. The vibrant colours of Rajasthani safas — saffron for bravery, white for mourning, pink for welcoming guests — form a visual language that has communicated social meaning for centuries. At Ronak Dave Safawala, we are deeply rooted in this tradition. Our founder's family heritage traces back through three generations of safa artisans who have served weddings across the Thar desert region.",
    uniqueParagraph: "Our Rajasthani collection stands apart because we don't just replicate styles — we collaborate with living masters from the region. We work with a 78-year-old master dyer in Sanganer who still creates natural-dye bandhani using ancient methods. We source extra-long 15-meter fabrics from a Barmer family that has woven turban cloth for five generations. And our leheriya comes from the last remaining artisan in Jaipur who still uses the original resist-dyeing technique — creating wave patterns so fine that each safa takes 2 days to produce.",
    craftProcess: [
      "15-metre extra-long fabrics from Barmer's heritage weavers",
      "Natural dye bandhani from Sanganer's master artisan",
      "Original resist-dyeing technique for leheriya (2-day process per piece)",
      "Region-specific folding — different for Mewar, Marwar, and Shekhawati styles",
      "Rajput ornamental finishing with sarpech and turra-kalgi"
    ],
    features: [
      { title: "Living Master Collaborations", description: "We work directly with the last generation of traditional dyers, weavers, and safa artisans in Rajasthan — preserving techniques that would otherwise disappear." },
      { title: "Region-Specific Accuracy", description: "Mewar, Marwar, Shekhawati, and Hadoti each have distinct safa traditions. We know the differences and execute each with cultural precision." },
      { title: "Natural Dye Heritage Fabrics", description: "Many of our premium Rajasthani safas use natural vegetable and mineral dyes — producing colours with a depth and warmth that chemical dyes cannot match." },
      { title: "15-Metre Grand Safas", description: "For the full royal experience, our grand safas use 15 metres of fabric — creating an imposing, towering presence worthy of a maharaja." }
    ],
    benefits: [
      "Collaboration with Rajasthan's last traditional safa artisans",
      "Region-specific styles — Mewar, Marwar, Shekhawati, Hadoti",
      "Natural dye options for heritage colour authenticity",
      "Extra-large 15-metre construction for grand celebrations",
      "Full royal accessory set — sarpech, turra-kalgi, mala, brooch",
      "Cultural significance briefing for the groom and family",
      "Matching rajputi safa coordination for all male guests",
      "Photography-optimized styling for palace and haveli venues"
    ],
    faqs: [
      { question: "What is the significance of safa colours in Rajasthan?", answer: "Saffron represents bravery and heroism. Red signifies celebration and marriage. Pink is the colour of hospitality. White denotes mourning. Yellow is for spring festivals. We help you choose colours that are both culturally appropriate and aesthetically beautiful." },
      { question: "What is the difference between Marwari and Rajputi safas?", answer: "Marwari safas (from the Jodhpur region) tend to have a larger fan-fold and more volume. Rajputi safas across regions vary — Mewar styles are rounder, Shekhawati styles are tighter, and Hadoti styles are flatter. We match your family's specific regional tradition." },
      { question: "Can I get a real bandhani safa, not a printed one?", answer: "Yes, and we strongly recommend it. Our bandhani safas are genuine tie-dye made by hand in Kutch and Jodhpur. You can tell the difference instantly — real bandhani has texture, depth, and slightly imperfect dots that give it character no print can match." },
      { question: "How big is the maharaja-style safa?", answer: "Our grand maharaja safa uses up to 15 metres of fabric, creating a turban that stands 12-15 inches tall. It's the most dramatic option and perfect for palace-venue weddings or couples who want maximum impact." },
      { question: "Do you provide rajputi safa for the entire barati?", answer: "Yes, we offer coordinated rajputi safa packages for groups from 25 to 500+ guests. Each barati gets a safa that matches the wedding theme while being simpler than the groom's." },
      { question: "Can the Rajasthani safa work for non-Rajasthani grooms?", answer: "Absolutely. The Rajasthani safa is universally admired for its beauty and grandeur. Many Gujarati, Punjabi, and South Indian grooms choose Rajasthani styles for their visual impact — and we make it work beautifully." }
    ],
    priceRange: "₹2,000 - ₹80,000+",
    idealFor: ["Palace weddings", "Royal-themed celebrations", "Rajput families", "Heritage venue events", "Grand baraat processions"],
    fabricTypes: ["Bandhani Hand-Dye", "Leheriya", "Gota Patti", "Zari Brocade", "Heritage Silk", "Mirror-Work Fabric"]
  },
  {
    id: "sehra",
    keywords: ["sehra", "groom sehra", "dulhe ka sehra", "sehra for groom", "dulha sehra", "sehra dulha", "sehrabandi", "sehra rental", "customized sehra for baraat"],
    heroTitle: "Exquisite Groom Sehras",
    heroSubtitle: "The veil of celebration that crowns the groom's joy — handcrafted with pearls, flowers, and precious ornaments",
    aboutTitle: "The Sehra — India's Most Iconic Groom Accessory",
    aboutDescription: "No image of an Indian groom is complete without the sehra — the ornamental veil that cascades from the turban, framing the groom's face with strands of pearls, flowers, or decorative threads. The sehra carries deep cultural significance: it wards off the evil eye, symbolises the veil between the groom's old life and new, and creates one of the most emotional moments of the wedding — the sehrabandi ceremony, where the mother ties the sehra on her son.",
    uniqueParagraph: "At Ronak Dave Safawala, our sehra collection goes far beyond the standard pearl strings available at wedding shops. We offer fresh flower sehras handcrafted on the morning of the wedding, vintage-style kundan and polki sehras, crystal-studded contemporary designs, and even personalised sehras with the couple's initials woven in. Our team includes a dedicated sehra artisan who has created over 10,000 sehras in her career — she understands how the weight, length, and density of the strands affects both the look and the groom's comfort.",
    craftProcess: [
      "Design consultation to match sehra style with safa and outfit",
      "Material selection — fresh flowers, pearls, kundan, crystal, or mixed",
      "Expert stringing with precise strand length for face framing",
      "Weight balancing to ensure comfort over long hours",
      "Same-day assembly for fresh flower sehras"
    ],
    features: [
      { title: "Fresh Flower Sehras", description: "Handcrafted on your wedding morning using rajnigandha, rose petals, or mogra — delivering intoxicating fragrance with breathtaking visual beauty." },
      { title: "Heritage Kundan Sehras", description: "Heirloom-quality sehras with genuine kundan, polki, or meenakari work — designed to be kept as a family treasure for generations." },
      { title: "Custom Personalisation", description: "Add the couple's initials, wedding date, or family motif woven into the sehra strands — a unique touch no one else offers." },
      { title: "Sehrabandi Ceremony Kit", description: "Complete kit including sehra, coconut, rice, and all items needed for the sehrabandi rasam — so your family doesn't need to arrange anything separately." }
    ],
    benefits: [
      "Fresh flower, pearl, kundan, crystal, and designer options available",
      "Personalised designs with couple initials or family motifs",
      "Sehrabandi ceremony kit included with all accessories",
      "Comfort-tested weight balancing for all-day wear",
      "Precise strand length for optimal face framing",
      "Same-day fresh flower assembly available",
      "Rental options for premium kundan and heritage designs",
      "Post-wedding cleaning and preservation service"
    ],
    faqs: [
      { question: "What types of sehras do you offer?", answer: "We offer five categories: fresh flower (rajnigandha, mogra, rose), pearl-string, kundan-polki heritage, crystal-contemporary, and mixed-material designer sehras. Each comes in multiple length and density options." },
      { question: "Can the sehra be rented instead of purchased?", answer: "Yes, our premium kundan and heritage sehras are available for rent. Rental includes the sehra, a secure carrying case, and insurance against minor damage. This is a cost-effective way to wear a ₹50,000+ design." },
      { question: "How long does a fresh flower sehra last?", answer: "Our fresh flower sehras are assembled on the morning of the wedding and comfortably last 8-10 hours. We use preservation techniques — including refrigerated transport and anti-wilt sprays — to maximise freshness." },
      { question: "What is the sehrabandi ceremony?", answer: "Sehrabandi is the emotional ritual where the groom's mother (or sister) ties the sehra onto his turban before the baraat. Our sehrabandi kit includes everything needed for this ceremony — the sehra, coconut, rice, and red thread." },
      { question: "Can the sehra be designed to match my fiancée's jewellery?", answer: "Yes, share photos of the bride's maang tikka, necklace, or jhumkas, and we'll create a sehra that echoes the same design language — creating a beautiful visual connection between the couple." },
      { question: "How heavy is the sehra? Will it cause discomfort?", answer: "Our pearl sehras weigh 200-400g, kundan designs 400-700g. We balance the weight distribution across the turban front so no single point bears pressure. Our 10,000+ sehra veteran ensures every piece is comfortable for all-day wear." }
    ],
    priceRange: "₹1,000 - ₹60,000+ (Rental from ₹500)",
    idealFor: ["Sehrabandi ceremony", "Baraat procession", "Groom styling", "Couple coordination", "Photography moments"],
    fabricTypes: ["Rajnigandha Flowers", "Freshwater Pearls", "Kundan-Polki", "Austrian Crystal", "Swarovski Elements", "Gold-Plated Wire"]
  },
  {
    id: "feta",
    keywords: ["groom feta", "wedding feta", "feta for groom", "marathi pheta", "heritage feta turban hire"],
    heroTitle: "Marathi Pheta & Wedding Fetas",
    heroSubtitle: "The pheta is Maharashtra's crown — a symbol of Maratha pride worn by warriors, leaders, and now, by you",
    aboutTitle: "The Pheta & Feta — Maharashtra's Warrior Crown for Modern Grooms",
    aboutDescription: "The Marathi pheta (also called feta) holds a place of unmatched honour in Maharashtrian culture. Historically worn by Chhatrapati Shivaji Maharaj and the Peshwa rulers, the pheta represents Maratha valour, leadership, and cultural identity. In wedding context, the pheta transforms the groom into a modern-day Maratha warrior — commanding, dignified, and deeply connected to his roots. At Ronak Dave Safawala, we bring this warrior heritage to life through authentic pheta craftsmanship.",
    uniqueParagraph: "Our pheta collection is informed by deep research into Maratha history. We offer five historically documented styles: the Puneri pagdi (compact and elegant), the Kolhapuri pheta (large and dramatic), the Peshwai style (tall and pointed), the Shiv Shahi style (inspired by Shivaji's era), and the Contemporary Marathi (modern adaptation). Each style carries distinct cultural meaning, and our team helps you choose the one that best represents your family's Maratha heritage.",
    craftProcess: [
      "Heritage style selection from 5 historically documented patterns",
      "Fabric sourced from Puneri and Kolhapuri weaving traditions",
      "Traditional folding technique specific to each Maratha substyle",
      "Careful placement — the pheta angle indicates respect and valour",
      "Paired with appropriate accessories — gold brooch, pearl cluster, or pendant"
    ],
    features: [
      { title: "5 Historic Styles", description: "Puneri pagdi, Kolhapuri pheta, Peshwai, Shiv Shahi, and Contemporary Marathi — each with distinct cultural significance and visual identity." },
      { title: "Maratha Heritage Expertise", description: "Our team includes specialists in Maharashtrian turban traditions who understand the cultural nuances that generic safa services miss." },
      { title: "Authentic Fabrics", description: "We source fabrics from Pune and Kolhapur's traditional mills — the same materials used in Maratha ceremonial traditions for generations." },
      { title: "Angle & Placement Knowledge", description: "The angle at which a pheta sits carries meaning in Maratha culture. Our stylists know precisely how to position it for the right message of respect and celebration." }
    ],
    benefits: [
      "5 historically accurate Maratha pheta styles to choose from",
      "Cultural consultation on the meaning and significance of each style",
      "Authentic fabrics from Pune and Kolhapur heritage mills",
      "Correct ceremonial angle and placement by trained specialists",
      "Matching phetas for the groom's family and male guests",
      "Compatible with traditional Maharashtrian wedding outfit styles",
      "Rental and purchase options available",
      "Perfect for Maharashtrian, Brahmin, Maratha, and Peshwa-themed weddings"
    ],
    faqs: [
      { question: "What is the difference between a pheta and a feta?", answer: "'Pheta' is the Marathi pronunciation, while 'feta' is the anglicised spelling. They refer to the same Maharashtrian headwear. At Ronak Dave Safawala, we use both terms interchangeably while maintaining authentic styling." },
      { question: "Which pheta style is appropriate for a Maharashtrian wedding?", answer: "It depends on your family tradition. Puneri pagdi is popular for Pune-based families, Kolhapuri pheta for western Maharashtra, and Peshwai for those wanting maximum grandeur. We help you choose based on your family's background." },
      { question: "Can a non-Maharashtrian groom wear a pheta?", answer: "Absolutely. The pheta's elegant, compact shape looks distinguished on grooms from all backgrounds. Many Gujarati and North Indian grooms choose the Puneri pagdi for its understated sophistication." },
      { question: "How is the pheta tied differently from a Rajasthani safa?", answer: "The pheta uses shorter fabric (3-5 metres vs 7-12) and is folded tighter with sharper angles. It sits closer to the head and has a pointed or rounded crown — very different from the fan-fold Rajasthani style." },
      { question: "Do you offer the gold-bordered Peshwai pheta?", answer: "Yes, our Peshwai collection includes phetas with genuine gold zari borders. These are our premium offerings and are popular for high-end Maharashtrian weddings where families want to honour the Peshwa heritage." },
      { question: "Can phetas be coordinated for the full mandap party?", answer: "Yes, we offer mandap group pheta packages. These include matching phetas for all male family members who sit on the mandap — father, grandfather, uncle, and brothers — creating a unified, impressive visual." }
    ],
    priceRange: "₹1,500 - ₹30,000+",
    idealFor: ["Maharashtrian weddings", "Bramhin ceremonies", "Peshwa-themed events", "Pune region celebrations", "Cultural pride ceremonies"],
    fabricTypes: ["Puneri Silk", "Kolhapuri Cotton", "Gold Zari Border", "Paithani-Inspired", "Pure White Cotton", "Heritage Blend"]
  },
  {
    id: "barati",
    keywords: ["safa for barati", "wedding safa for barati", "barati safa on rent", "barati safa online", "wedding turban for barati", "barati safa tying for international wedding"],
    heroTitle: "Premium Barati Safa Service",
    heroSubtitle: "Transform your baraat party into a coordinated royal procession — the grand entrance your celebration deserves",
    aboutTitle: "Barati Safas — Turning Your Guest List into a Royal Army",
    aboutDescription: "The baraat is the groom's grand entrance — and nothing makes a baraat more impressive than a coordinated group of sharply dressed men, each wearing a perfectly tied safa. At Ronak Dave Safawala, barati safa coordination is one of our core strengths. We've dressed processions of 25 to 500+ guests, and we've perfected the logistics of large-group safa tying to ensure every single guest looks polished and feels included in the celebration.",
    uniqueParagraph: "Our barati service is built on military-grade logistics planning. For a group of 100, we deploy 4 tying stations with 2 stylists each, plus 2 floating touch-up experts. We create a colour-coded system: groom's immediate family gets one tier of fabric, close friends get another, and extended guests get a third — maintaining hierarchy while keeping visual coordination. We've refined this system over 50,000+ barati safa events to eliminate waiting time and ensure every guest is styled in under 2 hours.",
    craftProcess: [
      "Group size assessment and logistics planning (stations, timing)",
      "Colour and tier system designed for visual hierarchy",
      "Bulk fabric sourcing with colour consistency verification",
      "Multi-station setup at your venue with dedicated stylist teams",
      "Rapid tying — 100 guests completed in under 2 hours"
    ],
    features: [
      { title: "Military-Grade Logistics", description: "Multi-station setup with 2 stylists per station and floating experts ensures zero waiting time — even for groups of 500+." },
      { title: "Visual Hierarchy System", description: "Tiered fabric quality and style create subtle but effective visual distinction between family, friends, and guests — adding structure to your baraat." },
      { title: "Colour Consistency", description: "We verify every batch of fabric for colour uniformity. Your 100 barati safas will be exactly the same shade — no mismatches." },
      { title: "Rapid Group Tying", description: "Our teams average 5 minutes per guest. 100 safas done in 2 hours. 200 in 3 hours. We plan our team size based on your group and timeline." }
    ],
    benefits: [
      "Coordinated safas for groups from 25 to 500+ guests",
      "Multi-station setup for rapid, no-wait tying service",
      "Tiered styling system for family hierarchy",
      "100% colour consistency across all barati safas",
      "Bulk pricing with significant per-head savings",
      "Rental option — return after the event, no storage needed",
      "Includes pins, clips, and basic accessories for each guest",
      "Clean-up and collection service after the event"
    ],
    faqs: [
      { question: "What is the cost per head for barati safas?", answer: "Barati safa pricing starts at ₹500 per head for standard options and goes up to ₹2,000+ for premium fabrics. Bulk packages of 50+ get significant discounts. The per-head cost also decreases with larger groups." },
      { question: "How long before the baraat should tying start?", answer: "We recommend starting 2-3 hours before the baraat for groups of 100+. For smaller groups (25-50), 1-1.5 hours is sufficient. Our team arrives well in advance to set up stations and prepare." },
      { question: "Can barati safas be rented instead of purchased?", answer: "Yes, rental is our most popular barati option. We provide fresh, cleaned safas, tie them on-site, and collect them after the event. This eliminates storage hassle and significantly reduces cost." },
      { question: "What if some guests arrive late for tying?", answer: "We always keep a floating stylist available until 30 minutes after the baraat starts. Late arrivals get their safa tied quickly without holding up the procession." },
      { question: "Can different groups of barati have different coloured safas?", answer: "Yes, we often create 2-3 colour tiers: one for immediate family, one for close friends, and one for extended guests. This adds visual structure and helps photographers identify key groups." },
      { question: "Do you handle barati safas for destination weddings?", answer: "Absolutely. We've handled barati groups at destination weddings in Udaipur, Goa, Jaipur, Dubai, Thailand, and more. We ship bulk safas to the venue and send our tying team — all logistics handled." }
    ],
    priceRange: "₹500 - ₹2,000+ per head",
    idealFor: ["Grand baraat processions", "Large wedding parties", "Destination wedding groups", "Family reunion celebrations"],
    fabricTypes: ["Premium Cotton-Silk", "Standard Silk", "Bandhani Print", "Solid Colour Silk", "Theme-Matched Fabric"]
  },
  {
    id: "rental",
    keywords: ["safa on rent near me", "safa on rent", "wedding safa on rent", "safa tying service", "hand-tied safa rental near me", "wedding safa for rent", "pagdi bandhne wala"],
    heroTitle: "Premium Safa Rental & Tying Service",
    heroSubtitle: "Royal wedding safas on rent — premium quality without the premium price tag, delivered to your doorstep",
    aboutTitle: "Safa Rental — Wear Royalty, Pay Smart",
    aboutDescription: "Not every family wants to purchase safas that will be worn once and stored forever. That's why Ronak Dave Safawala pioneered India's first large-scale premium safa rental service in 2012. Our rental model gives you access to the same luxurious fabrics, expert tying, and premium finish as our purchase options — but at a fraction of the cost. Every rental safa is professionally cleaned, steamed, and quality-checked before reaching you.",
    uniqueParagraph: "Our rental inventory contains over 5,000 safas across 200+ designs, refreshed every season with new patterns and fabrics. Each rental safa undergoes a 6-step restoration process between events: professional dry cleaning, stain inspection, fabric repair, steam pressing, re-shaping, and final quality check. The safa you receive looks and feels brand new — because we treat our rental collection with the same care as our custom pieces. This approach has made us India's largest safa rental network, serving 10,000+ weddings annually.",
    craftProcess: [
      "5,000+ safa inventory across 200+ designs, refreshed seasonally",
      "6-step restoration: clean, inspect, repair, steam, reshape, quality-check",
      "Doorstep delivery in protective garment bags",
      "Professional on-site tying by our trained team",
      "Post-event collection — we pick up everything"
    ],
    features: [
      { title: "5,000+ Safa Inventory", description: "India's largest rental collection — 200+ designs across all styles, colours, and regional traditions. You'll never be limited by availability." },
      { title: "6-Step Restoration", description: "Every returned safa goes through professional cleaning, inspection, repair, steaming, reshaping, and quality testing. What you receive is pristine." },
      { title: "Doorstep Delivery & Pickup", description: "We deliver rental safas to your venue in protective bags and collect everything after the event. Zero hassle for you." },
      { title: "Tying Included", description: "Every rental package includes professional on-site tying. You don't need to figure out how to tie it yourself — our team handles everything." }
    ],
    benefits: [
      "Premium quality at 40-60% lower cost than purchase",
      "5,000+ safas in 200+ designs available for rent",
      "Every piece professionally cleaned and restored before delivery",
      "Doorstep delivery and post-event pickup included",
      "Professional on-site tying by trained stylists",
      "No storage needed — return everything after the event",
      "Damage insurance available for worry-free use",
      "Last-minute availability for urgent bookings"
    ],
    faqs: [
      { question: "How much does safa rental cost?", answer: "Rental prices start at ₹300 per safa for standard options and go up to ₹5,000+ for premium designer pieces. Groom safa rental with tying service starts at ₹2,000. Group discounts are available for 25+ safas." },
      { question: "Are rental safas clean and hygienic?", answer: "Every rental safa undergoes a 6-step professional restoration. This includes dry cleaning, stain removal, fabric inspection, steam pressing, reshaping, and quality certification. We guarantee a fresh, clean safa every time." },
      { question: "How far in advance should I book rental safas?", answer: "1-2 weeks for standard bookings. During peak wedding season (November-February), 3-4 weeks is recommended. We do accept last-minute bookings based on availability." },
      { question: "What if a rental safa is damaged during the event?", answer: "Normal wear is expected and covered in the rental price. For accidental damage (stains, tears), we offer affordable damage insurance at booking time that covers full repair or replacement costs." },
      { question: "Do you deliver rental safas to my venue?", answer: "Yes, delivery and pickup at your doorstep or venue is included in every rental package within serviceable areas. For remote locations, a small logistics fee may apply." },
      { question: "Can I try rental safas before the wedding?", answer: "Yes, we offer trial sessions where you can try multiple rental options and choose your favourite. The trial can be arranged at our office or at your home for convenience." }
    ],
    priceRange: "₹300 - ₹5,000+ per piece (Rental)",
    idealFor: ["Budget-conscious families", "One-time occasions", "Large barati groups", "Out-of-town guests", "Quick bookings"],
    fabricTypes: ["Premium Silk (Rental Grade)", "Brocade", "Bandhani", "Designer Prints", "Solid Colour", "Festival Special"]
  },
  {
    id: "regional",
    keywords: ["gujarati pagdi", "punjabi turban", "dulhe ki pagdi"],
    heroTitle: "Regional Wedding Turbans",
    heroSubtitle: "Every Indian region has its own turban tradition — we master them all, from Gujarat to Punjab to Maharashtra",
    aboutTitle: "Regional Turbans — Honouring Every Indian Tradition",
    aboutDescription: "India's turban heritage is incredibly diverse. The Gujarati pagdi has a different shape, fabric, and cultural meaning than the Punjabi dastar, the Marathi pheta, or the Rajasthani safa. At Ronak Dave Safawala, we don't believe in one-size-fits-all. Our team of 50+ stylists includes specialists from Rajasthan, Gujarat, Maharashtra, Punjab, and South India — each bringing authentic regional knowledge to every event.",
    uniqueParagraph: "Our regional expertise stems from active cultural immersion. Every year, our senior stylists travel to different parts of India to document evolving turban traditions, meet local artisans, and source region-specific fabrics. This fieldwork has built us a living archive of Indian turban styles — from the tall Punjabi pagg to the compact Gujarati pagdi to the ornate Hyderabadi dastar. When a family from any region books us, we don't just tie a turban — we celebrate their specific heritage with knowledge and authenticity.",
    craftProcess: [
      "Regional tradition identification through family consultation",
      "Region-specific fabric sourced from local artisan networks",
      "Authentic folding technique as practised in the home region",
      "Culturally appropriate embellishments and ornaments",
      "Extended team with specialists from 8+ major regions"
    ],
    features: [
      { title: "Multi-Region Specialists", description: "Our team includes experts from 8+ Indian regions — ensuring authentic styling regardless of your family background." },
      { title: "Living Cultural Archive", description: "Annual fieldwork across India keeps our knowledge current. We document evolving styles and source the latest regional fabrics." },
      { title: "Family Heritage Consultation", description: "We speak with your family to understand specific customs — does your community fold left or right? How many pleats? We get it right." },
      { title: "Cross-Cultural Fusion", description: "For inter-regional marriages, we create fusion styles that respectfully combine elements from both families' turban traditions." }
    ],
    benefits: [
      "Specialists from 8+ major Indian regions on our team",
      "Region-specific fabric sourcing from local artisan networks",
      "Authentic folding techniques as practised in your home region",
      "Family heritage consultation to capture specific customs",
      "Cross-cultural fusion options for inter-regional marriages",
      "Knowledge of both Hindu and Muslim turban traditions",
      "Suitable for community-specific festivals and ceremonies",
      "Annual updated styles reflecting current regional trends"
    ],
    faqs: [
      { question: "Can you tie a Gujarati pagdi specifically?", answer: "Absolutely. Our Gujarati pagdi specialist has served 10,000+ Gujarati families. We know the specific round shape, the shorter fabric length, and the placement that distinguishes a Gujarati pagdi from other styles." },
      { question: "How is a Punjabi turban different for weddings?", answer: "The Punjabi wedding turban (pagg or dastar) is typically tied using a longer cloth, creating a fuller shape. It's often paired with a kalgi and sehra. We have Punjabi specialists who tie authentic Patiala, Amritsari, and Malwai styles." },
      { question: "Can you handle inter-regional wedding styling?", answer: "This is one of our favourites. For example, a Gujarati-Rajasthani wedding might feature a Gujarati pagdi for the bride's side and Rajasthani safas for the groom's. We create a harmonious visual theme that respects both families." },
      { question: "Do you cover South Indian turban traditions?", answer: "Yes, we offer traditional South Indian turbans including the mysore peta, Tamil silk veshti-style headwear, and Kerala-style mundu-based wraps. Our South India specialist travels for events across Karnataka, Tamil Nadu, and Kerala." },
      { question: "How do I know which regional style is right for my family?", answer: "During our consultation, we ask about your community, region of origin, and family customs. If you're unsure, we can show you examples from your region and help you identify the style your grandparents would recognise." },
      { question: "Can you tie turbans for Muslim wedding ceremonies?", answer: "Yes, we offer sehrabandi and turban services for Muslim weddings including the dastar, sehra, and juda styles. We understand the distinct requirements and handle them with complete respect and accuracy." }
    ],
    priceRange: "₹1,000 - ₹40,000+",
    idealFor: ["Gujarati families", "Punjabi weddings", "South Indian ceremonies", "Multi-cultural events", "NRI celebrations preserving heritage"],
    fabricTypes: ["Gujarati Silk", "Punjabi Voile", "South Silk", "Regional Cotton", "Community-Specific Heritage Fabrics"]
  },
  {
    id: "destination-international",
    keywords: ["premium wedding safa for international groom", "custom wedding turban for overseas weddings", "destination wedding turban"],
    heroTitle: "International & Destination Wedding Turbans",
    heroSubtitle: "From Udaipur palaces to Tuscany villas — royal Indian turban styling wherever your love story takes you",
    aboutTitle: "Destination Wedding Turbans — Global Luxury, Indian Soul",
    aboutDescription: "Destination weddings demand a different level of planning, execution, and adaptability. When the venue is a Rajasthani palace, a Bali beach resort, or a London estate, the turban service must seamlessly integrate with international-grade event management. At Ronak Dave Safawala, we've styled turbans at destination weddings across 15+ countries — and we understand the unique challenges of delivering Indian authenticity in global settings.",
    uniqueParagraph: "Our destination wedding service begins months in advance with a virtual consultation. We ship fabric samples internationally so the groom can feel the quality before committing. For the event itself, we either send our expert team with pre-prepared safas or ship ready-to-wear options with video tutorials for international tying. We've perfected customs clearance, international shipping, and on-ground logistics across the USA, UK, UAE, Thailand, Italy, and more — so your turban arrives on time, in perfect condition, regardless of the destination.",
    craftProcess: [
      "Virtual consultation with international fabric sample shipping",
      "Climate-adaptive fabric selection for the destination",
      "Customs-compliant international shipping with tracking",
      "On-ground team deployment or ready-to-wear delivery with tutorial",
      "Timezone-coordinated communication for seamless planning"
    ],
    features: [
      { title: "Global Logistics Expertise", description: "We've mastered customs clearance, international shipping, and time-zone coordination across 15+ countries. Your turbans arrive on time, guaranteed." },
      { title: "Climate-Adaptive Designs", description: "Beach wedding in Bali? Lightweight breathable fabrics. Winter wedding in London? Heavier silks with warmth. We adapt to every climate." },
      { title: "Virtual Planning", description: "Full planning done via video call — fabric samples shipped internationally, design approved remotely, and everything prepared before we arrive." },
      { title: "Bilingual Team", description: "Our international team communicates in English, Hindi, and Gujarati — bridging the gap between Indian families and international venue teams." }
    ],
    benefits: [
      "Service available across 15+ countries worldwide",
      "Virtual consultation with physical fabric sample shipping",
      "Climate-adaptive fabric selection for any destination",
      "Customs-compliant international shipping with tracking",
      "On-ground team deployment for premium packages",
      "Video tutorial kits for self-tying (budget option)",
      "Coordination with international wedding planners",
      "Multi-timezone availability for real-time communication"
    ],
    faqs: [
      { question: "Which countries do you serve?", answer: "We regularly serve weddings in the USA, UK, UAE, Canada, Australia, Thailand, Bali, Italy, Singapore, Malaysia, Kenya, and South Africa. We can also arrange service in other countries based on request." },
      { question: "How do you ship turbans internationally?", answer: "We use customs-compliant international courier services with full tracking. Packages are insured and shipped in protective garment bags. Delivery typically takes 5-10 business days depending on the destination." },
      { question: "Can your team travel to the destination?", answer: "Yes, for premium packages, we send a team of 2-4 stylists to your destination. We handle our own travel, visas, and accommodation. The team integrates with your wedding planner's schedule." },
      { question: "What if I can't afford to fly in your team?", answer: "We offer a ready-to-wear kit with pre-shaped safas, a personalised video tutorial, and remote support via video call. Many international clients use this option successfully." },
      { question: "How far in advance should I book for a destination wedding?", answer: "We recommend 2-3 months for international events. This allows time for design consultation, fabric sampling, production, international shipping, and any revisions." },
      { question: "Can you work with my destination wedding planner?", answer: "Absolutely. We regularly coordinate with international wedding planners and are experienced with the communication protocols, timelines, and logistics coordination that destination events require." }
    ],
    priceRange: "₹25,000 - ₹2,00,000+ (International packages)",
    idealFor: ["NRI grooms", "Destination weddings", "International celebrations", "Multi-country guest lists", "Beach/resort weddings"],
    fabricTypes: ["Climate-Adaptive Silk", "Travel-Resistant Brocade", "Wrinkle-Free Blends", "Lightweight Tropical", "Warm Heritage Silk"]
  }
]

// Default fallback category for keywords not in a specific group
const DEFAULT_CATEGORY: KeywordCategory = {
  id: "default",
  keywords: [],
  heroTitle: "Premium Wedding Turban Services",
  heroSubtitle: "India's most trusted wedding turban specialist — Guinness World Record holder with 40+ years of heritage craftsmanship",
  aboutTitle: "Why India's Top Families Trust Ronak Dave for Their Wedding Turbans",
  aboutDescription: "When India's most prominent families — the Ambanis, the Adanis, Bollywood's biggest stars — need wedding turban services, they call Ronak Dave. Known as 'The Turban Man of India,' Ronak Dave has built a legacy that combines three generations of artisan knowledge with modern event-management precision. Every turban that leaves our workshop carries the DNA of Indian heritage — yet is crafted with contemporary luxury standards.",
  uniqueParagraph: "What truly sets us apart is our obsessive attention to the details that others miss. We study the groom's outfit, the venue's lighting, the photographer's angles, and the family's cultural preferences before tying a single fold. This holistic approach — treating the turban as part of a complete visual narrative rather than an isolated accessory — is why our clients return for every family wedding and refer us to their entire social circle.",
  craftProcess: [
    "Comprehensive style consultation before every event",
    "Premium fabric selection from India's finest mills",
    "Hand-crafted preparation by trained artisans",
    "Professional on-site tying with all-day support",
    "Post-event feedback and style documentation for future reference"
  ],
  features: [
    { title: "3rd Generation Legacy", description: "40+ years of family expertise in turban artistry — knowledge that no new entrant can replicate. We've served through India's wedding evolution." },
    { title: "Guinness World Record", description: "Creator of the World's Largest Turban — a feat that demonstrates mastery at the highest level of turban craftsmanship." },
    { title: "Celebrity Portfolio", description: "Styled turbans for Virat Kohli, Vicky Kaushal, MS Dhoni, and 500+ celebrity events. The same artistry, now available for your celebration." },
    { title: "Pan-India + International", description: "200+ cities across India and 15+ countries worldwide. We reach wherever your celebration takes you." }
  ],
  benefits: [
    "3rd generation turban artisan family with 40+ years legacy",
    "Guinness World Record holder — World's Largest Turban",
    "Styled Ambani, Adani, and 500+ celebrity weddings",
    "200+ cities in India, 15+ countries internationally",
    "4.5 Lakh+ satisfied clients and growing",
    "Complete service: fabric, accessories, tying, touch-ups",
    "Bulk barati packages for groups of any size",
    "Post-event preservation and documentation"
  ],
  faqs: [
    { question: "Why should I choose Ronak Dave over local safa providers?", answer: "Three differentiators: pedigree (3rd generation, Guinness Record holder), scale (4.5 Lakh+ clients, 200+ cities), and precision (celebrity-grade styling for every client). Local providers cannot match our depth of experience or consistency of quality." },
    { question: "How do I start the booking process?", answer: "Call +91-9725295691 or WhatsApp +91-9725295691. We'll ask about your event date, city, guest count, and style preferences. You'll receive a customised quote within 24 hours." },
    { question: "What is included in the groom package?", answer: "The groom package includes: style consultation, custom safa selection, complete accessory set (sehra, kalgi, brooch, pins), on-site professional tying by our lead stylist, and all-day touch-up support." },
    { question: "Can you serve a wedding in a small town?", answer: "Yes, we serve 200+ cities including many tier-2 and tier-3 towns. If we don't have a team in your area, we deploy one from the nearest hub. Logistics are our strength." },
    { question: "What is your cancellation policy?", answer: "Full refund if cancelled 30+ days before the event. 50% refund for 15-30 days. Within 15 days, we offer rescheduling instead of refund. Wedding date changes are accommodated at no extra charge." },
    { question: "Do you offer video consultations?", answer: "Yes, we offer video calls for grooms who can't visit in person. We can show fabric samples, discuss styles, and plan the look — all remotely. This is especially useful for NRI clients." }
  ],
  priceRange: "₹500 - ₹2,00,000+",
  idealFor: ["All wedding types", "All Indian communities", "International celebrations", "Corporate events", "Festival occasions"],
  fabricTypes: ["Silk", "Brocade", "Bandhani", "Chanderi", "Velvet", "Cotton-Silk", "Designer"]
}

export function getKeywordContent(keywordName: string): KeywordCategory {
  const lowerKeyword = keywordName.toLowerCase()
  
  for (const category of KEYWORD_CATEGORIES) {
    if (category.keywords.includes(lowerKeyword)) {
      return category
    }
  }
  
  // Return default with the keyword name embedded
  return { ...DEFAULT_CATEGORY }
}

export { GALLERY_IMAGES, KEYWORD_CATEGORIES }
export type { KeywordCategory }
