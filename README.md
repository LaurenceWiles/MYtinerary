# MYtinerary

MYtinerary is a mobile web application that allows users to explore and share their favorite cities and most memorable itineraries. The app provides a platform where users can browse through uploaded cities, view itineraries for each city, and contribute their own travel experiences.

## Features

+ **Landing Page**
  + Sign in with email and password, Google, or Twitter (X).
  + Create a new account.
  + Link to the Cities page.
 
+ **Cities Page**
  + Browse a list of uploaded cities.
  + Search and Filter: Type in the search bar to filter cities in real-time. Results appear dynamically as you type, with debouncing implemented to minimize server calls.
  + Upload new cities (authenticated users only).
  + Click on a city to view its itineraries.
 
+ **Itineraries Page**
  + Browse itineraries for a specific city.
  + Upload a new itinerary (authenticated users only).

## Tech Stack

**Front End**:
  + **React**: UI components and state management.
  + **MUI**: For Material UI components.
  + **React-Bootstrap**: Additional styling and responsive components.
  + **CSS**: Custom styling.
  + **React-Router**: Client-side routing.
  + **Redux & Redux-Toolkit**: State management for the application, including authentication and data lists.

**Back End**:
  + **Node.js**: JavaScript runtime.
  + **Express**: Web framework for Node.js.
  + **MongoDB**: NoSQL database for storing users, cities, and itineraries.
  + **Mongoose**: ODM (Object Data Modeling) for MongoDB.
  + **Passport.js**: Authentication middleware.
  + **Bcrypt**: Password hashing.

## Installation

1. **Clone the repository**:
  ```bash
  git clone https://github.com/LaurenceWiles/MYTinerary.git
  cd MYtinerary
  ```
2. **Install dependencies**:
  + Install server side dependencies
    ```bash
    cd backend
    npm install
    ```
  + Install client side dependencies
    ```bash
    cd ../frontend
    npm install
    ```
3. **Set up environment variables**
  + Create a **.env** file in the server directory with the following variables:
    ```bash
    MONGO_URI=your_mongo_connection_string
    GOOGLE_CLIENT_ID=your_google_client_id
    GOOGLE_CLIENT_SECRET=your_google_client_secret
    TWITTER_CONSUMER_KEY=your_twitter_consumer_key
    TWITTER_CONSUMER_SECRET=your_twitter_consumer_secret
    TWITTER_CLIENT_ID=your_twitter_client_id
    TWITTER_CLIENT_SECRET=your_twitter_client_secret
    ```

    Note: You will need to have your own MongoDB connection string and API keys for Google and Twitter.
    
4. **Run the application**
   
   + The project is set up to use **concurrently**, so starting the backend server will also start the client side automatically.
   + To start both the server and client, run the following command in the server directory:
     ```bash
     npm start
     ```
 5. **Access the application**
    
    + Open your browser and go to **`http://localhost:3000`**.
   
## Usage

  1. **Sign In**: Users can sign in using their email and password, Google, or Twitter (X). New users can create an account.

  2. **Browse Cities**: Visit the Cities page to see a list of cities that have been uploaded by users.

  3. **Upload Cities**: If signed in, users can upload a new city by clicking on the "Add City" button.

  4. **View Itineraries**: Click on a city name to view its itineraries.

  5. **Upload Itineraries**: If signed in, users can upload their own itineraries for a city by clicking on the "Add Itinerary" button.

## Folder Structure

```bash
MYtinerary/
├── backend/                    # Backend code
│   ├── config/                 # Configuration files (passport)
│   ├── controllers/            # Server logic and request handlers
│   ├── models/                 # Mongoose schemas
│   ├── routes/                 # API routes
│   ├── server.js               # Express server entry point
│   └── ...
├── frontend/                   # Frontend code
│   ├── src/
│   │   ├── assets/             # Static assets (images etc)
│   │   ├── components/         # React components
│   │   ├── hooks/              # Custom React hooks
│   │   ├── pages/              # React pages
│   │   ├── redux/              # Redux store and slices
│   │   ├── services/           # API logic and services
│   │   ├── App.js              # Main App component
│   │   ├── index.js            # Entry point
│   │   └── ...
└── ...
```

## API Endpoints

### User routes
+ **GET /users/auth-check**: Check if the user is authenticated.
+ **POST /users/login**: Log in a user.
+ **POST /users/register**: Register a new user.
+ **GET /users/logout**: Log out the current user.
+ **POST /users/google**: Authenticate with Google.
+ **GET /users/auth/twitter**: Authenticate with Twitter (X).

### City routes
+ **GET /cities/all**: Fetch all cities.
+ **POST /cities**: Add a new city.
+ **PUT /cities/:id**: Edit an existing city.
+ **DELETE /cities/:id**: Delete a city.

### Itinerary routes
+ **GET /itineraries/:cityId**: Fetch all itineraries for a specific city.
+ **POST /itineraries**: Add a new itinerary.
+ **PUT /itineraries/:id**: Edit an existing itinerary.
+ **DELETE /itineraries/:id**: Delete an itinerary.

## Authentication

MYtinerary uses Passport.js for authentication, with support for email/password, Google, and Twitter (X). Passwords are securely hashed using bcrypt.







