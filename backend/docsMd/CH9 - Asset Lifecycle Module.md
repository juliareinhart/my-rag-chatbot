## Enterprise Asset Lifecycle (EAMS) v15 

# Asset Lifecycle Module 

#### End User Documentation 

#### Update 9 /25/2024 


Asset Lifecycle Module 

## Asset Lifecycle Module 

 The Asset Lifecycle Module is a paid/licensed module composed of a variety of tools to assist organizations with the decision-making process. By combining asset data and work order data, these tools can be leveraged to help planners determine asset lifecycles, replacement schedules, budgeting and overall asset performance. 

## Asset Lifecycle Tools 

 With the potential of many assets, it may be prohibitive to perform individual assessments and replacement schedules on every asset within an organization(s). As part of the Asset Lifecycle module, MaintStar provides tools to assist with the ratings, assessments, replacement schedules and budget development. These tools include: 

- **Rating Wizard:** The Rating Wizard is a tool that automates the ratings of assets based on life, maintenance and use data within MaintStar. Ratings can be scale(s) of an organization choosing. For instance, there are Pavement Condition Indexes that have rating scores from 0- 100; a simple 1 to 5 scale, an A-F scale or a combination of all. Using factors such as age, cost to maintain and meters (for assets with meters), automated ratings can be applied to assets. This is the best way to apply real world logic and information to rate assets according to thresholds set by an organization. 

- **COF Setup** : The Consequence of Failure (COF) Setup tool provides an easy way to apply or update COF values to Asset Types. COF values help to identify the value of assets to organizations based on a 1-5 scale with a 1 depicting a low impact if an asset fails and a 5 depicting a high or significant impact. 

- **POF Wizard** : The Probability of Failure (POF) Wizard provides an easy way to apply or update     POF values to assets. POF values help to identify the likelihood of an asset’s failure. Using     factors such as age, cost to maintain and meters (for assets with meters), automated POF scores     can be applied to assets. POF ratings are based on a 1-5 scale with a 1 depicting a low likelihood     of an asset’s failure and a 5 depicting a high likelihood of failure. 


Asset Lifecycle Module 

- **Criticality Wizard** : The Criticality Wizard is the result of the COF and POF ratings. Calculating     Criticality is a multiplication of POF x COF which is a standard calculation for determining an     organization’s critical assets. 

- **Capital Planning** : The Capital Planning tool is a separate license from Asset Lifecycle and     provides the ability to ‘model’ replacement dates and costs base one, some or all the factors     above, such as age, meter, cost, ratings, usage and assessments. Going beyond a fixed or static     replacement date, this is particularly helpful for budgeting for current and/or future year     replacements based on the factors above. 

- **Asset Lifecycle (AL) Reports:** Standard reports for all of the above modules. As with most     modules in MaintStar Reports and Queries can also be used to meet an organization’s unique     needs. 

## Factors Affecting Asset Life 

 Whether an asset is a hydrant, pipe, vehicle, generator or building, it has a theoretical end of life date. This date can be shortened or extended by a variety of factors to include frequency of use, quality of maintenance, criticality of the asset and overall asset condition. The number of assets that an organization is responsible for maintaining may preclude rating or evaluating every single asset. Common factors that MaintStar uses to evaluate an asset include: 

#### Asset Factor Description Where to Set 

 EOL Age : expected life versus current age This calculates the age of the asset using: Install Date – Current Date = Current Age An additional calculation determines years remaining: EOL Age – Current Age = Life Remaining End of Life (EOL) Age Set at Asset Type Level EOL Maintenance Cost : a percentage of allowable maintenance cost versus replacement cost End of Life (EOL) Cost is set at Asset Type Level as a percentage. For instance, setting a value of 50% would be factored into the tools listed above. The EOL Cost threshold is set to individual Asset Type(s). 


