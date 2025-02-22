This document outlines the planned **website structure** and **design ideas**, which will be visualized using **Figma** in the coming weeks. The focus is on creating an intuitive and user-friendly interface to display surveillance data effectively.

---

## 🗂️ Website Structure
The website will consist of the following pages and sections:

### 1. **Home Page (Dashboard)**
- **Live Video Feed:** Displays the real-time camera stream.
- **Quick Alerts:** Shows the latest motion detection or object recognition events.
- **System Status:** Displays the health status of components (camera, sensors, network).
- **Navigation Bar:** Links to Snapshots, Alerts, Settings, and About pages.

### 2. **Snapshots Page**
- **Gallery View:** Thumbnails of captured images from motion detection events.
- **Image Details:** Clicking on an image opens a modal with the timestamp, detected objects, and options to download or delete.
- **Filter & Search:** Users can filter images by date or detected objects.
            
### 3. **Alerts Page**
- **Notifications List:** Chronological list of alerts with icons indicating the type (motion, object detection, package delivery).
- **Alert Details:** Provides captions from YOLO Nano detections and links to corresponding snapshots.
- **Real-Time Update Indicator:** Shows if new alerts have been detected while viewing the page.

### 4. **Settings Page**
- **Email Configuration:** Set or update the recipient email for alerts.
- **Detection Settings:** Enable/disable motion detection or specific object detection categories.
- **System Controls:** Restart services, update software, or shut down the Raspberry Pi.

### 5. **About Page**
- Overview of the project and contributors.
- Contact information for support or feedback.

---

## 🎨 Design Ideas (Figma Plans)
The goal is to create a clean, minimalistic, and responsive design with a focus on usability. Below are the design concepts to be implemented in **Figma**:

### 🎯 **Design Goals:**
- Intuitive navigation for quick access to surveillance features.
- Responsive layout for both desktop and mobile users.
- Visual emphasis on live video feeds and alerts.
- Dark mode for better viewing in low-light conditions.

### 🖥️ **Planned Figma Wireframes & Prototypes:**

#### 1. **Home Page (Dashboard)**
- **Header:** Contains the website logo and navigation menu.
- **Main Section:** Large video player for live stream with status indicators (recording, motion detected).
- **Sidebar:** Quick access to recent alerts and snapshots.
- **Footer:** System uptime and Raspberry Pi temperature display.

#### 2. **Snapshots Page**
- Grid-based gallery with hover effects to reveal quick actions.
- Filters positioned at the top for easy access.
- Detailed view with a responsive modal showing snapshot metadata.

#### 3. **Alerts Page**
- Vertical timeline layout for alerts.
- Color-coded alert cards (e.g., red for motion, blue for object detection).
- Action buttons for acknowledging or dismissing alerts.

#### 4. **Settings Page**
- Tab-based layout for organizing various settings.
- Toggle switches for enabling/disabling features.
- Responsive form fields for email and detection configurations.

#### 5. **Mobile Design Considerations**
- Collapsible navigation menu.
- Swipe gestures for gallery navigation.
- Push notification integration plan for future enhancements.

---

## 🗓️ **Implementation Timeline (Next Few Weeks)**
| Week | Task                                                |
|------|-----------------------------------------------------|
| 1    | Create Figma wireframes for core pages              |
| 2    | Develop homepage layout and live streaming section  |
| 3    | Build snapshots gallery and alert system UI         |
| 4    | Implement settings and finalize responsive design   |
| 5    | Testing and collecting user feedback for improvements |

---

## 🧪 Future Improvements
- Cloud access to view the website remotely.
- Voice commands for quick surveillance control.
- Machine learning model updates for enhanced detection accuracy.
- User profiles with customizable alert preferences.

---



