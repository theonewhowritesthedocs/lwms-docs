---
sidebar_position: 1
---

import CustomDetails from "@site/src/components/CustomDetails";
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Putaway

The Intra-Site Transfer (Putaway) WebApp allows you to transfer stock from one warehouse to another and/or from one bin to another, by either Executing a Transfer directly or by Generating a Transfer Request that will later be revised and approved/rejected.

## Flow Diagram

```mermaid
stateDiagram-v2
    state "Select Origin Location" as select_origin_location
    state "Stock Lines Summary" as stock
    state "Add/Modify Line" as select_stock
    state "Generate Transfer Request" as generate_transfer_req
    state "Go to Transfer Request Designation" as transfer_req_designation
    state "Execute Transfer" as exec_transfer

    state if_finish_op1 <<choice>>
    state if_finish_op2 <<choice>>
    state if_transfer_req_designation <<choice>>

    [*] --> select_origin_location
    select_origin_location --> stock
    stock --> select_stock
    select_stock --> stock

    
    stock --> if_finish_op1: Config
    if_finish_op1 --> if_finish_op2: LPN disabled. <br> Operation type.
    if_finish_op1 --> exec_transfer: LPN enabled
    if_finish_op2 --> exec_transfer
    exec_transfer --> [*]
    if_finish_op2 --> generate_transfer_req
    generate_transfer_req --> if_transfer_req_designation:  Assign
    if_transfer_req_designation --> transfer_req_designation: Yes
    if_transfer_req_designation --> [*]: No
    transfer_req_designation --> [*]
```

## Screens

### Origin Location

On this screen you need to select the location from where you will be taking the stock.

![Origin Location](./img-putaway/origin_location.png)

You first need to set the **Warehouse**. Click the <IIcon icon="iconamoon:search-bold" width="17" height="17" /> button to open the **Warehouse Search** modal.

<CustomDetails summary="Warehouse Search Modal">

On this screen you need to select one of the **warehouses** listed.

![Warehouse search modal](./img-putaway/popup_warehouse_search.png)

You can select any item by clicking on it, which will close the modal and take you back with that **warehouse** already set.

You can filter the list of **warehouses** using the search box.

If you want to close the modal without making any changes, click the <IIcon icon="zondicons:close-solid" width="17" height="17"/> button.

</CustomDetails>

The **Bin Location** will only show up if the **Warehouse** is managed by one. Click the <IIcon icon="iconamoon:search-bold" width="17" height="17" /> button on the field to open the **Bin Location Search** modal.

<CustomDetails summary="Bin Location Search Modal">

On this screen you need to select one of the **bin locations** listed.

![Bin Location search modal](./img-putaway/popup_location_search.png)

You can select any item by clicking on it, which will close the modal and take you back with that **bin location** already set.

You can filter the list of **bin locations** using the search box.

If you want to close the modal without making any changes, click the <IIcon icon="zondicons:close-solid" width="17" height="17"/> button.

</CustomDetails>

