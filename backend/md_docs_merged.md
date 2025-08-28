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

## Enterprise Asset Management (EAMS) v15

# CM (Corrective

# Maintenance) Work

# Order Templates

#### End User Documentation

#### Update 1/20/25

CM Templates

## Background

Maintstar has a new feature for Work Orders. It is a template which holds a configuration for common work orders that you perform periodically. It is like the PM template with one big difference. The PM template holds configuration for Work Orders, but it is tied to frequency and to a schedule. The purpose of the PM template is to create repeated Work Orders on a cyclical basis. The new CM Template has no frequency and is not tied to a repeated schedule in any way. The CM Templates can be created ahead of time and saved. You can have as many CM templates as you like. These are stored in the CM template section on the Work Order menu. You can apply them for a work order whenever you want. Think of the CM Templates as a library of common work orders which you can select and create as needed with much of the work order already filled in. MaintStar still has a Work Order duplication feature. If you used the duplication feature often, you can now create a template and build the work order from the template rather than searching for a previous work order to duplicate from.

## Instructions

CM Templates

## Creating the CM Template

The templates are created and stored in the Work Order>CM Template section. Create the CM template with the configuration you want in the resulting Work Oder. You can set things such as:

- Work Oder type

- Workgroup

- Priority

- Work In Progress code

- Text instructions in either o The Wo Summary box, or o The Asset Work Description field, whichever you use.

- You can enter estimated hours and costs

- You can enter LEM or fill the Lem from a Crew.

- You can include attachments, and you include tasks and checklists.

- Whatever you create and save in the CM Template will be added to the work order you create from the template.

## The Asset Type Tab

The asset type tab allows you to list asset types that this template could be used with. This is optional. If you do not associate any asset type with the template it will be available for any asset types. If you do associate the template with one or more asset types, it will be available to use ONLY with those types.

CM Templates

## Making a Work Order from a CM Template

There are 2 ways to use the CM Template to make a work Order. o Start from an asset screen o Start from the Work Order Screen

## Starting from an Asset Screen

You can start the work order from the asset screen.

1. Select the asset for your work order by locating it in the Asset section.

2. Click the Gray ‘Create WO’ on the tool bar of the asset.

3. Select the CM Template from the drop down

4. Click the green New CM Work Order” button, a new work order will be created with all the elements from the CM Template. (There is also an option to create a new PM work order. Select the Pm template them click New Pm Work Order)

CM Templates

## Starting from a Work Order Screen

From the work order screen,

1. Click the Green ‘New WO button’ will open as usual with nothing from a template prefilled.

### 2. If you click “more” a second popup window appears.

3. A new work order will be created from the template. This Work Order will be filled with all the field values you have in the template. If you need to change any values, you can edit the work order after it has been created.

## Enterprise Asset Management (EAMS) v15

# Preventative

# Maintenance (PMs)

#### End User Documentation

#### Update 3/1/2024

Preventative Maintenance (PMs)

## Preventative Maintenance (PMs)

Preventative Maintenance (PM) templates and schedules allow organizations to schedule and plan common routines that result in automated Work Order creation based on time and/or meter frequencies. For instance, if an organization performs oil changes on vehicles at 3 months or 3,000 mile intervals, PMs can be created to automate those Work Orders once the criteria has been met. Alternatively, annual building inspections can be set up to automatically create Work Orders based on a day/date combination. When setting up PMs, it is important to understand some common elements:

- **Templates** : contains all data related to the PM, such as frequency, tasks, assets, rules, etc.

- **Frequency** : defines how often or at what cadence the PMs will be launched, either via calendar, meter, or both

- **Fixed** : a fixed schedule will always run on a fixed date, no matter what, ie “First of every month”

- **Floating** : a floating schedule can run a defined number of days since it last ran, ie, “Every 90 days”

- **Schedule** : contains the assets and the critical “Last Due Date” of a template

- **PM Issue WO** : how PMs are launched (either automated or manual)

## PM Menu

The PM menu can be accessed from within the Work Order, PM Template menu item. In this menu are three important PM Tools.

- **PM Template** : contains all setup information for individual PMs

- **PM Reports** : contains predefined PM Reports such as “Due Soon”, “Overdue”, etc

- **PM Issue WO** : primary means for launching the PMs manually or configuring batch issue

Preventative Maintenance (PMs)

## PM Templates

PM creation begins with “templates” which is used set up and build PM Schedules. Templates hold the task, frequency Scheduling rules and other information about a PM service. A template combined with assets are the raw materials needed to create a PM schedule. As with all areas of MaintStar, screens are very similar to ease navigation. Main elements of the PM Template screen are:

- **Details** : contains primary setup information on a template, very similar to the Work Order detail page

- **LEM** : as with the Work Order screen, Labor, Equipment and Materials can be populated on the schedule

- **Tasks** : tasks can be predefined – this is especially useful for inspections

- **Frequency** : sets whether it’s daily, weekly, monthly, annually or even by meter

- **Rules** : sets whether it is a fixed or floating schedule

- **Schedule** : contains the assets

## Creating a New Template

1. In the Template menu, under Work Order click ‘New Template”, a pop-up will appear. Type in a name for the template, and a description. NOTE: You will see the name of the work group you are currently in as a reminder

2. Click Create to save.

3. Fill in the various fields as done with a work order to have by default. These values will be prepopulated. If a field is left blank, it can be filled in on the work order itself after it is issued.

4. Work Order ‘instructions’ can be set in two ways. They can be typed into the ‘WO Description’ box or tasks can be created with the task function. There is a check box below the ‘WO Description’ to activate this process.

5. Click Save.

Preventative Maintenance (PMs)

## Setting Frequency

The frequency tab is where to set the rate of occurrence for the PM. This is referred to as when the PM will be “Due”.

### Calendar

The Calendar section sets occurrence of the PM on a frequency of days, weeks months and years. Type in the number and select the unit such as 3 – month, 1 – year. When this is done, the ON Field will become active. The “ON” allows to set a specific day, or first Monday or last Friday etc. for Month unit. For weeks, you can select which day of the week. Days and years do not have an ‘On” choice. They will be calculated based on your start date, which is set later in this example. The calendar is the primary scheduling frequency for most PMs. It is reliable and repeatable.

### Meter

If there is equipment that is metered, production equipment etc., you can include a meter in the PM frequency. You must first have the intended vehicle or equipment set up with a meter, and you must have a process in place for the meter reading to be taken and recorded regularly. You may have the asset meter updated automatically if you have the system linked to a vehicle fueling system which records updated meter values at fueling. If your intended assets for this template have a meter you can set the meter frequency here. Select the meter type from the drop down. Meter types are set up in the setup module Setup>tables>meter type.

## Rules

The frequency tab sets the basics for frequency interval of the PM. The rules tab allows you to make sophisticated modifications to the frequency schedule. The Fixed / Floating Radio buttons control how the PMs from this template will issue. Fixed – PMs will remain fixed on their original schedule pattern. From issue date to issue date. For example, If you

Preventative Maintenance (PMs) start a PM for the first Monday of every month, on a fixed schedule, It will be due the first Monday of every month consistently. It is recommended to use the fixed schedule in most cases. **Floating schedule** This calculates the next due from the last CLOSED date of the service to the next issue date. This means if you opened a monthly service on the first and closed it on the 20th of the month, the next service would calculate the month frequency from the Closed date of the 20th to the next issue date of the 20th of the next month. This would be useful for services that are not critical. The system will calculate based on your ability to close out the PMS. This means that you may not accomplish 12 monthly services over the course of a year. Below the fixed and floating radio buttons are two dropdowns that will reschedule PMs which would happen to fall on a Saturday or Sunday. You can ‘Pull’ the pm back, up to a week or ‘push’ them ahead.

- The Section Labeled “Don’t create this PM between” Lets you set a date range in which no PMs will be generated.

- The checkbox at the bottom of the screen is very important to understand. When the check box is unchecked, the system will wait for one PM service to be completed before the next one will be generated. If you check the box, the next service will be generated according to the schedule even if the current PM is still Open. Note: If you only want one open pm for a service to be open at a TIME, LEAVE THE BOX UNCHECKED. On the right, the create work order checkbox should be checked.

## Template LEM Tab

On the LEM Tab it is possible to add Labor, Equipment and materials to the template. These entries will be brought to the work order automatically when the work order is issued. You add entries here in the same way they are added to a work order. Add New creates a single-entry line. Add crew – allows pre-made crews to be added as a group. Add Kit – allows pre-made groups of inventory materials.

Preventative Maintenance (PMs)

## Tasks

The tasks tab allows you to add tasks to the work order. The ‘add task button lets you select a task that has been created and saved from the setup section Tables>Task Id. The ‘add row’ allows you to add a task on the fly. Tasks will allow the user to mark a checkbox when the task is done. The system will stamp the completed time and date automatically.

#### Adding Tasks

On the task tab, you can add free entry tasks (created on the fly) with the “add Row” The “Add Task” will let you select from a list of pre-built tasks. Note the “Nesting” will be marked as N1 automatically. Nesting will be described separately in this document. N1 (meaning Nesting group1) designates a PM that has one service cycle that repeats. “Add Checklist” allows you to add in lists of several tasks saved together in a list. The checklists are created and saved in the Work Order menu section “Checklist” The ‘Required’ check box, means that this task must be marked “done” for the work order to be closed.

## Nesting

The Concept of Nesting is very simple. Example 1 For some assets you have only one PM service, let’s say you do this once a month. Every month you do the same service over and over. That is a single repeated service.

Preventative Maintenance (PMs) **Example 2** For other assets they require different levels of service. Let’s say you do tasks one and two every month. Then every 6 months you do something more, task one, two and three. Then once a year you do something more, task one, two three and four. Example 2 would have a different PM template for each of the three levels of service, the monthly, the 6 months and the yearly. If this was built with 3 templates, each would produce PMs at their given frequency. When the monthly and 6 months PMS would be due on the same month, you would have 2 PMs. Likewise, when the yearly, 6 month and monthly fall due together you would have 3 Pm work orders created in one month. You don’t typically want multiple PM work orders for the same assets at the same time. Nesting is a way to solve this problem by giving you only ONE PM service per period. The shortest frequency determines service period so this example nested would look like this: Service period Pm service 1 monthly 2 monthly 3 monthly 4 monthly 5 monthly 6 6 month 7 monthly 8 monthly 9 monthly 10 monthly 11 monthly 12 yearly MaintStar version 15 there are two different ways to accomplish this with nested services. The first way is to have separate templates for the monthly, 6 month and yearly services. Each written with different instructions. MaintStar will switch out the templates according to the service period. This is the way MaintStar version 14 and earlier worked. If you had templates set up this way, MaintStar 15 will be able to import them and the services will continue just as you had before. The new way in version 15 is to have only one template but use the new feature of tasks. You can trigger which tasks should be shown on different nested schedule frequencies. Both methods accomplish the same result.

## Nesting Based on Different Templates

Following is a monthly template with nesting configured to switch in a 6-month template when the monthly occurs 6 times (6 months), and to switch to template named Hydrant yearly when the base monthly occurs 12 times (once a year).

Preventative Maintenance (PMs) New to Version 15 is nesting using tasks instead of switching templates. Link tasks for each service instruction to the template, then set up the frequencies for the services in the nesting tab, set the task tab to set the tasks to trigger by frequency.

1. Set up frequencies in the Nesting tab, (The same way as described for the other method). However, you DO NOT link in separate temples for each frequency.

2. Once you have the frequencies set up in the nesting section, go back to the task tab.

Preventative Maintenance (PMs)

3. Add in tasks. It is best to put them in a logical order. Put the tasks that are in the shortest frequency at the top and work your way down to the next NEW tasks and so on. You only need to put the tasks in once. When you have the tasks entered, select the nesting drop down on the right for each. All the tasks that are for the shortest frequency will be set to n1. Then the tasks that add to the n1 tasks for the next higher frequency should be set for N2. The next higher frequency tasks should be set for N3 and so forth. This method is cumulative, N1 is your base set of tasks. These appear on every frequency cycle. The N2 tasks add to the n1 and so forth. As the PMs are issued the system will now add these tasks to the PM according to this schedule.

## Scheduling

Assets and schedules are assigned to the template on the scheduling tab. Locate the template, open the scheduling tab. The top section of the screen is where to link assets to the template. You will also add in the last due date for each asset or group of assets. This is necessary. The ‘Last due date’ will allow the system to calculate when the service is due again. Last due date + frequency= next due date To select the asset line, click on the schedule number. The line will turn blue to show it is selected. If you click on the asset id you will leave this screen and go to the detail screen for the asset. When you

Preventative Maintenance (PMs) select an asset in this manner, showing the line blue highlighted, the details appear in a schedule box below.

1. Add an asset to the template using the ‘Add Asset” button. In this example we are working with HVAC units. Select an HVAC and save. If you want to have several assets on the same PM work order, select “Add Group” the group pop up will give you a choice of selecting a pre-made group of assets or selecting several assets together on the fly Note: The template can be used to make many PMs with different assets. When you add multiple lines of assets, each line will create a pm.

2. If the asset line has only one asset, it will be a single asset pm.

3. If the line has a group of assets in it the pm will be created with all the assets in the group on the same PM.

## Issuing PM Work Orders

There are 3 ways to issue PM Work Orders:

- Create WO from the PM Schedule Screen – if there is not already an open PM Work Order, the green “Create WO” button can be pressed to launch PMs

- PM Issue WO: Here you can preview PMs due now or coming due in the future. You can select the preview with many criteria. You can select the previewed PMs with a checkbox and issue them.

- Batch Issue Setup – This screen allows you to set up conditions for PMs to be automatically generated. You can manually issue a batch as well.

Preventative Maintenance (PMs)

### Create WO from the PM Schedule Screen

The fields at the top of the screen allow you to select workgroup and other parameters. The fields on the right allow you to select what will be COMING due in the future by date or other parameters. The Preview button will display PMs that are due or coming due based on your selections. When you have made your selection click ‘RUN’ to see your results. If you want to issue one or some of the PMs, click the checkbox that is to the left of the line, then click the “Create WO from the selected Rows” button and the work orders will be created.

### Batch Issue Setup

This section allows you to set up timers that will issue your Pm work orders automatically for you. This new feature in version 15 is designed to make your life easier. To set up a Batch schedule:

1. Select the work group

2. Set time periods to run:

3. Weekly or Monthly

4. Which days to run

5. What time to run

6. Emails of people to be sent a report of each run

7. Optional fields in the upper right allow you to select PMs not due now but coming due.

Preventative Maintenance (PMs)

8. Save the schedule and the system will automatically issue PMs based on these settings. NOTE the schedule will be executed on the SERVER time shown the screen. Please make your settings accordingly. Run Now will execute this batch manually.

## PM Log

The PM Log allows you to view a report of Pms that have been issued. You can select a date range and one or several different workgroups. Select run to generate the report on screen. Print will download a copy to print.

## PM Reports

The PM Report section:

- Due Service – What Pms are due now?

- Work Order Review – Work orders made from Pm schedules and their status.

- Template Review – Shows what templates have been created for each workgroup

- Overdue PM Wo Report - Pm Work Orders Open for 1 to 30 days, 31 to 60 days, 61 to 90 days and over 91 days.

- PM Due Soon Report – Pms coming due in the future

- Projected Cost – Projected costs of PMs.

Preventative Maintenance (PMs)

## Enterprise Asset Management (EAMS) v15

# Work Request and

# Portal

#### End User Documentation

#### Update 3/1/2024

Work Request and Portal

## Work Request

The MaintStar Service Request Module is a licensed resource and is a versatile, and user configurable web-based application that allows service requests to be created and submitted. Once submitted they can be held for review, and approved requests can be turned into actual work orders in the MaintStar system without having to be re-entered. Work Requests can be entered or submitted via a MaintStar Portal, the Mobile Citizen application, or by staff (usually as a result of phone calls/emails). The system has been designed to serve 3 different audiences of users:

- **Internal Users** - An Internal user would be an individual who works in house for the organization. This individual can use the system as a quick and easy way to create work requests. The Internal User might be a maintenance staff person, a maintenance clerk, or a non- maintenance person employed by the organization to request services from the maintenance department.

- **External User** - An External User would be an individual from outside the organization who needs to submit a request for services. In the case of a municipality, an external user would be a citizen from the community. The system will allow an external user to create a user profile and log in, or request services anonymously.

- **Administrative User** - an administrative user would be an authorized individual who sets up the configuration of the module, controls customization of screens, and the rights of the internal and external users. The administrative user can also view and control and create reports about the actual requests generated in the system. The Work Request screen is located under the Work Request menu. Work Request menu items consist of:

- Work Request: Similar to the Work Order screen, this lists all Work Requests submitted/created. NOTE: these are not yet assigned Work Orders, these are just requests

- WR Settings: contains all the settings for Work Requests, Portal, Notifications, etc

- Customers: a listing of all registered customers (submitters)

- WR Reports: predefined WR reports

Work Request and Portal

## Viewing Work Requests

Work Requests can be viewed from under the Work Request, Work Request menu. The look of feel of Work Requests is very similar to Work Orders. Work Requests can be viewed in either the Grid or Card views by activating the icon in the lower right corner of the screen. Common Work Request tabs:

- **Details:** is the main request screen

- **Assets** : can be used to add assets to the request before it is made into a work order. Note, you can also have an asset field on the main request screen if you want your requester to select an asset.

- **Related** : can be used to associate other requests that are like this one.

- **Attachments** : is where uploaded pictures will be stored

- **Create WO:** turns the request into a work order

- **Duplicate** : Shows you other requests from the same location

## WR Settings

