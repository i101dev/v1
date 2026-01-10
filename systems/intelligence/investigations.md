# Investigations

Investigations reveal information about Swan Events and hostile actions. Your intelligence tier determines what evidence you can access and how accurately you can identify perpetrators.

## How Investigations Work

1. Swan Event occurs (attack, disaster, etc.)
2. Player initiates investigation
3. **Results delivered immediately** (no processing time)
4. Information revealed depends on intel tier

## Evidence System

Every Swan Event generates a complete evidence catalog with three tiers:

| Evidence Tier | Access Requirement | Content Type |
|---------------|-------------------|--------------|
| Tier 1 | Intelligence Tier 1+ | Basic inconsistencies |
| Tier 2 | Intelligence Tier 2+ | Attack methodology, forensics |
| Tier 3 | Intelligence Tier 3 | Perpetrator identification, forecasting |

## Evidence by Tier

### Tier 1 Evidence (Basic Inconsistencies)

Surface-level anomalies suggesting the cover story is incomplete:

- "Structural damage patterns inconsistent with gas explosion"
- "Timeline discrepancies between official report and eyewitness accounts"
- "Blast radius exceeds parameters for accidental detonation"

### Tier 2 Evidence (Attack Methodology)

Forensic analysis revealing how the attack was conducted:

- "Explosive residue: Military-grade C4 detected"
- "Toxicological analysis identifies rare neurotoxin not commercially available"
- "Bullet casings: 7.62x39mm, military issue"
- "Entry method: Maintenance access with professional lockpicking"
- "Shot placement indicates elite sniper training (200m+ headshot)"

### Tier 3 Evidence (Perpetrator Identification)

Pattern analysis and perpetrator identification:

- "Deployment pattern consistent with DEMO card tactics"
- "Perpetrator identified: Rogue Agent codename 'Phantom'"
- "Perpetrator identified: Player [user_alias] of Syndicate [name]"
- "Conclusive evidence: Genuine structural failure, no hostile actor"
- "Attack frequency analysis: Rogue attacks every 4 cycles"
- "Next attack predicted: Cycle 147, Tile 234"

## Investigation Outcomes

| Scenario | Result |
|----------|--------|
| Genuine accident | "Conclusive evidence of genuine accident/environmental disaster" |
| Rogue agent | Evidence reveals rogue identity (25%/75%/100% by tier) |
| Player attack (non-DOTC) | "Syndicate X identified via witness testimony" → Added to Hit List |
| Player attack (all-DOTC) | "Cause unknown - Inconclusive evidence" |

## Terminal Force Authorization (TFA)

Successful investigation grants legal authorization for retaliation:

| Identification | TFA Type | Scope |
|----------------|----------|-------|
| Rogue agent | HRA (Hostile Rogue Agent) | Unlimited duration, target-specific |
| Player syndicate | IHL (Imperial Hit List) | 7 cycles, victim-only retaliation |

::: tip Legal Framework
TFA authorization enables military action without Imperial sanction. Operating without TFA risks becoming a target yourself.
:::

## Detritus Evidence

Physical items left at attack sites provide forensic value:

| Detritus Type | Evidence Value |
|---------------|----------------|
| Spent ordnance | Weapon signatures, manufacturer ID |
| Equipment fragments | Manufacturing signatures |
| Biological samples | DNA evidence, chemical residue |
| Digital artifacts | Cyber attack signatures |

**Players who recover detritus gain:**
- Raw materials for crafting/salvage
- Forensic evidence for investigations
- Tradeable intelligence assets

## DOTC Deniability

**All-DOTC attacks cannot be attributed** regardless of victim's intel tier.

If every operative in an attack is DOTC-trained:
- Investigation returns "Inconclusive"
- No perpetrator identification possible
- No Hit List addition
- Perfect operational security

This is why DOTC training is valuable even beyond combat bonuses.

---

<details class="technical-deep-dive">
<summary>Technical Deep Dive</summary>

### Backend Implementation

| Mechanic | Backend Location | Description |
|----------|-----------------|-------------|
| Investigation processing | `_GAME_v2/investigation/S_investigation.ts` | Evidence discovery, TFA issuance |
| Evidence model | `_GAME_v2/investigation/M_investigation.ts` | Evidence tiers, records |
| Evidence generation | `_GAME_v2/swan/S_swan.ts` | Catalog created with event |

### Contracts

| Contract | Purpose |
|----------|---------|
| `INTEL_INVESTIGATE` | Initiate investigation of event |
| `EVIDENCE_GET` | Get evidence catalog for Swan Event |
| `EVIDENCE_TIER_ACCESS` | Check evidence tier access |

</details>

---

**Related:** [Infiltration](/systems/intelligence/infiltration) — Gathering intel before attacks
