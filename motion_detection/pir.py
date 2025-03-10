import RPi.GPIO as GPIO
import time

# PIR sensor pin
PIR_PIN = 17  # Change this if your PIR sensor is connected to a different GPIO pin

# GPIO setup
GPIO.setmode(GPIO.BCM)  # BCM mode uses GPIO numbers
GPIO.setup(PIR_PIN, GPIO.IN)

print("PIR Sensor initialized... Waiting for motion...")

try:
    while True:
        if GPIO.input(PIR_PIN):
            print("Motion Detected!")
            time.sleep(2)  # Delay to prevent multiple detections in quick succession
        time.sleep(0.1)  # Small delay for stable reading

except KeyboardInterrupt:
    print("Program terminated.")

finally:
    GPIO.cleanup()  # Clean up GPIO settings for safe shutdown