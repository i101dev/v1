# Commodities & Quality of Life

Imperial Commodities are **single-use consumables** purchased exclusively from The Empire. They're the critical bridge between economic investment and military power.

## The Core Loop

```
RESOURCES → COMMODITIES → TILE DISTRIBUTION → QOL → COMBAT MULTIPLIER
```

You cannot build a strong military without commodities. And you cannot get commodities without resources and good standing with The Empire.

## Commodity Types

| Commodity | Code | Distribution Effect | Mechanic |
|-----------|------|---------------------|----------|
| Medicine | MEDS | Increases lite value | Healthcare, social stability |
| Ammunition | AMMO | Decreases dark value | Suppresses criminal activity |
| Food | FOOD | Increases rich population | Economic prosperity |
| Tools | TOOLS | Decreases gang population | Employment alternatives |

## How Commodities Work

### 1. Purchase from Empire
- **Payment:** Resources (ENGY + MINR + WATR), not CRD
- **Source:** Imperial Marketplace only (Empire monopoly)
- **Delivery:** 1-cycle delay after purchase
- **Supply:** Unlimited (constrained only by your resources)

### 2. Stockpile (Optional)
Commodities can be held in inventory:
- Strategic timing of distribution
- QRF assignment for rapid deployment
- Buffer against supply disruption

::: warning Theft Risk
Stockpiled commodities can be stolen via HIJK (hijack) and RAID operations. Distribute promptly or defend stockpiles.
:::

### 3. Distribute to Tiles
Assign commodities to specific tiles in your controlled sectors:
- Effects apply immediately
- Commodities are consumed (destroyed)
- Tile stats update

### 4. QOL Recalculation
After distribution:
- **Sector QOL** updates (affects your military)
- **Region QOL** updates (affects FOREX)
- Combat multipliers adjust

## Finance Tier Discounts

Your Finance Tier dramatically reduces commodity costs through **stacking discounts**:

| Finance Tier | Resource Discount | Imperial Subsidy | Effective Cost |
|--------------|-------------------|------------------|----------------|
| Tier 0 | 0% | 0% | 100% |
| Tier 1 | 35% | 60% | ~26% |
| Tier 2 | 55% | 80% | ~9% |
| Tier 3 | 75% | 95% | **~1.25%** |

### How Discounts Stack

Two separate discounts apply multiplicatively:

1. **Resource Discount** — Reduces cost of resources on Resource Market
2. **Imperial Subsidy** — Additional discount on commodity purchases

**Tier 3 Example:**
- Base cost: 100 resources
- After 75% resource discount: 25 resources
- After 95% Imperial subsidy: 25 × 0.05 = **1.25 resources**

Tier 3 syndicates pay approximately **1/80th** of baseline commodity cost.

## Quality of Life (QOL)

QOL is the critical metric that connects economic investment to military power.

### QOL Components

Each tile has four population metrics affected by commodities:

| Metric | Increased By | Decreased By | Effect |
|--------|--------------|--------------|--------|
| **Lite** | MEDS | Neglect | Stable, productive citizens |
| **Dark** | Neglect | AMMO | Criminal elements |
| **Rich** | FOOD | Neglect | Economic prosperity |
| **Gang** | Neglect | TOOLS | Organized crime presence |

### Combat Multiplier

QOL directly multiplies mercenary effectiveness:

| QOL Level | HP Multiplier | KP Multiplier | Effective Power |
|-----------|---------------|---------------|-----------------|
| Minimum | 1.0x | 1.0x | Baseline |
| Low | 1.5x | 1.5x | +50% |
| Medium | 2.5x | 2.5x | +150% |
| High | 4.0x | 4.0x | +300% |
| Maximum | 5.8x | 5.8x | **+480%** |

**A max-QOL mercenary is nearly 6x more effective than a baseline one.**

### Strategic Implications

1. **QOL is not optional** — Neglecting commodities means fielding weak military
2. **QOL compounds** — Higher QOL → win fights → expand territory → more resources → more commodities → higher QOL
3. **QOL is regional** — Your sector QOL affects your troops; region QOL affects FOREX
4. **QOL can be attacked** — Enemies can target your commodity stockpiles or distribution infrastructure

## Sanctions

The Empire can **sanction** syndicates, cutting off commodity access entirely.

- Sanctioned syndicates cannot purchase from Imperial Marketplace
- Existing stockpiles remain usable
- Must rely on theft (HIJK/RAID) or lift sanctions to resupply

Avoiding sanctions requires maintaining acceptable standing with Imperial authorities.

---

<details class="technical-deep-dive">
<summary>Technical Deep Dive</summary>

### Backend Implementation

| Mechanic | Backend Location | Description |
|----------|-----------------|-------------|
| Commodity model | `_GAME_v2/commodity/M_commodity.ts` | MEDS/AMMO/FOOD/TOOLS stockpiles |
| Commodity service | `_GAME_v2/commodity/S_commodity.ts` | Purchase, delivery, distribution |
| Commodity controller | `_GAME_v2/commodity/C_commodity.ts` | HTTP endpoints |

### QOL Calculation

See `region_qol.md` for complete QOL formula including:
- Tile-level stat aggregation
- Sector QOL computation
- Regional QOL aggregation
- Combat multiplier curves
- Counterbalance mechanics

</details>

---

**Related:** [Resources](/systems/economy/resources) — How to acquire resources for commodities
