# Syndicate Management

Syndicates are the core organizational unit. This page covers membership, security, and governance.

## Formation

### Requirements
- Unique syndicate identifier
- Access code (for secure joining)
- HQ tile location (must have MILB or FORT building)
- Separate evacuation location (BKST, JSOC, INTL, MILB, or FORT)
- HQ and evac **cannot** be the same tile
- Both must be within controlled sectors

### On Creation
- **Finance Officer** spawns at HQ
- **Military Officer** spawns at HQ
- Creator receives admin privileges

## Membership Security

### Dual-Authentication
New members require two codes:
1. **Access code** — Syndicate-wide identifier
2. **Referral code** — Individual member's unique token

Cannot join by access code alone. This prevents hostile infiltration.

### Referral Tracking
- Recruiter-recruit relationship permanently recorded
- Creates traceable lineages and accountability
- Recruiters responsible for their recruits' behavior
- Enables counterintelligence analysis

## Excommunication

The creator can ban any member, triggering **recursive purge**:

1. Target player added to permanent `excommunications` array
2. System recursively purges everyone that player recruited
3. And everyone those recruits recruited (cascades down entire branch)
4. **Cannot rejoin** even with valid referral code

**Strategic implications:**
- Recruiting wrong person loses entire organizational branches
- Creates powerful vetting incentives
- Recruiters suffer consequences for bad vouching

## Headquarters

### HQ Location
- Geographic anchor for syndicate
- Where officers physically reside
- Where new recruits report
- Where officers return after summits
- Where replacement officers spawn

**Most heavily guarded secret** — Compromise exposes leadership to targeted attacks.

### Evacuation Location
- Mandatory backup if HQ is compromised
- Cannot share tile with HQ
- Must be controlled by a syndicate member
- Pre-designated fallback position

**Also heavily guarded** — Intelligence can reveal evac location through infiltration or interrogation.

### HQ Compromise
If an excommunicated player controls the HQ tile:
- Emergency evacuation triggers
- All officers relocate to evac location
- Prevents leadership decapitation through defection

## Intelligence Vulnerability

Both HQ and evac locations vulnerable to:
- Intelligence agency infiltration
- Officer interrogation after capture
- Insider leaks from excommunicated members

Protecting these locations is critical.

## Leadership & Governance

### Creator Powers
- Excommunicate members (recursive purge)
- Designate successor
- Transfer creatorship voluntarily
- Set strategic direction
- Manage referral tree

### Succession
- **Designated successor** inherits creatorship if founder leaves
- Voluntary transfer possible at any time
- No disruption during transitions

---

<details class="technical-deep-dive">
<summary>Technical Deep Dive</summary>

### Backend Implementation

| Mechanic | Backend Location | Description |
|----------|-----------------|-------------|
| Syndicate model | `_GAME_v2/syndicate/M_syndicate.ts` | Membership arrays, HQ/evac tiles |
| Syndicate service | `_GAME_v2/syndicate/S_syndicate.ts` | Creation, membership, excommunication |
| Referral system | `_GAME_v2/syndicate/S_syndicate.ts` | direct_referrals array, code generation |
| Excommunication | `_GAME_v2/syndicate/S_syndicate.ts` | Recursive purge, excommunications array |

</details>

---

**Related:** [Officers](/systems/organization/officers) — Finance and Military officer roles
