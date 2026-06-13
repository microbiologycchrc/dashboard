// ================================================================
//  🦠 MICROBIOLOGY DEPARTMENT – 20 QUICK-ACCESS BUTTONS
//
//  HOW TO USE:
//    • Set  url: ""            → button is AUTO-HIDDEN
//    • Set  url: "https://…"  → button is VISIBLE & clickable
//    • Change label / icon freely – icons are emojis
// ================================================================

const BUTTONS = [
  // ── Row 1 ──────────────────────────────────────────────
  { id: 1,  label: "University Portal",    icon: "🎓", color: "blue",    url: "" },
  { id: 2,  label: "Department Website",   icon: "🧫", color: "emerald", url: "" },
  { id: 3,  label: "Student LMS",          icon: "📚", color: "purple",  url: "" },
  { id: 4,  label: "Email / Webmail",      icon: "📧", color: "red",     url: "" },

  // ── Row 2 ──────────────────────────────────────────────
  { id: 5,  label: "PubMed / NCBI",        icon: "📄", color: "sky",     url: "www.facebook.com" },
  { id: 6,  label: "Google Scholar",       icon: "🎓", color: "yellow",  url: "https://scholar.google.com" },
  { id: 7,  label: "ASM Journals",         icon: "🧬", color: "green",   url: "https://journals.asm.org" },
  { id: 8,  label: "ResearchGate",         icon: "🔗", color: "teal",    url: "https://www.researchgate.net" },

  // ── Row 3 ──────────────────────────────────────────────
  { id: 9,  label: "ScienceDirect",        icon: "📰", color: "orange",  url: "https://www.sciencedirect.com" },
  { id: 10, label: "NCBI BLAST",           icon: "🧪", color: "indigo",  url: "https://blast.ncbi.nlm.nih.gov" },
  { id: 11, label: "ATCC",                 icon: "🦠", color: "pink",    url: "https://www.atcc.org" },
  { id: 12, label: "UniProt",              icon: "🔬", color: "lime",    url: "https://www.uniprot.org" },

  // ── Row 4 ──────────────────────────────────────────────
  { id: 13, label: "KEGG Pathways",        icon: "🗺️", color: "cyan",    url: "https://www.kegg.jp" },
  { id: 14, label: "Sigma-Aldrich",        icon: "⚗️", color: "amber",   url: "https://www.sigmaaldrich.com" },
  { id: 15, label: "Google Drive",         icon: "📁", color: "yellow",  url: "https://drive.google.com" },
  { id: 16, label: "Google Meet",          icon: "📹", color: "green",   url: "" },

  // ── Row 5 ──────────────────────────────────────────────
  { id: 17, label: "Zoom",                 icon: "🎥", color: "blue",    url: "" },
  { id: 18, label: "Overleaf (LaTeX)",     icon: "✍️", color: "red",     url: "" },
  { id: 19, label: "Button 19",            icon: "🔧", color: "gray",    url: "" },
  { id: 20, label: "Button 20",            icon: "🔧", color: "gray",    url: "" },
];

