## Enterprise Asset Management (EAMS) v15 

# KPI Dashboard 

## (Key Performance Indicators) 

### End User Documentation 

### Update 6/25/2024 


KPI Dashboards 

## KPI Dashboard Overview and Functions 

 A KPI dashboard displays key performance indicators in interactive charts and graphs, allowing for quick, organized review and analysis. MaintStar offers a fixed standard “Technicians Dashboard” and a licensed built-in KPI dashboard that is completely customizable and serves as a visual compliment to the Query and Reports module. 

- KPI (Key Performance Indicator) Dashboard requires a separate license, which can be viewed in     the Security->License menu. 

- “KPI-DASHBD” right is required to access the KPI Dashboard (Security->Users menu, “Security     Rights” tab). 

- Dashboards are filtered and secured similar to query and reports - users will see dashboards     created by them, or shared with them. 

- A dashboard will appear view-only if it was created by another user and it was shared with     "Read" rights. 

- The KPI dashboards are built-in to MaintStar. Any connection to external dashboards similar to     PowerBI and Tableau would be licensed and quoted. 


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

1. Ensure logged in user has appropriate permissions 

2. Edit the desired dashboard 

3. Click on the ellipses (three dots) 

4. Click “Dashboard History” 

5. A screen with the entire history of the dashboard will be displayed along with a preview 

6. Select the desired dashboard to restore 

7. Click the green “Overwrite Dashboard” button 


KPI Dashboards 


