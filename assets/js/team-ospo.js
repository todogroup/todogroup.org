document.querySelectorAll('.team-ospo__portraits').forEach(collage => {
  const people = JSON.parse(collage.dataset.people);
  const slots = [...collage.querySelectorAll('.team-ospo__portrait')];
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (people.length <= slots.length) return;
  let visible = false;
  let nextPerson = slots.length;
  let nextSlot = 0;
  let pending = false;
  new IntersectionObserver(entries => { visible = entries[0].isIntersecting; }).observe(collage);
  window.setInterval(() => {
    if (pending || !visible || document.hidden || reducedMotion.matches || collage.matches(':hover, :focus-within')) return;
    const slot = slots[nextSlot];
    let person;
    for (let attempt = 0; attempt < people.length; attempt++) {
      const candidate = people[nextPerson++ % people.length];
      if (!slots.some(item => item.getAttribute('aria-label') === candidate.name)) { person = candidate; break; }
    }
    if (!person) return;
    pending = true;
    const image = new Image(260, 260);
    image.alt = person.name;
    image.className = 'is-entering';
    image.onload = () => {
      if (document.hidden || reducedMotion.matches || collage.matches(':hover, :focus-within')) { pending = false; return; }
      const previous = slot.querySelector('img');
      slot.append(image);
      slot.href = person.url;
      slot.setAttribute('aria-label', person.name);
      requestAnimationFrame(() => requestAnimationFrame(() => image.classList.remove('is-entering')));
      window.setTimeout(() => { previous.remove(); pending = false; }, 750);
      nextSlot = (nextSlot + 1) % slots.length;
    };
    image.onerror = () => { pending = false; };
    image.src = person.photo;
  }, 3200);
});
