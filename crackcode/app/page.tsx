export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#050505] text-white px-6">
      <header className="fixed top-0 left-0 right-0 z-50 h-20 sm:h-24 bg-transparent backdrop-blur-md shadow-md px-6 sm:px-10 border-b border-white/10 flex items-center">
        <h1 className="text-2xl font-bold">CrackCode</h1>
      </header>
      
      <div className="text-center max-w-2xl mt-20 sm:mt-24">
        <h2 className="text-5xl md:text-6xl font-bold mb-6">
          CrackCode
        </h2>
        <p className="text-xl md:text-2xl text-gray-300 mb-8">
          Learn Coding Through Interactive Stories
        </p>
        <p className="text-gray-400 mb-12">
          Solve real coding problems while following compelling narratives. Master programming through engaging challenges.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg font-semibold transition">
            Get Started
          </button>
          <button className="px-8 py-3 border border-gray-500 hover:border-gray-300 rounded-lg font-semibold transition">
            Login
          </button>
        </div>
      </div>
    </div>
  )
}
