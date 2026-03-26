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
    { name: "JA L", rating: 5, text: "We had the pleasure of working with Derek and Georgie at Cathedral Landscapes for a major garden renovation, and we couldn’t be happier with the results. From start to finish, they were professional, personable, and incredibly knowledgeable. They guided us through every step of the process, from planning and material selection to expert advice on resources and delivery. Their workmanship is of the highest standard, and the transformation of our garden has exceeded our expectations. If you’re looking for skilled, reliable, and dedicated landscapers, we can’t recommend them highly enough!", date: "a year ago" },
    { name: "Simon Westerman", rating: 5, text: "It is just under two years since Derek and Paul built our garden, and at the time we said it was magnificent. Looking back now, over time, it has given us immeasurable pleasure, and their attention to detail was wonderful. So we thought we'd write this second review by way of thanks.", date: "a year ago" },
    { name: "Colin Rose", rating: 5, text: "Derek and Georgie carried out an extension to our existing patio and found an almost match to the existing slab. We are extremely satisfied and happy with the standard of work we received, and disruption was kept to a minimum. We would thoroughly recommend to anyone wish to have any hard landscaping work done.", date: "a year ago", badge: "Local Guide" },
    { name: "Angie Needham", rating: 5, text: "We bought some preowned slabs from Derek and Paul. We arranged delivery with them, they were prompt and professional, polite and even brought them to the front door for us! Excellent friendly service, thankyou", date: "2 years ago" },
    { name: "Clare Scott", rating: 5, text: "Fantastic dealing with Derek. Communicative and realistic. Our expectations were met and the work was completed in the expected time and to our complete satisfaction.  We would recommend dealing with Cathedral landscapes wholeheartedly.", date: "2 years ago" },
    { name: "David Culverhouse", rating: 5, text: "Great service. Hospitable, fast and value for money. Can cover pretty much all requirements around the garden - and when other people were slow, not bothering to turn up or the job was too small, Derek and Cathedral Landscapes made sure everything got sorted.", date: "2 years ago" },
  ] as { name: string; rating: number; text: string; date: string; badge?: string }[],

  // SEO
  seo: {
    title: "Cathedral Landscapes | Landscaper in Canterbury",
    description: "Professional landscaper in Canterbury. 5.0-star rated on Google. Call for a free quote.",
  },
};
