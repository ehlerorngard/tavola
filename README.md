# Tavola

_This project was developed by: Bill Windsor, Brandan Richardson, Ehler Orngard, Maggie Falkenberg & Yvette Tran_

## Description ##

This is a web app designed to provide easy, immediate access to the medical information of students. Teachers may use this app in case of emergency or other reference necessity to look up a student's medical notes, and parents may use this to quickly and easily identify if there are any food allergies when preparing food for their child's class.  The app holds potential conceptually to either be a component of or be expanded into a comprehensive student information management system.  

## Demo ##

You can add a student:  
![](https://github.com/Trantastic/tavola/blob/master/public/img/demo1.gif)

Once you log into the staff section, you can search for a student:  
![](https://github.com/Trantastic/tavola/blob/master/public/img/demo2.gif)

__Try it for yourself:__ [Tavola (home screen)](https://tavola-2018.herokuapp.com/)

__Staff Page Login:__ [Tavola (staff login page)](https://tavola-2018.herokuapp.com/login)  
Login: _test_  
Password: _1234_

## Getting Started ##

If you wish to run this app on your own computer please follow the instructions below:

1. Clone or fork this repo. 
   In your terminal navigate to the cloned repo and install the node packages by typing `npm install`.

2. Start the server by typing in your terminal `node server.js`.

3. To seed the database, make sure you have [Sequelize-CLI](https://www.npmjs.com/package/sequelize-cli) installed. 
   In your terminal type `sequelize db:seed:all`

4. Now you're all set: you just need to open your browser and set the url to localhost:3000.


## Technologies Used ##

[Express](https://www.npmjs.com/package/express)\
[Passport.js](http://www.passportjs.org/)\
[mysql2](https://www.npmjs.com/package/mysql2)\
[sequelize](https://www.npmjs.com/package/sequelize)\
[Handlebars js](https://handlebarsjs.com/)\
[Bootstrap v4](https://getbootstrap.com/docs/4.0/getting-started/introduction/)


## Future Development ##

* Incorporate realtime data from a weather, pollen, and air quality API that is displayed in the home page for teachers with students that have respiratory sensitivities and/or asthma.
* Generate alerts via text of medical emergencies to parents' and teachers' phones.
* Expand database tables and fields, e.g., a log of students' prescriptions and preferred hospital, illness tracking data for epidemiological purposes, et al.
* Create a separate login for parents, so that their id can be used to only show the student profiles from their child's class.
