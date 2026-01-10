# Reference

Quick reference for formulas, values, and mechanics.

## Tier Benefits Summary

### Finance Tier

| Tier | Resource Discount | Commodity Subsidy | Contract Premium | Effective Cost |
|------|-------------------|-------------------|------------------|----------------|
| 0 | 0% | 0% | No access | 100% |
| 1 | 35% | 60% | 150% | ~26% |
| 2 | 55% | 80% | 175% | ~9% |
| 3 | 75% | 95% | 190% | **~1.25%** |

### Military Tier

| Tier | Training Reduction | Success Bonus | Pipeline |
|------|-------------------|---------------|----------|
| 0 | 0% | +0% | 26 cycles |
| 1 | 15% | +20% | ~22 cycles |
| 2 | 25% | +35% | ~20 cycles |
| 3 | 40% | +50% | ~16 cycles |

### Intelligence Tier

| Tier | Masked Convoy | Rogue ID | Warning |
|------|---------------|----------|---------|
| 0 | No | 0% | None |
| 1 | No | ~25% | None |
| 2 | No | ~75% | 1 cycle |
| 3 | **Yes** | 100% | 2 cycles |

## Key Formulas

### Intelligence Score
```
score = (intl_citizens × 3) + (intl_buildings × 8) + (avg_level × 4)
```

### Combat Strength
```
strength = sum(schools_completed) for all mercenaries
```

### Exchange Rate (FOREX)
```
rate = source_lite_index / target_lite_index
lite_index = total_region_crd / total_region_lite
```

### Fortress Cost
```
cost = base × 1.5^(n-1)  where n = fortress count
base = 50 MINR + 50 ENGY + 50 WATR
```

### QOL Combat Multiplier

| QOL Level | Multiplier |
|-----------|------------|
| Minimum | 1.0x |
| Low | 1.5x |
| Medium | 2.5x |
| High | 4.0x |
| Maximum | **5.8x** |

## Training Pipeline

```
RIP → EMT → CQB → MOUT → SNPR → HALO → SERE → SFAS → DOTC → GBQC
 2     2     2      2      3      2      2      3      4      4
```

**Total: 26 cycles (Tier 0)**

### Key Milestones

| School | Cumulative | Unlocks |
|--------|------------|---------|
| SERE | 14 cycles | Summit escort, HUNT, Rapid QRF |
| SFAS | 17 cycles | Route masking, Heroic rescue |
| DOTC | 21 cycles | Deniable operations |
| GBQC | 26 cycles | Maximum effectiveness |

### Defensive Bonuses

| School | Bonus |
|--------|-------|
| CQB | +15% |
| MOUT | +20% |
| SNPR | +25% |
| HALO | +30% |
| SERE | +35% |
| SFAS | +50% |
| DOTC | +75% |
| GBQC | +100% |

## Convoy Timing

| Event | Cycles |
|-------|--------|
| One-way transit | 2 |
| Round trip | 6 |
| Escort cooldown | 1 |
| Equipment cooldown | 2 |

## Building Infrastructure

### Required For

| Activity | Buildings Needed |
|----------|-----------------|
| Market access | PORT + VALT |
| Territory control | FORT |
| Mercenary training | MILB |
| Intel operations | INTL |

### Sector Size by Fortress Level

| Level | Dimensions | Tiles |
|-------|------------|-------|
| 1 | 3×3 | 9 |
| 2 | 4×4 | 16 |
| 3 | 5×5 | 25 |

## Status Codes

### Mercenary Status

| Status | Meaning |
|--------|---------|
| FORT | Available at garrison |
| TRAINING | In school |
| ALLOCATED | Locked to card |
| REST | Recovering (1 cycle) |
| WOUNDED | Injured (3 cycles) |
| DEAD | Permanent loss |

### Convoy Status

| Status | Meaning |
|--------|---------|
| PREPARING | Loading |
| IN_TRANSIT | Traveling |
| ARRIVED | At destination |
| PROCESSED | Completed |
| INTERCEPTED | Captured |

## The Four Houses

| House | Color | Drive | Strategy |
|-------|-------|-------|----------|
| BLU | Blue | Accumulation | Monopolize, hoard |
| GRN | Green | Harm | Hunt, disrupt |
| RED | Red | Protection | Defend, punish |
| YLW | Yellow | Profit | Trade, arbitrage |
