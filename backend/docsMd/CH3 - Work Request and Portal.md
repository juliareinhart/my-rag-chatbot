## Enterprise Asset Management (EAMS) v15 

# Work Request and 

# Portal 

#### End User Documentation 

#### Update 3/1/2024 


Work Request and Portal 

## Work Request 

 The MaintStar Service Request Module is a licensed resource and is a versatile, and user configurable web-based application that allows service requests to be created and submitted. Once submitted they can be held for review, and approved requests can be turned into actual work orders in the MaintStar system without having to be re-entered. Work Requests can be entered or submitted via a MaintStar Portal, the Mobile Citizen application, or by staff (usually as a result of phone calls/emails). The system has been designed to serve 3 different audiences of users: 

- **Internal Users** - An Internal user would be an individual who works in house for the     organization. This individual can use the system as a quick and easy way to create work     requests. The Internal User might be a maintenance staff person, a maintenance clerk, or a non-     maintenance person employed by the organization to request services from the maintenance     department. 

- **External User** - An External User would be an individual from outside the organization who     needs to submit a request for services. In the case of a municipality, an external user would be a     citizen from the community. The system will allow an external user to create a user profile and     log in, or request services anonymously. 

- **Administrative User** - an administrative user would be an authorized individual who sets up the     configuration of the module, controls customization of screens, and the rights of the internal     and external users. The administrative user can also view and control and create reports about     the actual requests generated in the system. The Work Request screen is located under the Work Request menu. Work Request menu items consist of: 

- Work Request: Similar to the Work Order screen, this     lists all Work Requests submitted/created.     NOTE: these are not yet assigned Work Orders, these     are just requests 

- WR Settings: contains all the settings for Work     Requests, Portal, Notifications, etc 

- Customers: a listing of all registered customers     (submitters) 

- WR Reports: predefined WR reports 


Work Request and Portal 

## Viewing Work Requests 

 Work Requests can be viewed from under the Work Request, Work Request menu. The look of feel of Work Requests is very similar to Work Orders. Work Requests can be viewed in either the Grid or Card views by activating the icon in the lower right corner of the screen. Common Work Request tabs: 

- **Details:** is the main request screen 

- **Assets** : can be used to add assets to the request before it is made into a work order. Note, you     can also have an asset field on the main request screen if you want your requester to select an     asset. 

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

- WR Pattern: sets the work request ID patter can be set as shown Examples: WR0 - >     WR00000001, WR# - > WR1, WR{YY}0 - > WR20000001. 

- Last WR Number: controls the starting number. This is helpful if you are coming from another     system and want to carry numbers forward. 

- WR Desktop Settings: has default settings for State, city, and promised date. 

- Default Group: important if you are allowing users to self-register. This determines which user     group they will be defaulted to. 

- Allow Anonymous: controls whether the portal will allow users to submit requests without     registering for an account. 

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

- Notify users - Select one or more names from your user dropdown for staff who should be     notified when a request for this operation level comes in. 

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

- New - New request, no action     taken 

- In work – Work Order has been     made from this request 

- Done (closed) – Work request is     closed either manually or     automatically from work order     being closed) 

- Denied (closed)- Work Request     closed from the request being     denied. 


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

- All Requests – show all requests from all users (May be security controlled for different user     groups to show or not show Menu to change your user information, add a new request or logout 


Work Request and Portal 

## Entry screen 

 First select an Operation code and then an issue. Depending on configuration there may be a third level “Issue details: These will be checkboxes. Red Star denotes a required field The next screen is the primary request screen. It will vary according to the screen customization. It stares your identity, location and text description of the issue. At the bottom of the screen you can attach photos or files to the request. These will transfer to the work order. If you are using a phone or camera you can take pictures and attach them to the request. The final step is to submit the request. 


Work Request and Portal The request is now submitted for processing. The Request will now appear in the Request section of the MaintStar application. 


