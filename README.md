This project requires the following steps to work properly:

1- Go to your react-course-project folder in your terminal and use:
   
   npm install
   
2- Now install json-server package as follows:

   npm install -g json-server

3- Now in your terminal go to json-server folder correspondant to this project and run the following command:
  
  json-server --watch db.json -d 2000 -p 3001
  
  (-d means the delay for serving data, and -p it's the port where files are going to be serve)
  
 4- Finally go back to the root folder of this project (react-course-project) in your terminal and run this command: 
 
    npm start
    
   Now after a few seconds your project should be running in your browser typically localhost:3000.
   
   That's all :D
