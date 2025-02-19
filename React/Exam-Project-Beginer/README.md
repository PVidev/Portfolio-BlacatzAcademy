# Exam-Project-Beginer

## 🛠 Setup Project

### 1️⃣ Clone the Repository
Clone the project repository to your local machine.

### 2️⃣ Install Dependencies
This project uses `react-router-dom` and `json-server`. To install them, run:
```sh
npm i
```

## 📦 Dependencies Used

### React Router Dom
Used for handling navigation within the application. Install it with:
```sh
npm i react-router-dom
```

### JSON Server
Used to simulate a backend for CRUD operations. Install it globally with:
```sh
npm install -g json-server
```
Start the server with:
```sh
npx json-server --watch db.json --port 3004
```
> **Note:** This project uses port `3004`. If you wish to change it, update the `fetch` requests in `src/pages/Events.js` accordingly.

### Bootstrap CSS & JS
Bootstrap is included via CDN in `public/index.html`.

## 🔄 CRUD EVENT
The project is set up to manage CRUD operations via JSON Server running on port `3004`.
