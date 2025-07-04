import { HighlighterIcon as Highlight, MessageSquare, Users, Zap, type LucideIcon } from "lucide-react"
import { JSX } from "react"

interface Feature {
  icon: LucideIcon
  title: string
  description: string
}

export default function Features(): JSX.Element {
  const features: Feature[] = [
    {
      icon: Highlight,
      title: "Smart Highlighting",
      description:
        "Highlight text with precision using our intelligent selection tools. Choose from multiple colors and styles to organize your annotations effectively.",
    },
    {
      icon: MessageSquare,
      title: "Rich Comments",
      description:
        "Add detailed comments and notes to any part of your PDF. Support for rich text formatting, links, and multimedia attachments.",
    },
    {
      icon: Users,
      title: "Real-time Collaboration",
      description:
        "Work together with your team in real-time. Share documents, leave feedback, and track changes with seamless collaboration features.",
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description:
        "Experience blazing-fast performance with our optimized rendering engine. Handle large PDFs without compromising on speed or quality.",
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Powerful Features for
            <span className="text-blue-600"> Every Need</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to annotate, review, and collaborate on PDF documents efficiently and effectively.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature: Feature, index: number) => (
            <div
              key={index}
              className="group p-8 rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 bg-white hover:bg-blue-50/30"
            >
              <div className="mb-6">
                <div className="inline-flex p-3 rounded-xl bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  <feature.icon className="h-6 w-6" />
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-900 transition-colors duration-300">
                {feature.title}
              </h3>

              <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-blue-50 text-blue-700 font-medium">
            <Zap className="h-5 w-5 mr-2" />
            And many more features coming soon!
          </div>
        </div>
      </div>
    </section>
  )
}
