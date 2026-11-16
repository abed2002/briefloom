/**
 * Briefloom API — JSON File Datastore & Project CRUD Controller
 */
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const DATA_FILE = path.join(__dirname, '..', 'data', 'projects.json');

function ensureStore() {
  const dir = path.dirname(DATA_FILE);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  if (!fs.existsSync(DATA_FILE)) {
    fs.writeFileSync(DATA_FILE, JSON.stringify({ projects: [] }, null, 2), 'utf8');
  }
}

function readProjects() {
  ensureStore();
  const raw = fs.readFileSync(DATA_FILE, 'utf8');
  const parsed = JSON.parse(raw);
  return Array.isArray(parsed.projects) ? parsed.projects : [];
}

function writeProjects(projects) {
  ensureStore();
  fs.writeFileSync(DATA_FILE, JSON.stringify({ projects }, null, 2), 'utf8');
}

function listProjects() {
  return readProjects();
}

function getProjectById(id) {
  return readProjects().find((p) => p.id === id) || null;
}

function createProject(payload) {
  const projects = readProjects();
  const now = new Date().toISOString();
  const newProject = {
    id: payload.id || `proj-${crypto.randomUUID().slice(0, 8)}`,
    refCode: payload.refCode || `BL-2026-${String(projects.length + 1).padStart(2, '0')}`,
    isSample: Boolean(payload.isSample),
    name: String(payload.name || 'Untitled Client Engagement'),
    client: String(payload.client || 'New Client'),
    preparedBy: String(payload.preparedBy || 'Principal Studio'),
    category: String(payload.category || 'Website Design & Development'),
    status: String(payload.status || 'Draft Brief'),
    timeline: String(payload.timeline || '6 Weeks'),
    currency: String(payload.currency || 'USD'),
    budgetTarget: Number(payload.budgetTarget || 0),
    contingencyPct: Number(payload.contingencyPct ?? 5),
    discountPct: Number(payload.discountPct ?? 0),
    taxPct: Number(payload.taxPct ?? 0),
    description: String(payload.description || ''),
    objectives: Array.isArray(payload.objectives) ? payload.objectives : [],
    deliverables: Array.isArray(payload.deliverables) ? payload.deliverables : [],
    milestones: Array.isArray(payload.milestones) ? payload.milestones : [],
    notes: String(payload.notes || ''),
    updatedAt: now
  };
  projects.unshift(newProject);
  writeProjects(projects);
  return newProject;
}

function updateProject(id, updates) {
  const projects = readProjects();
  const idx = projects.findIndex((p) => p.id === id);
  if (idx === -1) return null;
  projects[idx] = {
    ...projects[idx],
    ...updates,
    id,
    updatedAt: new Date().toISOString()
  };
  writeProjects(projects);
  return projects[idx];
}

function deleteProject(id) {
  const projects = readProjects();
  const filtered = projects.filter((p) => p.id !== id);
  if (filtered.length === projects.length) return false;
  writeProjects(filtered);
  return true;
}

module.exports = {
  listProjects,
  getProjectById,
  createProject,
  updateProject,
  deleteProject
};