Asset Lifecycle Module EOL Cost – Total Corrective Work Order Cost = WO Cost % Work Order Cost is automatically calculated by MaintStar through Work Order cost tracking. **EOL Meters** (mileage or hours): expected meter life versus actual reading EOL Meters is set at the Asset Type level and helps to report whether an asset equipped with a meter is within or outside desired usage thresholds by calculating: EOL Meter – Current Meter = Meter Life %* *Meter types are set at the asset type level and MaintStar supports multiple meters, but only the default meter is considered for this calculation End of Life (EOL) Meter Set at Asset Type Level **Ratings** : an ‘excellent to bad’ scale that allows for simple asset ratings Ratings can be customized by any organization and are typically from “excellent to bad” in a numbered or lettered format, ie “1-5” or “A-F”. The scales are called “Condition Indexes”. These are applied to individual Assets by an individual.* *The Condition Index table stores the values for the ratings. Condition Indexes must exist in Setup Tables and then must be applied to the Asset Type. Once setup, Ratings can be individually recorded through an asset’s “Assessment” tab. Alternatively, the Rating Wizard can be used to automate these ratings. **Assessments** : a formal process to rate assets with replacement cost and/or life remaining Using Condition Indexes and a formal assessment process, the Asset Assessment tool can be used provided updated replacement and/or cost information to assets. These are applied to individual Assets by an individual. Once setup, Assessments can be individually recorded through an asset’s “Assessment” tab. 

### TO ENSURE USABLE OUTPUTS, ORGANIZATIONS MUST CREATE AND MAINTAIN 

### THEIR DATA IN ACCORDANCE WITH THIS DOCUMENT’S RECOMMENDATION 

## Configuration and Uses of End of Life (EOL) Settings 

 To ensure accurate use of the tools above, there are settings that must be applied to Assets and Asset Types. Below are those critical settings: Using End of Life (EOL Age) Settings EOL Age: As a reminder, this is set at an Asset Type by Asset Type basis. Therefore, “Heavy Duty” and “Light Duty” trucks can be given different life expectancies. 


Asset Lifecycle Module 

1. Navigate to Assets > Asset Type and locate the desire Asset Type. There is a field labeled “EOL     Age”. Enter the desired life expectancy in years, click Save. **Install Date:** This field is on the Asset itself, and this date typically refers to the date the asset has been purchased and/or placed into service. 

1. Navigate to Assets and locate the desired Asset. At an individual asset basis, the field labeled     “Install Date” (field name = install_date) must be populated. Following is an example of the     calculation at the Asset level that shows the asset with a 12 year life expectancy and the number     of remaining years based on the Asset Type setting: *The field may or may not be present on every asset screen customization. If it is not present, customize the screen and add the “install_date” field. 


Asset Lifecycle Module **Using End of Life Cost (EOL Percent) EOL Percent:** As a reminder, this is set at an Asset Type by Asset Type basis. Therefore, differing cost values can be placed to differing asset types. The purpose of this field is to provide a Work Order Cost threshold for all corrective (not planned) work completed against an asset. 

1. Navigate to Assets > Asset Type and locate the desire Asset Type. 

2. To set (or confirm) the Asset Types WO Cost, locate the field labeled “EOL Percent”. Set the     desired value and click Save.* **Original and Replacement Cost:** for the tools above to work correctly, original and replacement costs should be set. If this data does not exist the tools will use other factors as best it can to assess ratings. 

1. At an individual asset basis,     the field labeled “Original     Value” (field name =     original_value) must be     populated with original cost     data.* 

2. At an individual asset basis,     the field labeled     “Replacement Value” (field     name = replacement_cost)     should be populated with     replacement cost data,     even if it is an estimate.* *The field may or may not be present on every asset screen customization. If it is not present, customize the screen and add the “original_value” field. 

3. The example above has a     EOL Cost of 75% and an     Original Value of $100. If Work Order Cost exceeds $75 then the asset is to be considered more     expensive to repair then replace. 


Asset Lifecycle Module **Using End of Meter (EOL Meter) EOL Meter (if meters are used):** As a reminder, this is set at an Asset Type by Asset Type basis. Therefore, “Heavy Duty” and “Light Duty” trucks can be given different meter values such as 200,000 miles for heavy duty and 150,000 miles for light trucks. 

1. Navigate to Assets > Asset Type and locate the desire Asset Type. 

