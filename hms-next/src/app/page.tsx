"use client";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Home() {
  const router = useRouter();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [streamError, setStreamError] = useState<string | null>(null);
  const [isCapturing, setIsCapturing] = useState(false);

  const captureImage = async () => {
    setIsCapturing(true);
    try {
      const canvas = canvasRef.current;
      const video = document.getElementById("live-stream") as HTMLImageElement;

      if (canvas && video) {
        // Create a temporary image to capture the current frame
        const img = new Image();
        img.crossOrigin = "anonymous";

        // Create a promise to handle image loading
        await new Promise((resolve, reject) => {
          img.onload = resolve;
          img.onerror = reject;
          // Force a new request to get the latest frame
          img.src = "/py?" + new Date().getTime();
        });

        // Set canvas dimensions to match the image
        canvas.width = img.width;
        canvas.height = img.height;

        // Draw the image onto the canvas
        const context = canvas.getContext("2d");
        if (!context) return;

        context.drawImage(img, 0, 0, canvas.width, canvas.height);

        // Convert to base64 and save
        const imageData = canvas.toDataURL("image/jpeg", 0.95);
        localStorage.setItem("capturedImage", imageData);

        // Force navigation to snapshots page
        window.location.href = "/snaps";
      }
    } catch (error) {
      console.error("Failed to capture image:", error);
      alert("Failed to capture image. Please try again.");
    } finally {
      setIsCapturing(false);
    }
  };

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
          Home Monitoring System
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          AI-powered surveillance system for intelligent home monitoring and security
        </p>
      </div>

      {/* LIVE STREAM SECTION */}
      <main className="flex justify-center items-center flex-1 p-4 sm:p-6 md:p-8 relative z-10 overflow-hidden">
        <div className="bg-gradient-to-br from-zinc-950/90 to-black/90 w-full sm:w-[90%] md:w-[80%] lg:w-[75%] h-full shadow-2xl rounded-xl sm:rounded-2xl flex justify-center items-center border border-zinc-800/30 backdrop-blur-lg overflow-hidden relative">
          <img
            id="live-stream"
            src="/py"
            alt="Live Stream"
            className="w-full h-full object-contain"
            onError={(e) => {
              console.error('Stream error:', e);
              setStreamError('Failed to load camera stream. Please check if the camera server is running.');
            }}
          />
          <canvas ref={canvasRef} className="hidden" />
          {streamError && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/80">
              <div className="text-red-400 text-center p-4">
                <p>{streamError}</p>
                <button
                  onClick={() => {
                    setStreamError(null);
                    const img = document.getElementById('live-stream') as HTMLImageElement;
                    if (img) img.src = '/py?' + new Date().getTime();
                  }}
                  className="mt-4 px-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg text-white"
                >
                  Retry Connection
                </button>
              </div>
            </div>
          )}
        </div>

        <button
          onClick={captureImage}
          disabled={isCapturing}
          className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 px-6 py-3 ${isCapturing ? 'bg-blue-800' : 'bg-blue-600 hover:bg-blue-700'
            } text-white rounded-lg transition-all duration-300 flex items-center space-x-2`}
        >
          <span>{isCapturing ? 'Capturing...' : 'Capture'}</span>
          <svg
            className={`w-5 h-5 ${isCapturing ? 'animate-pulse' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <circle cx="12" cy="12" r="3" />
            <path strokeLinecap="round" d="M19 4H5a2 2 0 00-2 2v12a2 2 0 002 2h14a2 2 0 002-2V6a2 2 0 00-2-2zm-7 13a4 4 0 110-8 4 4 0 010 8z" />
          </svg>
        </button>
      </main>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Link href="/snaps" className="card group hover:border-blue-500/50 transition-colors">
          <h2 className="text-xl font-semibold mb-2 group-hover:text-blue-400">📸 Snapshots</h2>
          <p className="text-gray-400">Capture and view images from your surveillance cameras</p>
        </Link>

        <Link href="/alerts/intrusion" className="card group hover:border-red-500/50 transition-colors">
          <h2 className="text-xl font-semibold mb-2 group-hover:text-red-400">🚨 Intrusion Alerts</h2>
          <p className="text-gray-400">View detected intrusion events and related images</p>
        </Link>

        <Link href="/alerts/packages" className="card group hover:border-green-500/50 transition-colors">
          <h2 className="text-xl font-semibold mb-2 group-hover:text-green-400">📦 Package Alerts</h2>
          <p className="text-gray-400">Monitor package deliveries and pickups</p>
        </Link>
      </div>

      <div className="card bg-gradient-to-br from-blue-900/50 to-purple-900/50">
        <h2 className="text-xl font-semibold mb-4">System Status</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4 rounded-lg bg-black/40">
            <div className="text-sm text-gray-400">Cameras Active</div>
            <div className="text-2xl font-semibold text-green-400">2/2</div>
          </div>
          <div className="p-4 rounded-lg bg-black/40">
            <div className="text-sm text-gray-400">Storage Used</div>
            <div className="text-2xl font-semibold text-blue-400">42%</div>
          </div>
          <div className="p-4 rounded-lg bg-black/40">
            <div className="text-sm text-gray-400">Last Event</div>
            <div className="text-2xl font-semibold text-purple-400">2m ago</div>
          </div>
          <div className="p-4 rounded-lg bg-black/40">
            <div className="text-sm text-gray-400">AI Status</div>
            <div className="text-2xl font-semibold text-green-400">Active</div>
          </div>
        </div>
      </div>
    </div>
  );
}
