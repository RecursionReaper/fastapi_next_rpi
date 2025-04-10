import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'HMS - Home Monitoring System',
  description: 'AI-Powered Home Surveillance System',
}

const navItems = [
  { href: '/', label: 'Dashboard' },
  { href: '/snaps', label: 'Snapshots' },
  { href: '/alerts/intrusion', label: 'Intrusion Alerts' },
  { href: '/alerts/packages', label: 'Package Alerts' },
  { href: '/about', label: 'About' },
]

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black">
          <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-sm border-b border-gray-800 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-16">
                <div className="flex items-center">
                  <span className="text-xl font-bold text-white">HMS</span>
                </div>
                <div className="hidden md:block">
                  <div className="flex items-center space-x-4">
                    {navItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="nav-link text-gray-300 hover:text-white"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </nav>
          <main className="pt-20 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  )
}
