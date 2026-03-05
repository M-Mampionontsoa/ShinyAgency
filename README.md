````markdown
# ShinyAgency - Full-Stack Freelancing Platform

Welcome to **ShinyAgency**! This is a full-stack web application built to practice API data fetching, React hooks, and backend integration with Express. It simulates a freelancing platform where users can browse profiles, take surveys, and more.

## Project Purpose

This project was created to practice and demonstrate key React concepts:

- **Data Fetching**: Retrieving data from a REST API
- **Hooks**: Using `useState`, `useEffect`, `useContext`, and custom hooks
- **React Router**: Handling multi-page navigation
- **Context API**: Global state management (theme, authentication, survey answers)
- **Testing**: Unit tests with React Testing Library (`Card.test.jsx`, `Footer.test.jsx`, etc.)

## Project Structure

The project is split into two main parts:

- **`/` (Root)** : The React frontend (bootstrapped with Create React App)
- **`/Shiny-Agency-API`** : The Express backend (included as a Git submodule)

## Prerequisites

Before you begin, make sure you have installed:

- [Node.js](https://nodejs.org/) (version 18 or higher recommended)
- [Git](https://git-scm.com/)

## Installation & Setup

Follow these steps to run the project locally.

### 1. Clone the repository (with submodule)

The backend is a Git submodule. To clone it together with the frontend, use:

```bash
git clone --recurse-submodules https://github.com/M-Mampionontsoa/ShinyAgency.git
```
````

If you've already cloned the project without the submodule, run this command in the root directory to fetch it:

```bash
git submodule update --init --recursive
```

### 2. Install frontend dependencies

Navigate to the project root and install the required packages:

```bash
cd ShinyAgency
npm install
```

### 3. Install backend dependencies

Navigate to the API folder and install its dependencies:

```bash
cd Shiny-Agency-API
npm install
```

### 4. Configure environment variables (if needed)

Check if the backend requires a `.env` file. If so, create one in the `Shiny-Agency-API` folder. Example:

```env
PORT=5000
# Add any other variables like DB_URL, API keys, etc.
```

### 5. Start the backend server

From the `Shiny-Agency-API` folder, run:

```bash
npm start
# or npm run dev if a dev script is available
```

The API should now be running on `http://localhost:5000` (or the port you configured).

### 6. Start the frontend application

Open a new terminal, go back to the root folder, and run:

```bash
cd ShinyAgency
npm start
```

This runs the React app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser. The page will reload when you make changes.

## Running Tests

- **Frontend tests**: `npm test` (from the root directory)
- **Backend tests**: `npm test` (from the `Shiny-Agency-API` directory, if any are set up)

## Built With

- **Frontend**: React, React Router, Context API, CSS Modules
- **Backend**: Express.js, Node.js
- **Testing**: Jest, React Testing Library
- **HTTP Client**: Axios

## Key Features Implemented

- User authentication context
- Theme switching (light/dark mode)
- Multi-step survey with answer persistence
- API data fetching with Axios
- Protected routes
- Custom hooks and utility functions
- Unit tests for components

## Notes

- The backend API must be running for the frontend to fetch data correctly.
- If you encounter CORS issues, ensure the backend is configured to accept requests from `http://localhost:3000`.
- This project is for educational purposes and is a great reference for React best practices.

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

Created as a learning exercise to deepen understanding of React, API integration, and full-stack development.

```


```
