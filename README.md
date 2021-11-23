# photography-web

## How to run:

### Prerequisite:
- Download and Install [NPM and NodeJS](https://nodejs.org/dist/v16.13.0/node-v16.13.0-x64.msi)

### Steps:
- Check if node and npm already installed.  
  Run

  > ```node -v```  
  
  and

  > ```npm -v```

- If it isn't installed, download and install it using link above.
- On the folder of the project run this command to install all dependencies

    > ```npm install```

- Start Apache and MySQL on XAMPP
- Then, run this comman to migrate database
    >```npx sequelize db:migrate```
- Last, start the server using this command
    >```npm run dev```