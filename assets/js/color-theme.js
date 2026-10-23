(() => {
  const root = document.documentElement;
  const system = window.matchMedia('(prefers-color-scheme: dark)');
  const key = 'todo-color-theme';
  let choice;
  try { choice = localStorage.getItem(key); } catch (_) {}
  const apply = dark => {
    root.dataset.theme = dark ? 'dark' : 'light';
    document.querySelectorAll('.theme-toggle').forEach(button => button.setAttribute('aria-checked', String(dark)));
    document.querySelectorAll('[data-logo-dark]').forEach(logo => { logo.src = dark ? logo.dataset.logoDark : logo.dataset.logoLight; });
  };
  apply(choice === 'dark' || (choice !== 'light' && system.matches));
  system.addEventListener('change', event => { if (!choice) apply(event.matches); });
  document.addEventListener('DOMContentLoaded', () => {
    apply(root.dataset.theme === 'dark');
    document.querySelectorAll('.theme-toggle').forEach(button => {
      button.hidden = false;
      button.addEventListener('click', () => {
        choice = root.dataset.theme === 'dark' ? 'light' : 'dark';
        try { localStorage.setItem(key, choice); } catch (_) {}
        apply(choice === 'dark');
      });
    });
  });
})();
