# Fortresses & Sectors

Fortresses are the foundation of territorial control. Without a fortress, you control nothing.

## Core Concept

- Players control **sectors**, not individual tiles
- Sectors are defined by **fortresses**
- Buildings can only be constructed within controlled sectors
- **Territory control = path to victory**

## Fortress Construction

### Requirements
- Can only be built on **plains tiles**
- First fortress: **FREE** (0 cost)
- Additional fortresses: Geometric cost increase

### Cost Progression

| Fortress # | Cost Multiplier | Total Cost |
|------------|-----------------|------------|
| 1st | FREE | 0 |
| 2nd | 1.5x base | 75 MINR + 75 ENGY + 75 WATR |
| 3rd | 2.25x base | 112 each |
| 4th | 3.375x base | 168 each |

**Base cost:** 50 MINR + 50 ENGY + 50 WATR
**Formula:** `base_cost × 1.5^(n-1)` where n = total fortress count

## Fortress Levels & Sector Size

| Level | Sector Dimensions | Total Tiles |
|-------|-------------------|-------------|
| 1 | 3×3 square | 9 tiles |
| 2 | 4×4 square | 16 tiles |
| 3 | 5×5 square | 25 tiles |

Upgrading fortresses expands your controlled territory.

## Sector Aggregation

Sectors automatically aggregate:

- **Population** — Total by demographic (poor, rich, sleeper, gang)
- **Quality of Life** — Average across controlled tiles
- **Resources** — Total deposits available for extraction
- **Buildings** — Count and registry of all structures

## Sector Status States

| Status | Description |
|--------|-------------|
| **STABLE** | Fortress intact, no threats |
| **THREATENED** | Under attack, low HP, or enemy detected |
| **EVACUATING** | Fortress destroyed, citizens fleeing |
| **FALLEN** | Sector collapsed, territory lost |

## Fortress Destruction

When a fortress is destroyed:

1. **Sector immediately collapses**
2. Status changes to **FALLEN**
3. Territory reverts to unclaimed
4. Buildings are **destroyed** (`is_rekt: true`)
5. Resources abandoned
6. **Evacuation triggers** — citizens flee to evac point

### Syndicate Elimination

If the destroyed fortress was your **last remaining fortress**:

- **No evacuation** — nowhere to go
- **Syndicate eliminated** from the game
- Officers → DISBANDED
- Citizens → SCATTERED (unrecoverable)
- **Game over** for all members

::: danger Survivability
Territorial expansion to at least **2 fortresses** is required for survivability. One fortress = one point of failure.
:::

## Fortress as Target

Destroying an enemy fortress:
- Collapses entire sector
- Orphans all buildings
- Forces emergency evacuation
- Can eliminate citizens in one strike
- Sets enemy back many cycles

**This is why fortresses require serious defense.**

## Defensive Investment

| Defense Type | Purpose |
|--------------|---------|
| QRF deployments | Rapid response to attacks |
| Citizen garrisons | Defensive bonuses |
| Mercenary forces | Active defense |
| Intelligence ops | Detect attacks before they happen |
| Diplomatic agreements | Mutual defense pacts |

---

<details class="technical-deep-dive">
<summary>Technical Deep Dive</summary>

### Backend Implementation

| Mechanic | Backend Location | Description |
|----------|-----------------|-------------|
| Building model | `_GAME_v2/building/M_building.ts` | FORT type, level, sector control |
| Building service | `_GAME_v2/building/S_building.ts` | Construction, upgrade, destruction |
| Tile service | `_GAME_v2/tile/S_tile.ts` | Sector calculation, aggregation |
| Syndicate elimination | `_GAME_v2/syndicate/S_syndicate.ts` | Final fortress detection |

</details>

---

**Related:** [Ports & Logistics](/systems/infrastructure/ports) — Trade infrastructure
