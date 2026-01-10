# Operation Cards

Operations execute through **consumable cards**. Cards are created by assigning citizens, mercenaries, and items through a crafting protocol. Once executed, the card is destroyed.

## Card Properties

| Property | Description |
|----------|-------------|
| **Consumable** | Single use—destroyed on execution |
| **ROE** | Rules of Engagement inherent to card type |
| **Target Type** | Buildings, citizens, territory, or convoys |
| **Complexity** | Determines base success rate |

## Card Types

### Combat Operations

| Card | Code | Target | Purpose | Training Required |
|------|------|--------|---------|-------------------|
| **Hunt** | HUNT | Wild tiles | Acquire EXOT | SERE+ |
| **Raid** | RAID | Enemy assets | Destroy/capture | CQB+ |
| **Hijack** | HIJK | Convoys | Intercept shipments | CQB+ |
| **Kidnap** | KDNP | Officers | Capture personnel | CQB+ |
| **Rescue** | RSCU | Captured assets | Free hostages | CQB+ |
| **Predator** | PRED | Various | Drone strikes | Variable |

### Covert Operations

| Operation | Target | Effect |
|-----------|--------|--------|
| **Sabotage** | Mines, factories, labs | Disrupts production, destroys IP |
| **Assassination** | High-value citizens | Removes key personnel |
| **Data Breach** | Intel facilities | Compromises databases |
| **Supply Contamination** | Resource storage | Destroys stockpiles |

## Resource Lifecycle

When a card is crafted, all resources are **allocated** (locked). Upon execution, resources follow different paths:

### Consumable (Destroyed After Use)

| Resource Type | Examples | Lifecycle |
|---------------|----------|-----------|
| Basic Items | CHEM, ELEC, MACH, AERO, BIOT, ROBO | ALLOCATED → CONSUMED |
| Special Items | NARC, WEAP, EXOT | ALLOCATED → CONSUMED |
| Citizens | All types assigned to cards | ALLOCATED → FREE (released) |

### Reusable (Multi-Use)

| Resource Type | Examples | Lifecycle | Recovery |
|---------------|----------|-----------|----------|
| Military Equipment | PRED, DROP, HELC | ALLOCATED → DEPLOYED → MAINTENANCE → AVAILABLE | 2 cycles |
| Mercenaries | All types | ALLOCATED → REST → FORT | 1 cycle |
| Mercenaries (KIA) | Killed in combat | ALLOCATED → DEAD | Permanent loss |

## Equipment Status Flow

### Military Equipment (PRED, DROP, HELC)
```
Card Craft:    AVAILABLE → ALLOCATED (locked)
Card Execute:  ALLOCATED → DEPLOYED (in use)
Cycle N+1:     DEPLOYED → MAINTENANCE
Cycle N+2:     MAINTENANCE → AVAILABLE
```
**Total cooldown: 2 cycles**

### Mercenaries
```
Card Craft:    FORT → ALLOCATED (locked)
Card Execute:  ALLOCATED → REST (survive) or DEAD (killed)
Cycle N+1:     REST → FORT
```
**Total cooldown: 1 cycle (if survived)**

### Consumable Items
```
Card Craft:    AVAILABLE → ALLOCATED (locked)
Card Execute:  ALLOCATED → CONSUMED (destroyed)
```
**No recovery—permanently lost**

## Equipment Requirements

### Covert Operations

| Operation | Equipment Needed |
|-----------|------------------|
| Sabotage | Machinery + chemicals |
| Assassination | Weapons + poisons |
| Data Breach | Electronics + hacking tools |
| Supply Contamination | Chemicals + containers |

## Success Rate

### Base Factors
- Operation type complexity
- Target security level

### Bonus Modifiers

| Factor | Bonus |
|--------|-------|
| Military Tier 1 | +20% |
| Military Tier 2 | +35% |
| Military Tier 3 | +50% |
| Intel tier reconnaissance | Variable |
| Mercenary training quality | Variable |
| Operative skill levels | Variable |

### Penalty Modifiers
- Target security infrastructure

## Swan Events

**Every operation creates a Swan Event.**

ROE determines:
- Detection likelihood by other syndicates
- Legal exposure to Imperial authorities
- Potential for collateral damage

ROE does NOT determine whether an event occurs—all operations generate events.

## Damage Control (Military Tier 3)

Tier 3 syndicates unlock **Damage Control Protocols**:
- Reduces Swan Event severity when operations fail
- Limits catastrophic event risk from covert action
- Prevents collateral damage from spawning rogues

---

<details class="technical-deep-dive">
<summary>Technical Deep Dive</summary>

### Backend Implementation

| Mechanic | Backend Location | Description |
|----------|-----------------|-------------|
| Card crafting | `_GAME_v2/card/S_card.ts` | Card creation protocol |
| Card execution | `_GAME_v2/card/S_card.ts` | Operation execution |
| Success calculation | `_GAME_v2/card/S_card.ts` | Success rate with modifiers |

### Contracts

| Contract | Purpose |
|----------|---------|
| `CARD_CRAFT` | Create operation card |
| `CARD_EXECUTE` | Execute operation card |
| `CARD_LIST` | List available cards |

</details>

---

**Related:** [Convoys](/systems/military/convoys) — Transport targets for HIJK operations