2. To set (or confirm) the Asset Types default meter, locate the field labeled “Meter 1 Type”. Set     the meter and click Save. *If there are NO meters set in the meter type, they must be set up by an administrator under Setup > Tables > Meter Types. *If the assets existed before the meter type was set, then it may be necessary to click the “Update Asset Meter” link which retroactively places the meter (with 0 mileage) on all assets within the type. **Updating Meters** Meter data can be obtained through a variety of means, all of which are extensively covered in documentation. In summary, meters can be updated via Work Orders, manually on Assets, and/or through a fuel system integration. 

## Configuration and Uses of Condition Indexes and Ratings 

 To use asset ratings, condition indexes must be configured (by an administrator or with the help of MaintStar). The ratings are a way to document an assets condition by assigning a value. Traditionally different types of assets can be rated with different scales. Some may rate on a 5-point scale, 1 to 5 with 5 being best. Some use a 10-point scale where 1 is the best and 10 is the worst condition. Condition Index : the name of the scale, ie “1 to 5” or “PCI” for road pavement ratings. MaintStar supports a multitude of industry standard or custom rating scales. When setting up the index, a best and worst score value must be set. Condition Indexes are configured within Setup > Tables > Condition Index. In the “1 to 10” example below, the best and worst ratings are set. 


Asset Lifecycle Module **Condition Rating:** contains the values that apply to the index. The example below shows the individual rating values assigned to the “1 to 10” index. **Setting POF Thresholds** In addition to setting up Condition Ratings, it may be helpful to assign POF thresholds, per the example below. This is used by all of the tools in the Asset Lifecycle module. There are two critical fields, “End of Life and “POF” in this table: 


Asset Lifecycle Module 

- **End of Life:** placing a checkbox in this field(s) signifies what an asset’s end of life is based on it’s     condition. For example, a rating of “10” represents “Failed” so the organization may consider     this End of Life for Asset Lifecycle and Reporting purposes 

- **POF** : allows an organization to place POF values to corresponding Condition Rating. For     instance, if a perfect rating is “1” then assign a POF of “1”, and a rating of “10” indicates a POF     of 5, imminent failure, and so on. **Assigning a Condition Index to an Asset Type** : In order to use the condition ratings on assets, the indexes MUST be applied to the corresponding Asset Type. MaintStar supports multiple indexes on Asset Types, but only one can be a default (important to know for reports). Navigate to Assets > Asset Type > locate the appropriate Asset Type and click on “Condition Indexes”. From here the appropriate index and default value can be added or updated. 


Asset Lifecycle Module 

## Using Asset Assessments 

 Asset Assessments are a tool MaintStar provides to record rating and replacement information to individual assets. This is often done as part of a planned project to evaluate assets. Assessments can then be recorded in MaintStar to show an assets history of ratings. To use assessments, corresponding indexes and ratings must be applied (see above). Assessments are sometimes completed by contracted professional service providers to view and analyze the conditions of assets and provide reports of findings. It is critical that assessors use the same identification of assets as they are in exist in MaintStar. This is important as that information will need to be entered into MaintStar to become part of each assets record. Assessments can be found in Assets > Assets > Assessment Tab. Following is an example: 


Asset Lifecycle Module The assessment screen has many different fields to record data. The key fields would be: 

- Assessment Date 

- Replacement cost in today’s dollars 

- Years of life remaining 

- There are many other useful values such as rating, criticality, and others, but the replacement     cost and years of life remaining are the minimum values required When a rating score is recorded on this screen, it will update the asset rating with the current score on the main Asset Page to provide a quick glance of ratings. **Benefits of Using Assessments and Asset Ratings** Over time, capturing ratings and assessments can help an organization track an assets overall condition over time. With this information an assets degradation or improvement can be seen. The example below shows a road with Pavement Condition Index (PCI) ratings over time. 


Asset Lifecycle Module 

## Putting it all Together 

 The above has described the purpose of the Asset Lifecycle Module, the intention of the various tools, and the configuration required within MaintStar to make it all work. With this understanding, the various tools can now be effectively used. 

