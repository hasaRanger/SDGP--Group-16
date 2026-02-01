import Link from "next/link"

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#050505] text-white px-6">
      <div className="text-center max-w-2xl">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          CrackCode
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8">
          Learn Coding Through Interactive Stories
        </p>
        <p className="text-gray-400 mb-12">
          Solve real coding problems while following compelling narratives. Master programming through engaging challenges.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/home"
            className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg font-semibold transition"
          >
            Get Started
          </Link>
          <Link
            href="/login"
            className="px-8 py-3 border border-gray-500 hover:border-gray-300 rounded-lg font-semibold transition"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  )
}
