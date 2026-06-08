const base = "assets/renders/";

const elements = [
  {
    id: "1",
    title: "البوابة",
    subtitle: "Gate",
    images: [
      ["gate-1.png", "Gate render 1"],
      ["gate-2.png", "Gate render 2"],
      ["drone-shot.png", "Drone view"],
      ["tent-1.png", "Air tent exterior"],
      ["tent-2.png", "Air tent entrance"],
    ],
  },
  {
    id: "2",
    title: "الأعلام",
    subtitle: "Flags",
    images: [
      ["flags-1.jpg", "Flag render 1"],
      ["flags-2.jpg", "Flag render 2"],
      ["flags-3.jpg", "Flag render 3"],
      ["sponsor-boards.png", "Flag and media boards"],
    ],
  },
  {
    id: "3",
    title: "المسرح",
    subtitle: "Stage",
    images: [
      ["stage-1.png", "Outdoor stage"],
      ["stage-2.png", "Outdoor stage alternate"],
      ["stage-3.png", "Popular shows seating"],
    ],
  },
  {
    id: "4",
    title: "عربة الطعام",
    subtitle: "Food Trucks",
    images: [["food-truck.png", "Food truck render"]],
  },
  {
    id: "5",
    title: "الديكورات",
    subtitle: "Decoration",
    images: [
      ["decoration-1.png", "Barriers and banners"],
      ["decoration-2.jpg", "Barrier render"],
      ["decoration-3.jpg", "Mascot decoration"],
      ["decoration-4.jpg", "Mascot decoration 2"],
      ["decoration-5.jpg", "Mascot decoration 3"],
    ],
  },
  {
    id: "6",
    title: "غرفة الشاشة",
    subtitle: "Studio LED Room",
    images: [["studio-led-room.png", "Studio LED room"]],
  },
  {
    id: "7",
    title: "فعالية الجول",
    subtitle: "Football activity",
    images: [["football-activity.png", "Football activity render"]],
  },
  {
    id: "8",
    title: "قول الصدق",
    subtitle: "Telling the truth",
    images: [["truth.png", "Telling the truth render"]],
  },
  {
    id: "9",
    title: "جدارية التوقعات",
    subtitle: "Predict the winner",
    images: [["predict-winner.png", "Prediction wall render"]],
  },
  {
    id: "10",
    title: "فوتوبوث",
    subtitle: "PhotoBooth",
    images: [["photobooth.jpg", "PhotoBooth render"]],
  },
  {
    id: "11",
    title: "بلايستيشن",
    subtitle: "Playstation",
    images: [["playstation.jpg", "Playstation render"]],
  },
  {
    id: "12",
    title: "منصة الفائزين",
    subtitle: "Winner Stage",
    images: [["winner-stage.png", "Winner stage render"]],
  },
  {
    id: "13",
    title: "دورات المياه",
    subtitle: "WC",
    images: [["wc.jpg", "WC render"]],
  },
  {
    id: "14",
    title: "بوث الهدايا",
    subtitle: "Gift Booth",
    images: [
      ["gift-booth.png", "Gift booth render"],
      ["ticket.jpg", "Ticket"],
      ["wristband.jpg", "Wristband"],
    ],
  },
  {
    id: "15",
    title: "التسجيل",
    subtitle: "Registration",
    images: [["reception.png", "Registration and reception render"]],
  },
  {
    id: "16",
    title: "الاستقبال",
    subtitle: "Reception",
    images: [
      ["reception.png", "Reception render"],
      ["vest-organizer.png", "Organizer vest"],
      ["organizer-uniform.png", "Organizer uniform"],
    ],
  },
  {
    id: "17",
    title: "الشاشة داخل القاعة",
    subtitle: "LED Screen",
    images: [
      ["led-screen-1.png", "LED screen render 1"],
      ["led-screen-2.png", "LED screen render 2"],
      ["led-screen-3.jpg", "LED screen no lights 1"],
      ["led-screen-4.jpg", "LED screen no lights 2"],
      ["led-screen-5.jpg", "LED screen no lights 3"],
      ["led-screen-6.png", "LED screen lighting render"],
    ],
  },
  {
    id: "18",
    title: "بوثات الرعاة",
    subtitle: "Sponsor Booths",
    images: [
      ["amana-booth.jpg", "AMANA booth"],
      ["madenty-booth.jpg", "Madenty booth"],
    ],
  },
  {
    id: "19",
    title: "اللوحة الإرشادية",
    subtitle: "Sign",
    images: [["sign.png", "Sign render"]],
  },
];

