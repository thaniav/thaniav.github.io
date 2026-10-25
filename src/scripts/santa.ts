export function initializeSanta() {
  const santa = document.querySelector<HTMLButtonElement>(".christmas-santa");
  if (!santa) return;
  santa.addEventListener("click", () => {
    if (santa.disabled) return;
    santa.disabled = true;
    const bounds = santa.getBoundingClientRect();
    const originX = bounds.left + bounds.width / 2;
    const originY = bounds.top + bounds.height * 0.45;
    const colors = ["#ac5e50", "#55745b", "#c8a56a", "#8e9b87", "#bd8070"];
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    colors.forEach((color, index) => {
      const gift = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "svg",
      );
      gift.classList.add("santa-gift");
      gift.setAttribute("viewBox", "0 0 34 40");
      gift.setAttribute("aria-hidden", "true");
      const x = (index - 2) * 52;
      const targetX = Math.max(
        8,
        Math.min(originX + x, window.innerWidth - 42),
      );
      const targetY = Math.max(
        8,
        originY - 95 - (2 - Math.abs(index - 2)) * 26,
      );
      gift.style.left = `${reducedMotion ? targetX : originX - 17}px`;
      gift.style.top = `${reducedMotion ? targetY : originY}px`;
      gift.style.setProperty("--gift-x", `${targetX - (originX - 17)}px`);
      gift.style.setProperty("--gift-y", `${targetY - originY}px`);
      gift.style.setProperty("--gift-rotate", `${(index - 2) * 18}deg`);
      gift.innerHTML = `<rect x="3" y="13" width="28" height="25" rx="2" fill="${color}"/><rect x="1" y="10" width="32" height="7" rx="2" fill="${color}"/><path d="M17 11v27M3 24h28" fill="none" stroke="#fff0ce" stroke-width="3"/><path d="M17 10C3 10 6-3 13 3l4 7c14 0 11-13 4-7Z" fill="none" stroke="#e5c78c" stroke-width="2"/>`;
      document.body.append(gift);
      setTimeout(() => gift.remove(), 2000);
    });
    santa.classList.add("is-hiding");
    // Leave the quiet chimney behind; refreshing brings Santa back.
    setTimeout(
      () => {
        santa.setAttribute("aria-hidden", "true");
        santa.tabIndex = -1;
      },
      reducedMotion ? 0 : 1150,
    );
  });
}
