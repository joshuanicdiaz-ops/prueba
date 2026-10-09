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

    // Home slideshow: seconds per photo and fade length in seconds (0 = hard cut).
    slideshow: {
      seconds: 1.5,
      fade: 0,
      mobileSeconds: 3,
      mobileFade: 0.4,
      photos: [
        { src: "images/lagrieta/01.jpg", w: 1333, h: 2000 },
        { src: "images/lagrieta/02.jpg", w: 1333, h: 2000 },
        { src: "images/lagrieta/03.jpg", w: 1333, h: 2000 },
        { src: "images/lagrieta/04.jpg", w: 1333, h: 2000 },
        { src: "images/lagrieta/05.jpg", w: 1333, h: 2000 },
        { src: "images/lagrieta/06.jpg", w: 1333, h: 2000 },
        { src: "images/lagrieta/07.jpg", w: 1333, h: 2000 },
        { src: "images/lagrieta/08.jpg", w: 1333, h: 2000 },
        { src: "images/lagrieta/09.jpg", w: 1333, h: 2000 },
        { src: "images/lagrieta/10.jpg", w: 1333, h: 2000 },
        { src: "images/lagrieta/11.jpg", w: 1333, h: 2000 },
        { src: "images/lagrieta/12.jpg", w: 1333, h: 2000 },
        { src: "images/lagrieta/13.jpg", w: 1333, h: 2000 },
        { src: "images/lagrieta/14.jpg", w: 1333, h: 2000 },
        { src: "images/lagrieta/15.jpg", w: 1333, h: 2000 },
        { src: "images/lagrieta/16.jpg", w: 1333, h: 2000 },
        { src: "images/lagrieta/17.jpg", w: 1333, h: 2000 },
        { src: "images/lagrieta/18.jpg", w: 1333, h: 2000 },
        { src: "images/lagrieta/19.jpg", w: 1333, h: 2000 },
        { src: "images/lagrieta/20.jpg", w: 1333, h: 2000 },
        { src: "images/lagrieta/21.jpg", w: 1333, h: 2000 },
        { src: "images/lagrieta/22.jpg", w: 1333, h: 2000 },
        { src: "images/lagrieta/23.jpg", w: 1333, h: 2000 },
        { src: "images/lagrieta/24.jpg", w: 1333, h: 2000 },
        { src: "images/lagrieta/25.jpg", w: 1333, h: 2000 },
        { src: "images/lagrieta/26.jpg", w: 1333, h: 2000 },
        { src: "images/lagrieta/27.jpg", w: 1333, h: 2000 },
        { src: "images/lagrieta/28.jpg", w: 1333, h: 2000 },
        { src: "images/lagrieta/29.jpg", w: 1333, h: 2000 },
        { src: "images/lagrieta/30.jpg", w: 1333, h: 2000 },
        { src: "images/lagrieta/31.jpg", w: 1333, h: 2000 },
        { src: "images/lagrieta/32.jpg", w: 1333, h: 2000 },
        { src: "images/lagrieta/33.jpg", w: 1333, h: 2000 },
        { src: "images/lagrieta/34.jpg", w: 1333, h: 2000 },
        { src: "images/lagrieta/35.jpg", w: 1333, h: 2000 },
        { src: "images/lagrieta/36.jpg", w: 1333, h: 2000 },
        { src: "images/lagrieta/37.jpg", w: 1333, h: 2000 },
        { src: "images/lagrieta/38.jpg", w: 1333, h: 2000 },
        { src: "images/lagrieta/39.jpg", w: 1333, h: 2000 },
        { src: "images/lagrieta/40.jpg", w: 1333, h: 2000 },
        { src: "images/lagrieta/41.jpg", w: 1333, h: 2000 },
        { src: "images/lagrieta/42.jpg", w: 1333, h: 2000 },
        { src: "images/lagrieta/43.jpg", w: 1333, h: 2000 },
        { src: "images/lagrieta/44.jpg", w: 1333, h: 2000 }
      ]
    },

    // Photo grid under the slideshow. columns = photos per row on a computer.
    grid: {
      columns: 4,
      mobileColumns: 2
    }
  },

  bio: {
    photo: "images/bio/portrait.jpg",
    photoCredit: "",
    paragraphs: [
      "Born in 1997 in Guatemala City, he approaches the camera as a bridge between concept and form, using it to translate ideas into a precise visual language that moves fluidly between sensory exploration and commercial work.",
      "He values experimentation and clarity, seeking images that reveal structure, atmosphere, and the quiet tension within each project.",
      "His practice spans photography and video, guided by light and a persistent curiosity for new ways of seeing."
    ],
    lists: []
  },

  /*
    PHOTO GRID
    The photos shown in the grid under the slideshow, in order.
    Each photo: { src, w, h }   (w and h = pixel size, helps the zoom open faster)
  */
  photos: [
    { src: "images/meatpack/01.jpg", w: 1333, h: 2000 },
    { src: "images/meatpack/02.jpg", w: 1333, h: 2000 },
    { src: "images/meatpack/03.jpg", w: 1333, h: 2000 },
    { src: "images/meatpack/04.jpg", w: 1333, h: 2000 },
    { src: "images/meatpack/05.jpg", w: 1333, h: 2000 },
    { src: "images/meatpack/06.jpg", w: 1333, h: 2000 },
    { src: "images/meatpack/07.jpg", w: 1333, h: 2000 },
    { src: "images/meatpack/08.jpg", w: 1333, h: 2000 },
    { src: "images/meatpack/09.jpg", w: 1333, h: 2000 },
    { src: "images/meatpack/10.jpg", w: 1333, h: 2000 },
    { src: "images/meatpack/11.jpg", w: 1333, h: 2000 }
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
