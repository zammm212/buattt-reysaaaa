
"use strict";

/* ========================================
   KONFIGURASI WEBSITE
======================================== */

const CONFIG = {
  theme: {
    bg: "#17131b",
    surface: "#211a25",
    surfaceLight: "#2a202e",
    text: "#f7eefa",
    muted: "#b8a9bb",
    accent: "#e7a9c4",
    accentLight: "#f5d3e2"
  },

  photo: {
    src: "assets/foto-utama.jpg",
    caption: "a moment worth keeping ♡",
    objectPosition: "center center",
    objectFit: "cover",
    width: "100%",
    aspectRatio: "4 / 5",
    borderRadius: "0px",
    filter: "none"
  },

  music: {
    src: "assets/lagu.mp3",
    cover: "assets/kaset-cover.jpg",
    title: "Bergema Sampai Selamanya",
    artist: "Nadhif Basalamah",
    wheelDegreesPerSecond: 120
  },

  text: {
    pageTitle: "little things ♡",
    intro: "a small collection of things I wanted you to see.",
    heroTitle: "for someone<br><i>special.</i>",
    heroDescription:
      "some moments deserve a place of their own.\nthis is one of them.",
    footer: "every little detail was chosen by me."
  },

  messages: [
    {
      title: "the beginning",
      preview: "where this little story starts.",
      photo: "assets/foto1.jpg",
      body: "awalnyaa akuuu gatauuu kalauuu kitaaa salinggg sukaaa, akuu gatauuu kamuu sukaa akuu dan kamuu gatauu akuu sukaa kamuu, kitaa waktu itu bercandaa foto barengg dann lama lamaa kitaa di ship in satu kelasss, dann pada tanggall 14 oktoberrrr 2026 jammm 19:20 akuu beraniinn buattt nyatainnn perasaannn dannn nembakkk kamuuu, disituuu kamuuu kayaa ga percayaaa gituuu, disituuu akuu ngeyakininnn kamuuuu, dannn akhirnyaaaa kammuuu nerimaaa akkuuu, kayaknyaaa seginiii ajaaa dee.... soalnyaaa kalooo diceritainnn semuaa pastii gaaaa muattt . ♡"
    },
    {
      title: "a little reminder",
      preview: "something worth remembering.",
      photo: "assets/foto2.jpg",
      body: "kamuuu harusss ingatttt bahwaaa cintakuuu ke kamuuu gaakan pernaaa abisss dannn akuuu mauuu barengg barengg terusss sama kamuuu. ♡"
    },
    {
      title: "what I like about you",
      preview: "things I like about you.",
      photo: "assets/foto3.jpg",
      body: "akuu sukaaa sama kamuuu kayak bumii yg nerimaa setiap musimmm, bukann cuma pas bunganyaa mekarr, tapii jugaa pas hujann datengg dan langitt mulaii mendunggg. akuu sukaaa semuanyaa tentang kamuuu, lebihnyaa, kurangnyaa, bahkan hal kecill yg mungkinn kamuu sendiri gaaa sadarr. soalnyaa akuu bukann cuma sukaaa bagian terindahh darii dirimuuu, akuu sukaaa keseluruhannyaa, segalaa hal yg buat kamuu jadii kamuuu. ♡"
    },
    {
      title: "things I appreciate",
      preview: "the little things matter.",
      photo: "assets/foto4.jpg",
      body: "akuuu hargainnnn semuaaa halll yanggg kamuuu kasihhh darii mulaiii hal halll yanh keliatannn oleh mataaa sampaiii halll yannhhh hanyaa bisaa dirasainnnn. ♡"
    },
    {
      title: "for the hard days",
      preview: "read this whenever you need it.",
      photo: "assets/foto5.jpg",
      body: "terussss semangattt yaaa cantikkkk perjalanannn kamuuu masiiii panjangggg,kamuuu harusss bisaaa bahagiainnnn keluargaaa kamuuu,setiappo kesusahannn pastiii adaa kemudahannn. ♡"
    },
    {
      title: "just because",
      preview: "no special reason needed.",
      photo: "assets/foto6.jpg",
      body: "akuuu mauuu bilangggg,akuu tuuu sayangggg bangetttt samaaa kamuuuu, i lovee youuu. ♡"
    }
  ],

  letter: {
    title: "one last thing...",
    preview:
      "there are things I don't always know how to say. " +
      "so I put some of them here.",
    photo: "assets/foto-surat.jpg",
    body:
      "haiiiii, kamuuuuu.\n\nkalau kamuuu udah sampai di bagian paling akhiiir iniii, berarti kamuuu udah ngeliat sedikit dari hal-hal kecill yang pengen aku tunjukin ke kamuuu. mungkiinn buat kamuuu semuanya sederhanaaa, cuma fotooo, laguuu, sama beberapa tulisann yang aku susun satu persatuuu. tapiii di balik semua ituuu, ada perasaann yang kadang susah banget buat aku jelasin secara langsuuunggg.\n\njujuuurrr, aku sukaaa kamuuuuu. bukan cuma karena satu hal yang bisa aku sebutin dengan gampanggg, tapi karena banyak hal kecill dari diri kamuuu yang mungkin kamuuu sendiri ga pernah sadaaarrr. caramuu bersikappp, caramuu ngomonggg, caramuu jadi diri sendiriiii, sampai hal-hal sederhanaaaa yang mungkin buat kamuuu biasa ajaaaa, tapi entah kenapa bisa tinggal cukup lama di pikiran akuuuuu.\n\nrasanyaaa kayak ngeliat langit soreee. aku gaa harus punya alasan khusus buat suka sama warnanyaaa, gaaa harus ngerti kenapa rasanya tenang setiap kali ngeliatny aaaa. aku cuma tauuuu, ada sesuatu dari kamuuu yang bikin aku pengen berhenti sebentar dari ramainya duniaaaa, lalu menikmati keberadaan kamuuu, meskipun cuma dari hal-hal kecil yang kita bagiiii.\n\naku gaaa tauuuu ke depannya bakal kayak gimanaaaa. mungkin kita bakal punya lebih banyak ceritaaaa, mungkin juga keadaan bakal berubah seiring waktuuuu. aku nggak bisa janji kalau semuanya bakal selalu samaaaa, karena bahkan musim aja nggak pernah menetap selamanyaaa. tapiii setidaknyaaa, untuk saat iniiii, perasaan aku ke kamuuu beneran adaaaa, dan aku gaaa mau pura-pura kalau itu gaaa berarti apaa apaaaa.\n\naku gaaa bikin semua ini supaya kamuuu harus membalas perasaan aku dengan cara yang samaaaa. aku cuma pengen kamuuu tauuuu, pernah ada seseorang yang dengan tulus seneng karena bisa kenal kamuuu, seseorang yang diam-diam menyimpan hal-hal kecill tentang kamuuu sebagai bagian dari hari-harinyaaa.\n\nkalau suatu hari kamuuu ngerasa dunia lagi terlalu berisikkk, semoga kamuuu inget kalau di antara banyaknya orang yang cuma lewattt, ada seseorang yang pernah berharap kamuuu selalu nemuin alasan buat tersenyummm. bukan karena dia pengen jadi alasan dari semua bahagia kamuuu, tapi karena dia memang pengen kamuuu bahagiaaaa, bahkan di hari-hari ketika dia nggak ada di samping kamuuu.\n\ndan kalau nanti waktu membawa kita ke tempat yang berbedaaaa, aku harap kenangan tentang hari-hari ini tetap jadi sesuatu yang hangat buat dikenanggg. bukan sesuatu yang harus disesaliiii, bukan juga sesuatu yang harus dipaksa buat bertahannn, tapi cukup jadi cerita kecill tentang dua orang yang pernah saling mengenal di antara luasnya duniaaaa.\n\nterima kasih yaaaaa, kamuuuuu. ♡\n\nterima kasih udah jadi diri kamuuu sendiri. terima kasih karena tanpa kamuuu sadariiii, kehadiran kamuuu pernah bikin hari-hari aku terasa sedikit lebih indahhh. mungkin aku gaaa selalu bisa menyampaikan semuanya dengan baikkk, mungkin ada banyak kata yang akhirnya cuma berani aku simpan sendiriiii. tapiii kalau ada satu hal yang pengen aku pastiin sampai di kamuuu, itu adalaahhh:\n\naku sukaaa kamuuuuu, bukan karena kamuuu harus menjadi seseorang yang sempurnaaaa, tapi karena di antara begitu banyak hal yang ada di dunia iniiii, ada sesuatu dari diri kamuuu yang membuat aku ingin mengenal kamuuu lebih jauhhhh.\n\njadiii, kalau nanti kamuuu selesai membaca iniiii, nggak perlu buru-buru memikirkan apa punnnn. cukup senyum kecill aja kalau memang kamuuu mauuuu. karena pada akhirnyaaa, aku cuma pengen satu hal sederhan aaaa: semoga hari kamuuu baikkk, semoga langkah kamuuu selalu menemukan arahhh, dan semoga dunia memperlakukan kamuuu selembut cara aku memandang kamuuu.\n\ndari akuuuuu, seseorang yang mungkin nggak selalu pandai berkata-kataaaa, tapi selalu punya banyak hal yang ingin disampaikan setiap kali itu tentang kamuuuuu. \n\nI Love You So Much Reysa Camelia Putri ♡"
  }
};


