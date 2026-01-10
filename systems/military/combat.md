# Combat & ROE

Combat resolves by comparing **combat strength** of attacker vs defender. Defender wins ties.

## Combat Strength

Combat strength is the sum of completed schools across all participating mercenaries:

```
Combat Strength = Sum of (mercenary.schools_completed) for all participants
```

Each completed school adds +1 to strength.

| Mercenary Example | Schools | Contribution |
|-------------------|---------|--------------|
| RIP only | 1 | +1 |
| RIP, EMT, CQB | 3 | +3 |
| Through SERE (7 schools) | 7 | +7 |
| Full GBQC (10 schools) | 10 | +10 |

## Victory Resolution

```
Attacker wins if: attacker_strength > defender_strength
Defender wins ties.
```

Simple and deterministic—no dice rolls, no RNG. Superior training wins.

## Casualty Formula

Casualties depend on the **differential** between attacker and defender strength:

```
differential = |attacker_strength - defender_strength|

loser_casualties = max(1, min(differential, loser_force_size))
winner_casualties = differential <= 2 ? 1 : 0
```

**Key rules:**
- Loser always takes at least 1 casualty
- Winner only takes casualties in close fights (differential ≤ 2)
- Crushing victories (differential > 2) are casualty-free for winner

### Casualty Examples

| ATK Strength | DEF Strength | Differential | Winner | Loser Casualties | Winner Casualties |
|--------------|--------------|--------------|--------|------------------|-------------------|
| 8 | 2 | 6 | Attacker | 2 (all DEF) | 0 |
| 5 | 4 | 1 | Attacker | 1 | 1 |
| 3 | 3 | 0 | Defender | 1 | 1 |
| 2 | 6 | 4 | Defender | 2 (all ATK) | 0 |

## Casualty Fate

Each casualty is randomly assigned a fate:

| Fate | Probability | Effect |
|------|-------------|--------|
| **KIA** | 50% | Status → DEAD (permanent loss) |
| **WOUNDED** | 50% | Status → WOUNDED (3-cycle recovery) |

### Wounded Recovery
- Recovery time: 3 cycles
- Cannot train or deploy during recovery
- After recovery: WOUNDED → FORT

::: tip MEDS Influence
Future implementation: MEDS distribution may accelerate wound recovery or prevent deaths.
:::

## Combat Contexts

### KDNP (Kidnapping)
- **Attacker:** KDNP card mercenaries
- **Defender:** Target convoy escorts
- **On Success:** Officers captured
- **Casualties:** Both sides based on combat result

### RSCU (Rescue)
- **Attacker:** RSCU card mercenaries
- **Defender:** Captor's citizen operatives (not mercenaries)
- **On Success:** Kidnapped officer rescued
- **Casualties:** Attacker only (citizens not tracked as combatants)

### Convoy Interception
- **Attacker:** HIJK card mercenaries
- **Defender:** Convoy escort mercenaries
- **On Success:** Cargo captured, officers potentially kidnapped
- **Casualties:** Both sides based on combat result

## Rules of Engagement (ROE)

Every operation generates a **Swan Event**. ROE determines legal exposure, not whether detection occurs.

### ROE Types

| ROE Level | Collateral Risk | Legal Exposure | Imperial Response |
|-----------|-----------------|----------------|-------------------|
| **Surgical** | Minimal | Low | Unlikely |
| **Standard** | Moderate | Medium | Possible |
| **Overkill** | High | High | Likely |

### DOTC Deniability
DOTC-trained mercenaries provide **operational deniability**:
- Overkill ROE operations don't trigger Imperial detection
- Enables high-collateral operations without legal consequences
- Requires DOTC qualification for ALL participating mercenaries

## Mercenary Status Flow

```
FORT ──[card crafted]──> ALLOCATED (locked to card)
  │
  ├──[card executed, survive]──> REST (1 cycle) ──> FORT
  │
  ├──[combat: KIA]──> DEAD (permanent)
  │
  └──[combat: WOUNDED]──> WOUNDED (3 cycles) ──> FORT
```

## Success Rate Modifiers

Operation success is affected by multiple factors:

### Bonus Modifiers
| Factor | Bonus |
|--------|-------|
| Military Tier 1 | +20% |
| Military Tier 2 | +35% |
| Military Tier 3 | +50% |
| Intel tier reconnaissance | Variable |
| Mercenary training quality | Variable |

### Penalty Modifiers
- Target security infrastructure
- Defensive preparations
- Environmental factors

### Damage Control (Military Tier 3)
Tier 3 unlocks **Damage Control Protocols**:
- Reduces Swan Event severity when operations fail
- Limits catastrophic event risk
- Prevents collateral damage from spawning rogues

---

<details class="technical-deep-dive">
<summary>Technical Deep Dive</summary>

### Backend Implementation

| Component | Location | Description |
|-----------|----------|-------------|
| resolveCombat() | `S_mercenary.ts` | Combat resolution |
| applyCasualties() | `S_mercenary.ts` | KIA/WOUNDED application |
| KDNP execution | `S_card.ts` | Merc vs merc combat |
| RSCU execution | `S_card.ts` | Attacker casualties only |
| Wound recovery | `S_cycle_mercenary.ts` | WOUNDED → FORT transition |

### Types

| Type | Location | Description |
|------|----------|-------------|
| CombatResult | `types.combat.ts` | Winner, strengths, casualties |
| CasualtyResult | `types.combat.ts` | merc_id + fate |

### Constants

| Constant | Value |
|----------|-------|
| WOUNDED_RECOVERY_CYCLES | 3 |

</details>

---

**Related:** [Operation Cards](/systems/military/cards) — What triggers combat
