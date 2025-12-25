import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import authService from "./service/auth";
import { login, logout } from "./store/authSlice";
import { Footer, Header } from "./components";
import { Outlet } from "react-router-dom";

function App() {
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();
    const theme = useSelector((state) => state.theme.theme);

    useEffect(() => {
        authService
            .getCurrentUser()
            .then((userData) => {
                if (userData) {
                    dispatch(login({ userData }));
                } else {
                    dispatch(logout());
                }
            })
            .finally(() => setLoading(false));
    }, []);

    useEffect(() => {
        document.documentElement.classList.toggle("dark", theme === "dark");
    }, [theme]);

    return !loading ? (
        <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
            <Header />
            <main
                className="
                grow
                w-full
                px-4 sm:px-6 lg:px-8
                py-6
                "
            >
                <Outlet />
            </main>

            <Footer />
        </div>
    ) : null;
}

export default App;
