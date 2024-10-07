# Energy Consumption and Temperature Visualization

This project visualizes energy consumption and temperature data using a line graph and a bar chart. It is built with React, Redux, and Chart.js, providing an interactive and responsive user experience.

## Features

- Visualizes energy consumption (kWh) as a bar chart.
- Displays temperature (°C) as a line graph on the same chart.
- Responsive design with an interactive user interface.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **Redux**: State management across the application.
- **React Router**: Routing in a single-page application.
- **Chart.js** & **react-chartjs-2**: Rendering dynamic charts.
- **Axios**: Making HTTP requests (for future enhancements).
- **@testing-library/react**: Testing React components.
- **Sass**: Styling the application with SCSS.

## Installation

### Step 1: Clone the Repository

```bash
git clone https://your-repo-url.git
cd my-energy-visualization
```


### Step 2: Install Dependencies
```bash
npm install
```

### Step 3: Start the Application
```bash
npm start
```
Open your browser and navigate to http://localhost:3000 to view the application.

## Package Usage
Core Packages
- **React & React-DOM**: Core libraries for building the user interface.
  
**Redux**:
- **react-redux**: Connects components to the Redux store.
- **redux-persist**: Persists the Redux state across sessions.
- **redux-thunk**: Middleware for handling asynchronous actions.
- **redux-logger**: Logs Redux state changes in the console.
  
**React Router**
- **react-router-dom**: Provides routing functionalities for navigation.
  
**Charting Libraries**
- **chart.js**: Renders various types of charts.
- **react-chartjs-2**: Integrates Chart.js with React.
  
**HTTP and Data Handling**
- **axios**: For making HTTP requests.
  
**Testing Libraries**
- **@testing-library/react**: Utility for testing React components.
- **@testing-library/jest-dom**: Custom Jest matchers for DOM nodes.

**Styling**
- **Sass**: A preprocessor for writing CSS with features like variables and nesting.
  
**Offline Detection**
- **react-detect-offline**: Detects online/offline status and handles connectivity changes.
  
## Directory Structure

This organized structure promotes clarity and maintainability in the project. Each directory serves a specific function, making it easier for developers to navigate and understand the codebase. By following this structure, you can enhance collaboration and streamline the development process

energy_usage/
- public/               # Public assets and HTML 
- src/                  # Source code for the application
  - components/         # Reusable components
  - containers/         # Container components (like pages)
  - hooks/              # Custom hooks
  - assets/             # Static assets (images, data)
  - store/              # Redux store configuration
  - routes/             # Route configuration
  - utils/              # Custom utilities files
  - App.js              # Main application component
  - index.js            # Entry point of the application
- README.md             # Project documentation
- package.json          # Project dependencies and scripts


### Description of Key Directories

- **public/**: 
  - Contains the `index.html` file that serves as the main entry point for the web application.
  - You can place any static assets (like images or icons) that do not require processing by Webpack.

- **src/**: 
  - The primary directory where all application code resides.
  
  - **assets/**: 
    - Includes static assets such as images and JSON files. This is where you can store any data files required for the app.
  
  - **components/**: 
    - Contains reusable React components that can be used throughout the application. Examples include buttons, modals, and other UI elements.
  
  - **containers/**: 
    - Houses higher-level components that typically represent entire pages or sections of the app. They often manage state and logic.
  
  - **hooks/**: 
    - Contains custom React hooks that encapsulate reusable logic, promoting cleaner and more organized code.
  
  - **routes/**: 
    - Contains routing definition.
  
  - **store/**: 
    - Contains Redux configuration files, including store setup, reducers, and any middleware.
  
  - **utils/**: 
    - Contains constants and utilities for re-useable purposes.
  
  - **App.js**: 
    - The main component that renders the application. It sets up the routes and any global providers (like Redux).
  
  - **index.js**: 
    - The entry point of the application. It renders the `App` component into the DOM.


## Future Improvements
Implement advanced data fetching with Axios.
Add more routes and components for a richer user experience.
Enhance testing coverage for all components.

