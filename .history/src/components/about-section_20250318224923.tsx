import NextImage from "next/image"

const skills = [
  { name: "Strategy", percentage: 90 },
  { name: "Planning", percentage: 85 },
  { name: "Marketing", percentage: 80 },
]

export default function AboutSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left side - Team image */}
          <div className="relative">
            <NextImage
              src="/placeholder.svg?height=600&width=500"
              alt="Business team"
              width={500}
              height={600}
              className="rounded-lg shadow-md"
            />
          </div>

          {/* Right side - About content */}
          <div>
            <div className="inline-block bg-white px-4 py-1 rounded-full border border-[#09B850] mb-6">
              <span className="text-[#09B850] text-sm font-medium">ABOUT US</span>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-[#033618] mb-6">
              Your Partner in
              <br />
              corporate strategy
            </h2>

            <div className="mb-8">
              {skills.map((skill) => (
                <div key={skill.name} className="mb-4">
                  <div className="flex justify-between mb-1">
                    <span className="text-[#033618] font-medium">{skill.name}</span>
                    <span className="text-[#09B850] font-medium">{skill.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-[#09B850] h-2 rounded-full" style={{ width: `${skill.percentage}%` }}></div>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-gray-600 mb-6">
              We are one of the top strategic partners. The leader in client success and business growth. Our team is
              dedicated to helping your business thrive.
            </p>

            <div className="flex items-center space-x-4">
              <NextImage
                src="/placeholder.svg?height=60&width=60"
                alt="Team member"
                width={60}
                height={60}
                className="rounded-full"
              />
              <div>
                <h4 className="font-semibold text-[#033618]">Matthew Nelson</h4>
                <p className="text-gray-500 text-sm">CEO of Consultive</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

