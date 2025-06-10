---
sidebar_position: 7
---

# License Plate Number

A **License Plate Number (LPN)** is a unique identifier used to track and manage groupings of inventory within a warehouse or logistics system. Each LPN is treated as a batch number for the item code "SYSTEM-LPN", enabling detailed tracking of inventory movements, storage, and processing.

## Categories

### Permanent
   
Permanent LPNs are assigned to reusable resources, such as pallets, containers, or transport equipment, that temporarily hold inventory. These LPNs are linked to the resource itself and persist over time, regardless of changes in the inventory they contain. Resources are categorized into two distinct types: Transfer Resources and Transport Resources.

#### Types of Resources:

1. **Transfer Resources**: Resources that handle internal or localized movements of inventory within a warehouse or facility.

- **Examples**:
    - **Forklift**: An LPN can identify inventory being moved using a forklift.
    - **Mobile Cart**: A cart used for internal movement in the warehouse.
    - **Reusable Pallets/Containers**: Reusable items that require consistent identification.
    - **Personnel**: Instead of the equipment, the person is associated with a permanent LPN for inventory in their possession. This ensures that accountability is tracked even when the inventory is being carried or transported manually.

- **Execution**: Transfer Resources execute transfers using Transfer Requests or Transfer Documents.

2. **Transport Resources**: Resources that handle the transportation of inventory between facilities, warehouses, or locations that require transportation equipment.   
    - Multi-site transfers.
    - Shipping of sold goods to customers.
    - Shipping of purchased goods into site.

- **Examples**:
    - **Truck**: The LPN tracks inventory temporarily loaded onto a specific truck.
    - **Van**: Used for smaller transport jobs.
    - **Ship/Boat**: For long-distance or intercontinental shipments.

- **Execution**: Transport Resources execute transfers using Work Orders, which include detailed scheduling and logistics instructions.

#### Resource Categorization in Master Data

- Each resource is documented in the Resource Master Data under the field "Type of Resource".
  
- The Type of Resource field specifies whether the resource is a:

  - **Transfer Resource**: Used for internal/localized movement.
  - **Transport Resource**: Used for inter-facility or long-distance transport.
  
#### Key Characteristics

- The LPN remains active for the lifespan of the resource.
- It is managed as a batch number for "SYSTEM-LPN".

#### Example Prefix

- Transfer Resource: PF-001234
    - Used for resources like forklifts, mobile carts, reusable pallets, or personnel.
- Transport Resource: PP-1234
    - Used for resources like trucks, vans, ships, or other vehicles for inter-facility transport.
    - The final number could be the serial number or the license plate number of the transport resource itself.
- Explanation:
    - PF: Permanent Transfer
    - PP: Permanent Transport

### Temporary

Temporary LPNs are short-lived identifiers assigned to disposable or single-use groupings of inventory. These LPNs are created for a specific operation or task and are retired once the inventory is removed or processed.

#### Lifecycle

 1. Inventory is grouped and assigned a temporary LPN.
 2. Once the inventory is moved or consumed, the temporary LPN is retired ("issued out").

#### Use Cases

- Grouping items on a temporary pallet for shipment.
- Consolidating items in a disposable box during picking or packing.

#### Key Characteristics

- Exists only for the duration of a specific task or operation.
- Retired once inventory is removed or transferred.

#### Example Prefix

- T-567890.

### External

External LPNs are assigned to resources or inventory that belong to third parties or external vendors. These LPNs are used to track inventory received from or returned to external parties, ensuring proper accountability and traceability.

#### Use Cases

- Tracking containers or pallets received from suppliers that need to be returned.
- Managing loaned equipment or materials temporarily stored on-site.
- Monitoring vendor-owned inventory held at the facility.

#### Key Characteristics

- Tracks items that are external to the organization.
- Ensures accountability for receiving and returning inventory.

#### Example Prefix 

- E-890123.

## Restriction

1. **Only a single level LPN.**
   
   - Temporary LPN cannot be put into another Temporary LPN.
   - Permanent LPN cannot be put into another Temporary LPN.
       - Permanent LPN with Transfer Resources can be put into Permanent LPN with Transport Resources.
       - Transport Resources cannot be put into another LPN.
2. **Version 4.0 SSCC Codes with multi-level.**
   
   - Any SSCC into another SSCC and so on. 
  
### Why Use LPN Categories?

