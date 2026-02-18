// Basic data model for a subset of Stephen King novels.
// This is intentionally not exhaustive – focused on well-known books and series
// where reading order / spoilers matter most.

const novels = [
  {
    id: "carrie",
    title: "Carrie",
    year: 1974,
    series: null,
    isSeriesEntry: false,
    spoilerLevel: "safe", // early standalone
    notes: "Debut novel. Largely standalone; minor universe references only."
  },
  {
    id: "salems-lot",
    title: "'Salem's Lot",
    year: 1975,
    series: null,
    isSeriesEntry: false,
    spoilerLevel: "linked", // has tie-ins to Dark Tower
    notes: "Vampire story with later ties into The Dark Tower universe."
  },
  {
    id: "the-shining",
    title: "The Shining",
    year: 1977,
    series: "The Shining",
    isSeriesEntry: true,
    spoilerLevel: "safe",
    notes: "Classic haunted hotel story. Read before Doctor Sleep."
  },
  {
    id: "doctor-sleep",
    title: "Doctor Sleep",
    year: 2013,
    series: "The Shining",
    isSeriesEntry: true,
    spoilerLevel: "spoiler", // strongly spoils The Shining
    notes: "Direct sequel to The Shining; heavily spoils the first book."
  },
  {
    id: "the-stand",
    title: "The Stand",
    year: 1978,
    series: null,
    isSeriesEntry: false,
    spoilerLevel: "linked",
    notes: "Epic post-apocalyptic novel with important Dark Tower connections."
  },
  {
    id: "the-long-walk",
    title: "The Long Walk",
    year: 1979,
    series: null,
    isSeriesEntry: false,
    spoilerLevel: "safe",
    notes: "Dystopian competition story (as Richard Bachman). Standalone."
  },
  {
    id: "the-dead-zone",
    title: "The Dead Zone",
    year: 1979,
    series: null,
    isSeriesEntry: false,
    spoilerLevel: "safe",
    notes: "Psychic thriller; mostly standalone with light universe nods."
  },
  {
    id: "firestarter",
    title: "Firestarter",
    year: 1980,
    series: null,
    isSeriesEntry: false,
    spoilerLevel: "safe",
    notes: "Standalone thriller about government experiments and pyrokinesis."
  },
  {
    id: "cujo",
    title: "Cujo",
    year: 1981,
    series: null,
    isSeriesEntry: false,
    spoilerLevel: "linked",
    notes: "Shares setting and some connections with The Dead Zone and Castle Rock stories."
  },
  {
    id: "the-dark-half",
    title: "The Dark Half",
    year: 1989,
    series: null,
    isSeriesEntry: false,
    spoilerLevel: "linked",
    notes: "Castle Rock novel; connects to Needful Things."
  },
  {
    id: "it",
    title: "It",
    year: 1986,
    series: null,
    isSeriesEntry: false,
    spoilerLevel: "linked",
    notes: "Large standalone story but ties into the wider multiverse, especially The Dark Tower."
  },
  {
    id: "misery",
    title: "Misery",
    year: 1987,
    series: null,
    isSeriesEntry: false,
    spoilerLevel: "safe",
    notes: "Psychological horror; very safe standalone start."
  },
  {
    id: "christine",
    title: "Christine",
    year: 1983,
    series: null,
    isSeriesEntry: false,
    spoilerLevel: "safe",
    notes: "Haunted car story; essentially standalone."
  },
  {
    id: "pet-sematary",
    title: "Pet Sematary",
    year: 1983,
    series: null,
    isSeriesEntry: false,
    spoilerLevel: "safe",
    notes: "Very dark standalone horror novel."
  },
  {
    id: "needful-things",
    title: "Needful Things",
    year: 1991,
    series: "Castle Rock",
    isSeriesEntry: true,
    spoilerLevel: "spoiler",
    notes: "Marketed as 'the last Castle Rock story'; spoils earlier Castle Rock novels."
  },
  {
    id: "geralds-game",
    title: "Gerald's Game",
    year: 1992,
    series: null,
    isSeriesEntry: false,
    spoilerLevel: "linked",
    notes: "Psychological horror with some links to Dolores Claiborne."
  },
  {
    id: "dolores-claiborne",
    title: "Dolores Claiborne",
    year: 1992,
    series: null,
    isSeriesEntry: false,
    spoilerLevel: "linked",
    notes: "Companion to Gerald's Game; light cross-references."
  },
  {
    id: "insomnia",
    title: "Insomnia",
    year: 1994,
    series: null,
    isSeriesEntry: false,
    spoilerLevel: "linked",
    notes: "Deeply tied into Dark Tower mythology; better after some core books."
  },
  {
    id: "green-mile",
    title: "The Green Mile",
    year: 1996,
    series: null,
    isSeriesEntry: false,
    spoilerLevel: "safe",
    notes: "Originally serialized; emotionally heavy but mostly standalone."
  },
  {
    id: "bag-of-bones",
    title: "Bag of Bones",
    year: 1998,
    series: null,
    isSeriesEntry: false,
    spoilerLevel: "safe",
    notes: "Ghost story with writer protagonist; standalone."
  },
  // Dark Tower core series (highly interconnected)
  {
    id: "dark-tower-1",
    title: "The Gunslinger",
    year: 1982,
    series: "The Dark Tower",
    isSeriesEntry: true,
    spoilerLevel: "spoiler",
    notes: "Start here for The Dark Tower. Later volumes spoil and connect to many other books."
  },
  {
    id: "dark-tower-2",
    title: "The Drawing of the Three",
    year: 1987,
    series: "The Dark Tower",
    isSeriesEntry: true,
    spoilerLevel: "spoiler",
    notes: "Second Dark Tower book; should be read after The Gunslinger."
  },
  {
    id: "dark-tower-3",
    title: "The Waste Lands",
    year: 1991,
    series: "The Dark Tower",
    isSeriesEntry: true,
    spoilerLevel: "spoiler",
    notes: "Third Dark Tower book; continues the main story."
  },
  {
    id: "dark-tower-4",
    title: "Wizard and Glass",
    year: 1997,
    series: "The Dark Tower",
    isSeriesEntry: true,
    spoilerLevel: "spoiler",
    notes: "Fourth Dark Tower book; flashback heavy but still best read in order."
  },
  {
    id: "dark-tower-5",
    title: "Wolves of the Calla",
    year: 2003,
    series: "The Dark Tower",
    isSeriesEntry: true,
    spoilerLevel: "spoiler",
    notes: "Ties strongly into 'Salem's Lot and other works; spoilers both ways."
  },
  {
    id: "dark-tower-6",
    title: "Song of Susannah",
    year: 2004,
    series: "The Dark Tower",
    isSeriesEntry: true,
    spoilerLevel: "spoiler",
    notes: "Deep multiverse spoilers; read late."
  },
  {
    id: "dark-tower-7",
    title: "The Dark Tower",
    year: 2004,
    series: "The Dark Tower",
    isSeriesEntry: true,
    spoilerLevel: "spoiler",
    notes: "Capstone of the series and many tie-ins; avoid until you've read the series and key connected novels."
  },
  {
    id: "11-22-63",
    title: "11/22/63",
    year: 2011,
    series: null,
    isSeriesEntry: false,
    spoilerLevel: "linked",
    notes: "Time travel novel with some Dark Tower and Derry cameos."
  },
  {
    id: "liseys-story",
    title: "Lisey's Story",
    year: 2006,
    series: null,
    isSeriesEntry: false,
    spoilerLevel: "safe",
    notes: "Dark fantasy / love story; mostly standalone but dense and strange."
  },
  {
    id: "under-the-dome",
    title: "Under the Dome",
    year: 2009,
    series: null,
    isSeriesEntry: false,
    spoilerLevel: "safe",
    notes: "Big ensemble novel about a town trapped under a dome; standalone."
  },
  {
    id: "mr-mercedes",
    title: "Mr. Mercedes",
    year: 2014,
    series: "Bill Hodges",
    isSeriesEntry: true,
    spoilerLevel: "safe",
    notes: "Start of the Bill Hodges / Mr. Mercedes trilogy."
  },
  {
    id: "finders-keepers",
    title: "Finders Keepers",
    year: 2015,
    series: "Bill Hodges",
    isSeriesEntry: true,
    spoilerLevel: "spoiler",
    notes: "Second in the Bill Hodges trilogy; spoils Mr. Mercedes."
  },
  {
    id: "end-of-watch",
    title: "End of Watch",
    year: 2016,
    series: "Bill Hodges",
    isSeriesEntry: true,
    spoilerLevel: "spoiler",
    notes: "Final Bill Hodges book; heavily spoils the previous two."
  },
  {
    id: "the-outsider",
    title: "The Outsider",
    year: 2018,
    series: null,
    isSeriesEntry: false,
    spoilerLevel: "spoiler",
    notes: "Heavily connected to the Bill Hodges trilogy; best read afterward."
  },
  {
    id: "revival",
    title: "Revival",
    year: 2014,
    series: null,
    isSeriesEntry: false,
    spoilerLevel: "linked",
    notes: "Cosmic horror with big Dark Tower multiverse nods."
  },
  {
    id: "the-institute",
    title: "The Institute",
    year: 2019,
    series: null,
    isSeriesEntry: false,
    spoilerLevel: "safe",
    notes: "Psychic children and a sinister institution; thematically linked to Firestarter."
  },
  // Additional novels to bring the graph closer to King's full bibliography
  {
    id: "roadwork",
    title: "Roadwork",
    year: 1981,
    series: null,
    isSeriesEntry: false,
    spoilerLevel: "safe",
    notes: "Bachman-era character study; effectively standalone."
  },
  {
    id: "running-man",
    title: "The Running Man",
    year: 1982,
    series: null,
    isSeriesEntry: false,
    spoilerLevel: "safe",
    notes: "Dystopian Bachman novel; standalone."
  },
  {
    id: "thinner",
    title: "Thinner",
    year: 1984,
    series: null,
    isSeriesEntry: false,
    spoilerLevel: "safe",
    notes: "Cursed-man story under the Bachman name; standalone."
  },
  {
    id: "tommyknockers",
    title: "The Tommyknockers",
    year: 1987,
    series: null,
    isSeriesEntry: false,
    spoilerLevel: "linked",
    notes: "Alien artifact in Maine; light links to wider universe."
  },
  {
    id: "langoliers",
    title: "The Langoliers",
    year: 1990,
    series: "Four Past Midnight",
    isSeriesEntry: true,
    spoilerLevel: "safe",
    notes: "Novella originally in Four Past Midnight; standalone time anomaly story."
  },
  {
    id: "secret-window",
    title: "Secret Window, Secret Garden",
    year: 1990,
    series: "Four Past Midnight",
    isSeriesEntry: true,
    spoilerLevel: "safe",
    notes: "Novella of writer paranoia; loosely related to later works."
  },
  {
    id: "desperation",
    title: "Desperation",
    year: 1996,
    series: null,
    isSeriesEntry: false,
    spoilerLevel: "linked",
    notes: "Shares villain and themes with The Regulators; multiverse-adjacent."
  },
  {
    id: "regulators",
    title: "The Regulators",
    year: 1996,
    series: null,
    isSeriesEntry: false,
    spoilerLevel: "linked",
    notes: "Bachman-titled twin to Desperation; best read as a pair."
  },
  {
    id: "girl-who-loved-tom-gordon",
    title: "The Girl Who Loved Tom Gordon",
    year: 1999,
    series: null,
    isSeriesEntry: false,
    spoilerLevel: "safe",
    notes: "Short wilderness survival horror; standalone."
  },
  {
    id: "dreamcatcher",
    title: "Dreamcatcher",
    year: 2001,
    series: null,
    isSeriesEntry: false,
    spoilerLevel: "linked",
    notes: "Alien invasion with Derry ties; connects loosely to It."
  },
  {
    id: "from-buick-8",
    title: "From a Buick 8",
    year: 2002,
    series: null,
    isSeriesEntry: false,
    spoilerLevel: "safe",
    notes: "Strange car in a police shed; standalone."
  },
  {
    id: "cell",
    title: "Cell",
    year: 2006,
    series: null,
    isSeriesEntry: false,
    spoilerLevel: "linked",
    notes: "Apocalypse via cell phones; thematically linked to The Stand."
  },
  {
    id: "duma-key",
    title: "Duma Key",
    year: 2008,
    series: null,
    isSeriesEntry: false,
    spoilerLevel: "safe",
    notes: "Haunted art on a Florida island; mostly standalone."
  },
  {
    id: "full-dark-no-stars",
    title: "Full Dark, No Stars",
    year: 2010,
    series: null,
    isSeriesEntry: false,
    spoilerLevel: "safe",
    notes: "Collection of novellas; each story mostly stands alone."
  },
  {
    id: "joyland",
    title: "Joyland",
    year: 2013,
    series: null,
    isSeriesEntry: false,
    spoilerLevel: "safe",
    notes: "Hard Case Crime novel set in an amusement park; standalone."
  },
  {
    id: "sleeping-beauties",
    title: "Sleeping Beauties",
    year: 2017,
    series: null,
    isSeriesEntry: false,
    spoilerLevel: "safe",
    notes: "Co-written with Owen King; apocalyptic fantasy, standalone."
  },
  {
    id: "later",
    title: "Later",
    year: 2021,
    series: null,
    isSeriesEntry: false,
    spoilerLevel: "safe",
    notes: "Hard Case Crime book; standalone with a few universe nods."
  },
  {
    id: "billy-summers",
    title: "Billy Summers",
    year: 2021,
    series: null,
    isSeriesEntry: false,
    spoilerLevel: "linked",
    notes: "Hitman story with brief connections to The Outsider."
  },
  {
    id: "fairy-tale",
    title: "Fairy Tale",
    year: 2022,
    series: null,
    isSeriesEntry: false,
    spoilerLevel: "safe",
    notes: "Dark fantasy adventure; mostly standalone with light multiverse nods."
  },
  {
    id: "holly",
    title: "Holly",
    year: 2023,
    series: "Holly Gibney",
    isSeriesEntry: true,
    spoilerLevel: "spoiler",
    notes: "Continuation of Holly Gibney's story from Mr. Mercedes and The Outsider; best read after those."
  },
  {
    id: "you-like-it-darker",
    title: "You Like It Darker",
    year: 2024,
    series: null,
    isSeriesEntry: false,
    spoilerLevel: "safe",
    notes: "Recent collection of short fiction; individual stories stand alone."
  }
];

