import React, { useState } from "react";
import { Container, Logo, LogoutBtn } from "../index.js";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toggleDarkMode } from "../../store/themeSlice.js";

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

    return (
        <header className="sticky top-0 z-50 bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800 shadow-md">
            <Container>
                <nav className="flex items-center justify-between py-3">
                    {/* Logo */}
                    <Link to="/" className="flex items-center">
                        <Logo width="60px" />
                    </Link>

                    {/* Desktop Navigation */}
                    <ul className="hidden md:flex items-center gap-2">
                        {navItems.map(
                            (item) =>
                                item.active && (
                                    <li key={item.name}>
                                        <button
                                            onClick={() => navigate(item.slug)}
                                            className="px-4 py-2 rounded-full text-sm font-medium
                      text-gray-700 dark:text-gray-200
                      hover:bg-blue-100 dark:hover:bg-gray-700 transition"
                                        >
                                            {item.name}
                                        </button>
                                    </li>
                                )
                        )}

                        {authStatus && (
                            <LogoutBtn
                                className="px-4 py-2 rounded-full text-sm font-medium
                      text-gray-700 dark:text-gray-200
                      hover:bg-blue-100 dark:hover:bg-gray-700 transition"
                            />
                        )}

                        {/* Theme Toggle */}
                        <button
                            onClick={() => dispatch(toggleDarkMode())}
                            className="ml-2 px-4 py-2 rounded-full text-sm
              bg-gray-200 dark:bg-gray-700
              text-gray-800 dark:text-gray-100"
                        >
                            {theme === "light" ? "🌙 " : "☀️"}
                        </button>
                    </ul>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center gap-2">
                        <button
                            onClick={() => dispatch(toggleDarkMode())}
                            className="px-3 py-2 rounded-md bg-gray-200 dark:bg-gray-700"
                        >
                            {theme === "light" ? "🌙" : "☀️"}
                        </button>

                        <button
                            onClick={() => setMobileOpen(!mobileOpen)}
                            className="px-3 py-2 rounded-md bg-gray-200 dark:bg-gray-700"
                        >
                            ☰
                        </button>
                    </div>
                </nav>

                {/* Mobile Dropdown */}
                {mobileOpen && (
                    <div className="md:hidden mt-2 rounded-lg bg-white dark:bg-gray-900 shadow-lg border dark:border-gray-800">
                        <ul className="flex flex-col p-2">
                            {navItems.map(
                                (item) =>
                                    item.active && (
                                        <li key={item.name}>
                                            <button
                                                onClick={() =>
                                                    handleNavigate(item.slug)
                                                }
                                                className="w-full text-left px-4 py-2 rounded-md
                        text-gray-700 dark:text-gray-200
                        hover:bg-blue-100 dark:hover:bg-gray-700"
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
                        text-gray-700 dark:text-gray-200
                        hover:bg-blue-100 dark:hover:bg-gray-700"
                                    />
                                </li>
                            )}
                        </ul>
                    </div>
                )}
            </Container>
        </header>
    );
}

export default Header;
