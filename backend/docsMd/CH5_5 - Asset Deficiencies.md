## Enterprise Asset Management (EAMS) v15 

# Asset Deficiencies 

### End User Documentation 

### Update 3/1/2024 


Asset Deficiencies 

## Asset Deficiencies 

 MaintStar has an optional (licensed) module called Asset Deficiencies. With this module an organization can record field deficiencies as Assets with the goal of creating a Work Order against said deficiency. An example could be a recurring pothole on a road that needs significant resources to resolve. While submitting a Work Request could suffice, that simply addresses the immediate fix, not resolving the problem. In addition to recording the deficiency as an asset, it can also be connected to GIS so an organization can view the records on a map. Often deficiencies are recorded by Code Enforcement or Inspectors which can then be assigned to work crews or engineers to plan and perform the work. To utilize the Asset Deficiency module: 

- It must be licensed 

- Deficiency Asset Type(s) must be created or previously created 

- Deficiency Types (Activity Codes) must be created or previously created 

- Optionally connected to GIS 

## Benefits of using Deficiency Module 

 Tracking deficiencies has proven to be a challenge for many organizations. Often they will rely on third part tools or applications for tracking. The result is an inefficient method of collecting, analyzing and responding to the needs of the organization. Below are examples of common “As Is” and MaintStar “To Be” workflows. Typical Workflow: MaintStar Workflow: Deficiency Observed Deficiency Documented in Third Party App Deficiencies Collected and Analyzed Work Orders Created and Assigned GIS Updated with Deficiency Data Deficiency Updated in WO and GIS Deficiency Closed Deficiency Reports Generated Deficiency Observed Deficiency Asset Created in MaintStar, GIS Updated Immediately and Reports available Work Orders Created and Assigned Deficiency Updated in WO and GIS as it is updated and closed 


Asset Deficiencies 

## Deficiency Example 

 The example below shows a recorded deficiency added by Flood Inspectors as an Asset. In addition to Asset Details, pictures are added and it is plotted on a map and uploaded to GIS. 

## Preparing the Environment for Deficiencies 

 Asset Type: Before the module can be used, it must be set up. As described above, once licensed, an Asset Type must be set up and then GIS (if used). To set up the Asset Type, navigate to Assets, Asset Type, click New Asset Type. Provide the following base information: 


Asset Deficiencies 

- Asset Type Name 

- Asset Type Description 

- Asset Type Workgroup 

- Active Flag 

- Auto Key for Asset ID creation 

- Set Geometry Type to Point (for a pin) or Linear (for     a line) **Activity Code:** In order to classify Deficiencies by type (potholes, inspections, code issue, etc) Activity Codes must be added to the Activity Code table. This table is located in Setup > Tables > Activity Code. NOTE: Appropriate permissions must be applied to the logged in user to access setup tables. **GIS Integration:** Can be set up to push the recorded deficiencies to an organization’s GIS service. This is helpful to track the locations of multiple deficiencies which in turn can aid in the planning process. Before integration can be completed both MaintStar and the organization’s GIS staff should be engaged. Below is a screenshot of the GIS setup showing the options often selected during the integration. NOTE: Each environment is different. The below is ONLY an example. 

## Recording a Deficiency 

 To record a Deficiency, do the following: 

- Open Work Order 

- Turn on the Map (double headed chevron) 


Asset Deficiencies 

- Locate the Deficiency Marker (black pin)     and place on the map 

- Once the Marker has been placed a dialog     box will appear 

- Set the Deficiency Type (Activity Code     previously created) 

- Provide a Description, Notes and     Attachment (if desired) 

- Click Create Asset 

## Creating Work Orders from Deficiencies 

 The whole point of this effort is to document then assign work from the discovered Deficiencies. Users have a choice of how to create the Work Order: from the map using a selection tool OR from the Deficiency Asset itself. Creating a Work Order from the Deficiency Asset: This can be used to create Work Orders one by one. 

- Click Assets > Assets and locate the Deficiency Assets 

- Click the “Create WO” button 


Asset Deficiencies 

- Once the Work Order is created, it will present a confirmation dialog box with the WO Number **Creating a Work Order from the Map Asset:** This can be used to visually locate a particular Deficiency Asset and create a Work Order from the map. NOTE: to use this capability GIS integration must be set up. 

- Click the Map icon to open the map     (double headed chevron) 

- Make sure the appropriate map layer is     identified 

- Locate the Deficiency Asset and click the Green     “Select Asset” button 

- Repeat additional Assets if needed 

- All selected Assets will be placed into the selection     ‘cart’ 

- Click the selection ‘cart’ and select all or some of     the Assets for which a Work Order is required 

- Click the “Create WO” button 

- Once the Work Order is created, it will present a     confirmation dialog box with the WO Number **Creating a Work Order from the Map Filter:** As Asset Deficiencies start to be created, it can be confusing to find the appropriate Deficiency Type for which a Work Order should be created. For instance, the Deficiency Asset Types might contain potholes, debris, graffiti, etc. But if only 


Asset Deficiencies “Debris” is to be worked on, then the Map Filter tool can be used to find all of those Deficiencies by their Type. NOTE: to use this capability GIS integration must be set up. 

- Click the Map icon to open the map (double     headed chevron) 

- Make sure the appropriate map layer is     identified 

- Click the Select Asset icon (three lines) 

- Click the Magnifying Glass 

- At this point filter clauses can be applied 

- Select the appropriate GIS Layer 

- Click Add Clause 

- Define a Clause, in this case, Deficiency Type     (Activity Code created previously) 

- Select “Unique Value” then select the desire     value 

- Click Run 

- All selected Assets will be placed into the     selection ‘cart’ 

- Click the selection ‘cart’ and select all or some of     the Assets for which a Work Order is required 

- Click the “Create WO” button 

- Once the Work Order is created, it will present a     confirmation dialog box with the WO Number 


