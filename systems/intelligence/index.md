# Intelligence Overview

Intelligence is the detection and information-gathering system. It determines what you can observe about enemy activities, convoy movements, and hostile actors.

**Core principle:** What you know about your enemies is worth more than ammunition. Information asymmetry is a strategic weapon.

## Intelligence Tiers

Syndicates operate at one of four intelligence tiers:

| Tier | Name | Capability Level |
|------|------|------------------|
| 0 | None | Blind—no external visibility |
| 1 | Basic | Surface-level detection |
| 2 | Advanced | Tactical analysis |
| 3 | Elite | Full operational intelligence |

## Tier Calculation

Intelligence tier is calculated at the **syndicate level** by aggregating member infrastructure.

### Formula

```
base_intel_score =
    (total_intl_citizens × 3) +
    (total_intl_buildings × 8) +
    (avg_building_level × 4)
```

### Score to Tier

| Score Range | Base Tier |
|-------------|-----------|
| No INTL infrastructure | Tier 0 |
| 0-34 | Tier 1 |
| 35-74 | Tier 2 |
| 75+ | Tier 3 |

**Key insight:** Having ANY INTL infrastructure guarantees at least Tier 1. Tier 0 means complete blindness.

### Military Tier Bonus

| Military Tier | Intelligence Bonus |
|---------------|-------------------|
| Tier 0-2 | +0 tiers |
| Tier 3 | +1 tier |

### Effective Tier
```
effective_tier = min(3, base_tier + military_bonus)
```

## What Each Tier Reveals

### Convoy Detection

| Intel Tier | Normal Convoys | Route Masked |
|------------|----------------|--------------|
| Tier 0 | Cannot detect | Cannot detect |
| Tier 1 | Can detect | Cannot detect |
| Tier 2 | Can detect | Cannot detect |
| Tier 3 | Can detect | **Can detect** |

### Convoy Information

| Intel Tier | Information Revealed |
|------------|---------------------|
| **Tier 0** | Nothing |
| **Tier 1** | Convoy exists, target syndicate |
| **Tier 2** | + Officers aboard (Finance/Military/Both) |
| **Tier 3** | + Convoy ID, route, escort strength, masking status |

### Rogue Agent Identification

| Intel Tier | Identification Chance |
|------------|----------------------|
| Tier 1 | ~25% |
| Tier 2 | ~75% |
| Tier 3 | **100%** |

### Threat Alerts

| Intel Tier | Advance Warning |
|------------|-----------------|
| Tier 1 | None |
| Tier 2 | 1 cycle |
| Tier 3 | 2 cycles + target prediction |

## Information Asymmetry

Intelligence creates strategic advantage through information gaps:

| Intel Tier | Visibility |
|------------|------------|
| Tier 0 | See only cover stories, completely blind |
| Tier 1 | Uncover surface-level inconsistencies |
| Tier 2 | Understand attack methodology, basic truth |
| Tier 3 | Predict 3-5 moves ahead, full patterns |

## Counter-Intelligence

### Defensive Measures

| Measure | Effect |
|---------|--------|
| Route Masking | Requires Tier 3 intel to detect convoy |
| Damage Control | -30% Swan Event severity |
| DOTC Operatives | Attacks cannot be attributed |
| Secure Communications | Prevents intel leaks |

### Offensive Countermeasures

| Action | Purpose |
|--------|---------|
| Building infiltration | Reveal enemy infrastructure |
| Officer interrogation | Extract HQ/evac locations |
| Data breach | Access enemy intel database |
| Hack attack | Disrupt enemy intel operations |

## Reaching Tier 3

### 3-Player Syndicate (Moderate Focus)
- Each player: 1 INTL building (lvl 3), 10 citizens
- Score: (30×3) + (3×8) + (3×4) = **126 points → Tier 3**

### Solo Player (Heavy Specialization)
- 3 INTL buildings (avg lvl 3), 25 citizens
- Score: (25×3) + (3×8) + (3×4) = **111 points → Tier 3**

**Solo Tier 3 is possible but requires significant investment.**

---

## System Deep Dives

| Topic | What You'll Learn |
|-------|-------------------|
| [Detection System](/systems/intelligence/detection) | How detection works |
| [Investigations](/systems/intelligence/investigations) | Evidence and TFA authorization |
| [Infiltration](/systems/intelligence/infiltration) | Spy operations and counter-intel |
