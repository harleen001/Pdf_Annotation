type Feature = {
  title: string
  description: string
}

const features: Feature[] = [
  { title: 'Highlight & Comment', description: 'Easily highlight text and add comments.' },
  { title: 'Secure & Private', description: 'All annotations are stored locally.' },
  { title: 'Works in Browser', description: 'No installations or sign-ups needed.' },
  { title: 'Free & Open Source', description: 'Totally free and MIT licensed.' },
]

export default function Features() {
  return (
    <section className="py-16 px-4 bg-white text-center">
      <h2 className="text-3xl font-semibold mb-10">Core Features</h2>
      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {features.map((feature, idx) => (
          <div key={idx} className="bg-gray-100 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
