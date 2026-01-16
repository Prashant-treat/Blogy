           
import logo from "../assets/logo.png"

function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-linear-to-b from-gray-50 via-white to-white dark:from-gray-900 dark:via-gray-950 dark:to-black">
      
      {/* Light mode decorative blobs */}
      <div className="absolute inset-0 -z-10 dark:hidden">
        <div className="absolute top-24 left-1/4 h-72 w-72 rounded-full bg-blue-200/40 blur-3xl" />
        <div className="absolute top-40 right-1/4 h-72 w-72 rounded-full bg-purple-200/40 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-24 text-center">

        {/* Logo */}
        <div className="flex justify-center mb-6">
          <div className="p-4 rounded-2xl bg-white shadow-lg ring-1 ring-gray-200 dark:bg-gray-900 dark:ring-gray-800">
             <img
                    src={logo}
                    alt="Blogy"
                    style={{ width:"60px" }}
                    className="object-contain block "
                  />
          </div>
        </div>

        {/* Badge */}
        <div className="flex justify-center mb-6">
          <span className="inline-flex items-center gap-2 px-5 py-1.5 text-sm font-medium text-blue-700 bg-blue-100 rounded-full shadow-sm dark:text-blue-400 dark:bg-blue-900/40">
            ✍️ A Modern Blogging Platform
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white">
          Share Your Ideas, <br />
          <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent dark:text-blue-400">
            Inspire the World
          </span>
        </h1>

        {/* Description */}
        <p className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
          Blogy is a modern, distraction-free blogging platform to write,
          publish, and explore meaningful content from creators worldwide.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex justify-center gap-4 flex-wrap">
          <a
            href="/all-posts"
            className="px-7 py-3.5 text-white bg-linear-to-r from-blue-600 to-blue-700 hover:to-blue-800 rounded-xl font-semibold shadow-md hover:shadow-lg transition-all duration-200"
          >
            Explore Blogs
          </a>

          <a
            href="/add-post"
            className="px-7 py-3.5 text-gray-900 border border-gray-300 hover:bg-gray-100 rounded-xl font-semibold transition-all duration-200 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800"
          >
            Start Writing
          </a>
        </div>

      </div>
    </section>
  );
}

export default HeroSection;
