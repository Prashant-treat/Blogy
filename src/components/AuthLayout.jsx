import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";

export default function AuthLayout({ children, authentication = true }) {
    const navigate = useNavigate();
    const [loader, setLoader] = useState(true);
    const authStatus = useSelector((state) => state.auth.status);
    const location = useLocation();

    useEffect(() => {
        //TODO: make it more easy to understand

        // if (authStatus ===true){
        //     navigate("/")
        // } else if (authStatus === false) {
        //     navigate("/login")
        // }
        //let authValue = authStatus === true ? true : false

        // alternate
        // if (authentication && authStatus !== authentication) {
        //     navigate("/login");
        // } else if (!authentication && authStatus !== authentication) {
        //     navigate("/");
        // }

        // If route requires authentication and user is NOT logged in
        if (authentication && authStatus !== authentication) {
            navigate("/login", {
                state: { from: location }, // 👈 SAVE CURRENT PAGE
                replace: true,
            });
        }

        // If route is for non-auth users but user IS logged in
    else if (
      authentication === false &&
      authStatus &&
      !location.pathname=="/login"
    ) {
      navigate("/", { replace: true });
    }


        setLoader(false);
    }, [authStatus, navigate, authentication, location]);

    return loader ? <h1>Loading...</h1> : <>{children}</>;
}
