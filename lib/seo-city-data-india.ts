// ─── India City Data — Rich metadata for unique SEO page generation ─────────
// Each city has: culture, venues, areas, language, hook, style — ensures
// no two pages share the same opening context or body content.

export interface IndiaCityData {
  name: string
  slug: string
  state: string
  stateSlug: string
  region: "north" | "south" | "east" | "west" | "central"
  tier: 1 | 2 | 3
  weddingCulture: string
  landmarks: string[]
  areas: string[]
  venues: string[]
  language: string
  community: string
  weddingStyle: string
  uniqueHook: string
  nearbyCity: string
  isDestination: boolean
  distanceFromVadodara: string
}

export const INDIA_CITIES: IndiaCityData[] = [

  // ═══════════════════════════ GUJARAT (20) ═══════════════════════════
  {
    name: "Vadodara", slug: "vadodara", state: "Gujarat", stateSlug: "gujarat",
    region: "west", tier: 1,
    weddingCulture: "Vadodara, also known as Baroda, is Ronak Dave's home city — where the Safawala legacy was born over 40 years ago. Baroda weddings are grand, culturally rich affairs blending Gujarati tradition with royal Maratha influences from the Gaekwad era.",
    landmarks: ["Laxmi Vilas Palace", "Sayaji Baug", "EME Temple"],
    areas: ["Alkapuri", "Fatehgunj", "Manjalpur"],
    venues: ["Laxmi Vilas Palace Grounds", "Sayaji Hotel Baroda"],
    language: "Gujarati", community: "Gujarati & Maratha",
    weddingStyle: "Royal Baroda-style with traditional Gujarati rituals and grand baraat processions",
    uniqueHook: "As Ronak Dave's home city, Vadodara grooms get first priority and the most personalised service",
    nearbyCity: "Ahmedabad", isDestination: false, distanceFromVadodara: "0 km"
  },
  {
    name: "Ahmedabad", slug: "ahmedabad", state: "Gujarat", stateSlug: "gujarat",
    region: "west", tier: 1,
    weddingCulture: "Ahmedabad is Gujarat's commercial capital known for lavish Gujarati weddings with full-night celebrations, Garba nights, and massive baraat processions through the old city gates. Patels and Banias throw some of India's most talked-about wedding celebrations here.",
    landmarks: ["Sabarmati Ashram", "Adalaj Stepwell", "Sidi Saiyyed Mosque"],
    areas: ["Satellite", "Prahlad Nagar", "Bodakdev"],
    venues: ["The Grand Bhagwati", "Courtyard by Marriott Ahmedabad"],
    language: "Gujarati", community: "Gujarati Patel & Vania",
    weddingStyle: "Grand Gujarati celebrations with Garba, Sangeet and spectacular baraat safas",
    uniqueHook: "Ahmedabad's Gujarati wedding scene demands the finest safas — Ronak Dave serves thousands here every season",
    nearbyCity: "Surat", isDestination: false, distanceFromVadodara: "113 km"
  },
  {
    name: "Surat", slug: "surat", state: "Gujarat", stateSlug: "gujarat",
    region: "west", tier: 1,
    weddingCulture: "Surat — India's diamond city — is synonymous with extravagant weddings. The city's wealthy diamond and textile trading families are known for multi-day celebrations, destination weddings, and no-expense-spared baraat arrangements.",
    landmarks: ["Surat Castle", "Dumas Beach", "Dutch Cemetery"],
    areas: ["Adajan", "Vesu", "Athwa"],
    venues: ["Lords Plaza Surat", "The Grand Wilshire"],
    language: "Gujarati", community: "Diamond Merchants & Textile Traders",
    weddingStyle: "Diamond-industry grandeur with extravagant multi-day wedding celebrations",
    uniqueHook: "Surat's diamond merchants trust Ronak Dave for their sons' most important moment — the safa tying ceremony",
    nearbyCity: "Vadodara", isDestination: false, distanceFromVadodara: "145 km"
  },
  {
    name: "Rajkot", slug: "rajkot", state: "Gujarat", stateSlug: "gujarat",
    region: "west", tier: 2,
    weddingCulture: "Rajkot, once the capital of Saurashtra, has a proud Kathi and Leuva Patel wedding tradition. Weddings here feature horse-drawn baraat processions, traditional Kathiyawadi music, and colourful pagdi ceremonies that connect families to their warrior heritage.",
    landmarks: ["Jubilee Garden", "Rajkumar College", "Watson Museum"],
    areas: ["Kalavad Road", "Kalawad", "Aji Industrial Area"],
    venues: ["Rajkot Race Course Grounds", "Hotel Regency"],
    language: "Gujarati / Kathiyawadi", community: "Kathi & Leuva Patel",
    weddingStyle: "Saurashtra-style warrior heritage weddings with traditional Kathiyawadi safas",
    uniqueHook: "Rajkot's Kathi community prizes the traditional pagdi above all — Ronak Dave honours that legacy",
    nearbyCity: "Ahmedabad", isDestination: false, distanceFromVadodara: "220 km"
  },
  {
    name: "Bhavnagar", slug: "bhavnagar", state: "Gujarat", stateSlug: "gujarat",
    region: "west", tier: 2,
    weddingCulture: "Bhavnagar's royal heritage from the Gohil Rajput dynasty influences its wedding traditions. Families here uphold the tradition of royal safa ceremonies before the baraat, with the groom dressed like a maharaja of old Saurashtra.",
    landmarks: ["Takhteshwar Temple", "Barton Library", "Gaurishankar Lake"],
    areas: ["Ghogha Circle", "Crescent", "Waghawadi Road"],
    venues: ["Nilambag Palace Hotel", "Haveli Bhavnagar"],
    language: "Gujarati", community: "Gohil Rajput & Gujarati",
    weddingStyle: "Royal Saurashtra style honouring Gohil Rajput heritage in every baraat",
    uniqueHook: "Bhavnagar's royal families have trusted Ronak Dave for heritage-accurate safa styles",
    nearbyCity: "Ahmedabad", isDestination: false, distanceFromVadodara: "198 km"
  },
  {
    name: "Jamnagar", slug: "jamnagar", state: "Gujarat", stateSlug: "gujarat",
    region: "west", tier: 2,
    weddingCulture: "Jamnagar, city of pearl and bandhani, weaves its textile heritage into weddings. Grooms from the Jadeja Rajput and business communities wear elaborate bandhani safas that are as much a fashion statement as a cultural symbol.",
    landmarks: ["Lakhota Palace", "Bala Hanuman Temple", "Marine National Park"],
    areas: ["Digvijay Plot", "Bedi Port", "Ranjit Sagar Road"],
    venues: ["Hotel President", "Aram Hotel Jamnagar"],
    language: "Gujarati / Kutchi", community: "Jadeja Rajput & Jain merchants",
    weddingStyle: "Bandhani-influenced celebrations with intricate fabric traditions",
    uniqueHook: "Jamnagar's Jadeja Rajput families trust Ronak Dave for safas that honour their warrior lineage",
    nearbyCity: "Rajkot", isDestination: false, distanceFromVadodara: "295 km"
  },
  {
    name: "Gandhinagar", slug: "gandhinagar", state: "Gujarat", stateSlug: "gujarat",
    region: "west", tier: 2,
    weddingCulture: "Gandhinagar, Gujarat's planned capital and garden city, hosts weddings for the state's administrative and political elite. Weddings here blend Gujarati tradition with the sophistication expected of IAS officers, government officials, and tech professionals.",
    landmarks: ["Akshardham Temple", "Sarita Udyan", "Gift City"],
    areas: ["Sector 7", "Sector 16", "Infocity"],
    venues: ["Gandhinagar Club", "Hotel Cambay Grand"],
    language: "Gujarati", community: "Government Officials & IT Professionals",
    weddingStyle: "Sophisticated capital-city weddings for Gujarat's elite administrative families",
    uniqueHook: "Gujarat's capital city hosts India's most discerning wedding guests — Ronak Dave ensures every safa is flawless",
    nearbyCity: "Ahmedabad", isDestination: false, distanceFromVadodara: "98 km"
  },
  {
    name: "Anand", slug: "anand", state: "Gujarat", stateSlug: "gujarat",
    region: "west", tier: 2,
    weddingCulture: "Anand — the milk capital of India and birthplace of Amul — has a close-knit Patidar community known for warm, family-oriented weddings. The Charotar Patels of Anand are among India's most successful NRI communities, bringing international wedding influences.",
    landmarks: ["Amul Dairy", "Sardar Patel University", "Vithal Udyognagar"],
    areas: ["Anand Town", "Petlad Road", "Borsad"],
    venues: ["Anand Agricultural University Guest House", "Hotel Nana"],
    language: "Gujarati / Charotari", community: "Charotar Patidar",
    weddingStyle: "Charotar Patidar traditions with strong NRI family participation",
    uniqueHook: "Anand's Patidar families — from Silicon Valley to London — rely on Ronak Dave for safas when they marry at home",
    nearbyCity: "Vadodara", isDestination: false, distanceFromVadodara: "42 km"
  },
  {
    name: "Bharuch", slug: "bharuch", state: "Gujarat", stateSlug: "gujarat",
    region: "west", tier: 2,
    weddingCulture: "Bharuch (Broach), one of India's oldest cities on the Narmada, hosts weddings rooted in ancient Anavil Brahmin and Narmada Patel traditions. River-side ceremonies and traditional safas tied in the Broach style distinguish these celebrations.",
    landmarks: ["Bharuch Fort", "Narmada Bridge", "Golden Bridge"],
    areas: ["Station Road", "Zadeshwar", "GIDC Ankleshwar"],
    venues: ["Hotel Ashirvad", "Circuit House Bharuch"],
    language: "Gujarati", community: "Anavil Brahmin & Narmada Patel",
    weddingStyle: "Ancient Narmada valley traditions with Anavil Brahmin ritual precision",
    uniqueHook: "Bharuch's Anavil Brahmins value ritual accuracy — Ronak Dave's 3rd generation expertise meets that standard",
    nearbyCity: "Vadodara", isDestination: false, distanceFromVadodara: "73 km"
  },
  {
    name: "Vapi", slug: "vapi", state: "Gujarat", stateSlug: "gujarat",
    region: "west", tier: 2,
    weddingCulture: "Vapi's industrial boom has created a wealthy business community that blends south Gujarat traditions with aspirational wedding styles. The city's chemical and manufacturing families often host grand destination weddings across Gujarat and abroad.",
    landmarks: ["Vapi Lake", "GIDC Vapi", "Daman border area"],
    areas: ["GIDC", "Chanod", "Koparli Road"],
    venues: ["Hotel Sea View Daman", "Vapi GIDC Club"],
    language: "Gujarati", community: "Industrial Business Families",
    weddingStyle: "Aspirational south Gujarat business-class weddings with grand baraat traditions",
    uniqueHook: "Vapi's wealthy industrial families trust Ronak Dave for the prestige a world-record safa artist brings",
    nearbyCity: "Surat", isDestination: false, distanceFromVadodara: "193 km"
  },
  {
    name: "Navsari", slug: "navsari", state: "Gujarat", stateSlug: "gujarat",
    region: "west", tier: 2,
    weddingCulture: "Navsari is the spiritual home of the Parsi (Zoroastrian) community in India. While Parsi weddings follow unique rituals, Navsari also has a strong Surat-region Gujarati tradition. The city's heritage and culture make every celebration historically significant.",
    landmarks: ["Navsari Atash Behram", "Dandi Beach", "Jamshedji Jeejeebhoy Library"],
    areas: ["Dudhia Talav", "Lunsikui", "Vijalpore"],
    venues: ["Navsari Parsi Panchayat Hall", "Hotel Sajan"],
    language: "Gujarati / Parsi Gujarati", community: "Parsi Zoroastrian & Gujarati",
    weddingStyle: "Blend of Parsi Navjote traditions with Gujarati safa ceremony elements",
    uniqueHook: "Navsari's multicultural families — Parsi and Gujarati alike — trust Ronak Dave to honour their unique ceremonial dress",
    nearbyCity: "Surat", isDestination: false, distanceFromVadodara: "118 km"
  },
  {
    name: "Junagadh", slug: "junagadh", state: "Gujarat", stateSlug: "gujarat",
    region: "west", tier: 2,
    weddingCulture: "Junagadh at the foot of Girnar Mountain has a deeply spiritual wedding culture rooted in the Navnath Sampraday and Kathiyawadi Koli traditions. Weddings often include a Girnar pilgrimage blessing, and the groom's safa is considered as sacred as the wedding vows.",
    landmarks: ["Girnar Mountain", "Uparkot Fort", "Mahabat Maqbara"],
    areas: ["Dhal Road", "Kalwa Chowk", "Ranavav Road"],
    venues: ["Relief Hotel Junagadh", "Garden Hotel"],
    language: "Gujarati / Kathiyawadi", community: "Kathiyawadi Koli & Hindu Brahmin",
    weddingStyle: "Girnar-blessed sacred weddings where the safa carries spiritual significance",
    uniqueHook: "Junagadh's spiritually-rooted families want a safa tied by the best — Ronak Dave's world record speaks volumes",
    nearbyCity: "Rajkot", isDestination: false, distanceFromVadodara: "270 km"
  },
  {
    name: "Bhuj", slug: "bhuj", state: "Gujarat", stateSlug: "gujarat",
    region: "west", tier: 2,
    weddingCulture: "Bhuj, the jewel of Kutch, has one of India's richest textile and craft traditions. Kutchi weddings are celebrated with extraordinary embroidered ghagharas, intricately crafted safas, and a community warmth that makes every baraat unforgettable.",
    landmarks: ["Aina Mahal", "Prag Mahal", "Bhuj Chhatardi"],
    areas: ["Hospital Road", "Deshalpur", "Madhapar"],
    venues: ["Hotel City Guest House", "The Rann Utsav tents"],
    language: "Kutchi / Gujarati", community: "Kutchi Bhatia & Kutchi Lohana",
    weddingStyle: "Kutchi craft-influenced celebrations with embroidered safa traditions passed through generations",
    uniqueHook: "Bhuj's Kutchi families are craft connoisseurs — they recognise and value Ronak Dave's world-class artistry",
    nearbyCity: "Rajkot", isDestination: false, distanceFromVadodara: "358 km"
  },
  {
    name: "Porbandar", slug: "porbandar", state: "Gujarat", stateSlug: "gujarat",
    region: "west", tier: 3,
    weddingCulture: "Porbandar, birthplace of Mahatma Gandhi, has a Sudama devotional tradition woven into its wedding culture. Mer fishing community and Brahmin families here celebrate with deep-rooted rituals where the safa tying holds immense ceremonial importance.",
    landmarks: ["Kirti Mandir (Gandhi's birthplace)", "Sudama Temple", "Porbandar Beach"],
    areas: ["Chowpatty", "Mochi Bazar", "Chhaya"],
    venues: ["Swagat Hotel Porbandar", "Raj Guest House"],
    language: "Gujarati / Meri", community: "Mer & Brahmin communities",
    weddingStyle: "Sudama-tradition weddings with deeply spiritual safa ceremonies",
    uniqueHook: "In the land of Gandhi and Sudama, Ronak Dave brings the dignity of world-class safa artistry",
    nearbyCity: "Rajkot", isDestination: false, distanceFromVadodara: "340 km"
  },
  {
    name: "Somnath", slug: "somnath", state: "Gujarat", stateSlug: "gujarat",
    region: "west", tier: 3,
    weddingCulture: "Somnath, where one of India's most sacred Jyotirlinga temples stands, is a premier destination wedding location. Couples travel from across India to marry in the shadow of the Somnath Temple, making the safa ceremony here a spiritually profound moment.",
    landmarks: ["Somnath Temple", "Bhalka Tirth", "Somnath Beach"],
    areas: ["Prabhas Patan", "Veraval Road", "Triveni Ghat"],
    venues: ["Somnath Trust Guest House", "Hotel Shiva"],
    language: "Gujarati", community: "Hindu devotee families from all over India",
    weddingStyle: "Sacred Somnath Jyotirlinga blessings combined with traditional destination wedding celebrations",
    uniqueHook: "A wedding by the Somnath Temple deserves a safa tied by India's No.1 — Ronak Dave travels here for special occasions",
    nearbyCity: "Junagadh", isDestination: true, distanceFromVadodara: "322 km"
  },
  {
    name: "Dwarka", slug: "dwarka", state: "Gujarat", stateSlug: "gujarat",
    region: "west", tier: 3,
    weddingCulture: "Dwarka, one of the four sacred Dhams of Hinduism, draws wedding couples seeking blessings from Dwarkadhish. Vaishnav Hindu families consider it the most auspicious location for a wedding, and the groom's safa is blessed at the Dwarkadhish temple.",
    landmarks: ["Dwarkadhish Temple", "Bet Dwarka", "Nageshwar Jyotirlinga"],
    areas: ["Temple Road", "Gomti Ghat", "Rukmini Devi Temple area"],
    venues: ["Hotel Darbar", "Toran Guest House"],
    language: "Gujarati / Sanskrit (religious ceremonies)", community: "Vaishnav Hindu families",
    weddingStyle: "Dwarkadhish-blessed royal weddings seeking divine sanction at India's sacred Dham",
    uniqueHook: "At Dwarka — abode of Lord Krishna — Ronak Dave creates safas worthy of the divine occasion",
    nearbyCity: "Jamnagar", isDestination: true, distanceFromVadodara: "430 km"
  },
  {
    name: "Morbi", slug: "morbi", state: "Gujarat", stateSlug: "gujarat",
    region: "west", tier: 2,
    weddingCulture: "Morbi, India's tile and clock manufacturing capital, has an industrious Patidar and Lohana business community known for colourful, energetic weddings. The city's manufacturing prosperity drives spectacular multi-day celebrations with elaborate baraat processions.",
    landmarks: ["Mani Mandir", "Orchard Palace", "Machhu River"],
    areas: ["GIDC Industrial Area", "Station Road", "Wankaner Road"],
    venues: ["Morbi Palace Hotel", "Industrial Club"],
    language: "Gujarati / Kutchi", community: "Patidar & Lohana",
    weddingStyle: "Industrious Morbi-style weddings with strong community participation and colourful baraat",
    uniqueHook: "Morbi's tile-industry success stories celebrate with the best — Ronak Dave is their first call",
    nearbyCity: "Rajkot", isDestination: false, distanceFromVadodara: "240 km"
  },
  {
    name: "Mehsana", slug: "mehsana", state: "Gujarat", stateSlug: "gujarat",
    region: "west", tier: 2,
    weddingCulture: "Mehsana's Kadva Patidar community is the backbone of Gujarat's agricultural and dairy revolution. Weddings here are proud displays of community prosperity with massive baraat processions, traditional Gujarati music, and safas that represent family honour.",
    landmarks: ["Modhera Sun Temple", "Brahma Sarovar", "Mehsana Dairy"],
    areas: ["Highway", "Unjha", "Visnagar"],
    venues: ["Hotel Grand Sarovar Premier", "Mehsana Patidar Samaj"],
    language: "Gujarati", community: "Kadva Patidar",
    weddingStyle: "Kadva Patidar agricultural-prosperity weddings with grand traditional safas",
    uniqueHook: "Mehsana's Kadva Patidars are proud of their traditions — Ronak Dave's heritage matches their own",
    nearbyCity: "Ahmedabad", isDestination: false, distanceFromVadodara: "130 km"
  },
  {
    name: "Valsad", slug: "valsad", state: "Gujarat", stateSlug: "gujarat",
    region: "west", tier: 2,
    weddingCulture: "Valsad, in south Gujarat's coastal belt, has a warm Anavil Brahmin and Parsi community. The region's tropical setting, mango groves, and coastal breezes make for romantic outdoor weddings where traditional safas add regal elegance.",
    landmarks: ["Valsad Beach", "Tithal Beach", "Halar region"],
    areas: ["Station Road", "Abrama", "Dungri"],
    venues: ["Tithal Resort", "Hotel Siddharth"],
    language: "Gujarati", community: "Anavil Brahmin & coastal Patidar",
    weddingStyle: "South Gujarat coastal celebrations with tropical settings and traditional safas",
    uniqueHook: "Valsad's Anavil Brahmin families require authentic ritual precision — Ronak Dave delivers exactly that",
    nearbyCity: "Surat", isDestination: false, distanceFromVadodara: "171 km"
  },
  {
    name: "Kevadia", slug: "kevadia", state: "Gujarat", stateSlug: "gujarat",
    region: "west", tier: 3,
    weddingCulture: "Kevadia, home to the iconic Statue of Unity, has emerged as a premium destination wedding location. The majestic backdrop of the world's tallest statue makes weddings here truly world-class events where every detail — including the safa — must be extraordinary.",
    landmarks: ["Statue of Unity", "Valley of Flowers", "Jungle Safari"],
    areas: ["Statue of Unity area", "Tent City", "Narmada viewpoint"],
    venues: ["Tent City Narmada", "Ekta Cruise"],
    language: "Gujarati / Tribal", community: "Destination wedding families from all over India",
    weddingStyle: "World-class destination weddings at the world's tallest statue — a truly iconic setting",
    uniqueHook: "At the Statue of Unity — the world's tallest statue — only India's #1 safa artist is good enough",
    nearbyCity: "Vadodara", isDestination: true, distanceFromVadodara: "90 km"
  },

  // ═══════════════════════════ RAJASTHAN (22) ═══════════════════════════
  {
    name: "Jaipur", slug: "jaipur", state: "Rajasthan", stateSlug: "rajasthan",
    region: "north", tier: 1,
    weddingCulture: "Jaipur — the Pink City — is India's most iconic wedding destination. Rajput and Marwari families celebrate with palace weddings, elephant processions, and safas that echo the royal turbans of the Kachwaha kings. A Jaipur wedding is a living heritage spectacle.",
    landmarks: ["Amber Fort", "City Palace", "Hawa Mahal"],
    areas: ["Civil Lines", "Malviya Nagar", "C-Scheme"],
    venues: ["Rambagh Palace", "Fairmont Jaipur"],
    language: "Hindi / Rajasthani", community: "Rajput & Marwari",
    weddingStyle: "Royal palace weddings with elephant baraat and traditional Rajasthani safas of the Kachwaha court",
    uniqueHook: "Jaipur deserves nothing less than India's world-record safa artist to honour the Pink City's royal traditions",
    nearbyCity: "Delhi", isDestination: true, distanceFromVadodara: "664 km"
  },
  {
    name: "Udaipur", slug: "udaipur", state: "Rajasthan", stateSlug: "rajasthan",
    region: "north", tier: 1,
    weddingCulture: "Udaipur — the City of Lakes — is voted the world's most romantic wedding destination. The Mewar Rajputs set the gold standard for royal weddings. A safa tied here, against the shimmering waters of Lake Pichola and the white marble City Palace, is the stuff of legends.",
    landmarks: ["City Palace", "Lake Pichola", "Jagmandir Island"],
    areas: ["Old City", "Fateh Sagar", "Bhuwana"],
    venues: ["The Oberoi Udaivilas", "Taj Lake Palace"],
    language: "Hindi / Mewari Rajasthani", community: "Mewar Rajput",
    weddingStyle: "Lake Palace lakeside weddings with Mewar Rajput royal safa traditions",
    uniqueHook: "The world's most photographed wedding destination demands India's most celebrated safa artist — Ronak Dave",
    nearbyCity: "Ahmedabad", isDestination: true, distanceFromVadodara: "434 km"
  },
  {
    name: "Jodhpur", slug: "jodhpur", state: "Rajasthan", stateSlug: "rajasthan",
    region: "north", tier: 1,
    weddingCulture: "Jodhpur — the Blue City — is home to the Rathore Rajputs and the iconic Mehrangarh Fort. Weddings here are legendary for their sheer scale, royal settings, and the distinctive Marwari safa that has been the symbol of Jodhpur's warrior-merchant heritage for centuries.",
    landmarks: ["Mehrangarh Fort", "Umaid Bhawan Palace", "Jaswant Thada"],
    areas: ["Shastri Nagar", "Sardarpura", "Ratanada"],
    venues: ["Umaid Bhawan Palace", "Raas Jodhpur"],
    language: "Hindi / Marwari", community: "Rathore Rajput & Marwari",
    weddingStyle: "Mehrangarh Fort-backdrop royal weddings with Rathore Rajput safa traditions",
    uniqueHook: "In the city that gave the jodhpuri its name, Ronak Dave's pagdi artistry honours that legacy with world records",
    nearbyCity: "Jaipur", isDestination: true, distanceFromVadodara: "547 km"
  },
  {
    name: "Jaisalmer", slug: "jaisalmer", state: "Rajasthan", stateSlug: "rajasthan",
    region: "north", tier: 2,
    weddingCulture: "Jaisalmer, the Golden City rising from the Thar Desert, offers an unparalleled wedding backdrop. Bhati Rajput families and destination wedding couples choose Jaisalmer for sand dune ceremonies, camel processions, and safas that glow golden in the desert light.",
    landmarks: ["Jaisalmer Fort", "Sam Sand Dunes", "Patwon Ki Haveli"],
    areas: ["Amar Sagar", "Gadisar Lake area", "Gandhi Chowk"],
    venues: ["Suryagarh Palace", "Desert Tulip"],
    language: "Hindi / Rajasthani", community: "Bhati Rajput & destination wedding families",
    weddingStyle: "Desert fort weddings under Milky Way skies with golden Thar safa traditions",
    uniqueHook: "The Golden City's desert fort weddings deserve a golden-standard safa — Ronak Dave travels to Jaisalmer",
    nearbyCity: "Jodhpur", isDestination: true, distanceFromVadodara: "700 km"
  },
  {
    name: "Pushkar", slug: "pushkar", state: "Rajasthan", stateSlug: "rajasthan",
    region: "north", tier: 2,
    weddingCulture: "Pushkar's sacred Brahma Temple and the sacred Pushkar Lake make it one of India's most spiritually charged wedding locations. Brahmin families from across India seek a Pushkar blessing for their weddings, where the safa ceremony carries deep ritual significance.",
    landmarks: ["Brahma Temple", "Pushkar Lake", "Savitri Temple"],
    areas: ["Ajmer Road", "Ghats", "Market area"],
    venues: ["The Westin Pushkar Resort", "Ananta Spa & Resort"],
    language: "Hindi / Rajasthani", community: "Brahmin & devotee families",
    weddingStyle: "Sacred Brahma Temple-blessed weddings where the safa ceremony is a spiritual ritual",
    uniqueHook: "At the world's only Brahma Temple, Ronak Dave's safas are tied with the reverence this sacred city demands",
    nearbyCity: "Ajmer", isDestination: true, distanceFromVadodara: "605 km"
  },
  {
    name: "Ajmer", slug: "ajmer", state: "Rajasthan", stateSlug: "rajasthan",
    region: "north", tier: 2,
    weddingCulture: "Ajmer, home to the revered Dargah Sharif of Moinuddin Chishti and the sacred Pushkar nearby, is a city of spiritual convergence. Both Hindu and Muslim families seek Ajmer's blessings for their unions, with the safa ceremony representing their deepest cultural pride.",
    landmarks: ["Dargah Sharif", "Ana Sagar Lake", "Taragarh Fort"],
    areas: ["Civil Lines", "Kesarganj", "Madar Gate"],
    venues: ["Marriott Hotel Ajmer", "Mansingh Palace"],
    language: "Hindi / Rajasthani / Urdu", community: "Rajasthani Hindu & Muslim families",
    weddingStyle: "Spiritual Ajmer weddings with blessing from two great faiths represented in the safa tradition",
    uniqueHook: "Ajmer's multicultural community values authenticity — Ronak Dave's 40-year heritage resonates deeply here",
    nearbyCity: "Jaipur", isDestination: false, distanceFromVadodara: "617 km"
  },
  {
    name: "Mount Abu", slug: "mount-abu", state: "Rajasthan", stateSlug: "rajasthan",
    region: "north", tier: 2,
    weddingCulture: "Mount Abu, Rajasthan's only hill station and home to the stunning Dilwara Jain Temples, is a premier destination wedding spot for Jain and Marwari families. The cool mountain air and temple grandeur create an ethereal backdrop for safas tied by the finest artisans.",
    landmarks: ["Dilwara Temples", "Nakki Lake", "Guru Shikhar"],
    areas: ["Main Market", "Sunset Point", "Achalgarh"],
    venues: ["Bikaner Palace Hotel", "Cama Rajputana Club Resort"],
    language: "Hindi / Rajasthani / Marwari", community: "Jain & Marwari families",
    weddingStyle: "Dilwara Temple-blessed Jain & Marwari destination weddings in Rajasthan's hill paradise",
    uniqueHook: "Mount Abu's Jain families value perfection in every ritual — Ronak Dave's precision is why they call us first",
    nearbyCity: "Udaipur", isDestination: true, distanceFromVadodara: "370 km"
  },
  {
    name: "Bikaner", slug: "bikaner", state: "Rajasthan", stateSlug: "rajasthan",
    region: "north", tier: 2,
    weddingCulture: "Bikaner's Rathore Rajputs and wealthy camel-trader Oswal Jain families celebrate weddings with the grandeur of their desert fort heritage. The Bikaner safa style — wide, stiff, and vibrantly coloured — is one of Rajasthan's most distinctive regional traditions.",
    landmarks: ["Junagarh Fort", "Karni Mata Temple", "Lalgarh Palace"],
    areas: ["Station Road", "Ganganagar Road", "Kolyat"],
    venues: ["Lalgarh Palace Hotel", "The Bhanwar Niwas"],
    language: "Hindi / Marwari", community: "Rathore Rajput & Oswal Jain",
    weddingStyle: "Junagarh Fort-inspired desert weddings with the distinctive stiff Bikaner safa style",
    uniqueHook: "Bikaner's distinct safa style is one of Ronak Dave's specialties — we honour every regional tradition",
    nearbyCity: "Jodhpur", isDestination: false, distanceFromVadodara: "660 km"
  },
  {
    name: "Kota", slug: "kota", state: "Rajasthan", stateSlug: "rajasthan",
    region: "north", tier: 2,
    weddingCulture: "Kota, on the Chambal River, is home to Hadoti's Hada Chauhan Rajputs and the academic families of India's coaching capital. Weddings here blend warrior-clan traditions with the aspirations of educated families — a unique mix that Ronak Dave serves with great pride.",
    landmarks: ["Kota Barrage", "Garh Palace", "Chambal Garden"],
    areas: ["Vigyan Nagar", "Kunhari", "Borkheda"],
    venues: ["Umed Bhawan Palace", "Hotel Palkiya Palace"],
    language: "Hindi / Hadoti Rajasthani", community: "Hada Chauhan Rajput & academic families",
    weddingStyle: "Hadoti Rajput warrior traditions blended with Kota's modern academic community weddings",
    uniqueHook: "Kota's educated families appreciate excellence — they choose Ronak Dave for his world-record credentials",
    nearbyCity: "Jaipur", isDestination: false, distanceFromVadodara: "599 km"
  },
  {
    name: "Nathdwara", slug: "nathdwara", state: "Rajasthan", stateSlug: "rajasthan",
    region: "north", tier: 3,
    weddingCulture: "Nathdwara, the abode of Shrinathji, is the most sacred pilgrimage city for Vaishnav Hindus worldwide. Families who worship at Shrinathji consider a Nathdwara wedding the ultimate blessing. The safa tying ceremony here is conducted with deep devotional reverence.",
    landmarks: ["Shrinathji Temple", "Eklingji Temple", "Rajsamand Lake"],
    areas: ["Main Temple Road", "Nathji Gate", "Rajsamand Highway"],
    venues: ["Nathdwara Seva Sadan", "Hotel Shrinath"],
    language: "Hindi / Mewari", community: "Vaishnav devotee families (Pushtimargi)",
    weddingStyle: "Shrinathji-blessed Pushtimargi Vaishnav weddings of the highest spiritual significance",
    uniqueHook: "Nathdwara's devotees believe only the finest should adorn their son on his sacred wedding day — Ronak Dave",
    nearbyCity: "Udaipur", isDestination: true, distanceFromVadodara: "395 km"
  },
  {
    name: "Chittorgarh", slug: "chittorgarh", state: "Rajasthan", stateSlug: "rajasthan",
    region: "north", tier: 3,
    weddingCulture: "Chittorgarh — where Mewar's most heroic tales were written — carries the weight of Rajput sacrifice and honour in every wedding. Families here invoke the spirits of Maharana Pratap and Rani Padmini; the safa worn at a Chittorgarh wedding must honour that legacy.",
    landmarks: ["Chittorgarh Fort", "Vijay Stambha", "Rana Kumbha Palace"],
    areas: ["Nimbahera Road", "Gandhi Nagar", "Station Road"],
    venues: ["Hotel Pratap Palace", "Bassi Wildlife Resort"],
    language: "Hindi / Mewari", community: "Mewar Rajput",
    weddingStyle: "Chittorgarh Fort-inspired Mewar Rajput honour-bound wedding ceremonies",
    uniqueHook: "In the fort of Maharana Pratap, Ronak Dave's safa carries the warrior spirit forward into a new generation",
    nearbyCity: "Udaipur", isDestination: false, distanceFromVadodara: "480 km"
  },
  {
    name: "Udaipur", slug: "udaipur", state: "Rajasthan", stateSlug: "rajasthan",
    region: "north", tier: 1,
    weddingCulture: "Udaipur — the City of Lakes — is voted the world's most romantic wedding destination. The Mewar Rajputs set the gold standard for royal weddings. A safa tied here, against the shimmering waters of Lake Pichola and the white marble City Palace, is the stuff of legends.",
    landmarks: ["City Palace", "Lake Pichola", "Jagmandir Island"],
    areas: ["Old City", "Fateh Sagar", "Bhuwana"],
    venues: ["The Oberoi Udaivilas", "Taj Lake Palace"],
    language: "Hindi / Mewari Rajasthani", community: "Mewar Rajput",
    weddingStyle: "Lake Palace lakeside weddings with Mewar Rajput royal safa traditions",
    uniqueHook: "The world's most photographed wedding destination demands India's most celebrated safa artist — Ronak Dave",
    nearbyCity: "Ahmedabad", isDestination: true, distanceFromVadodara: "434 km"
  },

  // ═══════════════════════════ MAHARASHTRA (25) ═══════════════════════════
  {
    name: "Mumbai", slug: "mumbai", state: "Maharashtra", stateSlug: "maharashtra",
    region: "west", tier: 1,
    weddingCulture: "Mumbai — India's financial capital and Bollywood's home — is where weddings become productions. From Juhu beachside ceremonies to Taj Hotel grand affairs, Mumbai weddings are India's most photographed. Bollywood celebrities, industrialists, and NRI families all celebrate here.",
    landmarks: ["Gateway of India", "Marine Drive", "Bollywood studios"],
    areas: ["Juhu", "Bandra", "Worli"],
    venues: ["Taj Mahal Palace Hotel", "Grand Hyatt Mumbai"],
    language: "Hindi / Marathi / Gujarati", community: "Bollywood, business elite, NRI families",
    weddingStyle: "Bollywood-inspired star-studded Mumbai weddings where every detail is magazine-worthy",
    uniqueHook: "Mumbai's celebrity-grade weddings demand celebrity-grade safa artists — Ronak Dave has styled 500+ stars",
    nearbyCity: "Pune", isDestination: false, distanceFromVadodara: "422 km"
  },
  {
    name: "Pune", slug: "pune", state: "Maharashtra", stateSlug: "maharashtra",
    region: "west", tier: 1,
    weddingCulture: "Pune — the Oxford of the East — blends Maratha warrior traditions with modern cosmopolitan sensibilities. IT professional weddings, Peshwa-lineage Brahmin ceremonies, and Maratha clan celebrations all coexist in this culturally rich city.",
    landmarks: ["Shaniwar Wada", "Aga Khan Palace", "Sinhagad Fort"],
    areas: ["Koregaon Park", "Baner", "Hadapsar"],
    venues: ["The Westin Pune", "Hyatt Pune"],
    language: "Marathi / Hindi", community: "Maratha, Brahmin (CKP), IT professionals",
    weddingStyle: "Peshwa-heritage Pune weddings blending warrior Maratha traditions with modern sophistication",
    uniqueHook: "Pune's educated, discerning families research their vendors — they find Ronak Dave's world records compelling",
    nearbyCity: "Mumbai", isDestination: false, distanceFromVadodara: "400 km"
  },
  {
    name: "Nagpur", slug: "nagpur", state: "Maharashtra", stateSlug: "maharashtra",
    region: "central", tier: 1,
    weddingCulture: "Nagpur — the Orange City and geographic heart of India — has strong Vidarbha Maratha and Teli-Vaishnav wedding traditions. The city's political significance (home of RSS) and business community create large, well-attended weddings with extensive baraat traditions.",
    landmarks: ["Deekshabhoomi", "Futala Lake", "Zero Mile Stone"],
    areas: ["Dharampeth", "Ramdaspeth", "Sitabardi"],
    venues: ["The Pride Hotel Nagpur", "Radisson Blu Nagpur"],
    language: "Marathi / Hindi", community: "Vidarbha Maratha & Teli",
    weddingStyle: "Vidarbha Maratha grandeur with Nagpur's distinctive orange-season wedding traditions",
    uniqueHook: "Nagpur's Maratha families value heritage and accomplishment — Ronak Dave's Guinness records earn instant respect",
    nearbyCity: "Pune", isDestination: false, distanceFromVadodara: "590 km"
  },
  {
    name: "Nashik", slug: "nashik", state: "Maharashtra", stateSlug: "maharashtra",
    region: "west", tier: 2,
    weddingCulture: "Nashik, the wine capital of India and home of the Kumbh Mela, blends spiritual traditions with modern prosperity. Nashik's Maratha and Brahmin weddings near the Godavari ghats are known for their ritual depth, where the safa ceremony is as sacred as the pheras.",
    landmarks: ["Sula Vineyards", "Trimbakeshwar Temple", "Panchvati Ghats"],
    areas: ["Gangapur Road", "College Road", "Pathardi Phata"],
    venues: ["Sula Vineyards Amphitheatre", "Radisson Blu Nashik"],
    language: "Marathi / Hindi", community: "Maratha & Brahmin",
    weddingStyle: "Godavari ghat weddings blending Kumbh Mela spiritual depth with Maharashtra's vineyard modernity",
    uniqueHook: "Nashik's spiritual families trust only the finest craftsmen — Ronak Dave's world records speak for themselves",
    nearbyCity: "Mumbai", isDestination: false, distanceFromVadodara: "298 km"
  },
  {
    name: "Aurangabad", slug: "aurangabad", state: "Maharashtra", stateSlug: "maharashtra",
    region: "central", tier: 2,
    weddingCulture: "Aurangabad — city of the Ajanta & Ellora cave temples — has a rich Mughal, Maratha, and Paigah noble heritage. Muslim and Hindu weddings here both have traditions steeped in the Nizami culture of the Deccan, where turbans and safas carry centuries of meaning.",
    landmarks: ["Ajanta Caves", "Ellora Caves", "Bibi Ka Maqbara"],
    areas: ["Cidco", "Cantonment", "Begumpura"],
    venues: ["Vivanta Aurangabad", "Taj Residency"],
    language: "Marathi / Hindi / Urdu", community: "Maratha, Muslim (Paigah), and Deccan Hindu",
    weddingStyle: "Ajanta-Ellora heritage weddings blending Mughal-Maratha Deccan elegance in safa traditions",
    uniqueHook: "The City of Gates deserves a safa artist of gate-level grandeur — Ronak Dave brings that prestige",
    nearbyCity: "Pune", isDestination: false, distanceFromVadodara: "434 km"
  },

  // ═══════════════════════════ DELHI NCR (8) ═══════════════════════════
  {
    name: "New Delhi", slug: "new-delhi", state: "Delhi", stateSlug: "delhi",
    region: "north", tier: 1,
    weddingCulture: "Delhi — India's capital — is home to the nation's most powerful families, from political dynasties to Punjabi business empires. Delhi weddings are the definition of grand — sprawling farmhouse affairs, five-star banquets, and baraats that stop traffic on the Lutyens roads.",
    landmarks: ["India Gate", "Red Fort", "Qutub Minar"],
    areas: ["South Extension", "Defence Colony", "Greater Kailash"],
    venues: ["Taj Diplomatic Enclave", "Leela Palace New Delhi"],
    language: "Hindi / Punjabi", community: "Punjabi, Rajput, political elite",
    weddingStyle: "India's most powerful city hosts India's most powerful weddings — farmhouse grandeur and five-star splendour",
    uniqueHook: "Delhi's power families don't compromise on anyone — they research and choose Ronak Dave for his world-record status",
    nearbyCity: "Gurugram", isDestination: false, distanceFromVadodara: "1059 km"
  },
  {
    name: "Gurugram", slug: "gurugram", state: "Haryana", stateSlug: "haryana",
    region: "north", tier: 1,
    weddingCulture: "Gurugram (Gurgaon) — India's Millennium City — is the wedding capital of corporate India. CXOs, startup founders, and NRI families host weddings at Gurugram's luxurious five-star venues where the baraat is often a fleet of Audis and Bentleys.",
    landmarks: ["Cyber Hub", "Kingdom of Dreams", "Ambience Mall"],
    areas: ["DLF Phase 5", "Sohna Road", "Golf Course Road"],
    venues: ["The Westin Gurugram", "Hyatt Regency Gurugram"],
    language: "Hindi / Punjabi / English", community: "Corporate elite, startup founders, NRI families",
    weddingStyle: "Corporate India's finest wedding destination — tech wealth meets royal safa traditions",
    uniqueHook: "Gurugram's data-driven corporate families have done their research — Ronak Dave's credentials are world-class",
    nearbyCity: "New Delhi", isDestination: false, distanceFromVadodara: "1030 km"
  },
  {
    name: "Noida", slug: "noida", state: "Uttar Pradesh", stateSlug: "uttar-pradesh",
    region: "north", tier: 1,
    weddingCulture: "Noida, the tech and media hub of the NCR, hosts weddings for India's IT professionals, journalists, and creative industry. Grand Sector-based wedding venues host large north Indian weddings where Jat, Brahmin, and Rajput traditions are celebrated with contemporary flair.",
    landmarks: ["Iskcon Temple Noida", "The Great India Place", "Okhla Bird Sanctuary"],
    areas: ["Sector 18", "Sector 44", "Sector 62"],
    venues: ["Radisson Blu Noida", "Shangri-La Eros Noida"],
    language: "Hindi", community: "Jat, Brahmin, UP Kshatriya",
    weddingStyle: "NCR tech-professional weddings blending north Indian Jat-Rajput grandeur with modern luxury",
    uniqueHook: "Noida's tech professionals appreciate measurable excellence — Ronak Dave's world records are the ultimate metric",
    nearbyCity: "New Delhi", isDestination: false, distanceFromVadodara: "1055 km"
  },
  {
    name: "Faridabad", slug: "faridabad", state: "Haryana", stateSlug: "haryana",
    region: "north", tier: 2,
    weddingCulture: "Faridabad's industrial Haryanvi families celebrate weddings with the full strength of Jat community traditions — loud dhol, massive baraats, and safas tied with proud warrior symbolism. The groom's safa here isn't just fashion; it's identity.",
    landmarks: ["Surajkund", "Raja Nahar Singh Palace", "Badkhal Lake"],
    areas: ["Sector 15", "NIT", "Ballabhgarh"],
    venues: ["Surajkund Resort", "Crowne Plaza Today Faridabad"],
    language: "Hindi / Haryanvi", community: "Jat & Ahir families",
    weddingStyle: "Haryanvi Jat warrior weddings where the groom's safa is his proudest statement of identity",
    uniqueHook: "Faridabad's Jat families want the best for their son's baraat — world record holder Ronak Dave is the answer",
    nearbyCity: "New Delhi", isDestination: false, distanceFromVadodara: "1044 km"
  },

  // ═══════════════════════════ UTTAR PRADESH (20) ═══════════════════════════
  {
    name: "Lucknow", slug: "lucknow", state: "Uttar Pradesh", stateSlug: "uttar-pradesh",
    region: "north", tier: 1,
    weddingCulture: "Lucknow — the City of Nawabs — is India's undisputed capital of tehzeeb (etiquette). Nawabi weddings here are four-day affairs of exquisite food, shayari, and ceremonial dress where the safa must match the refinement of Chikankari kurtas and Banaras silk sherwanis.",
    landmarks: ["Bara Imambara", "Rumi Darwaza", "British Residency"],
    areas: ["Hazratganj", "Gomti Nagar", "Aliganj"],
    venues: ["Taj Mahal Lucknow", "Lebua Lucknow"],
    language: "Hindi / Urdu", community: "Nawabi Muslim, Kshatriya, Kayastha",
    weddingStyle: "Nawabi tehzeeb weddings where every ceremonial element — including the safa — must reflect exquisite taste",
    uniqueHook: "Lucknow's culture of excellence demands only the best — Ronak Dave's world-record artistry meets that standard",
    nearbyCity: "Varanasi", isDestination: false, distanceFromVadodara: "1050 km"
  },
  {
    name: "Agra", slug: "agra", state: "Uttar Pradesh", stateSlug: "uttar-pradesh",
    region: "north", tier: 2,
    weddingCulture: "Agra — city of the Taj Mahal — is the most sought-after destination wedding backdrop in the world. Weddings with the Taj as the backdrop require every element to match the monument's perfection. The groom's safa, reflected in the Yamuna at sunrise, must be immaculate.",
    landmarks: ["Taj Mahal", "Agra Fort", "Fatehpur Sikri"],
    areas: ["Civil Lines", "Taj Nagri", "Bodla"],
    venues: ["The Oberoi Amarvilas", "ITC Mughal"],
    language: "Hindi / Brajbhasha", community: "Baniya, Kshatriya, Brahmin",
    weddingStyle: "Taj Mahal backdrop destination weddings where perfection in every detail — including the safa — is non-negotiable",
    uniqueHook: "Where the most perfect monument stands, only India's most perfect safa artist serves — Ronak Dave",
    nearbyCity: "Delhi", isDestination: true, distanceFromVadodara: "993 km"
  },
  {
    name: "Varanasi", slug: "varanasi", state: "Uttar Pradesh", stateSlug: "uttar-pradesh",
    region: "north", tier: 2,
    weddingCulture: "Varanasi — the oldest continuously inhabited city on Earth — holds the most spiritually significant weddings in Hinduism. Ganga ghat weddings, Kashi Vishwanath blessings, and the sacred safa ceremony at Dashashwamedh Ghat make Varanasi weddings timeless.",
    landmarks: ["Dashashwamedh Ghat", "Kashi Vishwanath Temple", "Sarnath"],
    areas: ["Godowlia", "Lanka", "Sigra"],
    venues: ["Taj Ganges Varanasi", "BrijRama Palace"],
    language: "Hindi / Avadhi", community: "Brahmin, Kshatriya, Kashi Vaishnav",
    weddingStyle: "Ganga ghat sacred weddings in Hinduism's most ancient living city — every ritual demands perfection",
    uniqueHook: "In the city where time stands still, Ronak Dave brings a timeless safa tradition to Varanasi's sacred ceremonies",
    nearbyCity: "Lucknow", isDestination: true, distanceFromVadodara: "1100 km"
  },

  // ═══════════════════════════ KARNATAKA (18) ═══════════════════════════
  {
    name: "Bengaluru", slug: "bengaluru", state: "Karnataka", stateSlug: "karnataka",
    region: "south", tier: 1,
    weddingCulture: "Bengaluru — Silicon Valley of India — hosts weddings for the country's tech elite, Kannadiga royalty, and NRI professionals. Bangalore weddings blend south Indian Hindu rituals with modern five-star luxury, where a spectacular baraat safa is both tradition and social media statement.",
    landmarks: ["Vidhana Soudha", "Lalbagh Garden", "Cubbon Park"],
    areas: ["Koramangala", "Indiranagar", "Whitefield"],
    venues: ["The Leela Palace Bengaluru", "ITC Gardenia"],
    language: "Kannada / Telugu / Hindi", community: "Lingayat, Vokkaliga, tech professionals",
    weddingStyle: "Bengaluru tech-elite weddings blending Lingayat and Vokkaliga traditions with Silicon Valley prosperity",
    uniqueHook: "Bengaluru's discerning professionals appreciate craftsmanship — Ronak Dave's world-record credentials are respected here",
    nearbyCity: "Chennai", isDestination: false, distanceFromVadodara: "1089 km"
  },
  {
    name: "Mysore", slug: "mysore", state: "Karnataka", stateSlug: "karnataka",
    region: "south", tier: 2,
    weddingCulture: "Mysore — the City of Palaces — was the seat of the Wadiyar Maharajas and is Karnataka's most regal city. Kodava (Coorg) and Mysore Brahmin weddings here have a distinctive ceremonial language where the pagdi or safa represents the groom's connection to the Mysore royal court traditions.",
    landmarks: ["Mysore Palace", "Chamundi Hill", "Brindavan Gardens"],
    areas: ["VV Mohalla", "Kuvempunagar", "Jayalakshmipuram"],
    venues: ["Lalitha Mahal Palace Hotel", "Radisson Blu Mysore"],
    language: "Kannada", community: "Mysore Brahmin & Kodava (Coorg)",
    weddingStyle: "Mysore Palace-grandeur weddings reflecting Wadiyar royal traditions in safa artistry",
    uniqueHook: "In the City of Palaces, Ronak Dave's royal-standard safas are a natural choice for Mysore's discerning families",
    nearbyCity: "Bengaluru", isDestination: true, distanceFromVadodara: "1090 km"
  },

  // ═══════════════════════════ PUNJAB (8) ═══════════════════════════
  {
    name: "Amritsar", slug: "amritsar", state: "Punjab", stateSlug: "punjab",
    region: "north", tier: 1,
    weddingCulture: "Amritsar — the city of the Golden Temple and the beating heart of Punjabi Sikh culture — is where India's most energetic weddings are born. Jat Sikh families celebrate with Bhangra baraats that shake the earth, and a safa tied by the Darbar Sahib is a memory for life.",
    landmarks: ["Golden Temple", "Jallianwala Bagh", "Wagah Border"],
    areas: ["Lawrence Road", "Model Town", "Ranjit Avenue"],
    venues: ["Taj Swarna Amritsar", "Hotel Mohan International"],
    language: "Punjabi", community: "Jat Sikh",
    weddingStyle: "Golden Temple-blessed Jat Sikh baraat weddings with Bhangra that shakes the streets of Amritsar",
    uniqueHook: "At the Golden Temple's sacred shadow, only India's world-record safa artist can honour the gravity of the occasion",
    nearbyCity: "Chandigarh", isDestination: false, distanceFromVadodara: "1260 km"
  },
  {
    name: "Ludhiana", slug: "ludhiana", state: "Punjab", stateSlug: "punjab",
    region: "north", tier: 1,
    weddingCulture: "Ludhiana — Punjab's industrial heart — is home to hosiery magnates, textile kings, and successful NRI families. Ludhiana weddings are legendary for their scale, exuberance, and sheer financial commitment — nobody throws a party like a Ludhiana Jat family.",
    landmarks: ["Rumi Darwaza Ludhiana", "Punjab Agricultural University", "War Heroes Memorial"],
    areas: ["BRS Nagar", "Sarabha Nagar", "Model Town"],
    venues: ["Radisson Blu Ludhiana", "Park Plaza Ludhiana"],
    language: "Punjabi", community: "Jat Sikh & Khatri",
    weddingStyle: "Industrial-wealth Ludhiana weddings where the budget is unlimited and the baraat unforgettable",
    uniqueHook: "Ludhiana's wealthy hosiery families want the best available — Ronak Dave's world-record status is exactly that",
    nearbyCity: "Amritsar", isDestination: false, distanceFromVadodara: "1230 km"
  },

  // ═══════════════════════════ HARYANA (7) ═══════════════════════════
  {
    name: "Chandigarh", slug: "chandigarh", state: "Chandigarh", stateSlug: "chandigarh",
    region: "north", tier: 1,
    weddingCulture: "Chandigarh — India's most planned city and the joint capital of Punjab and Haryana — is the wedding venue of choice for the entire region's elite. Its wide boulevards, Rock Garden venues, and Sector-wide banquet halls host some of north India's grandest weddings.",
    landmarks: ["Rock Garden", "Sukhna Lake", "Capitol Complex"],
    areas: ["Sector 17", "Sector 35", "Sector 8"],
    venues: ["Lalit Hotel Chandigarh", "JW Marriott Chandigarh"],
    language: "Punjabi / Hindi", community: "Punjabi, Haryanvi Jat, IAS families",
    weddingStyle: "India's most planned city hosts perfectly planned weddings — everything must be in perfect order including safas",
    uniqueHook: "Chandigarh's IAS and elite families set the standard — they choose Ronak Dave as their safa benchmark",
    nearbyCity: "Delhi", isDestination: false, distanceFromVadodara: "1085 km"
  },

  // ═══════════════════════════ MADHYA PRADESH (8) ═══════════════════════════
  {
    name: "Indore", slug: "indore", state: "Madhya Pradesh", stateSlug: "madhya-pradesh",
    region: "central", tier: 1,
    weddingCulture: "Indore — Madhya Pradesh's commercial capital and India's cleanest city — is home to the Holkar dynasty's proud Marathi heritage and flourishing Gujarati business community. Indori weddings are known for exceptional food, hospitality, and traditional Malwa-style safa ceremonies.",
    landmarks: ["Rajwada Palace", "Lal Bagh Palace", "Sarafa Bazaar"],
    areas: ["Vijay Nagar", "Scheme 54", "AB Road"],
    venues: ["Sayaji Hotel Indore", "Radisson Blu Indore"],
    language: "Hindi / Marathi", community: "Holkar Maratha & Gujarati Jain",
    weddingStyle: "Holkar-dynasty Malwa weddings with Indore's famous hospitality reflected in every safa thread",
    uniqueHook: "Indore's proud Holkar heritage demands the same standards as their own royal past — Ronak Dave meets them",
    nearbyCity: "Bhopal", isDestination: false, distanceFromVadodara: "460 km"
  },
  {
    name: "Bhopal", slug: "bhopal", state: "Madhya Pradesh", stateSlug: "madhya-pradesh",
    region: "central", tier: 1,
    weddingCulture: "Bhopal — the City of Lakes and former seat of the Nawabs — has an exquisite blend of Nawabi Muslim culture and Rajput heritage. Bhopal weddings carry the graceful elegance of the Begum rulers and the warrior pride of its Rajput families.",
    landmarks: ["Upper Lake", "Taj-ul-Masajid", "Bharat Bhavan"],
    areas: ["MP Nagar", "Arera Colony", "Shivaji Nagar"],
    venues: ["The Jehan Numa Palace", "Courtyard by Marriott Bhopal"],
    language: "Hindi / Urdu", community: "Nawabi Muslim & Rajput",
    weddingStyle: "Nawabi elegance meets Rajput pride in Bhopal's City of Lakes wedding ceremonies",
    uniqueHook: "Bhopal's cultured families — descendants of Nawabs and Rajputs — recognise authentic artistry when they see it",
    nearbyCity: "Indore", isDestination: false, distanceFromVadodara: "575 km"
  },
  {
    name: "Ujjain", slug: "ujjain", state: "Madhya Pradesh", stateSlug: "madhya-pradesh",
    region: "central", tier: 2,
    weddingCulture: "Ujjain — one of India's seven sacred cities and home of the Mahakaleshwar Jyotirlinga — is the most spiritually charged wedding location in Madhya Pradesh. Families from across India come to Ujjain for weddings blessed by Mahakal, and the safa ceremony is consecrated accordingly.",
    landmarks: ["Mahakaleshwar Jyotirlinga", "Ram Ghat", "Kal Bhairav Temple"],
    areas: ["Freeganj", "Nanakheda", "Mahakal Marg"],
    venues: ["Hotel Amar Mahal", "Suraana Palace Hotel"],
    language: "Hindi / Malwi", community: "Hindu devotee families (Brahmin, Kshatriya)",
    weddingStyle: "Mahakaleshwar-blessed sacred Ujjain weddings where the safa is tied with Shiva's divine sanction",
    uniqueHook: "In Mahakal's city, every ritual must be perfect — Ronak Dave ensures the safa ceremony honours the divine setting",
    nearbyCity: "Indore", isDestination: true, distanceFromVadodara: "470 km"
  },

  // ═══════════════════════════ TELANGANA (5) ═══════════════════════════
  {
    name: "Hyderabad", slug: "hyderabad", state: "Telangana", stateSlug: "telangana",
    region: "south", tier: 1,
    weddingCulture: "Hyderabad — the City of Pearls and biryani — blends Nizami grandeur with Telugu business wealth and IT prosperity. Hyderabad weddings are known for their extravagance — palatial venues, Nizami-style decor, and safas that echo the Nizam's legendary royal court.",
    landmarks: ["Charminar", "Golconda Fort", "Hussain Sagar Lake"],
    areas: ["Banjara Hills", "Jubilee Hills", "Hitech City"],
    venues: ["ITC Kohenur Hyderabad", "Taj Falaknuma Palace"],
    language: "Telugu / Urdu / Hindi", community: "Telugu Brahmin, Nizam Muslim, IT professional",
    weddingStyle: "Nizami-inspired Hyderabad weddings blending Golconda grandeur with Telugu tradition and IT wealth",
    uniqueHook: "The City of Nizams deserves a safa artist worthy of royal courts — Ronak Dave has styled 500+ celebrities",
    nearbyCity: "Bengaluru", isDestination: false, distanceFromVadodara: "963 km"
  },

  // ═══════════════════════════ ANDHRA PRADESH (6) ═══════════════════════════
  {
    name: "Visakhapatnam", slug: "visakhapatnam", state: "Andhra Pradesh", stateSlug: "andhra-pradesh",
    region: "south", tier: 1,
    weddingCulture: "Visakhapatnam — the City of Destiny on the Bay of Bengal — is home to the navy, steel industry, and Kamma-Kapu business communities. Beach-side weddings at Rushikonda and temple weddings at Simhachalam give Vizag ceremonies a dramatic coastal grandeur.",
    landmarks: ["Simhachalam Temple", "Rushikonda Beach", "INS Kursura Submarine Museum"],
    areas: ["MVP Colony", "Madhurawada", "Gajuwaka"],
    venues: ["The Park Visakhapatnam", "Radisson Vizag"],
    language: "Telugu", community: "Kamma, Kapu, Navy families",
    weddingStyle: "Bay of Bengal coastal weddings with Simhachalam temple blessings and naval tradition",
    uniqueHook: "Vizag's Navy families and business elite appreciate precision and excellence — both hallmarks of Ronak Dave",
    nearbyCity: "Hyderabad", isDestination: false, distanceFromVadodara: "1200 km"
  },

  // ═══════════════════════════ TAMIL NADU (10) ═══════════════════════════
  {
    name: "Chennai", slug: "chennai", state: "Tamil Nadu", stateSlug: "tamil-nadu",
    region: "south", tier: 1,
    weddingCulture: "Chennai — the cultural capital of South India — is home to Tamil Brahmin, Mudaliar, and Chettiar wedding traditions that span three to five days of elaborate ceremonies. While safa traditions are North Indian by origin, Chennai's North Indian families and corporate executives embrace them for baraat ceremonies.",
    landmarks: ["Marina Beach", "Kapaleeshwarar Temple", "Fort St. George"],
    areas: ["Anna Nagar", "Nungambakkam", "Velachery"],
    venues: ["ITC Grand Chola Chennai", "Taj Connemara"],
    language: "Tamil / Hindi", community: "Tamil Brahmin, Marwari (settled), North Indian corporate",
    weddingStyle: "Chennai's North Indian families and Marwari settlers honour safa traditions with Tamil cultural grandeur",
    uniqueHook: "Chennai's Marwari and North Indian families celebrate with the full baraat tradition — Ronak Dave serves them all",
    nearbyCity: "Bengaluru", isDestination: false, distanceFromVadodara: "1254 km"
  },
  {
    name: "Coimbatore", slug: "coimbatore", state: "Tamil Nadu", stateSlug: "tamil-nadu",
    region: "south", tier: 2,
    weddingCulture: "Coimbatore — the Manchester of South India — is a textile and manufacturing powerhouse. Its Gounder community weddings are known for their scale and traditions, while its North Indian business families (textile traders) host elaborate safa ceremonies for their sons.",
    landmarks: ["Marudhamalai Temple", "Isha Yoga Center", "Dhyanalinga"],
    areas: ["RS Puram", "Peelamedu", "Saibaba Colony"],
    venues: ["Vivanta Coimbatore", "Radisson Coimbatore"],
    language: "Tamil / Hindi (North Indian community)", community: "Gounder & North Indian textile families",
    weddingStyle: "Coimbatore textile-industry weddings with Tamil and North Indian traditions meeting in the safa ceremony",
    uniqueHook: "Coimbatore's textile-wealth families appreciate the finest fabric artistry — Ronak Dave's craft is unmistakable",
    nearbyCity: "Chennai", isDestination: false, distanceFromVadodara: "1100 km"
  },

  // ═══════════════════════════ KERALA (8) ═══════════════════════════
  {
    name: "Kochi", slug: "kochi", state: "Kerala", stateSlug: "kerala",
    region: "south", tier: 1,
    weddingCulture: "Kochi — the Queen of the Arabian Sea — is Kerala's cosmopolitan port city blending Syrian Christian, Hindu Nair, Muslim, and Gujarati merchant traditions. NRI Keralites returning from the Gulf celebrate grand homecoming weddings where Indian baraat traditions are honoured with great pride.",
    landmarks: ["Chinese Fishing Nets", "Fort Kochi", "Mattancherry Palace"],
    areas: ["Marine Drive", "Kakkanad", "Edapally"],
    venues: ["Taj Malabar Resort Kochi", "Crowne Plaza Kochi"],
    language: "Malayalam / Hindi", community: "Nair, Syrian Christian, Gulf NRI families",
    weddingStyle: "Gulf NRI homecoming weddings where Kerala's backwater beauty meets the safa ceremony tradition",
    uniqueHook: "Kerala's Gulf NRI families want the best available when they return to marry — Ronak Dave travels to Kochi",
    nearbyCity: "Trivandrum", isDestination: false, distanceFromVadodara: "1387 km"
  },

  // ═══════════════════════════ GOA (5) ═══════════════════════════
  {
    name: "Panaji", slug: "panaji", state: "Goa", stateSlug: "goa",
    region: "west", tier: 2,
    weddingCulture: "Panaji — Goa's capital — is ground zero for India's most sought-after destination weddings. Every weekend sees Indian families from Mumbai, Delhi, and abroad hosting beach-villa weddings where the baraat might be a boat cruise along the Mandovi River.",
    landmarks: ["Immaculate Conception Church", "Fontainhas", "Dona Paula viewpoint"],
    areas: ["Miramar", "Campal", "St Inez"],
    venues: ["Taj Exotica Goa", "W Goa"],
    language: "Konkani / English / Hindi", community: "North Indian destination wedding families",
    weddingStyle: "Mandovi River baraat destination weddings where Goa's sunshine and beaches create wedding magic",
    uniqueHook: "Goa's destination wedding families travel from Mumbai and Delhi — and they bring Ronak Dave with them",
    nearbyCity: "Mumbai", isDestination: true, distanceFromVadodara: "517 km"
  },

  // ═══════════════════════════ WEST BENGAL (5) ═══════════════════════════
  {
    name: "Kolkata", slug: "kolkata", state: "West Bengal", stateSlug: "west-bengal",
    region: "east", tier: 1,
    weddingCulture: "Kolkata — the City of Joy — marries intellectual Bengali culture with the ceremonial grandeur of Marwari business families. While Bengali Hindu weddings are steeped in their own ritual system, Kolkata's vast Marwari and Rajasthani business community celebrates with full north Indian baraat safa traditions.",
    landmarks: ["Victoria Memorial", "Howrah Bridge", "Dakshineswar Temple"],
    areas: ["Park Street", "Ballygunge", "Salt Lake"],
    venues: ["ITC Royal Bengal Kolkata", "Taj Bengal"],
    language: "Bengali / Hindi", community: "Marwari business families & Bengali Brahmin",
    weddingStyle: "Kolkata Marwari business dynasty weddings blending Bengali cultural depth with Rajasthani safa tradition",
    uniqueHook: "Kolkata's Marwari business families maintain their Rajasthani roots — they call Ronak Dave for safa authenticity",
    nearbyCity: "Varanasi", isDestination: false, distanceFromVadodara: "1571 km"
  },

  // ═══════════════════════════ UTTARAKHAND (4) ═══════════════════════════
  {
    name: "Dehradun", slug: "dehradun", state: "Uttarakhand", stateSlug: "uttarakhand",
    region: "north", tier: 2,
    weddingCulture: "Dehradun — the foothills capital and home of India's military academy IMA — has a proud Garhwali, military family, and hill-station wedding culture. IMA passing-out parades and military family weddings here have a distinct dignity where the turban and safa carry deep honour.",
    landmarks: ["Robber's Cave", "Sahastradhara", "Tapkeshwar Temple"],
    areas: ["Rajpur Road", "Patel Nagar", "Clement Town"],
    venues: ["Fortune Park Dehradun", "Lemon Tree Hotel Dehradun"],
    language: "Hindi / Garhwali", community: "Garhwali, Military families, Punjabi",
    weddingStyle: "IMA military family weddings where the safa represents both tradition and the honour of service to the nation",
    uniqueHook: "Dehradun's military families want dignity and precision in everything — Ronak Dave delivers both",
    nearbyCity: "Delhi", isDestination: false, distanceFromVadodara: "1080 km"
  },

  // ═══════════════════════════ HIMACHAL PRADESH (5) ═══════════════════════════
  {
    name: "Shimla", slug: "shimla", state: "Himachal Pradesh", stateSlug: "himachal-pradesh",
    region: "north", tier: 2,
    weddingCulture: "Shimla — the Queen of Hills and former summer capital of British India — offers snow-capped mountain weddings for families who want Himalayan romance. Pahadi Hindu and Rajput families here celebrate with hill-country traditions, while destination weddings from Delhi and Chandigarh bring baraat safa customs.",
    landmarks: ["The Ridge", "Jakhu Temple", "Viceregal Lodge"],
    areas: ["Mall Road", "Sanjauli", "Circular Road"],
    venues: ["Wildflower Hall Shimla", "The Cecil Shimla"],
    language: "Hindi / Pahari", community: "Pahadi Rajput & destination wedding families",
    weddingStyle: "Snow-capped Himalayan destination weddings where the groom's safa blazes against white peaks",
    uniqueHook: "A safa tied in Shimla's mountain air by Ronak Dave creates a memory as eternal as the Himalayas",
    nearbyCity: "Chandigarh", isDestination: true, distanceFromVadodara: "1175 km"
  },

  // ═══════════════════════════ JAMMU & KASHMIR (5) ═══════════════════════════
  {
    name: "Srinagar", slug: "srinagar", state: "Jammu & Kashmir", stateSlug: "jammu-kashmir",
    region: "north", tier: 2,
    weddingCulture: "Srinagar — the jewel of the Himalayas and Dal Lake's floating wonder — is India's most ethereal destination wedding location. Houseboats, Mughal gardens, and chinar trees create an otherworldly backdrop. Kashmiri Pandit and Muslim families celebrate with rich traditions where the safa carries immense cultural pride.",
    landmarks: ["Dal Lake", "Mughal Gardens", "Hazratbal Dargah"],
    areas: ["Lal Chowk", "Rajbagh", "Jawahar Nagar"],
    venues: ["The Lalit Grand Palace Srinagar", "Vivanta Dal View"],
    language: "Kashmiri / Urdu / Hindi", community: "Kashmiri Muslim & Kashmiri Pandit",
    weddingStyle: "Dal Lake houseboat destination weddings where Kashmir's paradise setting makes every safa photograph immortal",
    uniqueHook: "Kashmir's paradise weddings deserve India's paradise-quality safa artistry — Ronak Dave travels to Srinagar",
    nearbyCity: "Jammu", isDestination: true, distanceFromVadodara: "1500 km"
  },

  // ═══════════════════════════ BIHAR (4) ═══════════════════════════
  {
    name: "Patna", slug: "patna", state: "Bihar", stateSlug: "bihar",
    region: "east", tier: 1,
    weddingCulture: "Patna — the ancient Pataliputra and Bihar's capital — has a strongly rooted Bihari Brahmin, Bhumihar, and Rajput wedding culture. Patna weddings are elaborate week-long affairs following ancient Vedic customs where the safa tying is a central ceremony performed with great ritual precision.",
    landmarks: ["Golghar", "Patna Sahib Gurudwara", "Nalanda ruins nearby"],
    areas: ["Boring Road", "Bailey Road", "Kankarbagh"],
    venues: ["Chanakya Hotel Patna", "Maurya Hotel Patna"],
    language: "Hindi / Bhojpuri / Maithili", community: "Bhumihar Brahmin & Rajput",
    weddingStyle: "Ancient Pataliputra heritage Bihari Brahmin weddings where Vedic ritual precision governs every safa thread",
    uniqueHook: "Bihar's Brahmin families demand ritual accuracy — Ronak Dave's 3rd generation heritage is the guarantee they need",
    nearbyCity: "Varanasi", isDestination: false, distanceFromVadodara: "1250 km"
  },

  // ═══════════════════════════ ASSAM (4) ═══════════════════════════
  {
    name: "Guwahati", slug: "guwahati", state: "Assam", stateSlug: "assam",
    region: "east", tier: 2,
    weddingCulture: "Guwahati — the gateway to Northeast India — blends Assamese Vaishnav traditions, Kalita Brahmin customs, and the growing NRI community from the northeast. Weddings here on the banks of the Brahmaputra have a unique northeastern flavour where the safa is embraced for grand Bihu-season celebrations.",
    landmarks: ["Kamakhya Temple", "Umananda Island", "Nehru Park"],
    areas: ["Chandmari", "GS Road", "VIP Road"],
    venues: ["Vivanta Guwahati", "Hotel Vivanta Ambassador"],
    language: "Assamese / Hindi", community: "Kalita Brahmin & Assamese business families",
    weddingStyle: "Brahmaputra riverside weddings blending Assamese Bihu tradition with the honour of a safa ceremony",
    uniqueHook: "Guwahati's rising prosperity is reflected in weddings that embrace the best traditions — including Ronak Dave's safas",
    nearbyCity: "Kolkata", isDestination: false, distanceFromVadodara: "1940 km"
  },

  // ═══════════════════════════ JHARKHAND (4) ═══════════════════════════
  {
    name: "Ranchi", slug: "ranchi", state: "Jharkhand", stateSlug: "jharkhand",
    region: "east", tier: 2,
    weddingCulture: "Ranchi — Jharkhand's capital and India's city of waterfalls — has a strong Steel Belt business community and a rising middle class that celebrates weddings with north Indian traditions. MS Dhoni's hometown has made Ranchi a city of national pride where weddings are celebrated with championship enthusiasm.",
    landmarks: ["Rock Garden Ranchi", "Hundru Falls", "Jagannath Temple"],
    areas: ["Main Road", "Lalpur", "Kanke Road"],
    venues: ["Radisson Hotel Ranchi", "BNR Hotel Ranchi"],
    language: "Hindi / Nagpuri", community: "Bihar-Jharkhand upper caste & business families",
    weddingStyle: "Jharkhand steel-city weddings with north Indian traditions and the hometown pride of a cricket-loving community",
    uniqueHook: "MS Dhoni's hometown appreciates champions — Ronak Dave's world-record title makes him the champion of safa artists",
    nearbyCity: "Patna", isDestination: false, distanceFromVadodara: "1350 km"
  },

  // ═══════════════════════════ ODISHA (4) ═══════════════════════════
  {
    name: "Bhubaneswar", slug: "bhubaneswar", state: "Odisha", stateSlug: "odisha",
    region: "east", tier: 2,
    weddingCulture: "Bhubaneswar — the Temple City of India — is surrounded by hundreds of ancient Odishan temples and is home to the Lingaraj Mahaprabhu tradition. Weddings here are deeply rooted in Odishan Brahmin and Khandayat Kshatriya customs where the safa ceremony anchors the groom's identity.",
    landmarks: ["Lingaraj Temple", "Mukteshwar Temple", "Udayagiri Caves"],
    areas: ["Bapuji Nagar", "Saheed Nagar", "Nayapalli"],
    venues: ["The Crown Bhubaneswar", "Mayfair Lagoon Bhubaneswar"],
    language: "Odia / Hindi", community: "Odishan Brahmin & Khandayat Kshatriya",
    weddingStyle: "Temple City weddings where every ritual is a Lingaraj blessing and the safa holds sacred meaning",
    uniqueHook: "Bhubaneswar's spiritually rooted families want the safa tying done with heritage precision — exactly what Ronak Dave offers",
    nearbyCity: "Kolkata", isDestination: false, distanceFromVadodara: "1450 km"
  },

  // ═══════════════════════════ CHHATTISGARH (3) ═══════════════════════════
  {
    name: "Raipur", slug: "raipur", state: "Chhattisgarh", stateSlug: "chhattisgarh",
    region: "central", tier: 2,
    weddingCulture: "Raipur — the steel and mining capital of central India — has a prosperous Agrawal, Sahu, and Marwari business community known for large wedding celebrations. The region's mineral wealth funds spectacular baraats where the groom's safa is a crown of commercial success.",
    landmarks: ["Mahant Ghasidas Memorial Museum", "Dudhadhari Monastery", "Vivekananda Sarovar"],
    areas: ["Shankar Nagar", "Civil Lines", "Pandri"],
    venues: ["Hotel Babylon Inn Raipur", "Courtyard by Marriott Raipur"],
    language: "Hindi / Chhattisgarhi", community: "Agrawal & Marwari business families",
    weddingStyle: "Chhattisgarh's mineral-wealth powered weddings where business success is celebrated with a world-class safa",
    uniqueHook: "Raipur's mining magnates celebrate success with the best — Ronak Dave is their choice for the ultimate safa",
    nearbyCity: "Nagpur", isDestination: false, distanceFromVadodara: "835 km"
  },

  // ═══════════════════════════ ANDHRA PRADESH MORE ═══════════════════════════
  {
    name: "Vijayawada", slug: "vijayawada", state: "Andhra Pradesh", stateSlug: "andhra-pradesh",
    region: "south", tier: 2,
    weddingCulture: "Vijayawada — on the banks of the Krishna River — is the business capital of Andhra Pradesh with a prosperous Kamma and Kapu community known for large, elaborate weddings. The city's business success is reflected in spectacular baraat processions along the Krishna riverfront.",
    landmarks: ["Kanaka Durga Temple", "Prakasam Barrage", "Undavalli Caves"],
    areas: ["Governorpet", "Benz Circle", "Suryaraopet"],
    venues: ["The Park Vijayawada", "Hotel Manorama"],
    language: "Telugu", community: "Kamma & Kapu business families",
    weddingStyle: "Krishna River baraat weddings with Andhra's Kamma community grandeur",
    uniqueHook: "Vijayawada's successful Kamma families want the very best for their son's baraat — Ronak Dave delivers",
    nearbyCity: "Hyderabad", isDestination: false, distanceFromVadodara: "1060 km"
  },
  {
    name: "Tirupati", slug: "tirupati", state: "Andhra Pradesh", stateSlug: "andhra-pradesh",
    region: "south", tier: 2,
    weddingCulture: "Tirupati — home of Lord Venkateswara on the Tirumala Hills — is the most visited religious site in the world. Families who marry after taking blessings from Lord Balaji consider the entire wedding sacred. The safa ceremony here carries a divine blessing that elevates every thread.",
    landmarks: ["Tirumala Venkateswara Temple", "Sri Padmavathi Temple", "Kapila Theertham"],
    areas: ["Tirumala Hills", "Balaji Colony", "Alipiri"],
    venues: ["Hotel Marasa Sarovar Premiere", "Quality Inn Bliss"],
    language: "Telugu", community: "Devotee families from across India",
    weddingStyle: "Lord Venkateswara-blessed sacred destination weddings from Andhra and across India",
    uniqueHook: "In Lord Balaji's city, where millions seek perfection, Ronak Dave's world-record artistry is the only choice",
    nearbyCity: "Chennai", isDestination: true, distanceFromVadodara: "1180 km"
  },

  // ═══════════════════════════ REMAINING IMPORTANT CITIES ═══════════════════════════
  {
    name: "Srinagar", slug: "srinagar-jk", state: "Jammu & Kashmir", stateSlug: "jammu-kashmir",
    region: "north", tier: 2,
    weddingCulture: "Srinagar's Dal Lake and Mughal gardens provide an unmatched setting for destination weddings. Kashmiri Pandit families returning from across India host traditional Kraamun ceremonies while Muslim families celebrate Nikaah-Walima with elaborate traditional dress including the proud Kashmiri pagdi.",
    landmarks: ["Dal Lake", "Mughal Gardens of Srinagar", "Hazratbal"],
    areas: ["Rajbagh", "Lal Chowk", "Hazuri Bagh"],
    venues: ["Houseboat Holidays", "The Khyber Himalayan Resort"],
    language: "Kashmiri / Urdu", community: "Kashmiri Muslim & Pandit",
    weddingStyle: "Dal Lake houseboat weddings with Mughal Garden ceremonies and Kashmiri pagdi traditions",
    uniqueHook: "Kashmir deserves paradise-quality craftsmanship — Ronak Dave travels to make every Kashmir wedding unforgettable",
    nearbyCity: "Jammu", isDestination: true, distanceFromVadodara: "1500 km"
  },
  {
    name: "Jalandhar", slug: "jalandhar", state: "Punjab", stateSlug: "punjab",
    region: "north", tier: 2,
    weddingCulture: "Jalandhar — a major NRI hub and sports goods manufacturing centre — has a Doabi Sikh community known for lavish weddings that often include NRI relatives flying in from Canada, UK, and USA. Doabi Jat Sikh baraats are among Punjab's most energetic celebrations.",
    landmarks: ["Devi Talab Mandir", "Imam Nasir Mosque", "Company Bagh"],
    areas: ["Model Town", "Nakodar Road", "Basti Sheikh"],
    venues: ["Hotel Radisson Jalandhar", "Galaxy Hotel Jalandhar"],
    language: "Punjabi (Doabi)", community: "Doabi Jat Sikh & NRI families",
    weddingStyle: "Doabi NRI Sikh homecoming weddings with Canada-UK relatives and traditional Punjabi safa grandeur",
    uniqueHook: "Jalandhar's NRI Sikh families want the best India has to offer when they return home — that's Ronak Dave",
    nearbyCity: "Amritsar", isDestination: false, distanceFromVadodara: "1220 km"
  },
  {
    name: "Patiala", slug: "patiala", state: "Punjab", stateSlug: "punjab",
    region: "north", tier: 2,
    weddingCulture: "Patiala — known for the Patiala peg and the grand Patiala royal family — has a unique Sikh-Rajput wedding culture. The Patiala safa (turban style) is named after this city and is one of India's most recognisable turban traditions. Ronak Dave's expertise in the Patiala shahi safa is unmatched.",
    landmarks: ["Qila Mubarak", "Sheesh Mahal Patiala", "Bahadurgarh Fort"],
    areas: ["Mall Road", "New Lal Bagh Colony", "Sanauri Adda"],
    venues: ["Baradari Garden", "Hotel Rajindra Patiala"],
    language: "Punjabi", community: "Sikh Royal lineage & Punjabi elite",
    weddingStyle: "The city that gave India the Patiala safa style — where Ronak Dave's expertise in this tradition is legendary",
    uniqueHook: "The Patiala turban was born in this city — who better to tie it than India's world-record Patiala safa specialist",
    nearbyCity: "Chandigarh", isDestination: false, distanceFromVadodara: "1140 km"
  },
  {
    name: "Kanpur", slug: "kanpur", state: "Uttar Pradesh", stateSlug: "uttar-pradesh",
    region: "north", tier: 1,
    weddingCulture: "Kanpur — India's leather and textile industrial giant — has a large Agarwal business community and Kayastha elite known for multi-day wedding celebrations. Kanpur baraats through Civil Lines are legendary — long processions with thousands of lights, dhol, and the groom crowned in the finest safa.",
    landmarks: ["Kanpur Zoo", "Phool Bagh", "Allen Forest Zoo"],
    areas: ["Civil Lines", "Swaroop Nagar", "Vikas Nagar"],
    venues: ["Hotel Landmark Kanpur", "Ramada by Wyndham Kanpur"],
    language: "Hindi", community: "Agarwal business community & Kayastha",
    weddingStyle: "Industrial UP business dynasty weddings with Kanpur's legendary Civil Lines baraat processions",
    uniqueHook: "Kanpur's wealthy Agarwal families invest in the best for every occasion — Ronak Dave is that investment",
    nearbyCity: "Lucknow", isDestination: false, distanceFromVadodara: "968 km"
  },
  {
    name: "Mangalore", slug: "mangalore", state: "Karnataka", stateSlug: "karnataka",
    region: "south", tier: 2,
    weddingCulture: "Mangalore — the Tulu Nadu cultural capital — is home to Bunt, GSB Brahmin, and Billava communities. While South Indian Hindu weddings here have their own rituals, Mangalore's North Indian and Konkan settlers celebrate baraat safa traditions with great fervour.",
    landmarks: ["Kadri Manjunath Temple", "Panambur Beach", "St. Aloysius Chapel"],
    areas: ["Hampankatta", "Attavar", "Kankanady"],
    venues: ["Gateway Hotel Mangalore", "The Ocean Pearl Retreat"],
    language: "Tulu / Kannada / Konkani", community: "Bunt, GSB Brahmin, North Indian settlers",
    weddingStyle: "Tulu Nadu coastal weddings with GSB Brahmin traditions and North Indian safa ceremony influences",
    uniqueHook: "Mangalore's diverse community appreciates cultural expertise — Ronak Dave serves all traditions with equal mastery",
    nearbyCity: "Bengaluru", isDestination: false, distanceFromVadodara: "1050 km"
  },
  {
    name: "Madurai", slug: "madurai", state: "Tamil Nadu", stateSlug: "tamil-nadu",
    region: "south", tier: 2,
    weddingCulture: "Madurai — the Athens of the East and home of the Meenakshi Amman Temple — is Tamil culture at its purest. While Madurai's North Indian Marwari and Jain business families host safa ceremonies, the temple backdrop makes every wedding here feel like a divine event of cosmic significance.",
    landmarks: ["Meenakshi Amman Temple", "Thirumalai Nayakkar Palace", "Alagar Hills"],
    areas: ["Anna Nagar", "KK Nagar", "Bibi Kulam"],
    venues: ["Heritage Madurai", "Radisson Blu Madurai"],
    language: "Tamil / Hindi (Marwari community)", community: "Marwari & Jain settlers, Tamil Brahmin",
    weddingStyle: "Meenakshi Temple-blessed weddings where Madurai's ancient culture elevates every ceremony",
    uniqueHook: "In the shadow of Meenakshi Temple's 14 gopurams, Ronak Dave's towering safa artistry feels right at home",
    nearbyCity: "Chennai", isDestination: false, distanceFromVadodara: "1280 km"
  },
]

// ── Lookup helpers ──────────────────────────────────────────────────────────

export function getCityBySlug(slug: string): IndiaCityData | undefined {
  return INDIA_CITIES.find(c => c.slug === slug)
}

export function getCitiesByState(stateName: string): IndiaCityData[] {
  return INDIA_CITIES.filter(c => c.state.toLowerCase() === stateName.toLowerCase())
}

export function getCitiesByRegion(region: IndiaCityData["region"]): IndiaCityData[] {
  return INDIA_CITIES.filter(c => c.region === region)
}

export function getTier1Cities(): IndiaCityData[] {
  return INDIA_CITIES.filter(c => c.tier === 1)
}

export function getDestinationCities(): IndiaCityData[] {
  return INDIA_CITIES.filter(c => c.isDestination)
}

// All city slugs for static generation
export const ALL_INDIA_CITY_SLUGS = INDIA_CITIES.map(c => c.slug)