## Using the Rating Wizard 

 Recognizing the difficulty in manually evaluating every single asset, MaintStar provides a tool named “Asset Rating Wizard” that provides a ‘mass’ rating to assets based on the End of Life (EOL) data, as mentioned at the beginning of this document. This module can be accessed from Asset Lifecycle > Asset Rating Wizard. Given that this tool can perform bulk updates to assets, it is important that only trained and authorized individuals use the tool. The Rating Wizard consists of the following components: 

- **Criteria** : Sets which asset type or Assets are to be evaluated and rated 

- **Rules** : Uses the EOL rules contained in the Asset Type screens to measure against (these can     also be adjusted on the fly if desired) 

- **Calculated Setup** : an automated process by which assets are selected an updated en masse 

- **Manual Setup** : Allows to override asset(s) if there are exceptions 


Asset Lifecycle Module To successfully run the asset wizard, the base EOL and related data must be populated on the assets, as discussed in this document. Furthermore, a default Condition Index MUST be assigned. MaintStar understands it is nearly impossible to have data in every single field for every single asset. As such, it does it’s best to take what data is there and come up with the best rating based on the information entered. The following precedence is set within MaintStar when evaluating data: 

- Age, then 

- Meter (if present), then 

- Work Order Cost, then 

- Current Rating (if present) **Running the Rating Wizard** 

1. Navigate to Asset Lifecycle > Asset Rating Wizard 

2. Select the Criteria tab 

3. Select either a single Asset Type (must be done one at a time) or multiple Asset IDs, click     Retrieve 

4. Assets within the Asset Type will be retrieved and displayed. From here any key data to be used     by the wizard will be displayed (Age, rating, etc). 

5. Click the Rules tab 

6. This displays the default EOL values assigned to the asset type. For purposes of the rating, these     values can be adjusted directly from this screen by clicking “Edit” 


Asset Lifecycle Module 

7. When ready, click “Calculated Setup” (alternatively Manual Setup) can be used and is discussed     in the steps below. 

8. Click the “Calculate” button. This will model (but not apply) the ratings. The dialog box will     display statistics on how many assets will be changed, unchanged, or with insufficient data. 

9. Click OK 

10. The preview screen will display a grid of reasons, current rating and recommended rating. 


Asset Lifecycle Module 

11. Select “All” assets or Select individual assets. 

12. **THE FOLLOWING IS IRREVERSIBLE.** When ready, click “Apply” ratings will be applied to asset(s). 

13. To use “Manual Setup”, set the Criteria, Rules as defined above. 

14. From here a blanket rating can be assigned to assets. 

#### REGARDLESS OF CALCULATED OR MANUAL RATINGS, A CORRESPONDING ASSET RATING WILL 

#### BE RECORDED IN THE ASSET ASSESSMENT TAB OF THE ASSETS WHICH HAVE BEEN UPDATED 

 Once ratings have been recorded, a variety of reports can be executed, for instance End of Life, Condition Rating, etc. The example below shows a Risk Matrix Report showing assets at risk of failing. 


Asset Lifecycle Module **Rating Wizard with Map** At times, it may be helpful to leverage GIS data to visualize Asset data on a map, specifically when assets are grouped by or impacted by location. As with many other modules within MaintStar, the map can be enabled which uses the GIS data and displays the selected assets on the map. 

## COF Setup, POF Wizard and Criticality Wizard 

 Many organizations wish to apply asset criticality scores to assets to help identify assets of great risk (or criticality). This score provides an additional point of data for lifecycle planning. This score is not to be confused with condition ratings, but rather is a score of risk (or criticality) and possible impact should it fail. As a reminder: 

- **Consequence of Failure (COF):** a value judgement of failure using the criteria of financial,     environmental, and social impacts which can be valued differently by giving more weight to one     type of consequence than another 

- **Probability of Failure (POF** ): a determination of the likelihood or probability of failure, which is     often adjusted due to asset condition, frequency of use, environmental conditions, etc. 

- **Criticality** : the measure of risk/importance associated with an asset As mentioned above, criticality is a risk assessment process. The overall risk is determined by the probability of failure and the consequence of failure. The assets that have the greatest probability of 


