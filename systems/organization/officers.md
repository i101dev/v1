# Officers

Every syndicate has two officers: **Finance Officer** and **Military Officer**. They're essential for tier progression and unlocking capabilities.

## Officer Types

| Officer | Role | Summit Purpose |
|---------|------|----------------|
| **Finance Officer** | Economic operations | Finance Tier advancement |
| **Military Officer** | Military operations | Military Tier advancement |

Both spawn at HQ when a syndicate is created.

## Officer Locations

Officers exist as physical entities on the map:

- **Residence:** HQ tile (default location)
- **Transit:** In convoys during summit travel
- **Summit:** At summit venue during attendance
- **Captured:** Held by enemy syndicate

## Summit Attendance

Officers must physically travel to summits to advance tiers:

1. Board convoy at HQ
2. Travel to summit venue (2 cycles)
3. Attend summit
4. Return to HQ (2 cycles)

**Round trip: 6 cycles minimum**

### Risk
During transit, officers can be:
- Detected by enemy intel
- Intercepted by HIJK operations
- Kidnapped via KDNP operations

Losing an officer is catastrophic — no tier advancement until replaced.

## Officer Vulnerability

### Convoy Risk
| Escort Configuration | Risk Level |
|---------------------|------------|
| Single officer, strong escort | Moderate |
| Both officers, any escort | **High** (potential total loss) |
| Route masked (all SFAS+) | Lower (Tier 3 intel required to detect) |

### Kidnapping Consequences
- Officer held by enemy syndicate
- Cannot attend summits
- Enemy can interrogate for HQ/evac location
- Must execute RSCU operation to recover

## Officer Replacement

If an officer is killed:

- **New officer spawns at HQ** (next cycle)
- **Tier progress retained** (officer death doesn't reset tiers)
- **Operational disruption** (1 cycle minimum before resuming activities)

Replacement spawns regardless of how officer died (combat, execution, accident).

## Defensive Strategy

### Convoy Protection
- Use SFAS+ escorts for route masking
- Send officers separately (don't lose both at once)
- Time travel during low-activity periods
- Have QRF ready for rapid response

### Intel Investment
- Higher intel tier = detect threats earlier
- Tier 3 intel provides 2-cycle advance warning
- Can reroute or abort convoys before interception

### Diplomatic Options
- Mutual defense agreements with allies
- Non-aggression pacts during summit travel
- Contract RED house for protection

---

<details class="technical-deep-dive">
<summary>Technical Deep Dive</summary>

### Backend Implementation

| Mechanic | Backend Location | Description |
|----------|-----------------|-------------|
| Officer model | `_GAME_v2/officer/M_officer.ts` | Type, status, location |
| Officer service | `_GAME_v2/officer/S_officer.ts` | Spawning, movement, capture |
| Convoy integration | `_GAME_v2/convoy/S_convoy.ts` | Officer boarding, transit |
| Summit processing | `_GAME_v2/summit/S_summit.ts` | Attendance, tier advancement |

</details>

---

**Related:** [Playbooks](/systems/organization/playbooks) — Automated response systems