/* ========================================
   ELEMEN WEBSITE
======================================== */

const $ = (selector) => document.querySelector(selector);

const audio = $("#audio");
const playBtn = $("#playBtn");
const seekBar = $("#seekBar");
const currentTimeEl = $("#currentTime");
const totalTimeEl = $("#totalTime");
const audioMessage = $("#audioMessage");
const playerStatus = $("#playerStatus");

const reelLeft = $("#reelLeft");
const reelRight = $("#reelRight");

let animationFrame = null;
let isSeeking = false;
let typewriterTimer = null;


/* ========================================
   TERAPKAN KONFIGURASI
======================================== */

function applyConfig() {
  const root = document.documentElement;

  const themeVariables = {
    bg: "--bg",
    surface: "--surface",
    surfaceLight: "--surface-light",
    text: "--text",
    muted: "--muted",
    accent: "--accent",
    accentLight: "--accent-light"
  };

  Object.entries(CONFIG.theme).forEach(([key, value]) => {
    const variable = themeVariables[key];

    if (variable) {
      root.style.setProperty(variable, value);
    }
  });

  document.title = CONFIG.text.pageTitle;

  $("#introText").textContent = CONFIG.text.intro;
  $("#heroTitle").innerHTML = CONFIG.text.heroTitle;
  $("#heroDescription").textContent =
    CONFIG.text.heroDescription;

  const mainPhoto = $("#mainPhoto");

  mainPhoto.src = CONFIG.photo.src;
  mainPhoto.style.objectPosition = CONFIG.photo.objectPosition;
  mainPhoto.style.objectFit = CONFIG.photo.objectFit;
  mainPhoto.style.width = CONFIG.photo.width;
  mainPhoto.style.aspectRatio = CONFIG.photo.aspectRatio;
  mainPhoto.style.borderRadius = CONFIG.photo.borderRadius;
  mainPhoto.style.filter = CONFIG.photo.filter;

  $("#photoCaption").textContent = CONFIG.photo.caption;

  $("#coverImage").src = CONFIG.music.cover;
  $("#songTitle").textContent = CONFIG.music.title;
  $("#songArtist").textContent = CONFIG.music.artist;
  $("#playerTitle").textContent = CONFIG.music.title;
  $("#playerArtist").textContent = CONFIG.music.artist;

  $("#letterTitle").textContent = CONFIG.letter.title;
  $("#letterPreview").textContent = CONFIG.letter.preview;
  $("#footerText").textContent = CONFIG.text.footer;

  audio.src = CONFIG.music.src;
  audio.load();

  renderMessages();
}


