/**
 * Briefloom — Zero-Dependency Node.js Backend & Static Server
 * Run: node server.js (or npm start)
 */
const http = require('http');
const fs = require('fs');
const path = require('path');
const { URL } = require('url');
const projectsController = require('./api/projectsController');
const { calculateProposalTotals } = require('./api/pricingService');

const PORT = process.env.PORT || 3000;
const ROOT_DIR = __dirname;

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png'
};

function sendJSON(res, statusCode, data) {
  res.writeHead(statusCode, {
    'Content-Type': 'application/json; charset=utf-8',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type'
  });
  res.end(JSON.stringify(data, null, 2));
}

function parseJSONBody(req) {
  return new Promise((resolve, reject) => {
    let body = '';
    req.on('data', (chunk) => {
      body += chunk.toString();
      if (body.length > 2 * 1024 * 1024) {
        reject(new Error('Payload too large'));
      }
    });
    req.on('end', () => {
      if (!body.trim()) return resolve({});
      try {
        resolve(JSON.parse(body));
      } catch (err) {
        reject(new Error('Invalid JSON body'));
      }
    });
    req.on('error', reject);
  });
}

function serveStaticFile(res, reqPath) {
  const safePath = reqPath === '/' ? 'index.html' : reqPath.replace(/^\/+/, '');
  const resolved = path.resolve(ROOT_DIR, safePath);
  if (!resolved.startsWith(ROOT_DIR) || !fs.existsSync(resolved) || fs.statSync(resolved).isDirectory()) {
    res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('404 Not Found');
    return;
  }
  const ext = path.extname(resolved).toLowerCase();
  res.writeHead(200, { 'Content-Type': MIME_TYPES[ext] || 'application/octet-stream' });
  fs.createReadStream(resolved).pipe(res);
}

const server = http.createServer(async (req, res) => {
  if (req.method === 'OPTIONS') {
    res.writeHead(204, {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    });
    return res.end();
  }

  const parsedUrl = new URL(req.url, `http://localhost:${PORT}`);
  const pathname = parsedUrl.pathname;

  try {
    if (pathname === '/api/health' && req.method === 'GET') {
      return sendJSON(res, 200, { status: 'ok', service: 'briefloom-api', timestamp: new Date().toISOString() });
    }

    if (pathname === '/api/projects' && req.method === 'GET') {
      return sendJSON(res, 200, { projects: projectsController.listProjects() });
    }

    if (pathname === '/api/projects' && req.method === 'POST') {
      const body = await parseJSONBody(req);
      const created = projectsController.createProject(body);
      return sendJSON(res, 201, { project: created });
    }

    if (pathname.startsWith('/api/projects/')) {
      const id = decodeURIComponent(pathname.replace('/api/projects/', ''));
      if (req.method === 'GET') {
        const proj = projectsController.getProjectById(id);
        return proj ? sendJSON(res, 200, { project: proj }) : sendJSON(res, 404, { error: 'Project not found' });
      }
      if (req.method === 'PUT') {
        const body = await parseJSONBody(req);
        const updated = projectsController.updateProject(id, body);
        return updated ? sendJSON(res, 200, { project: updated }) : sendJSON(res, 404, { error: 'Project not found' });
      }
      if (req.method === 'DELETE') {
        const deleted = projectsController.deleteProject(id);
        return deleted ? sendJSON(res, 200, { deleted: true, id }) : sendJSON(res, 404, { error: 'Project not found' });
      }
    }

    if (pathname === '/api/proposals/calculate' && req.method === 'POST') {
      const body = await parseJSONBody(req);
      const totals = calculateProposalTotals(body);
      return sendJSON(res, 200, { financials: totals });
    }

    return serveStaticFile(res, pathname);
  } catch (err) {
    return sendJSON(res, 400, { error: err.message || 'Bad Request' });
  }
});

server.listen(PORT, () => {
  console.log(`Briefloom server running at http://localhost:${PORT}`);
});
