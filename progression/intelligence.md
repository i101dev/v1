# Intelligence Tier

Unlike Finance and Military tiers, Intelligence Tier is derived from **infrastructure investment**, not summit attendance.

## Benefits by Tier

| Intel Tier | Convoy Detection | Masked Convoys | Rogue ID | Threat Warning |
|------------|-----------------|----------------|----------|----------------|
| Tier 0 | None | None | 0% | None |
| Tier 1 | Basic | None | ~25% | None |
| Tier 2 | Enhanced | None | ~75% | 1 cycle |
| Tier 3 | Full | **Can detect** | 100% | 2 cycles |

## How Intel Tier is Calculated

### Step 1: Aggregate Infrastructure

Across all syndicate members, count:
- Total INTL citizens
- Total INTL buildings
- Average INTL building level

### Step 2: Calculate Score

```
base_intel_score =
    (total_intl_citizens × 3) +
    (total_intl_buildings × 8) +
    (avg_building_level × 4)
```

### Step 3: Determine Base Tier

| Score Range | Base Tier |
|-------------|-----------|
| No INTL infrastructure | Tier 0 |
| 0-34 | Tier 1 |
| 35-74 | Tier 2 |
| 75+ | Tier 3 |

### Step 4: Apply Military Bonus

| Military Tier | Intel Bonus |
|---------------|-------------|
| Tier 0-2 | +0 |
| Tier 3 | +1 |

### Step 5: Final Calculation

```
effective_tier = min(3, base_tier + military_bonus)
```

## Reaching Tier 3

### 3-Player Syndicate (Moderate Focus)
- Each player: 1 INTL building (lvl 3), 10 citizens
- Score: (30×3) + (3×8) + (3×4) = **126 → Tier 3**

### Solo Player (Heavy Specialization)
- 3 INTL buildings (avg lvl 3), 25 citizens
- Score: (25×3) + (3×8) + (3×4) = **111 → Tier 3**

### With Military Tier 3 Boost
- Base Tier 2 + Military Tier 3 = **Effective Tier 3**

## Strategic Value

### Information Superiority

**Tier 3 provides:**
- Detection of **route-masked convoys** (invisible to others)
- **100% rogue identification** (no uncertainty)
- **2-cycle advance warning** of attacks
- **Target prediction** for rogue agents
- Full evidence access for investigations

### The Invisible Advantage

While Finance and Military tiers provide direct bonuses, Intelligence Tier provides **information asymmetry**:

- You see attacks before they happen
- You identify perpetrators others cannot
- You detect convoys others miss
- **You operate with knowledge your enemies lack**

## Investment Strategy

### Infrastructure Path
- Build INTL buildings
- Assign INTL citizens
- Upgrade building levels

### Military Path
- Achieve Military Tier 3 for +1 intel bonus
- Useful if military investment already planned

### Hybrid Approach
- Moderate INTL investment (Base Tier 2)
- Military Tier 3 (+1 bonus)
- **Effective Tier 3** with balanced capabilities

---

**Related:** [Detection System](/systems/intelligence/detection) — What each tier reveals