The Work Request setting section is used to configure your requests. The section has 6 tabs:

- **WR Control:** sets default WR parameters

- **Operations:** defines the operations, ie “Pothole” or “Facilities Request”

- **Groups:** multiple groups can be created to support multiple portals

- **Portal Settings:** controls the portal

Work Request and Portal

## WR Control Sceren

This screen sets many of the default behaviors for Work Requests. This is typically an admin only function.

- WR Pattern: sets the work request ID patter can be set as shown Examples: WR0 - > WR00000001, WR# - > WR1, WR{YY}0 - > WR20000001.

- Last WR Number: controls the starting number. This is helpful if you are coming from another system and want to carry numbers forward.

- WR Desktop Settings: has default settings for State, city, and promised date.

- Default Group: important if you are allowing users to self-register. This determines which user group they will be defaulted to.

- Allow Anonymous: controls whether the portal will allow users to submit requests without registering for an account.

## Operations Tab

The Operations tab holds 3 levels of choices for your requestors to choose from. You must use the operation level. These levels of choices make it easy for your audience to categorize their issue so that you get reliable actionable information. These categories also allow reporting by category. The Operation level is typically configured to be a list of “Departments” or Operations” in your agency. Examples would be: Facilities, Fleet, Water, Streets and Roads, etc. In a manufacturing environment, operations might be different manufacturing areas in your plant. The response they give to the first tier, or complaint question will determine which set of questions they see in the second tier or problem. Example: If your organization was a facility maintenance group you might create the first tier of questions (complaint) something like this:

Work Request and Portal First Tier “Operations” The requestor chooses Facilities at the operation level

- Facilities

- Graffiti

- Streets

- Water Second tier of “Issues” The requestor selects plumbing from the facilities options at the second level.

- HVAC

- Plumbing

- Electrical

- Room furnishing If the requestor chose Plumbing, the Third Tier of “Issue details” might be:

- Leaking Sink

- Clogged Sink

- No Hot Water

- Toilet Clogged When they make these selections, their responses are stored in the request and will transfer to the work order. They can still add an additional comment into the complaint box if they want to. Click add to add a new operation. Click edit to edit an existing line.

- Notify users - Select one or more names from your user dropdown for staff who should be notified when a request for this operation level comes in.

- Workgroup Select the workgroup that should get a work order made for this operation code.

- Printout Select a printout form for the requests that come from this operation.

- Allow public Requests This checkbox controls if this operation is shown on the portal.

- Customize links you to the screen to make customizations for this operation code on the screen. The second level called Issue (was called complaint in version 14) is developed by clicking on the operation first. Each operation level code has its own secondary issue list. The issues are developed in the same way as the operation level.

Work Request and Portal The third level is issue detail. This level gives you more granularity to your responses. This level does not have the option to route to internal staff with email notifications. It is built the same way as the issue is built. Click on an issue to add issue detail as a third level.

## Groups

The groups tab allows you to create groups of users. Click new group to create a group. Each group can be controlled for:

- Which users belong in each group

- Which operation codes each group should see

- What notifications each group should get. For a municipality, you will have several groups. Let’s say you have one for general staff. These requestors could ask for services for all operation level choices, so you add all operation codes to this group. You also are opening the system to the general public. You would want operations for road issues, graffiti and other municipal services activated but you would not want facilities or fleet available to the public only internal staff.

Work Request and Portal

## Operations

The operations tab lists the operations this group will see, Add button adds additional operation to the group. The check mark on the left will select an operation to delete.

Work Request and Portal

## Notifications

The Email Notifications are configured here. The blue checkbox activates the email notice. You must have a template specified for each notification event. The blue box on the right of each template will jump you to the template setup screen.

## Portal Settings Tab

The Portal is a Simplified set of screens intended for users to use to submit requests. Users can access the portal without having access to the rest of MaintStar. Most agencies will have one portal for their requesters to use. It is however possible to have more than one portal configured for different users. You may want a portal configured for a DMZ for an additional layer of security.

Work Request and Portal The table at the top of the screen is a list of your available portals. These are not user configurable. Please contact MaintStar support for assistance if you wish to add additional portals to your system.

## Status Tab

Status values can be set to automatically update Work Requests (and send notifications) to submitters. The system has 4 internal system statuses, although more can be configured.

- New - New request, no action taken

- In work – Work Order has been made from this request

- Done (closed) – Work request is closed either manually or automatically from work order being closed)

- Denied (closed)- Work Request closed from the request being denied.

Work Request and Portal

## Customer Type

The customer type allows you to create categories for customers. Customer type is a field on the request screen used to categorize different types of requesters such ad telephone, email, walkin or portal, etc.

## Customers

The Customers table holds all requesters. People who self-register to use the system are stored here. MaintStar users who log into the request portal from their MaintStar ID are copied over to this table, and users you create manually are created here. The filter section at the top of the screen is the list of all customers. It can be filtered as we do work orders and other tables in the system. A selected user (blue highlight) is displayed in detail at the bottom of the screen.

Work Request and Portal The customer table is used in many sections of the system for many different things. In the request the Key parts of the record are:

- **Customer ID** - Unique identifier. This is used when the person logs in to the request

- **Customer Name** - First and last name

- **Username** – MaintStar user name (filled in for MaintStar users who sign into the request portal)

- **Phone**

- **Email**

- **Notify via email** – send notices to MaintStar notifications.

- **By external email** – send notices to email address in profile.

- **Notify by text** – send notices by SMS text message to phone in cell phone in profile.

- **Internal user** – denotes this person is a MaintStar system user.

- **Banned** – used to block a user from submitting requests.

- **Work Request** tab lists Requests this user has submitted.

Work Request and Portal

## Portal

The portal is a public or private facing resource from which submitters can enter Work Requests to the organization. It is a simpler web interface designed for your requestors to use to submit their requests. The Portal has its own URL address. Most agencies will have one portal, but it is possible to set up more than one. The portal can be viewed on a tablet, phone or desktop screen. The screen will automatically adjust the screen based on the device. Request list – Shows list of either my requests or all requests by tab selection. Blue Id link will open the detail of each request. Requests are color coded for status. The Small funnel at the top of the list opens a filter to show open, closed or both status. It also lets you filter for a operation type.

### Start a new request with the “Add a new request button”.

Map Will show location of requests that were geo tagged. If your phone or tablet has location services activated your location will be stored on the map when you submit requests. Those requests with this map information are notated with the black pinpoint icon in the first column of the list. Map Icon will display or close the map. Tab to show

- my requests (ones you have made)

- Tagged requests (Ones you have checked tag box, to keep your eye on)

