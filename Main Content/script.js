function openSidebar() {
    document.getElementById("sidebar").style.left = "0";
}

function closeSidebar() {
    document.getElementById("sidebar").style.left = "-220px";
}

const tabs = document.querySelectorAll(".tab");
const uploadArea = document.getElementById("uploadArea");
const fileInput = document.getElementById("fileInput");
const urlInput = document.getElementById("urlInput");
const fileInfo = document.getElementById("fileInfo");
const analyzeBtn = document.getElementById("analyzeBtn");

let selectedType = "image";
let selectedFile = null;

/* -------- TAB SWITCHING -------- */
tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(t => t.classList.remove("active"));
    tab.classList.add("active");

    selectedType = tab.dataset.type;
    selectedFile = null;
    fileInput.value = "";
    fileInfo.textContent = "";

    if (selectedType === "url") {
      uploadArea.style.display = "none";
      urlInput.style.display = "block";
    } else {
      uploadArea.style.display = "block";
      urlInput.style.display = "none";

      if (selectedType === "image") {
        fileInfo.textContent = "PNG, JPG, WEBP up to 10MB";
      } else {
        fileInfo.textContent = "MP4, MOV up to 10MB";
      }
    }
  });
});