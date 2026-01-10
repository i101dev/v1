# Military Overview

Military power in Syndicate Protocol isn't just about having the biggest army—it's about having the **right capabilities at the right time**. A small force of elite GBQC-trained mercenaries can defeat a much larger force of untrained recruits.

## Military Architecture

```
RECRUITMENT → TRAINING → OPERATIONS → RECOVERY
     ↓           ↓            ↓           ↓
  Citizens    Schools      Cards      Cooldowns
```

### The Components

| Component | What It Is | Purpose |
|-----------|------------|---------|
| **Mercenaries** | Trained military personnel | Execute operations |
| **Training Schools** | 10-stage pipeline | Build capability |
| **Operation Cards** | Consumable missions | Achieve objectives |
| **Equipment** | PRED, DROP, HELC | Force multipliers |
| **Convoys** | Transport system | Move assets safely |

## Training Pipeline

Mercenaries progress through a **linear 10-stage pipeline**:

```
RIP → EMT → CQB → MOUT → SNPR → HALO → SERE → SFAS → DOTC → GBQC
```

| Stage | Schools | Cycles | Cumulative | Key Unlock |
|-------|---------|--------|------------|------------|
| Foundation | RIP, EMT | 4 | 4 | Basic operations |
| Combat | CQB, MOUT, SNPR | 7 | 11 | Defensive bonuses |
| Deployment | HALO, SERE | 4 | 15 | Summit escort, HUNT |
| Elite | SFAS, DOTC, GBQC | 11 | **26** | Route masking, deniability |

**At Military Tier 0, a fully-trained mercenary takes 26 cycles.** Higher tiers reduce this significantly.

## Combat Strength

Combat is resolved by comparing **combat strength**—the sum of completed schools across all participating mercenaries.

```
Combat Strength = Sum of (Schools Completed) for all mercenaries
```

| Mercenary Training | Schools | Contribution |
|-------------------|---------|--------------|
| RIP only | 1 | +1 |
| Through CQB | 3 | +3 |
| Through SERE | 7 | +7 |
| Full GBQC | 10 | +10 |

**A single GBQC mercenary equals TEN untrained recruits.**

## Military Tier Impact

Your Military Tier affects training speed and operation success:

| Military Tier | Training Reduction | Success Bonus | Pipeline Duration |
|---------------|-------------------|---------------|-------------------|
| Tier 0 | 0% | +0% | 26 cycles |
| Tier 1 | 15% | +20% | ~22 cycles |
| Tier 2 | 25% | +35% | ~20 cycles |
| Tier 3 | 40% | +50% | ~16 cycles |

Tier 3 syndicates train mercenaries **40% faster** and succeed **50% more often**.

## QOL Combat Multiplier

Your regional Quality of Life directly multiplies mercenary effectiveness:

| QOL Level | HP/KP Multiplier | Effective Power |
|-----------|------------------|-----------------|
| Minimum | 1.0x | Baseline |
| Low | 1.5x | +50% |
| Medium | 2.5x | +150% |
| High | 4.0x | +300% |
| Maximum | 5.8x | **+480%** |

**A max-QOL mercenary is nearly 6x more effective.** This is why commodity distribution matters for military power.

## Operation Types

Operations execute through **consumable cards**:

| Card | Target | Purpose |
|------|--------|---------|
| **HUNT** | Wild tiles | Acquire EXOT resources |
| **RAID** | Enemy assets | Destroy or capture |
| **HIJK** | Convoys | Intercept shipments |
| **KDNP** | Officers | Kidnap personnel |
| **RSCU** | Captured assets | Rescue operations |
| **PRED** | Various | Drone strikes |

Every operation creates a **Swan Event**. ROE determines legal exposure, not whether you're detected.

## Strategic Considerations

### Start Training Early
Mercenaries trained in cycle 5 are ready by cycle 20-30. Starting in cycle 30 means being defenseless until cycle 50+.

### Quality Over Quantity
Five SERE-trained mercenaries (35 combat strength) beat twenty RIP-only recruits (20 combat strength).

### Protect Your Investments
Losing a GBQC mercenary (26 cycles of training) is catastrophic. Use elite troops wisely.

### Don't Neglect QOL
Military power without commodity investment is wasted potential. A max-QOL RIP recruit outfights a low-QOL SERE veteran.

---

## System Deep Dives

| Topic | What You'll Learn |
|-------|-------------------|
| [Mercenary Training](/systems/military/mercenaries) | Full training pipeline and school details |
| [Combat & ROE](/systems/military/combat) | Combat resolution and casualty mechanics |
| [Operation Cards](/systems/military/cards) | Card types, crafting, and execution |
| [Convoys](/systems/military/convoys) | Transport, escorts, and route masking |
