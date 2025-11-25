import { Link } from 'react-router'

const Error = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center px-4">
      <div className="bg-white max-w-md w-full text-center p-10 rounded-xl shadow-lg border">
        <h1 className="text-6xl font-bold text-red-600">404</h1>
        <p className="text-lg text-gray-600 mt-2">Page not found</p>

        <Link
          to="/"
          className="mt-6 inline-block px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Go Home
        </Link>
      </div>
    </div>

  )
}

export default Error