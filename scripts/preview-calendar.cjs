const http = require('node:http');
const fs = require('node:fs/promises');
const path = require('node:path');
const { handleCalendar } = require('../netlify/functions/community-calendar.js');
const directory = path.resolve(process.argv[2] || 'public');
const port = Number(process.argv[3] || 1315);
const types = { '.html':'text/html', '.css':'text/css', '.js':'text/javascript', '.json':'application/json', '.ics':'text/calendar', '.svg':'image/svg+xml', '.png':'image/png', '.jpg':'image/jpeg', '.jpeg':'image/jpeg', '.woff2':'font/woff2', '.pdf':'application/pdf' };
const cache = new Map();
const server = http.createServer(async (request, response) => {
  try {
    if (!['GET','HEAD'].includes(request.method)) { response.writeHead(405); response.end(); return; }
    const url = new URL(request.url, 'http://localhost:' + port);
    if (url.pathname.startsWith('/calendar-feeds/')) {
      const key = url.pathname + url.search;
      let cached = cache.get(key);
      if (!cached || Date.now() - cached.time > 300000) {
        const query = Object.fromEntries(url.searchParams);
        query.source = url.pathname.slice('/calendar-feeds/'.length);
        const result = await handleCalendar({ queryStringParameters: query });
        cached = { result, time: Date.now() };
        if (result.statusCode === 200) cache.set(key, cached);
      }
      response.writeHead(cached.result.statusCode, cached.result.headers || {});
      response.end(request.method === 'HEAD' ? '' : cached.result.body);
      return;
    }
    let filename = path.resolve(directory, '.' + decodeURIComponent(url.pathname));
    if (!filename.startsWith(directory + path.sep) && filename !== directory) { response.writeHead(403); response.end(); return; }
    if ((await fs.stat(filename)).isDirectory()) filename = path.join(filename, 'index.html');
    const content = await fs.readFile(filename);
    response.writeHead(200, { 'Content-Type': types[path.extname(filename)] || 'application/octet-stream' });
    response.end(request.method === 'HEAD' ? '' : content);
  } catch {
    response.writeHead(404); response.end('Not found');
  }
});
server.listen(port, '127.0.0.1', () => console.log('Local preview: http://localhost:' + port));
