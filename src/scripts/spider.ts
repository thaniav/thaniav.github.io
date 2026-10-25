export function initializeSpider() {
  const spider = document.querySelector<HTMLButtonElement>(".halloween-spider");
  if (!spider) return;
  let webTimer: ReturnType<typeof setTimeout> | undefined;
  let activeWeb: SVGSVGElement | null = null;
  spider.addEventListener("click", () => {
    if (spider.disabled) return;
    clearTimeout(webTimer);
    if (activeWeb) activeWeb.remove();
    const bounds = spider.getBoundingClientRect();
    const web = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    web.classList.add("spider-web");
    web.setAttribute("viewBox", "-120 -120 240 240");
    web.setAttribute("aria-hidden", "true");
    // Keep the burst inside the viewport, reaching outward from the spider.
    const size = Math.min(240, window.innerWidth - 16, window.innerHeight - 16);
    const left = Math.max(
      8,
      Math.min(
        bounds.left - size + bounds.width / 2,
        window.innerWidth - size - 8,
      ),
    );
    const top = Math.max(
      8,
      Math.min(
        bounds.top + bounds.height * 0.84 - size / 2,
        window.innerHeight - size - 8,
      ),
    );
    web.style.width = web.style.height = `${size}px`;
    web.style.left = `${left}px`;
    web.style.top = `${top}px`;
    web.style.transformOrigin = `${bounds.left + bounds.width / 2 - left}px ${bounds.top + bounds.height * 0.84 - top}px`;
    let strands = "";
    for (let i = 0; i < 8; i++) {
      const angle = (i * Math.PI) / 4;
      strands += `M0 0L${Math.cos(angle) * 110} ${Math.sin(angle) * 110}`;
    }
    for (const radius of [25, 50, 80, 110]) {
      for (let i = 0; i < 8; i++) {
        const a = (i * Math.PI) / 4;
        const b = ((i + 1) * Math.PI) / 4;
        const mid = (a + b) / 2;
        strands += `M${Math.cos(a) * radius} ${Math.sin(a) * radius}Q${Math.cos(mid) * radius * 0.72} ${Math.sin(mid) * radius * 0.72} ${Math.cos(b) * radius} ${Math.sin(b) * radius}`;
      }
    }
    const path = document.createElementNS(web.namespaceURI, "path");
    path.setAttribute("d", strands);
    path.setAttribute("fill", "none");
    path.setAttribute("stroke", "currentColor");
    path.setAttribute("stroke-width", "1.5");
    web.append(path);
    document.body.append(web);
    activeWeb = web;
    spider.disabled = true;
    spider.classList.add("is-climbing");
    setTimeout(
      () => {
        spider.hidden = true;
      },
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : 1300,
    );
    webTimer = setTimeout(() => {
      web.remove();
      activeWeb = null;
    }, 2000);
  });
}
