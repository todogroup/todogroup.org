(() => {
  const companion = document.querySelector('.ospochi');
  if (!companion) return;
  const launcher = companion.querySelector('.ospochi__launcher');
  const panel = companion.querySelector('.ospochi__panel');
  const restore = document.querySelector('.ospochi-restore');
  const setHidden = value => {
    companion.hidden = value;
    restore.hidden = !value;
  };
  const setOpen = (value, returnFocus = false) => {
    panel.hidden = !value;
    companion.classList.toggle('is-open', value);
    launcher.setAttribute('aria-expanded', String(value));
    if (value) panel.querySelector('a').focus();
    else if (returnFocus) launcher.focus();
  };
  setHidden(false);
  launcher.addEventListener('click', () => setOpen(panel.hidden));
  companion.querySelector('.ospochi__hide').addEventListener('click', () => { setOpen(false); setHidden(true); restore.focus({ preventScroll:true }); });
  restore.addEventListener('click', () => { setHidden(false); launcher.focus(); });
  document.addEventListener('keydown', event => { if (event.key === 'Escape' && !panel.hidden) setOpen(false, true); });
  document.addEventListener('click', event => { if (!panel.hidden && !companion.contains(event.target)) setOpen(false); });
})();
