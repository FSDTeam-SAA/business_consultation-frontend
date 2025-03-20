import { Check, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card"

export default function ChoosePlan() {
  // Define features for reuse
  const features = [
    { name: "Market Growth Solution", individual: true, team: true },
    { name: "Great Customer Support", individual: true, team: true },
    { name: "Time Series Models", individual: false, team: true },
    { name: "24/7 consultant Service", individual: false, team: false },
  ]

  return (
    <div className="w-full py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col items-start mb-8">
      <div className="inline-block">
            <span className="inline-flex items-center px-4 py-1.5 rounded-md text-sm font-medium  text-green-600 border border-green-200">
              • Flexible Pricing
            </span>
          </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-3">Choose a Plan Your Need</h2>
        <p className="text-gray-600 max-w-lg">
          An ideal mix of worldwide experience and skill to additional our attention on innovation.
        </p>
      </div>

      {/* Desktop view - Traditional table layout */}
      <div className="hidden md:block">
        <Card className="shadow-md">
          <CardContent className="p-0">
            {/* Table Header */}
            <div className="grid grid-cols-3 bg-gray-100 rounded-t-lg">
              <div className="p-4 font-semibold text-lg border-r border-gray-200">Package Details</div>
              <div className="p-4 font-semibold text-lg text-center border-r border-gray-200">Individual</div>
              <div className="p-4 font-semibold text-lg text-center">Team</div>
            </div>

            {/* Features */}
            <div className="divide-y divide-gray-200">
              {features.map((feature, index) => (
                <div key={index} className="grid grid-cols-3">
                  <div className="p-4 border-r border-gray-200">{feature.name}</div>
                  <div className="p-4 flex justify-center items-center border-r border-gray-200">
                    {feature.individual ? (
                      <Check className="h-5 w-5 text-green-500" />
                    ) : (
                      <X className="h-5 w-5 text-gray-400" />
                    )}
                  </div>
                  <div className="p-4 flex justify-center items-center">
                    {feature.team ? (
                      <Check className="h-5 w-5 text-green-500" />
                    ) : (
                      <X className="h-5 w-5 text-gray-400" />
                    )}
                  </div>
                </div>
              ))}

              {/* Price */}
              <div className="grid grid-cols-3">
                <div className="p-4 border-r border-gray-200 text-green-600 font-medium">Price</div>
                <div className="p-4 flex justify-center items-center border-r border-gray-200">
                  <span className="text-xl font-bold">
                    <sup className="text-sm">$</sup>12.10
                  </span>
                </div>
                <div className="p-4 flex justify-center items-center">
                  <span className="text-xl font-bold">
                    <sup className="text-sm">$</sup>52.10
                  </span>
                </div>
              </div>

              {/* Package */}
              <div className="grid grid-cols-3">
                <div className="p-4 border-r border-gray-200 text-green-600 font-medium">Package</div>
                <div className="p-4 flex justify-center items-center border-r border-gray-200">
                  <Button className="bg-green-500 hover:bg-green-600">Buy Plan</Button>
                </div>
                <div className="p-4 flex justify-center items-center">
                  <Button className="bg-green-500 hover:bg-green-600">Buy Plan</Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Mobile view - Card-based layout */}
      <div className="grid grid-cols-1 gap-6 md:hidden">
        {/* Individual Plan Card */}
        <Card className="shadow-md overflow-hidden">
          <CardHeader className="bg-gray-100 pb-4">
            <h3 className="text-xl font-bold text-center">Individual</h3>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="text-center mb-6">
              <span className="text-3xl font-bold">
                <sup className="text-lg">$</sup>12.10
              </span>
            </div>
            <ul className="space-y-3">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  {feature.individual ? (
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  ) : (
                    <X className="h-5 w-5 text-gray-400 mr-2 flex-shrink-0" />
                  )}
                  <span className={feature.individual ? "text-gray-800" : "text-gray-500"}>{feature.name}</span>
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter className="pt-2 pb-6">
            <Button className="w-full bg-green-500 hover:bg-green-600">Buy Plan</Button>
          </CardFooter>
        </Card>

        {/* Team Plan Card */}
        <Card className="shadow-md overflow-hidden">
          <CardHeader className="bg-gray-100 pb-4">
            <h3 className="text-xl font-bold text-center">Team</h3>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="text-center mb-6">
              <span className="text-3xl font-bold">
                <sup className="text-lg">$</sup>12.10
              </span>
            </div>
            <ul className="space-y-3">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  {feature.team ? (
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  ) : (
                    <X className="h-5 w-5 text-gray-400 mr-2 flex-shrink-0" />
                  )}
                  <span className={feature.team ? "text-gray-800" : "text-gray-500"}>{feature.name}</span>
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter className="pt-2 pb-6">
            <Button className="w-full bg-green-500 hover:bg-green-600">Buy Plan</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

