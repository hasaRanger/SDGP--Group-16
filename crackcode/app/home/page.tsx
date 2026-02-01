export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <header className="fixed top-0 left-0 right-0 bg-transparent backdrop-blur-md border-b border-white/10 z-50 h-20 sm:h-24 px-6 sm:px-10 flex items-center">
        <div className="flex justify-between items-center w-full">
          <h1 className="text-2xl font-bold">CrackCode</h1>
          <nav className="hidden md:flex gap-8">
            <a href="#" className="hover:text-indigo-400 transition">Home</a>
            <a href="#" className="hover:text-indigo-400 transition">Problems</a>
            <a href="#" className="hover:text-indigo-400 transition">Profile</a>
          </nav>
        </div>
      </header>

      <main className="mt-20 sm:mt-24 p-6 sm:p-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-8">Welcome Back!</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-gray-900 rounded-lg p-6 hover:bg-gray-800 transition cursor-pointer">
                <h3 className="text-xl font-semibold mb-2">Problem {i}</h3>
                <p className="text-gray-400 mb-4">
                  Solve this coding challenge and level up your skills
                </p>
                <button className="text-indigo-400 hover:text-indigo-300 transition font-semibold">
                  Start Challenge →
                </button>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