/* ========================================
   HALAMAN PEMBUKA
======================================== */

$("#enterBtn").addEventListener("click", () => {
  const intro = $("#intro");
  const main = $("#mainContent");

  intro.classList.add("leaving");

  window.setTimeout(() => {
    intro.hidden = true;
    main.hidden = false;
    window.scrollTo(0, 0);
  }, 650);
});


/* ========================================
   PEMUTAR MUSIK
======================================== */

function formatTime(seconds) {
  if (!Number.isFinite(seconds) || seconds < 0) {
    return "--:--";
  }

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);

  return `${minutes}:${String(remainingSeconds).padStart(2, "0")}`;
}

function updateCassette() {
  const angle =
    (audio.currentTime * CONFIG.music.wheelDegreesPerSecond) % 360;

  const rotation = `rotate(${angle}deg)`;

  reelLeft.style.transform = rotation;
  reelRight.style.transform = rotation;
}

function updateTimeline() {
  const duration = audio.duration;
  const time = audio.currentTime || 0;

  currentTimeEl.textContent = formatTime(time);

  if (Number.isFinite(duration) && duration > 0) {
    totalTimeEl.textContent = formatTime(duration);

    if (!isSeeking) {
      seekBar.value = String(
        Math.round((time / duration) * 1000)
      );
    }
  } else {
    totalTimeEl.textContent = "--:--";
  }

  updateCassette();
}

