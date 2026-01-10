# Infrastructure Overview

Infrastructure defines where you can operate. Fortresses claim territory, buildings produce value, and ports enable trade. Without infrastructure, you have nothing.

## Core Principle

**You control sectors, not individual tiles.**

Sectors are defined by fortresses. Everything you build must be within a controlled sector.

## Building Types

| Building | Code | Purpose |
|----------|------|---------|
| **Fortress** | FORT | Claims sector, enables construction |
| **Port** | PORT | Market access, inter-regional trade |
| **Vault** | VALT | CRD transaction processing |
| **Military Base** | MILB | Mercenary training |
| **JSOC** | JSOC | Advanced military operations |
| **Intel Facility** | INTL | Intelligence gathering |
| **Extraction** | Various | Resource production (ENGY, MINR, WATR) |
| **Manufacturing** | Various | Item production |

## Infrastructure Requirements

Most activities require specific buildings:

| Activity | Required Building(s) |
|----------|---------------------|
| Control territory | FORT |
| Buy/sell anything | PORT + VALT |
| Train mercenaries | MILB |
| Gather intel | INTL |
| Extract resources | Extraction buildings |

## Strategic Considerations

### Fortress Priority
Your first fortress is **FREE**. Additional fortresses cost increasingly more resources (geometric scaling). Expand strategically.

### Port Defense
Ports are high-value targets:
- Enable all market transactions
- Destruction forces reliance on domestic markets
- Damage reduces regional QOL

### Redundancy
- Multiple fortresses prevent total elimination
- Multiple ports ensure trade continuity
- Distributed infrastructure survives targeted attacks

---

## System Deep Dives

| Topic | What You'll Learn |
|-------|-------------------|
| [Fortresses & Sectors](/systems/infrastructure/fortresses) | Territory control mechanics |
| [Ports & Logistics](/systems/infrastructure/ports) | Trade infrastructure |