// Global sort mode for both the graph layout and the book grid.
// "year" = by publication year, "alpha" = alphabetical by title.
let sortMode = "year";

// Links are directional: from -> to
// Meaning: "Ideally read 'from' before 'to' because 'to' spoils or builds upon 'from'."
const links = [
  // Shining sequence
  { from: "the-shining", to: "doctor-sleep", reason: "Direct sequel; Doctor Sleep spoils The Shining." },

  // Castle Rock / Needful Things
  { from: "cujo", to: "needful-things", reason: "Later Castle Rock story; references previous town history." },

  // Gerald's Game / Dolores Claiborne pairing
  { from: "geralds-game", to: "dolores-claiborne", reason: "Linked events; mild cross-references." },

  // Bill Hodges trilogy
  { from: "mr-mercedes", to: "finders-keepers", reason: "Second in trilogy; assumes knowledge of Mr. Mercedes." },
  { from: "finders-keepers", to: "end-of-watch", reason: "Final in trilogy; spoils earlier books." },

  // Dark Tower core order
  { from: "dark-tower-1", to: "dark-tower-2", reason: "Reading order within The Dark Tower." },
  { from: "dark-tower-2", to: "dark-tower-3", reason: "Reading order within The Dark Tower." },
  { from: "dark-tower-3", to: "dark-tower-4", reason: "Reading order within The Dark Tower." },
  { from: "dark-tower-4", to: "dark-tower-5", reason: "Reading order within The Dark Tower." },
  { from: "dark-tower-5", to: "dark-tower-6", reason: "Reading order within The Dark Tower." },
  { from: "dark-tower-6", to: "dark-tower-7", reason: "Reading order within The Dark Tower." },

  // Dark Tower relevant external links
  { from: "salems-lot", to: "dark-tower-5", reason: "Wolves of the Calla revisits characters from 'Salem's Lot." },
  { from: "the-stand", to: "dark-tower-2", reason: "Dark Tower references events and characters from The Stand." },
  { from: "it", to: "dark-tower-7", reason: "Dark Tower references beings and lore from It." },
  { from: "11-22-63", to: "dark-tower-7", reason: "Multiverse themes connect back into The Dark Tower." },

  // Insomnia / multiverse
  { from: "insomnia", to: "dark-tower-7", reason: "Shares key multiverse concepts with The Dark Tower." },

  // Bill Hodges -> The Outsider -> Holly
  { from: "end-of-watch", to: "the-outsider", reason: "The Outsider continues threads from the Bill Hodges trilogy." },
  { from: "the-outsider", to: "holly", reason: "Holly continues Holly Gibney's story from The Outsider and earlier books." }
];

