import React, { useRef, useState, useEffect } from "react";
import { Container, Logo, LogoutBtn } from "../index.js";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toggleDarkMode } from "../../store/themeSlice.js";
import { FiSun, FiMoon } from "react-icons/fi";

function Header() {
    const authStatus = useSelector((state) => state.auth.status);
    const theme = useSelector((state) => state.theme.theme);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [mobileOpen, setMobileOpen] = useState(false);

    const navItems = [
        { name: "Home", slug: "/", active: true },
        { name: "Login", slug: "/login", active: !authStatus },
        { name: "Signup", slug: "/signup", active: !authStatus },
        { name: "All Posts", slug: "/all-posts", active: authStatus },
        { name: "My Posts", slug: "/my-posts", active: authStatus }, // ✅ added
        { name: "Add Post", slug: "/add-post", active: authStatus },
    ];

    const handleNavigate = (slug) => {
        navigate(slug);
        setMobileOpen(false);
    };

    const dropdownRef = useRef(null); // for click
    const menuButtonRef = useRef(null); //for handleing click

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target) &&
                menuButtonRef.current &&
                !menuButtonRef.current.contains(event.target)
            ) {
                setMobileOpen(false);
            }
        };

        if (mobileOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [mobileOpen]);

    return (
        <header
            className="sticky top-0 z-50
             bg-white/90 dark:bg-gray-950/90
             backdrop-blur-sm
             border-b border-gray-200/60 dark:border-gray-800/60
             shadow-sm"
        >
            <Container>
                <nav className="flex items-center justify-between py-3">
                    {/* Logo */}
                    <Link to="/" className="flex items-center">
                        <Logo width="60px" />
                    </Link>

                    {/* Desktop Navigation */}
                    <ul className="hidden md:flex items-center gap-1">
                        {navItems.map(
                            (item) =>
                                item.active && (
                                    <li key={item.name}>
                                        <button
                                            onClick={() => navigate(item.slug)}
                                            className="px-4 py-2 rounded-full text-sm font-medium
                             text-gray-800 dark:text-gray-200
                             hover:bg-blue-100/60 dark:hover:bg-gray-700/50
                             transition-colors"
                                        >
                                            {item.name}
                                        </button>
                                    </li>
                                )
                        )}

                        {authStatus && (
                            <LogoutBtn
                                className="px-4 py-2 rounded-full text-sm font-medium
                       text-gray-800 dark:text-gray-200
                       hover:bg-blue-100/60 dark:hover:bg-gray-700/50
                       transition-colors"
                            />
                        )}

                        {/* Theme Toggle (Desktop) */}
                        <button
                            onClick={() => dispatch(toggleDarkMode())}
                            className="ml-2 w-9 h-9 rounded-full
                     flex items-center justify-center
                     bg-white/90 dark:bg-gray-950/95
                     text-gray-800 dark:text-white
                     hover:scale-110 transition-all duration-200
                     "
                        >
                            {theme === "light" ? (
                                <FiMoon size={18} />
                            ) : (
                                <FiSun size={18} />
                            )}
                        </button>
                    </ul>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center gap-2">
                        <button
                            onClick={() => setMobileOpen(!mobileOpen)}
                            ref={menuButtonRef}
                            className="px-3 py-2 rounded-md
                     bg-gray-200/70 dark:bg-gray-800/70
                     backdrop-blur-sm
                     transition-colors"
                        >
                            ☰
                        </button>
                    </div>
                </nav>

                {/* Mobile Dropdown */}
                {mobileOpen && (
                    <div className="relative md:hidden">
                        <div
                        ref={dropdownRef}
                            className="absolute right-0 mt-2 w-64
                     rounded-lg
                     bg-white/95 dark:bg-gray-950/95
                     backdrop-blur-sm
                     shadow-sm
                     border border-gray-200/60 dark:border-gray-700/50
                     z-50"
                        >
                            {/* Theme Toggle (Mobile) */}
                            <div className="flex justify-end px-3 py-2">
                                <button
                                    onClick={() => dispatch(toggleDarkMode())}
                                    className="w-9 h-9 rounded-full
                         flex items-center justify-center
                         bg-white/90 dark:bg-gray-800/70
                         text-gray-800 dark:text-white 
                         hover:scale-110 transition-all duration-200
                         "
                                >
                                    {theme === "light" ? (
                                        <FiMoon size={18} />
                                    ) : (
                                        <FiSun size={18} />
                                    )}
                                </button>
                            </div>

                            <ul className="flex flex-col p-2">
                                {navItems.map(
                                    (item) =>
                                        item.active && (
                                            <li key={item.name}>
                                                <button
                                                    onClick={() =>
                                                        handleNavigate(
                                                            item.slug
                                                        )
                                                    }
                                                    className="w-full text-left px-4 py-2 rounded-md
                                 text-gray-800 dark:text-white
                                 hover:bg-gray-100/70 dark:hover:bg-gray-700/50
                                 transition-colors"
                                                >
                                                    {item.name}
                                                </button>
                                            </li>
                                        )
                                )}

                                {authStatus && (
                                    <li>
                                        <LogoutBtn
                                            className="w-full text-left px-4 py-2 rounded-md
                             text-gray-800 dark:text-gray-200
                             hover:bg-gray-100/70 dark:hover:bg-gray-700/50
                             transition-colors"
                                        />
                                    </li>
                                )}
                            </ul>
                        </div>
                    </div>
                )}
            </Container>
        </header>
    );
}

export default Header;
