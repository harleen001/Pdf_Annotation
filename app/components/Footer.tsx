import Link from "next/link"
import { Github, FileText, Heart } from "lucide-react"
import type { JSX } from "react" // Declare JSX variable

export default function Footer(): JSX.Element {
  const currentYear: number = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <FileText className="h-8 w-8 text-blue-400 mr-3" />
              <h3 className="text-2xl font-bold">PDF Annotation Tool</h3>
            </div>
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              The most intuitive and powerful browser-based PDF annotation tool. Highlight, comment, and collaborate
              without limits.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://github.com"
                className="inline-flex items-center px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors duration-200"
              >
                <Github className="h-5 w-5 mr-2" />
                View on GitHub
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/editor" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Start Annotating
                </Link>
              </li>
              <li>
                <Link href="#features" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#demo" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Demo
                </Link>
              </li>
              <li>
                <Link href="#help" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Help & Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#documentation" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="#api" className="text-gray-400 hover:text-white transition-colors duration-200">
                  API Reference
                </Link>
              </li>
              <li>
                <Link href="#tutorials" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Tutorials
                </Link>
              </li>
              <li>
                <Link href="#community" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Community
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="flex items-center text-gray-400 mb-4 sm:mb-0">
              <span>&copy; {currentYear} PDF Annotation Tool. All rights reserved.</span>
            </div>

            <div className="flex items-center text-gray-400">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-500 mx-1" />
              <span>for better PDF workflows</span>
            </div>
          </div>

          <div className="mt-4 text-center text-sm text-gray-500">
            <p>This is a demo project. The /editor route is not yet implemented.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
