// Password gate for the General Member Survey page.
//
// The password is NOT stored in this repository (the repo is public). Set it in
// Netlify: Site configuration → Environment variables → SURVEY_PASSWORD
// (scope: Functions). Changing the value signs everyone out.
//
// Flow: GET without a valid cookie → password page. POST with the right password
// → cookie is set and the visitor is redirected to the survey. The survey form
// itself posts to the thanks page, which is not gated, so Netlify Forms works.

const PAGE_PATH = '/community/2026-member-survey/';
const COOKIE = 'todo_member_survey';
const MAX_AGE = 60 * 60 * 24 * 30; // 30 days

export const config = {
  path: ['/community/2026-member-survey', '/community/2026-member-survey/', '/community/2026-member-survey/index.html'],
};

const getPassword = () =>
  globalThis.Netlify?.env?.get('SURVEY_PASSWORD') ?? globalThis.process?.env?.SURVEY_PASSWORD ?? '';

async function token(password) {
  const data = new TextEncoder().encode(`todo-member-survey:${password}`);
  const hash = await crypto.subtle.digest('SHA-256', data);
  return [...new Uint8Array(hash)].map((b) => b.toString(16).padStart(2, '0')).join('');
}

function readCookie(request, name) {
  const header = request.headers.get('cookie') || '';
  const match = header.split(/;\s*/).find((c) => c.startsWith(`${name}=`));
  return match ? decodeURIComponent(match.slice(name.length + 1)) : '';
}

function gatePage({ error = false } = {}) {
  const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex, nofollow">
<title>Members only · TODO Group</title>
<style>
  :root { color-scheme: light dark; --bg:#f5f7fa; --card:#fff; --text:#1b1f24; --muted:#5b6470; --line:#cfd6de; --accent:#0b5fb3; --err:#b42318; }
  @media (prefers-color-scheme: dark) { :root { --bg:#0f1318; --card:#181e25; --text:#e8ecf1; --muted:#9aa5b1; --line:#323b46; --accent:#5aa7f2; --err:#ff8a7a; } }
  * { box-sizing: border-box; }
  body { margin:0; min-height:100vh; display:grid; place-items:center; padding:16px; background:var(--bg); color:var(--text); font:16px/1.5 system-ui,-apple-system,"Segoe UI",sans-serif; }
  main { width:100%; max-width:420px; background:var(--card); border:1px solid var(--line); border-radius:12px; padding:2rem; }
  h1 { font-size:1.4rem; margin:0 0 .5rem; }
  p { margin:0 0 1.25rem; color:var(--muted); }
  label { display:block; font-weight:600; margin-bottom:.4rem; }
  input { width:100%; padding:.75rem 1rem; font:inherit; color:inherit; background:transparent; border:1px solid var(--line); border-radius:8px; }
  input:focus-visible, button:focus-visible { outline:3px solid var(--accent); outline-offset:2px; }
  button { margin-top:1rem; width:100%; padding:.8rem 1rem; font:inherit; font-weight:700; color:#fff; background:var(--accent); border:0; border-radius:8px; cursor:pointer; }
  .error { color:var(--err); font-weight:600; margin:.75rem 0 0; }
  .help { font-size:.9rem; margin:1.25rem 0 0; }
  a { color:var(--accent); }
</style>
</head>
<body>
<main>
  <h1>2026 TODO Group General Member Survey</h1>
  <p>This survey is for TODO Group General Members. Enter the password from your invitation email.</p>
  <form method="POST" action="${PAGE_PATH}">
    <label for="survey-password">Password</label>
    <input id="survey-password" name="survey_password" type="password" autocomplete="current-password" required autofocus${error ? ' aria-invalid="true" aria-describedby="survey-error"' : ''}>
    ${error ? '<p id="survey-error" class="error" role="alert">That password is not correct. Please try again.</p>' : ''}
    <button type="submit">Open the survey</button>
  </form>
  <p class="help">No password? Ask the TODO Group team in <a href="https://thetodogroup.slack.com">TODO Group Slack</a>.</p>
</main>
</body>
</html>`;
  return new Response(html, {
    status: 401,
    headers: { 'content-type': 'text/html; charset=utf-8', 'cache-control': 'no-store' },
  });
}

export default async function handler(request, context) {
  const password = getPassword();
  if (!password) {
    // Fail closed: never show the survey if the password is not configured.
    return new Response('The survey is not available yet.', {
      status: 503,
      headers: { 'content-type': 'text/plain; charset=utf-8', 'cache-control': 'no-store' },
    });
  }

  const expected = await token(password);

  if (request.method === 'POST') {
    const body = await request.formData().catch(() => null);
    const attempt = String(body?.get('survey_password') ?? '');
    if (attempt && (await token(attempt)) === expected) {
      return new Response(null, {
        status: 303,
        headers: {
          location: PAGE_PATH,
          'cache-control': 'no-store',
          'set-cookie': `${COOKIE}=${expected}; Path=${PAGE_PATH}; Max-Age=${MAX_AGE}; HttpOnly; Secure; SameSite=Lax`,
        },
      });
    }
    return gatePage({ error: true });
  }

  if (readCookie(request, COOKIE) === expected) {
    const response = await context.next();
    response.headers.set('cache-control', 'private, no-store');
    return response;
  }

  return gatePage();
}
