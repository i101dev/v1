# Playbooks

Playbooks are automated response systems that trigger actions based on game events. They're used primarily by Protocol Syndicates (AI houses) but can inform strategic understanding.

## Concept

Playbooks define **if-this-then-that** logic:

```
TRIGGER EVENT → EVALUATE CONDITIONS → EXECUTE RESPONSE
```

When specific game events occur, playbooks automatically queue responses.

## How AI Houses Use Playbooks

Each house (BLU, GRN, RED, YLW) has playbooks that define their behavior:

### Example Triggers

| Trigger | House | Typical Response |
|---------|-------|------------------|
| MINE_PLACEMENT | BLU | Gather intel, contract RED for sabotage |
| MARKET_DEVIATION (+30%) | GRN | Execute arbitrage trades |
| CIVILIAN_DEATH | RED | Request tribunal kill-warrant |
| ATTACK_CARD | YLW | Contract RED for defense |

## Understanding House Behavior

Learning the trigger-response patterns lets you:

### Predict Actions
- BLU responds to resource opportunities with intel gathering
- GRN exploits market volatility
- RED punishes aggressors
- YLW contracts for protection

### Manipulate Responses
- Trigger BLU intel gathering, then ambush scouts
- Create market deviation to trigger GRN arbitrage
- Frame enemies to trigger RED retaliation
- Exploit YLW's defensive contracts

## Contract System

Playbooks often generate **contracts** between houses:

| Contract Type | Purpose |
|---------------|---------|
| Kill-warrant | Bounty on identified aggressor |
| Defense | Protection agreement |
| Sabotage | Attack enemy infrastructure |
| Intelligence | Information gathering |

### RED Contracts Create Inflation
When RED issues kill-warrants, they pay out CRD from Imperial reserves. This creates a **second CRD supply source** (beyond population growth), causing regional inflation.

## Strategic Implications

### Exploit Predictability
AI houses follow programmed patterns. Once you understand triggers:
- Avoid triggering unfavorable responses
- Deliberately trigger favorable responses
- Manipulate inter-house conflicts

### False Flags
- Attack civilian assets to trigger RED against your enemy
- Create evidence pointing to rivals
- Let AI houses do your dirty work

### Arbitrage Opportunities
- GRN's market responses create predictable trades
- Position ahead of expected arbitrage
- Profit from house-driven volatility

---

<details class="technical-deep-dive">
<summary>Technical Deep Dive</summary>

### Playbook Architecture

Playbooks consist of:
- **Triggers:** Event types that activate the playbook
- **Conditions:** Requirements that must be met
- **Actions:** Responses to execute when triggered

### State Machine

```
IDLE → TRIGGERED → EVALUATING → EXECUTING → COMPLETE
                       ↓
                   ABORTED (conditions not met)
```

### Backend Implementation

| Mechanic | Backend Location | Description |
|----------|-----------------|-------------|
| Playbook model | `protocol_syndicates/` | Trigger definitions, conditions |
| Trigger evaluation | `protocol_syndicates/` | Condition checking |
| Action execution | `protocol_syndicates/` | Response queuing |

</details>

---

**Related:** [The Four Houses](/getting-started/four-houses) — House personalities and behaviors
