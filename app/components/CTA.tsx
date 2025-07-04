export default function CTA() {
  return (
    <section className="py-16 px-4 bg-blue-50 text-center">
      <h2 className="text-2xl font-semibold mb-4">Start Annotating Now</h2>
      <p className="text-gray-600 mb-6">Upload a PDF or launch the editor.</p>
      <div className="flex justify-center gap-4">
        <button className="bg-blue-600 text-white px-5 py-3 rounded hover:bg-blue-700">Upload PDF</button>
        <button className="border border-blue-600 text-blue-600 px-5 py-3 rounded hover:bg-blue-100">
          Open Editor
        </button>
      </div>
    </section>
  )
}
