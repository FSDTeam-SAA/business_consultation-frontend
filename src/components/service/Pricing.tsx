export default function Pricing() {
    return (
      <div className="w-full max-w-4xl mx-auto px-4 py-8">
        <div className="inline-block mb-4">
          <span className="text-green-500 px-3 py-1 rounded-full text-sm font-medium border border-green-500 flex items-center">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-1"></span>
            Flexible Pricing
          </span>
        </div>
  
        <h2 className="text-2xl font-bold mb-2">Sign up now</h2>
        <p className="text-gray-600 mb-6 max-w-lg">Are you ready to show your commitment towards net zero? Sign up now and let us assist you on your journey to becoming carbon-neutral.
        </p>
  
        <div className="border rounded-md overflow-hidden shadow-sm">
          <div className="bg-gray-100 px-4 py-3">
            <h3 className="font-medium">Feature</h3>
          </div>
          <div className="divide-y">
            <div className="flex items-center justify-between px-4 py-4">
              <span>Market Growth Solution</span>
              <svg className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="flex items-center justify-between px-4 py-4">
              <span>Great Customer Support</span>
              <svg className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="flex items-center justify-between px-4 py-4">
              <span>Time Series Models</span>
              <svg className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="none" stroke="currentColor">
                <path d="M6 6l8 8m0-8l-8 8" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </div>
            <div className="flex items-center justify-between px-4 py-4">
              <span>24/7 consultant Service</span>
              <svg className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="none" stroke="currentColor">
                <path d="M6 6l8 8m0-8l-8 8" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </div>
            <div className="flex items-center justify-between px-4 py-4">
            <span className="text-green-500">Price</span>
            <span className="font-bold text-md sm:ml-auto md:ml-64">$100.00</span>
            </div>
            <div className="flex items-center justify-between px-4 py-4">
            <span className="text-green-500">Package</span>
            <button className="ml-auto bg-green-500 text-white px-4 py-2 rounded-md text-sm">Buy Plan</button>
            </div>
         
          </div>
        </div>
      </div>
    )
  }
  
  