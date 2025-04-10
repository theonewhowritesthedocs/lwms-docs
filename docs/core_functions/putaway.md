---
sidebar_position: 1
---

# Intra-Site Transfer (Putaway)

The Intra-Site Transfer (Putaway) WebApp allows you to transfer stock from one warehouse to another and/or from one bin in a warehouse to another, by either Executing a Transfer directly, or by Generating a Transfer Request that will later be revised and approved/rejected.

## Flow Diagram

```mermaid
stateDiagram-v2
    state "Origin Location" as select_origin_location
    state "Stock Lines" as stock
    state "Add or Modify Stock Line" as select_stock
    state "Generate Transfer Request" as generate_transfer_req
    state "Go to Transfer Request Assign" as transfer_req_assign
    state "Execute Transfer" as exec_transfer

    state if_finish_op <<choice>>
    state if_transfer_req_assign <<choice>>

    [*] --> select_origin_location
    select_origin_location --> stock
    stock --> select_stock
    select_stock --> stock

    
    stock --> if_finish_op
    if_finish_op --> exec_transfer: Configuration Yes
    exec_transfer --> [*]

    if_finish_op --> generate_transfer_req
    generate_transfer_req --> if_transfer_req_assign
    if_transfer_req_assign --> transfer_req_assign
    if_transfer_req_assign --> [*]
    transfer_req_assign --> [*]
    
    
```
## Screens

### Origin Location - Screen

On this screen you need to select the origin location from where you will be transfering the stock lines.

![Origin Location](./img/origin_location.png)

