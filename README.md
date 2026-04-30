# GrillMe System

A structured workflow to convert:

**Idea → User Stories → Requirements → Tasks → Code**

---

## 🧠 Workflow

1. Define idea in `docs/GRILLME.md`
2. Create user stories via GitHub Issues
3. Track in `REQUIREMENTS.md`
4. Break into `TASKS.md`
5. Implement using `CODE_STANDARDS.md`

---

## ⚙️ Automation

- PRs are validated against:
  - Missing task references
  - Requirement mismatches
  - File structure issues

---

## 🚀 Getting Started

```bash
npm install
npm run validate
