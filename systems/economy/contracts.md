# Imperial Defense Contracts

Imperial Defense Contracts allow syndicates to sell crafted items directly to The Empire at **premium rates**. This is a one-way sale (player → Empire), not a marketplace.

## How Contracts Work

1. **Contracts appear** each cycle requesting military equipment
2. **Syndicates claim** contracts on first-come basis
3. **Fulfill** by delivering the requested items
4. **Get paid** at premium rates based on Finance Tier

## Access Requirements

| Requirement | Details |
|-------------|---------|
| Finance Tier | Tier 1+ required |
| Availability | Limited per cycle |
| Claiming | First-come, first-served |
| Payment | On delivery |

## Payment Structure

Higher Finance Tiers earn significantly more per contract:

| Finance Tier | Contract Payment | Example (1,000 CRD item) |
|--------------|------------------|-------------------------|
| Tier 1 | 150% of market value | 1,500 CRD |
| Tier 2 | 175% of market value | 1,750 CRD |
| Tier 3 | 190% of market value | 1,900 CRD |

**Tier 3 earns 26.7% more per contract than Tier 1.**

## Tier 3: Recurring-Exclusive Contracts

Finance Tier 3 unlocks a special contract type:

### Recurring-Exclusive Features
- **Construction and development agreements** (not simple item delivery)
- **50% upfront payment** from Imperial Treasury
- **Final 50% on completion** — if delivered on time
- **Ultra-high value** for complex weapon systems

### Scale Requirements
These contracts demand massive production capacity:
- **Market purchases** — Vulnerable to price volatility
- **Manufacturing infrastructure** — Requires heavy capital investment

### Penalty Structure
| Delivery Status | Final Payment |
|-----------------|---------------|
| On time | Full 50% |
| Late | Reduced (sliding scale) |
| Excessive delay | Cancellation + refund requirement |

::: warning Risk Assessment
Recurring-exclusive contracts carry significant risk. Missing deadlines can result in negative returns. Only pursue if you have reliable production capacity.
:::

## Strategic Value

### Revenue Stream
Contracts provide consistent CRD income for military-focused economies:
- Predictable demand (unlike volatile markets)
- Premium pricing (150-190% of market)
- Scales with production capacity

### Economic Engine
Higher tiers create a sustainable cycle:
1. Invest in tier progression
2. Unlock better contract rates
3. Reinvest profits in more infrastructure
4. Compound advantages over time

### Vertical Integration
Maximum profitability comes from:
- Extracting your own resources
- Manufacturing your own items
- Selling through contracts at premium

This eliminates market margins at every step.

## Competition Dynamics

Contracts are **limited per cycle** and claimed first-come:
- Fast actors secure the best contracts
- Monitoring contract board is essential
- Consider claiming contracts strategically (even if you can't fulfill) to deny competitors

## Contract Types

Typical contract requests include:

| Category | Item Examples | Typical Volume |
|----------|---------------|----------------|
| Industrial | CHEM, ELEC, MACH | High volume, lower value |
| Advanced | AERO, BIOT, ROBO | Medium volume, higher value |
| Military | PRED, DROP, HELC | Lower volume, premium value |

Military items command the highest premiums but require the most sophisticated manufacturing.

---

<details class="technical-deep-dive">
<summary>Technical Deep Dive</summary>

### Backend Implementation

| Mechanic | Backend Location | Description |
|----------|-----------------|-------------|
| Contract generation | `_GAME_v2/defense_contract/S_contract.ts` | Creates contracts each cycle |
| Contract claiming | `_GAME_v2/defense_contract/S_contract.ts` | First-come assignment |
| Contract fulfillment | `_GAME_v2/defense_contract/S_contract.ts` | Delivery validation and payment |

### Contract Generation
Contracts are generated at cycle start based on:
- Regional demand algorithms
- Available item types
- Difficulty scaling over game progression

</details>

---

**Related:** [FOREX Trading](/systems/economy/forex) — Alternative revenue through inter-regional trade
