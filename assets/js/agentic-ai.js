(() => {
  const root = document.querySelector(".ai-wg");
  if (!root) return;
  const bar = root.querySelector(".ai-filterbar");
  const buttons = [...bar.querySelectorAll("button")];
  const cards = [...root.querySelectorAll(".ai-case")];
  const count = root.querySelector("#ai-result-count");
  const applyFilter = (filter) => {
    buttons.forEach((button) =>
      button.setAttribute(
        "aria-pressed",
        String(button.dataset.filter === filter),
      ),
    );
    let visible = 0;
    cards.forEach((card) => {
      const matches =
        filter === "all" || card.dataset.topics.split(" ").includes(filter);
      card.hidden = !matches;
      if (matches) visible++;
    });
    count.textContent = `${visible} ${visible === 1 ? "session" : "sessions"}`;
  };
  bar.hidden = false;
  buttons.forEach((button) =>
    button.addEventListener("click", () => applyFilter(button.dataset.filter)),
  );
  root
    .querySelectorAll(".ai-person-topic")
    .forEach((link) =>
      link.addEventListener("click", () => applyFilter("all")),
    );
})();
