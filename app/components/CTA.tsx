"use client"

import { Button } from "./ui/button"
import { Upload, ArrowRight, FileText } from "lucide-react"
import type { ChangeEvent, JSX } from "react"

export default function CTA(): JSX.Element {
  const handleFileUpload = (event: ChangeEvent<HTMLInputElement>): void => {
    const file = event.target.files?.[0]
    if (file && file.type === "application/pdf") {
      console.log("PDF file selected:", file.name)
      // This would normally redirect to /editor with the file
      alert(`Selected: ${file.name}. This would open in the editor!`)
    } else if (file) {
      alert("Please select a PDF file.")
    }
  }

  const handleStartWithoutFile = (): void => {
    window.location.href = "/editor"
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-indigo-700">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <FileText className="h-16 w-16 text-blue-200 mx-auto mb-6" />
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
            Upload your PDF and start annotating in seconds. No account required, no software to install. Just drag,
            drop, and annotate.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          {/* File Upload Button */}
          <div className="relative">
            <input
              type="file"
              accept=".pdf"
              onChange={handleFileUpload}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              id="pdf-upload"
            />
            <label
              htmlFor="pdf-upload"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold text-lg rounded-lg shadow-lg hover:bg-blue-50 hover:shadow-xl transition-all duration-200 cursor-pointer"
            >
              <Upload className="mr-3 h-5 w-5" />
              Upload PDF File
            </label>
          </div>

          {/* Or Divider */}
          <div className="flex items-center">
            <div className="hidden sm:block w-8 h-px bg-blue-300"></div>
            <span className="px-4 text-blue-200 font-medium">or</span>
            <div className="hidden sm:block w-8 h-px bg-blue-300"></div>
          </div>

          {/* Start Button */}
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-200 bg-transparent"
            onClick={handleStartWithoutFile}
          >
            Start Without File
            <ArrowRight className="ml-3 h-5 w-5" />
          </Button>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div className="text-blue-100">
            <div className="text-2xl font-bold text-white">100%</div>
            <div className="text-sm">Browser-based</div>
          </div>
          <div className="text-blue-100">
            <div className="text-2xl font-bold text-white">0</div>
            <div className="text-sm">Downloads required</div>
          </div>
          <div className="text-blue-100">
            <div className="text-2xl font-bold text-white">∞</div>
            <div className="text-sm">Files supported</div>
          </div>
        </div>
      </div>
    </section>
  )
}