You first need to set the **Warehouse**. Click the <IIcon icon="iconamoon:search-bold" width="17" height="17" /> button to open the [Warehouse Search](./putaway.md#warehouse-search---popup) popup.

The **Bin Location** will only show up if the **Warehouse** is managed by one. Click the <IIcon icon="iconamoon:search-bold" width="17" height="17" /> button on the field to open the [Location Search](./putaway.md#location-search---popup) popup.

:::info
In the [Configuration](./putaway.md#configuration), if **personnel_origin_location** is set to **true**, the *Personnel*'s location is set as the origin location, that includes the **Bin Location** as well, if applicable. If it is set to **false**, the location must be defined *manually*.
:::

Once you are done, click **Next** to go to the [Stock Lines](./putaway.md#stock-lines---screen) screen.

### Stock Lines - Screen

[<IIcon icon="nrk:back" width="17" height="17" /> Go back to the **Origin Location** screen](./putaway.md#origin-location---screen)

On this screen you need to select the stock lines.

![Origin Location](./img/stock_lines_ready.png)

First, you need to **add** a stock line. For that, click the **Add Stock** button. That will take you to the [Add or Modify Stock Line](./putaway.md#add-or-modify-stock-line---screen) screen, for you to select/modify the necesarry information.

You can also **edit** any of the stock lines you already have by clicking on the <IIcon icon="bx:edit" width="17" height="17" /> button associated with the respective stock line.

If you want to delete a stock line, click the <IIcon icon="ic:baseline-delete" width="17" height="17" /> button for the respective stock.

:::danger[Internal]
Currently, there is no confirmation popup when **deleting** stock lines. If you hit delete, the stock line will be deleted **immediately**.
:::

Once you are done, click **Next** to open the [Putaway Completion](./putaway.md#putaway-completetion---popup) popup.

[<IIcon icon="nrk:back" width="17" height="17" /> Go back to the **Origin Location** screen](./putaway.md#origin-location---screen)

### Add or Modify Stock Line - Screen

[<IIcon icon="nrk:back" width="17" height="17" /> Go back to the **Stock Lines** screen](./putaway.md#stock-lines---screen)

On this screen you select the stock line from the inventory.

![Select Stock Line Screen](./img/select_stock_line.png)

Click the <IIcon icon="iconamoon:search-bold" width="17" height="17" /> button on the fields and a popup will open for you to search. You have the [Item Search](./putaway.md#item-search---popup), [I-Version Search](./putaway.md#i-version-search---popup), [Batch Search](./putaway.md#batch-search---popup), [Warehouse Search](./putaway.md#warehouse-search---popup), and [location Search](./putaway.md#location-search---popup) popups.

Selecting the **Item No** will enable the next fields, where applicable. The **I-Version** and **Batch/Serial Number** will only be enabled if the **Item No** has those associated with it.

The **Quantity** will depend on the **Batch/Serial Number** selected.

:::danger[Internal]
Currently, there is no validation for the **Quantity** field. For example, if the **Batch/Serial Number** has a maximum number of items of 10, you *can* set the **Quantity** to a value exceding that limit, i.e. 15, but that will give you an error and will not let you continue to the next screen.
:::

The **Destination Warehouse** value depends on the [Configuration](./putaway.md#configuration). Below the **Destination Warehouse**, you will find a **Destination Bin Location** field, only if the **Destination Warehouse** is managed by one.

:::info
If **putaway_location** is set to **Y**, the **Destination Warehouse** will be the *default* of the item selected, and that will be *mandatory*. If it is set to **N**, the **Destination Warehouse** will need to be selected *manually*. If it is set to **O**, the **Destination Warehouse** will be the *default* of the item selected, and that will be *optional*. This all includes the **Destination Bin Location** as well, if applicable.
:::

Once you are done, click **Next** to go back to the [Stock Lines](./putaway.md#stock-lines---screen) screen.

[<IIcon icon="nrk:back" width="17" height="17" /> Go back to the **Stock Lines** screen](./putaway.md#stock-lines---screen)

## Popups

### Warehouse Search - Popup

[<IIcon icon="nrk:back" width="17" height="17" /> Go back to the **Origin Location** screen](./putaway.md#origin-location---screen)

[<IIcon icon="nrk:back" width="17" height="17" /> Go back to the **Add or Modify Stock Line** screen](./putaway.md#add-or-modify-stock-line---screen)

On this screen you need to select one of the **warehouses** listed.

![Warehouse search popup](./img/popup_warehouse_search.png)

You can select any item by clicking on it, which will close the popup and take you back with that **warehouse** already set.

You can filter the list of **warehouses** using the search box.

If you want to close the popup without making any changes, click the <IIcon icon="zondicons:close-solid" width="17" height="17"/> button.

[<IIcon icon="nrk:back" width="17" height="17" /> Go back to the **Origin Location** screen](./putaway.md#origin-location---screen)

[<IIcon icon="nrk:back" width="17" height="17" /> Go back to the **Add or Modify Stock Line** screen](./putaway.md#add-or-modify-stock-line---screen)

### Location Search - Popup

[<IIcon icon="nrk:back" width="17" height="17" /> Go back to the **Origin Location** screen](./putaway.md#origin-location---screen)

[<IIcon icon="nrk:back" width="17" height="17" /> Go back to the **Add or Modify Stock Line** screen](./putaway.md#add-or-modify-stock-line---screen)

On this screen you need to select one of the **bin locations** listed.

![Warehouse search popup](./img/popup_location_search.png)

You can select any item by clicking on it, which will close the popup and take you back with that **bin location** already set.

You can filter the list of **bin locations** using the search box.

If you want to close the popup without making any changes, click the <IIcon icon="zondicons:close-solid" width="17" height="17"/> button.

[<IIcon icon="nrk:back" width="17" height="17" /> Go back to the **Origin Location** screen](./putaway.md#origin-location---screen)

[<IIcon icon="nrk:back" width="17" height="17" /> Go back to the **Add or Modify Stock Line** screen](./putaway.md#add-or-modify-stock-line---screen)

### Item Search - Popup

[<IIcon icon="nrk:back" width="17" height="17" /> Go back to the **Add or Modify Stock Line** screen](./putaway.md#add-or-modify-stock-line---screen)

On this screen you need to select one of the **items** listed.

![Item search popup](./img/popup_item_search.png)

You can select any item by clicking on it, which will close the popup and take you back with that **item** already set.

You can filter the list of **items** using the search box.

If you want to close the popup without making any changes, click the <IIcon icon="zondicons:close-solid" width="17" height="17"/> button.

[<IIcon icon="nrk:back" width="17" height="17" /> Go back to the **Add or Modify Stock Line** screen](./putaway.md#add-or-modify-stock-line---screen)

### I-Version Search - Popup

[<IIcon icon="nrk:back" width="17" height="17" /> Go back to the **Add or Modify Stock Line** screen](./putaway.md#add-or-modify-stock-line---screen)

[<IIcon icon="nrk:back" width="17" height="17" /> Go back to the **Batches: Extended Information** popup](./putaway.md#batches-extendend-information---popup)

On this screen you need to select one of the **I-Versions** listed.

![I-Version search popup](./img/popup_iversion_search.png)

You can select any item by clicking on it, which will close the popup and take you back with that **I-Version** already set.

You can filter the list of **I-Versions** using the search box.

If you want to close the popup without making any changes, click the <IIcon icon="zondicons:close-solid" width="17" height="17"/> button.

[<IIcon icon="nrk:back" width="17" height="17" /> Go back to the **Add or Modify Stock Line** screen](./putaway.md#add-or-modify-stock-line---screen)

[<IIcon icon="nrk:back" width="17" height="17" /> Go back to the **Batches: Extended Information** popup](./putaway.md#batches-extendend-information---popup)


### Batch Search - Popup

[<IIcon icon="nrk:back" width="17" height="17" /> Go back to the **Add or Modify Stock Line** screen](./putaway.md#add-or-modify-stock-line---screen)

[<IIcon icon="nrk:back" width="17" height="17" /> Go back to the **Batches: Extended Information** popup](./putaway.md#batches-extendend-information---popup)


On this screen you need to select one of the **Batches** listed.

![Batch search popup](./img/popup_batch_search.png)

You can select any item by clicking on it, which will close the popup and take you back with that **Batch** already set.

You can filter the list of **Batches** using the search box.

If you want to close the popup without making any changes, click the <IIcon icon="zondicons:close-solid" width="17" height="17"/> button.

[<IIcon icon="nrk:back" width="17" height="17" /> Go back to the **Add or Modify Stock Line** screen](./putaway.md#add-or-modify-stock-line---screen)

[<IIcon icon="nrk:back" width="17" height="17" /> Go back to the **Batches: Extended Information** popup](./putaway.md#batches-extendend-information---popup)

### Batches: Extendend Information - Popup

[<IIcon icon="nrk:back" width="17" height="17" /> Go back to the **Add or Modify Stock Line** screen](./putaway.md#add-or-modify-stock-line---screen)

On this screen you will be able to **add/modify** batches.

The first thing you will see is the **Batch** tab, giving you information for the batch selected. You can modify the fields on this tab, and that will be reflected once you are done.

![Batches: Extended Information search popup, with the Batch tab selected](./img/popup_batch_extended_information_batch.png)

If you wan to add a new batch, click the <IIcon icon="subway:add" width="17" height="17" />  button to use the **Batch** tab for creating the new batch.

Click the <IIcon icon="iconamoon:search-bold" width="17" height="17" /> button on the fields and a popup will open for you to search. You have the [Batch Search](./putaway.md#batch-search---popup) and [I-Version Search](./putaway.md#i-version-search---popup) popups.

![Batches: Extended Information search popup, after clicking the plus button](./img/popup_batch_extended_information_add.png)

Once you are done adding/modifying the batches, you can click on the **Batches** tab to see the list of batches selected and their information.

![Batches: Extended Information search popup, with the Batches tab selected](./img/popup_batch_extended_information_batches.png)

If you want to delete a batch, click the <IIcon icon="ic:baseline-delete" width="17" height="17" /> button for the respective batch.

Once you have everything that you need, click the <IIcon icon="zondicons:close-solid" width="17" height="17"/> button to close the popup and take you back to the [Add or Modify Stock Line](./putaway.md#add-or-modify-stock-line---screen) screen with the new batch information already set.

![Batch field showing 2 batches are selected](./img/batch_field_2_baches_selected.png)

[<IIcon icon="nrk:back" width="17" height="17" /> Go back to the **Add or Modify Stock Line** screen](./putaway.md#add-or-modify-stock-line---screen)

### Putaway Completetion - Popup

[<IIcon icon="nrk:back" width="17" height="17" /> Go back to the **Stock Lines** screen](./putaway.md#stock-lines---screen)

On this popup you need to choose an option between [Execute Transfer](./putaway.md#execute-transfer---popup) and [Generate Transfer Request](./putaway.md#generate-transfer-request---popup), depending on what you want to do with the stock lines you selected.

![Popup for choosing between Execute Transfer and Generate Transfer Request](./img/popup_choose_execute_generate_transfer.png).

[<IIcon icon="nrk:back" width="17" height="17" /> Go back to the **Stock Lines** screen](./putaway.md#stock-lines---screen)

### Execute Transfer - Popup

[<IIcon icon="nrk:back" width="17" height="17" /> Go back to the **Putaway Completetion** popup](./putaway.md#putaway-completetion---popup)

Select this option if you want to execute a transfer but not assign it.

Once this option is selected, you will see a summary of what was done and information on the document that was created.

![Popup showing the summary after selecting Execute Transfer.](./img/popup_execute_transfer.png)

Once you have taken note of the information you need, click the **Ok** or the <IIcon icon="zondicons:close-solid" width="17" height="17"/> buttons to close the popup and to go to the [Home](./putaway.md#origin-location---screen) screen and start a new transfer.

:::info
Stock lines for which already a **Generate Transfer Request** has been applied, but has yet to be approved/rejected, if you try to do either an **Execute Transfer** or a **Generate Transfer Request** again on them, you will get an error stopping you from doing it.
:::

[<IIcon icon="nrk:back" width="17" height="17" /> Go back to the **Putaway Completetion** popup](./putaway.md#putaway-completetion---popup)

### Generate Transfer Request - Popup

[<IIcon icon="nrk:back" width="17" height="17" /> Go back to the **Putaway Completetion** popup](./putaway.md#putaway-completetion---popup)

Select this option if you want to generate a transfer request and assign it.

Once this option is selected, you will see a summary of what was done and information on the document that was created.

![Popup showing the summary after selecting Generate Transfer Request.](./img/popup_generate_transfer_request.png)

Once you have taken note of the information you need, click the **Ok** or the <IIcon icon="zondicons:close-solid" width="17" height="17"/> buttons for closing the popup and to open the [Task Designation](./putaway.md#task-designation-popup) popup.

:::info
Stock lines for which already a **Generate Transfer Request** has been applied, but has yet to be approved/rejected, if you try to do either an **Execute Transfer** or a **Generate Transfer Request** again on them, you will get an error stopping you from doing it.
:::

[<IIcon icon="nrk:back" width="17" height="17" /> Go back to the **Putaway Completetion** popup](./putaway.md#putaway-completetion---popup)

### Task Designation (Popup)

[<IIcon icon="nrk:back" width="17" height="17" /> Go back to the **Generate Transfer Request** popup](./putaway.md#generate-transfer-request---popup)

On this screen you need to choose between making a **Transfer Request Assignment** or **not**.

![Task assignment popup](./img/task_assignment.png)

If you hit **No**, the popup will close, the task will not be assigned, and you will be taken to the [Home](./putaway.md#origin-location---screen) screen to start a new transfer.

[<IIcon icon="nrk:back" width="17" height="17" /> Go back to the **Generate Transfer Request** popup](./putaway.md#generate-transfer-request---popup)

## Configuration

### Local Configuration

| Id | Description | Type | Values |
| :--- | :--- | :--- | :--- | 
| personnel_origin_location | Location linked to personnel ID as the default location | boolean | True or False |
| putaway_location | Setting to define the putaway location for the item | select | <ul><li>Y : Mandatory</li><li>N : It doesn't set the location </li><li>O : Sets the location, but the user can edit it.</li></ul> |

```json
[
    {
        "id":"personnel_origin_location",
        "description":"Location linked to personnel ID as the default location",
        "enable_type":"disabled",
        "enable_value":true,
        "type":"boolean",
        "value":false
    },
    {
        "id":"putaway_location",
        "description":"Setting to define the putaway location for the item",
        "enable_type":"disabled",
        "enable_value":true,
        "type":"select",
        "options":[
            {"id":"Y","description":"The destination location is the default of Item (Mandatory)"},
            {"id":"O","description":"The destination location is the default of Item (Optional)"},
            {"id":"N","description":"The destination location is chosen by the user"}
        ],
        "value":"O"
    }
]
```




