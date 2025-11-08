// ======== Google Tools Listing ========
// Data daftar aplikasi (mudah diperbarui)
const tools = [
  {
    title: "🧠 Form Builder PAUD & PNF",
    desc: "Membuat Google Form otomatis dari template di Spreadsheet lengkap dengan validasi, log, dan penyimpanan ke Drive.",
    link: "https://script.google.com/macros/s/AKfycbw4P-u4pzmj3NAztXg5gu_Gv4xjxDD-IAadB44srkgL98ctoR9R5stfuqRKgYFt5pdA/exec",
    status: "Aktif"
  },
  {
    title: "📋 Form Response Manager",
    desc: "Mengelola hasil respon Google Form secara otomatis ke Google Sheets dengan laporan dinamis dan visualisasi sederhana.",
    link: "#",
    status: "Segera Hadir"
  },
  {
    title: "🏫 Classroom Automation",
    desc: "Membuat kelas Google Classroom otomatis dan menambahkan peserta berdasarkan data CSV atau Google Sheets.",
    link: "#",
    status: "Segera Hadir"
  },
  {
    title: "📊 Monev Dashboard",
    desc: "Menyajikan data monitoring dan evaluasi berbasis Google Data Studio yang terintegrasi dengan Google Form.",
    link: "#",
    status: "Dalam Pengembangan"
  }
];

// ======== Render tools ke HTML ========
document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("toolGrid");
  if (!container) return;

  tools.forEach((tool, index) => {
    const card = document.createElement("div");
    card.classList.add("tool-card");

    // Tambahkan delay animasi supaya muncul bertahap
    card.style.animationDelay = `${index * 0.1}s`;

    // Tentukan apakah tombol aktif atau tidak
    const isActive = tool.status.toLowerCase() === "aktif";
    const buttonHTML = isActive
      ? `<a href="${tool.link}" target="_blank">
           <button class="open-btn">Buka</button>
         </a>`
      : `<button class="open-btn" disabled>Dalam Pengembangan</button>`;

    // Isi HTML tiap kartu
    card.innerHTML = `
      <h3>${tool.title}</h3>
      <p>${tool.desc}</p>
      <div class="status">${tool.status}</div>
      ${buttonHTML}
    `;

    container.appendChild(card);
  });
});
