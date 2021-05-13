# MEAN
Online Doctor Appointment Using MEAN Stack
This provides online doctor appointment for registered users. Here 3 roles are provided

   1. Users:-who need the service
   2. Doctors:-Have to register themselves. 
   3. Admin:-Can update /delete doctors availability(username-admin@gmail.com.Password:-Admin@123)

-Doctor can view the details of appointment along with the user email once booked 
-User Registration is based on a COVID 19 survey. Once the survey is ok(low risk) he will be taken to registration. 
-While User registration, please provide a working Email.On booking a slot, an email confirmation will be send to that user. 
-Based on the location selected by user,all the doctors in that location along with their details will be displayed. 
-When the user select any one of the slots his email will be displayed in the slot and it won’t be available for others. An email confirmation will be send
  to the user 
-Admin can delete, update and refresh the slots (since I have implemented for a single day admin has to refresh the slot )

Running the Application
 Please check the ngApp(angular front-end) and Server -package.json for the dependencies
Mongo Atlas is used for database.
  under terminal of the ngApp use ng serve to start angular server
  To start the Node server,use node server with in the server folder terminal. 
Open the browser with url https://localhost:4200 
