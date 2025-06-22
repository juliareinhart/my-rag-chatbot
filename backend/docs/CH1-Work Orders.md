## Enterprise Asset Management (EAMS) v15

# Work Orders

### End User Documentation

### Update 3/1/2024

Work Orders

## Understanding the Workgroup Concept

Workgroups are a new concept in version 15. For customers on earlier versions of MaintStar, it is similar to “Modules” which separated the system into different groups of assets that different agency departments would be working with. Each of these modules had their own set of work orders and Preventative Maintenance routines (PMs). In earlier versions, the modules were preset in the system for Water, Storm Water, Streets, Sewer, Parks and the Regular work order. In MaintStar version 15, MaintStar allows for the creation of functional groups, called “Workgroups” which can be defined to meet your organizations business needs. While these workgroups are intended to provide specific access to specific groups, resources can be shared across them. For instance, if a street crew also maintains storm water assets, they can be combined or shared across workgroups. Workgroups are created in the setup module and will be described in a different document.

## Logging into MaintStar (using MaintStar Security)

1. Browse to your organizations assigned URL

2. Enter User ID and Password a. If your organization has multiple profiles, select the ‘Profile’ you want to log into from the drop down.

3. Press ‘SUBMIT”. You will be directed to the Home Screen.

## Logging into MaintStar (using your Organizations Single Sign On – SSO)

1. Browse to your organizations assigned URL

2. Click the Single Sign On Link

3. You will be directed to your organizations SSO page at which time you will enter your organizations User ID and Password

4. Upon authentication, you will be taken to the Home Screen.

Work Orders

## System Home Screen

The Home Screen is the basic landing page after successfully logging into MaintStar. It provides high level situational awareness and provides links to take a user to necessary resources. Following is a brief overview of the Home Screen.

- A Hamburger icon in the upper left toggles the menu for full width or condensed view.

- “Full Menu” expands the menu. The label will change to “My Menu”. Click on “My Menu” to change to a short version of the menu.

- The Arrow in the upper right, opens a sliding panel. The panel can be set to be the dashboard or a map. Note that the dashboard automatically displays data for the workgroup selected in the workgroup dropdown. Hold down your mouse to stretch the map wider.

- In the lower left corner is the Workgroup selection box.

- The ‘power’ icon in the far lower left is the logout feature which will end the logged in session.

Work Orders

## Navigating Menu Items

The Main Menu is located on the left side of the screen. Each item will expand and collapse when clicked. Since menu items are controlled by security and licenses, not every menu item will be available to organizations or users. Following is a summary of each menu item that may be shown:

- **Home** : presents the home screen

- **Work Order** : contains all elements of Work Orders, to include Preventative Maintenance (PM) tools

- **Work Request** : contains all elements of Work Requests which are items commonly submitted by customers/residents/employees

- **Asset** : lists all assigned assets (vehicles, buildings, streets, etc) assigned to a Workgroup

- **Asset Management** : licensed option which includes Capital Planning tools, Budgeting, etc.

- **Inventory** : provides inventory controls, warehouses, inventory transactions, etc.

- **Reporting** : provides resources for reporting and queries

- **Work Planning** : licensed option for conducting detailed resource and activity planning

- **Purchase Orders and Invoicing** : licensed option for creating requisitions for resources

- **Fleet** : licensed option for advanced Fleet operations

- **Setup and Security** : administrative tools

## Work Order Screens

The Work Order screens are the most used tool for many users. To access the Work Order screens:

1. Click Work Order to expand the menu

2. Click Work Order again to view work orders NOTE: There are two different user views to the work order screen. A **Grid view** places a table at the top of the screen and the selected work order from the table is shown at the bottom of the screen. A **Card view** shows the work orders from the filtration in cards to the left of the work order. An icon in the lower right corner of the screen allows for toggling the views. The views are stored for each user as a preference. Below are examples of the differing views.

Work Orders

### Work Order List View

NOTE: The work order that is highlighted in the list is displayed in the Work Order section below. The arrows move you up and down through the work orders in the search list. To filter the list, click on the word ’filter’.

### Work Order Card View

Work Orders

## Work Order Tabs Overview

Work Orders can contain a large amount of information. It is important to understand some of the options that are available through customization and configuration. These options are broken into a series of tab sections across the top.

- **Details** : primary work order screen

- **LEM** : stands for Labor, Equipment and Material which are all listed together on the same screen

- **Attachments** : stores pictures and files attached to the work order

- **Asset History** : lists all work orders created against the assigned asset

- **Job Site:** indicates where the work is being done by address

- **Requestor:** If the work order started as a request, the information from the request will be here

- **Other Tabs:** The double arrows open a drop down with additional tabs o **Notifications** lets you activate a variety of notifications to staff for the work order o **Plan** Allows you to record estimated costs and compare them to actual costs o **Log** records history of data changes to the work order o **Status** records changes to the work in progress and work order assignment and other related events o **Issues and Actions** records cause and solutions about the work order

## Work Order Details (main Work Order screen)

The details section contains basic information about the work order such as issue date, target date (expected finish date), Work order closed date, work order type and more. All screens are customizable to each organization and workgroup. Following are some key elements of the work order screen:

- **Issued** : date the Work Order was created

- **Closed** : date the Work Order is closed

- **Assigned To** : primary owner of the Work Order

- **Crew Leader and Supervi** sor: 2nd^ and 3rd^ level owners of the Work Order

- **Activity Code** : the primary activity of the Work Order (ie “Cleaning”, “Concrete Maintenance”, etc) - Multiple activities can be assigned to a Work Order

- **Account** : if configured, provides budgeting information for Work Orders

Work Orders

- **Work in Progress** : status for Work Orders (ie “New”, “In Progress”, “Delayed”)

