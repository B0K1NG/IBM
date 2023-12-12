# IBM Task Documentation 🚀

Welcome to the Automated Parking System project documentation! This system leverages AI to capture vehicle plate numbers and timestamps at parking lot entry points, providing users with an automated fee calculation web application.

## System Overview 📝

### Backend Development:
- Built a robust backend application in Node.js with the Express.js framework.
- Successfully integrated the Plate Recognizer API for capturing car plate numbers from photos.
- Implemented logic for accurate parking fee calculation based on vehicle type and time of day.
- Ensured secure interactions with the Amazon RDS (Relational Database Service) for data storage.

### Frontend Development:
- Developed a modern and user-friendly frontend application using React.
- Created a responsive user interface, enabling users to easily view parking duration and fees.

### Dynamic Fee Rates:
- Implemented a feature that allows administrators to adjust parking fee rates without modifying the source code.
- Fee rates are stored in the database and can be conveniently modified through the online app.

### Unit Testing:
- Utilized unit tests to enhance robustness, addressing crucial functionality and business rules.
- Tested the accuracy of parking fee estimations under various conditions.

### Containerization (Work in Progress):
- Employed Docker for containerizing both backend and frontend applications.
- Docker images are designed for easy deployment and scalability.

### AWS Deployment (Work in Progress):
- Deployed the containerized application to the AWS cloud platform.
- Utilized Amazon ECR (Elastic Container Registry) to securely store Docker images.
- Created an Amazon ECS (Elastic Container Service) cluster for hosting the application.

## Achievements and Progress 🌟

- Successfully designed, developed, containerized, and initiated deployment of the Automated Parking System on AWS.
- Demonstrated a high degree of technical proficiency and commitment to best practices throughout the project.

## Next Steps 🚧

As the project continues, further work will focus on completing containerization and deploying the system on AWS.

## Tech Stack 💻

- Visual Studio Code
- JavaScript
