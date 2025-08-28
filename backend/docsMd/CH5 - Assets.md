## Enterprise Asset Management (EAMS) v15 

# Assets 

### End User Documentation 

### Update 3/1/2024 


Assets 

## Managing Assets 

 Managing enterprise Assets is a core function of MaintStar EAMS. Assets are resources of which an organization is responsible for maintaining throughout its life from acquisition to retirement/salvage. Following are some key components of managing assets: 

- **Asset** : the resource to be managed and maintained – this may be a vehicle, road, stormwater     channel, building, generator, etc 

- **Asset Type** : the category for the asset – for instance all road segments would be grouped into a     “Road” Asset Type, or all light duty vehicles grouped into a “Light Truck” Asset Type 

- **Asset Group** : to ease Work Order scheduling, assets may be grouped together, even across     Asset Types – for instance, assets requiring monthly inspection can be grouped either by type,     location or other factors 

- **Bill Rate** : a cost can be assigned for an assets use – for instance vehicles can be applied a rate     for when they are added to a Work Order LEm 

- **Asset Customization** : screens can be customized to contain fields unique to a particular asset     type 

- **Condition Index** : can be applied to assets according to industry standard asset ratings 

- **Asset History** : a summation of work order history and cost is available for each asset 

- **Asset Parts** : parts used against assets can be tracked to show what part was used and the last     time it was used 

- **Asset Warranties** : assets with warranties can be tracked to provide greater awareness to     technicians of covered assets 

- **Asset Notes and Warnings** : notifications can be applied to assets to show a warning on the     asset and/or work order, for example a vehicle may show a warning to indicate a safety     condition 

- **Meter Type** : assets can be assigned meter types to track mileage, rotations, counts, etc 

- **Work Order Asset** : asset(s) loaded onto a work order – all work order history will be tracked 

- **Work Order Meter** : as assets with meters are worked on, technicians can update meter reads 

- **Consequence and Probability of Failure** : COF and POF are industry standard ratings to show the     importance and criticality of maintaining assets 

- **Searching for Assets** 

- **Asset Reports** 

## Asset Types 

 Managing Assets requires a higher level of permission and is typically done so by system administrators. Assets are always assigned to Asset Types. Before creating or uploading assets a corresponding asset type must exist. Asset Types can be accessed from the Asset > Asset Type menu. 


Assets 

## Creating a New Asset Type 

 Access the Asset Type menu. This list will display all current Asset Types, or alternatively they can be filtered by Workgroup. To create a new Asset Type for one that does not currently exist, click the green “New Asset Type” button. Provide a Asset Type name, Description and specify the assigned Workgroup. NOTE: Asset Types can be shared across multiple Workgroups by accessing the “Filter” options in Workgroup Settings. 


Assets 

## Asset Type Details 

 Once the Asset Type is created additional attributes can be assigned. Many are advanced functions, however the following is a summary of the more commonly used fields. 

- **Auto Key Pattern:** if the     organization does not currently     have an asset numbering scheme,     this can be used to effectively start     at “1” for a given asset type 

- **Customization Class:** each asset     can have it’s own customization     screen 

- **Parent Asset Type:** Asset types can     be linked together in a hierarchy 

- **Equipment and Vehicle Flags:** used     to flag whether assets can be used     as resources on a Work Order 

- **Bill Rate:** Cost of using (not     maintaining) an asset 

- **Unit Name:** Used in conjunction     with Bill Rate (hour, mile, etc) 

- **Meter Type:** Used to specify the     type of meter used on an asset (ie     vehicle: odometer) 

- **Auto Key Pattern:** When a WO is     created 

## Creating Assets 

 Most importantly, Assets must have a unique Asset ID. Asset IDs are unique to the Asset Type. This means an Asset ID of “1” can be assigned to “Trucks” and “Roads” separately, however, duplicate “1’s” can’t exist in “Trucks” Asset Types. If there is any doubt about importing or numbering Assets (to include via GIS or import functionality) coordinate with MaintStar. To Create a New Asset, navigate to Assets > Assets and click the green “New Asset” button. As previously indicated, be sure that a corresponding Asset Type exists. Specify the Asset Type, a unique Asset ID (if “Auto Key” is not used) and provide a description. 


Assets 

## Asset Details 

 As with most screens in MaintStar, Assets have their own details page on which data can be stored. Asset screens are completely customizable and can look different from examples in this manual or in the system itself. Common Asset Details can include: 

- **Description** 

- **Account Number** 

- **Location** 

- **Ratings** 

- **Attachments** 

- **Purchase Data** 

- **Status and Sub Status** 

## Activating/Deactivating Assets 

 Assets will always have either an “Active” or “Inactive” flag assigned to them. Furthermore, they may contain sub status information to provide additional status details, for instance, “Active – In Service” or “Active – In for Repair”. Sub Status data is stored in the “Asset Sub Status” setup table which is typically maintained by administrators. NOTE: Most reports and filters will default to only show “Active” assets so this must be kept in mind. 

## Attachments 

 Attachments can be uploaded to assets. This includes images and documents. This can be extremely helpful for reference purposes. When a asset with an image is assigned to a Work Order, that image can be displayed on the Work Order (depending on customizations). As with Work Order attachments, images can be assigned as thumbnail images to personalize the screen. 


