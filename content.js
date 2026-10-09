/*
  CONTENT
  This is the only file you need to edit to update the site.
  Instructions in Spanish are in README.md.
*/

window.PORTFOLIO = {
  site: {
    name: "Joshua Díaz",
    title: "Joshua Díaz, photographer and video producer",
    email: "info@furia-studio.com",
    instagram: "https://www.instagram.com/joshudiaz",
    vimeo: "",

    // Home slideshow. Seconds per photo and fade length in seconds (0 = hard cut).
    // Leave "photos" empty to use the first photo of every project.
    slideshow: {
      seconds: 1.8,
      fade: 0,
      mobileSeconds: 3,
      mobileFade: 0.6,
      photos: [
        // { src: "images/fuego/01.jpg", project: "fuego" },
      ]
    }
  },

  bio: {
    photo: "images/portraits/01.jpg",
    photoCredit: "",
    paragraphs: [
      "Born in 1997 in Guatemala City, he approaches the camera as a bridge between concept and form, using it to translate ideas into a precise visual language that moves fluidly between sensory exploration and commercial work.",
      "He values experimentation and clarity, seeking images that reveal structure, atmosphere, and the quiet tension within each project.",
      "His practice spans photography and video, guided by light and a persistent curiosity for new ways of seeing."
    ],
    lists: []
  },

  /*
    PHOTO PROJECTS
    Each photo: { src, alt, caption (optional), w, h (optional, pixel size; helps zoom open faster) }
    The first photo is the cover, unless you set cover: "images/..."
  */
  projects: [
    {
      slug: "fuego",
      title: "Volcán de Fuego",
      year: "2026",
      place: "Sacatepéquez, Guatemala",
      type: "Personal",
      description: "A two-day walk around the active crater, shot between ash clouds and first light.",
      photos: [
        { src: "images/fuego/01.jpg", alt: "Volcano at dawn" },
        { src: "images/fuego/02.jpg", alt: "Ridge path" },
        { src: "images/fuego/03.jpg", alt: "Ash cloud" },
        { src: "images/fuego/04.jpg", alt: "Camp at night" },
        { src: "images/fuego/05.jpg", alt: "Descent" }
      ]
    },
    {
      slug: "market-days",
      title: "Market days",
      year: "2025",
      place: "Chichicastenango, Guatemala",
      type: "Personal",
      description: "Thursday and Sunday at the market, from setup to the last stall packing up.",
      photos: [
        { src: "images/market-days/01.jpg", alt: "Market stalls" },
        { src: "images/market-days/02.jpg", alt: "Vendor portrait" },
        { src: "images/market-days/03.jpg", alt: "Church steps" },
        { src: "images/market-days/04.jpg", alt: "Textiles" }
      ]
    },
    {
      slug: "incentive-trip",
      title: "Incentive trip",
      year: "2025",
      place: "On location",
      type: "Event coverage",
      client: "ASEA",
      description: "Photo coverage of a five-day incentive trip.",
      photos: [
        { src: "images/incentive-trip/01.jpg", alt: "Group dinner" },
        { src: "images/incentive-trip/02.jpg", alt: "Excursion" },
        { src: "images/incentive-trip/03.jpg", alt: "Stage" }
      ]
    },
    {
      slug: "portraits",
      title: "Portraits",
      year: "2024–2026",
      place: "Guatemala City",
      type: "Portrait",
      description: "Ongoing series of friends, artists and collaborators.",
      photos: [
        { src: "images/portraits/02.jpg", alt: "Portrait" },
        { src: "images/portraits/01.jpg", alt: "Portrait" },
        { src: "images/portraits/03.jpg", alt: "Portrait" },
        { src: "images/portraits/04.jpg", alt: "Portrait" }
      ]
    },
    {
      slug: "salt-lake-city",
      title: "Salt Lake City",
      year: "2025",
      place: "Utah, United States",
      type: "Travel",
      description: "Walks through the Granary District and the edges of the city.",
      photos: [
        { src: "images/salt-lake-city/01.jpg", alt: "Warehouse" },
        { src: "images/salt-lake-city/02.jpg", alt: "Street" },
        { src: "images/salt-lake-city/03.jpg", alt: "Mountains" },
        { src: "images/salt-lake-city/04.jpg", alt: "Gallery" }
      ]
    },
    {
      slug: "atitlan",
      title: "Atitlán, low season",
      year: "2024",
      place: "Sololá, Guatemala",
      type: "Travel",
      description: "The lake in September, when the boats run half empty.",
      photos: [
        { src: "images/atitlan/01.jpg", alt: "Lake" },
        { src: "images/atitlan/02.jpg", alt: "Dock" },
        { src: "images/atitlan/03.jpg", alt: "Boat" }
      ]
    }
  ],

  /*
    VIDEOS
    loop:   short silent clip for the background (mp4, 6 to 15 seconds, under ~5 MB)
    poster: a still frame shown while the clip loads
    Full video, use ONE of:
      vimeo: "123456789"       (number from the Vimeo link)
      youtube: "abc123XYZ"     (code after v= in the YouTube link)
      file: "videos/full.mp4"  (only for short pieces; GitHub has a 100 MB limit per file)
  */
  videos: [
    {
      slug: "aftermovie",
      title: "Aftermovie",
      year: "2025",
      client: "ASEA",
      role: "Director, editor",
      description: "Five days of an incentive trip, cut into three minutes.",
      loop: "videos/rainy-loop.mp4",
      poster: "videos/rainy-poster.jpg",
      vimeo: ""
    },
    {
      slug: "testimonial",
      title: "Testimonial",
      year: "2025",
      client: "ASEA",
      role: "Producer, DP",
      description: "A customer story filmed in one day.",
      loop: "videos/night-roads-loop.mp4",
      poster: "videos/night-roads-poster.jpg",
      vimeo: ""
    },
    {
      slug: "fuego-film",
      title: "Fuego",
      year: "2026",
      role: "Director, DP",
      description: "Short film from the Volcán de Fuego trip.",
      loop: "videos/fuego-loop.mp4",
      poster: "videos/fuego-poster.jpg",
      vimeo: ""
    },
    {
      slug: "market-film",
      title: "Sunday Market",
      year: "2025",
      role: "Director, editor",
      description: "",
      loop: "videos/market-loop.mp4",
      poster: "videos/market-poster.jpg",
      youtube: ""
    },
    {
      slug: "lake",
      title: "Low Season",
      year: "2024",
      role: "Director, DP, editor",
      description: "",
      loop: "videos/lake-loop.mp4",
      poster: "videos/lake-poster.jpg",
      file: ""
    }
  ]
};
