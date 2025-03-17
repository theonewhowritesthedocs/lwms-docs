---
sidebar_position: 1
---

# Personnel Master Data

This section describes the UDFs, UDTs and data created for managing Personnel (Users who interact with the WebApps).

## User Defined Fields

The Personnel table (*BEAS_PERS*) has the following **UDFs** used.

| Field | Description | Type |
| --- | --- | --- |
| UDF1 | Location Warehouse | Text | 
| UDF2 | Location BinLocation | Text | 
| UDF3 | Generate PO | Checkbox | 

> :memo: **Note:** The Personnel table doesn't allow you to add UDFs because it's a Beas table. The UDFs included in the table are used.

## User Defined Tables

### Personnel Master Data Complement

Supplementary table (*LWMS_Personnel*) required to save the other characteristics for the Personnel.

| Field | Description | Type |
| --- | --- | --- |
| pers_id | Personnnel Id | Alphanumeric(50) | 
| exec_transfer | Execute Transfer | Alphanumeric(1) | 
| gen_transfer_req | Generate Transfer Request | Alphanumeric(1) | 

> :warning: **Warning:** The necessary information for the user to modify the values ​​has not been generated.

## Supplementary Data

### Personnel Group

These data are complementary to create personnel types.

| Group | Description |
| --- | --- |
| Non_Employee_Driver | External Driver |
| Employee | Internal Employee |
| Logistic | Employee assigned logistics tasks |
