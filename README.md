# Home Surveillance System using Raspberry Pi 5

## 📖 Overview
The **Home Surveillance System** is a comprehensive security solution built using a **Raspberry Pi 5**. It provides real-time video streaming, motion detection, object recognition, and intelligent notifications. The system leverages a **Raspberry Pi Camera Module 3** for live streaming to a locally hosted website using **nginx**.

Key features include:
- **Live video streaming** accessible through a local web interface.
- **Motion detection** using a **PIR sensor** with automatic snapshot capture and email notifications.
- **YOLO Nano-based object detection** to recognize objects and provide scenario-based captions.
- **Application-specific alerts** (e.g., notifying the user when an Amazon package is detected).

This project is ideal for users looking for an affordable and customizable home security solution.

---

## 🛠️ Features
- **Live Camera Streaming:** Real-time video feed accessible through a local website.
- **Motion Detection:** Detects movement and captures snapshots automatically.
- **Email Notifications:** Sends captured images and alerts to the user via email.
- **YOLO Nano Object Detection:** Provides object recognition with captions displayed on the terminal and website.
- **Custom Alerts:** Detects specific scenarios like package deliveries and sends tailored notifications.

---

## 🧰 Components Required
| Component                  | Quantity | Description                                 |
|---------------------------|----------|---------------------------------------------|
| Raspberry Pi 5            | 1        | Main processing unit                        |
| Raspberry Pi Camera 3     | 1        | For video capture and streaming            |
| PIR Motion Sensor         | 1        | For motion detection                        |
| MicroSD Card (32GB or higher) | 1    | For OS and project files                    |
| Power Supply for Raspberry Pi | 1     | To power the Raspberry Pi                  |
| Ethernet Cable / Wi-Fi    | 1        | For network connectivity                    |
| Jumper Wires              | As needed| For connecting the PIR sensor              |
| Breadboard (Optional)     | 1        | For prototyping sensor connections         |

---

## 🚀 Setup Instructions
1. **Raspberry Pi Headless Setup:**  
   - Set up Raspberry Pi OS (Lite version recommended).
   - Enable SSH and connect to the Raspberry Pi without a monitor.

2. **Camera Setup:**  
   - Install and configure the Raspberry Pi Camera Module 3.
   - Test camera functionality using `libcamera` commands.

3. **Web Server Installation:**  
   - Install **nginx** on the Raspberry Pi:
     ```bash
     sudo apt update
     sudo apt install nginx
     ```
   - Configure nginx to host the website locally.

4. **Live Streaming Integration:**  
   - Stream camera output to the website using `ffmpeg` or similar tools.

5. **Motion Detection Setup:**  
   - Connect the PIR sensor to the Raspberry Pi GPIO pins.
   - Write a Python script to capture snapshots upon motion detection.
   - Configure the script to upload images to the "Snapshots" tab on the website.

6. **Email Notification:**  
   - Use libraries like `smtplib` to send emails with snapshots as attachments.

7. **YOLO Nano Object Detection:**  
   - Set up YOLO Nano on the Raspberry Pi for lightweight object detection.
   - Display detected objects and scenario captions in the terminal and on the website.
   - Configure alerts for specific objects (e.g., "Amazon package detected").

---

## 🖥️ Project Structure
```
HMS/
├── website/
│   ├── index.html
│   ├── snapshots/
│   │   └── captured_images.png
│   └── styles.css
├── scripts/
│   ├── motion_detection.py
│   ├── email_alert.py
│   └── object_detection.py
├── models/
│   └── yolo_nano_model.pt
├── nginx_config/
│   └── nginx.conf
└── README.md
```

---

## 📸 Sample Output
- Real-time streaming accessible via `http://<raspberry_pi_ip>`.
- Snapshot display in the website's "Snapshots" tab.
- Terminal output for object detection:
  ```
  Detected: Amazon Package  | Scenario: "Package delivered at the doorstep"
  ```
- Email notification sample:
  > **Subject:** Motion Detected at Front Door  
  > **Body:** Motion was detected. See attached snapshot.

---

## 🧪 Applications
- Home security monitoring.
- Package delivery notifications.
- Pet monitoring and alerts.
- Smart doorbell integration.

---

## 📬 Contact
For issues or contributions, feel free to open an issue or submit a pull request.

GitHub: [Aniket Desai](https://github.com/RecursionReaper)
[Yash Ogale](https://github.com/yashogale30)

---

## 📝 License
This project is licensed under the MIT License.

---

## 💡 Future Improvements
- Cloud storage integration for snapshots.
- Remote access via a secured web portal.
- Enhanced object detection accuracy with updated models.
- Voice assistant integration for real-time alerts.

---

## 🙌 Contributions
Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

---

## 🚀 Acknowledgements
- Raspberry Pi Foundation
- YOLO Nano open-source community
- Nginx open-source project

---

🔒 **Stay secure, stay informed!** 🚀

