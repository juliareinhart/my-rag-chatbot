## Enterprise Asset Management (EAMS) v15 

# Preventative 

# Maintenance (PMs) 

#### End User Documentation 

#### Update 3/1/2024 


Preventative Maintenance (PMs) 

## Preventative Maintenance (PMs) 

 Preventative Maintenance (PM) templates and schedules allow organizations to schedule and plan common routines that result in automated Work Order creation based on time and/or meter frequencies. For instance, if an organization performs oil changes on vehicles at 3 months or 3,000 mile intervals, PMs can be created to automate those Work Orders once the criteria has been met. Alternatively, annual building inspections can be set up to automatically create Work Orders based on a day/date combination. When setting up PMs, it is important to understand some common elements: 

- **Templates** : contains all data related to the PM, such as frequency, tasks, assets, rules, etc. 

- **Frequency** : defines how often or at what cadence the PMs will be launched, either via calendar,     meter, or both 

- **Fixed** : a fixed schedule will always run on a fixed date, no matter what, ie “First of every     month” 

- **Floating** : a floating schedule can run a defined number of days since it last ran, ie, “Every 90     days” 

- **Schedule** : contains the assets and the critical “Last Due Date” of a template 

- **PM Issue WO** : how PMs are launched (either automated or manual) 

## PM Menu 

 The PM menu can be accessed from within the Work Order, PM Template menu item. In this menu are three important PM Tools. 

- **PM Template** : contains all setup information for individual PMs 

- **PM Reports** : contains predefined PM Reports such as “Due Soon”,     “Overdue”, etc 

- **PM Issue WO** : primary means for launching the PMs manually or     configuring batch issue 


Preventative Maintenance (PMs) 

## PM Templates 

 PM creation begins with “templates” which is used set up and build PM Schedules. Templates hold the task, frequency Scheduling rules and other information about a PM service. A template combined with assets are the raw materials needed to create a PM schedule. As with all areas of MaintStar, screens are very similar to ease navigation. Main elements of the PM Template screen are: 

- **Details** : contains primary setup information on a template, very similar to the Work Order     detail page 

- **LEM** : as with the Work Order screen, Labor, Equipment and Materials can be populated on the     schedule 

- **Tasks** : tasks can be predefined – this is especially useful for inspections 

- **Frequency** : sets whether it’s daily, weekly, monthly, annually or even by meter 

- **Rules** : sets whether it is a fixed or floating schedule 

- **Schedule** : contains the assets 

## Creating a New Template 

1. In the Template menu, under Work Order click ‘New     Template”, a pop-up will appear. Type in a name for     the template, and a description. NOTE: You will see     the name of the work group you are currently in as a     reminder 

2. Click Create to save. 

3. Fill in the various fields as done with a work order to     have by default. These values will be prepopulated.     If a field is left blank, it can be filled in on the work     order itself after it is issued. 

4. Work Order ‘instructions’ can be set in two ways. They can be typed into the ‘WO Description’     box or tasks can be created with the task function. There is a check box below the ‘WO     Description’ to activate this process. 

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

- The Section Labeled “Don’t create this PM between” Lets you set a date range in which no PMs     will be generated. 

- The checkbox at the bottom of the screen is very important to understand.     When the check box is unchecked, the system will wait for one PM service to be completed     before the next one will be generated. If you check the box, the next service will be generated     according to the schedule even if the current PM is still Open. Note: If you only want one open pm for a service to be open at a TIME, LEAVE THE BOX UNCHECKED. On the right, the create work order checkbox should be checked. 

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

1. Set up frequencies in the Nesting tab, (The same way as described for the other method).     However, you DO NOT link in separate temples for each frequency. 

2. Once you have the frequencies set up in the nesting section, go back to the task tab. 


Preventative Maintenance (PMs) 

3. Add in tasks. It is best to put them in a logical order. Put the tasks that are in the shortest     frequency at the top and work your way down to the next NEW tasks and so on. You only need     to put the tasks in once. When you have the tasks entered, select the nesting drop down on the right for each. All the tasks that are for the shortest frequency will be set to n1. Then the tasks that add to the n1 tasks for the next higher frequency should be set for N2. The next higher frequency tasks should be set for N3 and so forth. This method is cumulative, N1 is your base set of tasks. These appear on every frequency cycle. The N2 tasks add to the n1 and so forth. As the PMs are issued the system will now add these tasks to the PM according to this schedule. 

## Scheduling 

 Assets and schedules are assigned to the template on the scheduling tab. Locate the template, open the scheduling tab. The top section of the screen is where to link assets to the template. You will also add in the last due date for each asset or group of assets. This is necessary. The ‘Last due date’ will allow the system to calculate when the service is due again. Last due date + frequency= next due date To select the asset line, click on the schedule number. The line will turn blue to show it is selected. If you click on the asset id you will leave this screen and go to the detail screen for the asset. When you 


Preventative Maintenance (PMs) select an asset in this manner, showing the line blue highlighted, the details appear in a schedule box below. 

1. Add an asset to the template using the ‘Add Asset” button. In this example we are working with     HVAC units. Select an HVAC and save. If you want to have several assets on the same PM work     order, select “Add Group” the group pop up will give you a choice of selecting a pre-made group     of assets or selecting several assets together on the fly     Note: The template can be used to make many PMs with different assets. When you add     multiple lines of assets, each line will create a pm. 

2. If the asset line has only one asset, it will be a single asset pm. 

3. If the line has a group of assets in it the pm will be created with all the assets in the group on the same     PM. 

## Issuing PM Work Orders 

 There are 3 ways to issue PM Work Orders: 

- Create WO from the PM Schedule Screen – if there is not already an open PM Work Order, the     green “Create WO” button can be pressed to launch PMs 

- PM Issue WO: Here you can preview PMs due now or coming due in the future. You can select     the preview with many criteria. You can select the previewed PMs with a checkbox and issue     them. 

- Batch Issue Setup – This screen allows you to set up conditions for PMs to be automatically     generated. You can manually issue a batch as well. 


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

6. Emails of people to be sent a     report of each run 

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

- Overdue PM Wo Report - Pm Work Orders Open for 1 to 30 days, 31 to 60 days, 61 to 90 days     and over 91 days. 

- PM Due Soon Report – Pms coming due in the future 

- Projected Cost – Projected costs of PMs. 


Preventative Maintenance (PMs) 


