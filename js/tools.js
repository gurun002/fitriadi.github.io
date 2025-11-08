// Daftar aplikasi Google yang kamu buat
const tools = [
  {
    title: "🧠 Form Builder PAUD & PNF",
    desc: "Membuat Google Form otomatis dari template di Spreadsheet, lengkap dengan validasi dan log.",
    link: "https://script.google.com/macros/s/AKfycbw4P-u4pzmj3NAztXg5gu_Gv4xjxDD-IAadB44srkgL98ctoR9R5stfuqRKgYFt5pdA/exec",
    status: "Aktif"
  },
  {
    title: "🏫 Classroom Automation",
    desc: "Membuat kelas Google Classroom otomatis dan menambahkan peserta berdasarkan data CSV atau Google Sheets.",
    link: "#",
    status: "Segera hadir"
  },
  {
    title: "🏆 Certificate Generator",
    desc: "Membuat sertifikat digital dari template Docs dan mengirimkannya via Gmail otomatis.",
    link: "#",
    status: "Segera hadir"
  },
  {
    title: "📊 Monev Form Generator",
    desc: "Membangun instrumen monitoring dan evaluasi (Monev) otomatis berbasis Google Form.",
    link: "#",
    status: "Dalam pengembangan"
  }
];

// Render ke HTML
document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("toolGrid");

  tools.forEach(tool => {
    const card = document.createElement("div");
    card.classList.add("tool-card");

    card.innerHTML = `
      <div class="tool-title">${tool.title}</div>
      <div class="tool-desc">${tool.desc}</div>
      <div class="tool-footer">
        <span class="tool-status">${tool.status}</span>
        <button onclick="window.open('${tool.link}', '_blank')">Buka</button>
      </div>
    `;

    container.appendChild(card);
  });
});