const colorScale = {
  safe: "#31d27c",
  linked: "#f6c453",
  spoiler: "#ff5c7a"
};

const COVER_CACHE_PREFIX = "kingCover:";
const COVER_CACHE_NONE = "none";

function fetchWithTimeout(resource, options = {}) {
  const { timeout = 8000, ...rest } = options;
  return new Promise((resolve, reject) => {
    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), timeout);

    fetch(resource, { ...rest, signal: controller.signal })
      .then((response) => {
        clearTimeout(id);
        resolve(response);
      })
      .catch((error) => {
        clearTimeout(id);
        reject(error);
      });
  });
}

function spoilerLevelLabel(level) {
  switch (level) {
    case "safe":
      return "Spoiler-safe / good starting point";
    case "linked":
      return "Connected – some references or light spoilers";
    case "spoiler":
      return "Spoilery – best read after related works";
    default:
      return "Unknown";
  }
}

function nodeRadius(node) {
  if (node.series === "The Dark Tower") return 13;
  if (node.isSeriesEntry) return 11;
  return 9;
}

function getCachedCover(book) {
  try {
    const key = COVER_CACHE_PREFIX + book.id;
    const value = window.localStorage.getItem(key);
    if (!value) return null;
    return value;
  } catch {
    return null;
  }
}

