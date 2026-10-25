document.querySelectorAll('.associate-directory').forEach(directory => {
  const search = directory.querySelector('.associate-search');
  const input = search.querySelector('input');
  const clear = search.querySelector('button');
  const tiles = [...directory.querySelectorAll('.associate-organization')];
  const status = directory.querySelector('.associate-count');
  const empty = directory.querySelector('.associate-empty');
  const more = directory.querySelector('.associate-more');
  const pageSize = Number(directory.dataset.initialCount) || tiles.length;
  let limit = pageSize;
  const filter = () => {
    const query = input.value.trim().toLocaleLowerCase();
    let matched = 0;
    let visible = 0;
    tiles.forEach(tile => {
      const matches = tile.dataset.name.toLocaleLowerCase().includes(query);
      if (matches) matched++;
      tile.hidden = !matches || (!query && matched > limit);
      if (!tile.hidden) visible++;
    });
    status.textContent = visible === tiles.length ? `${tiles.length} organizations` : `${visible} of ${tiles.length} organizations`;
    empty.hidden = matched !== 0;
    clear.hidden = !query;
    more.hidden = !!query || visible >= tiles.length;
  };
  search.hidden = false;
  input.addEventListener('input', filter);
  clear.addEventListener('click', () => { input.value = ''; limit = pageSize; filter(); input.focus(); });
  more.addEventListener('click', () => { limit += pageSize; filter(); });
  filter();
});
