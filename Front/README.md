# ArgentBank

ArgentBank is a comprehensive banking application consisting of both a backend and a frontend.

## Table of Contents

1. [Installation](#installation)
    - [Backend](#backend)
    - [Frontend](#frontend)
2. [Database Connection Information](#database-connection-information)
3. [License](#license)

## Installation

### Backend

Make sure you have installed the following prerequisites:

-   Node.js v12
-   MongoDB Community Server

You can check if you have the right versions by using the following commands in your terminal:

````bash
# Check Node.js version
node --version

# Check MongoDB version
mongo --version
```

Once you have verified the correct versions, follow these steps to install and run the ArgentBank backend:

1. **Fork this repository**.
2. **Clone the repository onto your computer**.
3. **Open a terminal window in the cloned project**.
4. **Run the following commands**:

```bash
# Install dependencies
npm install

# Start local dev server
npm run dev:server

# Populate database with two users
npm run populate-db
```

Your server should now be running at http://localhost:3001, and you will now have two users in your MongoDB database!

## Frontend

ArgentBank frontend uses the following technologies:

- React
- Vite
- React Router
- Redux
- Redux Persist

Follow these steps to install and run the ArgentBank frontend:

1. **Clone this repository onto your computer **.
2. **Navigate to the frontend directory**:

```bash
cd frontend
```

1. **Install dependencies:**

```bash
npm install
```

2. **Once the installation is complete, start the local development server:**

```bash
npm start
```

Open your browser and go to the following URL: http://localhost:3000 to interact with the ArgentBank application.
````