function setCachedCover(book, value) {
  try {
    const key = COVER_CACHE_PREFIX + book.id;
    window.localStorage.setItem(key, value);
  } catch {
    // ignore quota / privacy errors
  }
}

async function tryGoogleBooks(book) {
  try {
    const titleQuery = encodeURIComponent(book.searchTitle || book.title);
    const url = `https://www.googleapis.com/books/v1/volumes?q=intitle:"${titleQuery}"+inauthor:"Stephen King"&maxResults=1`;
    const res = await fetchWithTimeout(url, { timeout: 10000 });
    if (!res.ok) return null;
    const data = await res.json();
    if (!data.items || data.items.length === 0) return null;
    const volume = data.items[0];
    const imageLinks = volume.volumeInfo?.imageLinks;
    if (!imageLinks) return null;
    // Prefer medium thumbnail, fallback to small or thumbnail
    const coverUrl = imageLinks.medium || imageLinks.small || imageLinks.thumbnail;
    if (!coverUrl) return null;
    // Replace http with https and ensure good size
    return coverUrl.replace(/^http:/, 'https:').replace(/&zoom=\d+/, '&zoom=1');
  } catch {
    return null;
  }
}

async function loadCover(book, imgEl) {
  try {
    const cached = getCachedCover(book);
    if (cached) {
      if (cached === COVER_CACHE_NONE) {
        const placeholderText = encodeURIComponent(book.title);
        imgEl.src = `https://via.placeholder.com/200x320/151832/ffffff?text=${placeholderText}`;
      } else {
        imgEl.src = cached;
      }
      return;
    }

    // Try Open Library first
    let coverUrl = null;
    try {
      const titleQuery = encodeURIComponent(book.searchTitle || book.title);
      const url = `https://openlibrary.org/search.json?title=${titleQuery}&author=Stephen+King&limit=1`;
      const res = await fetchWithTimeout(url, { timeout: 12000 });
      if (res.ok) {
        const data = await res.json();
        const doc = data.docs && data.docs[0];
        if (doc && doc.cover_i) {
          coverUrl = `https://covers.openlibrary.org/b/id/${doc.cover_i}-M.jpg`;
        }
      }
    } catch {
      // Continue to Google Books fallback
    }

    // If Open Library failed, try Google Books
    if (!coverUrl) {
      coverUrl = await tryGoogleBooks(book);
    }

    if (coverUrl) {
      imgEl.src = coverUrl;
      setCachedCover(book, coverUrl);
    } else {
      // Both sources failed: use placeholder
      const placeholderText = encodeURIComponent(book.title);
      const placeholderUrl = `https://via.placeholder.com/200x320/151832/ffffff?text=${placeholderText}`;
      imgEl.src = placeholderUrl;
      setCachedCover(book, COVER_CACHE_NONE);
    }
  } catch (e) {
    // Final fallback: placeholder
    const placeholderText = encodeURIComponent(book.title);
    const placeholderUrl = `https://via.placeholder.com/200x320/151832/ffffff?text=${placeholderText}`;
    imgEl.src = placeholderUrl;
    setCachedCover(book, COVER_CACHE_NONE);
  }
}