Assets 

## Asset Notes 

 Notes or Warnings can be assigned to Assets to show as alerts on both Assets and Work Orders. This can be especially helpful when unique Notes are applied to Assets. To add a Note or Warning simply enter the data into the Asset Notes field. NOTE: For these fields to display the screen customization must contain those fields AND Alerts and Workgroup settings must be configured. 

## Asset Parts 

 Assets can track part numbers, quantities and install dates. If parts are applied to a work order from inventory against an asset, MaintStar will automatically apply the parts to the asset. This can be invaluable when researching part numbers for a specific asset or even to find out when it was last used. In the event inventory isn’t used on Work Orders, parts can be manually added to the asset as a reference. To do so, go to the Asset, click on the Parts tab, click “Add”. Select the part from the inventory and save. 


Assets 

## Asset Meters 

 Assets equipped with meters can store meter data which is helpful in tracking an Assets use and for scheduling maintenance routines (Preventative Maintenance – PMs). In order to use meters on an Asset, the Meter Type must be configured (Setup Tables) and then applied to the Asset Type. The example below shows an Asset with a “Miles” meter (odometer). Once the Meter Type has been applied to the Asset Type, it can then be updated on the Asset(s) itself. To do so, locate the Asset, click on the Meter tab, then update meter information with the current meter reading. As Work Orders are created against Assets with Meters, meter data can be recorded on the Work Order itself, then it will update the Asset once the Work Order is closed. 


Assets 

## Probability/Consequence of Failure 

 Not all assets are equally important to a system; some assets are highly critical to achieving system’s Level of Service goals and others are much less so. Criticality is the measure of risk associated with an asset. Projects and activities should be prioritized based on criticality analysis in order to use limited financial and personnel resources efficiently. To determine where to allocate resources, it is important to determine which assets are the most likely to fail and the consequences if the failure occurs. Furthermore, the criticality of assets is system specific. Certain assets or types of assets may be critical in one location but less critical in another. Staff must examine the assets in their inventory carefully to determine which assets are critical and why. To determine which assets are critical, two questions are important: 

- How likely the asset is to fail (probability of failure)? 

- What are the consequences if it does (consequence of failure)? MaintStar has the ability to track and calculate criticality based on the POF and COF. Typically, “Criticality = POF x COF”. Assets have several modes of failure beyond simple mortality and there are many factors impacting the likelihood of a given asset failing. The factors taken together provide an overall assessment of the asset’s probability of failure and can be represented with a numerical rating scale (e.g., 1 to 5 or 1 to 10) ranging from a very low probability of failure to a very high probability of failure. In assessing risk, the lower number is always for lower probability and the higher number for higher probability. A zero probability is not used because no asset has virtually zero risk. There is always at least a small chance the asset could fail. After the likelihood of failure of each asset is determined, it is important to determine how bad a failure would be. This determination of consequence of failure involves the consideration of several tangible and intangible factors and can also be expressed numerically using a similar rating scale (e.g., 1 to 5 or 1 to 10) as probability of failure. In the example to the right, the POF is 1 and the COF is 5 giving the Asset a criticality of 5. 


Assets 

## Asset History 

 As Work Orders are created and closed, Assets are automatically updated with this information providing research and lookup capability. In addition to Work Order details, a summation of Work Order cost is provided. 

## Creating a Work Order from an Asset 

 Assets can be assigned a multitude of ways, from a Work Order, from the Map (if GIS integration is utilized) or from the Asset itself. To create a Work Order from the Asset, simply click the “Create WO” button from the applicable Asset. Once the Work Order is created a dialog box will provide confirmation as well as a link to the Work Order. 


Assets 

## Asset Filters and Searches 

 As with Work Order lookup, finding Assets can be achieved using the Asset Filter tool in the Asset > Asset list. In addition to looking up Assets, custom Asset filters can be created on an individual user basis. The example to the right shows a basic search for the word “sedan” from all assets associated to that particular Workgroup. To Save the custom filter simply click “Save As”, and provide a name for the search. 

## Standard Asset Reports 

 Asset Reports can be accessed from the Assets > Asset Report screen. These are basic fixed reports and are often supplemented through the use of “Reports and Queries” when special conditions are required. Most frequently used reports in this section include: 

- Recap: A count of Assets by     Asset Type Type, Location or     Department 

- Asset Detail: A detail of assets,     which can be filtered and     exported 

## Duplicating Assets 

 Assets of the same Asset Types can easily be duplicated making Asset entry easier. As with most Asset changes, this is dependent on privileges assigned to users. To duplicate an asset, go to Assets > Assets, find the appropriate Asset and click the ellipses icon. When an Asset is duplicated, a new Asset ID MUST be assigned. 


Assets When the duplication process is started, a prompt will provide the ability to copy other pertinent Asset data. This is optional and helps to reduce key strokes. Once the duplication is complete update the remaining Asset data. 

## Deleting Assets 

 MaintStar recommends extreme caution when deleting Assets. This feature should only be used when a mistake is made to an Asset. If an Asset is sold, salvaged, damaged beyond use, the appropriate action is to “Deactivate” the Asset. If the choice is made to delete the Asset, locate the Asset to delete, click the ellipses and select “Delete Asset”. 