const hotspots = [
  ["1", 96.309, 49.349],
  ["2", 90.888, 52.875],
  ["3", 80.441, 74.51],
  ["4", 43.656, 88.836],
  ["5", 14.03, 43.715],
  ["5", 22.486, 43.715],
  ["5", 18.106, 55.589],
  ["5", 38.391, 61.362],
  ["6", 19.247, 29.135],
  ["7", 11.046, 14.698],
  ["8", 18.968, 14.698],
  ["9", 27.013, 14.698],
  ["10", 37.029, 23.295],
  ["11", 40.237, 12.829],
  ["12", 45.003, 15.2],
  ["13", 55.84, 11.9],
  ["14", 80.022, 38.722],
  ["15", 81.393, 52.912],
  ["16", 64.648, 45.322],
  ["17", 50.422, 32.242],
  ["18", 77.242, 16.119],
  ["19", 44.972, 76.495],
];

const byId = new Map(elements.map((item) => [item.id, item]));
let activeItem = elements[0];
let activeImageIndex = 0;

const hotspotLayer = document.getElementById("hotspotLayer");
const directoryList = document.getElementById("directoryList");
const totalCount = document.getElementById("totalCount");
const modal = document.getElementById("renderModal");
const modalNumber = document.getElementById("modalNumber");
const modalTitle = document.getElementById("modalTitle");
const modalSubtitle = document.getElementById("modalSubtitle");
const renderImage = document.getElementById("renderImage");
const imageCaption = document.getElementById("imageCaption");
const imageCounter = document.getElementById("imageCounter");
const thumbStrip = document.getElementById("thumbStrip");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

totalCount.textContent = elements.length;

function renderHotspots() {
  hotspotLayer.innerHTML = "";
  hotspots.forEach(([id, x, y]) => {
    const item = byId.get(id);
    const button = document.createElement("button");
    button.type = "button";
    button.className = "hotspot";
    button.dataset.id = id;
    button.style.left = `${x}%`;
    button.style.top = `${y}%`;
    button.textContent = id;
    button.title = `${id} - ${item.title}`;
    button.setAttribute("aria-label", `${id} ${item.title}`);
    button.addEventListener("click", () => openModal(id));
    hotspotLayer.appendChild(button);
  });
}

function renderDirectory() {
  directoryList.innerHTML = "";
  elements.forEach((item) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "directory-item";
    button.innerHTML = `
      <span class="directory-number">${item.id}</span>
      <span class="directory-name">${item.title}</span>
      <span class="directory-count">${item.images.length}</span>
    `;
    button.addEventListener("click", () => openModal(item.id));
    directoryList.appendChild(button);
  });
}

function openModal(id, imageIndex = 0) {
  activeItem = byId.get(id);
  activeImageIndex = imageIndex;
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  updateModal();
}

function closeModal() {
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

function updateModal() {
  const [src, caption] = activeItem.images[activeImageIndex];
  modalNumber.textContent = activeItem.id;
  modalTitle.textContent = activeItem.title;
  modalSubtitle.textContent = activeItem.subtitle;
  renderImage.src = base + src;
  renderImage.alt = `${activeItem.title} - ${caption}`;
  imageCaption.textContent = caption;
  imageCounter.textContent = `${activeImageIndex + 1} / ${activeItem.images.length}`;
  prevBtn.disabled = activeItem.images.length <= 1;
  nextBtn.disabled = activeItem.images.length <= 1;
  renderThumbs();
}

function renderThumbs() {
  thumbStrip.innerHTML = "";
  activeItem.images.forEach(([src, caption], index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `thumb${index === activeImageIndex ? " is-active" : ""}`;
    button.setAttribute("aria-label", caption);
    button.innerHTML = `<img src="${base + src}" alt="" />`;
    button.addEventListener("click", () => {
      activeImageIndex = index;
      updateModal();
    });
    thumbStrip.appendChild(button);
  });
}

function stepImage(direction) {
  const count = activeItem.images.length;
  if (count <= 1) return;
  activeImageIndex = (activeImageIndex + direction + count) % count;
  updateModal();
}

document.querySelectorAll("[data-close]").forEach((node) => {
  node.addEventListener("click", closeModal);
});

prevBtn.addEventListener("click", () => stepImage(-1));
nextBtn.addEventListener("click", () => stepImage(1));

document.addEventListener("keydown", (event) => {
  if (!modal.classList.contains("is-open")) return;
  if (event.key === "Escape") closeModal();
  if (event.key === "ArrowLeft") stepImage(-1);
  if (event.key === "ArrowRight") stepImage(1);
});

renderHotspots();
renderDirectory();