Asset Lifecycle Module failure and the greatest consequences due to failure will be the assets that are the highest risk and therefore the most critical. The assets that have low likelihood of failure and low consequences if there is a failure will be the least critical assets. To calculate the criticality score for a given asset, multiply its probability of failure rating by its consequence of failure rating. **Criticality Scores (without Redundancy)** Most POF and COF values are from 1 to 5, with 1 being a low consequence and probability and 5 being a very high risk consequence and probability of failure. Following is a simple example: 

### POF=2 * COF=4 = Criticality of 8 

 Criticality Scores (with Redundancy) In addition to the above, organizations may choose to factor redundant systems into their criticality scores. The idea is that if a backup system exists then the consequence of failure is lowered. The calculation for this would be: 

### Criticality = POF * COF * (100Redundancy)/100 

 An example pump with a backup pump would reduce criticality by half, and would look as follows: 


Asset Lifecycle Module Without redundancy, the criticality would be a 4, but with redundancy, it is now a 2. As a reference, values for backups would use these redundancy factors: 

- No backup enter 0 or no value 

- Primary plus backup of 1 unit enter 50 

- Primary plus backup of 2 units enter 66 

- Primary plus backup of 3 units enter 75 

- Redundancy cannot be greater than 99 MaintStar offers two methods for assigning criticality values: Manual or via a Wizard. Using the manual option sets the POF and COF to each asset individually. This could be overwhelming with many assets. Both options are discussed below. **Running the Consequence of Failure (COF) Setup** MaintStar provides licensed tools to automate much of the data entry. The idea is to first set the Consequence of Failure (COF) for individual asset types which are then applied directly to the asset type. directly on the asset type screen. Setting COF Values to Assets using the Setup Tool 

1. Navigate to Asset Lifecycle > COF Setup 

2. Select the appropriate filters, such as Asset Type(s) – note that multiple types can be selected 

3. Click Run – this will pull in the selected asset types 

4. If the intention is to overwrite ALL COF values for particular Asset Types, click Edit on the Asset     Type and update with the desired value. 


Asset Lifecycle Module **Apply COF Values to Assets** (this is irreversible unless the Wizard is re-run) 

1. If the intention is to set or update a new COF value for the chosen Asset Type, Edit the line, enter     the “New COF from Asset Type Setup” (1 to 5 value). 

2. When ready, click Save, then “Update Asset Type” 

3. Those values will now be placed on ALL Assets within the type **Running the Probability of Failure (POF) Wizard** MaintStar provides licensed tools to automate much of the data entry. Once the Consequence of Failure (COF) has been identified for an asset type through either manual entry or the COF tool, POFs can be calculated using the POF Wizard. Setting POF Values to Assets using the Wizard 

1. Navigate to Asset Lifecycle > POF Wizard 

2. Select an Asset Type, then click Retrieve 


Asset Lifecycle Module 

3. Click the Rules tab and validate or update the factors that help to determine POF values. As a     reminder, these values are pulled from the Asset Type settings. Changing the values here does     NOT reset Asset Type settings. This is helpful for performing adjustments as needed. 

4. Click the Calculated tab. 

5. Click Calculate to Calculate POF Values based on settings above. It will display current (if they     exist) and proposed POF Values. 


Asset Lifecycle Module 

6. Click OK 

7. Either Select or Deselect rows for desired changes. 

8. Click Apply to commit the POF Values. **Running the Criticality Wizard** MaintStar provides licensed tools to automate much of the data entry. Once the Consequence of Failure (COF) and Probability of Failure (POF) values have been assessed (as identified above), the Criticality Calculation can be ran from the Criticality Wizard. **Calculating Criticality** 

1. Navigate to Asset Lifecycle > Criticality Wizard 

2. Select an Asset Type, then click Retrieve 

3. Click Preview and Calculate 

4. This screen will COF and POF values as well as criticality, some or all of which might be     incorrectly displayed, which is the purpose of this tool 


Asset Lifecycle Module 

5. Click Calculate Criticality, then OK 

