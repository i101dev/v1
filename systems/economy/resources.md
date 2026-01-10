# Resources

Resources are the foundational inputs for all economic activity. Unlike items (which are tracked individually), resources exist as **account balances**—numbers on your Regional Player Account.

## Resource Types

| Resource | Code | Description | Primary Use |
|----------|------|-------------|-------------|
| Energy | ENGY | Powers manufacturing and construction | Required by almost everything |
| Minerals | MINR | Raw materials for physical production | Manufacturing, construction |
| Water | WATR | Supports chemical and biological processes | Commodities, advanced manufacturing |

## Sources

### Primary: Extraction
Build extraction facilities on resource-rich "Wild" tiles within controlled sectors:

| Building | Produces | Requirements |
|----------|----------|--------------|
| Power Plant | ENGY | Citizens |
| Mine | MINR | Citizens, ENGY |
| Purifier | WATR | Citizens, ENGY |

**Critical:** You must control the sector (have a Fortress) to build extraction facilities.

### Secondary: Market Tribute
Regional market activity generates resource income. Active markets = passive resource flow.

### Tertiary: Market Trading
Buy and sell resources on the regional market for CRD.

::: warning No Direct Transfers
Resources cannot be transferred directly between players. All trades must go through the market. This prevents multi-account exploitation.
:::

## Market Mechanics

### Pricing
Resource prices are **dynamic**, based on supply and demand within the regional market pool.

- High demand + low supply = prices rise
- Low demand + high supply = prices fall
- Large trades move prices (AMM mechanics)

### Infrastructure Requirements
| Building | Required For |
|----------|--------------|
| PORT | Physical movement (buy/sell) |
| VALT | Payment processing |

Without both buildings operational, you cannot participate in the resource market.

## Strategic Role

Resources serve four critical functions:

### 1. Production Inputs
All crafting requires resources. Manufacturing items consumes ENGY + MINR + WATR in various ratios.

### 2. Commodity Payment
Imperial Commodities (MEDS, AMMO, FOOD, TOOLS) are purchased with resources, **not CRD**. This is the only way to convert resources directly into military power.

### 3. Construction Costs
Building and upgrading structures requires resource expenditure.

### 4. Tradeable Assets
Resources can be bought and sold on the market for CRD, enabling:
- Liquidation when credits are needed
- Stockpiling when prices are low
- Market manipulation strategies

## Strategy Tips

### Energy First
ENGY is foundational. Mines and Purifiers require energy to operate. An ENGY shortage cascades into total resource drought.

**Recommended ratio:** 2:1:1 (ENGY:MINR:WATR) extraction capacity minimum.

### Market Timing
- Buy resources when prices dip (often after major operations consume supply)
- Sell before anticipated price crashes (e.g., when large mines come online)
- Watch competitor extraction capacity to predict supply changes

### Vertical Integration
The most efficient syndicates extract their own resources rather than buying on market:
- No market spread (buy/sell price gap)
- No price volatility risk
- No dependency on PORT/market access

---

<details class="technical-deep-dive">
<summary>Technical Deep Dive</summary>

### Backend Implementation

| Mechanic | Backend Location | Description |
|----------|-----------------|-------------|
| Market model | `_GAME_v2/market_resources/M_market_resources.ts` | Market pools, price history |
| Market service | `_GAME_v2/market_resources/S_market_resources.ts` | Buy/sell operations, pricing |
| Market controller | `_GAME_v2/market_resources/C_market_resources.ts` | Market HTTP endpoints |

### Data Model
Resources are stored as numeric balances on the `RegionalPlayerAccount` model, not as inventory items. This enables efficient bulk operations and prevents item-tracking overhead for fungible goods.

</details>

---

**Related:** [Commodities & QOL](/systems/economy/commodities) — Convert resources into military power