- **Simplified Tracking**: Differentiating LPNs by category ensures clarity in tracking and managing inventory.
- **Accountability**: Helps identify ownership and responsibility for different types of resources.
- **Traceability**: Provides clear records for internal, temporary, and external inventory movements.
  
### Example Summary of Prefixes

| Category | Description | Example | Prefix |
| --- | --- | --- | --- |
| Permanent | Reusable resources like pallets (F), trucks (P), or carts (F). | PF-001234 | PP-001234 |
| Temporary | Single-use or task-specific groupings of inventory. |	T-567890 |  |
| External | Third-party resources or inventory to be returned.	| E-890123 |  |

### LPN vs SSCC Code (optional read)

Difference between an SSCC (Serial Shipping Container Code) and a License Plate Number (LPN), although they serve similar purposes in identifying logistic units in supply chain operations. Here's how they differ:

#### Definitions

- **SSCC (Serial Shipping Container Code)**:
    - A globally standardized identifier governed by GS1 standards.
    - Used to uniquely identify a logistic unit (e.g., a pallet, container, or case) across the entire global supply chain.
    - The SSCC is typically a fixed 18-digit number, encoded in GS1-128 barcodes, ensuring consistency and compatibility across trading partners.
- **License Plate Number (LPN)**:
    - A company-specific identifier assigned to a logistic unit within a warehouse or supply chain system.
    - LPNs are not globally standardized and are defined by individual organizations to track units (e.g., pallets, boxes, or containers) within their own operations.

#### Purpose

- **SSCC**:
    - Designed for global supply chain visibility and interoperability.
    - Used for external processes like shipping, receiving, and EDI (Electronic Data Interchange) between trading partners.
    - Ensures every logistic unit can be uniquely tracked across the supply chain, regardless of the company or country.
- **LPN**:
    - Primarily used for internal warehouse operations.
    - Helps track and manage the movement of logistic units (pallets, boxes, etc.) within a warehouse or distribution center.
    - May also be used in transport, but it’s not intended for global visibility.

#### Format

- **SSCC**:
    - Always follows the GS1 format:
            § (Extension Digit) + (GS1 Company Prefix) + (Serial Reference) + (Check Digit).
            § Example: 003123456789123456.
    - Encoded in GS1-128 barcodes.
- **LPN**:
    - Format varies based on company preferences and system requirements.
    - It may include alphanumeric characters, prefixes, or even a GS1-structured format if needed (but it’s not required).
            § Example: LPN-000123456, PAL-001234, or 123456AB.

#### Usage Context

- **SSCC**:
    - Used in global logistics and transport processes.
    - Scanned at multiple points in the supply chain, from the point of origin to the final destination.
    - Used in EDI documents such as Advance Shipping Notices (ASNs), invoices, or shipment manifests.
- **LPN**:
    - Primarily used in warehouse management systems (WMS) for internal operations.
    - Tracks pallet movement, storage, picking, and packing.
    - May not be recognized or used beyond the company’s internal systems or by trading partners.

#### Interoperability

- **SSCC**:
    - Globally unique and universally recognized by all parties that adhere to GS1 standards.
    - Can be shared across systems and trading partners without modification.
- **LPN**:
    - Unique only within the company or warehouse environment.
    - Requires mapping or conversion when shared with external systems or partners if interoperability is needed.

#### Key Benefits

| Aspect | SSCC | LPN |
| --- | --- | --- |
| Global Uniqueness	|Yes | No (Company-Specific) |
| Governance |	Standardized by GS1 | Defined by individual organizations |
| Usage	| External (global supply chain) | Internal (warehouse management) |
| Format | Strictly GS1-compliant (18 digits) |	Flexible (alphanumeric or numeric) |
| Purpose |	Global logistics, EDI, traceability | Internal tracking, inventory movement |

- **Examples**:
    - **SSCC**: A pallet shipped from Manufacturer A to Retailer B is assigned an SSCC, which is scanned at every stage (e.g., shipping, receiving, storing) for global traceability.
    - **LPN**: Within Manufacturer A’s warehouse, the pallet is assigned an LPN to track its movement from the receiving dock to storage and later to the shipping dock. The LPN might be converted to an SSCC for external processes.

#### Key Takeaways

- **SSCC**: Designed for external, global supply chain tracking. It's a standardized identifier that ensures interoperability between trading partners.
- **LPN**: Designed for internal warehouse operations, providing flexibility for companies to define their own structure and use cases.