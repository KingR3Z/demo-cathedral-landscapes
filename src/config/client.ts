export const client = {
  // Business Details
  name: "Cathedral Landscapes",
  tagline: "Landscaping | Gardens | Patios | Driveways",
  description: "Professional landscaper services in Canterbury.",
  category: "Landscaper",
  yearEstablished: "",

  // Contact
  phone: "07816 880941",
  email: "",
  website: "",

  // Location
  address: "Canterbury",
  city: "Canterbury",
  county: "",
  postcode: "",
  basedIn: "Canterbury",

  // People
  founderName: "",
  founderSurname: "",
  founderRole: "Director",

  // Social
  facebook: "",
  instagram: "",
  linkedin: "",
  twitter: "",

  // Reviews
  googleRating: "5",
  reviewCount: "8",

  // Services
  services: [
    { title: "Landscaping", description: "Complete garden transformations with expert hard and soft landscaping.", icon: "tree" },
    { title: "Garden Maintenance", description: "Regular garden care, lawn mowing, hedge trimming and seasonal tidy-ups.", icon: "shovel" },
    { title: "Fencing & Decking", description: "Quality timber fencing, gates, decking and outdoor structures.", icon: "wall" },
    { title: "Paving & Patios", description: "Professional patio and pathway installations in natural stone and block.", icon: "flower" },
  ],

  // DO NOT CHANGE — template defaults (desktop 16:9 + mobile 9:16 frames)
  cinematic: {
    frameCount: 181,
    frameDir: "/frames/",
    framePrefix: "frame_",
    frameExtension: ".jpg",
    framePadding: 4,
    scrollLength: "500vh",
    mobileFrameCount: 181,
    mobileFrameDir: "/frames-mobile/",
    scrubSpeed: 0.5,
    heroStillImage: "/images/hero-still.jpg",
    heroStillImageMobile: "/images/hero-still-mobile.jpg",
  },

  // DO NOT CHANGE — template defaults
  beforeAfter: {
    beforeImage: "/images/before.jpg",
    afterImage: "/images/after.jpg",
    beforeLabel: "Current Garden",
    afterLabel: "Our Vision",
  },

  // DO NOT CHANGE — template defaults
  transformations: [
    { before: "/images/before.jpg", after: "/images/after.jpg", label: "Complete Garden Renovation" },
    { before: "/images/patio-before.jpg", after: "/images/patio-after.jpg", label: "Patio Installation" },
    { before: "/images/front-before.jpg", after: "/images/front-after.jpg", label: "Front Garden" },
    { before: "/images/lawn-before.jpg", after: "/images/lawn-after.jpg", label: "Lawn Restoration" },
    { before: "/images/fence-before.jpg", after: "/images/fence-after.jpg", label: "New Fencing" },
    { before: "/images/deck-before.jpg", after: "/images/deck-after.jpg", label: "Decking & Furniture" },
    { before: "/images/path-before.jpg", after: "/images/path-after.jpg", label: "Garden Path" },
    { before: "/images/border-before.jpg", after: "/images/border-after.jpg", label: "Planting Borders" },
    { before: "/images/drive-before.jpg", after: "/images/drive-after.jpg", label: "Driveway" },
  ] as { before: string; after: string; label: string }[],

  // Reviews — placeholder
  reviews: [
    { name: "Phil Hurst", rating: 5, text: "Derek and his team did an excellent job with our back garden. We were very impressed with how thorough he was in the beginning and talked us through the whole project and what would be expected. We had some idea of what we wanted, and Derek …  +3 ", date: "4 years ago" },
    { name: "Peter Waller", rating: 5, text: "We are absolutely delighted with the work that Derek and his guys did for us which included the removal of a hawthorn hedge and replacement fencing.  Top quality materials (fence posts guaranteed for 25 years) professional, friendly, …  ", date: "9 years ago" },
    { name: "Adam Gillmore", rating: 5, text: "Derek and his team completed a large project for us which involved extending and replacing a patio, adding a new second patio, creating a millboard decking area and renovating a tired looking garage. …  +2 ", date: "8 years ago" },
    { name: "Ian L. George", rating: 5, text: "In commissioning the services of 'Cathedral Landscapes', we were hopeful that our Garden would be transformed into a central and immeasurably appealing feature of our Home. …  +8 ", date: "3 years ago" },
    { name: "George Matthews", rating: 5, text: "Derek and Paul delivered a first class service. Constructive and positive advice through out the delivery of our garden project. Excellent communication and professional, friendly manner easy to get on with. Really pleased with the outcome and can hi", date: "2 years ago" },
    { name: "Simon Westerman", rating: 5, text: "Cathedral Landscapes’ understanding of their client’s wishes, and ability to deliver is quite phenomenal. Their attention to detail makes such a difference, and their patient explanations to complete amateurs at garden design makes them …  ", date: "2 years ago" },
    { name: "Tinanewport52@G.mail Tina-newport", rating: 5, text: "Thank you  to Derek, Paul and his team for a great job completing our patio.  With workmanship to a high standard and we are pleased to recommend  cathedral  landscapes for future projects. Tina and John  ", date: "4 years ago" },
    { name: "Dee Patel", rating: 5, text: "My garden was on a complete mess, I'd had about 5 different quotes.  2 of which never got back to me, the third one had no idea what he was talking about.  That then left 2, Cathedral Landscape's (Derick) was the only one that seemed to …  +8 ", date: "8 years ago" },
  ] as { name: string; rating: number; text: string; date: string; badge?: string }[],

  // SEO
  seo: {
    title: "Cathedral Landscapes | Landscaper in Canterbury",
    description: "Professional landscaper in Canterbury. 5.0-star rated on Google. Call for a free quote.",
  },
};
