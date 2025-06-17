---
sidebar_position: 3
---

import CustomDetails from "@site/src/components/CustomDetails";
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Inspection

The Inspection web app allows you to log the results of quality checks on a production order by samples/tests and execute further actions.

## Flow Diagram

```mermaid
stateDiagram-v2
    state "Select QC Order" as qc_order
    state "QC Order summary" as qcsummary1
    state "QC Order summary" as qcsummary2
    state "QC Order summary" as qcsummary3
    state "Block/release batches" as brbatches
    state "Select a sample" as sample
    state "Select a test" as test
    state "Input results per test" as test_results
    state "Input results per sample" as sample_results
    state "Create activity" as create_activity1
    state "Create activity" as create_activity2
    state "Attach pictures" as pics1
    state "Attach pictures" as pics2

    state select_qcsummary <<choice>>

    [*] --> qc_order
    qc_order --> qcsummary1
    qcsummary1 --> brbatches: Managed by batch
    brbatches --> qcsummary1
    qcsummary1 --> select_qcsummary: QC flow
    select_qcsummary --> sample: Sample
    select_qcsummary --> test: Test
    sample --> test_results
    test_results --> sample
    test_results --> qcsummary2: No more open
    test --> sample_results
    sample_results --> test
    sample_results --> qcsummary3: No more open
    test_results --> pics1
    pics1 --> test_results
    sample_results --> pics2
    pics2 --> sample_results
    qcsummary2 --> create_activity1
    qcsummary3 --> create_activity2
    create_activity1 --> [*]
    create_activity2 --> [*]
    qcsummary2 --> [*]
    qcsummary3 --> [*]
```

## Screens

### QC Order Selection

On this screen you need to select a **QC Order**.

![QC order selection screen](./img-inspection/qc-order-selection-screen.png)

Click the <IIcon icon="iconamoon:search-bold" width="17" height="17" /> button to open the **QC Order Search** modal.

<CustomDetails summary="QC Order Search Modal">

On this modal you need to select one of the **QC orders** listed.

![QC order search modal](./img-inspection/qc-order-search-modal.png)

You can select any item by clicking on it, which will close the modal with that **QC order** already set.

You can filter the list of **QC orders** using the search box.

If you want to close the modal without making any changes, click the <IIcon icon="zondicons:close-solid" width="17" height="17"/> button.

</CustomDetails>

