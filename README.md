# Reframery Frontend

## Run Locally

### 1. Run Frontend

```
$ git clone https://github.com/MacAquafina/reframery-frontend.git
# open new terminal
$ cd reframery-frontend
$ npm install
$ npm start
```

### 2. Sign in

### 2.1 Sign in as a manager

email: manager01@gmail.com

password: AAaa11

### 2.2 Sign in as an administrator
email: admin01@gmail.com 

password: AAaa11

### 2.3 Sign in as a client user(seller and buyer)
email: user001@gmail.com

password: AAaa11



## Temporary Implementation of the Shopping Cart

### 1.Run backend (temp-JSON-server)

```
$ git clone https://github.com/MacAquafina/temp-JSON-server.git and run the backend

```

### 2. Run the frontend

```
$ git clone https://github.com/MacAquafina/reframery-frontend.git
# open new terminal
$ cd reframery-frontend
$ npm install
$ npm start

```

### 3. Configure URL at the backend (temp-JSON-server)

- Go to package.json
- In line 6, change the port number being watched to your desired port number

### 4. Configure base URL at the frontend

- Go to commons/axios.js
- In line 3, set the base URL of the backend you opened in step 1
- For example, enter http://localhost:3004 for the backend running on http://localhost:3004/

### 5. Go to landing page and Cart page

- http://localhost:3000/landing for Landing Page (Port may vary depending on your setting)
  -http://localhost:3000/cart for Shopping Cart