function stopAnimationLoop() {
  if (animationFrame !== null) {
    cancelAnimationFrame(animationFrame);
    animationFrame = null;
  }
}

function animationLoop() {
  updateTimeline();

  if (!audio.paused && !audio.ended) {
    animationFrame = requestAnimationFrame(animationLoop);
  } else {
    animationFrame = null;
  }
}

function startAnimationLoop() {
  stopAnimationLoop();

  if (!audio.paused && !audio.ended) {
    animationFrame = requestAnimationFrame(animationLoop);
  } else {
    updateTimeline();
  }
}

function showAudioMessage(message) {
  audioMessage.textContent = message;
}

function syncPlayerUI() {
  const playing = !audio.paused && !audio.ended;

  playBtn.textContent = playing ? "Ⅱ" : "▶";

  playBtn.setAttribute(
    "aria-label",
    playing ? "Jeda lagu" : "Putar lagu"
  );

  playerStatus.textContent = playing
    ? "now playing ♡"
    : audio.ended
      ? "song finished ♡"
      : "ready when you are ♡";
}

async function togglePlayback() {
  if (audio.paused || audio.ended) {
    if (audio.ended) {
      audio.currentTime = 0;
    }

    try {
      await audio.play();
      showAudioMessage("Lagu sedang diputar ♡");
    } catch (error) {
      showAudioMessage(
        "Lagu gagal diputar. Periksa file MP3 lu."
      );
    }
  } else {
    audio.pause();
  }
}

playBtn.addEventListener("click", togglePlayback);

audio.addEventListener("loadedmetadata", updateTimeline);
audio.addEventListener("durationchange", updateTimeline);
audio.addEventListener("timeupdate", updateTimeline);

audio.addEventListener("play", () => {
  syncPlayerUI();
  startAnimationLoop();
});

audio.addEventListener("playing", () => {
  syncPlayerUI();
  startAnimationLoop();
});

audio.addEventListener("pause", () => {
  stopAnimationLoop();
  syncPlayerUI();
  updateTimeline();
});

audio.addEventListener("seeked", () => {
  updateTimeline();
});

audio.addEventListener("ended", () => {
  stopAnimationLoop();
  syncPlayerUI();
  updateTimeline();
  showAudioMessage("Lagu selesai. Putar lagi kapan saja ♡");
});