function createSvgElement(tag, attrs) {
  const el = document.createElementNS("http://www.w3.org/2000/svg", tag);
  Object.keys(attrs || {}).forEach((key) => el.setAttribute(key, attrs[key]));
  return el;
}

function buildBookGrid() {
  const grid = document.getElementById("bookGrid");
  if (!grid) return;

  grid.innerHTML = "";

  const books = novels.slice();
  if (sortMode === "year") {
    books.sort((a, b) => (a.year || 9999) - (b.year || 9999));
  } else {
    books.sort((a, b) => a.title.localeCompare(b.title));
  }

  books.forEach((book) => {
      const card = document.createElement("article");
      card.className = "book-card";
      card.dataset.bookId = book.id;

      const cover = document.createElement("div");
      cover.className = "book-card-cover";

      const img = document.createElement("img");
      img.className = "book-card-img";
      img.alt = `${book.title} cover`;
      img.loading = "lazy";
      cover.appendChild(img);

      const coverInner = document.createElement("div");
      coverInner.className = "book-card-cover-inner";
      coverInner.textContent = book.title;

      cover.appendChild(coverInner);

      const title = document.createElement("div");
      title.className = "book-card-title";
      title.textContent = book.title;

      const meta = document.createElement("div");
      meta.className = "book-card-meta";

      const yearSpan = document.createElement("span");
      yearSpan.textContent = book.year || "";

      const spoilerDot = document.createElement("span");
      spoilerDot.className =
        "book-card-spoiler-dot book-card-spoiler-" + book.spoilerLevel;

      meta.appendChild(yearSpan);
      meta.appendChild(spoilerDot);

      card.appendChild(cover);
      card.appendChild(title);
      card.appendChild(meta);

      grid.appendChild(card);

      // Load a real cover image if possible (falls back to styled title if not found)
      loadCover(book, img);
    });

  const countEl = document.getElementById("bookCount");
  if (countEl) {
    countEl.textContent = `(${novels.length} novels)`;
  }
}

