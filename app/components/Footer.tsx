export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white text-center py-6 mt-10">
      <p className="text-sm">PDF Annotation Tool © {new Date().getFullYear()}</p>
      <a href="#" className="text-blue-400 underline mt-2 block">GitHub Repository</a>
    </footer>
  )
}
