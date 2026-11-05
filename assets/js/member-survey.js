(() => {
  const form = document.querySelector('form.survey-form');
  if (!form) return;

  // Show the "Please specify" field only when "Other" is selected.
  const syncOther = (input) => {
    const wrap = document.getElementById(`${input.dataset.other}-wrap`);
    if (!wrap) return;
    wrap.hidden = !input.checked;
    if (!input.checked) wrap.querySelector('input').value = '';
  };

  // Dropdowns: show "Please specify" when "Other" is chosen.
  form.querySelectorAll('select[data-other]').forEach((select) => {
    const wrap = document.getElementById(`${select.dataset.other}-wrap`);
    const sync = () => {
      wrap.hidden = select.value !== 'Other';
      if (wrap.hidden) wrap.querySelector('input').value = '';
    };
    select.addEventListener('change', sync);
    sync();
  });

  form.querySelectorAll('.survey-question').forEach((question) => {
    const inputs = [...question.querySelectorAll('.survey-options input')];
    const max = Number(question.dataset.max) || 0;
    const limitNote = question.querySelector('.survey-limit');

    const update = (changed) => {
      // "None of the above" / "Not yet" clear the other choices, and the reverse.
      if (changed && changed.type === 'checkbox' && changed.checked) {
        inputs.forEach((i) => {
          if (i === changed) return;
          if ('exclusive' in changed.dataset || 'exclusive' in i.dataset) i.checked = false;
        });
      }
      // Enforce "Select up to N".
      if (max) {
        const count = inputs.filter((i) => i.checked).length;
        inputs.forEach((i) => { i.disabled = !i.checked && count >= max; });
        if (limitNote) limitNote.textContent = `${count} of ${max} selected`;
      }
      inputs.filter((i) => i.dataset.other).forEach(syncOther);
    };

    inputs.forEach((i) => i.addEventListener('change', () => update(i)));
    update();
  });
})();
