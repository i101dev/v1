# Detection System

Detection determines what you can see about enemy movements and activities. Higher intelligence tiers reveal more information and provide advance warning.

## Convoy Detection

### Detection Capability by Tier

| Intel Tier | Normal Convoys | Route Masked Convoys |
|------------|----------------|---------------------|
| Tier 0 | Cannot detect | Cannot detect |
| Tier 1 | Can detect | Cannot detect |
| Tier 2 | Can detect | Cannot detect |
| Tier 3 | Can detect | **Can detect** |

Route-masked convoys (all SFAS+ escorts) are invisible to Tier 0-2 intel.

### Information Revealed by Tier

| Intel Tier | What You Learn |
|------------|----------------|
| **Tier 0** | Nothing—completely blind |
| **Tier 1** | "Convoy detected in transit" + syndicate ID |
| **Tier 2** | + Officer types aboard (Finance/Military/Both) |
| **Tier 3** | + Convoy ID, origin/destination, escort strength, masking status |

### Own Assets
You always have full visibility of your own convoys regardless of intel tier.

## Rogue Agent Detection

### Identification Chance

| Intel Tier | Identification Chance |
|------------|----------------------|
| Tier 1 | ~25% |
| Tier 2 | ~75% |
| Tier 3 | 100% |

At Tier 3, you always identify rogue agents threatening your territory.

### Threat Alerts

| Intel Tier | Advance Warning | Details |
|------------|-----------------|---------|
| Tier 1 | None | No warning |
| Tier 2 | 1 cycle | "Threat detected" |
| Tier 3 | 2 cycles | + Predicted target tile |

**Tier 3 target prediction:** Intelligence can predict which tile a rogue agent will attack next, enabling preemptive defense.

## Player Attack Attribution

When investigating attacks:

| Attacker Configuration | Attribution Result |
|-----------------------|-------------------|
| Non-DOTC operatives | Syndicate identified, added to Imperial Hit List |
| All-DOTC operatives | "Cause unknown - Inconclusive evidence" |

**DOTC operators provide operational deniability.** All-DOTC attacks cannot be attributed regardless of the victim's intel tier.

## Intelligence Tier Calculation

### Step 1: Aggregate Infrastructure

Across all syndicate members, sum:
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

**Zero infrastructure check:** No INTL buildings AND no INTL citizens → Tier 0

Otherwise:
| Score Range | Base Tier |
|-------------|-----------|
| 0-34 | Tier 1 |
| 35-74 | Tier 2 |
| 75+ | Tier 3 |

### Step 4: Apply Military Bonus

| Military Tier | Intelligence Bonus |
|---------------|-------------------|
| Tier 0-2 | +0 |
| Tier 3 | +1 |

### Step 5: Calculate Effective Tier

```
effective_tier = min(3, base_tier + military_bonus)
```

## Calculation Examples

### 3-Player Syndicate (Moderate Intel Focus)
- Each player: 1 INTL building (lvl 3), 10 citizens
- Total: 3 buildings, 30 citizens, avg lvl 3
- Score: (30×3) + (3×8) + (3×4) = 90 + 24 + 12 = **126**
- **Base Tier 3** (no military bonus needed)

### 3-Player Syndicate (Minimal Intel)
- Each player: 1 INTL building (lvl 1), 3 citizens
- Total: 3 buildings, 9 citizens, avg lvl 1
- Score: (9×3) + (3×8) + (1×4) = 27 + 24 + 4 = **55**
- **Base Tier 2**
- With Military Tier 3: **Effective Tier 3** (2 + 1)

### Solo Player (Heavy Specialization)
- 3 INTL buildings (avg lvl 3), 25 total citizens
- Score: (25×3) + (3×8) + (3×4) = 75 + 24 + 12 = **111**
- **Base Tier 3** (possible but requires significant investment)

---

<details class="technical-deep-dive">
<summary>Technical Deep Dive</summary>

### Backend Implementation

| Mechanic | Backend Location | Description |
|----------|-----------------|-------------|
| Intel tier calculation | `_GAME_v2/syndicate/S_syndicate.ts` | Aggregate INTL infrastructure |
| Convoy detection | `_GAME_v2/convoy/S_convoy.ts` | Tier-based visibility filtering |
| Threat alerts | `_GAME_v2/swan/S_swan.ts` | Advance warning calculation |
| Target prediction | `_GAME_v2/swan/S_swan.ts` | Tier 3 rogue target prediction |

### Contracts

| Contract | Purpose |
|----------|---------|
| `INTEL_TIER_GET` | Get syndicate's effective intel tier |
| `INTEL_DETECT_TRANSIT` | Detect convoys based on tier |
| `INTEL_THREAT_ALERTS` | Get current threat alerts |

</details>

---

**Related:** [Investigations](/systems/intelligence/investigations) — Using intel to identify attackers
