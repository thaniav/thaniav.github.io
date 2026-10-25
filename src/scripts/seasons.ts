import { seasonForDate, previewSeason } from "../lib/seasons";

export function initializeSeasons() {
  const seasonalDetails = {
    halloween: {
      text: "A little autumn magic.",
      icon: '<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M16 10c-7-5-13 0-12 8 1 9 8 10 12 7 4 3 11 2 12-7 1-8-5-13-12-8Z" fill="#e5b278"/><path d="M16 10c-2-4 0-6 3-7M12 11c-4 4-4 11 0 14m8-14c4 4 4 11 0 14M10 17l3-2 1 3m4 0 1-3 3 2m-10 4 4 2 4-2"/></svg>',
    },
    christmas: {
      text: "A little festive cheer.",
      icon: '<svg viewBox="0 0 32 32" aria-hidden="true"><path d="m16 5-7 9h4L6 23h20l-7-9h4Z" fill="#c6d7bd"/><path d="M16 23v5m-4 0h8M16 1v3m-2-2h4"/><circle cx="13" cy="17" r="1" fill="#b67964"/><circle cx="19" cy="20" r="1" fill="#b67964"/></svg>',
    },
    "new-year": {
      text: "Here’s to new beginnings.",
      icon: '<svg viewBox="0 0 32 32" aria-hidden="true"><path d="m16 5 2 8 8 3-8 2-2 9-3-9-8-2 8-3Z" fill="#e5d7a5"/><path d="M26 3v5m-2.5-2.5h5M5 25v4m-2-2h4"/></svg>',
    },
  };
  function applySeason() {
    const now = new Date();
    const season =
      (import.meta.env.DEV
        ? previewSeason(import.meta.env.PUBLIC_PREVIEW_SEASON)
        : undefined) ?? seasonForDate(now);
    const root = document.documentElement;
    const note = document.getElementById("season-note");
    const year = document.getElementById("year");
    if (year) year.textContent = String(now.getFullYear());
    if (!note) return;
    if (root.dataset.season === season) return;
    root.dataset.season = season;
    note.replaceChildren();
    if (!season) return;
    const icon = document.createElement("span");
    icon.className = "season-icon";
    icon.setAttribute("aria-hidden", "true");
    icon.innerHTML = seasonalDetails[season].icon;
    note.append(icon, document.createTextNode(seasonalDetails[season].text));
  }
  applySeason();
  // Refresh on a new day, including when a visitor returns to an open tab.
  setInterval(applySeason, 60000);
  document.addEventListener("visibilitychange", () => {
    if (!document.hidden) applySeason();
  });
}