audio.addEventListener("error", () => {
  stopAnimationLoop();
  syncPlayerUI();

  showAudioMessage(
    "MP3 gagal dimuat. Periksa folder assets dan nama file."
  );
});

audio.addEventListener("waiting", () => {
  showAudioMessage("Sedang memuat audio...");
});

seekBar.addEventListener("input", () => {
  isSeeking = true;

  const duration = audio.duration;

  if (Number.isFinite(duration) && duration > 0) {
    const targetTime =
      (Number(seekBar.value) / 1000) * duration;

    currentTimeEl.textContent = formatTime(targetTime);
  }
});

function seekToSliderPosition() {
  const duration = audio.duration;

  if (Number.isFinite(duration) && duration > 0) {
    audio.currentTime =
      (Number(seekBar.value) / 1000) * duration;
  }

  isSeeking = false;
  updateTimeline();
}

seekBar.addEventListener("change", seekToSliderPosition);

seekBar.addEventListener("pointerup", seekToSliderPosition);

seekBar.addEventListener("pointercancel", () => {
  isSeeking = false;
  updateTimeline();
});


/* ========================================
   KARTU PESAN DENGAN FOTO MASING-MASING
======================================== */

function renderMessages() {
  const grid = $("#messageGrid");
  grid.replaceChildren();

  CONFIG.messages.forEach((message, index) => {
    const card = document.createElement("button");

    card.type = "button";
    card.className = "message-card";

    const image = document.createElement("img");

    image.className = "message-photo";
    image.src = message.photo;
    image.alt = `Foto ${message.title}`;
    image.loading = "lazy";

    const content = document.createElement("div");
    content.className = "message-content";

    const number = document.createElement("span");

    number.className = "message-number";
    number.textContent =
      `NOTE ${String(index + 1).padStart(2, "0")}`;

    const title = document.createElement("strong");
    title.textContent = message.title;

    const preview = document.createElement("small");
    preview.textContent = message.preview;

    content.append(number, title, preview);
    card.append(image, content);

    card.addEventListener("click", () => {
      openMessage(
        message.title,
        message.body,
        number.textContent,
        message.photo
      );
    });

    grid.appendChild(card);
  });
}


/* ========================================
   MODAL DAN EFEK MESIN KETIK
======================================== */

function openMessage(title, body, label, photo) {
  const modal = $("#messageModal");
  const modalPhoto = $("#modalPhoto");
  const bodyEl = $("#modalBody");

  if (typewriterTimer !== null) {
    clearInterval(typewriterTimer);
    typewriterTimer = null;
  }

  $("#modalLabel").textContent = label;
  $("#modalTitle").textContent = title;

  modalPhoto.hidden = !photo;

  if (photo) {
    modalPhoto.src = photo;
    modalPhoto.alt = `Foto untuk ${title}`;
  } else {
    modalPhoto.removeAttribute("src");
    modalPhoto.alt = "";
  }

  bodyEl.textContent = "";

  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";

  let index = 0;

  typewriterTimer = window.setInterval(() => {
    bodyEl.textContent += body.charAt(index);
    index++;

    if (index >= body.length) {
      clearInterval(typewriterTimer);
      typewriterTimer = null;
    }
  }, 22);
}

function closeMessage() {
  const modal = $("#messageModal");

  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";

  if (typewriterTimer !== null) {
    clearInterval(typewriterTimer);
    typewriterTimer = null;
  }
}

$("#closeModal").addEventListener("click", closeMessage);

$("#messageModal").addEventListener("click", (event) => {
  if (event.target === $("#messageModal")) {
    closeMessage();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMessage();
  }
});


/* ========================================
   SURAT TERAKHIR DENGAN FOTO
======================================== */

$("#letterBtn").addEventListener("click", () => {
  openMessage(
    CONFIG.letter.title,
    CONFIG.letter.body,
    "THE LAST LETTER ♡",
    CONFIG.letter.photo
  );
});


/* ========================================
   JALANKAN WEBSITE
======================================== */

applyConfig();
updateTimeline();
syncPlayerUI();
