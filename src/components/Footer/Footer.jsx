
import React from 'react'
import { Link } from 'react-router-dom'
import { FaGithub,FaEnvelope , FaLinkedin } from 'react-icons/fa'
import Logo from '../Logo'

function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5">

          {/* Logo & Info */}
          <div className="lg:col-span-2">
            <Logo width="110px" />
            <p className="mt-4 max-w-sm text-sm text-gray-600 dark:text-gray-400">
              Blogy is a platform built to write, share, and inspire ideas.
            </p>

            {/* Social Icons */}
            <div className="mt-6 flex gap-4">
              <a
                href="#"
                className="text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition"
                aria-label="GitHub"
              >
                <FaGithub size={20} />
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition"
                aria-label="Twitter"
              >
                <FaEnvelope  size={20} />
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-gray-200 dark:border-gray-800 pt-6 text-center">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} Blogy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

function FooterColumn({ title, links }) {
  return (
    <div>
      <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-gray-900 dark:text-gray-100">
        {title}
      </h3>
      <ul className="space-y-3">
        {links.map(link => (
          <li key={link}>
            <Link
              to="/"
              className="text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition"
            >
              {link}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Footer