6. All Criticality scores will now be calculated and committed to Assets. **Manual Assignment of COF, POF and Criticality to Individual Assets** As indicated above, these values can be assigned either through automated tools or via manual data entry. Manual entry is the least desired method as it is time consuming, however, certain situations may necessitate its use. 

1. Navigate to Assets > Assets locate the desired asset 

2. Locate the field labeled “COF”, “POF” and “Criticality” and set the desired values (from 1 to 5) *     *the “cof”, “pof”, and “Criticality” fields may need to be added to asset screen customization(s) 

3. Click Save and confirm the proper calculation is performed. 

4. Only applies the values to one asset. All assets must be individually updated if this path is used. 

## Capital Planning 

 The Capital Planning tool is a separately licensed tool that provides the ability to ‘model’ replacement dates and costs base one, some or all the factors above, such as age, meter, cost, ratings, usage and assessments. Going beyond a fixed or static replacement date, this is particularly helpful for budgeting for current and/or future year replacements based on the factors above. 


Asset Lifecycle Module **Running Capital Planning** 

1. Navigate to Asset Lifecycle > Capital Planning 

2. The Setup tab is where differing values can be used for modeling 

3. In addition to a “Default” model additional modeling scenarios can be created (discussed below) 

4. Below is a summary of the Capital Planning Setup 

- **Inflation Rate Percent:** The rate of year over year inflation to provide an adjusted     replacement cost 

- **Asset Threshold:** The desired Replacement Cost of an Asset. For instance, if this is set to     $10.00 then it will only return items over that amount. 

- **First Fiscal Year:** Returns the year in which modeling is desired. 

- **Number of Years:** Sets how many years ahead to return replacement costs. 

- **Meter Lookback Years:** Sets number of years into history to project how many miles will be     driven each year in the future. 

- **Pct Lookback Years:** Sets how many years into history to project how much the     maintenance cost will be each year in the future. 

5. Once desired values are set for the default profile, click Save 

6. Click the Fiscal Calendar tab to set Fiscal Year periods (if necessary) 


Asset Lifecycle Module 

7. Click Replacement Schedule by Assets 

8. Select a desired Asset Type 

9. To ensure all factors are considered, select all check boxes, then click Run 


Asset Lifecycle Module 

10. This will display projected replacement costs and years based on the common factors contained     within this document **Setup of Additional Capital Planning Scenarios/Models** MaintStar allows for additional models to be created whereby replacement schedules based on differing scenarios or models can be created. This is helpful for developing replacement schedules based on budgets, changing replacement requirements, or planning for the future with differing ‘start’ dates. 

1. Navigate to Asset Lifecycle > Capital Planning 

2. The Setup tab is where differing values can be used for modeling 

3. In the grid, click “Add” and establish new values, for example: 

4. Click Save 

5. Click on Replacement Schedule by Asset, select appropriate options (as above) and select     desired model to run. 


Asset Lifecycle Module 

## Asset Lifecycle (AL) Reports 

 These can be found in Asset Lifecycle > AL Reports. Below is a summary and function of the reports. 

- **Risk Matrix:** This report shows the risk (based on Criticality) of selected assets. 

- **Rating:** This report shows a summary of ratings assigned to selected assets. 

- **Alerts:** If Alerts are used and entered on Assets, this report shows those Alerts in a single     report. 

- **Acquisitions:** If the Acquistion tool is used, then this report will show all acquisitions for the     desired period. 

- **Disposals:** If the Disposal tool is used, then this report will show all disposals for the desired     period. 

- **Probability of Failure:** This summarizes all POF values for the selected asset type. 

- **Consequence of Failure:** This summarizes all COF values for the selected asset type. 

- **End of Life:** This report provides a summary of all Assets that are at End of Life. 

## Additional Reporting Options 

 As with all modules within MaintStar, custom Queries, Reports and Key Performance Indicators (KPIs) may be extremely helpful in providing results unique to an organization’s needs. Below are examples of such reports. *The KPI module is a separately licensed product 


Asset Lifecycle Module **Example of Asset Report using the KPI Dashboard Example of Asset Report using the Query Tool** 


