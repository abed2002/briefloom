# Briefloom — Intelligent Project Scoping & Commercial Proposal Workspace

**Tagline:** From first brief to final proposal.
**Core Value Proposition:** Turn conversations into clear, confident proposals.

## Project Structure (Frontend + Node.js Backend API)

```text
briefloom/
├── index.html                  # Frontend application shell
├── styles.css                  # Custom CSS, responsive styles, and print layout
├── tailwind.config.js          # Tailwind CSS theme configuration
├── app.js                      # Frontend application logic
├── server.js                   # Zero-dependency Node.js HTTP server & REST API router
├── api/
│   ├── projectsController.js   # Project CRUD operations & JSON datastore persistence
│   └── pricingService.js       # Server-side fixed/hourly & milestone calculation engine
├── data/
│   └── projects.json           # Persistent JSON datastore (seeded with sample project)
├── package.json                # Node.js runtime configuration (npm start)
├── robots.txt                  # Search engine crawler configuration
└── README.md                   # Documentation, API reference & deployment guide
```

## Running Full-Stack Locally (Zero External Dependencies)
1. Open Terminal inside the `briefloom/` directory.
2. Run:
   ```bash
   node server.js
   ```
3. Open **http://localhost:3000** in your browser.

## REST API Endpoints
- `GET /api/health` — Server health check
- `GET /api/projects` — List all saved projects from `data/projects.json`
- `POST /api/projects` — Create a new project
- `GET /api/projects/:id` — Retrieve a project by ID
- `PUT /api/projects/:id` — Update a project
- `DELETE /api/projects/:id` — Delete a project
- `POST /api/proposals/calculate` — Calculate fixed/hourly totals and milestone tranches

## Static Hosting ($0/month)
The frontend can be deployed to **Cloudflare Pages**, **GitHub Pages**, or **Netlify** and runs offline-first using browser `localStorage`. Static hosting serves the frontend only; the Node.js API requires a Node.js host such as a VPS or application platform.
