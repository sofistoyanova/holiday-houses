# Holiday houses project
Website that connects people who want to rent out their properties with people who would like to rent it for some period of time

## Getting started
These are instructions which will help you to get start the project and run it on your local machine

### Instaling
A step by step guide that tells you how to get a development env running

1. Go inside root/client and run
```
npm install
```
2. Go inside root/server and run 
```
npm install
```
3. Inside root/client run 
```
npm run start
```
to start the development server for the React front end
4. Inside root/server run 
```
nodemon server.js
```
to start the back-end development server
5. Inside root/server/config/db_config enter you database credentials(username and password)
6. Inside root/server run 
```
knex migrate:latest
```
5. Open http://localhost:3000/ in the browser