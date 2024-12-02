
# Email Marketing Sequence Builder
##   WORKING DEMO
[video demo](https://drive.google.com/file/d/1g53VpAt1dC7lV1J27mPtEhZ4sCofUQtu/view)

**[Live URL](https://salesblink-frontend.vercel.app/)**


## Overview

The **Email Marketing Sequence Builder** is a full-stack application that empowers users to create and execute email marketing campaigns visually. Using a flowchart interface, users can design sequences that include:
- Cold Emails
- Wait/Delay nodes
- Lead Sources

This project leverages the **MERN stack** (MongoDB, Express.js, React, Node.js) along with the **React Flow** library for the interactive frontend. The backend handles email scheduling and delivery using **Agenda** and **Nodemailer**.

---

## Features

### Frontend
- Interactive flowchart interface created with **React Flow**.
- Add and remove nodes for:
  - Cold Emails
  - Wait/Delay
  - Lead Sources
- Save flowchart designs with time-based scheduling for emails.
- Matches functionality demonstrated in this [video demo](https://www.loom.com/share/5668f22e2e2942298154f8debac92cd4) (no audio).

### Backend
- Save and retrieve flowchart data in **MongoDB**.
- Schedule email sending based on:
  - The time of saving.
  - Wait/Delay nodes in the flowchart.
- Use **Agenda** for job scheduling.
- Deliver emails with **Nodemailer**.

---

## Project Stack

### Frontend
- **React**: Core UI framework.
- **React Flow**: Library for the visual flowchart interface.

### Backend
- **Node.js**: Backend runtime.
- **Express.js**: Web server framework.
- **MongoDB**: Database for storing flowchart data and schedules.
- **Agenda**: Job scheduling library.
- **Nodemailer**: Email delivery service.

---

## Getting Started

### Prerequisites
Ensure you have the following installed:
- **Node.js** (v14 or later)
- **MongoDB** (local or cloud)

### Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd email-marketing-sequence-builder
   ```
2. Install dependencies for both frontend and backend:
   ```bash
   cd client
   npm install
   cd ../server
   npm install
   ```

### Scripts
#### Frontend (React)
```json
"scripts": {
  "start": "react-scripts start",
  "build": "react-scripts build",
  "test": "react-scripts test",
  "eject": "react-scripts eject"
}
```

To start the frontend:
```bash
cd client
npm start
```

#### Backend (Node.js)
To start the backend:
```bash
cd server
npm start
```

---

## Usage
1. Launch the application (frontend and backend).
2. Use the flowchart interface to design your email sequence:
   - Add nodes for Cold Emails, Wait/Delay, and Lead Sources.
   - Connect nodes to define the sequence flow.
3. Save the flowchart to store it in the database.
4. The backend will schedule and send emails automatically based on the flowchart design.

---

## Dependencies

### Frontend
- `react`
- `react-flow-renderer`

### Backend
- `express`
- `mongodb`
- `agenda`
- `nodemailer`

---

## Future Enhancements
- Add authentication for multiple user accounts.
- Implement analytics for tracking email performance.
- Support drag-and-drop reordering of nodes.

---

## Video Demonstration
[View the functionality demo](https://www.loom.com/share/5668f22e2e2942298154f8debac92cd4) (no audio).
```

This Markdown file provides a clear structure and all necessary details for your project, including usage, installation, features, and dependencies.
