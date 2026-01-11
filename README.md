# Syndicate Protocol Wiki

Player-facing documentation for Syndicate Protocol. Deployed to GitHub Pages.

---

## Changelog

### v0.1.0 — 2026-01-11

**Protocol Syndicates Refactor**

Major update to Playbooks and Protocol Syndicate documentation reflecting the new objective-based architecture.

**Changed:**

-   `systems/organization/playbooks.md` — Rewrote to explain playbooks as "shopping lists of fillable objectives"
-   `getting-started/four-houses.md` — Updated all contract references to objective language

**New Concepts Documented:**

-   **Objectives** — Fillable requests (Provisions, Items, Cards, Investigations)
-   **Fill Mechanic** — Atomic execution: click Fill → verify → execute → award
-   **Respect System** — House-specific relationship values earned by filling objectives
-   **Respect Thresholds** — Neutral → Known → Trusted → Ally → Inner Circle

**Removed:**

-   Contract system references (contracts absorbed into objectives)
-   Step-sequence playbook model (replaced with shopping list model)

---

## Structure

```
wiki/
├── getting-started/
│   ├── index.md
│   ├── core-concepts.md
│   ├── first-syndicate.md
│   └── four-houses.md
├── systems/
│   ├── economy/
│   ├── military/
│   ├── intelligence/
│   ├── infrastructure/
│   └── organization/
├── progression/
├── events/
└── reference/
```

---

## Development

Built with VitePress (or similar static site generator). See `package.json` for build commands.
