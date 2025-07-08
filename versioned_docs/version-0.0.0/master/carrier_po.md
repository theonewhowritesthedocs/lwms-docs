---
sidebar_position: 3
---

# Carrier PO

A **Purchase Order** assigned to a **Carrier** and with the item **CARRIER-SERVICE**.

![Purchase order for a carrier po screen](./img-carrier/po_carrierpo_screen.png)

1. **Business Partner**.
2. **Item**.

## User Defines Fields

![Purchase order for a carrier po udfs screen](./img-carrier/po-carrierpo_udfs_screen.png)

| Display Name | Table | Field | Description | Type |
| --- | --- | --- | --- | --- |
| From Bin | POR1 | U_lwms_frombin | From where the stock came | Text |
| To Bin | POR1 | U_lwms_tobin | To where the stock went | Text |

## Referenced Documents

In contrast with a regular PO, a carrier PO can have a variety of documents assigned to it, for transportation purposes.

![PO Referenced documents screen](./img-carrier/po_referenced_documents_screen.png)

## References

- [Shipping Delivery.](/docs/apps/shipping_delivery)
- [Shipping Multi-Site Transfer.](/docs/apps/shipping_multi_site_transfer)
- [Receive.](/docs/apps/receive)
