# Study Sphere Web App

This is a React web application for "Study Sphere," a platform designed for educational purposes. The app includes sections such as a hero banner, an about page, a teachers section, courses page, and a contact section using the emailjs library for email functionality.

## Features

- **Hero Section:**
  - Engaging banner introducing Study Sphere.
- **About Section:**
  - Information about the platform's mission and values.
- **Teachers Section:**
  - Showcase of the teaching staff with relevant details.
- **Courses Page:**
  - Display of available courses, possibly with brief descriptions.
- **Contact Section:**
  - Integration with emailjs for users to contact Study Sphere.

## Technologies Used

- React
- Chakra UI for UI components
- Emailjs for contact form functionality
- Framer Motion for animations
- Swiper for sliders/carousels
- Google Map React for displaying location, if applicable
- Typed.js for dynamic text effects
- Formik and Yup for form handling and validation

## Prerequisites

- Node.js and npm should be installed on your machine.

## Installation

1. Clone the repository: `git clone https://github.com/0xOmarAdel/study-sphere.git`
2. Navigate to the project directory: `cd study-sphere`
3. Install dependencies: `npm install`

## Configuration

To set up the email functionality, you need to configure emailjs. Create a `.env` file in the project root directory and add the following lines:
```dotenv
REACT_APP_EMAILJS_USERID=your_emailjs_user_id
REACT_APP_EMAILJS_TEMPLATEID=your_emailjs_template_id
REACT_APP_EMAILJS_SERVICEID=your_emailjs_service_id
```

## Usage

Run the following command to start the development server:
```bash
npm run dev
```
Open your browser and visit `http://localhost:3000` to access the app.

To deploy the app, follow the deployment process specific to your hosting platform.

## Demo

Visit the deployed version of the app at [Study Sphere App](https://study-sphere-app.netlify.app).