# Mega Care 

A web application built with React for the frontend, designed to allow users to browse and book appointments with doctors seamlessly.

---

## **live preview** 
https://doc-app-coral.vercel.app/

## 🖼️ **Screenshots**

![Home Page](https://github.com/medhatjachour/docApp/blob/main/samples/1.png?raw=true)
*Home Page - Browse doctors and book appointments.*

![Appointment Booking](https://github.com/medhatjachour/docApp/blob/main/samples/a1.png?raw=true)
*Appointment Booking - Select a time slot and confirm your appointment.*

---

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Installation and Setup](#installation-and-setup)
- [Usage](#usage)
- [File Structure](#file-structure)
- [AI Tools Usage](#ai-tools-usage)
- [Known Limitations and Next Steps](#known-limitations-and-next-steps)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## Introduction

This project is a full-stack web application designed to streamline the process of booking appointments with doctors. It provides a user-friendly interface for patients to browse available doctors, book appointments, and manage their schedules efficiently.

---

## Features

### User Interface
- View a responsive landing page.
- Browse a list of available doctors with their specialties and profiles.
- Book, view, and cancel appointments with selected doctors.
- Access additional pages like About and Contact for more information.

---

## Technology Stack

### Frontend
- **React** - Frontend library for building the user interface.
- **Context API** - State management for handling application-wide data.
- **Tailwind CSS** - Utility-first CSS framework for styling.
- **React Router DOM** - Client-side routing for navigation.

---

## Installation and Setup

### Prerequisites
- **Node.js** (v16 or higher) and **npm** installed on your machine.
- **Git** for cloning the repository.
- A modern web browser (Chrome, Firefox, Edge, etc.).

### Steps

1. **Clone the repository**:
   ```bash
   git clone https://github.com/medhatjachour/docApp.git
   cd docApp
   ```

2. **Install dependencies**:
   Navigate to the project directory and install the required dependencies for the frontend:
   ```bash
   npm install
   ```

3. **Set up environment variables** (if applicable):
   - Create a `.env` file in the root directory if the application requires environment variables (e.g., API keys or backend URL).
   - Example `.env` file:
     ```
     REACT_APP_API_URL=http://localhost:5000
     ```
   - Note: Check the project documentation or `package.json` for specific environment variable requirements.

4. **Start the development server**:
   Run the following command to start the frontend development server:
   ```bash
   npm run dev
   ```
   The application will typically be available at `http://localhost:5173` (or another port if specified).

5. **Access the application**:
   Open your browser and navigate to `http://localhost:5173` to view the application.

### Troubleshooting
- If `npm install` fails, ensure you have the correct Node.js version and try deleting the `node_modules` folder and `package-lock.json` file, then run `npm install` again.
- If the server doesn't start, check for port conflicts and ensure no other application is using the default port.

---

## Usage

1. **Browse Doctors**: On the home page, view a list of available doctors with their specialties and profiles.
2. **Book an Appointment**: Select a doctor, choose an available date and time slot, and confirm the appointment.
3. **Manage Appointments**: Navigate to the "My Appointments" page to view or cancel booked appointments.
4. **Explore Additional Pages**: Use the navigation to access the About and Contact pages for more information.

---

## File Structure

### docApp
- `docApp/`
  - `src/`
    - `assets/`           # Images, icons, and other static assets
    - `components/`       # Reusable React components (e.g., Modal, RelatedDocs)
    - `context/`          # Context API for state management (e.g., AppContext)
    - `pages/`            # Application pages (e.g., Home, Appointments)
    - `types/`            # TypeScript type definitions for the application
    - `App.js`            # Main application component
    - `index.js`          # Entry point for the React application
    - `tailwind.config.js` # Tailwind CSS configuration
  - `package.json`        # Project dependencies and scripts
  - `README.md`          # Project documentation

---

## AI Tools Usage

This project leveraged AI tools to enhance development efficiency and code quality:

- **Grok (by xAI)**: Used for generating and refining React components, particularly for the appointment booking and cancellation functionality. Grok assisted in:
  - Writing the `AppContext` logic for managing bookings and cancellations.
- **Documentation**: AI tools helped draft and refine this README, ensuring clear instructions and comprehensive coverage of features, setup, and limitations.

The use of AI tools significantly reduced development time while maintaining code consistency and adherence to best practices.

---

## Known Limitations and Next Steps

### Known Limitations
- **Mock Data**: The application currently uses mock doctor data and localStorage for bookings, which is not suitable for production environments.
- **Authentication**: User authentication is basic and lacks advanced security features like JWT or OAuth.
- **Backend Integration**: The application assumes a backend server but does not include a fully implemented backend in the repository.
- **Time Slot Validation**: Limited validation for time slot availability; no real-time checking against a backend database.
- **Accessibility**: Some UI elements may need further optimization for accessibility compliance (e.g., ARIA attributes).

### Next Steps
- **Backend Development**: Integrate a Node.js/Express backend with a database (e.g., MongoDB) for persistent storage of doctors, users, and bookings.
- **Real-Time Availability**: Implement API endpoints to check real-time doctor availability and prevent double bookings.
- **Enhanced Authentication**: Add secure user authentication with JWT or OAuth for better user management.
- **Improved UX**: Enhance the UI with animations, better error handling, and loading states.
- **Testing**: Add unit and integration tests using Jest and React Testing Library to ensure code reliability.
- **Accessibility**: Conduct an accessibility audit and implement necessary improvements for WCAG compliance.

---

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeatureName`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeatureName`).
5. Open a Pull Request.

Please ensure your code follows the project's coding standards and includes relevant tests.

---


## Contact

For questions or feedback, reach out:  
- **Medhat Jachour** - [medhatashour19@gmail.com](mailto:medhatashour19@gmail.com)  
- **Project Link** - [https://github.com/medhatjachour/docApp](https://github.com/medhatjachour/docApp)