:::note[INFO]
The behavior of the **Origin Location** will vary depending on the **Location linked to personnel ID as the default location** setting in the [Configuration](./putaway.md#configuration).
:::

Once you are done, click **Next** to go to the [Stock Lines Summary](./putaway.md#stock-lines) screen.

### Stock Lines Summary

On this screen you need to select the stock lines that will be transferred.

The exact way the rows in the table will look like will depend on if it is loose inventory or license plate stock.

<Tabs>
  <TabItem value="inventory" label="Inventory" default>
    ![Origin Location](./img-putaway/stock_lines_ready_inventory_screen.png)
  </TabItem>
  <TabItem value="lpn" label="License Plate">
    ![Origin Location](./img-putaway/stock_lines_ready_lpn_screen.png)
  </TabItem>
</Tabs>

First, you need to **add** a stock line. For that, click the **Add Stock** button. That will take you to the [Add or Modify Stock Line](./putaway.md#add-or-modify-stock-line) screen, for you to select/modify the necessary information.

You can also **edit** any of the stock lines you already have by clicking on the <IIcon icon="bx:edit" width="17" height="17" /> button associated with the respective stock line.

If you want to delete a stock line, click the <IIcon icon="ic:baseline-delete" width="17" height="17" /> button for the respective stock.

Once you are done, the following step will vary depending on the **Allows you to select License Plate to make transfers** setting in the [Configuration](./putaway.md#configuration). 

If the setting <u>is</u> checked, click **Next** to **execute** the transfer on the spot. After that, you will be taken to the [Home](./putaway.md#origin-location) screen. 

On the other hand, if the setting <u>is not</u> checked, click **Next** to open the **Putaway Completion** modal.

<CustomDetails summary="Putaway Completion Modal">

On this modal you need to choose an option between **Execute Transfer** and **Generate Transfer Request**, depending on what you want to do with the stock lines you selected.

![Modal for choosing between Execute Transfer and Generate Transfer Request](./img-putaway/popup_choose_execute_generate_transfer.png).

Select **Execute transfer** if you want to execute the transfer directly.

Select **Generate Transfer Request** if you want to generate a transfer request **and** assign it.

:::note[INFO]
Stock lines for which already a **Generate Transfer Request** has been applied, but has yet to be approved/rejected, will give an error if you try to apply to them another **Execute Transfer** or **Generate Transfer Request**.
:::

After any of the options is selected, you will see a summary of what was done and information on the document that was created.

Once you have taken note of the information you need, click the **Ok** or the <IIcon icon="zondicons:close-solid" width="17" height="17"/> button for closing the modal. If you chose **Execute Transfer**, the buttons will take you to the [Home](./putaway.md#origin-location) screen. If you chose **Generate Transfer Request**, then they will open the **Task Designation** modal.

#### Task Designation Modal

On this screen you need to choose between making a **Transfer Request Assignment** or **not**.

![Task assignment modal](./img-putaway/task_assignment.png)

If you click **No**, the modal will close, the task **will not** be assigned, and you will be taken to the [**Home**](./putaway.md#origin-location) screen to start a new transfer.

If you click **Yes**, the modal will close and you will be taken to the [**Transfer Request Designation**](../apps/transfer_request_designation#transfer) web app, for you to assign the transfer to someone.

</CustomDetails>

### Add or Modify Stock Line

On this screen you select the stock line from the inventory.

<Tabs>
  <TabItem value="inventory" label="Inventory" default>
    ![Select Stock Line Inventory Screen](./img-putaway/select_stock_line_inventory_screen.png)
  </TabItem>
  <TabItem value="lpn" label="License Plate">
    ![Select Stock Line License Plate Screen](./img-putaway/select_stock_line_lpn_screen.png)
  </TabItem>
</Tabs>

You can use batches/serial numbers or License Plate Numbers (LPN). The options are mutually exclusive.

First let's go over the process for selecting stock using batches/serial numbers. For that, make sure you are in the **Inventory** tab.

Click the <IIcon icon="iconamoon:search-bold" width="17" height="17" /> button on the fields to open the search modals. You have the **Item**, **I-Version**, **Batch/Serial Number**, **Warehouse**, and **Location** search modals.

<CustomDetails summary="Item Search Modal">

On this screen you need to select one of the **items** listed.

![Item search Modal](./img-putaway/popup_item_search.png)

You can select any item by clicking on it, which will close the modal and take you back with that **item** already set.

You can filter the list of **items** using the search box.

If you want to close the modal without making any changes, click the <IIcon icon="zondicons:close-solid" width="17" height="17"/> button.
</CustomDetails>

<CustomDetails summary="I-Version Search Modal">

On this screen you need to select one of the **I-Versions** listed.

![I-Version search Modal](./img-putaway/popup_iversion_search.png)

You can select any item by clicking on it, which will close the modal and take you back with that **I-Version** already set.

You can filter the list of **I-Versions** using the search box.

If you want to close the modal without making any changes, click the <IIcon icon="zondicons:close-solid" width="17" height="17"/> button.
</CustomDetails>

<CustomDetails summary="Batch/Serial Number Search Modal">

On this screen you need to select one of the **Batches/Serial Numbers** listed.

![Batch search modal](./img-putaway/popup_batch_search.png)

You can select any item by clicking on it, which will close the modal and take you back with that **Batch/Serial Number** already set.

You can filter the list of **Batches/Serial Numbers** using the search box.

If you want to close the modal without making any changes, click the <IIcon icon="zondicons:close-solid" width="17" height="17"/> button.
</CustomDetails>

Click the <IIcon icon="pepicons-pop:dots-x" width="17" height="17" /> button on the **Batch/Serial Number** field to open the **Batches/Serial Numbers: Extended Information** modal.

<CustomDetails summary="Batches/Serial Numbers: Extended Information">

On this screen you will be able to **add/modify** batches/serial numbers.

The first thing you will see is the **Batch** tab, giving you information for the batch selected. You can modify the fields on this tab, and that will be reflected once you are done.

![Batches: Extended Information search modal, with the Batch tab selected](./img-putaway/popup_batch_extended_information_batch.png)

If you want to add a new batch, click the <IIcon icon="subway:add" width="17" height="17" />  button to use the **Batch** tab as a form.

Click the <IIcon icon="iconamoon:search-bold" width="17" height="17" /> button on the fields to open the search modals. You have the **Batch/Serial Number** and **I-Version** search modals, that you can reference above this dropdown.

![Batches: Extended Information search modal, after clicking the plus button](./img-putaway/popup_batch_extended_information_add.png)

Once you are done adding/modifying the batches, you can click on the **Batches** tab to see the list of batches selected and their information.

![Batches: Extended Information search modal, with the Batches tab selected](./img-putaway/popup_batch_extended_information_batches.png)

If you want to delete a batch, click the <IIcon icon="ic:baseline-delete" width="17" height="17" /> button for the respective batch.

Once you have everything that you need, click the <IIcon icon="zondicons:close-solid" width="17" height="17"/> button to close the modal and take you back with the new batch information already set.

![Batch field showing 2 batches are selected](./img-putaway/batch_field_2_baches_selected.png)

</CustomDetails>

Selecting the **Item No** will enable the next fields, where applicable. The **I-Version** and **Batch/Serial Number** will only be enabled if the **Item No** has those associated with it.

The **Quantity** will depend on the **Batch/Serial Number** selected.

The **Destination Warehouse** is the location to where the stock is going to be transferred. Below the **Destination Warehouse**, you will find a **Destination Bin Location** field, only if the **Destination Warehouse** is managed by one.

:::note[INFO]
The behavior of the **Destination Location** will vary depending on the **Setting to define the putaway location for the item** setting in the [Configuration](./putaway.md#configuration). This only applies for the **Inventory** tab.
:::

If you are done, click **Next** to save the changes and to go back to the [Stock Lines Summary](./putaway.md#stock-lines-summary) screen.

Now, let's go over the process of selecting stock using License Plate Numbers (LPN). For that, make sure you are in the **License Plate** tab.

:::note[INFO]
Keep in mind that you can only select <u>full</u> license plates with all their stock. No partials.
:::

Click the <IIcon icon="iconamoon:search-bold" width="17" height="17" /> button to open the **License Plate Search** modal.

<CustomDetails summary="License Plate Search Modal">

On this screen you need to select one of the **license plates** listed. You will only see LPNs that are in the origin location you chose.

![License plate search modal](./img-putaway/license_plate_search_modal.png)

You can select any item by clicking on it, which will close the modal and take you back with that **license plate** already set.

You can filter the list of **license plates** using the search box.

If you want to close the modal without making any changes, click the <IIcon icon="zondicons:close-solid" width="17" height="17"/> button.

</CustomDetails>

After you select an LPN, you will see it reflected in the **License Plates** section. You can also see its stock in the **Strock** section.

If you want to **unselect** an LPN, click the <IIcon icon="ic:baseline-delete" width="17" height="17" /> button on the rightmost column for the corresponding LPN.

Next up is the **Destination Warehouse**. That is the location to where the stock is going to be transferred. Below the **Destination Warehouse**, you will find a **Destination Bin Location** field, only if the **Destination Warehouse** is managed by one.

If you are done, click **Next** to save the changes and to go back to the [Stock Lines Summary](./putaway.md#stock-lines-summary) screen.

## Configuration

:::note[INFO]
Only administrators can access the configuration for a web app.
:::

On this screen you can set the settings that will apply to this web app.

![Configuration screen](./img-putaway/configuration.png)

| Name | Description |
| :--- | :--- |
| Location linked to personnel ID as the default location | If checked, it will prefill the **origin** location with the default location for the personnel. Otherwise, it will leave the **origin location** empty for the user to choose one manually. |
| Allows you to select License Plate to make transfers | If checked, it will give the user the option of also selecting stock using LPNs. Otherwise, it will only give the user the option of selecting stock one item at a time. |
| Setting to define the putaway location for the item | <ol><li>**The destination location is the default of Item (Mandatory):** This will prefill the **destination** location of the item with the default location for the item. The user <u>cannot</u> edit it.</li><li>**The destination location is the default of Item (Optional):** This will prefill the **destination** location of the item with the default location for the item. The user <u>can</u> edit it.</li><li>**The destination location is chosen by the user:** This will leave the **destination location** empty for the user to choose one manually.</li></ol> |
