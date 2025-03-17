"use client";
import { useEffect, useState } from "react";

export default function Snaps() {
  const [savedImage, setSavedImage] = useState(null);

  useEffect(() => {
    const imageData = localStorage.getItem("capturedImage");
    if (imageData) {
      setSavedImage(imageData);
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
      <h1 className="text-3xl font-bold">Screenshots</h1>
      {savedImage ? (
        <img src={savedImage} alt="Captured" className="mt-4 w-96 h-72 rounded-lg shadow-lg" />
      ) : (
        <p className="mt-4 text-gray-400">No images captured yet.</p>
      )}
    </div>
  );
}
