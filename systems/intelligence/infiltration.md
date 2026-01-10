# Infiltration

Infiltration operations allow syndicates to place spies in enemy buildings to gather tactical information. This is key reconnaissance for identifying high-value targets before operations.

## Requirements

- Only **INTL** or **BKST** citizens can perform infiltration
- Citizen status changes to `SPY` while actively infiltrating
- Multiple syndicates can have infiltrators in the same building

## Progressive Intel Reveal

Intelligence is not revealed instantly. Information becomes available over time:

| Cycle Offset | Intelligence Revealed |
|--------------|----------------------|
| +0 (instant) | `building_type` |
| +1 | `building_lvl` |
| +2 | `citizen_count` |
| +3 | `citizen_ids` |

### Example Timeline

- **Cycle 10:** Infiltration succeeds → building_type revealed
- **Cycle 11:** building_lvl revealed
- **Cycle 12:** citizen_count revealed
- **Cycle 13:** citizen_ids revealed (full tactical picture)

After 3 cycles, you have complete visibility into the building's composition and personnel.

## Infiltration Detection

Infiltration is **NOT automatically detected**. The victim must actively investigate their buildings to discover infiltrators.

### Detection Quality by Intel Tier

| Intel Tier | Detection Result |
|------------|-----------------|
| Tier 1 | Basic detection ("possible infiltration detected") |
| Tier 2 | Reveals infiltrating syndicate |
| Tier 3 | Full reveal (citizen_id, syndicate, infiltration_cycle) |

### Counter-Infiltration

1. Initiate building investigation
2. Intel tier determines detection quality
3. Exposed infiltrators can be expelled or captured

Regular security sweeps of critical buildings are essential.

## Strategic Value

### Reconnaissance
- Understand enemy building composition
- Identify building levels and capabilities
- Map enemy infrastructure across sectors

### Target Selection
- Identify high-value citizens for kidnapping
- Locate key personnel (engineers, intel officers)
- Prioritize targets based on CERC value

### Military Planning
- Assess defensive capabilities before attacks
- Count citizen defenders at target buildings
- Plan resource allocation for operations

## Infiltration → Kidnapping Flow

1. **Infiltrate enemy building**
2. **Wait for citizen_ids reveal** (Cycle +3)
3. **Identify high-value targets** (high CERC, key roles)
4. **Execute KDNP operation** with specific target

Without infiltration, kidnapping is blind—you don't know who's worth capturing.

## Counter-Intelligence Priority

### Critical Buildings to Sweep
- HQ and command structures
- INTL facilities (intel-on-intel)
- High-value production (ENGY plants, factories)
- Officer residences

### Sweep Frequency
- Critical buildings: Every 2-3 cycles
- Standard buildings: Every 5-7 cycles
- Low-value buildings: As resources permit

### Discovering Infiltrators

When investigation reveals infiltrators:

**Options:**
1. **Expel** — Remove spy, syndicate loses intel access
2. **Capture** — Attempt to capture spy for interrogation
3. **Feed disinformation** — Leave spy in place, provide false intel (advanced tactic)

---

<details class="technical-deep-dive">
<summary>Technical Deep Dive</summary>

### Data Structure

```typescript
interface InfiltrationRecord {
    citizen_id: string;      // INTL or BKST citizen
    infiltration_cycle: number;  // When infiltration succeeded
}

interface Building {
    infiltrated_by: InfiltrationRecord[];
}
```

### Backend Implementation

| Mechanic | Backend Location | Description |
|----------|-----------------|-------------|
| Infiltration tracking | `_GAME_v2/building/S_building.ts` | Building infiltrated_by array |
| Infiltration service | `_GAME_v2/infiltration/S_infiltration.ts` | Ops, progressive reveal |
| Detection | `_GAME_v2/investigation/S_investigation.ts` | Counter-intel detection |

### HTTP Routes

| Route | Purpose |
|-------|---------|
| `BUILDING_INFILTRATION_STATUS_GET` | Check infiltration records |
| `BUILDING_INFILTRATION_EXECUTE` | Execute infiltration op |
| `BUILDING_INFILTRATION_INTEL_GET` | Get time-gated intel |

</details>

---

**Related:** [Detection System](/systems/intelligence/detection) — Overall intel capabilities