- All Requests – show all requests from all users (May be security controlled for different user groups to show or not show Menu to change your user information, add a new request or logout

Work Request and Portal

## Entry screen

First select an Operation code and then an issue. Depending on configuration there may be a third level “Issue details: These will be checkboxes. Red Star denotes a required field The next screen is the primary request screen. It will vary according to the screen customization. It stares your identity, location and text description of the issue. At the bottom of the screen you can attach photos or files to the request. These will transfer to the work order. If you are using a phone or camera you can take pictures and attach them to the request. The final step is to submit the request.

Work Request and Portal The request is now submitted for processing. The Request will now appear in the Request section of the MaintStar application.

## Enterprise Asset Management (EAMS) v15

# Notifications

### End User Documentation

### Update 3/1/2024

Notifications

## Notifications

MaintStar can send email or text messages to internal and external users under a variety of circumstances. For Work Order, this includes:

- When a WO is created

- When a WO is saved with a new value in "Assigned To", or "Work in Progress"

- When a WO is closed

- When a part is received

- When a task is complete

- When a particular asset is added to a WO There are also notifications for Work Requests. More information can be found in the Work Request Chapter.

## Notification Types

Notifications can be sent in three different ways: Internal Notifications, Email, and Text (SMS). Internal notifications are accessed in Home > Notifications. This is a simple solution if you prefer to check your messages in the MaintStar application, or keep a record of them. Email notifications require that the user has a valid email address on record. The user can access their own email in Home > My Preferences, or an administrator can access it via Security > Users. Text (SMS) notifications require that the user has a valid Cell Phone on record. The user can access their own cell number in Home > My Preferences, or an administrator can access it via Security > Users. Note that a country code is needed for texting to work (1 for USA). This can be accomplished in two ways:

- The user manually includes their country code in their phone number (ex: 1- 555 - 555 - 5555)

Notifications

- The administrator can have the system automatically prepend a Phone Country Code. This can be configured in Security - > System Settings.

## User Preferences

User notification preferences determine which notifications will be received:

- Notify by Text

- Show Notifications in Notifications list (aka Internal Notifications)

- Notify by Regular Email These options can be accessed by the user themselves in Home - > My Preferences, or by an administrator in Security - > Users. A user can receive any combination of internal notifications, email, or texts depending on these settings. If the administrator prefers the user to not have control over notification preferences, they can check May Edit Notifications Setup in Security - > Users.

## Work Order Notification Setup

Configuring system wide Work Order Notifications is a system administrator task. To configure notifications for work orders, you will find two tabs in Security > Workgroups: Notification by User and Notification by Role.

Notifications

- Notification by Role: when configured, staff will only receive notifications for things directly relevant to them. You will see a grid of checkboxes, which will determine who receives notifications and under which circumstances. For example, you can set it up so that only "Assigned To" receives a message when "Assigned To" is changed, but "Supervisor" will receive a message when the WO is created or when the WO is closed.

- Notification by User: Allows specific staff to be notified when specific things happen. For instance, when a Work Order is closed or changed and you only want one user to be notified, use this method. NOTE: You can not further define actions, ie “I want this, but not that”.

Notifications Both tabs also have dropdowns where you can choose Templates. Templates determine what the message says when it's generated. MaintStar comes with default templates, but you can also create your own.

## WR Notification Setup

Notifications for Work requests work slightly differently. When a WO is created from a WR, this will trigger the same way as any other WO notification. But for other WR-specific events, notifications can be configured in Work Request > WR Settings. Two tabs are relevant here: Notif. Templates and Operations. Operations is the tab for setting up Operations and Issues to categorize work requests (see documentation on WR Issues and Operations). On this screen, you can assign an internal user (i.e. not a member of the public) for notifications on a specific Issue or Operation. To do this, simply edit an issue or operation and add or remove users to that row as needed. What are these users being notified for exactly? This is where the Notif. Templates tab becomes relevant. On the Notif. Templates tab, the Notifications for Internal Users section determines which notifications those users receive and when they receive them:

- Notify when Operation selected will trigger when an internal user is assigned to a particular Operation and a WR is created for that Operation.

- Notify when Issue selected will trigger when an internal user is assigned to a particular Issue and a WR is created for that Issue.

- Notify when WR is assigned is sent to the assigned user when a WR is created with an assignee or is edited to have an assignee.

- Notify supervisor when WR is assigned is sent to the user in the Supervisor field when a WR is created with an assignee or is edited to have an assignee.

- Notify when WR is closed is sent to Operation users when a work request is closed.

- Notifications to Requester by Group - These notification options can be customized based on individual groups. Configure one group in particular by selecting it on the dropdown. Notifying a requester means notifying the user in the Customer ID field. All of these options have a corresponding Template dropdown for choosing a notification template (see Templates section). The notifications will not function unless a template exists for that notification.

## Notification Templates

Templates determine what a message will say when it's sent. While MaintStar comes with default templates, you can also create your own to better suit your needs. You can view, edit, and create templates in Security > Notification Templates. To create a new Template, click "Add" on top of the list of existing templates. Take careful note of the Template Type this will determine where in the system you will be able to choose the template. Templates can contain special variables, which will be replaced based on the specific work order or work request. For example:

Notifications Work order $WONO has been assigned to $ASSIGNTO might become: Work order W000000001 has been assigned to JohnDoe A full list of available fields can be found on the right-hand side, along with descriptions. These fields are different depending on the Template Type. These fields will work in both the Subject line and the Body lines. You will notice there are two text boxes for the body of the message: Email Text and SMS and MaintStar. Both can be filled out.

## Enterprise Asset Management (EAMS) v15

# Assets

### End User Documentation

### Update 3/1/2024

Assets

## Managing Assets

Managing enterprise Assets is a core function of MaintStar EAMS. Assets are resources of which an organization is responsible for maintaining throughout its life from acquisition to retirement/salvage. Following are some key components of managing assets:

- **Asset** : the resource to be managed and maintained – this may be a vehicle, road, stormwater channel, building, generator, etc

- **Asset Type** : the category for the asset – for instance all road segments would be grouped into a “Road” Asset Type, or all light duty vehicles grouped into a “Light Truck” Asset Type

- **Asset Group** : to ease Work Order scheduling, assets may be grouped together, even across Asset Types – for instance, assets requiring monthly inspection can be grouped either by type, location or other factors

- **Bill Rate** : a cost can be assigned for an assets use – for instance vehicles can be applied a rate for when they are added to a Work Order LEm

- **Asset Customization** : screens can be customized to contain fields unique to a particular asset type

- **Condition Index** : can be applied to assets according to industry standard asset ratings

- **Asset History** : a summation of work order history and cost is available for each asset

- **Asset Parts** : parts used against assets can be tracked to show what part was used and the last time it was used

- **Asset Warranties** : assets with warranties can be tracked to provide greater awareness to technicians of covered assets

- **Asset Notes and Warnings** : notifications can be applied to assets to show a warning on the asset and/or work order, for example a vehicle may show a warning to indicate a safety condition

- **Meter Type** : assets can be assigned meter types to track mileage, rotations, counts, etc

- **Work Order Asset** : asset(s) loaded onto a work order – all work order history will be tracked

- **Work Order Meter** : as assets with meters are worked on, technicians can update meter reads

- **Consequence and Probability of Failure** : COF and POF are industry standard ratings to show the importance and criticality of maintaining assets

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

- **Auto Key Pattern:** if the organization does not currently have an asset numbering scheme, this can be used to effectively start at “1” for a given asset type

- **Customization Class:** each asset can have it’s own customization screen

- **Parent Asset Type:** Asset types can be linked together in a hierarchy

- **Equipment and Vehicle Flags:** used to flag whether assets can be used as resources on a Work Order

- **Bill Rate:** Cost of using (not maintaining) an asset

- **Unit Name:** Used in conjunction with Bill Rate (hour, mile, etc)

- **Meter Type:** Used to specify the type of meter used on an asset (ie vehicle: odometer)

- **Auto Key Pattern:** When a WO is created

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

- Recap: A count of Assets by Asset Type Type, Location or Department

- Asset Detail: A detail of assets, which can be filtered and exported

## Duplicating Assets

Assets of the same Asset Types can easily be duplicated making Asset entry easier. As with most Asset changes, this is dependent on privileges assigned to users. To duplicate an asset, go to Assets > Assets, find the appropriate Asset and click the ellipses icon. When an Asset is duplicated, a new Asset ID MUST be assigned.

Assets When the duplication process is started, a prompt will provide the ability to copy other pertinent Asset data. This is optional and helps to reduce key strokes. Once the duplication is complete update the remaining Asset data.

## Deleting Assets

MaintStar recommends extreme caution when deleting Assets. This feature should only be used when a mistake is made to an Asset. If an Asset is sold, salvaged, damaged beyond use, the appropriate action is to “Deactivate” the Asset. If the choice is made to delete the Asset, locate the Asset to delete, click the ellipses and select “Delete Asset”.

## Enterprise Asset Management (EAMS) v15

# Asset Assessments

### End User Documentation

### Update 3/1/2024

Asset Assessments

## Asset Assessments

MaintStar can record, track and report an Asset’s recorded Assessment. Assessments allow for an organization to provide Asset condition ratings/assessments to report on its condition. As each Asset may be comprised of different ratings, MaintStar allows for a multitude of Rating Types to suit each need. For instance, Road Segments are often rated using a Pavement Condition Index (PCI) of 0 100 whereas other Assets may be a simple 1-5 or A-F scale. These rating types are set at the Asset Type level, which is further discussed below. If Assessments are to be used, 3 critical concepts must be understood.

- **Condition Index:** this is the type of condition to be applied, for instance “PCI” of 0-100 with 0 representing Failed and 100 representing Excellent condition

- **Condition Rating:** the actual scale of which the Index uses – for instance: o Vehicle Rating (Condition Index scale 1-5) o 1 = Failed o 2 = Poor o 3 = Fair o 4 = Good o 5 = Excellent

- **Asset Type Condition Index:** the condition index can be set at the Asset Type level so that all Assets inherit the index When recording an Assessment, the following information can be tracked to help determine an asset’s condition:

- Condition Index and Rating

- Assessed Value

- Assessed Replacement Cost

- Expected Life

- Remaining Life

- Observed Issues/Conditions as comments

## Assessment Setup

As mentioned above, several things must be in place to utilize Asset Assessments: Condition Indexes, Ratings and the Asset Type must be configured. NOTE: The following requires appropriate permissions. Condition Index Set the Condition Index by going to Setup > Tables > Condition Index.

- Provide Index Name

- Provide the Worst and Best Rating Limits – this provides the boundaries of the scale, ie “1 is best, 5 is worst”

Asset Assessments **Condition Rating** Set the Condition Rating by going to Setup > Tables > Condition Rating. The Condition Index used above will be used for instructional purposes.

- Click Add to add a new rating (step will be completed for each rating)

- Select the index created above

- Create ratings from 1 to 5 with corresponding rating values

Asset Assessments **Asset Type Setup** Configure the Asset Type Condition Index by navigating to Assets > Asset Type. Locate the desire Asset Type for which the Index will be applied. Click on the “Condition Index” tab and click Add. Add the desired Condition Indexes. Set the “Default” flag to the appropriate Condition Index. NOTE: Multiple Indexes can be applied but only ONE of them is considered a Default index. NOTE: Even though the setup is complete, Assets will only receive an Assessment once one is recorded.

## Recording an Assessment

Recording an Assessment against an Asset can be completed on the Asset itself. To do so:

- Go to Assets > Assets

- Locate the desired Asset

- Click the Assessments Tab

- Click Add, select the appropriate Condition Index

- Record the Rating and complete desired Assessment Values

## Viewing an Assets Historic Assessment Data

Historic Asset Assessments can be viewed directly from the Asset itself. This can be useful for analyzing asset condition over a period of time.

- Go to Assets > Assets

- Locate the desired Asset

- Click the Assessments Tab

Asset Assessments

## Creating an Assessment Query

Utilizing the Query module to view all Asset Assessment data can be helpful to analyze a collection of asset conditions. With this data an organization can make data based decisions for replacement, budgeting or planning purposes. NOTE: The following requires appropriate permissions.

- Go to Reports > Query

- Select New Query

- Provide a name for the query

- Set the table to: asset_assessments

- Add the desired fields, the following are minimum recommendations: o Asset ID o Asset Type o Condition Index o Condition Rating o Condition Description o Assessment Date

## Additional Assessment Criteria

To truly take advantage of Asset Assessments beyond simple ratings, MaintStar recommends that Assets contain other key information. Adding this data will help to further assess assets based on cost, expected life, etc. As such, the following fields are recommended:

- **Original Value** : the original cost/value of the Asset

- **Install Date** : this date is used to indicate when the asset becomes active – not to be confused with Date in Service, Date Built, or Purchase Date

- **Replacement Cost** : the anticipated cost to replace the asset

- **Expected Life in Years** : set at Asset Type level As this data is entered and Assets recorded, additional analysis can be completed through reporting or the optional (licensed) Asset Management module.

## Enterprise Asset Management (EAMS) v15

# Asset Acquisitions

### End User Documentation

### Update 10/22/2024

Asset Acquisitions

## Asset Acquisitions

MaintStar is a complete Asset Management system that tracks and manages an asset’s life from birth to retirement. Having this complete record of an asset allows administrators to perform appropriate maintenance, gain awareness of an asset’s condition and perform capacity planning for life and replacement. The Asset Acquisition tool allows administrators to enter and track asset(s) data at birth and assign an associated acquisition record. This can be particularly helpful for vehicles, equipment or other vertical assets. While assets can always be created manually in the Asset screens, the Acquisition tool provides a simple interface for completing bulk asset entry when associated with a purchase/procurement effort (for instance when replacing Fleet vehicles under a single contract).

## Acquisition Tool

The Acquisition Tool can be found under Assets > Asset Acquisitions. Details

- This page contains the Acquisition Record details **Bids**

- Contains a record of bid submissions, for reference purposes **Asset Birth Certificate**

- Listing of Associated assets to the record

- Existing or New Assets can be associated **Attachments**

- Contains Acquisition record attachments (contracts, invoices, etc)

## Creating a New Acquisition Record

Details Page

1. To create a New Acquisition Record, simply click “New Acquisition”. Complete the details as needed, although very little information is required. This information is purely for informational purposes only. Asset Birth Certificate

Asset Acquisitions

2. Click on Asset Birth Certificate

3. To add an EXISTING asset, click on Asset Lookup

4. From here an asset can be typed in OR the lookup and filter tool can be used

5. To Create an Asset from the screen, click “Create Asset”. Creating an Asset from this screen will add an Asset to the Asset List

6. When an Asset is created, a dialog box will appear asking for Asset Type, ID and Description

7. Enter information, click Create.

Asset Acquisitions

8. As each Asset is created on the Record, information can be populated on the Asset Detail page. Much of this information will be sent to the Asset record, thereby simplifying data entry. This transfer can only be completed ONCE per Asset

9. Data that can be transferred to the Asset includes: a. Description b. Install Date c. VIN d. Make e. Model f. Year g. License Number h. Color i. Meter

10. Once data is entered (this process is based on individual assets), click Save

11. To Transfer the Data, click “Transfer to Asset”.

12. A warning message will appear, ensure this message is understood, then click OK.

13. Associated Data will transfer.

14. For future updates, the Asset must be updated (not the Acquisition Record)

## Enterprise Asset Management (EAMS) v15

# Asset Disposals

### End User Documentation

### Update 11 /22/2024

Asset Disposals

## Asset Disposals

MaintStar is a complete Asset Management system that tracks and manages an asset’s life from birth to retirement. Having this complete record of an asset allows administrators to perform appropriate maintenance, gain awareness of an asset’s condition and perform capacity planning for life and replacement. The Asset Disposal tool allows administrators to track and retire asset(s and assign an associated dispsal record. This can be particularly helpful for vehicles, equipment or other vertical assets. While assets can always be retired manually in the Asset screens, the Disposal tool provides a simple interface for completing bulk asset retirements.

## Disposal Tool

The Disposal Tool can be found under Assets > Asset Disposals. Details: This page contains the Disposal Record details:

- Asset ID – Associated Asset Record

- Status – Disposal Record Status (Marking a Record as “Done” marks the asset as Inactive

- Condition – Current Condition of Asset

- Reason – Reason for Disposal

- Recommended Method of Disposal – Final Disposal Method **Warnings:** Disposal Record cannot be marked as “Done” until the following is true:

- Work Orders: All Open Work Orders containing the asset must be closed

- PMs: Asset must be removed from PMs

- Asset Groups: Asset must be removed from Asset Groups **Attachments:** Associated attachments, pictures, documents, etc

## Creating a New Disposal Record

Details Page

1. To create a New Disposal Record, simply click “New Asset Disposal”.

2. Select the desired Asset from the lookup feld.

3. Select the Status, Reason, Condition and Method of Disposal Fields (if used). Only the status is absolutely required.

4. The Status field can be used to track Disposal records throughout the Disposal process.

Asset Disposals

5. Utilized the “Warnings” tab to track any open Work against the Asset. The Disposal Record cannot be marked as “Done” until the following is true: o Work Orders: All Open Work Orders containing the asset must be closed o PMs: Asset must be removed from PMs o Asset Groups: Asset must be removed from Asset Groups

6. All Warnings must be remediated before the Asset can be marked as Done (and inactive)

7. To remediate a Warning, simply click on the link(s) which open in a new tab.

8. If there is an attempt to close an Asset before Warnings are remediated the following error will display:

9. Once all Warnings are taken care of, return to the Details page, Status, and mark the asset as “Done”. The following message will appear to indicate that this will mark the corresponding asset as

Asset Disposals “Inactive”:

10. **Note: MAINTSTAR DOES NOT DELETE ASSETS, ONLY MARKS THEM AS INACTIVE.**

## Re-Activating an Asset

To reactivate an Asset, simply go to Assets > Assets, set the filter to look for Inactive Assets, search for the desired Asset and check the “Active” box, then click Save.

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

- Set Geometry Type to Point (for a pin) or Linear (for a line) **Activity Code:** In order to classify Deficiencies by type (potholes, inspections, code issue, etc) Activity Codes must be added to the Activity Code table. This table is located in Setup > Tables > Activity Code. NOTE: Appropriate permissions must be applied to the logged in user to access setup tables. **GIS Integration:** Can be set up to push the recorded deficiencies to an organization’s GIS service. This is helpful to track the locations of multiple deficiencies which in turn can aid in the planning process. Before integration can be completed both MaintStar and the organization’s GIS staff should be engaged. Below is a screenshot of the GIS setup showing the options often selected during the integration. NOTE: Each environment is different. The below is ONLY an example.

## Recording a Deficiency

To record a Deficiency, do the following:

- Open Work Order

- Turn on the Map (double headed chevron)

Asset Deficiencies

- Locate the Deficiency Marker (black pin) and place on the map

- Once the Marker has been placed a dialog box will appear

- Set the Deficiency Type (Activity Code previously created)

- Provide a Description, Notes and Attachment (if desired)

- Click Create Asset

## Creating Work Orders from Deficiencies

The whole point of this effort is to document then assign work from the discovered Deficiencies. Users have a choice of how to create the Work Order: from the map using a selection tool OR from the Deficiency Asset itself. Creating a Work Order from the Deficiency Asset: This can be used to create Work Orders one by one.

- Click Assets > Assets and locate the Deficiency Assets

- Click the “Create WO” button

Asset Deficiencies

- Once the Work Order is created, it will present a confirmation dialog box with the WO Number **Creating a Work Order from the Map Asset:** This can be used to visually locate a particular Deficiency Asset and create a Work Order from the map. NOTE: to use this capability GIS integration must be set up.

- Click the Map icon to open the map (double headed chevron)

- Make sure the appropriate map layer is identified

- Locate the Deficiency Asset and click the Green “Select Asset” button

- Repeat additional Assets if needed

- All selected Assets will be placed into the selection ‘cart’

- Click the selection ‘cart’ and select all or some of the Assets for which a Work Order is required

- Click the “Create WO” button

- Once the Work Order is created, it will present a confirmation dialog box with the WO Number **Creating a Work Order from the Map Filter:** As Asset Deficiencies start to be created, it can be confusing to find the appropriate Deficiency Type for which a Work Order should be created. For instance, the Deficiency Asset Types might contain potholes, debris, graffiti, etc. But if only

Asset Deficiencies “Debris” is to be worked on, then the Map Filter tool can be used to find all of those Deficiencies by their Type. NOTE: to use this capability GIS integration must be set up.

- Click the Map icon to open the map (double headed chevron)

- Make sure the appropriate map layer is identified

- Click the Select Asset icon (three lines)

- Click the Magnifying Glass

- At this point filter clauses can be applied

- Select the appropriate GIS Layer

- Click Add Clause

- Define a Clause, in this case, Deficiency Type (Activity Code created previously)

- Select “Unique Value” then select the desire value

- Click Run

- All selected Assets will be placed into the selection ‘cart’

- Click the selection ‘cart’ and select all or some of the Assets for which a Work Order is required

- Click the “Create WO” button

- Once the Work Order is created, it will present a confirmation dialog box with the WO Number

## Enterprise Asset Management (EAMS) v15

# Mobile Work Order

###### End User Documentation

###### Update 3/1/2024

Mobile Work Order

#### MaintStar Mobile

MaintStar Mobile is a web-based application designed for you to manage your work orders on a phone or tablet when you cannot be at your desktop. It can be used on an Apple or Android device. A tablet gives you more screen space making data and maps easier to see and use. A tablet will not fit in your pocket but can be carried like a book. A tablet will also have a larger battery so the device can go longer between charges. A phone is of course smaller. The smaller screen makes text smaller on the screen to read and buttons more difficult to click precisely. You trade these shortcomings in a phone for the convenience of a device you can put in your pocket. It you are not tech savvy and have trouble clicking on a screen then the tablet will probably be easier for you. Whichever device you choose, the MaintStar mobile application will work with you throughout the day. We will use an Apple iPhone 8+ with the default Safari browser in this example. We will also show what the app looks like on a tablet for comparison. The MaintStar Mobile Work Order will allow remote workers to access their assigned work order in the field. Key features of the Mobile work order are:

- The Mobile Work Order is easy to use.

- Users can view their work orders on Android and iOS tablets and phones through a cellular connection.

- The system will leverage your GIS map services o You can view work orders on the G.I.S. map. o You can add assets to the work order from your GIS map layers or from searchable drop downs. o You can view asset history from the map. o You can markup the map to show work areas.

- We seamlessly integrate your camera to take pictures and add them to the Work Order.

- Users will be able to add work detail, hours, parts and materials, contractor information and other closing information.

- They will be able to close the work orders in the field.

- If they will be traveling to areas where cell reception is spotty, the system will allow then do download their work orders to the device while they have cell service. They will also be able to download selected assets, and work in ‘Disconnected” mode when they travel to no reception areas. When they later reenter cell service area, their device will sync back to the server.

Mobile Work Order

###### Enter Your User Id and Password and Select your Work Group

Enter your Id and password Select the ‘Profile’ you want to log into from the drop down. You may have only one profile, or you will have more than one if you have a production and a test environment for example. When you enter your ID and password on a phone or tablet, be aware that most devices will try to capitalize the first letter. If your password is all lower case, you will need to shift to lower case before you type the first letter. Press ‘Login”. You will be taken to the Home Screen.

Mobile Work Order

###### Allow your device to use your location

Your device will ask you if you want to use your current location. You should always allow this. Using the location services of the device will allow the map to know where you are geographically. If you accidentally click don’t allow, you should close the app and start it again as this is the only time the location service can be activated. App and data will update and sync. This may take a minute or two depending on the size of the database. You can manually update the data manually if needed. The app will take you to the last screen you were on when you closed out last time. It will download all the open work orders assigned to you. In this example we are starting with an overview of the screens.

Mobile Work Order

###### Main Menu Screen

Across the Top Blue bar, the three icons are

- “Hamburger menu”

- Filter

- Map

Mobile Work Order

###### The Large Main Menu section

- **Work Orders** takes you to the work orders section. There you can

##### see work orders in a table view and on the map. You can edit them

##### and create new work orders. This will be the main section that users

##### will work in. The Work Orders menu shows a number in a circle. That

##### is the number of work orders downloaded for you when you logged

##### on.

- Work orders assigned to you will be loaded when you log on. The

##### system looks for your ID in the

- ‘Assigned to field’,

- The Crew Leader Field,’

- The supervisor field and as

- ‘Labor’ on the LEM section.

- **Create Work Order** is a direct link to a new work order entry. This is

##### available from the Work order section with a green circle with a plus

##### sign in it also.

- **Work Planning Entry** allows you to create work plan entries that are

##### either not connected to a work order, and ones connected to a work

##### order. If the entries for time and materials etc. are going to a work

##### order, you should add then to the work order directly as there will

##### likely be other detail for you to fill in on the work order beside LEM.

- User settings shows information about your ID. It gives you a

##### selection of a light or dark theme and the selection to pull data on

##### line or Pre-load them.

- About the app shows version number and contact info.

- Log out is how you log off the application.

Mobile Work Order The Hamburger Menu in the upper left corner, opens the following slide out screen:

- It shows your log on ID.

- You will see the Work group you are in. If you

##### have access to different workgroups you can

##### change to a different workgroup here, in the

##### drop down.

- Other menu items are the same as on the

##### home screen except for the refresh.

- This icon in the blue header bar is

##### Refresh. Click it.

- The menu item ‘Refresh’ will open the refresh

##### panel.

The green dot shows that your data is synced, meaning what you have entered on your device has been uploaded back to the server. You can reload your work orders if necessary, with the reload button. Sync will sync your entries to the server manually. Normally the system will sync date automatically.

Mobile Work Order

###### Work Orders

Work orders assigned to you will be loaded when you log on. The system looks for your ID in the

- ‘Assigned to’ field,

- The ‘Crew Leader’ Field,’

- The ‘supervisor’ field or as

- ‘Labor’ on the LEM section. When you click on this menu item the list of work orders will open.

Mobile Work Order ‘The Map Icon will open the Map screen. If the work orders have GIS Assets in them, then the first asset in each one will be shown on the map with a wrench icon. If you tap on one of the icons the id of the asset will be shown. Open Work Orders will be red Closed ones will be Gray. You can pinch to zoom in and out. Close the Map with the left x in the corner to go back to the work order list.

Mobile Work Order

###### The Work Order List Views

The work order list has two Icons in the upper right corner. The one on the left changes the list view and the one on the right is used to filter the list. There are two ways to see the list of work orders. They can be shown in a condensed list view or in a more expanded list view. The default is the expanded view. Choose which ever display works best for you. The condensed list view shows the work orders in a scrollable table, 10 items to a page. Each work order takes up just one line. The condensed list view can be scrolled left to right to see more information. Clicking on the work order number opens the specific work order.

###### Expanded list view

The expanded list view displays the work orders according to the settings in the filter and grouping. The system will remember the way you had them set last and opens the way you left them. Closed work orders have a solid folder icon, open ones, white. A paper clip indicates an attachment. The pinpoint teardrop indicates one or more mapped asset. The expanded view shows you a few essential things about the work order in a small card without scrolling left or right. Click the right pointing arrow on the right side of the card for the work order you want to open in detail.

Mobile Work Order

###### The Filter

The filter has two functions, to filter the work orders that are displayed and a control the grouping. The tabs at the top are used to switch between these two functions. Wo #, status, priority and assigned to, are choices. If you click ‘Show More’ you will see many more fields to select from. Click ‘Search’ to change the displayed Work orders to ones that meet this selection. ‘Save as’ is useful if you have a filter selection you want to use many times. You can give it a name and find it in the ‘Saved search’ drop down. ‘Clear all’ resets the filter. Group By has several choices to group your results. You can select

- No Grouping,

- Grouping By:

##### o Status,

##### o Crew Leader ID,

##### o Priority,

##### o Assigned to ID, or by

##### o Issue date.

Mobile Work Order

###### Work Order Screen

Click on a work order number to open the work order in detail. Across the top of the Work Order screen are four Icons.

- **Details** - is the main Work Order

##### Information view

- **Job Site** - is a place you can

##### record an address of where the

##### work is done.

- **Request info** – If the work order

##### came from a request, the

##### requestors contact information

##### will be here.

- **Attach** - This is where photos and

##### other attachments are stored.

##### Yes, you can take pictures with

##### your phone or tablet and attach

##### them to the Work Order! You will

##### see a number indicating how

##### many attachments there are.

The Work Order Detail screen is divided into sections. The example below shows these panels in their condensed state. Each one has a small arrow in the upper left. These arrows allow you to open a section up or condense it. The arrow head points down when the sectionis condensed, and it points up when it is expanded. The top section is the header. It holds general information about the work order. Below that is the section for assets. Next is the LEM section where Labor, Equipment Materials and Work Quantity are entered.

Mobile Work Order

###### Starting a new Work Order

You can start a new Work order from the main menu “Create Work order or with the green plus sign on any existing work order.

Mobile Work Order

###### Filling in the New Work Order – Header section

The new work order will be started. You will see the header section. Complete the fields such as work order type, add priority and assignments for assignee, crew leader and supervisor if you use these designations. Enter a short description of the work to be performed in the wo description field. Click Save at the bottom of the screen. You can now condense the header section if you wish with the up arrow at the top of the header section. This is up to you. There is nothing wrong with leaving it expanded, you will just have to scroll to get to the asset section below it. We would however suggest that if you expand only one section at a time, you might find it easier to navigate and less confusing.

## You can talk your entries into text fields

#### Phones and tablets have great

#### speech to text capabilities. When

#### you click into a text field the

#### keyboard will pop up. If you click

#### the microphone, you can talk your

#### entry in and have almost no

#### typing necessary!

Mobile Work Order

### The Asset Section – Standard Layout

The asset section can be opened with the up/down arrow on the left. If your work group is set up for the Standard Work Order Form, there will be one asset added by default. It has the ID of “Unknown” In the Standard work order format each asset has its own Labor, Equipment and Material. You can add labor to the Unknown asset. It is however intended that once you begin the service you will at some point determine the asset involved and change the Id from Unknown to the correct Asset ID. To change the ID from ‘Unknown’ to an actual asset Click the 3 dots on the right of the asset ID. In the drop down choose ‘edit.’

Mobile Work Order **You will go to a search screen.** Here you can select the asset you need from the asset drop down or search for it with specific fields. To search click the magnifying glass. In the search screen put in one or more criteria then click search. **Select from the Search Results** You will see a list of matches for your criteria. Tap on the right one to select. It will be added to your work order.

###### Asset Section – Infrastructure Layout

If your workgroup has been configured for the Infrastructure layout. Your asset section will be a little different than the Standard layout design. The Assets will be in a table where multiple assets can be listed. The assets will have ONE section for LEM, Labor, Equipment and Materials. This means that the work order is capturing the cost for “the entire” work order as a whole job. The Standard Work Order Layout has a separate LEM section for each asset. In the following example we will switch to a water work order and add some hydrants from the GIS map instead of the asset search.

Mobile Work Order **Adding Assets from the Map** Your GIS assets can be selected from the map and added to your work order. To do this, start a new work order with the green plus button at the bottom of the work order screen. Then open the Map with the map icon in the upper right corner of the screen. The Map will appear full screen. Note when you want to go back to the work order, use the blue back arrow at the bottom of the screen or the white X in the upper right corner. Note: If you are using a tablet you have the advantage of a screen that is big enough to be able to show the work order and the map at the same time. On a phone, you must open the map to see the map then close it to go back to the work order screen. TABLET VIEW – See the map and Work Order side by side.

Mobile Work Order

Mobile Work Order Click the configuration Icon which looks like a gear. The configuration has two radio buttons labeled On-Line and Pre-Loaded. The On-Line selection will pull assets to the map over your internet connection. This is the normal way to work. If you anticipate working in an area where there is little or no internet connection you can use the pre-loaded function to download asset types you will be working with, while you have internet connection. They will be stored on the device memory. Because of this, you will be able to work with these assets and add them to work orders where you do not have good internet connection. In this example we will use the pre-loaded connection method. The Active Layer dropdown needs to be set for the asset type that you want to select on the map. Here we have it set for ‘wHydrants ‘, meaning water hydrants. You can have many layers visible in the Layers Visibility section, but you must choose which layer to select from in the Active layer. When the active layer is set, close the panel by swiping it right

Mobile Work Order You will be taken back to the map screen. You will see the work Order that you are on at the top. Below that is the active layer listed at the top of the screen. If you are at the location, you are going to be working at you can tap the Center Icon in the lower right. The screen will zoom to your location. You must have location services turned on and active in the device for this to work. If you are not there you can pinch and zoom the map to move to the location, you need. You will need to zoom in close to see the icons for the hydrants. In a GIS map, fine detail such as asset icons do not appear when you are zoomed at a high elevation. Select the asset by clicking on it. It will then be in the box at the bottom of the screen. If you click it there you will see it highlighted in green on the map to make sure you have the right one. The x will remove the asset from the selection box. The plus sign will add it to the work order. If you added it by mistake, click the plus sign again. You will see a green check indicting that it has been added. Click the plus sign again at it will show a garbage can. Click the garbage can to delete the asset. When it is added the Hydrant Icon will display a number 1, meaning the first asset added to the work order. If you need to add more than one hydrant, keep the map screen open and select other hydrants in the same manner. They will each be added to the work order with the plus sign. You can come back to the map from the work order to add assets again.

###### Working with Assets

All assets that are on the work order (which came from the map) are shown in the map view for the work order you have opened. NEW CONCEPT : In version 15, each asset has a check box labeled ‘Done’. This check box can be checked with a green check indicating that this asset is finished. The corresponding dot on the map will change from a blue dot to a green dot to show that it is done. The +/sign to the right of the check box expands and contracts the asset line itself for one asset.

Mobile Work Order **_NEW CONCEPT_** : When the asset is expanded there is a new feature called ‘Predefined Task’. This feature will allow you to do many things: Tasks will allow you to create a list of specific tasks, and the user can mark off which tasks are completed and when they were completed. Tasks can also be set up for recording information, observations, conditions, and measurements.

Mobile Work Order

###### Completing the Task

When a task is completed you should check the done checkbox on the task. You can add notes or other comments if needed. The system will automatically record the date and time the task was done. Once all tasks for that Asset are marked done, the system will check the asset Done box for you automatically.

Mobile Work Order

###### L.E.M.

LEM stands for Labor, Equipment and Materials. L.E.M. It is another section of the work order after assets. It can be expanded and condensed like the other sections. To view the labor and equipment and materials expand the section. You will see a list of all the Equipment Materials and labor currently on the work order.

- The category of each one is the first

##### column.

- The second column is the identity of each

##### entry. This column can be expanded by

##### clicking on the ID.

- The third column is the quantity as a

##### count or hours.

- The last column is the date Click on a LEM entry to open it in full screen detail. There you can enter hours, pay type, Management Unit and Activity.

Mobile Work Order

###### 2 ways to display LEM Entries

In the setup of the system on the desktop there is a switch to control how LEM entries are entered on the Mobile. In the Workgroup set up screen in Security, the work order control tab lets you change how your mobile app behaves. In the work group set up the three check boxes

##### 1. Turn the map on

##### or off

##### 2. Show or not show

##### tasks

##### 3. Change the LEM entry to be either

##### a. A horizontal grid which scrolls horizontally.

##### You can enter LEM info directly in the grid.

##### b. A grid that displays entered data, but

##### when you click to add a new row, a full

##### screen opens for you to make the entry.

It is up to you which display method you prefer. The grid entry might be convenient, but it does mean you will be scrolling left and right a lot, and entries directly into the table are more difficult on a small screen phone. The full screen entry gives you more space to make your LEM entries, but you will be opening the full screen for each entry then going back to the grid when you save.

Mobile Work Order

###### Adding a new LEM entry

Click the Add LEM button. The entry screen will appear. First entry is the type: labor, equipment, contractor, misc., work quantity, or crew. You must make this selection first, as other fields in the line will change depending on this first entry type selection. In this example we will add labor. The next lines add – activity, management unit, the ID of the craftsman, hours, and minutes, pay type account number, date, location, and charge method. NOTE: The Management unit and activity codes are now on the labor lines. This means you can now have a work order with multiple management units and Activities. Once you set the Mgt Unit and Activity, the values you select will be automatically carried to the next entries. Choose the entry values by double clicking on each line. Use the magnifying glass for the craftsman ID Save when you are done.

Mobile Work Order

###### Adding Attachments

You can use your phone or tablet to add pictures you take in the field. In the attachment section, click the add attachment button. There you can select a file already on your device or take a new picture. New picture will open your device camera and take the picture. Click use photo. After the photo is taken. Here you see the Photo attached to the work order.

Mobile Work Order

###### Closing a work order

When you are ready to close the Work Order click on the 3 dot menu on the right top corner of the details screen. There will be a fly out menu giving a choice of deleting the work order and closing. The delete option will not be functional unless you have delete rights. To close the work order, choose ‘close’.

Mobile Work Order The system will ask you to confirm that you want to close. At this point the system will t close the work order. Nd the status will be changed to ‘closed’ **Closing conditions are honored** Please note that the mobile app will honor any closing conditions that have been set for this workgroup. This means if your administrator has specified that certain fields must be filled in for the work order to close. Here is an example of a work order that had a part entered but the part is from a controlled warehouse that must make an issue transaction for the inventory part before the work order can be closed. In this case the part has not yet been issued to the work order so the work order cannot be closed.

Mobile Work Order

###### Actual entry

The actual entry section is for making Work Planning entries. This function was previously available only on the desktop. You can now make work planning entries in the field on your portable device. On the Actual entry screen, you see several blue buttons. Click Add New to start and entry.

- Entry screen

- This is like the desktop entry.

- You first select type of entry

- Labor

- Equipment

- Material

- Contractor

- Miscellaneous

- Or Work Quantity After type you then select the ID for the entry such as technicians Id. Other fields will then vary according to the type of entry selected, such as pay type, hours management unit, activity etc. This is very much like the LEM entry on a workorder. Click save then you have the entry completed.

#### Mobile Work Order Customization

As with desktop screen customization, some mobile work order screens are customizable. In the desktop version, a work order screen customization can be made and then associated with a particular Work Order Type (Setup > Work Order Type > Desktop Customization).

1. To create a Mobile Work Order screen, navigate to Security > Screen Customization. If the intent is to create a unique screen for a particular Work Order Type, click “Add / Remove Customization”.

Mobile Work Order

2. From this point a customization can be created (or edited).

3. The next step is to associate the screen to a Work Order Type.

4. Navigate to Setup > Tables > WO Type. Locate or add the desired WO Type.

5. Click Edit and specify the desired Customization for Mobile (and/or Desktop)

## Enterprise Asset Management (EAMS) v15

# KPI Dashboard

## (Key Performance Indicators)

### End User Documentation

### Update 6/25/2024

KPI Dashboards

## KPI Dashboard Overview and Functions

A KPI dashboard displays key performance indicators in interactive charts and graphs, allowing for quick, organized review and analysis. MaintStar offers a fixed standard “Technicians Dashboard” and a licensed built-in KPI dashboard that is completely customizable and serves as a visual compliment to the Query and Reports module.

- KPI (Key Performance Indicator) Dashboard requires a separate license, which can be viewed in the Security->License menu.

- “KPI-DASHBD” right is required to access the KPI Dashboard (Security->Users menu, “Security Rights” tab).

- Dashboards are filtered and secured similar to query and reports - users will see dashboards created by them, or shared with them.

- A dashboard will appear view-only if it was created by another user and it was shared with "Read" rights.

- The KPI dashboards are built-in to MaintStar. Any connection to external dashboards similar to PowerBI and Tableau would be licensed and quoted.

KPI Dashboards

## KPI Dashboard Features, Charts and Graph Types

MaintStar offers a variety of ways to display data within the KPI dashboard. Following is a summary of the styles offered: Setup From left to right:

- Primary dashboard details

- Source Table Setup

- Chart and Graph Library

- Filters

- Feature Configuration **Column Setup** Specifies the columns and basic filters from the selected table from which to report. **Bar Charts** Can be horizontally or vertically displayed. Additional data points can be added allowing users the ability to stack datasets. **Pie Charts** Displays data in a pie format, complete with labels and values. Colors can be customized

KPI Dashboards **Number Boxes** Fixed data boxes display quick and easy to read numbers of the filtered data. **Line Chart** Displays data over a timeline to show trends. **Grid** Shows reported data in a grid, exportable format **Filters** Can be applied to Dashboards that allows users the ability to filter and adjust results based on specific search criteria.

## Dashboard Configuration

This is often split in 7 steps see the numbers in the screenshot:

1. Open the editing panel by clicking the “Edit” button, or by creating a new dashboard. Update dashboard name and security settings.

2. Select table or view, select data columns and conditions. The system will suggest adding a default list of columns based on the selected table/view.

3. Add charts, grids and text elements to the dashboard. You can use charts suggested by the system or configure charts from scratch (“Add empty chart” button).

KPI Dashboards

4. Add filters to the dashboard. You can use filters suggested by the system or configure filters from scratch (“Add empty filter” button).

5. Adjust charts configuration, reorder charts.

6. Adjust grid configuration.

7. Exit the edit mode and use the dashboard - change filter criteria, export the data.

## Dashboard Functions List

1. **Dashboard level** 1.2. Change dashboard name, description, maximum width, or make the dashboard hidden. 1.3. Change sharing rights - dashboard can be shared by workgroup or by user. 1.4. Add / delete / duplicate a dashboard. 1.5. Add dashboard to the “Technician dashboard” screen.

KPI Dashboards

2. **Dataset setup** 2.1. Select table, view, or temporary table as a data source. 2.2. Select data columns. The system will suggest adding a default list of columns based on the table/view selected. 2.3. Add computed columns. 2.4. Edit column label. 2.5. For columns that are linked to setup tables, select whether to show ID, description, or both ID and description. 2.6. Add conditions for the selected columns. 2.7. Preview the data. 2.8. Advanced - write SQL query instead of selecting table and columns. 2.9. Advanced - add multiple datasets. Each chart and filter will have an option to select a dataset. 2.10.Check “Limit data to 4000 records” if the dashboard takes too much time to load.

3. **Adding charts** 3.1. The system will generate charts suggestions based on the data configuration. It will show bar charts, pie charts, time charts and number charts examples. If the dataset has multiple numeric columns, you can select which column to use in the auto-generated charts. 3.2. Use the “Add empty chart” option to configure a chart from scratch. 3.3. Use the “Add grid” option to add a grid to the dashboard. 3.4. Use the “Add text” option to add text or a title to the dashboard.

KPI Dashboards

4. **Adding filters** 4.1. The system will generate filter suggestions based on the data configurations. Click “Add” to add suggested filters to the dashboard. 4.2. Use the “Add empty filter” option to configure a filter from scratch. 4.3. Edit filter settings - select column, filter label, operator, sorting for dropdown options. 4.4. For date filter, select “Range” or “Date period dropdown” option. 4.5. Link filter to specific charts - the “Filter settings” popup shows a checkbox for each chart. 4.6. Check “Add break before” box to move the filter field to the new line

5. **Individual chart setup** 5.1. Chart type can be changed at any moment. Supported types are bar chart, horizontal bar chart, line, pie chart, treemap, gauge and number chart. 5.2. All charts. Duplicate a chart. 5.3. All charts. Make a chart hidden. A hidden chart will show in the edit mode only. 5.4. All charts. Set width/height of the card. Line/bar/pie charts also allow setting width/height of the chart area inside a card. 5.5. All charts. Choose legend position - top, right, or hidden. 5.6. All charts. Select a parent chart. It allows to group charts in one block. To group charts vertically, use "Group width/height" in the parent chart setup. 5.7. All charts. Select the maximum length of X labels. 5.8. All charts. Select color scheme. 5.9. All charts. Add conditions for an individual chart. 5.10. All charts. Select X column. 5.11. All charts. Select Y column. If not selected, the chart will show a count of records for each X value. When the Y column is selected, you can choose an aggregation type that will be applied to generate values for each X value. 5.12. Line/bar charts. Select multiple Y columns to show multiple lines in one chart. Both line and bar charts allow "Stacked" option. 5.13. Line/bar charts. Select Z column to split data. The chart will generate multiple lines / bars based on the Z column values.

KPI Dashboards 5.14. Line/bar charts. When splitting data by Z column, select sorting for data groups "By Y desc." or "By Z asc.". 5.15. Bar charts. Select sorting option for bars "By X ascending", "By X descending", "By Y desc.", "By Y asc.". 5.16. Line charts. Change line width. 5.17. Line charts. Select line type smooth or straight. 5.18. Line charts. Select point radius. 5.19. Line charts. Change display settings just a line or a line with background. 5.20. Pie charts. Change position for segment labels inside segment, outside. 5.21. Pie charts. Change label display options label + value or just label. 5.22. Gauge chart. Configure intervals for gauge segments. 5.23. Gauge chart. Configure multiple values that can be combined in one formula. 5.24. Gauge chart. Select formatting for the output number. 5.25. Gauge chart. Advanced multiply gauge chart based on “Split by” column values.

6. **Grid setup** 6.1. Reorder and hide columns. 6.2. Change column label and width. 6.3. Select columns for sorting and grouping. 6.4. Select columns to show totals and subtotals. 6.5. Map marker will be shown automatically when the dataset has “geometry” column. Clicking on a map marker in the grid will open the map and zoom to a selected point.

KPI Dashboards 6.6. The grid will show hyperlinks to work orders and assets automatically when the dataset has “wo_no” or “asset_id” columns.

7. **Using the dashboard** 7.1. Exit the edit mode. 7.2. Check the “Limit data to 4000 records” box if the dashboard is not fast enough. 7.3. Change filter criteria to control output data. 7.4. Click on a Pie chart or Histogram segment to filter the data. 7.5. View the output in the grid. 7.6. Export data from the grid (in de

## Dashboard Printing

Dashboards are typically consumed on demand, on a screen. It is possible to print dashboards, however, formatting cannot be guaranteed as many screen set ups are larger than common printers can support. To print a dashboard, click on the “Print” icon in the upper right corner of the dashboard screen and select the appropriate option that works best for the dashboard and printer.

KPI Dashboards

## KPI Duplication and Versioning

Dashboards are often a trial-and-error process, and users may wish to ‘model’ dashboards to see how different inputs affect outputs without compromising a working dashboard. Duplication involves making an exact copy of the dashboard. Versioning allows a user to revert to a previously stored dashboard if unintended or accidental changes are made. Duplicate a Dashboard:

1. Ensure logged in user has appropriate permissions

2. Edit the desired dashboard

3. Click on the ellipses (three dots)

4. Click “Duplicate Dashboard”

5. A copy of the dashboard is created from which changes can be tested **Check and Revert Dashboard Versions:**

6. Ensure logged in user has appropriate permissions

7. Edit the desired dashboard

8. Click on the ellipses (three dots)

9. Click “Dashboard History”

10. A screen with the entire history of the dashboard will be displayed along with a preview

11. Select the desired dashboard to restore

12. Click the green “Overwrite Dashboard” button

KPI Dashboards

## Enterprise Asset Management (EAMS) v15

# Inventory – ABC Cycle

# Counts

### End User Documentation

### Update 2/28/2025

Inventory ABC Cycle Counts

## Inventory ABC Cycle Counts

The ABC method is simply a way of organizing the products in a warehouse for tracking throughout an inventory cycle. The idea behind the ABC method is to break down product lists into three (or more) categories: A, B, C and so on. Inventory Cycle Counts is a concept where inventory is counted on a cyclic schedule rather than once a year. The count is usually taken on a regular, defined basis (often more frequently for high-value or fast-moving items and less frequently for low-value or slow-moving items). The key purpose of cycle counting is to identify items in error, thus triggering research, identification, and elimination of the cause of the errors. TO USE CYCLE COUNTS IN MAINTSTAR, THE SYSTEM MUST BE A CONTROLLED INVENTORY USING INVENTORY TRANSACTIONS.

## A, B, C Concepts

- **A Category:** is made up of highest dollar and fastest moving products. The threshold for this category is user dependent, however many organizations assign their fastest moving parts to this category.

- **B Category:** is made items to be counted less frequently than A parts but more often than C parts. The exact frequencies for each bucket depend on how many different parts a warehouse stocks and how often a count is required maintain accuracy.

- **C Category** : made up of the lowest performing items that move through a warehouse.

## Cycle Count Process

1. **Assess** the current state of inventory integrity and set target accuracy levels. Determine the accuracy level of the current inventory.

2. **Perform** the cycle count. The cycle counting process begins.

3. **Track** variance causes. Compare physical counts with book balances, identify which counts are acceptable and unacceptable, investigating variances, performing reconciliation transaction updates, determine the root causes of variances, and selecting items for recounting.

4. **Continue** improving accuracy levels. The goal is to see inventory accuracy levels rise over time as the cycle counting process takes firm root in the organization.

5. **Compare** current and target accuracy levels. Ongoing results of the cycle counting program will enable inventory control to establish higher inventory accuracy targets.

## Cycle Count Setup Fields

There are certain required fields needed to accurately set up a ABC Cycle Count in MaintStar. It is important to understand terms and definitions as they are used as setups within the system.

- Sequence Number: Count Sequence (order)

- ABC Code: Assignment of A, B, C (or other) codes

Inventory ABC Cycle Counts

- To %: The total percentage of cost that the inventory items you want issued (through transaction historical records) across the whole system. For example, the following ABC setup will use the %To values to determine how to classify the parts.

- A: 80% - your most ISSUED parts that total 0-80% of the total issued dollar amount will be classed as an “A” cycle

- B: 90% - your most ISSUED parts that total 80-90% of the total issued dollar amount will be classed as an “B” cycle

- C: 95% - your most ISSUED parts that total 90-100% of the total issued dollar amount will be classed as an “C” cycle

## Setting up and Using Cycle Counts

This method will apply cycle counts to ALL items in ALL warehouses with an open date filter (meaning it looks at parts over the entire life). Many organizations will have multiple warehouses and wish to fine tune their ABC assignments by warehouse. If this is the case, refer to the next section for additional information.

1. The ABC Cycle Count module is located within Inventory > ABC > ABC Cycle Count Setup.

2. Configure the ABC codes as desired, or use the above example as a starting point.

3. Click on the ABC Class Update tab.

4. Click Update Class. MaintStar will now run the evaluation process of all issuing transactions to determine part usage and provide ABC assignments. Review the results. The Average Cost column shows evidence of part use. Click OK to commit the class assignments.

Inventory ABC Cycle Counts

5. To confirm the ABC assignment, go to Inventory > Inventory Summary, select a part and check the “ABC Code” field. (This field may need to be added via screen customization)

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

5. Update the following fields: a. Comments (optional) b. Count Quantity c. Count Date d. Select the “Overwrite” box

6. When ready to commit the adjustment, click Save. THIS WILL ADJUST QUANTITIES AND CREATE A CORRESPONDING TRANSACTION.

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

- **POF Wizard** : The Probability of Failure (POF) Wizard provides an easy way to apply or update POF values to assets. POF values help to identify the likelihood of an asset’s failure. Using factors such as age, cost to maintain and meters (for assets with meters), automated POF scores can be applied to assets. POF ratings are based on a 1-5 scale with a 1 depicting a low likelihood of an asset’s failure and a 5 depicting a high likelihood of failure.

Asset Lifecycle Module

- **Criticality Wizard** : The Criticality Wizard is the result of the COF and POF ratings. Calculating Criticality is a multiplication of POF x COF which is a standard calculation for determining an organization’s critical assets.

- **Capital Planning** : The Capital Planning tool is a separate license from Asset Lifecycle and provides the ability to ‘model’ replacement dates and costs base one, some or all the factors above, such as age, meter, cost, ratings, usage and assessments. Going beyond a fixed or static replacement date, this is particularly helpful for budgeting for current and/or future year replacements based on the factors above.

- **Asset Lifecycle (AL) Reports:** Standard reports for all of the above modules. As with most modules in MaintStar Reports and Queries can also be used to meet an organization’s unique needs.

## Factors Affecting Asset Life

Whether an asset is a hydrant, pipe, vehicle, generator or building, it has a theoretical end of life date. This date can be shortened or extended by a variety of factors to include frequency of use, quality of maintenance, criticality of the asset and overall asset condition. The number of assets that an organization is responsible for maintaining may preclude rating or evaluating every single asset. Common factors that MaintStar uses to evaluate an asset include:

#### Asset Factor Description Where to Set

EOL Age : expected life versus current age This calculates the age of the asset using: Install Date – Current Date = Current Age An additional calculation determines years remaining: EOL Age – Current Age = Life Remaining End of Life (EOL) Age Set at Asset Type Level EOL Maintenance Cost : a percentage of allowable maintenance cost versus replacement cost End of Life (EOL) Cost is set at Asset Type Level as a percentage. For instance, setting a value of 50% would be factored into the tools listed above. The EOL Cost threshold is set to individual Asset Type(s).

Asset Lifecycle Module EOL Cost – Total Corrective Work Order Cost = WO Cost % Work Order Cost is automatically calculated by MaintStar through Work Order cost tracking. **EOL Meters** (mileage or hours): expected meter life versus actual reading EOL Meters is set at the Asset Type level and helps to report whether an asset equipped with a meter is within or outside desired usage thresholds by calculating: EOL Meter – Current Meter = Meter Life %\* _Meter types are set at the asset type level and MaintStar supports multiple meters, but only the default meter is considered for this calculation End of Life (EOL) Meter Set at Asset Type Level **Ratings** : an ‘excellent to bad’ scale that allows for simple asset ratings Ratings can be customized by any organization and are typically from “excellent to bad” in a numbered or lettered format, ie “1-5” or “A-F”. The scales are called “Condition Indexes”. These are applied to individual Assets by an individual._ \*The Condition Index table stores the values for the ratings. Condition Indexes must exist in Setup Tables and then must be applied to the Asset Type. Once setup, Ratings can be individually recorded through an asset’s “Assessment” tab. Alternatively, the Rating Wizard can be used to automate these ratings. **Assessments** : a formal process to rate assets with replacement cost and/or life remaining Using Condition Indexes and a formal assessment process, the Asset Assessment tool can be used provided updated replacement and/or cost information to assets. These are applied to individual Assets by an individual. Once setup, Assessments can be individually recorded through an asset’s “Assessment” tab.

### TO ENSURE USABLE OUTPUTS, ORGANIZATIONS MUST CREATE AND MAINTAIN

### THEIR DATA IN ACCORDANCE WITH THIS DOCUMENT’S RECOMMENDATION

## Configuration and Uses of End of Life (EOL) Settings

To ensure accurate use of the tools above, there are settings that must be applied to Assets and Asset Types. Below are those critical settings: Using End of Life (EOL Age) Settings EOL Age: As a reminder, this is set at an Asset Type by Asset Type basis. Therefore, “Heavy Duty” and “Light Duty” trucks can be given different life expectancies.

Asset Lifecycle Module

1. Navigate to Assets > Asset Type and locate the desire Asset Type. There is a field labeled “EOL Age”. Enter the desired life expectancy in years, click Save. **Install Date:** This field is on the Asset itself, and this date typically refers to the date the asset has been purchased and/or placed into service.

1. Navigate to Assets and locate the desired Asset. At an individual asset basis, the field labeled “Install Date” (field name = install_date) must be populated. Following is an example of the calculation at the Asset level that shows the asset with a 12 year life expectancy and the number of remaining years based on the Asset Type setting: \*The field may or may not be present on every asset screen customization. If it is not present, customize the screen and add the “install_date” field.

Asset Lifecycle Module **Using End of Life Cost (EOL Percent) EOL Percent:** As a reminder, this is set at an Asset Type by Asset Type basis. Therefore, differing cost values can be placed to differing asset types. The purpose of this field is to provide a Work Order Cost threshold for all corrective (not planned) work completed against an asset.

1. Navigate to Assets > Asset Type and locate the desire Asset Type.

2. To set (or confirm) the Asset Types WO Cost, locate the field labeled “EOL Percent”. Set the desired value and click Save.\* **Original and Replacement Cost:** for the tools above to work correctly, original and replacement costs should be set. If this data does not exist the tools will use other factors as best it can to assess ratings.

3. At an individual asset basis, the field labeled “Original Value” (field name = original_value) must be populated with original cost data.\*

4. At an individual asset basis, the field labeled “Replacement Value” (field name = replacement_cost) should be populated with replacement cost data, even if it is an estimate.\* \*The field may or may not be present on every asset screen customization. If it is not present, customize the screen and add the “original_value” field.

5. The example above has a EOL Cost of 75% and an Original Value of $100. If Work Order Cost exceeds $75 then the asset is to be considered more expensive to repair then replace.

Asset Lifecycle Module **Using End of Meter (EOL Meter) EOL Meter (if meters are used):** As a reminder, this is set at an Asset Type by Asset Type basis. Therefore, “Heavy Duty” and “Light Duty” trucks can be given different meter values such as 200,000 miles for heavy duty and 150,000 miles for light trucks.

1. Navigate to Assets > Asset Type and locate the desire Asset Type.

2. To set (or confirm) the Asset Types default meter, locate the field labeled “Meter 1 Type”. Set the meter and click Save. *If there are NO meters set in the meter type, they must be set up by an administrator under Setup > Tables > Meter Types. *If the assets existed before the meter type was set, then it may be necessary to click the “Update Asset Meter” link which retroactively places the meter (with 0 mileage) on all assets within the type. **Updating Meters** Meter data can be obtained through a variety of means, all of which are extensively covered in documentation. In summary, meters can be updated via Work Orders, manually on Assets, and/or through a fuel system integration.

## Configuration and Uses of Condition Indexes and Ratings

To use asset ratings, condition indexes must be configured (by an administrator or with the help of MaintStar). The ratings are a way to document an assets condition by assigning a value. Traditionally different types of assets can be rated with different scales. Some may rate on a 5-point scale, 1 to 5 with 5 being best. Some use a 10-point scale where 1 is the best and 10 is the worst condition. Condition Index : the name of the scale, ie “1 to 5” or “PCI” for road pavement ratings. MaintStar supports a multitude of industry standard or custom rating scales. When setting up the index, a best and worst score value must be set. Condition Indexes are configured within Setup > Tables > Condition Index. In the “1 to 10” example below, the best and worst ratings are set.

Asset Lifecycle Module **Condition Rating:** contains the values that apply to the index. The example below shows the individual rating values assigned to the “1 to 10” index. **Setting POF Thresholds** In addition to setting up Condition Ratings, it may be helpful to assign POF thresholds, per the example below. This is used by all of the tools in the Asset Lifecycle module. There are two critical fields, “End of Life and “POF” in this table:

Asset Lifecycle Module

- **End of Life:** placing a checkbox in this field(s) signifies what an asset’s end of life is based on it’s condition. For example, a rating of “10” represents “Failed” so the organization may consider this End of Life for Asset Lifecycle and Reporting purposes

- **POF** : allows an organization to place POF values to corresponding Condition Rating. For instance, if a perfect rating is “1” then assign a POF of “1”, and a rating of “10” indicates a POF of 5, imminent failure, and so on. **Assigning a Condition Index to an Asset Type** : In order to use the condition ratings on assets, the indexes MUST be applied to the corresponding Asset Type. MaintStar supports multiple indexes on Asset Types, but only one can be a default (important to know for reports). Navigate to Assets > Asset Type > locate the appropriate Asset Type and click on “Condition Indexes”. From here the appropriate index and default value can be added or updated.

Asset Lifecycle Module

## Using Asset Assessments

Asset Assessments are a tool MaintStar provides to record rating and replacement information to individual assets. This is often done as part of a planned project to evaluate assets. Assessments can then be recorded in MaintStar to show an assets history of ratings. To use assessments, corresponding indexes and ratings must be applied (see above). Assessments are sometimes completed by contracted professional service providers to view and analyze the conditions of assets and provide reports of findings. It is critical that assessors use the same identification of assets as they are in exist in MaintStar. This is important as that information will need to be entered into MaintStar to become part of each assets record. Assessments can be found in Assets > Assets > Assessment Tab. Following is an example:

Asset Lifecycle Module The assessment screen has many different fields to record data. The key fields would be:

- Assessment Date

- Replacement cost in today’s dollars

- Years of life remaining

- There are many other useful values such as rating, criticality, and others, but the replacement cost and years of life remaining are the minimum values required When a rating score is recorded on this screen, it will update the asset rating with the current score on the main Asset Page to provide a quick glance of ratings. **Benefits of Using Assessments and Asset Ratings** Over time, capturing ratings and assessments can help an organization track an assets overall condition over time. With this information an assets degradation or improvement can be seen. The example below shows a road with Pavement Condition Index (PCI) ratings over time.

Asset Lifecycle Module

## Putting it all Together

The above has described the purpose of the Asset Lifecycle Module, the intention of the various tools, and the configuration required within MaintStar to make it all work. With this understanding, the various tools can now be effectively used.

## Using the Rating Wizard

Recognizing the difficulty in manually evaluating every single asset, MaintStar provides a tool named “Asset Rating Wizard” that provides a ‘mass’ rating to assets based on the End of Life (EOL) data, as mentioned at the beginning of this document. This module can be accessed from Asset Lifecycle > Asset Rating Wizard. Given that this tool can perform bulk updates to assets, it is important that only trained and authorized individuals use the tool. The Rating Wizard consists of the following components:

- **Criteria** : Sets which asset type or Assets are to be evaluated and rated

- **Rules** : Uses the EOL rules contained in the Asset Type screens to measure against (these can also be adjusted on the fly if desired)

- **Calculated Setup** : an automated process by which assets are selected an updated en masse

- **Manual Setup** : Allows to override asset(s) if there are exceptions

Asset Lifecycle Module To successfully run the asset wizard, the base EOL and related data must be populated on the assets, as discussed in this document. Furthermore, a default Condition Index MUST be assigned. MaintStar understands it is nearly impossible to have data in every single field for every single asset. As such, it does it’s best to take what data is there and come up with the best rating based on the information entered. The following precedence is set within MaintStar when evaluating data:

- Age, then

- Meter (if present), then

- Work Order Cost, then

- Current Rating (if present) **Running the Rating Wizard**

1. Navigate to Asset Lifecycle > Asset Rating Wizard

2. Select the Criteria tab

3. Select either a single Asset Type (must be done one at a time) or multiple Asset IDs, click Retrieve

4. Assets within the Asset Type will be retrieved and displayed. From here any key data to be used by the wizard will be displayed (Age, rating, etc).

5. Click the Rules tab

6. This displays the default EOL values assigned to the asset type. For purposes of the rating, these values can be adjusted directly from this screen by clicking “Edit”

Asset Lifecycle Module

7. When ready, click “Calculated Setup” (alternatively Manual Setup) can be used and is discussed in the steps below.

8. Click the “Calculate” button. This will model (but not apply) the ratings. The dialog box will display statistics on how many assets will be changed, unchanged, or with insufficient data.

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

- **Consequence of Failure (COF):** a value judgement of failure using the criteria of financial, environmental, and social impacts which can be valued differently by giving more weight to one type of consequence than another

- **Probability of Failure (POF** ): a determination of the likelihood or probability of failure, which is often adjusted due to asset condition, frequency of use, environmental conditions, etc.

- **Criticality** : the measure of risk/importance associated with an asset As mentioned above, criticality is a risk assessment process. The overall risk is determined by the probability of failure and the consequence of failure. The assets that have the greatest probability of

Asset Lifecycle Module failure and the greatest consequences due to failure will be the assets that are the highest risk and therefore the most critical. The assets that have low likelihood of failure and low consequences if there is a failure will be the least critical assets. To calculate the criticality score for a given asset, multiply its probability of failure rating by its consequence of failure rating. **Criticality Scores (without Redundancy)** Most POF and COF values are from 1 to 5, with 1 being a low consequence and probability and 5 being a very high risk consequence and probability of failure. Following is a simple example:

### POF=2 \* COF=4 = Criticality of 8

Criticality Scores (with Redundancy) In addition to the above, organizations may choose to factor redundant systems into their criticality scores. The idea is that if a backup system exists then the consequence of failure is lowered. The calculation for this would be:

### Criticality = POF _ COF _ (100Redundancy)/100

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

4. If the intention is to overwrite ALL COF values for particular Asset Types, click Edit on the Asset Type and update with the desired value.

Asset Lifecycle Module **Apply COF Values to Assets** (this is irreversible unless the Wizard is re-run)

1. If the intention is to set or update a new COF value for the chosen Asset Type, Edit the line, enter the “New COF from Asset Type Setup” (1 to 5 value).

2. When ready, click Save, then “Update Asset Type”

3. Those values will now be placed on ALL Assets within the type **Running the Probability of Failure (POF) Wizard** MaintStar provides licensed tools to automate much of the data entry. Once the Consequence of Failure (COF) has been identified for an asset type through either manual entry or the COF tool, POFs can be calculated using the POF Wizard. Setting POF Values to Assets using the Wizard

4. Navigate to Asset Lifecycle > POF Wizard

5. Select an Asset Type, then click Retrieve

Asset Lifecycle Module

3. Click the Rules tab and validate or update the factors that help to determine POF values. As a reminder, these values are pulled from the Asset Type settings. Changing the values here does NOT reset Asset Type settings. This is helpful for performing adjustments as needed.

4. Click the Calculated tab.

5. Click Calculate to Calculate POF Values based on settings above. It will display current (if they exist) and proposed POF Values.

Asset Lifecycle Module

6. Click OK

7. Either Select or Deselect rows for desired changes.

8. Click Apply to commit the POF Values. **Running the Criticality Wizard** MaintStar provides licensed tools to automate much of the data entry. Once the Consequence of Failure (COF) and Probability of Failure (POF) values have been assessed (as identified above), the Criticality Calculation can be ran from the Criticality Wizard. **Calculating Criticality**

9. Navigate to Asset Lifecycle > Criticality Wizard

10. Select an Asset Type, then click Retrieve

11. Click Preview and Calculate

12. This screen will COF and POF values as well as criticality, some or all of which might be incorrectly displayed, which is the purpose of this tool

Asset Lifecycle Module

5. Click Calculate Criticality, then OK

6. All Criticality scores will now be calculated and committed to Assets. **Manual Assignment of COF, POF and Criticality to Individual Assets** As indicated above, these values can be assigned either through automated tools or via manual data entry. Manual entry is the least desired method as it is time consuming, however, certain situations may necessitate its use.

7. Navigate to Assets > Assets locate the desired asset

8. Locate the field labeled “COF”, “POF” and “Criticality” and set the desired values (from 1 to 5) \* \*the “cof”, “pof”, and “Criticality” fields may need to be added to asset screen customization(s)

9. Click Save and confirm the proper calculation is performed.

10. Only applies the values to one asset. All assets must be individually updated if this path is used.

## Capital Planning

The Capital Planning tool is a separately licensed tool that provides the ability to ‘model’ replacement dates and costs base one, some or all the factors above, such as age, meter, cost, ratings, usage and assessments. Going beyond a fixed or static replacement date, this is particularly helpful for budgeting for current and/or future year replacements based on the factors above.

Asset Lifecycle Module **Running Capital Planning**

1. Navigate to Asset Lifecycle > Capital Planning

2. The Setup tab is where differing values can be used for modeling

3. In addition to a “Default” model additional modeling scenarios can be created (discussed below)

4. Below is a summary of the Capital Planning Setup

- **Inflation Rate Percent:** The rate of year over year inflation to provide an adjusted replacement cost

- **Asset Threshold:** The desired Replacement Cost of an Asset. For instance, if this is set to $10.00 then it will only return items over that amount.

- **First Fiscal Year:** Returns the year in which modeling is desired.

- **Number of Years:** Sets how many years ahead to return replacement costs.

- **Meter Lookback Years:** Sets number of years into history to project how many miles will be driven each year in the future.

- **Pct Lookback Years:** Sets how many years into history to project how much the maintenance cost will be each year in the future.

5. Once desired values are set for the default profile, click Save

6. Click the Fiscal Calendar tab to set Fiscal Year periods (if necessary)

Asset Lifecycle Module

7. Click Replacement Schedule by Assets

8. Select a desired Asset Type

9. To ensure all factors are considered, select all check boxes, then click Run

Asset Lifecycle Module

10. This will display projected replacement costs and years based on the common factors contained within this document **Setup of Additional Capital Planning Scenarios/Models** MaintStar allows for additional models to be created whereby replacement schedules based on differing scenarios or models can be created. This is helpful for developing replacement schedules based on budgets, changing replacement requirements, or planning for the future with differing ‘start’ dates.

1. Navigate to Asset Lifecycle > Capital Planning

1. The Setup tab is where differing values can be used for modeling

1. In the grid, click “Add” and establish new values, for example:

1. Click Save

1. Click on Replacement Schedule by Asset, select appropriate options (as above) and select desired model to run.

Asset Lifecycle Module

## Asset Lifecycle (AL) Reports

These can be found in Asset Lifecycle > AL Reports. Below is a summary and function of the reports.

- **Risk Matrix:** This report shows the risk (based on Criticality) of selected assets.

- **Rating:** This report shows a summary of ratings assigned to selected assets.

- **Alerts:** If Alerts are used and entered on Assets, this report shows those Alerts in a single report.

- **Acquisitions:** If the Acquistion tool is used, then this report will show all acquisitions for the desired period.

- **Disposals:** If the Disposal tool is used, then this report will show all disposals for the desired period.

- **Probability of Failure:** This summarizes all POF values for the selected asset type.

- **Consequence of Failure:** This summarizes all COF values for the selected asset type.

- **End of Life:** This report provides a summary of all Assets that are at End of Life.

## Additional Reporting Options

As with all modules within MaintStar, custom Queries, Reports and Key Performance Indicators (KPIs) may be extremely helpful in providing results unique to an organization’s needs. Below are examples of such reports. \*The KPI module is a separately licensed product

Asset Lifecycle Module **Example of Asset Report using the KPI Dashboard Example of Asset Report using the Query Tool**

## Enterprise Asset Management (EAMS) v15

# Work Planning Module

### End User Documentation

### Update 12 /30/2024

Work Planning Module

## Work Planning Module Overview

The Work Planning Module is an optional and licensed business management method of identifying and evaluating activities that an organization performs, using activity-based costing to carry out a value analysis to improve strategic and operational decisions in an organization. It is also known as Activity Based Management. By evaluating planned versus actual work, organizations can optimize the planning and allocation of resources. While a work order shows the work completed, work planning shows what needs to be accomplished with the resources available. Work Planning builds on what the work order captures from a higher perspective. The work plan seeks to analyze key activities that the organization performs and not just capture costs of their execution, but to establish goals for future accomplishment. These future goals for activities and established for accomplishment value and for expected cost, based on available resources. The Plan can then be compared to actual accomplishment and cost to determine if the organization is on track to meet the established goals, or if resources should be adjusted to gain efficiency. Due to the complexity of initial setup and ongoing maintenance, it is strongly recommended that MaintStar provide training and system implementation assistance for this module.

## Planning and Budgeting for Municipalities Overview

MaintStar’ s Work Planning System is specifically designed for municipalities to track varieties of daily activities, such as roads, sewers, traffic signs and other infrastructures repairs/replacements. This module is designed as a financial tool and is activities driven. It provides a great degree of detail for budgeting purposes, and in addition to planning capabilities, tracks actual amount of work performed against what was planned or budgeted. The infrastructure planning capabilities includes specific equipment requirements, (trucks, bulldozers, sweepers, etc.) materials needed (concrete, paint, etc.) as well as crew size planning. It also tracks crew productivity and provides automatic cost roll up to specific city department, subdivision, multi-level cost center, area etc. The planning capabilities provide a great degree of built-in flexibility and can be implemented on weekly, monthly, quarterly, or annual basis. It includes financial and budgeting components and should not be confused with a simple work order as it does more – it processes estimated work against actual.

## Definitions

To project a budget for labor, materials and supporting equipment requirements, the following information needs to be entered and maintained in MaintStar:

- **Management Unit** : often a Department, Division, Project or specific cost center

- **Activities** : actual work or description of work to be accomplished, often tied to a unit of measurement, i.e. “HVAC Installation” with a measurement of “Each”

- **Work Quantity** : the total volume of work per specific type of jobs, which is called Activity. For example, in case of estimating road-paving activities, total miles of roads need to be paved

- **Quantity per unit** : unit of measure = 1 mile

Work Planning Module

- **Average Daily Productivity** (ADP) – how many units produced per day by crew. Example: 10 miles/day per crew

- **Crew** : group of people performing specific tasks

- **Total crew days required:** total work quantity/crew daily productivity

- **Unit Cost** : budget/total work quantity (including labor and materials)

- **Account Number** : Specific cost center-from MaintStar setup tables

## Work Planning Example

In this example, there is a monthly plan to pave 100 miles of roads. The job to be performed by a maintenance crew consisting of:

- One supervisor

- Two paving specialists

- Two truck drivers

- Two maintenance workers

- 1 Dump track = 3 hours a day

- 1 Paving vehicle = 8 hours a day Budgeting period: The ‘time’ for which budget is setup and tracked (week, month, quarter, year) Percentage of activities distribution: percentage of total labor, equipment required, and materials distribution per each activity for each Management Unit for specific budgeting period. For example, if there is a budget for 12 monthly periods, streets paving may represent 8% of total daily activities for an entire maintenance department. The maintenance department may perform other activities, such as streets sweeping, trimming trees, repairing road drains, etc.

- % default come from an activity code setup Each activity must have a specific unique I/D or code, for example

- Streets paving code: 0001

- Streets sweeping code: 0002, etc. Labor days = total crew days x crew size / % per month. If there is a plan on a weekly basis, and a crew works 5 days a week, the total crew labor days =5x { (2people x1 1=full day for 2paving specialists+1x1(1 paving vehicle driver) +2x1( 2 helpers) + 1X 0.25-dump truck driver which works only part time-one quarter of a day on this activities }=5.25 man days X 5 days per week=26,25 crew total man days per week required to accomplish streets paving.

## Work Planning Menus

The Work Planning Module is accessed from the Work Planning menu item in the sidebar, and contains the following (all of which will be covered throughout this document):

Work Planning Module

- **Work Planning Setup** : Contains the various setup and maintenance screens

- **Actual Entry** : Allows for direct entry of time NOT associated with Work Orders, i.e. meetings, training, time off, etc

- **Work Plan Reports** : Collection of pre-built reports specific to Work Planning. Reports can also be supplemented via Query and Reports

- **Tools:** contains calendar and plan rollover tools

## Work Planning Setup Menu Overview

The Work Planning setup section has several tabs across the top of the screen. These tabs were separate menu items in earlier versions of MaintStar. \*The letter identifier is a reference from the previous version of MaintStar that many customers grew accustomed to and does not indicate any sort of precedence in setup.

- **(A) Work Plan:** The primary screen for setting up the actual plans – this is used after setups have been completed.

- **(L) Activity:** Screen for creating and updating activities. This can also be accomplished via Setup Tables in Setup > Tables.

- **(K) Management Unit** : Screen for creating and updating Management Units

- **(M) Percentage Templates:** Setup for allocation of resources by percentage or days.

- **(S) Calendar:** Screen for setup of Fiscal (or Calendar) Years

- **(N) Activity Programs:** A collection of Activities (i.e. Roads Activity Program may contain all activities pertaining to Roads)

- **(O) Labor Trades:** Setup of Trades. This can also be accomplished via Setup Tables in Setup > Tables.

Work Planning Module

- **(Q) Equipment Types:** Allows for classification of equipment, for instance “Trucks”, “Heavy Equipment”, etc.

- **(P) Material Classes:** Allows for classification of materials, for instance “Paint”, “HVAC”, etc.

- **(R) Pay Types:** Setup of Pay Types. This can also be accomplished via Setup Tables in Setup > Tables.

- **(X) Funding Sources:** Allows for additional funding sources to be added

## Work Planning Setup

The following is a suggestion for the initial setup of Work Planning. For the purposes of this documentation, there may be a slight variation in screens shown.

### Calendar Setup

Start by setting up the fiscal year in the Calendar tab. This setup choice allows you to establish the budgeting time periods. \*Note: If you check the check box to the left of a year line, a delete icon will appear next to the add button. DO NOT DELETE a line if it has valid data as it will not be retrievable.

1. Click on Add button on a tool bar, then enter budget year. For example, 2021.

2. Enter starting day of the fiscal year. Example 01/01/21

Work Planning Module

3. Enter number of budgeting periods in the period # column, for example 12 for the monthly periods, or 52 for a weekly. NOTE: please make sure you decide to go with weekly or monthly before setting up and saving your work.

4. Enter 1 in the Frequency number column if we budget on a monthly or weekly basis. It means one period per month or per week. Note: if you budget on a quarterly basis you may enter 3 since there are three months in a single quarter.

5. Using drop down selection in the Unit column select budgeting units (weeks, months, etc.)

6. Click in the Default check box to indicate that this is a current budget we are going to work on.

7. Select from the date format drop down lookup the date format you want to be displayed

8. Manual Entry: there are two options here.

- Crew Days: will be calculated automatically base on the current month and year when the Current Year button and the Hours button is clicked.

- Percentage: workdays shown in the year details grid at the bottom of the screen, are calculated based on percentage template that is setup under tab ‘Percentage Templates M.’

9. Leave the Budget Factors blank for now, it will be explained later

10. Default Template: you will need to setup the template under Tab M and update it here.

11. Click on Current Year button to select the working days for each month. You can change the working days by changing the numbers directly and working hours for each day by clicking on the hour buttons and view the changes. Click on Save Changes button if you want to keep the changes and click on Save button on the top of the current year table.

12. Number of monthly working days can be edited from this screen by clicking on specific month

13. In the Budget Factors columns enter any additional cost required if needed for this budget to be added on top for labor, equipment, material, non-general funds, etc. (often left as default)

- For instance, if you need to increase 10% to the total labor cost, you will put 1.10. So, if your total labor cost is $100.00, then the total labor cost for the budget is $110.00.

14. Click Save when Complete

15. Repeat for past/future years if desired

### System Equipment Setup

System Equipment Type Setup allows to setup equipment types or groups based on its functionality which will be used for planning. For example, using dump trucks, sweepers, and paving equipment for performing specific activities. This is the same setup choice as under Setup > Tables. Additional equipment types can be added if required. Enter hourly rate for equipment usage and estimated percentage of downtime (for example: a dump truck on average is used at 89% of its capacity, the rest 11% of time is spent on repairing it and performing a PM tasks.

Work Planning Module

1. Click Add to Add a new Type

2. Enter Billing Rates, and Remarks if required then Save upon completion.

- Rate/Hr.: will be used under option A. (work planning)

- Down Time %: will be used under option B which is in the report section “Recourse Requirement report’ for Equipment only.

- Billing/Hr: will be used under the “Actual Entry,“ menu section. This is the same as Billing Rate for Equip Type under Setup.

### Materials Setup

This menu choice allows to setup categories of materials to be used. For example, for road repairs different type of concrete may be used. Here we will identify just a generic group of materials called Class.

1. Click on New, then enter material class, description, then unit name (example concrete we would measure in cubic feet, then cost per unit.

2. Click Save

### Labor Setup

This table is the setup for Trades and Trade rates. Trades can also be set up from the Setup > Tables. For example, Lead Utilities Operator $96.49/hr. Click on New, then enter labor trades and rates. Click on Save when finished.

Work Planning Module

### Activity Programs Setup

(Planning menu, Option N.) This screen must be done here in Work Planning module.

Work Planning Module A group of individual activities is called a program. Example, street repair can be a Program. It consists of a variety of activities (tasks), such as sweeping, paving, removing old pavements, etc.

- Deleting a line: highlight a line and click on delete (scissors). If the line is blank, save it then delete.

### Activity Percentage Distribution Template

(Planning menu, Option M.) This template will be used under Option S (calendar setup) and Option K. Basically, this menu choice allows to replace a tedious repeatable data entry by setting up a template which can be reused. This template is used to set up the percentage of activities for each budgeting period. For example, streets sweeping represents 8% of total monthly work. You may establish different percentages for different periods for example June sweeping represents 8% of total work, but in July due to upcoming holidays and big crowds it will represent 12 % of total work. You may set up a template for sweeping with 8% activities per each month must be total to 100% for the entire year. Enter template id in a template field, then enter % per each month, then click on Save button on the right side of the window to save the template. You can save multiple different templates as you need. Templates are yearly dependent. When you are in this screen, the options you have are the buttons on the right-hand side. Note: you can enter your own numbers if it adds up totally 100. The number is the percentage number

### Setup Buttons and Options

- New/Add: create a new template

- Calculate Highlight Rows: highlight (Ctrl + left mouse clicks) the months you want to calculate percentage of work equal to 100%, then click this bottom.

- Save: to save your template and changes.

- Select/Return allows you to select a different template then apply to the plans by clicking on Get Default icon from another screen such as Option L.

Work Planning Module

- Whole Number: if this box is checked, you can only enter an integer in the percentage fields. No decimal numbers.

### Pay Type

The Pay Type table allows you to create different calculations of hourly cost for Labor pay. When labor entries are made for a technician in a work order or in direct entry, you can use the pay type field to select a pay type from this table to be applied to that entry. The formula you see here will adjust the labor rate for the labor entry.

1. Click add to add a new pay type.

2. Give it a name and description.

3. You have three ways to manipulate the standard base pay rate:

4. HrFactor Pay = This value is a multiplier to the base pay rate. 1.0 is no change, 1.5 is time and a half, 2.0 is doubletime.

5. Hrfactor Xtra= This value will add to hourly calculation. Example Susan has an hourly pay rate of $25.00. If the pay rate we apply has a value of 2 in the Hrfactor Xtra, Susan’s rate will be calculated at $27.00 per hour ($25+2).

6. Flat rate= This adds a flat amount for each entry. It would be used if you have a call out bonus paid if a technician is called out during the middle of the night etc. A Flat rate of $200.00 will add $200.00 to the normal hourly rate for a labor entry. Example John was called out during the night to solve a crisis. He worked for 4 hours. His hourly rate is $30.00. 30x4=120+ 200 flat call out rate =$320.00

7. Put a check mark in your default pay rate type checkbox, and it will be applied to labor entries by default.

Work Planning Module

### Activity Description

(Planning menu, Option L.) This menu choice allows you to create Activity Codes. An Activity code describe in plain English specific activities steps. The Activity code is a key element in Work Planning. It tracks “what work was performed”. The Activity code can be linked to the Activity Programs. Multiple Activity Codes can be link to one Activity Program. For instance, we have Activity Program of Road Repair. We can link different Activity Codes to this Activity Program such as Sweeping, Patching, Curb Painting, etc. Note: always save before leaving the screen. To change the Activity Distribution Percentage:

1. Click on Get default icon on the tool bar and select distribution template (from the previous (M) menu choice) to link to this activities by using Select/Return button, then click OK to save.

2. If you made any changes to the Activity after creating the Work Planning, you must select other activity, save; then re-select the activity, and Save to apply the new changes.

3. If you made changes to the description after creating the Working Planning, it will not apply the current work planning. You can add the descriptions directly on the work planning by clicking on the Edit Task, save it, then click on Edit Task again to close. Another way to apply the text changes is to use option U.

Work Planning Module

- Activity Code: example 0001 for paving, then description

- Activity Program: (was previously established, example roads repairs), M option.

- Inventory Unit: this was done in MaintStar Setup Module, Unit of Measure (example linear foot). The Inventory Unit can be typed in on this screen only. Inventory Unit and Work Unit don’t necessarily have to be the same.

- Work Unit: this was done in MaintStar Setup Module, Unit of Measure

- Same as Labor: if this box is checked, the qty work unit will be calculated the same as the unit of the labor cost. Normally, in most cases this box should not be checked; but, for Meetings example above, this box should be checked since you don’t have the quantity for meetings; so, the qty is the ‘same as labor’

- Work Location: comes from Maintstar Setup Module, locations setup

- Low and High: not used at this point The four windows below are text instructions for the project. See screen shot above. You must fill them out before going to Option A, or you can leave it blank and fill it in later under Option A., Edit Task.

- Description of Work

- Planning Criteria

- Work Method, Check Point

- Note

### Management Unit (Previously called Activity System) Management Unit Setup

(Planning menu, Option K.) Note: each level MUST be saved before next level is entered. Each level has its own Labor, Equipment, and Material Available.

Work Planning Module This portion of setup may be quite challenging to comprehend. We recommend on-site assistance and training to provide proper guidance as well as insurance that it is done right. The Management Unit is a way to structure a numerical code sequence which represents hierarchical levels in the structure of the organization. The code structure indicates the level and relationship of each work group in the hierarchy. The numerical coding has a purpose and must be created in the following format. When we do work planning, MaintStar allows us to plan for multiple departments which may be structured in hierarchical order. Example the planning to be done for a department (first level) which consists of the following sub departments or units (level 2). For instance, under “Public Works” you may find: 1 Streets 2 Parks 3 Sewer 4 Waste Water and so on… The streets department may consist of two following sub departments (level 3) Highways, Local Roads, and so on… We can budget for the entire Public Works with drill down up to 8 levels. With such capabilities you may budget for practically any size of operation (remember, to locate any individual in the entire 6 billion universe we may need just about 7 levels-Country, City, Street, etc.) Management Unit (MUST BE UNIQUE). It can be a department of organization for which we are setting the plan. Management Unit can be also a specific project, which needs to be tracked. It is identified by the Management Number which is a specific account or cost center where cost is charged. It can be broken down in hierarchical order up to 8 levels-for management reporting. Make sure to click on Save (OK) button for each administrative Number or before exiting the screen. The Management Unit Number (accounting number) consists of 8 levels (displayed at a top of the screen-8 fields). We use dashes in this example to show different levels of reporting structure and indicate separate fields of entry. Each layer down in the organization adds an additional digit to the Management Unit number. The example of a Management Unit Number is 111PB can be entered in the first left field (up to 5 alpha-numeric characters)-we will call this field first level. For example, 111PW can be Public Works Department. Then one alpha numeric character can be entered in each of next 7 fields. we will call these sub levels If we add another character (1) to the next field, we will have for example: Streets sub department UNDER Public Works 111PW1 Under Streets sub department-Signs department 111PW1 1 Under Streets sub department-General Maintenance sub department 111PW1 2 Parks sub department UNDER Public Works 111PW-2 and so on.

Work Planning Module Example: We entered 111PW-1, then Save. To enter the next Management Unit #, 111PW-2 just override the last character of previous entry, for example character 1 with 2, then click on Save. Now we have entered two accounting numbers 111PW1 and 11PW-2. To view the previous Management Unit number, use Green left pointing arrow. To view the next Admin No. use right Green arrow or click on the Open Search to search for other Management Units. Each level of Management Unit Number (Cost Account No) needs to be linked with the corresponding Management Unit (project, for example). Basically, Management Unit as mentioned above is a project, which needs to be tracked. The cost will be charged to specific Accounting Number – we call it Management Unit Number which we just finished setting up in our example. Now we are going to set up a linkage between Management Unit and corresponding Admin. Number. Another words, we need to indicate which projects are charged to which accounts. Please enter all Assets in the asset section which are identified as equipment. They are created in the asset section of MaintStar. Equipment use will be planned for and tracked in the Work Plan. Equipment would be vehicles such as trucks, graders, dozers, and other heavy equipment. Equipment could also be smaller items such as mowers, generators etc. Then come back and using Drop down windows select specific Equipment-(right side of the screen) for displayed Management Unit Number Streets Repairs. Then save. To assign more Systems to next Management Unit Number, override information in a Management Unit Number field by typing it over, then link is with Management Unit using drop down window, then Save after each entry. This linkage is mandatory. Note: Each System linked to specific accounting level can be entered only once and cannot be reused for a different Administrative Number. All linkages must be unique. Example Project A (Management Unit A) will be always charged to Administrative Number 11PW-1. You cannot charge the same project A to another Admin. Number 111PW-12, or 11AB-124,etc.

### Deleting or Changing Management Unit

Go to Management Unit menu, open the search link, select the Management Unit you need to delete or change, click the check box on the line for the management unit you want to delete. The delete icon will appear over the list. click the delete trash can to delete. After entering Management Unit information, we can proceed to the next step. At the bottom of the screen, we show 12-month calendar (can be also setup on a weekly basis-up to 52 weeks). This information comes from Calendar setup (Planning menu, sub Option R). This calendar can be set up based on 8 working hours per day-default. Or 9 and 10 hours per day if required. This calendar also indicates number of working days per month (excluding weekends)

Work Planning Module If you check boxes on the left side, it will include weekends and holidays. The holidays schedule setup is under Maintstar Security module). You may override the number of working days available per each month right on the screen, then Save.

### Entering Labor, Equipment, and Material Resources.

The next step is to enter departmental resources required to each level to perform all jobs. Basically, we will enter labor available (Labor Trades and number of people per trade, then Materials available and Equipment available to perform a job. For example, Streets department has 10 drivers, 3 electricians, 5 sign inspectors and 10 trucks. For each accounting level you can set up this information. The setup for each level or department is independent, so we will not roll up labor and equipment resources at this moment to an upper level. It will be done through reporting later. Click on specific administrative accounting field (up to 8 levels) then click on Tab Labor Available-top of the screen. The labor entry screen will be displayed. Click on New, then enter specific trades and quantity of people per trade. Upon completion click on Save. You may enter as many trades as you like. Upon completion Click on Equipment Available Tab and enter equipment information. Upon completion Click on Materials Available Tab and enter materials information. Repeat this entry for each accounting Administrative Number code AND each Administrative System. Exit the current window or the previously open window. The first part of the general setup is completed. Now we are ready for a Planning Screen Setup

### Work Planning Screen Setup

Planning Menu, Option A.

- The bottom section shows the budgets for the whole Management Unit that includes one or more activities, with the total Labor Days for all Activities, and total Daily Employees for all activities. The Planned Budget in the middle right hand side is the planned budget for one activity of the current screen.

- The middle section shows the percentage distribution template, labor days, and crew days for the current activity.

- The Left and Right Green Arrows will display all activities within the Admin System, or the next admin system.

- Edit Task icon: allows you to edit the activity tasks. Click on the icon to edit. Click on the icon again to turn it off. Type: select Activity

- Code: you must type in the exact activity code that was done under option K

- Image Location: double click on the line and look for your image, then Save and exit

Work Planning Module Click on the New button to obtain the Working Planning #. Note: make sure to Select Admin Sys and Activity Code before clicking on Save button for the plan to be calculated properly. Note: the system is designed as a planning financial and management tool, not as a fixed program. Meaning that you can use this menu option to manipulate the program in different ways. Upon setup completion you would need to manipulate this information to obtain a specific result. This screen provides an annual plan visual information on a monthly – 12 months (or weekly-52 weeks) basis for labor days and cost distribution per specific activity. The initial selection whether the planning is to be done on the weekly or monthly basis is under Planning Module Menu, Option R-Calendar setup. Please do not switch from weekly to monthly planning at your discretion or vice versa. This is a one-time setup. Decide up front and stay with it until the end of the planning year. This screen allows us to link activity to each Administrative System, (specific department or project) so we can calculate later a monthly basis labor requirements per Administrative System. An Management Unit may have multiple activities attached to it.. For example, for Streets departments the following activities are to be performed:

- Sweeping

- Streets repairs

- Signs and traffic lights inspection

Work Planning Module **Linking Management Unit with corresponding Activity** Let Maintstar know which activities need to be performed per Administrative System, a linkage needs to be established. You MUST complete all fields in Activity Code (option K) before linking to Management Unit. Click on New, select Management Unit using drop down window, then select Activity code. For instance, Management Unit = Streets, Activity Code=Asphalt Repairs, Sweeping, etc. **Labor Tab – Equipment Tab – Material Tab** Note: make sure to click on Save (OK button) for the Work Planning to be calculated properly. If changes are made elsewhere after the Work Planning has been done, make sure to click on Save for the work planning to be re-calculated. **Labor Tab (labor cost)** This is hourly rate, and Qty is 1 person, not 1 hour. Click on labor tab, then click on Add Detail icon on the top toolbar (icon looks like a clipboard) if you need to add a worker. Click on Trade drop down box to select a worker; description and rates should be filled in automatically, this was set up under option N. (Labor Trades). You can manually change the rate if you wish. To add another Trade just hit enter or click on Add Detail. Total Labor Rate will be multiplied by the hours a day based on the calendar setup template. Total Labor Cost = Total Rate _ Hrs a Day _ Crew Days. To add additional workers, click on the Add Detail icon again. To delete worker, click on the worker, then click on the Del Detail icon (red scissors). Clicking on the wrong scissors will delete the Work Planning#, but you will be confirmed. **Equipment Tab (equipment cost)** This is hourly rate, and Qty is 1 equipment. Click on Equipment Tab, then click on Add Detail to add Equipment. Add and delete should be the same as Labor above. These pieces of equipment were set up under option P. To delete equipment, click on the equipment, then click on the Red Scissors. Total Equipment Rate will be multiplied by the hours a day based on the calendar setup template. Total Equipment Cost = Total Equipment Rate _ Hrs. a Day _ Crew Days. **Material Tab (material cost)** This is the daily rate. Click on Material Tab, then click on Add Detail to add material. These materials were set up under option O. Add and delete should be the same as Labor above. To delete a material, click on a material, then click on the Red Scissors. Material total rate will be multiplied by the crew days. Total Material Cost = Total Material Rate _ Crew Days **Work Units** This is a yearly work units. Example: 100 trees a year, can be referred as inventory. **Qty per Unit** This is known as ‘level of effort’. If it is 1, then you can trim 100 trees a year. But if you can only do 50 trees a year, then the qty per unit is 0.5. This is just one example. Different methods can be used depending on what and how you want to plan. **Total Work Qty** Work Units times Qty per Units. (100 _ 1) = 100

Work Planning Module **Daily Work Qty** (meaning a day of work qty, and it does not have to be everyday) This is your estimation of how many trees you can do a day. Some call it ADP (Average Daily Productivity) **Unit Cost** Unit cost = planned budget / total work qty. **Unit Hours:** (next to Unit Cost) how long it takes to do one unit is: [(Labor Days) (8 hrs. a day)] / Total Work Qty **Crew Size** Each worker is counted as 1, under Labor Tab, if you have 2 workers, then crew size is 2, or if you have 1.5 workers, then crew size is 1.5. **Crew Days** Equals Total Work Qty divides Daily Work Qty. Crew Days = Total Work Qty / Daily Work Qty These crew days then will be divided into 12 months. This is a yearly plan **Budget Factor:** check this box if you want to apply your Budget factor that was setup under Option S.Calendar Setup (scroll to the right) **Labor Days:** equals crew size times crew days (labor days = crew size \* crew days) Employees = Labor Days of Budgets Month / Workdays of that month This is the total number of all employees required for this period, for all activities, and for this admin system only. **Lump Sum Budget, Non-General Fund:** enter these amounts into the boxes if you have any to be added to Planned Budget. **Budget Factor Box** : if this box is checked, the total Planned Budget will be calculated based on your settings under Option R, and is calculated as follow:

- Labor (Budget Factor) = (Total Labor Cost _ Hrs. a Day _ Crew Days \* %Labor Factor), then add to the total Planned Budget (option S)

- Equipment (Budget Factor) = (Total Equip. Cost _ Hrs. a Day _ Crew Days \* %Equip. Factor), then add to the total planned budget (option S)

- Material (Budget Factor) = (Total Material Cost _ Crew Days _ %Material Factor), then add to the total planned budget (option S)

- Lump Sum Budget (Budget Factor) = (Lump Sum Budget \* %Lump Sum Budget Factor), then add to the total planned Budget

- Non General Fund (Budget Factor) = (Non General Fund \* % Non-General Fund Factor), then add to the total planned Budget

- Planned Budget: this is the total amount of the budget for the whole year.

Work Planning Module

- Planned Budget=[[(labor rate * Wk Hr per Day) + (equipment rate * Wk Hr per Day) + (material cost per Day)] \* (crew days) ] + (Lump Sum if any)

- Add if required any overhead Lump Sum Cost and Non-General Funds Cost. Enter work units and quantity per unit (example: total streets =100 each street is 10 miles Enter average daily productivity example 5 miles/day. The information can be entered only in yellow fields. Information in gray fields is for viewing only.

- Click on Drop down window and select trade. Enter hours required per activities. The rate will be displayed from the previous setup. Click on Add Details button on a tool bar to add another record if required.

- Click on Equipment Tab and setup Equipment required per attached activities. Click on Add Details button to add another equipment

- Click on Materials Tab and add materials required. Click on Save upon completion.

- To add more activities to the same administrative system, click on New button on a Tool Bar, then select the same Management Unit and then select next activities from a drop-down window. Then repeat above steps. Click on Save upon each entry completion.

- To view next activity for the same Management Unit use red arrows on a tool bar. If that was the last activity, you will be prompted for the next Management Unit displayed.

- To add the Tasks for the Work Planning, click on the Edit Task icon on the toolbar. Finish your tasks, then click on the Edit Task icon again to close. This task will be printed when you print out the plan. Printouts of the plans will show all your resource requirements used in the plan.

- To add new Management Unit, Click on New, then select Administrative System, then repeat steps above.

- The system automatically assigns a unique consecutive work plan number to each work plan sheet-top right. It also stamps date and time

- At the bottom the screen there are two windows are displayed.

- The following calculated information will be displayed in a gray fields (no editing)

- Crew Size, Crew Days, Unit Cost, Budget

- The middle window: 12 months or 52 weeks- shows planning information for a single activity

- The table is displayed with monthly (or weekly) information and shows projected percentage of a single activity scheduled monthly. For example, if we want to distribute activity evenly through entire year, we need to input 8,34% per months, which will total approx. 100% for an entire year.

- Labor days- shows total annual and monthly or weekly labor days required per single activity.

- The bottom window:12 months or 52 weeks- shows planning summary budget $ information for all activities for the whole Management Unit

- Employees-Number of employees required per month or week to accomplish all activities. This number could have a decimal point example, 10,5 employees

Work Planning Module

- The setup is completed. The next step is entering actual daily data in a system to track completed work.

- Note: After the Work Planning is set up properly, the main three factor keys here are now the Work Units, Qty Per Unit, and Daily Work Qty. You will manipulate these three numbers to fit your plan. Let’s look at a few examples: 100 meetings, 5hrs each meetings, 500hrs total. There are three different ways to manipulate these three numbers. **Example 1:** Total Hours: 500hrs 500hrs 500hrs Work Unit: 1year 100meetings 5hrs Qty Per Unit (effort): 500hr 5hrs a meeting 100meetings As you can see total hours are 500hrs, but there are three different ways to manipulate these numbers. A) Adjust the total hours for the whole year B) You want 100 meetings a year, but you want to adjust how many hours a meeting C )You want 5hrs a meeting, and change the number of meetings. **Example 2:**

- Wk Units: 12 meetings

- Qty per Unit: 1 (hour per meeting)

- Total Wk Qty: 12 hrs of meetings

- Daily Work Qty: 16 hrs (assuming you have 2 workers, 8hrs a day. This is the maximum productivity of work they can do a day)

- Unit Hour: 1 (this has to be 1 when dealing with hours) **Example 3:**

- Wk Units: 12 meetings

- Qty per Unit: 1 (1 day a month)

- Total Wk Qty: 12 days of meetings

- Daily Wk Qty: 2 days (assuming you have 2 workers, 8hrs a day. This is the maximum productivity of work they can do a day. Since unit is in days, 16hrs would be 2 days)

- Unit Hour: 1 (this has to be 1 when dealing with hours) **Example 4:**

- Wk Units: 1 year

- Qty per Unit: 1200 (draining per year)

- Total Wk Qty: 1200 drainings

- Daily Wk Qty: 5 drainings a day **Example 5:**

- Wk Units: 1200 miles

- Qty per Unit: 1 (hour per mile)

- Total Wk Qty: 1200 hrs

- Daily Wk Qty: 5 hrs a day The above examples are more like planning strategy to meet your budgets or your man hours.

Work Planning Module

### Adjusting Labor days calculation

To change the labor days, you must adjust the Qty per Unit as follows: Labor Days Desired (A) (A / B \* C / D = E)

### Actual Work Entry

Planning menu, Option F. The Actual work entry screen has two purposes:

- It is used to make new work planning entries for Labor, Equipment, Materials, and Work Quantity quickly. The entries are made in a grid like the LEM section of Work Orders.

- It is used to retrieve previous entries for editing The screen is divided into the top half and the bottom half. The bottom half is a grid used to make new entries or to display and edit entries that were previously made. The top half of the screen is used to set up common values for several of the fields in the bottom half grid. By setting them up first in the top half, there are fewer fields that will need to be selected for the entries in the bottom half. This helps you make the entries quicker and easier.

Work Planning Module

### To make Actual Work Planning entries:

Make sure the bottom half of screen is clear. Use clear field button if needed.

- Set the common values for your entries in the fields at the top

- Set the date

- Set the Management Unit and Activity

- Set Location code and account number if used.

- Click add entry at the bottom area. A new line will appear with the entry type set for labor because labor is the most common entry. Complete the line by choosing the technician’s name in the code/ID field. Enter Hours worked (use fractions, 1.5 for and hour and a half). Pay type if different from the default. The values from the top half should be filled in on the bottom automatically. To add a second line, you can use the ‘add entry’ button or press the enter key. The next line will appear, and the same type will be selected. In this example since we made a labor entry, the next line will be labor. When you are ready to change to another type of entry such as equipment or materials,

Work Planning Module you can change the type drop down. The field will change by typing the first letter such as L for labor, E for equipment, M for materials etc. Complete the fields for this entry such as the Id for the person and hours etc. You can also add crews with the add crew button. (Crews are created in the Work Order menu section. Follow the same pattern for equipment, materials and contractor.

### Work Quantity Entry

Work Quantity entry is dependent on the activity chosen. Different activities have different units of measurements for Work Quantity. Because of this, make sure your entry before the work quantity, has the correct activity code listed. The Work Quantity will be displayed with the correct unit of measure for the previous activity. Example activity potholes, unit of measure might be a count of potholes. Striping might have a unit of measure the number of miles of striping performed etc. The Validate button, saving the entries. The validate button can be used to check that your entries have entered correctly and required fields have been entered correctly. When you save the entries, all correctly entered entries will go away on the screen. They will be saved in the database. IF a line has a problem it will remain on the screen for you to correct and save again. APPLY ALL Button: USE WITH CAUTION! When the top half window is filled-in with all the information, you can use this button to apply all the top information to all your entries on the bottom half screen. Again, it will APPLY TO ALL OF YOUR ENTRIES, NOT ONE. If you need to make one change to your entry, just go directly to your entry and make the change to simplify your confusion.

### Actual Entry Work Order Entry

#### _PLEASE NOTE: THIS FUNCTIONALITY HAS CHANGED SIGNIFICANTLY IN VERSION 15_

Actual entries can record activities that are part of a work order or are stand alone. Actual entries can be used to record events that DO NOT have a related work order. For example, If you want to record some activities that have no asset but you want to record time and hours, such attending meetings, or time off etc., the Actual entry screen is a great way to track these activities. But if you DO have a work order already started, you can make your LEM entries here on the Actual entries screen if you prefer, instead of making the entries on the work order. To do this, the work order should be created, and you should know the work order number that you are recording time, materials, and work quantity to. You will see a work order field at the top section and on the individual entry lines.

Work Planning Module When you have the Work Order identified in your entry lines, (Labor, Equipment, Material, Contractor, and Work Quantity) THE ENTRIES WILL BE PUSHED TO THE WORK ORDER WHEN YOU SAVE. This is a NEW function and very powerful. You now have the choice of entering your LEM entries on the work order directly OR using the very popular Actual entry screen.

### Entry Tips

This menu choice is designed to enter actual work completed. The entry can be done daily, weekly etc. Tips for speedy data entry. If you would like to eliminate mouse usage for drop down windows data selection, for example in a Type field enter first character (example L for Labor or Alt + Arrow Down). The same for Code and other dropdown fields. Use the enter key to indicate that a data entry is completed in a current entry line and to create a new line of entry. Some previously entered information will be defaulted from the previous line of entry, to speed up repeatable data entry. To delete a record which is not currently displayed, click on Find to select the record then click on Scissors on a Tool Bar to delete. Then click on Save. If the top half screen and bottom half screen are too confusing for you, please ignore the top half screen and just make your entries right on the bottom half screen.

Work Planning Module **CLEAR FIELDS button:** is used to clear the top half window; so when the new button is clicked, there will be no default data filled-in in the fields of your new entry.

### Retrieving Entries

The actual entry screen can be used to retrieve entries already made for purpose of review or editing. RETRIEVE button: retrieving old transactions for editing purposes. The Fields at the top of the screen can act as filters to search existing records. Fill in the fields related to your search such as:

- Dates from and to, for a certain date range.

- Select a particular management Unit or activity code. If you leave any field empty, the empty field will not be filtered and all values for that field will be shown. First, do a lookup and pick an entry, then Retrieve will retrieve related entries that have matching Admin System and Activity. Click the Green Retrieve button to activate the search. The results will be shown in the table. **In Editing Mode:** RETRIEVE button: retrieving original old transactions for editing purposes. First, do a lookup and pick an entry, then Retrieve will retrieve and filter related entries that have matching Admin System, Activity,

Work Planning Module and Location. If different changes are made to these related transactions, retrieve feature will not consider them as orginal transactions, and will not retrieve them as related transactions. **CLEAR FIELDS button** : to clear the information on the top half screen. **CLEAR SCREEN button:** Clears the bottom half of the screen

### Work Planning Reports

Rollup/Summary & Group Length Concept: This feature is for the reports and it works the same throughout MaintStar wherever it is available.

- Rollup/Summary: is used when multiple Adm Systems are selected.

- Group Length: is how far you want to rollup Example:

- Management Unit # 00001 is M&O maintenance

- Management Unit # 000012 is Road Administration

- Management Unit # 00001221 is Road maintenance If we ran a report with these three management units selected and checked Rollup/Summary with Group Length of 5, then we will have the total cost maintenance for the park. As you can see M&O Maintenance #00001 has 5 digits. If we don’t check Rollup/Summary, then we would see a detail report of all three Management Unit In other words, Rollup/Summary provides the flexibility of summary cost report for any level. Let’s look at another example below.

### Running Reports

Resource Requirements (Planning Menu Option B.)

Work Planning Module This screen will give you an overview of the resource requirements such as Labors, Equipment, Materials, that are used under each Management Unit Number. There are three radio buttons for Labor Requirements, Equipment Requirements, Material Requirements.

- Management Unit: from the dropdown list select a management unit for the report. You can add additional management units. The ones you have selected appear below the field on the screen. Click on each Tab - Labor, Equipment, or Material, one by one to view your resource requirements report.

- Labor Requirements Radio Button

- This screen will show the Labor Resource Requirements for the Management Unit number you selected.

- The second column will show how many Labor Resources available for each type of labor. This available labor number was set up under Option J. (Management Unit - Labor Available tab).

- The third column is the header (label) for each row

- The fourth column shows the total number of workdays for each type of worker for your Management Unit # you selected. Ex: you could have Maintenance Worker for one category, and Supervisor for another. (Note: Workers and Supervisors are created under Option A – Labor Tab).

- (Yearly) Workdays = Number of Maintenance Worker \* Crew days; the same for Supervisor, etc.

- The Total Workdays then will be divided by 12 to find Monthly Workday.

- Then take the number in each month divide by the number of Calendar Workdays (that was set up under Calendar Setup Option R., Current Year Button) to find the number of Employee for each day.

- Take the Resource Labor Available minus Employee each day to obtain the remaining available

Work Planning Module

- The Total Manpower: is the sum of all workdays and workers required for the plan. (see below)

### Equipment Requirements Tab

This screen is almost the same as the Labor screen above.

- To obtain the Equipment Days: Take the Equipment Quantity times Crew Days. (Equipment Qty was created under Option A – Equipment Tab),

- Take the total Equipment Days divide by 12 to find the number of days the equipment is used in a month.

- Take the number in each month divide by the number of Calendar Working Days = Qty needed a day.

### Material Requirement Tab

This screen shows the total number of Material Requirement for the whole year.

- Total = Material Qty \* Crew Days (this was created under Option A., Material tab)

- Monthly Material = Total / 12

### Work Planning Reports

Planning Menu, Option C. Condition Tab This screen will allow you to run reports by Multiple Management Unit, or by Multiple Activities, or by Multiple Programs. If you leave all boxes blank, the report will show all your Work Planning, and that will take a bit longer time to run if you have a big database. Rollup/Summary and Group Length check box:

Work Planning Module Group Length is part of Rollup/Summary. The Group Length option is unavailable when the Rollup box is not checked. If Rollup box is not checked, the report will show the data in detail by default.

- Labor = Rate _ 8hrsaday _ Crew Days

- Equipment = Rate _ 8hrsaday _ Crew Days

- Material = Rate \* Crew Days

### Percent / Labor Days Distribution Tab

Select the radio button labeled Percent/Labor Days Distribution. This screen will show the percentage and labor days distribution for each month throughout the whole year. This was done under option R., M. and K. The labor days come from your Working Planning (A), then divided by 12 months

Work Planning Module

### Actual Work Report

Planning Menu, Option G. This powerful report has many ways it can be configured. The fields at the top of the screen filter the report data by date, Management Unit activity etc. If you do not set a value in a field, all data for that value will be displayed. The radio buttons select 4 different versions of the report. Set the conditions you want them click run to display the report.

- Actual Work in summary and in detail format

- Cost in detail and summary

Work Planning Module

### Work Status Report

Planning Menu, Option H. This report runs very complicated and sophisticated calculations. This report runs dramatically faster in version 15. This screen gives you the report of Period to Date and Year to Date of all the plans you created under option A. See Option A for further info. and could be from W/O’s. Run your Bi-Weekly reports to find out what w/o’s were done for the work planning. Throughout our manual we use 8Hrs a day of work.

Work Planning Module **Work Status (PTD/YTD) Report format (radio button):** please see Work Planning (Option A) for further details of where the numbers come from.

- Plan Days = Labor Days / 12

- Act Days = from Actual Work Entry or from W/O’s Labor Hrs. (4hrs or more = 1 day, 12hrs or more= 2days), or MISC. Cost. The Labor Date, and Misc. Date is used here, not issued date or target date. The same for parts. It is suggested that to enter all costs, except labor and material cost, under Misc. Cost Tab so that MaintStar can generate the productivity report based on the work quantity, and hours.

- Plan Qty = Daily Work Qty \* Crew Days (option A)

- Act Qty = from Actual Work Entry or from W/O’s Misc. Cost

- Labor Days Annual Plan = Labor Days (option A)

- YTD Actual are all from the actual entry and, if any, from wo’s labor cost and misc. cost

- Work Qty Annual Plan = Total Work Qty (option A)

- YTD Actual are all from the actual entry and, if any, from wo’s labor cost and misc cost

- Total Cost Annual Plan = Planned Budget (option A)

- YTD Actual are all from the actual entry and, if any, from wo’s labor cost and misc cost

- Hour@Unit Annual Plan = Unit Hours (option A)

- YTD Actual are all from the actual entry and, if any, from wo’s labor cost and misc cost

- Cost@Unit Annual Plan = Unit Cost (option A)

- YTD Actual are all from the actual entry and, if any, from wo’s labor cost and misc cost

Work Planning Module **Work Calendar Report format (radio button)**

- Labor days = crew size \* crew days

- Labor days then will be used to divide into 12months to obtain monthly labor days.

- Actual Daily Work Qty: o Crew Size (for any particular day) = total # of hours of all crew members (A) / by largest # of hours of any crew member (B) o Equivalent crew day (C) = total hours of all crew members (A) / (crew size (D) \* Standard workday hours (E)) The above numbers are computed for each day per activity and admin. System. They are then summed by each activity for all days of time in question. The average daily production = sum of all work quantity (F) / sum of all equivalent crew days (C). An example for a 10-hour workday:

- 09/01/01 – Jim works 8 hours and Jake works 4 hours then leaves. Sara joins Jim and works 2 hrs. They install 5 signs.

- 09/02/01 – Jim works 5 hours and Jake works 3 hours and Sara works 5 hours. They install 4 signs.

- Calculations: 09/01/01: crew size (D) = (8+4+2) / 8 = 1.75; Equiv. crew day (C) = (8+4+2) / (1.75 _ 10hrs/day) = .8 09/02/01: crew size (D) = (5+3+5) / 5 = 2.6; Equiv. crew day (C) = (5+3+5) / (2.6 _ 10hrs/day) = .5 Work Qty (F) = 5 + 4 = 9 signs Sum of Equiv. days = .8 + .5 = 1.3 ADP (average daily productivity or work qty) = 9 / 1.3 = 6.9 **Overview report format (Radio Button):** this screen will give you an overview of the last two screens.

Work Planning Module

### Planned Use Summary

Planning Manu, Option J. This screen will give you a summary report of what you have created under Work Planning Option A comparing with what you have used under Option F. Select your conditions then click on the Result tab to run the report.

### Rollover Duplication

Planning Menu, Option T This screen allows you to duplicate your previous budget year to the new budget year. If “Apply New Working Days” box is checked, new working days for the new year will be applied automatically. If it is not checked, the new year will have the same working days as the old one. BE CAREFUL!!! If you try to duplicate over an existing year, all you existing plans of that year will be deleted. You will be confirmed before deleting.

Work Planning Module

### Budgets Adjustment

Planning Menu, Option U. This screen allows you to adjust the funds to fit your plans. It can be increased or decreased by the percentage or by the amount entered. You then can view the differences and decide to update the new rates or to cancel out without making any changes. We offer a quick backup function so you can back up before apply the new rates, and to restore right after at the moment you apply the new rates if you accidently made a mistake. These backup and restore functions are not meant for database backup, and they will not work on different versions of MaintStar. Retrieve button: select your Management Unit, then click on this button to obtain activity budgets.

Work Planning Module

- Final box: enter the final amount you want to see for all budgets to be calculated. The key here is to enter the increase/decrease percentage number or the final number, and either to calculate all budgets evenly or calculate only highlighted lines.

- Update W/Plan button: click on this button only if you are sure that you want to apply new working budgets and to overwrite the existing budgets.

- Reduce: if this box is checked, the planning cost will be reduced; if not checked, it will increase.

- Run Calculation: click on this button to view the new Total Working Budgets or the Final Budgets.

- Same Percentage: enter the percentage# to increase (box unchecked) / reduce (box checked) all activities equally (the original budgets) or highlight the specific activities to be calculated.

- Direct Input: enter the amount directly into the yellow box where you want to reduce or increase amount. The bottom Direct Input option and the top right Enter Data option have to sync.

- Priority/Multi%: goes with top direct input option. First enter your priority number in the Priority box, like 1 or 2 or 3, then setup Priority/Multi%, then run the calculation button.

- Highlight/Select Data allows you to run Calculations on the hilted lines only. Hold down Ctrl key and left click to highlight.

- Enter Data allows you to enter the data directly to the budget yellow box and finish it with a tab. Make sure the Top right Enter Data is selected.

- Apply New Rates: allows you to make changes (%) right on those small boxes for Labor, Equipment, Material rates setup, and click on Update DB button. Then to apply to the working planning, you must click on Update W/Plan button.

Work Planning Module

- Select % Template allows to apply new % template without changing your template setup. Works with Update W/Plan button.

- Activity Distribution and Text Description: if needed, you must make changes in your Activities Distribution and text description first, then go here to apply the changes to the existing plans.

- Bottom Left Box: shows the different amount between the new working budget and original budget.

- Bottom Right Box: shows the total of the total and the bottom left box.
