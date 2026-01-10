# FOREX Trading

Inter-regional trade enables syndicates to buy and sell resources and items across different regional markets. This introduces **currency exchange rates** based on regional economic health, creating opportunities for arbitrage and economic warfare.

## Core Concept

Each region has its own CRD currency. While denominated identically, regional currencies have different **purchasing power** based on economic fundamentals.

**Key insight:** A strong-currency syndicate's CRD buys more abroad. A weak-currency syndicate's exports command premium prices.

## Tradeable Goods

### Resources
| Resource | Description |
|----------|-------------|
| ENGY | Energy |
| MINR | Minerals |
| WATR | Water |

### Items
| Category | Item Types |
|----------|------------|
| Industrial | CHEM, ELEC, MACH |
| Advanced | AERO, BIOT, ROBO |
| Military | PRED, DROP, HELC |
| Contraband | NARC, WEAP, EXOT |

Items of the same type are **fungible across regions**. Region A's ELEC is interchangeable with Region B's ELEC.

## Regional Lite Index (RLI)

The **Regional Lite Index** measures currency strength:

```
Regional Lite Index = Total Region CRD / Total Region Lite
```

Where:
- **Total Region CRD** = All player CRD + all market pool CRD
- **Total Region Lite** = Lite population across all regional tiles

### Interpreting the Index

| Metric | Low Value | High Value |
|--------|-----------|------------|
| Regional Lite Index | Less inflation | More inflation |
| Currency Strength | **Stronger** | **Weaker** |

**Lower index = stronger currency** (less money chasing goods)

### Why "Lite" Population?

"Lite" represents the region's stable, productive citizenry. Think of it as this world's **reserve asset**—analogous to gold backing real-world currencies.

## Exchange Rate Calculation

```
Exchange Rate = Source Lite Index / Target Lite Index
```

### Example

| Metric | Region A | Region B |
|--------|----------|----------|
| Total Region CRD | 1,000,000 | 1,000,000 |
| Total Region Lite | 2,000 | 3,000 |
| Regional Lite Index | 500 | 333.3 |

**Region B has the stronger currency** (lower index = less inflation)

#### When Region B buys from Region A:
- Exchange rate = 333.3 / 500 = **0.666**
- A 100 CRD item costs Region B only **66.6 CRD**
- Strong currency stretches further

#### When Region A buys from Region B:
- Exchange rate = 500 / 333.3 = **1.50**
- A 100 CRD item costs Region A **150 CRD**
- Weak currency buys less

## Imperial Trade Settlement Bank (ITSB)

The ITSB is an **active market maker** that handles CRD flow discrepancies.

### The Problem
When exchange rates differ from 1.0:
- Buyer pays different amount than seller receives
- CRD would be created or destroyed without intervention

### The Solution
ITSB maintains a balance sheet that absorbs differences:

#### Strong Currency Buys from Weak
```
Region B (strong) buys 100 CRD item from Region A (weak)

Region B buyer pays:     -66.6 CRD
Region A pool receives: +100.0 CRD
─────────────────────────────────
Price Delta:            -33.4 CRD

ITSB fronts the 33.4 CRD difference
ITSB Balance: Decreases (debt position)
```

#### Weak Currency Buys from Strong
```
Region A (weak) buys 100 CRD item from Region B (strong)

Region A buyer pays:    -150.0 CRD
Region B pool receives: +100.0 CRD
─────────────────────────────────
Price Delta:            +50.0 CRD

ITSB retains the 50.0 CRD difference
ITSB Balance: Increases (surplus position)
```

### ITSB Balance Interpretation

| Balance | Meaning |
|---------|---------|
| **Positive** | Weak currencies paying premium (surplus) |
| **Negative** | Strong currencies exploiting advantage (debt) |
| **Zero** | Trade flows perfectly balanced |

A persistently negative ITSB balance indicates strong-currency regions are systematically draining value.

## Trade Strategy

| Your Currency | Strategy |
|---------------|----------|
| **Stronger** (low RLI) | Import heavily—your CRD buys more abroad |
| **Weaker** (high RLI) | Export heavily—foreign buyers pay premium |

## Currency Manipulation

You can influence your regional currency strength:

| Action | Effect on RLI | Currency Impact |
|--------|---------------|-----------------|
| Increase lite population (MEDS) | Lower | Stronger |
| Grow total CRD (market activity) | Higher | Weaker |
| Drain CRD (heavy imports) | Lower | Stronger |
| Attract CRD (exports) | Higher | Weaker |

## Economic Warfare

### Currency Attacks
- **Inflate enemy currency** — Inject CRD into their region
- **Deflate your currency** — Make your exports cheaper
- **ITSB exploitation** — Use strong currency to extract systematic value

### Trade Denial
- **PORT destruction** — Cut off foreign market access entirely
- **Convoy hijacking** — Intercept cross-regional shipments
- **Market manipulation** — Make their imports prohibitively expensive

## Finance Tier Requirements

| Tier | FOREX Access |
|------|--------------|
| Tier 0 | No access |
| Tier 1+ | Full trading enabled |
| Tier 1+ | Trade balance visibility |
| Tier 2+ | Detailed transaction history |

## Infrastructure Requirements

All cross-regional trade requires PORT infrastructure:
- Buyer's region must have operational PORT
- Seller's region must have operational PORT
- Items physically route through PORT connections

---

<details class="technical-deep-dive">
<summary>Technical Deep Dive</summary>

### Backend Implementation

| Mechanic | Backend Location | Description |
|----------|-----------------|-------------|
| ITSB model | `_GAME_v2/itsb/M_itsb.ts` | Balance tracking, transaction recording |
| ITSB service | `_GAME_v2/itsb/S_itsb.ts` | Trade balance queries, reports |
| FOREX service | `_GAME_v2/forex/S_forex.ts` | Exchange rate calculation, cross-region trade |
| Regional Lite Index | `_GAME_v2/region/S_region.ts` | Total CRD + Total Lite aggregation |

### HTTP Routes

| Route | Purpose |
|-------|---------|
| `FOREX_GET_RATE` | Get exchange rate between regions |
| `FOREX_BUY` | Buy from foreign market |
| `FOREX_SELL` | Sell to foreign market |
| `ITSB_TRADE_BALANCE_GET` | Regional trade balance summary |
| `ITSB_REPORT_GET` | Detailed transaction history |

### Transaction Recording

Every FOREX transaction records:
- `buyer_region`, `seller_region`
- `buyer_paid`, `pool_received`
- `exchange_rate`
- `itsb_delta` (positive = retained, negative = fronted)
- `itsb_balance_after` (audit trail)

</details>

---

**Related:** [Economy Overview](/systems/economy/) — How all economic systems connect
