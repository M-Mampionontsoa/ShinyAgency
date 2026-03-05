```markdown
# ShinyAgency - Full-Stack Freelancing Platform

Welcome to **ShinyAgency**! This is a full-stack web application built to practice API data fetching, React hooks, and backend integration with Express. It simulates a freelancing platform where users can browse profiles, take surveys, and more.

##  Project Purpose

This project was created to practice and demonstrate key React concepts:

- **Data Fetching**: Retrieving data from a REST API
- **Hooks**: Using `useState`, `useEffect`, `useContext`, and custom hooks
- **React Router**: Handling multi-page navigation
- **Context API**: Global state management (theme, authentication, survey answers)
- **Testing**: Unit tests with React Testing Library

## Project Structure

```bash
ShinyAgency/
├── src/ # React frontend
│ ├── features/ # Reusable components and contexts
│ ├── pages/ # Page components
│ ├── utils/ # Utility functions and styles
│ └── Tests/ # Unit tests
├── public/ # Public assets
├── Shiny-Agency-API/ # Express backend
│ ├── routes/ # API routes
│ ├── models/ # Data models
│ └── server.js # Main server file
├── package.json # Frontend dependencies
└── README.md
``` 


##  Prerequisites
Before you begin, make sure you have installed:
- [Node.js](https://nodejs.org/) (version 18 or higher recommended)
- [Git](https://git-scm.com/)
- npm (comes with Node.js)

##  Installation & Setup

### 1. Clone the repository
```bash
git clone https://github.com/M-Mampionontsoa/ShinyAgency.git
cd ShinyAgency
````

### 2. Install frontend dependencies

```bash
npm install
```

### 3. Install backend dependencies

```bash
cd Shiny-Agency-API
npm install
cd ..
```

### 4. Configure environment variables (if needed)

Create a `.env` file in the `Shiny-Agency-API` folder if required:

```env
PORT=5000
# Add any other variables like DB_URL, API keys, etc.
```

### 5. Start the backend server

In one terminal:

```bash
cd Shiny-Agency-API
npm start
# or npm run dev if a dev script is available
```

The API will run on `http://localhost:5000`

### 6. Start the frontend application

In another terminal:

```bash
cd ShinyAgency
npm start
```

The React app will run on `http://localhost:3000`

## Quick Start (with one command)

If you have `concurrently` installed, you can add this script to your root `package.json`:

```json
"scripts": {
  "install-all": "npm install && cd Shiny-Agency-API && npm install",
  "dev": "concurrently \"npm start\" \"cd Shiny-Agency-API && npm start\""
}
```

Then simply run:

```bash
npm run install-all
npm run dev
```

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

## Important Notes

- The backend API **must be running** for the frontend to fetch data correctly
- Both servers run on different ports:
  - Frontend: http://localhost:3000
  - Backend: http://localhost:5000
- If you encounter CORS issues, ensure the backend accepts requests from `http://localhost:3000`
- This project is for educational purposes and demonstrates React best practices

## Contributing

Feel free to fork this project, submit issues, or make pull requests. It's a great learning resource!

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

Created as a learning exercise to deepen understanding of React, API integration, and full-stack development.

---

**Happy coding!**

```



```
