## Enterprise Asset Management (EAMS) v15 

# Inventory – ABC Cycle 

# Counts 

### End User Documentation 

### Update 2/28/2025 


Inventory ABC Cycle Counts 

## Inventory ABC Cycle Counts 

 The ABC method is simply a way of organizing the products in a warehouse for tracking throughout an inventory cycle. The idea behind the ABC method is to break down product lists into three (or more) categories: A, B, C and so on. Inventory Cycle Counts is a concept where inventory is counted on a cyclic schedule rather than once a year. The count is usually taken on a regular, defined basis (often more frequently for high-value or fast-moving items and less frequently for low-value or slow-moving items). The key purpose of cycle counting is to identify items in error, thus triggering research, identification, and elimination of the cause of the errors. TO USE CYCLE COUNTS IN MAINTSTAR, THE SYSTEM MUST BE A CONTROLLED INVENTORY USING INVENTORY TRANSACTIONS. 

## A, B, C Concepts 

- **A Category:** is made up of highest dollar and fastest moving products. The threshold for this     category is user dependent, however many organizations assign their fastest moving parts to     this category. 

- **B Category:** is made items to be counted less frequently than A parts but more often than C     parts. The exact frequencies for each bucket depend on how many different parts a warehouse     stocks and how often a count is required maintain accuracy. 

- **C Category** : made up of the lowest performing items that move through a warehouse. 

## Cycle Count Process 

1. **Assess** the current state of inventory integrity and set target accuracy levels. Determine the     accuracy level of the current inventory. 

2. **Perform** the cycle count. The cycle counting process begins. 

3. **Track** variance causes. Compare physical counts with book balances, identify which counts are     acceptable and unacceptable, investigating variances, performing reconciliation transaction     updates, determine the root causes of variances, and selecting items for recounting. 

4. **Continue** improving accuracy levels. The goal is to see inventory accuracy levels rise over time     as the cycle counting process takes firm root in the organization. 

5. **Compare** current and target accuracy levels. Ongoing results of the cycle counting program will     enable inventory control to establish higher inventory accuracy targets. 

## Cycle Count Setup Fields 

 There are certain required fields needed to accurately set up a ABC Cycle Count in MaintStar. It is important to understand terms and definitions as they are used as setups within the system. 

- Sequence Number: Count Sequence (order) 

- ABC Code: Assignment of A, B, C (or other) codes 


Inventory ABC Cycle Counts 

- To %: The total percentage of cost that the inventory items you want issued (through     transaction historical records) across the whole system. For example, the following ABC setup will use the %To values to determine how to classify the parts. 

- A: 80% - your most ISSUED parts that total 0-80% of the total issued dollar amount will be     classed as an “A” cycle 

- B: 90% - your most ISSUED parts that total 80-90% of the total issued dollar amount will be     classed as an “B” cycle 

- C: 95% - your most ISSUED parts that total 90-100% of the total issued dollar amount will be     classed as an “C” cycle 

## Setting up and Using Cycle Counts 

 This method will apply cycle counts to ALL items in ALL warehouses with an open date filter (meaning it looks at parts over the entire life). Many organizations will have multiple warehouses and wish to fine tune their ABC assignments by warehouse. If this is the case, refer to the next section for additional information. 

1. The ABC Cycle Count module is located within Inventory > ABC > ABC Cycle Count Setup. 

2. Configure the ABC codes as desired, or use the above example as a starting point. 

3. Click on the ABC Class Update tab. 

4. Click Update Class. MaintStar will now run the evaluation process of all issuing transactions to     determine part usage and provide ABC assignments. Review the results. The Average Cost     column shows evidence of part use. Click OK to commit the class assignments. 


Inventory ABC Cycle Counts 

5. To confirm the ABC assignment, go to Inventory > Inventory Summary, select a part and check     the “ABC Code” field. (This field may need to be added via screen customization) 

## Using Cycle Counts with Warehouse and Date Filters 

 The method above will apply cycle counts to ALL items in ALL warehouses with an open date filter (meaning it looks at parts over the entire life). Many organizations will have multiple warehouses and wish to fine tune their ABC assignments by warehouse. Additional filters are available that allow for specific warehouses and filters to be applied. For instance, “only check the MAIN warehouse and only look for parts issued within the last X number of days”. 


Inventory ABC Cycle Counts 

1. Set up ABC as above (per individual requirements) 

2. Go to the ABC Code Update Screen 

3. Set Date field to have far back to look in Issuing Transactions 

4. Click Run 

5. If results are acceptable, click Update Class 

6. This will update ONLY the shown records 

## Counting Sheets 

 Counting Sheets provide an ability to create a printout to be used by staff to conduct the actual hand count of parts. Go to Inventory > ABC > and locate the Counting Sheet tab. From this page Warehouses can be filtered to further refine what is to be counted. Based on user preferences, creating a query for custom counting sheets is also an option. (Reports > Query) 


Inventory ABC Cycle Counts 

## Inventory Adjustments 

 At the conclusion of the cycle counts, it may be necessary to adjust inventory. It is recommended to use the Adjustment Sheet within the ABC menu to perform these adjustments. Doing so will create corresponding adjustment transactions and provide accountability for all part quantity changes. Navigate to Inventory > ABC > Adjustment Sheet. To perform an adjustment: 


Inventory ABC Cycle Counts 

1. Open the Adjustment Sheet 

2. Select the Warehouse and/or Part number using the filters to find the part to be adjusted 

3. Locate the desired part(s) 

4. Click Edit in the upper left of the grid 

5. Update the following fields:     a. Comments (optional)     b. Count Quantity     c. Count Date     d. Select the “Overwrite” box 

6. When ready to commit the adjustment, click Save. THIS WILL ADJUST QUANTITIES AND CREATE     A CORRESPONDING TRANSACTION. 


