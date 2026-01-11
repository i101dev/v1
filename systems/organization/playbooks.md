# Playbooks

Playbooks are **shopping lists of objectives** that appear when AI houses detect important game events. Any entity — human players or AI syndicates — can fill these objectives to earn credit and build relationships.

## Concept

When a trigger event fires, a playbook is created with objectives visible immediately:

```
TRIGGER EVENT → PLAYBOOK CREATED → OBJECTIVES OPEN FOR FILL
```

This creates a marketplace where entities compete to fill lucrative objectives.

## How Playbooks Work

Each house (BLU, GRN, RED, YLW) creates playbooks in response to specific triggers:

| Trigger                 | House | Playbook Contains                        |
| ----------------------- | ----- | ---------------------------------------- |
| MINE_PLACEMENT          | BLU   | Intel objectives, resource objectives    |
| MARKET_DEVIATION (+30%) | GRN   | Resource objectives, attack objectives   |
| CIVILIAN_DEATH          | RED   | Intel objectives, elimination objectives |
| ATTACK_CARD             | YLW   | Defense objectives, resource objectives  |

## Filling Objectives

See an objective you can complete? Hit the **Fill** button.

### Fill Process

1. Click **[Fill]** on any objective you can complete
2. System verifies you have the requirements
3. If verified: execution is immediate and atomic
4. You receive **credit** AND **respect** with that house

### Objective Types

| Type               | What You Provide                  | Requirements                     |
| ------------------ | --------------------------------- | -------------------------------- |
| **Provisions**     | Resources (ENGY, MINR, WATR)      | Must have resources in inventory |
| **Items**          | Crafted items (CHEM, ELEC, etc.)  | Must have items in inventory     |
| **Cards**          | Execute a specific card on target | Must have card available         |
| **Investigations** | Intel gathering                   | Must allocate INTL citizens      |

### First Come, First Served

Objectives are competitive. When an objective is filled, it's gone. Position yourself to capture high-value objectives before competitors.

## Respect System

Filling objectives earns **respect** with the issuing house. Respect is house-specific — helping BLU builds respect with BLU, not with RED.

### Respect Thresholds

| Threshold    | Value | Effect                                  |
| ------------ | ----- | --------------------------------------- |
| Neutral      | 0     | Default state                           |
| Known        | 100   | House acknowledges you                  |
| Trusted      | 500   | Access to private objectives            |
| Ally         | 1000  | Significant relationship benefits       |
| Inner Circle | 2500  | Maximum benefits, strategic partnership |

### Respect Unlocks by House

| House   | High Respect Gets You                             |
| ------- | ------------------------------------------------- |
| **BLU** | Trade partnerships, resource intel, market access |
| **GRN** | Raid immunity, joint operations, target intel     |
| **RED** | Defense priority, protection, reduced scrutiny    |
| **YLW** | Premium pricing, FOREX access, arbitrage intel    |

## CRD Expansion

When RED issues elimination or defense objectives, the payment **creates new CRD** rather than transferring existing currency. This is a second money supply source (beyond population growth), causing regional inflation.

Strategic implication: More RED objectives = more inflation = adjust your pricing.

## Strategic Implications

### Objective Racing

High-value objectives go fast. Strategies for capturing them:

-   Maintain inventory of common objective requirements
-   Monitor triggers to predict incoming playbooks
-   Position near likely objective targets
-   Specialize in objective types others can't fill

### Respect Farming

Build relationships strategically:

-   Focus on one or two houses for deep benefits
-   Or spread across all houses for balanced access
-   High respect with RED = protection from scrutiny
-   High respect with GRN = raid immunity

### Trigger Manipulation

You can deliberately cause triggers to create playbooks:

-   Build a MINE to trigger BLU's response
-   Attack civilians to trigger RED (and profit from elimination objectives)
-   Cause market swings to trigger GRN arbitrage playbooks
-   Play attack cards to trigger YLW defensive playbooks

### False Flags

Let AI houses do your dirty work:

-   Frame enemies for civilian attacks → RED eliminates them
-   Create evidence pointing to rivals
-   Profit from the chaos you create

---

<details class="technical-deep-dive">
<summary>Technical Deep Dive</summary>

### Playbook Architecture

Playbooks consist of:

-   **Trigger:** Event type that creates the playbook
-   **Objectives:** Array of fillable objectives (visible immediately)
-   **Status:** ACTIVE (has unfilled objectives) or COMPLETED

### Objective Structure

```
{
    type: PROVISIONS | ITEMS | CARDS | INVESTIGATIONS
    requirements: { resource_type, amount, item_type, etc. }
    credit_reward: number
    respect_reward: number
    is_crd_expansion: boolean
    status: OPEN | FILLED | EXPIRED
}
```

### Fill Verification

The fill process is atomic:

1. Check objective status is OPEN
2. Verify entity has required resources/items/card
3. For investigations, verify INTL citizens available
4. Execute in single transaction (no partial fills)
5. Award credit and respect

### Backend Implementation

| Mechanic          | Backend Location    | Description                        |
| ----------------- | ------------------- | ---------------------------------- |
| Playbook creation | `S_playbook.ts`     | Trigger → Objective generation     |
| Objective model   | `M_ps_objective.ts` | Objective state and fill tracking  |
| Fill service      | `S_objective.ts`    | Verification and execution         |
| Respect tracking  | `S_respect.ts`      | House-specific relationship values |

</details>

---

**Related:** [The Four Houses](/getting-started/four-houses) — House personalities and behaviors
