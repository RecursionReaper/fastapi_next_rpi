export default function AboutPage() {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
          About HMS
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          An AI-powered home surveillance system for intelligent monitoring and security
        </p>
      </div>

      <div className="grid gap-6">
        <div className="card">
          <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
          <div className="prose prose-invert max-w-none">
            <p>
              HMS (Home Monitoring System) is a sophisticated AI-powered surveillance system built using Raspberry Pi.
              It combines cutting-edge computer vision technology with efficient home monitoring to provide a comprehensive
              security solution.
            </p>
            <h3>Key Features</h3>
            <ul>
              <li>Real-time human intrusion detection using advanced AI models</li>
              <li>Package delivery detection and monitoring</li>
              <li>Motion-triggered recording and alerts</li>
              <li>Email notification system for instant alerts</li>
              <li>Local image processing for bandwidth efficiency</li>
              <li>User-friendly web interface for monitoring and control</li>
            </ul>
          </div>
        </div>

        <div className="card">
          <h2 className="text-2xl font-semibold mb-4">Technology Stack</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium mb-2 text-blue-400">Hardware</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Raspberry Pi 4</li>
                <li>• High-resolution camera module</li>
                <li>• Motion sensors</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2 text-purple-400">Software</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Next.js for the web interface</li>
                <li>• Python for backend processing</li>
                <li>• TensorFlow for AI models</li>
                <li>• OpenCV for image processing</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="card">
          <h2 className="text-2xl font-semibold mb-4">Email Alert System</h2>
          <p className="text-gray-300">
            HMS features an automated email alert system that notifies users of important events:
          </p>
          <ul className="mt-4 space-y-2 text-gray-300">
            <li>• Instant notifications for detected intrusions</li>
            <li>• Package delivery alerts with image attachments</li>
            <li>• System status updates and notifications</li>
            <li>• Customizable alert preferences</li>
          </ul>
        </div>

        <div className="card">
          <h2 className="text-2xl font-semibold mb-4">Founders</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <h3 className="text-lg font-medium text-blue-400">Aniket Desai</h3>
              <p className="text-gray-400">
                Lead Developer & Hardware Engineer
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-medium text-purple-400">Yash Ogale</h3>
              <p className="text-gray-400">
                AI Engineer & System Architect
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}