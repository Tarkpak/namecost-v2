/* This example requires Tailwind CSS v2.0+ */

export function NavTitle({ children }) {
    return (
      <div className="relative bg-gray-600">
        <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
          <div>
          <h2 className="text-xs font-bold text-white  sm:text-xl sm:tracking-widest text-center">
            { children }
          </h2>
          </div>
        </div>
      </div>
    )
  }
  