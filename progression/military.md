# Military Tier

The Military Tier determines your combat efficiency. Higher tiers train faster, succeed more often, and control damage better.

## Benefits by Tier

| Military Tier | Training Reduction | Success Bonus | Damage Control |
|---------------|-------------------|---------------|----------------|
| Tier 0 | 0% | +0% | None |
| Tier 1 | 15% | +20% | None |
| Tier 2 | 25% | +35% | None |
| Tier 3 | 40% | +50% | Yes (-30% severity) |

## Understanding the Bonuses

### Training Time Reduction
Reduces cycles required to complete each training school.

**Base pipeline:** 26 cycles (RIP through GBQC)

| Tier | Reduction | Pipeline Duration |
|------|-----------|-------------------|
| 0 | 0% | 26 cycles |
| 1 | 15% | ~22 cycles |
| 2 | 25% | ~20 cycles |
| 3 | 40% | **~16 cycles** |

**Tier 3 produces battle-ready GBQC mercenaries 10 cycles faster.**

### Operation Success Bonus
Increases success rate on all operation cards.

| Tier | Bonus |
|------|-------|
| 1 | +20% to base success rate |
| 2 | +35% to base success rate |
| 3 | +50% to base success rate |

Combined with other modifiers (training, intel), Tier 3 operations rarely fail.

### Damage Control Protocols (Tier 3 Only)

Tier 3 unlocks damage control:
- **-30% Swan Event severity** when operations fail
- Limits catastrophic event risk
- Prevents collateral damage from spawning rogues

This enables aggressive operations without existential risk.

## Advancement

### Requirements
- **Military Officer** must attend summit
- Tribute payment required
- Officer must survive round trip

### Summit Convoy
1. Military Officer boards convoy at HQ
2. Travel to summit venue (2 cycles)
3. Attend summit, pay tribute
4. Return to HQ (2 cycles)

**Total: 6 cycles round trip**

## Strategic Value

### Training Pipeline Acceleration

**Without Military Tier (26 cycles to GBQC):**
- Start training cycle 1 → GBQC ready cycle 27
- Limited operational window before game ends

**With Tier 3 (16 cycles to GBQC):**
- Start training cycle 1 → GBQC ready cycle 17
- 10 additional cycles of elite operations

### Military Dominance Loop

1. Faster training → more elite mercenaries
2. Higher success rates → operations succeed
3. Damage control → reduced risk from failures
4. Compound advantage → military superiority

## Intelligence Tier Bonus

Military Tier 3 also provides **+1 to Intelligence Tier**:

```
effective_intel_tier = min(3, base_intel_tier + 1)
```

This means Military Tier 3 syndicates get enhanced intel even with moderate INTL investment.

---

**Related:** [Mercenary Training](/systems/military/mercenaries) — Training pipeline details
