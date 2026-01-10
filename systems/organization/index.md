# Organization Overview

Syndicates are the core organizational unit. All players must belong to a syndicate to access game mechanics. Even "solo players" run their own one-person syndicate.

## Syndicate Structure

Every syndicate has:

| Element | Purpose |
|---------|---------|
| **Members** | Players who belong to the syndicate |
| **Finance Officer** | Manages economic operations |
| **Military Officer** | Commands military operations |
| **HQ Location** | Geographic anchor, officer residence |
| **Evacuation Point** | Emergency fallback location |

## Membership

### Creation Requirements
- Unique syndicate identifier
- Access code for secure joining
- HQ tile location (must have MILB or FORT)
- Separate evacuation location
- Both tiles must be in controlled sectors

### Joining Requirements
New members need **two-layer authentication**:
1. **Access code** — Syndicate-wide identifier
2. **Referral code** — Individual member's recruitment token

Cannot join by access code alone. This prevents hostile infiltration.

## Referral System

Recruiters are responsible for their recruits:

- **Referral tracking** — Permanent record of who recruited whom
- **Accountability** — Recruiters responsible for recruit behavior
- **Network analysis** — Enables counterintelligence, identifies compromised chains

## Excommunication

The creator can ban members with **recursive purge**:

1. Banned player removed from syndicate
2. Everyone that banned player recruited is also removed
3. And everyone those recruits recruited (cascades down)
4. Banned players **cannot rejoin** even with valid referral

**This creates powerful vetting incentives.** Recruiting the wrong person loses entire organizational branches.

## Leadership

### Creator Powers
- Excommunicate members (recursive purge)
- Designate successor
- Transfer creatorship voluntarily
- Manage referral tree

### Succession
- **Designated successor** inherits creatorship if founder leaves
- No disruption during transitions

## Solo Play

"Solo player" = single player running their own exclusive syndicate.

**Solo syndicates have full access:**
- Summit attendance
- Tier progression
- Intelligence agency
- All tier benefits

**Solo syndicates face challenges:**
- Must manage all roles alone
- Limited escort forces
- Smaller intel coverage
- Vulnerable to coordinated groups

---

## System Deep Dives

| Topic | What You'll Learn |
|-------|-------------------|
| [Syndicate Management](/systems/organization/syndicate) | Membership and governance |
| [Officers](/systems/organization/officers) | Finance and Military officer roles |
| [Playbooks](/systems/organization/playbooks) | Automated response systems |
