# Convoys

Convoys transport high-value assets (officers, cargo, tribute) between locations. They represent organized movement with escort protection, subject to detection and interception.

## Convoy Composition

| Element | Description | Required |
|---------|-------------|----------|
| **Cargo** | Officers, items, resources being transported | Yes |
| **Escorts** | Mercenaries providing security | Yes (min 1) |
| **Route** | Origin and destination tiles | Yes |

### Requirements
- **Origin tile must have a building** (any player)
- **Destination tile must have a building** (any player)
- **Minimum 1 mercenary escort** (any training level)

## Convoy Lifecycle

### Status Flow

| Status | Description |
|--------|-------------|
| **PREPARING** | Cargo loading, escorts being assigned |
| **IN_TRANSIT** | Traveling between origin and destination |
| **ARRIVED** | Reached destination, cargo unloaded |
| **PROCESSED** | Processed at destination (summit, etc.) |
| **INTERCEPTED** | Attacked and captured during transit |

### Timing
- **Launch at cycle N → arrival at cycle N+2** (2-cycle transit)
- Position logged each cycle along route
- Cannot modify convoy after launch

### Round-Trip Timeline

| Cycle | Outbound | Return |
|-------|----------|--------|
| 0 | PREPARING → IN_TRANSIT | — |
| 1 | IN_TRANSIT | — |
| 2 | ARRIVED | — |
| 2.5 | PROCESSED | PREPARING |
| 3 | — | IN_TRANSIT |
| 4 | — | IN_TRANSIT |
| 5 | — | ARRIVED @ HQ |

**Total round trip: 6 cycles**

## Escort Mechanics

### Collaborative Defense
- Multiple players can contribute mercenaries to one convoy
- Assignments lock when convoy launches
- Each contributor's mercenaries operate as unified force

### Escort Power Calculation
```
escort_strength = sum(mercenary.schools_completed) for all escorts
```

| Mercenary | Schools | Contribution |
|-----------|---------|--------------|
| Merc A (RIP) | 1 | +1 |
| Merc B (RIP, EMT, CQB) | 3 | +3 |
| Merc C (through SERE) | 7 | +7 |
| **Total** | | **11** |

## Route Masking

### Concept
SFAS-trained mercenaries specialize in evasion and counter-surveillance.

### Activation Rule
**If ALL escorts are SFAS+ trained → route is masked**

- Single non-SFAS mercenary compromises masking (weakest link)
- Calculated automatically at escort assignment
- Cannot be manually toggled

### Detection Thresholds

| Route Status | Intel Required to Detect |
|--------------|-------------------------|
| Normal (unmasked) | Tier 1+ |
| **Masked** | Tier 3 only |

### Strategic Trade-off
- **Offense:** Invest in SFAS training → hide your convoys
- **Defense:** Invest in INTL buildings → pierce enemy masking

## Convoy Detection

### By Intel Tier

| Intel Tier | Detection Capability | Information Revealed |
|------------|---------------------|---------------------|
| **Tier 0** | None | Cannot detect enemy convoys |
| **Tier 1** | Basic | Syndicate ID, "Convoy detected" |
| **Tier 2** | Enhanced | + Officer types aboard |
| **Tier 3** | Full | + Convoy ID, route, escort strength, masking status |

### Route Masking Interaction
- Masked convoys are **invisible** to Tier 0-2 intel
- Only Tier 3 can detect masked convoys
- Own convoys always have full visibility

## Combat Resolution

When a convoy is intercepted:

### Power Comparison
```
defender_strength = sum(escort.schools_completed)
attacker_strength = sum(attacker_merc.schools_completed)
```

### Outcomes

| Result | Consequence |
|--------|-------------|
| **Defender wins** | Convoy continues to destination |
| **Attacker wins** | Convoy intercepted |

### Interception Consequences
1. **Cargo captured** — Items transfer to attacker
2. **Officer fate** — Potential kidnapping (see KDNP)
3. **Escort casualties** — Based on combat ratio

## Convoy Types

### Summit Convoy
- **Cargo:** Officers + EXOT tribute
- **Route:** HQ ↔ Summit venue
- **Defense modifier:** 1.75x (single officer) or 1.0x (both)

### Trade Convoy
- **Cargo:** Items, citizens, mercenaries
- **Route:** Player-controlled tiles (cross-syndicate allowed)
- **Defense modifier:** 1.0x (standard)

### Evacuation Convoy
- **Cargo:** Citizens fleeing collapsed sector
- **Route:** Collapsed fortress → Evacuation tile
- **Defense modifier:** 0.5x (disorganized retreat)

::: warning Evacuation Vulnerability
Evacuation convoys have **half** the defensive power—easy targets for opportunistic attackers.
:::

---

<details class="technical-deep-dive">
<summary>Technical Deep Dive</summary>

### Backend Implementation

| Mechanic | Backend Location | Description |
|----------|-----------------|-------------|
| Convoy model | `_GAME_v2/convoy/M_convoy.ts` | Status, cargo, escorts |
| Convoy service | `_GAME_v2/convoy/S_convoy.ts` | Creation, launch, arrival |
| Escort assignment | `_GAME_v2/convoy/S_convoy.ts` | Power calculation |
| Route masking | `_GAME_v2/convoy/S_convoy.ts` | SFAS check |
| Combat resolution | `_GAME_v2/convoy/S_convoy.ts` | Power comparison |
| Detection | `_GAME_v2/convoy/S_convoy.ts` | Intel tier filtering |

### Contracts

| Contract | Purpose |
|----------|---------|
| `CONVOY_CREATE` | Create convoy with cargo/destination |
| `CONVOY_GET` | Get details (filtered by intel tier) |
| `CONVOY_BOARD_OFFICER` | Add officer to cargo |
| `CONVOY_ASSIGN_ESCORT` | Assign escort mercenary |
| `CONVOY_LAUNCH` | Launch convoy (locks composition) |
| `CONVOY_PROCESS_ARRIVAL` | Process arrival |
| `CONVOY_LIST` | List own + detected convoys |

</details>

---

**Related:** [Operation Cards](/systems/military/cards) — HIJK cards target convoys
