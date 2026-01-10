# Mercenary Training

Mercenaries are trained through a **linear 10-stage pipeline** at military bases. Each school provides skill bonuses and unlocks new capabilities.

## Training Pipeline

```
RIP → EMT → CQB → MOUT → SNPR → HALO → SERE → SFAS → DOTC → GBQC
 ↓     ↓     ↓      ↓      ↓      ↓      ↓      ↓      ↓      ↓
 2     2     2      2      3      2      2      3      4      4  cycles
```

**Total: 26 cycles at Military Tier 0**

## Foundation Training (4 cycles)

### RIP (Ranger Indoctrination Program)
| Property | Value |
|----------|-------|
| Position | 1st in pipeline |
| Duration | 2 cycles |
| Purpose | Basic combat readiness |

First qualification. All mercenaries start here.

### EMT (Emergency Medical Technician)
| Property | Value |
|----------|-------|
| Position | 2nd in pipeline |
| Duration | 2 cycles |
| Purpose | Field medical training |

Casualty care and field medicine.

## Combat Training (7 cycles)

### CQB (Close Quarters Battle)
| Property | Value |
|----------|-------|
| Position | 3rd in pipeline |
| Duration | 2 cycles |
| Defensive Bonus | +15% per mercenary |
| Purpose | Urban combat qualification |

### MOUT (Military Operations in Urban Terrain)
| Property | Value |
|----------|-------|
| Position | 4th in pipeline |
| Duration | 2 cycles |
| Defensive Bonus | +20% per mercenary |
| Purpose | Advanced urban warfare |

### SNPR (Sniper School)
| Property | Value |
|----------|-------|
| Position | 5th in pipeline |
| Duration | 3 cycles |
| Defensive Bonus | +25% per mercenary |
| Purpose | Precision marksmanship |

## Deployment Training (4 cycles)

### HALO (High Altitude Low Opening)
| Property | Value |
|----------|-------|
| Position | 6th in pipeline |
| Duration | 2 cycles |
| Defensive Bonus | +30% per mercenary |
| Purpose | Airborne insertion |

### SERE (Survival, Evasion, Resistance, Escape)
| Property | Value |
|----------|-------|
| Position | 7th in pipeline |
| Duration | 2 cycles |
| Defensive Bonus | +35% per mercenary |
| **Required For** | Summit escort, Rapid Response QRF, HUNT operations |

**SERE is a critical milestone** — unlocks summit convoy escort and HUNT card operations.

## Elite Training (11 cycles)

### SFAS (Special Forces Assessment & Selection)
| Property | Value |
|----------|-------|
| Position | 8th in pipeline |
| Duration | 3 cycles |
| Defensive Bonus | +50% per mercenary |
| **Required For** | Route Masking, Heroic Rescue, Elite QRF |

**Route Masking:** If ALL convoy escorts are SFAS+, the convoy is invisible to Tier 0-2 intel.

### DOTC (Delta Operator Training Course)
| Property | Value |
|----------|-------|
| Position | 9th in pipeline |
| Duration | 4 cycles |
| Defensive Bonus | +75% per mercenary |
| **Required For** | Overkill ROE operations |
| **Special Ability** | Provides deniability for all operation types |

**Deniability:** DOTC operators can execute operations without Imperial detection.

### GBQC (Green Beret Qualification Course)
| Property | Value |
|----------|-------|
| Position | 10th (final) |
| Duration | 4 cycles |
| Defensive Bonus | +100% per mercenary |
| Purpose | Maximum operational effectiveness |

GBQC is the ultimate qualification—**+100% combat effectiveness**.

## Military Tier Impact

Higher Military Tiers reduce training time:

| Military Tier | Time Reduction | Pipeline Duration |
|---------------|----------------|-------------------|
| Tier 0 | 0% | 26 cycles |
| Tier 1 | 15% | ~22 cycles |
| Tier 2 | 25% | ~20 cycles |
| Tier 3 | 40% | ~16 cycles |

**Formula:** Training Time = Base Duration × (1 - Time Reduction)

## Strategic Milestones

| Milestone | Cycles (Tier 0) | Capability Unlocked |
|-----------|-----------------|---------------------|
| SERE | 14 cycles | Summit escort, HUNT operations |
| SFAS | 17 cycles | Route Masking, Elite QRF |
| DOTC | 21 cycles | Deniable operations |
| GBQC | 26 cycles | Maximum effectiveness |

## Mercenary Status Lifecycle

Mercenaries transition through statuses based on activity:

| Status | Description | Can Train? | Can Deploy? |
|--------|-------------|------------|-------------|
| **FORT** | At garrison, available | Yes | Yes |
| **TRAINING** | Undergoing school training | No | No |
| **ALLOCATED** | Locked to operation card | No | No |
| **REST** | Recovering after operation | No | No |
| **WOUNDED** | Injured, requires recovery | No | No |
| **DEAD** | Killed in action (terminal) | No | No |

### Status Transitions

**Training Flow:**
```
FORT → TRAINING (at MILB) → FORT (training complete)
```

**Operation Flow:**
```
FORT → ALLOCATED (card craft) → REST (survive) → FORT (next cycle)
                              → DEAD (killed)
```

**Wounded Recovery:**
```
WOUNDED → (3 cycles) → FORT
```

---

<details class="technical-deep-dive">
<summary>Technical Deep Dive</summary>

### Backend Implementation

| Mechanic | Backend Location | Description |
|----------|-----------------|-------------|
| Mercenary model | `_GAME_v2/mercenary/M_mercenary.ts` | Training tiers, status |
| Training service | `_GAME_v2/mercenary/S_mercenary.ts` | Progression, duration calc |
| Training controller | `_GAME_v2/mercenary/C_mercenary.ts` | HTTP endpoints |

### Contracts

| Contract | Purpose |
|----------|---------|
| `MERC_TRAIN` | Start training at next school |
| `MERC_TRAIN_STATUS` | Get training progress |
| `MERC_COMPLETE_TRAIN` | Complete training at school |

### Syntax Convention
The `+` notation (e.g., `SERE+`, `SFAS+`) means "this school or higher" in requirements.

</details>

---

**Related:** [Combat & ROE](/systems/military/combat) — How trained mercenaries fight
