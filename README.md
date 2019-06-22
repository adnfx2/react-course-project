This project makes heavy use of the following libraries:

    "bootstrap"
    "bootstrap-social"
    "cross-fetch"
    "font-awesome"
    "prop-types"
    "react"
    "react-animation-components"
    "react-dom"
    "react-popper"
    "react-redux"
    "react-redux-form"
    "react-router-dom"
    "react-scripts"
    "react-transition-group"
    "reactstrap"
    "redux"
    "redux-logger"
    "redux-thunk"

The following steps are required to run properly this project:

1- Go to your react-course-project folder in your terminal and use:
   
      npm install
   
2- Now install json-server package as follows:

      npm install -g json-server

3- Now in your terminal go to "JSON-server" folder correspondent to this project and run the following command:
  
      json-server --watch db.json -d 2000 -p 3001
  
  (-d means the delay for serving data, and -p it's the port where files are going to be serve)
  
 4- Finally go back to the root folder of this project (react-course-project) in your terminal and run this command: 
 
      npm start
    
   Now after a few seconds your project should be up and running in your browser, typically at localhost:3000.
   
   That's all :D
