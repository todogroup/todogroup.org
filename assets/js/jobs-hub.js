(() => {
  const button = document.querySelector('[data-copy-job-template]');
  if (!button || !navigator.clipboard?.writeText) return;
  const status = document.querySelector('.jobs-copy-status');
  const japanese = document.documentElement.lang === 'ja';
  button.hidden = false;
  button.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(document.querySelector('#job-post-template').textContent.trim());
      status.textContent = japanese ? 'テンプレートをコピーしました。Slack に貼り付けて記入してください。' : 'Template copied. Paste it into Slack and add your details.';
    } catch {
      status.textContent = japanese ? '上のテンプレートを選択してコピーしてください。' : 'Select and copy the template above.';
    }
  });
})();