// ── Color map ────────────────────────────────────────────────────
const COLOR = {
  blue:    { icon: "bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300",     btn: "border-blue-200 dark:border-blue-800 hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950" },
  emerald: { icon: "bg-emerald-100 dark:bg-emerald-900 text-emerald-600 dark:text-emerald-300", btn: "border-emerald-200 dark:border-emerald-800 hover:border-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-950" },
  purple:  { icon: "bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300",   btn: "border-purple-200 dark:border-purple-800 hover:border-purple-400 hover:bg-purple-50 dark:hover:bg-purple-950" },
  red:     { icon: "bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-300",         btn: "border-red-200 dark:border-red-800 hover:border-red-400 hover:bg-red-50 dark:hover:bg-red-950" },
  sky:     { icon: "bg-sky-100 dark:bg-sky-900 text-sky-600 dark:text-sky-300",         btn: "border-sky-200 dark:border-sky-800 hover:border-sky-400 hover:bg-sky-50 dark:hover:bg-sky-950" },
  yellow:  { icon: "bg-yellow-100 dark:bg-yellow-900 text-yellow-600 dark:text-yellow-300",   btn: "border-yellow-200 dark:border-yellow-800 hover:border-yellow-400 hover:bg-yellow-50 dark:hover:bg-yellow-950" },
  green:   { icon: "bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300", btn: "border-green-200 dark:border-green-800 hover:border-green-400 hover:bg-green-50 dark:hover:bg-green-950" },
  teal:    { icon: "bg-teal-100 dark:bg-teal-900 text-teal-600 dark:text-teal-300",     btn: "border-teal-200 dark:border-teal-800 hover:border-teal-400 hover:bg-teal-50 dark:hover:bg-teal-950" },
  orange:  { icon: "bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-300",   btn: "border-orange-200 dark:border-orange-800 hover:border-orange-400 hover:bg-orange-50 dark:hover:bg-orange-950" },
  indigo:  { icon: "bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300",   btn: "border-indigo-200 dark:border-indigo-800 hover:border-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-950" },
  pink:    { icon: "bg-pink-100 dark:bg-pink-900 text-pink-600 dark:text-pink-300",     btn: "border-pink-200 dark:border-pink-800 hover:border-pink-400 hover:bg-pink-50 dark:hover:bg-pink-950" },
  lime:    { icon: "bg-lime-100 dark:bg-lime-900 text-lime-600 dark:text-lime-300",     btn: "border-lime-200 dark:border-lime-800 hover:border-lime-400 hover:bg-lime-50 dark:hover:bg-lime-950" },
  cyan:    { icon: "bg-cyan-100 dark:bg-cyan-900 text-cyan-600 dark:text-cyan-300",     btn: "border-cyan-200 dark:border-cyan-800 hover:border-cyan-400 hover:bg-cyan-50 dark:hover:bg-cyan-950" },
  amber:   { icon: "bg-amber-100 dark:bg-amber-900 text-amber-600 dark:text-amber-300", btn: "border-amber-200 dark:border-amber-800 hover:border-amber-400 hover:bg-amber-50 dark:hover:bg-amber-950" },
  gray:    { icon: "bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400",     btn: "border-gray-200 dark:border-gray-700 hover:border-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" },
};

// ── Render buttons ───────────────────────────────────────────────
function render() {
  const grid = document.getElementById('btn-grid');
  const emptyMsg = document.getElementById('empty-msg');
  let visibleCount = 0;

  BUTTONS.forEach(b => {
    const hasURL = b.url && b.url.trim() !== '';
    if (!hasURL) return; // auto-hide if no URL

    visibleCount++;
    const c = COLOR[b.color] || COLOR.gray;

    const btn = document.createElement('button');
    btn.className = `btn-card border ${c.btn} transition-all duration-200 active:scale-95`;
    btn.title = b.label;
    btn.onclick = () => { window.location.href = b.url; };

    btn.innerHTML = `
      <div class="btn-icon ${c.icon}">${b.icon}</div>
      <div class="btn-label">${b.label}</div>
      <div class="btn-url">${new URL(b.url).hostname}</div>
    `;
    grid.appendChild(btn);
  });

  // show/hide empty message
  if (visibleCount === 0) {
    emptyMsg.classList.remove('hidden');
    emptyMsg.classList.add('flex');
  } else {
    emptyMsg.classList.add('hidden');
    emptyMsg.classList.remove('flex');
  }
}

// ── Dark mode ────────────────────────────────────────────────────
function toggleDark() {
  const html = document.documentElement;
  const icon = document.getElementById('dark-icon');
  if (html.classList.contains('dark')) {
    html.classList.remove('dark');
    localStorage.theme = 'light';
    icon.textContent = '🌙';
  } else {
    html.classList.add('dark');
    localStorage.theme = 'dark';
    icon.textContent = '☀️';
  }
}

// ── Clock ────────────────────────────────────────────────────────
function updateClock() {
  const el = document.getElementById('clock');
  if (el) el.textContent = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
}
setInterval(updateClock, 1000);
updateClock();

// ── Init ─────────────────────────────────────────────────────────
window.addEventListener('DOMContentLoaded', () => {
  const icon = document.getElementById('dark-icon');
  if (document.documentElement.classList.contains('dark')) icon.textContent = '☀️';
  render();
});
