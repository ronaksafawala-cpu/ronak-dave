// ─── International City Data — Rich metadata for global SEO pages ───────────

export interface IntlCityData {
  name: string
  slug: string
  country: string
  countrySlug: string
  countryCode: string
  region: "middle-east" | "europe" | "north-america" | "asia-pacific" | "africa" | "south-america"
  indianDiasporaSize: "very-large" | "large" | "medium" | "small"
  weddingContext: string
  indianCommunityNote: string
  landmarks: string[]
  venueTypes: string[]
  uniqueHook: string
  currency: string
  travelNote: string
}

export const INTERNATIONAL_CITIES: IntlCityData[] = [

  // ═══════════════════════════ UAE (5) ═══════════════════════════
  {
    name: "Dubai", slug: "dubai", country: "UAE", countrySlug: "uae", countryCode: "AE",
    region: "middle-east", indianDiasporaSize: "very-large",
    weddingContext: "Dubai is home to 3.5 million Indians — the largest Indian diaspora in any single city worldwide. Dubai weddings for Indian families are opulent affairs at Atlantis Palm, Burj Al Arab, and beachfront venues. Grooms arrive by supercars or dhow cruises, and a world-class safa completes the grandeur.",
    indianCommunityNote: "3.5M+ Indians in Dubai — Gujaratis, Punjabis, Malayalis and Keralites all celebrate with full Indian wedding traditions",
    landmarks: ["Burj Khalifa", "Palm Jumeirah", "Burj Al Arab"],
    venueTypes: ["Atlantis The Palm", "Palazzo Versace Dubai", "JW Marriott Marquis"],
    uniqueHook: "Dubai's Indian community of 3.5M trusts only the best — Ronak Dave has a dedicated team for Dubai weddings",
    currency: "AED", travelNote: "Ronak Dave's team flies to Dubai regularly — advance booking of 3 months recommended"
  },
  {
    name: "Abu Dhabi", slug: "abu-dhabi", country: "UAE", countrySlug: "uae", countryCode: "AE",
    region: "middle-east", indianDiasporaSize: "large",
    weddingContext: "Abu Dhabi, the UAE's oil-rich capital, hosts Indian weddings at the Emirates Palace and Louvre Abu Dhabi grounds for families who want royal grandeur. The Indian professional community here — doctors, engineers, executives — celebrates with refined elegance where every detail counts.",
    indianCommunityNote: "Large Indian professional community — Kerala, Gujarat, and Punjab families who settled for UAE's oil economy",
    landmarks: ["Sheikh Zayed Grand Mosque", "Emirates Palace", "Louvre Abu Dhabi"],
    venueTypes: ["Emirates Palace", "St. Regis Abu Dhabi", "Qasr Al Sarab Desert Resort"],
    uniqueHook: "Abu Dhabi's Indian professionals want excellence matching the UAE capital's standards — Ronak Dave delivers",
    currency: "AED", travelNote: "Served alongside Dubai — same team covers both UAE capitals"
  },
  {
    name: "Sharjah", slug: "sharjah", country: "UAE", countrySlug: "uae", countryCode: "AE",
    region: "middle-east", indianDiasporaSize: "large",
    weddingContext: "Sharjah's large conservative Indian community — particularly Keralite and Gujarati families — celebrates weddings with deep cultural roots. Sharjah's arts and cultural districts provide unique venues for families who want their wedding to reflect both tradition and the UAE's multicultural atmosphere.",
    indianCommunityNote: "Large Kerala, Gujarat and Uttar Pradesh Indian community settled in Sharjah for decades",
    landmarks: ["Sharjah Museum of Islamic Civilization", "Al Noor Mosque", "Al Qasba Canal"],
    venueTypes: ["Sharjah Palace Hotel", "Copthorne Hotel Sharjah"],
    uniqueHook: "Sharjah's conservative Indian community values tradition above all — Ronak Dave honours that with authentic craftsmanship",
    currency: "AED", travelNote: "Covered with Dubai/Abu Dhabi trips"
  },
  {
    name: "Ras Al Khaimah", slug: "ras-al-khaimah", country: "UAE", countrySlug: "uae", countryCode: "AE",
    region: "middle-east", indianDiasporaSize: "medium",
    weddingContext: "Ras Al Khaimah is emerging as the UAE's most spectacular destination wedding location with Jebel Jais mountain cable car and beach resorts. Indian families choosing RAK for their weddings want dramatic landscapes and world-class service — and they want the best safa artist to match.",
    indianCommunityNote: "Growing Indian community using RAK as a destination wedding venue for its dramatic landscapes",
    landmarks: ["Jebel Jais Mountain", "Al Wadi Desert", "RAK Corniche"],
    venueTypes: ["Waldorf Astoria Ras Al Khaimah", "Anantara Al Hamra Desert Resort"],
    uniqueHook: "RAK's mountain and desert wedding venues deserve a safa as dramatic as the landscape — Ronak Dave provides exactly that",
    currency: "AED", travelNote: "Covered within UAE itinerary"
  },
  {
    name: "Fujairah", slug: "fujairah", country: "UAE", countrySlug: "uae", countryCode: "AE",
    region: "middle-east", indianDiasporaSize: "medium",
    weddingContext: "Fujairah's east coast beaches and mountain backdrop create a unique UAE wedding experience away from city bustle. Indian families seeking intimate beach weddings with Hajar Mountain views choose Fujairah, where a perfectly tied safa photographs beautifully against the Gulf of Oman.",
    indianCommunityNote: "Growing Indian expat community in Fujairah's port and industrial sector",
    landmarks: ["Fujairah Fort", "Al Bidyah Mosque", "Fujairah Beach"],
    venueTypes: ["Fujairah Rotana Resort", "Radisson Blu Fujairah"],
    uniqueHook: "Fujairah's mountain-sea backdrop is Ronak Dave's most dramatic canvas for safa artistry",
    currency: "AED", travelNote: "Covered within UAE itinerary"
  },

  // ═══════════════════════════ THAILAND (6) ═══════════════════════════
  {
    name: "Bangkok", slug: "bangkok", country: "Thailand", countrySlug: "thailand", countryCode: "TH",
    region: "asia-pacific", indianDiasporaSize: "medium",
    weddingContext: "Bangkok has emerged as the top destination wedding city for Indian families who want Southeast Asian tropical luxury at accessible prices. Grand Palace backdrops, rooftop venues above the city skyline, and the warm Thai hospitality make Bangkok Indian weddings truly memorable.",
    indianCommunityNote: "Large Indian business community in Bangkok, plus thousands of Indian destination wedding families each year",
    landmarks: ["Grand Palace", "Wat Arun", "Chao Phraya River"],
    venueTypes: ["The Peninsula Bangkok", "Mandarin Oriental Bangkok", "Anantara Riverside"],
    uniqueHook: "Bangkok hosts thousands of Indian weddings annually — Ronak Dave's team ensures every baraat is perfectly dressed",
    currency: "THB", travelNote: "Regular service to Bangkok — Ronak Dave personally attends celebrity weddings here"
  },
  {
    name: "Phuket", slug: "phuket", country: "Thailand", countrySlug: "thailand", countryCode: "TH",
    region: "asia-pacific", indianDiasporaSize: "medium",
    weddingContext: "Phuket's white sand beaches, dramatic cliffs, and turquoise waters make it Asia's most photogenic wedding destination. Indian couples who choose Phuket want every element to be extraordinary — from the venue to the flowers to the groom's safa shining in the Thai sunshine.",
    indianCommunityNote: "Popular Indian destination wedding location — thousands of Indian weddings annually in Phuket's beach resorts",
    landmarks: ["Phang Nga Bay", "Big Buddha Phuket", "Patong Beach"],
    venueTypes: ["Trisara Phuket", "COMO Point Yamu", "Sala Phuket"],
    uniqueHook: "Phuket's beach weddings photograph beautifully — a Ronak Dave safa in this setting is breathtaking",
    currency: "THB", travelNote: "Ronak Dave's team travels to Phuket regularly — book 4 months in advance for peak season"
  },
  {
    name: "Koh Samui", slug: "koh-samui", country: "Thailand", countrySlug: "thailand", countryCode: "TH",
    region: "asia-pacific", indianDiasporaSize: "small",
    weddingContext: "Koh Samui's intimate island setting — coconut groves, infinity pools, and Gulf of Thailand sunsets — attracts Indian couples who want something more personal than Phuket. A small, exclusive island wedding where every guest notices every detail including the groom's perfectly tied safa.",
    indianCommunityNote: "Boutique destination weddings for affluent Indian couples seeking an intimate island experience",
    landmarks: ["Chaweng Beach", "Big Buddha Koh Samui", "Ang Thong Marine Park"],
    venueTypes: ["Six Senses Samui", "Conrad Koh Samui", "Four Seasons Koh Samui"],
    uniqueHook: "Koh Samui's intimate island setting deserves an intimate expert — Ronak Dave brings personal attention to every wedding",
    currency: "THB", travelNote: "Available for Koh Samui bookings — coordination through Bangkok team"
  },

  // ═══════════════════════════ INDONESIA — BALI (5) ═══════════════════════════
  {
    name: "Ubud", slug: "ubud-bali", country: "Indonesia", countrySlug: "indonesia", countryCode: "ID",
    region: "asia-pacific", indianDiasporaSize: "small",
    weddingContext: "Ubud — Bali's spiritual and cultural heart — is the world's most talked-about bohemian wedding destination. Indian couples who choose Ubud's rice terraces and jungle temples for their wedding are trend-setters who want their safa to match the artistic excellence of this culturally rich location.",
    indianCommunityNote: "Rapidly growing Indian destination wedding market in Bali — especially among Mumbai and Delhi elite",
    landmarks: ["Tegallalang Rice Terraces", "Tirta Empul Temple", "Sacred Monkey Forest"],
    venueTypes: ["Four Seasons Resort Bali at Sayan", "COMO Shambhala Estate", "Alila Ubud"],
    uniqueHook: "Ubud's world-class creative energy demands world-class safa artistry — Ronak Dave brings both",
    currency: "IDR", travelNote: "Bali is increasingly popular for Indian weddings — advance booking essential"
  },
  {
    name: "Seminyak", slug: "seminyak-bali", country: "Indonesia", countrySlug: "indonesia", countryCode: "ID",
    region: "asia-pacific", indianDiasporaSize: "small",
    weddingContext: "Seminyak's luxury villas, beach clubs, and sunset cocktail bars make it Bali's party wedding capital. Indian families who choose Seminyak want their celebration to be Instagram-perfect — the kind of wedding that sets trends on social media and requires every element to be photogenic.",
    indianCommunityNote: "Instagram-era Indian couples choosing Seminyak for its photogenic luxury villas and beaches",
    landmarks: ["Seminyak Beach", "Potato Head Beach Club", "Petitenget Temple"],
    venueTypes: ["Villa Shanti", "The Layar Villa", "Bvlgari Resort Bali"],
    uniqueHook: "Seminyak's Instagram-perfect weddings demand a photogenic safa — Ronak Dave's safas are always camera-ready",
    currency: "IDR", travelNote: "Available alongside Ubud for Bali wedding bookings"
  },

  // ═══════════════════════════ SINGAPORE (2) ═══════════════════════════
  {
    name: "Singapore", slug: "singapore", country: "Singapore", countrySlug: "singapore", countryCode: "SG",
    region: "asia-pacific", indianDiasporaSize: "large",
    weddingContext: "Singapore's 350,000-strong Indian community — Tamil, Punjabi, and Gujarati — celebrates weddings with the precision and ambition this island nation is famous for. Rooftop weddings at Marina Bay Sands, garden ceremonies at Gardens by the Bay, and five-star ballroom baraats make Singapore Indian weddings world-class events.",
    indianCommunityNote: "350,000 Indians in Singapore — Tamil professionals, Punjabi entrepreneurs, and Gujarati traders",
    landmarks: ["Marina Bay Sands", "Gardens by the Bay", "Sentosa Island"],
    venueTypes: ["Marina Bay Sands", "Capella Singapore", "Shangri-La Singapore"],
    uniqueHook: "Singapore's high standards-obsessed Indian community finds a perfect match in Ronak Dave's precision craftsmanship",
    currency: "SGD", travelNote: "Ronak Dave serves Singapore's Indian community — regular visits for peak wedding season"
  },

  // ═══════════════════════════ MALAYSIA (3) ═══════════════════════════
  {
    name: "Kuala Lumpur", slug: "kuala-lumpur", country: "Malaysia", countrySlug: "malaysia", countryCode: "MY",
    region: "asia-pacific", indianDiasporaSize: "large",
    weddingContext: "Kuala Lumpur's Tamil Indian community — 1.8M strong in Malaysia — and the growing North Indian business community celebrate weddings in the shadow of the Petronas Towers. KL's five-star hotels and the backdrop of the twin towers make for spectacular Indian wedding photography.",
    indianCommunityNote: "1.8M Indians in Malaysia — Tamil community is generationally established; North Indian business community growing",
    landmarks: ["Petronas Twin Towers", "Batu Caves", "KL Tower"],
    venueTypes: ["Mandarin Oriental KL", "The Ritz-Carlton Kuala Lumpur", "Grand Hyatt KL"],
    uniqueHook: "KL's Indian community is proud of its roots — Ronak Dave brings those roots to life in every safa tied here",
    currency: "MYR", travelNote: "Southeast Asia circuit — KL can be combined with Singapore bookings"
  },

  // ═══════════════════════════ UK (3) ═══════════════════════════
  {
    name: "London", slug: "london", country: "United Kingdom", countrySlug: "uk", countryCode: "GB",
    region: "europe", indianDiasporaSize: "very-large",
    weddingContext: "London is home to 1.5 million British Indians who maintain deep connections to their cultural roots. From Wembley Gurudwaras to five-star Mayfair hotels, British Indian weddings are extraordinary celebrations of dual heritage. The groom's safa is the most important cultural statement in a London British Asian wedding.",
    indianCommunityNote: "1.5M British Indians in London — Gujaratis in Wembley, Punjabis in Southall, Tamils in Tooting, Bengalis in Whitechapel",
    landmarks: ["Westminster Abbey area", "Tower Bridge", "Buckingham Palace neighbourhood"],
    venueTypes: ["The Savoy London", "Grosvenor House Park Lane", "Sopwell House Hertfordshire"],
    uniqueHook: "London's British Indian community is sophisticated and culturally proud — Ronak Dave's world records impress here",
    currency: "GBP", travelNote: "Ronak Dave visits London regularly — book 6 months ahead for summer wedding season"
  },
  {
    name: "Manchester", slug: "manchester", country: "United Kingdom", countrySlug: "uk", countryCode: "GB",
    region: "europe", indianDiasporaSize: "large",
    weddingContext: "Manchester has a large Gujarati and Punjabi community in the north of England, with weddings that are legendary for their warmth, food, and cultural pride. Northern British Indian families celebrate with the same grandeur as London but with Manchester's distinctive community spirit.",
    indianCommunityNote: "Large Gujarati community in Oldham and Rochdale; Punjabi community across Greater Manchester",
    landmarks: ["Old Trafford", "Manchester Town Hall", "Trafford Centre"],
    venueTypes: ["Manchester Marriott Victoria & Albert", "Radisson Blu Manchester", "Cottons Hotel & Spa"],
    uniqueHook: "Manchester's Indian community is as passionate about their weddings as they are about their football — Ronak Dave matches that passion",
    currency: "GBP", travelNote: "Covered in UK visits — North England weddings coordinated from London trip"
  },
  {
    name: "Edinburgh", slug: "edinburgh", country: "United Kingdom", countrySlug: "uk", countryCode: "GB",
    region: "europe", indianDiasporaSize: "medium",
    weddingContext: "Edinburgh's castle, cobbled streets, and dramatic highland backdrop offer Indian families a uniquely romantic European wedding experience. Scotland's Indian community — largely Punjabi and Gujarati families — celebrates with full baraat traditions set against this stunning Scottish landscape.",
    indianCommunityNote: "Scottish-Indian community celebrating with full baraat traditions in Edinburgh's historic venues",
    landmarks: ["Edinburgh Castle", "Arthur's Seat", "Royal Mile"],
    venueTypes: ["Balmoral Hotel Edinburgh", "Prestonfield House", "Dynamic Earth"],
    uniqueHook: "A Ronak Dave safa against Edinburgh Castle's medieval backdrop creates the most unforgettable wedding photograph",
    currency: "GBP", travelNote: "Scotland visits coordinated with UK schedule"
  },

  // ═══════════════════════════ USA (6) ═══════════════════════════
  {
    name: "New York", slug: "new-york", country: "USA", countrySlug: "usa", countryCode: "US",
    region: "north-america", indianDiasporaSize: "very-large",
    weddingContext: "New York City's Indian American community — 700,000 strong in the metro area — celebrates weddings that reflect both their American success and Indian roots. New Jersey's 'Little India' corridor and Manhattan's rooftop venues host Indian weddings where the bride wears couture lehengas and the groom wears a safa tied by the best.",
    indianCommunityNote: "700,000 Indians in NYC metro including New Jersey and Long Island — Gujaratis, Punjabis, Tamils, Bengalis",
    landmarks: ["Central Park", "Empire State Building", "Statue of Liberty"],
    venueTypes: ["The Plaza Hotel NYC", "Cipriani Wall Street", "Liberty House Restaurant NJ"],
    uniqueHook: "New York Indians are the most ambitious in the world — they choose Ronak Dave because they only accept the best",
    currency: "USD", travelNote: "USA: +1 (201) 238-9208 — Ronak Dave travels to USA for weddings regularly"
  },
  {
    name: "Los Angeles", slug: "los-angeles", country: "USA", countrySlug: "usa", countryCode: "US",
    region: "north-america", indianDiasporaSize: "large",
    weddingContext: "Los Angeles — the entertainment capital of the world — hosts Indian weddings for Bollywood's LA diaspora and Silicon Valley's vacation weddings. LA's Indian weddings happen against the Hollywood Hills, Malibu beach venues, and Beverly Hills ballrooms where Bollywood celebrities mingle with tech billionaires.",
    indianCommunityNote: "Large Indian community in LA — Gujaratis in Artesia, Punjabis in Fresno, tech professionals in Silicon Valley",
    landmarks: ["Hollywood Sign", "Malibu Beach", "Beverly Hills"],
    venueTypes: ["The Beverly Hills Hotel", "Terranea Resort Malibu", "Viceroy Santa Monica"],
    uniqueHook: "LA's Bollywood diaspora already knows Ronak Dave's work — he styled their favourite celebrities' weddings",
    currency: "USD", travelNote: "West Coast USA itinerary — LA and Bay Area covered in one trip"
  },
  {
    name: "San Francisco", slug: "san-francisco", country: "USA", countrySlug: "usa", countryCode: "US",
    region: "north-america", indianDiasporaSize: "large",
    weddingContext: "The San Francisco Bay Area has 600,000 Indians — the largest tech community outside India. Indian Google engineers, startup founders, and VC professionals celebrate weddings with Silicon Valley budgets and Indian cultural pride. A Ronak Dave safa in this community is both a cultural statement and a status symbol.",
    indianCommunityNote: "600,000 Indians in Bay Area — the highest concentration of Indian tech millionaires and billionaires in the world",
    landmarks: ["Golden Gate Bridge", "Alcatraz Island", "Napa Valley"],
    venueTypes: ["The Ritz-Carlton SF", "Four Seasons San Francisco", "Napa Valley wineries"],
    uniqueHook: "Silicon Valley Indians measure everything by data — Ronak Dave's world-record credentials are the ultimate data point",
    currency: "USD", travelNote: "Bay Area is Ronak Dave's most visited US location — major Indian wedding hub"
  },
  {
    name: "Miami", slug: "miami", country: "USA", countrySlug: "usa", countryCode: "US",
    region: "north-america", indianDiasporaSize: "medium",
    weddingContext: "Miami's South Beach venues, Art Deco hotels, and year-round sunshine attract Indian destination weddings from across the USA and India. Miami's Indian community — Gujarati entrepreneurs and Pan-American Indians — celebrates with tropical outdoor weddings where the groom's safa shines in the Florida sun.",
    indianCommunityNote: "Growing Indian community in South Florida — Gujarati entrepreneurs and tech professionals",
    landmarks: ["South Beach", "Wynwood Art District", "Vizcaya Museum"],
    venueTypes: ["The Faena Hotel Miami Beach", "1 Hotel South Beach", "Fontainebleau Miami Beach"],
    uniqueHook: "Miami's sun-soaked weddings deserve a safa as brilliant as the Florida sunshine — Ronak Dave delivers that brilliance",
    currency: "USD", travelNote: "East Coast USA circuit includes New York and Miami"
  },
  {
    name: "Toronto", slug: "toronto", country: "Canada", countrySlug: "canada", countryCode: "CA",
    region: "north-america", indianDiasporaSize: "very-large",
    weddingContext: "Toronto — with 600,000 Indians in the Greater Toronto Area — is North America's largest South Asian community hub. Brampton's 'Flower City' is India's largest diaspora community outside Asia. Toronto Indian weddings are multi-day events spread across gurudwaras, mandirs, and five-star ballrooms.",
    indianCommunityNote: "600,000 Indians in Greater Toronto Area — Brampton has the highest Punjabi Sikh concentration outside Punjab",
    landmarks: ["CN Tower", "Niagara Falls (nearby)", "Royal Ontario Museum"],
    venueTypes: ["The Ritz-Carlton Toronto", "Westin Harbour Castle", "Liberty Grand Entertainment"],
    uniqueHook: "Toronto's massive Punjabi Sikh community would recognise Ronak Dave's world-class craftsmanship instantly",
    currency: "CAD", travelNote: "Canada: Toronto and Vancouver both regularly served — book through Indian community contacts"
  },
  {
    name: "Vancouver", slug: "vancouver", country: "Canada", countrySlug: "canada", countryCode: "CA",
    region: "north-america", indianDiasporaSize: "large",
    weddingContext: "Vancouver's 100,000+ Indian community — primarily Punjabi Sikhs in Surrey and Abbotsford — celebrates some of Canada's most spectacular Indian weddings against the backdrop of the Coastal Mountains and Pacific Ocean. A Ronak Dave safa against Vancouver's mountain scenery is pure visual poetry.",
    indianCommunityNote: "100,000+ Indians in Greater Vancouver — primarily Punjabi Sikh community in Surrey, Abbotsford and Richmond",
    landmarks: ["Stanley Park", "Grouse Mountain", "Capilano Suspension Bridge"],
    venueTypes: ["Fairmont Pacific Rim", "The Westin Bayshore", "Sheraton Vancouver Wall Centre"],
    uniqueHook: "Vancouver's Punjabi Sikh community is deeply tradition-proud — Ronak Dave's Patiala safa expertise is perfect for them",
    currency: "CAD", travelNote: "Vancouver covered in Canada itinerary — coordinate with Toronto trip"
  },

  // ═══════════════════════════ AUSTRALIA (4) ═══════════════════════════
  {
    name: "Sydney", slug: "sydney", country: "Australia", countrySlug: "australia", countryCode: "AU",
    region: "asia-pacific", indianDiasporaSize: "large",
    weddingContext: "Sydney — with its iconic harbour and Opera House — is Australia's premier Indian destination wedding city. Sydney's 400,000+ Indian community celebrates weddings at Darling Harbour venues, Blue Mountains estates, and harbourside ballrooms where the Sydney Opera House glows in the background.",
    indianCommunityNote: "400,000+ Indians in Sydney — Punjabis in Parramatta, Gujaratis in Marsden Park, South Indians in Strathfield",
    landmarks: ["Sydney Opera House", "Harbour Bridge", "Bondi Beach"],
    venueTypes: ["Shangri-La Sydney", "Four Seasons Hotel Sydney", "Doltone House"],
    uniqueHook: "Sydney Harbour is the world's most beautiful wedding backdrop — pair it with Ronak Dave's world-class safa",
    currency: "AUD", travelNote: "Australia visits cover Sydney and Melbourne — book 6 months in advance"
  },
  {
    name: "Melbourne", slug: "melbourne", country: "Australia", countrySlug: "australia", countryCode: "AU",
    region: "asia-pacific", indianDiasporaSize: "large",
    weddingContext: "Melbourne — Australia's cultural capital — is home to the country's largest Gujarati community and has a thriving Indian wedding industry in its western suburbs. Melbourne Indians are well-established, culturally sophisticated, and celebrate weddings that blend Indian heritage with Australian lifestyle.",
    indianCommunityNote: "Large Gujarati community in Melbourne's western suburbs — established, prosperous, culturally active",
    landmarks: ["Federation Square", "Great Ocean Road (nearby)", "Royal Botanic Gardens"],
    venueTypes: ["Crown Towers Melbourne", "Park Hyatt Melbourne", "Leonda by the Yarra"],
    uniqueHook: "Melbourne's cultured Gujarati community preserves their heritage — Ronak Dave is their heritage connection for safa artistry",
    currency: "AUD", travelNote: "Melbourne and Sydney covered in same Australia visit"
  },

  // ═══════════════════════════ ITALY (6) ═══════════════════════════
  {
    name: "Lake Como", slug: "lake-como", country: "Italy", countrySlug: "italy", countryCode: "IT",
    region: "europe", indianDiasporaSize: "small",
    weddingContext: "Lake Como is the world's most glamorous wedding destination — where Bollywood stars, industrialists, and royalty choose to marry. Indian destination weddings at Villa Balbianello and Villa d'Este are legendary. A safa tied by Ronak Dave against Lake Como's azure waters and snow-capped Alps is an image that lasts eternity.",
    indianCommunityNote: "Top Bollywood celebrities and Indian industrialists choose Lake Como for their most exclusive destination weddings",
    landmarks: ["Villa Balbianello", "Villa d'Este", "Varenna village"],
    venueTypes: ["Villa d'Este", "Mandarin Oriental Lake Como", "Villa Balbianello"],
    uniqueHook: "Ronak Dave has personally attended Lake Como weddings — he understands what's needed to match this extraordinary setting",
    currency: "EUR", travelNote: "Europe circuit — Lake Como and Tuscany often combined for Italian destination weddings"
  },
  {
    name: "Tuscany", slug: "tuscany", country: "Italy", countrySlug: "italy", countryCode: "IT",
    region: "europe", indianDiasporaSize: "small",
    weddingContext: "Tuscany's rolling hills, cypress trees, and hilltop castles create a wedding backdrop that Indian families dream of. Indian destination weddings at Tuscan villas — where baraat processions wind through ancient vineyards — combine the romance of Italy with the colourful majesty of an Indian safa ceremony.",
    indianCommunityNote: "Indian ultra-HNI destination wedding destination — Tuscan villas hosting Indian weddings year-round",
    landmarks: ["Chianti vineyards", "Siena Cathedral", "San Gimignano towers"],
    venueTypes: ["Castello di Vicarello", "Villa le Fontanelle", "Belmond Villa San Michele"],
    uniqueHook: "Tuscan wedding photography with a Ronak Dave safa against cypress hills is the most shared Indian wedding image worldwide",
    currency: "EUR", travelNote: "Italy circuit — Tuscany, Rome, and Lake Como served in one European visit"
  },
  {
    name: "Florence", slug: "florence", country: "Italy", countrySlug: "italy", countryCode: "IT",
    region: "europe", indianDiasporaSize: "small",
    weddingContext: "Florence — the birthplace of the Renaissance — offers Indian couples a wedding backdrop of unparalleled artistic and architectural beauty. From ceremonies near the Duomo to receptions in Florentine palazzos, Indian weddings in Florence are celebrations of beauty where the groom's safa must equal the surroundings in magnificence.",
    indianCommunityNote: "Premium Indian destination wedding market — couples choosing Florence for its Renaissance art and architecture backdrop",
    landmarks: ["Duomo di Firenze", "Ponte Vecchio", "Uffizi Gallery"],
    venueTypes: ["Four Seasons Hotel Firenze", "Soprarno Suites", "Salvatore Ferragamo Museum"],
    uniqueHook: "In the city of Michelangelo, only the finest craftsmanship belongs — Ronak Dave brings that standard to Florence weddings",
    currency: "EUR", travelNote: "Italy circuit includes Florence, Rome, Tuscany, Lake Como"
  },

  // ═══════════════════════════ GREECE (4) ═══════════════════════════
  {
    name: "Santorini", slug: "santorini", country: "Greece", countrySlug: "greece", countryCode: "GR",
    region: "europe", indianDiasporaSize: "small",
    weddingContext: "Santorini's white-washed caldera cliffs, blue-domed churches, and Aegean sunsets are the world's most Instagrammed wedding backdrop. Indian couples who choose Santorini want every element — from the Oia sunset ceremony to the groom's safa — to be absolutely perfect for the photographs that will be shared millions of times.",
    indianCommunityNote: "Top destination wedding choice for Indian social media-era couples — Bollywood celebrities and influencers",
    landmarks: ["Oia Blue Domes", "Akrotiri ruins", "Red Beach Santorini"],
    venueTypes: ["Vedema Resort Santorini", "Canaves Oia", "Grace Santorini Hotel"],
    uniqueHook: "Santorini's blue and white perfection demands a safa that photographs equally beautifully — Ronak Dave provides that",
    currency: "EUR", travelNote: "Greece circuit — Santorini and Athens served in one visit"
  },

  // ═══════════════════════════ FRANCE (4) ═══════════════════════════
  {
    name: "Paris", slug: "paris", country: "France", countrySlug: "france", countryCode: "FR",
    region: "europe", indianDiasporaSize: "medium",
    weddingContext: "Paris — the City of Love — is the ultimate romantic destination wedding backdrop for Indian couples. French chateaux, the Eiffel Tower at night, and the Seine River provide a magical setting where the groom's safa glows against the city's golden lights. Indian weddings in Paris are always legendary events.",
    indianCommunityNote: "Large Indian community in Paris — Tamils in Saint-Denis, Gujaratis in business districts, Bollywood diaspora",
    landmarks: ["Eiffel Tower", "Chateau Versailles", "Musée du Louvre"],
    venueTypes: ["Chateau de Vaux-le-Vicomte", "Shangri-La Paris", "Chateau Bouffemont"],
    uniqueHook: "Paris is the world's romantic capital — Ronak Dave ensures the groom's safa matches Paris in grandeur and elegance",
    currency: "EUR", travelNote: "Europe circuit — Paris can be combined with London visits"
  },

  // ═══════════════════════════ TURKEY (4) ═══════════════════════════
  {
    name: "Istanbul", slug: "istanbul", country: "Turkey", countrySlug: "turkey", countryCode: "TR",
    region: "middle-east", indianDiasporaSize: "medium",
    weddingContext: "Istanbul — where East meets West — is an increasingly popular Indian destination wedding city. The Bosphorus, ancient mosques, and the Grand Bazaar create a cultural backdrop that resonates deeply with Indian families. A safa tied near the Hagia Sophia carries centuries of shared civilisational grandeur.",
    indianCommunityNote: "Growing Indian destination wedding market in Istanbul — attracted by the cultural similarities and scenic beauty",
    landmarks: ["Hagia Sophia", "Topkapi Palace", "Bosphorus Bridge"],
    venueTypes: ["Ciragan Palace Kempinski", "Four Seasons Bosphorus", "Mandarin Oriental Bosphorus"],
    uniqueHook: "Istanbul bridges continents — Ronak Dave bridges Indian tradition and Turkish grandeur in one magnificent safa",
    currency: "TRY", travelNote: "Middle East and Turkey circuit covered together"
  },
  {
    name: "Cappadocia", slug: "cappadocia", country: "Turkey", countrySlug: "turkey", countryCode: "TR",
    region: "middle-east", indianDiasporaSize: "small",
    weddingContext: "Cappadocia's hot air balloons, fairy chimneys, and cave hotels create the most surreal wedding backdrop on Earth. Indian couples who choose Cappadocia want their wedding to be utterly unique — and a Ronak Dave safa against the pink dawn sky with 100 balloons is the ultimate wedding photograph.",
    indianCommunityNote: "Ultra-exclusive Indian destination wedding location — for couples who want the world's most unique setting",
    landmarks: ["Goreme Open Air Museum", "Uchisar Castle", "Devrent Valley"],
    venueTypes: ["Museum Hotel Cappadocia", "Argos in Cappadocia", "Sacred House Cappadocia"],
    uniqueHook: "Hot air balloons at sunrise, ancient caves, and a Ronak Dave safa — Cappadocia weddings are in a class of their own",
    currency: "TRY", travelNote: "Turkey circuit — Istanbul and Cappadocia covered together"
  },

  // ═══════════════════════════ MALDIVES (4) ═══════════════════════════
  {
    name: "Malé", slug: "male-maldives", country: "Maldives", countrySlug: "maldives", countryCode: "MV",
    region: "asia-pacific", indianDiasporaSize: "small",
    weddingContext: "The Maldives' overwater villas, crystal lagoons, and coral reefs create a wedding backdrop of pure paradise. Indian couples choosing the Maldives for their wedding want intimate tropical luxury — a small celebration where every detail is extraordinary, including the groom's safa in the Indian Ocean breeze.",
    indianCommunityNote: "Indian couples — Bollywood celebrities and UHNIs — increasingly choosing Maldives for intimate luxury weddings",
    landmarks: ["Hulhumale Island", "North Malé Atoll", "Biyadhoo Island"],
    venueTypes: ["One&Only Reethi Rah", "Gili Lankanfushi", "Song Saa Private Island"],
    uniqueHook: "In the Maldives' paradise, even the smallest detail — the groom's safa — must be world-class",
    currency: "USD", travelNote: "Maldives availability on request — advance planning required"
  },

  // ═══════════════════════════ SOUTH AFRICA (2) ═══════════════════════════
  {
    name: "Cape Town", slug: "cape-town", country: "South Africa", countrySlug: "south-africa", countryCode: "ZA",
    region: "africa", indianDiasporaSize: "large",
    weddingContext: "Cape Town — where Table Mountain watches over the meeting of two oceans — is South Africa's premier Indian wedding city. South Africa's 1.2M Indian community — predominantly Tamil from KwaZulu-Natal — also uses Cape Town's spectacular winelands and Camps Bay venues for weddings that combine African grandeur with Indian tradition.",
    indianCommunityNote: "South Africa's 1.2M Indian community — Tamil, Hindi-speaking (Bihar/UP origin) and Gujarati — celebrating with Indian baraat traditions",
    landmarks: ["Table Mountain", "Cape of Good Hope", "V&A Waterfront"],
    venueTypes: ["Ellerman House", "Babylonstoren Wine Estate", "Cape Grace Hotel"],
    uniqueHook: "Cape Town's stunning backdrop against Two Oceans deserves a safa artist who has served two world records — Ronak Dave",
    currency: "ZAR", travelNote: "South Africa visits cover Cape Town, Johannesburg and Durban"
  },

  // ═══════════════════════════ KENYA (2) ═══════════════════════════
  {
    name: "Nairobi", slug: "nairobi", country: "Kenya", countrySlug: "kenya", countryCode: "KE",
    region: "africa", indianDiasporaSize: "medium",
    weddingContext: "Nairobi's Indian community — 100,000 strong, largely Gujarati families who came 3-4 generations ago — celebrates weddings with the same fervour as India, but with African safari backdrops. A Nairobi safari-lodge wedding with a Ronak Dave safa is one of the world's most unique cultural celebrations.",
    indianCommunityNote: "100,000 Gujarati-origin Indians in Kenya — third and fourth generation Kenyan Indians who maintain strong cultural ties",
    landmarks: ["Nairobi National Park", "Giraffe Centre", "Karen Blixen Museum"],
    venueTypes: ["Giraffe Manor Nairobi", "Hemingways Nairobi", "The Norfolk Hotel"],
    uniqueHook: "A safari sunset, Maasai warriors, and a Ronak Dave safa — only a Nairobi wedding can offer all three",
    currency: "KES", travelNote: "East Africa availability on request — connect through Indian community networks"
  },

  // ═══════════════════════════ MAURITIUS (2) ═══════════════════════════
  {
    name: "Grand Baie", slug: "grand-baie-mauritius", country: "Mauritius", countrySlug: "mauritius", countryCode: "MU",
    region: "africa", indianDiasporaSize: "large",
    weddingContext: "Mauritius — an island paradise with 70% Hindu population of Indian origin — is the ideal Indian destination wedding. Hindu families here celebrate weddings that blend Bhojpuri Indian culture with Mauritian tropical luxury. Beach ceremonies, lagoon photoshoots, and traditional safas create magic on this island.",
    indianCommunityNote: "70% of Mauritius is of Indian origin — Indo-Mauritian Hindu families with Bhojpuri cultural roots",
    landmarks: ["Chamarel Coloured Earths", "Le Morne Mountain", "Grand Baie Beach"],
    venueTypes: ["One&Only Le Saint Géran", "Royal Palm Beachcomber", "Heritage Le Telfair"],
    uniqueHook: "Mauritius's Indo-Mauritian families feel the deepest connection to Ronak Dave's Indian heritage safa artistry",
    currency: "MUR", travelNote: "Mauritius visits coordinated with South Africa trips"
  },

  // ═══════════════════════════ SRI LANKA (4) ═══════════════════════════
  {
    name: "Colombo", slug: "colombo", country: "Sri Lanka", countrySlug: "sri-lanka", countryCode: "LK",
    region: "asia-pacific", indianDiasporaSize: "medium",
    weddingContext: "Sri Lanka — the pearl of the Indian Ocean — is becoming South Asia's fastest-growing destination wedding location. Tamil Hindu and Sinhalese Buddhist families here often incorporate Indian safa traditions for the baraat. The Galle Face Hotel and Colombo's colonial venues create a stunning setting.",
    indianCommunityNote: "Sri Lankan Tamil Hindu families and Indian destination wedding families choosing Sri Lanka for its proximity and beauty",
    landmarks: ["Galle Face Green", "Temple of the Tooth Kandy", "Sigiriya Rock"],
    venueTypes: ["Galle Face Hotel Colombo", "Shangri-La Colombo", "Amangalla Galle"],
    uniqueHook: "Sri Lanka's proximity to India and its temple culture make it a natural fit for Ronak Dave's safa traditions",
    currency: "LKR", travelNote: "Sri Lanka is a short trip from south India — available for advanced bookings"
  },

  // ═══════════════════════════ VIETNAM (4) ═══════════════════════════
  {
    name: "Da Nang", slug: "da-nang", country: "Vietnam", countrySlug: "vietnam", countryCode: "VN",
    region: "asia-pacific", indianDiasporaSize: "small",
    weddingContext: "Da Nang's marble mountains, My Khe Beach, and the iconic Dragon Bridge are increasingly popular for Indian destination weddings. Indian couples who discover Da Nang are captivated by its combination of mountain and beach — a dramatic backdrop for a groom's safa ceremony unlike any other.",
    indianCommunityNote: "Emerging Indian destination wedding market in Vietnam — Da Nang attracting Mumbai and Delhi families",
    landmarks: ["Dragon Bridge Da Nang", "Marble Mountains", "Ba Na Hills"],
    venueTypes: ["InterContinental Da Nang", "Four Seasons Nam Hai", "Fusion Maia Da Nang"],
    uniqueHook: "Da Nang's Dragon Bridge and Marble Mountains are Vietnam's most spectacular backdrop — Ronak Dave's safa completes the picture",
    currency: "VND", travelNote: "Vietnam is an emerging market — available for special destination weddings"
  },

  // ═══════════════════════════ JAPAN (4) ═══════════════════════════
  {
    name: "Kyoto", slug: "kyoto", country: "Japan", countrySlug: "japan", countryCode: "JP",
    region: "asia-pacific", indianDiasporaSize: "small",
    weddingContext: "Kyoto — Japan's ancient imperial capital — is for Indian couples who appreciate that fine craftsmanship transcends cultural boundaries. Bamboo forest ceremonies, zen temple gardens, and cherry blossom backdrops give Indian destination weddings in Kyoto an otherworldly quality. A Ronak Dave safa in this setting creates art.",
    indianCommunityNote: "Ultra-premium Indian destination wedding — for couples who value craftsmanship and cultural excellence in their setting",
    landmarks: ["Arashiyama Bamboo Grove", "Fushimi Inari Shrine", "Kinkaku-ji Temple"],
    venueTypes: ["Aman Kyoto", "The Ritz-Carlton Kyoto", "Hiiragiya Ryokan"],
    uniqueHook: "In Kyoto — where craftsmen are national treasures — Ronak Dave's safa artistry finds its most appreciative audience",
    currency: "JPY", travelNote: "Japan bookings available for special destination weddings — rare but spectacular"
  },

  // ═══════════════════════════ QATAR (1) ═══════════════════════════
  {
    name: "Doha", slug: "doha", country: "Qatar", countrySlug: "qatar", countryCode: "QA",
    region: "middle-east", indianDiasporaSize: "large",
    weddingContext: "Doha's Indian community of 700,000 — the second largest diaspora in Qatar — celebrates weddings in the Qatar National Museum grounds, five-star desert resorts, and the spectacular Museum of Islamic Art. Doha weddings for Indian families are world-class events where the groom's safa must match the venue's grandeur.",
    indianCommunityNote: "700,000 Indians in Qatar — Kerala, UP, Rajasthan, Punjab workers and professionals",
    landmarks: ["Museum of Islamic Art", "Souq Waqif", "The Pearl Qatar"],
    venueTypes: ["Four Seasons Doha", "Mandarin Oriental Doha", "St. Regis Doha"],
    uniqueHook: "Doha's Indian community knows the value of excellence — Ronak Dave's world-record safa is their standard",
    currency: "QAR", travelNote: "Qatar served in Middle East circuit with UAE"
  },

  // ═══════════════════════════ GERMANY (3) ═══════════════════════════
  {
    name: "Frankfurt", slug: "frankfurt", country: "Germany", countrySlug: "germany", countryCode: "DE",
    region: "europe", indianDiasporaSize: "medium",
    weddingContext: "Frankfurt — Europe's financial capital and Germany's largest Indian community hub — hosts Indian weddings for IT professionals, bankers, and Gujarati business families who moved to Germany for work. Frankfurt's Indian Diwali is famous; Indian weddings here are growing community celebrations of cultural pride.",
    indianCommunityNote: "Germany's largest Indian community — 200,000 Indians across Germany with Frankfurt as the hub",
    landmarks: ["Frankfurt Main Cathedral", "Römer (Old Town)", "Rhine Valley (nearby)"],
    venueTypes: ["Frankfurter Hof", "Jumeirah Frankfurt", "Villa Kennedy Frankfurt"],
    uniqueHook: "Frankfurt's Indian IT professionals research everything before choosing — Ronak Dave's world records make the decision easy",
    currency: "EUR", travelNote: "Europe circuit covers Germany, France, UK in one visit"
  },

  // ═══════════════════════════ OMAN (2) ═══════════════════════════
  {
    name: "Muscat", slug: "muscat", country: "Oman", countrySlug: "oman", countryCode: "OM",
    region: "middle-east", indianDiasporaSize: "large",
    weddingContext: "Muscat — Oman's magnificent capital on the Gulf of Oman — hosts a large Indian community of 650,000. Oman's Indian families — Gujaratis, Keralites, and Punjabis who have worked here for generations — celebrate weddings that reflect both Omani elegance and Indian tradition at their finest.",
    indianCommunityNote: "650,000 Indians in Oman — Gujaratis, Keralites and Punjabis with multi-generational roots",
    landmarks: ["Sultan Qaboos Grand Mosque", "Mutrah Corniche", "Nizwa Fort"],
    venueTypes: ["Al Bustan Palace Ritz-Carlton", "Grand Hyatt Muscat", "Shangri-La Barr Al Jissah"],
    uniqueHook: "Oman's dignified culture values quality above spectacle — a Ronak Dave safa embodies both",
    currency: "OMR", travelNote: "Oman served in GCC/Middle East circuit"
  },

  // ═══════════════════════════ BAHRAIN ═══════════════════════════
  {
    name: "Manama", slug: "manama", country: "Bahrain", countrySlug: "bahrain", countryCode: "BH",
    region: "middle-east", indianDiasporaSize: "medium",
    weddingContext: "Bahrain's Indian community of 350,000 — largely Keralite professionals and Gujarati traders — celebrates weddings on this island kingdom with a mix of traditional Indian rituals and Middle Eastern hospitality. Bahrain's F1 circuit, Amwaj Islands, and five-star venues host spectacular Indian celebrations.",
    indianCommunityNote: "350,000 Indians in Bahrain — Kerala professionals and Gujarati traders with deep community roots",
    landmarks: ["Al-Fatih Grand Mosque", "Bahrain National Museum", "Al Dar Islands"],
    venueTypes: ["Four Seasons Hotel Bahrain Bay", "The Gulf Hotel Bahrain", "Jumeirah Royal Saray"],
    uniqueHook: "Bahrain's island Indian community values family and tradition — Ronak Dave's 40-year heritage resonates deeply",
    currency: "BHD", travelNote: "Bahrain served in Middle East GCC circuit"
  },
]

// ── Lookup helpers ──────────────────────────────────────────────────────────

export function getIntlCityBySlug(slug: string): IntlCityData | undefined {
  return INTERNATIONAL_CITIES.find(c => c.slug === slug)
}

export function getIntlCitiesByCountry(country: string): IntlCityData[] {
  return INTERNATIONAL_CITIES.filter(c => c.countrySlug === country.toLowerCase())
}

export function getIntlCitiesByRegion(region: IntlCityData["region"]): IntlCityData[] {
  return INTERNATIONAL_CITIES.filter(c => c.region === region)
}

export const ALL_INTL_CITY_SLUGS = INTERNATIONAL_CITIES.map(c => c.slug)

// All unique countries
export const ALL_COUNTRIES = [...new Set(INTERNATIONAL_CITIES.map(c => c.countrySlug))]