- **Assets** : lists the assets assigned to the Work Order – multiple assets and types may be assigned

- **Tasks** : if configured, lists tasks assigned to each or all assets (ie Step 1, Step 2, etc)

## Assets (assigned to Work Orders)

Assets are assigned to Work Orders to indicate to which resource work is being performed. You can use either display method for different workgroups. There are many ways to add Assets to Work Orders and it depends on configuration. Assets can be added to Work Orders by clicking “Add Asset” on a Work Order or they can be added from the map which is detailed below. As a reminder, multiple assets and types can be added to a single Work Order. Adding from the Work Order Screen:

Work Orders

## Tasks (assigned to Work Order Assets)

Tasks can be assigned to assets that list specific things to be completed against an asset. Tasks are typically configured by system administrators during setup and maintained by staff. As tasks are completed, they can be “checked” off to show progress. Tasks can be more complex, such as asking for a rating to be recorded for the asset condition, or to update a meter reading. How tasks are set up will be described in the setup document.

## LEM Labor, Equipment and Materials

LEM entries are added to Work Orders to document the resources used to complete a job. The purpose of this is to track the labor hours and cost, and parts and equipment used. There is no limit to the number of LEM lines applied to a particular Work Order. Once the data has been added, reports can then be generated for analysis. All LEM resources are set up and maintained by MaintStar and organization system administrators. To add a new LEM line:

1. Start a new entry with the add LEM button, select type of entry. a. Labor – a person b. Equipment – Vehicles or other equipment used c. Material – parts and materials from your inventory d. Miscellaneous costs e. Work Quantity (If using Work Planning) f. Crews of people and equipment (Must be created in Setup) g. Parts Kit (Must be created in Inventory)

2. After type selection, select code identity for the person or contractor or crew or part etc.

3. At the Right on each line there are optional fields for Location, Management Unit and Activity

Work Orders NOTE: Management unit (previously called Administrative System) and Activity are now on each LEM line providing MULTIPLE activities in the same work order. Set the management unit and activity on one line of the LEM, and it will repeat on successive lines.

## Attachments

Attachments can be added to Work Orders from the Attachment tab. Most common document types are supported. From this screen the thumbnail image can be selected.

## Asset History Tab

The asset history tab will list the assets in this work order which provides a list of work orders that have that asset appear below the asset list, with links to each asset.

Work Orders

## Requestor

If the work order originated from a request made with the MaintStar Work Request, the information from the request will be stored here. If the work order did not originate from a request, you are free to record information about the main contact or informal request here.

## Job Site

The Job Site tab can be used in conjunction with the map to record a physical address for the work. This is optional as some types of work can be referenced by the location code on the header tab. Job Site can be set by typing the address or selecting from the map.

## Displaying the Map

A map is provided to provide a visual for Work Order and Asset locations. If the organization chooses to integrate with their GIS, additional capabilities are provided. To view the map, click the double arrows to open the panel. When the panel is open click the icon with the down arrow.

Work Orders

## Quick Look Up

In the upper right of the screen there is a magnifying glass. Click on the magnifying glass and a field appears. This field searches common elements in the Workgroup such as Work Order number, Asset ID, parts, etc. As characters are typed matching results will be listed. Click on the one you are looking for and it will open. NOTE; This takes the place of the F10 lookup from version 14 and earlier.

## Create a New Work Order

To create a new work order, click ‘New WO’. A confirmation popup will appear in the upper right. The work order screen will have many fields to complete. The fields that display are customizable to meet organizational needs and are configured by system administrators.

## Closing a Work Order

Closing Work Orders is typically dependent on organizational controls. Notwithstanding, once a Work Order has been completed and updated, it can be closed by clicking the check mark icon.

Work Orders

## Printing or Emailing a Work Order

Click the printer icon to print or email the Work Order. Printing a Work Order results in a PDF being created. If “Email” is chosen, the user will be prompted to enter or select email addresses from the system:

Work Orders

## Map Measurement Tool

When using the map, it is also possible to measure linear and polygon distances/areas for use a reference. To activate the tool, open the map, click on the arrow icon, and draw the line or polygon. Once drawn, distances, perimeter and area will be displayed.

## Frequently Asked Questions

### How do I log into MaintStar using SSO?

Click the SSO link on your organization’s login page. Enter your usual credentials, and you'll be redirected to the MaintStar home screen.

### Can I create multiple Workgroups?

Yes. MaintStar v15 supports multiple configurable Workgroups, allowing for flexible access across departments.

### What should I do if a Work Order doesn’t save?

Check if required fields are missing or if you have permission to create Work Orders in that Workgroup.

### How do I create a Work Order?

Click on **Work Order > New WO** from the main menu. A confirmation will appear, and a new Work Order form will load. Fill out the required fields such as issue date, assigned staff, and asset. Click the checkmark to save.

## New User Setup

1. Log in using your assigned credentials or SSO.
2. Select the appropriate **Profile** (if prompted).
3. From the Home Screen, select your **Workgroup** from the bottom-left dropdown.
4. Navigate to **Work Order > New WO** to begin entering work.
5. Set user preferences:
   - View mode: Grid or Card
   - Dashboard/map toggle
   - Notification settings

## Troubleshooting

### Problem: I can't log in

**Solution**: Make sure your credentials are correct. If using SSO, check with your IT department. Also, ensure you're accessing the correct URL.

### Problem: The map doesn't display

**Solution**: Ensure your browser allows pop-ups and has internet access. If your organization uses GIS integration, verify it’s enabled in your profile.

### Problem: I don’t see the “Work Order” menu

**Solution**: Menu items are based on security roles. Contact your MaintStar administrator to verify your access.