Once you select a **QC order**, you will be taken to the [QC Order Summary](./inspection.md#qc-order-summary) screen.

### QC Order Summary

On this screen you can see a summary of the **QC Order** you selected, including the number of lines in states of **Open**, **Ok**, and **Error**.

![QC order summary](./img-inspection/qc-order-summary-screen.png)

<CustomDetails summary="Field Reference">
| Field | Description |
| ---| --- |
| QC Order | QC Order number and the creation date. |
| Document | Document ID. |
| Item No | Item number. |
| Description | Item description. |
| Quantity | Quantity already posted or to be checked. |
| Open | Number of samples not yet released. |
| Ok | Number of released samples. |
| Error | Number of samples marked as faulty. |
</CustomDetails>

Click the **View Batches** button to open the **Batches Status Modal**.

<CustomDetails summary="Batches Status Modal">

On this modal you can change the status of the batches associated with the QC order. You can **block** or **release** batches.

![Batches status modal](./img-inspection/batch_status_modal.png)

You can change the status by clicking on the **Status** column for any of the batches. The update is done at that moment.

If you want to close the modal, click the <IIcon icon="zondicons:close-solid" width="17" height="17"/> or **Close** buttons.

</CustomDetails>

:::note[INFO]
The **View Batches** button will only be shown when the item is managed by batches.
:::

The next step is selecting the way in which you want to input the results: **Sample** and **Test**.

![QC Order workflow dropdown menu](./img-inspection/qc-order-workflow-dropdown-menu.png)

Once you select one, click **Next** to go to the respective screen: [Sample: Samples Summary](./inspection.md#sample-samples-summary) or [Test: Tests Summary](./inspection.md#test-tests-summary).

### Sample: Samples Summary

On this screen you can see a summary of the **samples** associated with the selected QC order.

![Samples summary screen](./img-inspection/sflow-samples-summary-screen.png)

<CustomDetails summary="Table Reference">
| Column | Description |
| --- | --- |
| <IIcon icon="pepicons-pop:dots-x" width="17" height="17"/> | Action button for opening the **Sample: Extended Information** modal. |
| Sample | Sample number. |
| Untested | Number of unchecked measurement positions.|
| Last Change | When the sample was last modified. |
</CustomDetails>

You can use the search box on the top of the screen to filter samples by the **Sample** and **Untested** values.

If you want to **add** a new sample, click the **Add New Sample** button. It will add a new row in the table with all the information pre-populated.

Click the <IIcon icon="pepicons-pop:dots-x" width="17" height="17"/> button on any of the samples to open the **Sample: Extended Information** modal.

<CustomDetails summary="Sample: Extended Information Modal">

On this modal you can see and update other information on a **sample**.

![Unique sample summary modal](./img-inspection/sflow-unique-sample-summary-modal.png)

You can give a sample up to two release reasons using the **Release 1** and **Release 2** fields.

:::note[INFO]
If you set **Release 1** to **Released**, the sample will be released and removed from the list. You can only release it from here if the sample does not have measurements already saved.

If you set **Release 1** to **Locked**, the sample will be locked and removed from the list.
:::

**Release 2** can only be checked when **Release 1** is set to **Released.**

Use the **Blockage Reason** field for giving the sample a reason for a blockage by choosing one of the options. For giving it extra comments use the <IIcon icon="ion:information-sharp" width="17" height="17"/> field below it.

You can also give the sample a **Valuation** from the list of options and extra information.

If you want to close the modal without making any changes, click the <IIcon icon="zondicons:close-solid" width="17" height="17"/> or **Cancel** buttons.

Click **Save** to save the changes and close the modal.

</CustomDetails>

Click on any other columns of a sample to go to the [Sample: Tests Summary](./inspection.md#sample-tests-summary) screen for it.

### Sample: Tests Summary

On this screen you can see a summary of the **tests** assigned to the selected sample.

![Tests summary screen](./img-inspection/sflow-tests-summary-screen.png)

<CustomDetails summary="Table Reference">
| Column   | Description                                                     |
| -------- | --------------------------------------------------------------- |
|          | Indication of passing                                           |
| Pos      | ID of the test.                                                 |
| QC Order | Name of the test.                                               |
| Measure  | Value taken.                                                    |
| UoM      | Unit of Measure, e.g. cm.                                       |
| OK       | Indication of passing.                                          |
</CustomDetails>

You can use the search box on the top of the screen to filter tests by the **Pos** and **QC Order** values.

Click on any columns of a test to open the **Test: Extended Information** modal.

<CustomDetails summary="Test: Extended Information Modal">

On the **Measurement** tab you can input the results for the test on a specific **sample**.

**NOTE**: The **Methodology** tab is purely informative. It shows a description of the methodology used for the test.

![Unique test summary measurement tab modal](./img-inspection/sflow-unique-test-sumamary-measurement-tab-modal.png)

First, input the result that you got for this test. Use the **Value** field for that. Some tests will give you the conditions to pass. When the **value** meets those, the **OK** checkbox will automatically be ticked. This will depend on the inspection plan.

:::note[INFO]
If you give **OKs** to all the tests for a sample, it will be **released** and removed from the list.
:::

Use the **Blockage Reason** field for giving the sample a reason for a blockage by choosing one of the options. For giving it extra comments use the <IIcon icon="ion:information-sharp" width="17" height="17"/> field below it.

:::note[INFO]
If you give **Blockage Reasons** to at least one test for a sample, it will be **locked** and removed from the list.
:::

You can also give the sample a **Valuation** from the list of options and extra information.

If you want to close the modal without making any changes, click the <IIcon icon="zondicons:close-solid" width="17" height="17"/> or **Cancel** buttons.

Click **Save** to save the changes and close the modal.

</CustomDetails>

You will be seeing the results reflected on the table for each of the tests modified.

You can also add pictures as proof for the tests that were applied. For that, click the <IIcon icon="mdi:camera" width="17" height="17"/> button at the bottom to open the **Add Picture** modal.

<CustomDetails summary="Add Picture Modal">

On this modal you can **take a picture** of the samples and **link it** to the QC Order.

First, you need to give the picture a name and then click **Confirm**.

![Photo title modal](./img-inspection/photo-title-modal.png)

After that, you need to choose a device for taking the picture from the list of available options. Then, click **Take Photo** to take it and save it.

![Take photo modal](./img-inspection/take-photo-modal.png)

If you want to close any of the modals without saving anything, click the <IIcon icon="zondicons:close-solid" width="17" height="17"/> or **Cancel** buttons.

</CustomDetails>

Once you are done here, click **Previous** at the bottom to go back to the [Sample: Samples Summary](./inspection.md#sample-samples-summary) screen and continue with other samples, if applicable.

Once there are no more samples left, you will be automatically taken to the [Final QC Order Summary](./inspection.md#final-qc-order-summary) screen.

### Test: Tests Summary

On this screen you can see a summary of the **tests** associated with the selected QC order.

![Tests summary screen](./img-inspection/tflow-tests-summary-screen.png)

<CustomDetails summary="Table Reference">
| Column      | Description                                                 |
| ----------- | ----------------------------------------------------------- |
|             | Action button for opening the Test: Extended Summary modal. |
| Pos         | ID of the test.                                             |
| T           | Type of the test.                                           |
| QC Order    | Name of the test.                                           |
| Methodology | Description of how the test works.                          |
</CustomDetails>

You can use the search box on the top of the screen to filter tests by the **Pos** and **QC Order** values.

Click the <IIcon icon="pepicons-pop:dots-x" width="17" height="17"/> button on any of the tests to open the **Test: Extended Summary** modal.

<CustomDetails summary="Test: Extended Summary Modal">

On this modal you can see an extended summary for a **test**, like the **conditions** to pass and its **methodology**.

![Unique test summary measurement tab modal](./img-inspection/tflow-unique-test-sumamary.png)

If you want to close the modal, click the <IIcon icon="zondicons:close-solid" width="17" height="17"/> or **Cancel** buttons.

</CustomDetails>

Click on any other columns of a test to go to the [Test: Samples Summary](./inspection.md#test-samples-summary) screen for it.

### Test: Samples Summary

On this screen you can see a summary of the **samples** for which the selected test applies.

![Test flow: samples summary measurement](./img-inspection/tflow-samples-summary-screen.png)

<CustomDetails summary="Table Reference">
| Column                                                     | Description                                                       |
| ---------------------------------------------------------- | ----------------------------------------------------------------- |
| <IIcon icon="pepicons-pop:dots-x" width="17" height="17"/> | Action button for opening the **Sample: Extended Information modal**. |
| Sample                                                     | ID of the sample.                                                 |
| Measure                                                    | Value taken.                                                      |
| UoM                                                        | Unit of Measure, e.g. cm.                                         |
| OK                                                         | Indication of passing.                                            |
</CustomDetails>

You can use the search box on the top of the screen to filter samples by the **Sample** value.

Click the <IIcon icon="pepicons-pop:dots-x" width="17" height="17"/> button on any of the tests to open the **Sample: Extended Summary** modal.

<CustomDetails summary="Sample: Extended Information Modal">

On this modal you can see and update other information on a **sample**.

![Unique sample summary modal](./img-inspection/sflow-unique-sample-summary-modal.png)

You can give a sample up to two release reasons using the **Release 1** and **Release 2** fields.

:::note[INFO]
If you set **Release 1** to either **Released**, the sample will be released and removed from the list. You can only release it from here if the sample does not have measurements already saved.

If you set **Release 1** to either **Locked**, the sample will be locked and removed from the list.
:::

**Release 2** can only be checked when **Release 1** is set to **Released.**

Use the **Blockage Reason** field for giving the sample a reason for a blockage by choosing one of the options. For giving it extra comments using the <IIcon icon="ion:information-sharp" width="17" height="17"/> field below it.

You can also give the sample a **Valuation** from the list of options and extra information.

If you want to close the modal without making any changes, click the <IIcon icon="zondicons:close-solid" width="17" height="17"/> or **Cancel** buttons.

Click **Save** to save the changes and close the modal.

</CustomDetails>

Click on any of the other columns of a sample to open the **Test: Extended Information** modal.

<CustomDetails summary="Test: Extended Information Modal">

On the **Measurement** tab you can input the results for the test on a specific **sample**.

**NOTE**: The **Methodology** tab is purely informative. It shows a description of the methodology used for the test.

![Test flow: unique test extended information modal](./img-inspection/tflow-unique-test-information.png)

First, input the result that you got for this test. Use the **Value** field for that. Some tests will give you the conditions to pass. When the **value** meets those, the **OK** checkbox will automatically be ticked. This will depend on the inspection plan.

:::note[INFO]
If you give **OKs** to all the tests for a sample, it will be **released** and removed from the list.
:::

Use the **Blockage Reason** field for giving the sample a reason for a blockage by choosing one of the options. For giving it extra comments using the <IIcon icon="ion:information-sharp" width="17" height="17"/> field below it.

You can also give the sample a **Valuation** from the list of options and extra information.

If you want to close the modal without making any changes, click the <IIcon icon="zondicons:close-solid" width="17" height="17"/> or **Cancel** buttons.

Click **Save** to save the changes and close the modal.

</CustomDetails>

You will be seeing the results reflected on the table for each of the samples modified.

You can also add pictures as proof for the tests that were applied. For that, click the <IIcon icon="mdi:camera" width="17" height="17"/> button at the bottom to open the **Add Picture** modal.

<CustomDetails summary="Add Picture Modal">

On this modal you can **take a picture** of the samples and **link it** to the QC Order.

First, you need to give the picture a name and then click **Confirm**.

![Photo title modal](./img-inspection/photo-title-modal.png)

After that, you need to choose a device for taking the picture from the list of available options. Then, click **Take Photo** to take it and save it.

![Take photo modal](./img-inspection/take-photo-modal.png)

If you want to close any of the modals without saving anything, click the <IIcon icon="zondicons:close-solid" width="17" height="17"/> or **Cancel** buttons.

</CustomDetails>

Once you are done here, click the **Previous** button at the bottom to go back to the [Test: Tests Summary](./inspection.md#test-tests-summary) screen and continue with other tests, if applicable.

Once there are no more samples left, you will be automatically taken to the [Final QC Order Summary](./inspection.md#final-qc-order-summary) screen.

### Final QC Order Summary

On this screen you can see a **summary** of the QC order after being done with all the samples.

![Final QC order summary screen](./img-inspection/final_qc_order_summary_screen.png)

If you want to create an activity for the QC order now that you are done, click the <IIcon icon="fa:gears" width="17" height="17"/> button at the bottom to go to the [Create Activity](./inspection.md#create-activity) screen.

If not, click **Next** at the bottom to go to the [Home](./inspection.md#qc-order-selection) screen for you to start a new inspection.

### Create Activity

On this screen you can create an activity for the QC Order. This is for continuing with the process. 

Once you are done logging the results of the tests, someone else needs to continue with the process by making decisions based on said results, this is that step.

![Create activity screen](./img-inspection/create-activity-screen.png)

You first need to set the **Business Partner**. Click the <IIcon icon="iconamoon:search-bold" width="17" height="17" /> button on it to open the **Business Partner Search** modal.

<CustomDetails summary="Business Partner Search Modal">

On this screen you need to select one of the **business partners** listed.

![Business Partner search modal](./img-transfer-request-designation/bp-search-modal.png)

You can select any item by clicking on it, which will close the modal and take you back with that **business partner** already set.

You can filter the list of **business partners** using the search box.

If you want to close the modal without making any changes, click the <IIcon icon="zondicons:close-solid" width="17" height="17"/> button.

</CustomDetails>

Next up is the **User**. Click the <IIcon icon="iconamoon:search-bold" width="17" height="17" /> button on it to open the **User Search** modal.

<CustomDetails summary="User Search Modal">

On this screen you need to select one of the **users** listed.

![User search modal](./img-transfer-request-designation/user-search-modal.png)

You can select any item by clicking on it, which will close the modal and take you back with that **user** already set.

You can filter the list of **users** using the search box.

If you want to close the modal without making any changes, click the <IIcon icon="zondicons:close-solid" width="17" height="17"/> button.

</CustomDetails>

After that, you need to set the **Type**, which is the **activity type**, using the dropdown menu. 

Continuing, you have the **Subject**. Click the <IIcon icon="iconamoon:search-bold" width="17" height="17" /> button on it to open the **Subject Search** modal.

<CustomDetails summary="Subject Search Modal">

On this screen you need to select one of the **subjects** listed.

![Subject search modal](./img-transfer-request-designation/subject-search-modal.png)

You can select any item by clicking on it, which will close the modal and take you back with that **subject** already set.

You can filter the list of **subjects** using the search box.

If you want to close the modal without making any changes, click the <IIcon icon="zondicons:close-solid" width="17" height="17"/> button.

:::danger[development]
The title of the modal does not match its functionality. **~User~** <IIcon icon="mdi:arrow-right-thin" width="17" height="17" /> **Subject**.
:::

</CustomDetails>

And  last but not least, you can use the **Comment** field to add extra information on the process.

Once you are done, click **Next** to create the corresponding **activity** (do not forget to take note of it) and to go to the [Home](./inspection.md#qc-order-selection) screen for you to start a new inspection.
