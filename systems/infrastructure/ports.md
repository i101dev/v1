# Ports & Logistics

PORT buildings are **universal transaction infrastructure** required for ALL buy/sell operations. Without a PORT, you cannot participate in any market.

## Core Functions

### Local Market Access
Required for all market transactions:
- Resource market (ENGY, MINR, WATR)
- Commodity purchases
- Item trading
- Dark market access

### Inter-Regional Trade
Enable FOREX connections to foreign markets:
- Each PORT allows connection to one foreign region per resource type
- ENGY, MINR, WATR can connect to different regions simultaneously
- Connection switching has **5-cycle cooldown** per resource type

## Infrastructure Requirements

| Building | Required For |
|----------|--------------|
| **PORT** | Physical movement of goods |
| **VALT** | CRD transaction processing |

Both are required for any market transaction.

**Without PORT:** Cannot buy or sell anything
**Without VALT:** Cannot process payments

## FOREX Integration

Ports enable inter-regional trade:

- Exchange rates calculated via Regional Lite Index
- Cross-region trades account for currency strength
- All trades processed through ITSB (Imperial Trade Settlement Bank)
- Dynamic pricing based on regional economics

## QOL Impact

Damage to PORTs **reduces regional Quality of Life**:

```
Each destroyed PORT = -2.0 QOL penalty
50% damage = -1.0 QOL penalty (scales linearly)
```

### Example QOL Impact

**Scenario:** Region has 3 PORTs, base QOL = 6.0

| PORT | HP Status | QOL Penalty |
|------|-----------|-------------|
| #1 | 100/100 | 0 |
| #2 | 50/100 | -1.0 |
| #3 | 0/100 | -2.0 |

**Effective QOL:** 6.0 - 1.0 - 2.0 = **3.0**

Since QOL multiplies combat effectiveness, damaged ports weaken your military.

## Strategic Value

### Economic Infrastructure
- Essential for foreign resource access
- Enables price arbitrage between regions
- Reduces dependency on domestic markets
- Facilitates multi-region trade networks

### High-Value Target
- Destroying enemy PORTs disrupts trade
- Creates QOL degradation (military weakness)
- Forces reliance on domestic markets only
- Expensive and time-consuming to repair

## Vulnerability

### Disruption Scenarios
- Direct military attack
- Sabotage operations
- Imperial sanctions
- Siege warfare preventing repairs

### Recovery
- Requires resource expenditure (ENGY, MINR, WATR)
- Multi-cycle repair time based on damage
- QOL penalty persists until repairs complete
- Trade connections remain but QOL suffers

## Defensive Priorities

- **Redundancy** — Multiple PORTs reduce single-point failure
- **Rapid repair** — Quick response minimizes QOL degradation
- **Guard forces** — Station mercenaries at PORT locations
- **Detection** — Intel to identify sabotage attempts early

---

<details class="technical-deep-dive">
<summary>Technical Deep Dive</summary>

### Backend Implementation

| Mechanic | Backend Location | Description |
|----------|-----------------|-------------|
| PORT model | `_GAME_v2/building/M_building.ts` | PORT type, HPS |
| PORT service | `_GAME_v2/port_connection/S_port_connection.ts` | Connections, damage |
| QOL calculation | `_GAME_v2/region/S_region.ts` | Damage penalty integration |

### HTTP Routes

| Route | Purpose |
|-------|---------|
| `PORT_CONNECTION_LIST` | List inter-regional connections |
| `PORT_CONNECTION_SET` | Configure trade routes |

</details>

---

**Related:** [FOREX Trading](/systems/economy/forex) — How inter-regional trade works
