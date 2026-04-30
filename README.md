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

---

# ⚙️ GitHub Actions (Validation)

## `.github/workflows/validate-structure.yml`

```yaml id="q8h2mz"
name: Validate GrillMe Structure

on:
  pull_request:
    branches: [ main ]

jobs:
  validate:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout repo
        uses: actions/checkout@v3

      - name: Setup Node
        uses: actions/setup-node@v3
        with:
          node-version: 18

      - name: Install deps
        run: npm install

      - name: Run validation
        run: npm run validate