function initGraph() {
  const container = document.getElementById("graph");
  const width = container.clientWidth || 800;
  const height = container.clientHeight || 500;

  const svg = createSvgElement("svg", {
    viewBox: `0 0 ${width} ${height}`,
    preserveAspectRatio: "xMidYMid meet"
  });
  container.appendChild(svg);

  const tooltip = document.createElement("div");
  tooltip.className = "tooltip hidden";
  container.appendChild(tooltip);

  const nodes = novels.map((d) => Object.assign({}, d));
  const linksData = links.map((d) => Object.assign({}, d));
  const nodeById = new Map(nodes.map((n) => [n.id, n]));

  // Simple radial layout – no external libraries
  const centerX = width / 2;
  const centerY = height / 2;
  const baseRadius = Math.min(width, height) * 0.35;

  // Wrapper group so we can zoom/pan everything together
  const contentGroup = createSvgElement("g", {});
  svg.appendChild(contentGroup);

  // Draw links
  const linkGroup = createSvgElement("g", {});
  contentGroup.appendChild(linkGroup);

  const linkElements = linksData.map((l) => {
    const source = nodeById.get(l.from);
    const target = nodeById.get(l.to);
    const line = createSvgElement("line", {
      x1: source.x,
      y1: source.y,
      x2: target.x,
      y2: target.y,
      class: "link"
    });
    linkGroup.appendChild(line);
    return { link: line, data: l };
  });

  // Draw nodes
  const nodeGroup = createSvgElement("g", {});
  contentGroup.appendChild(nodeGroup);

  const nodeElements = nodes.map((node) => {
    const g = createSvgElement("g", {
      class: "node",
      transform: `translate(${node.x},${node.y})`
    });

    const circle = createSvgElement("circle", {
      r: nodeRadius(node),
      fill: colorScale[node.spoilerLevel] || "#999"
    });

    const label = createSvgElement("text", {
      class: "node-label",
      x: nodeRadius(node) + 6,
      y: 3
    });
    label.textContent = node.title;

    g.appendChild(circle);
    g.appendChild(label);
    nodeGroup.appendChild(g);

    return { group: g, circle, label, data: node };
  });

  const detailsEl = document.getElementById("bookDetails");
  const toggleSpoilerEdges = document.getElementById("toggleSpoilerEdges");
  const filterSpoilerSafe = document.getElementById("filterSpoilerSafe");

  let selectedId = null;
  let spacingFactor = 1; // controls distance between circles

  // Pan state for moving the whole diagram
  let translateX = 0;
  let translateY = 0;

  function applyTransform() {
    contentGroup.setAttribute(
      "transform",
      `translate(${translateX},${translateY})`
    );
  }

  function updateLayout() {
    const effectiveRadius = baseRadius * spacingFactor;

    // determine ordering based on current sort mode
    const orderedNodes = nodes.slice();
    if (sortMode === "year") {
      orderedNodes.sort((a, b) => (a.year || 9999) - (b.year || 9999));
    } else {
      orderedNodes.sort((a, b) => a.title.localeCompare(b.title));
    }

    // update node coordinates
    orderedNodes.forEach((node, index) => {
      const angle = (index / orderedNodes.length) * Math.PI * 2 - Math.PI / 2;
      node.x = centerX + effectiveRadius * Math.cos(angle);
      node.y = centerY + effectiveRadius * Math.sin(angle);
    });

    // apply to DOM
    nodeElements.forEach(({ group, data }) => {
      group.setAttribute("transform", `translate(${data.x},${data.y})`);
    });

    linkElements.forEach(({ link, data }) => {
      const source = nodeById.get(data.from);
      const target = nodeById.get(data.to);
      link.setAttribute("x1", source.x);
      link.setAttribute("y1", source.y);
      link.setAttribute("x2", target.x);
      link.setAttribute("y2", target.y);
    });
  }

  function updateFilter() {
    const showEdges = toggleSpoilerEdges.checked;
    const onlySafe = filterSpoilerSafe.checked;

    linkElements.forEach(({ link }) => {
      if (showEdges) {
        link.classList.remove("hidden");
      } else {
        link.classList.add("hidden");
      }
    });

    nodeElements.forEach(({ group, data }) => {
      if (!onlySafe) {
        group.classList.remove("dimmed");
        return;
      }
      if (data.spoilerLevel === "safe") {
        group.classList.remove("dimmed");
      } else {
        group.classList.add("dimmed");
      }
    });
  }

  function renderDetails(d, outgoing, incoming) {
    const outgoingLinks = linksData.filter((l) => outgoing.has(l.to));
    const incomingLinks = linksData.filter((l) => incoming.has(l.from));

    const spoilerClass =
      d.spoilerLevel === "safe"
        ? "pill-safe"
        : d.spoilerLevel === "linked"
        ? "pill-warning"
        : "pill-danger";

    const seriesLabel = d.series
      ? `${d.series}${d.isSeriesEntry ? " series" : ""}`
      : d.isSeriesEntry
      ? "Series entry"
      : "Standalone";

    const seriesClass = d.series ? "pill-series" : "pill-standalone";

    const outgoingList = outgoingLinks
      .map((l) => {
        const t = nodeById.get(l.to);
        return `<li><strong>${t.title}</strong> – ${l.reason}</li>`;
      })
      .join("");

    const incomingList = incomingLinks
      .map((l) => {
        const s = nodeById.get(l.from);
        return `<li><strong>${s.title}</strong> – ${l.reason}</li>`;
      })
      .join("");

    detailsEl.innerHTML = `
      <h2>${d.title}</h2>
      <div class="book-meta">
        ${d.year ? `<span class="pill">${d.year}</span>` : ""}
        <span class="pill ${seriesClass}">${seriesLabel}</span>
        <span class="pill ${spoilerClass}">${spoilerLevelLabel(
          d.spoilerLevel
        )}</span>
      </div>
      <p>${d.notes}</p>
      <div class="reading-order">
        ${
          outgoingLinks.length
            ? `
          <h3>Best read before:</h3>
          <ul>${outgoingList}</ul>
        `
            : "<h3>Best read before:</h3><p>No strong spoiler links recorded.</p>"
        }
        ${
          incomingLinks.length
            ? `
          <h3>Consider reading first:</h3>
          <ul>${incomingList}</ul>
        `
            : "<h3>Consider reading first:</h3><p>Nothing absolutely required recorded here.</p>"
        }
      </div>
      <p class="disclaimer">
        Spoiler and reading-order info is approximate and opinionated. If you are extremely spoiler-averse, you may want to research further before reading.
      </p>
    `;
  }

  function selectNode(book) {
    selectedId = book.id;

    nodeElements.forEach(({ group, data }) => {
      if (data.id === selectedId) {
        group.classList.add("selected");
      } else {
        group.classList.remove("selected");
      }
    });

    const outgoing = new Set(
      linksData.filter((l) => l.from === book.id).map((l) => l.to)
    );
    const incoming = new Set(
      linksData.filter((l) => l.to === book.id).map((l) => l.from)
    );

    linkElements.forEach(({ link, data }) => {
      if (data.from === book.id || data.to === book.id) {
        link.classList.add("highlighted");
      } else {
        link.classList.remove("highlighted");
      }
    });

    const relatedNodes = new Set([...outgoing, ...incoming]);
    nodeElements.forEach(({ group, data }) => {
      if (filterSpoilerSafe.checked && data.spoilerLevel !== "safe") {
        group.classList.add("dimmed");
        return;
      }
      if (data.id === book.id || relatedNodes.has(data.id)) {
        group.classList.remove("dimmed");
      } else {
        group.classList.add("dimmed");
      }
    });

    renderDetails(book, outgoing, incoming);
  }

  nodeElements.forEach(({ group, data }) => {
    group.addEventListener("mouseenter", (event) => {
      tooltip.classList.remove("hidden");
      tooltip.innerHTML =
        `<strong>${data.title}</strong>` +
        (data.year ? ` <span style="opacity:.8">(${data.year})</span>` : "") +
        `<br/>${spoilerLevelLabel(data.spoilerLevel)}`;

      const rect = container.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      tooltip.style.left = `${x}px`;
      tooltip.style.top = `${y}px`;
    });

    group.addEventListener("mousemove", (event) => {
      const rect = container.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      tooltip.style.left = `${x}px`;
      tooltip.style.top = `${y}px`;
    });

    group.addEventListener("mouseleave", () => {
      tooltip.classList.add("hidden");
    });

    group.addEventListener("click", () => {
      selectNode(data);
    });
  });

  const toggleSpoilerEdgesEl = document.getElementById("toggleSpoilerEdges");
  const filterSpoilerSafeEl = document.getElementById("filterSpoilerSafe");

  toggleSpoilerEdgesEl.addEventListener("change", updateFilter);
  filterSpoilerSafeEl.addEventListener("change", updateFilter);

  // Mouse wheel adjusts spacing between circles
  container.addEventListener(
    "wheel",
    (event) => {
      event.preventDefault();
      const factor = event.deltaY < 0 ? 1.1 : 0.9;
      const next = Math.min(2.5, Math.max(0.7, spacingFactor * factor));
      spacingFactor = next;
      updateLayout();
    },
    { passive: false }
  );

  // Drag to pan the whole diagram
  let isPanning = false;
  let lastX = 0;
  let lastY = 0;

  container.addEventListener("mousedown", (event) => {
    // Only react to left button inside the graph area
    if (event.button !== 0) return;
    isPanning = true;
    lastX = event.clientX;
    lastY = event.clientY;
    container.style.cursor = "grabbing";
  });

  window.addEventListener("mousemove", (event) => {
    if (!isPanning) return;
    const dx = event.clientX - lastX;
    const dy = event.clientY - lastY;
    lastX = event.clientX;
    lastY = event.clientY;
    translateX += dx;
    translateY += dy;
    applyTransform();
  });

  window.addEventListener("mouseup", () => {
    if (!isPanning) return;
    isPanning = false;
    container.style.cursor = "default";
  });

  // Clicking a card in the grid also selects in the graph
  const grid = document.getElementById("bookGrid");
  if (grid) {
    grid.addEventListener("click", (e) => {
      const card = e.target.closest(".book-card");
      if (!card) return;
      const id = card.dataset.bookId;
      const book = nodeById.get(id);
      if (book) {
        selectNode(book);
      }
    });
  }

  updateFilter();
  updateLayout();
  applyTransform();

  // Expose a hook so we can re-layout when sort order changes
  window.__updateGraphSort = () => {
    updateLayout();
  };
}

function init() {
  buildBookGrid();
  initGraph();

  const sortButton = document.getElementById("toggleSortMode");
  if (sortButton) {
    sortButton.addEventListener("click", () => {
      sortMode = sortMode === "year" ? "alpha" : "year";
      sortButton.textContent =
        sortMode === "year" ? "Order: by year" : "Order: A–Z";

      // Rebuild grid and re-layout graph using new order
      buildBookGrid();
      if (window.__updateGraphSort) {
        window.__updateGraphSort();
      }
    });
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}

