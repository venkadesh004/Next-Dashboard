import React from "react";
import Login from "@/components/Login";
import { useSession } from "next-auth/react";
import Box from "@mui/material/Box";

const SignIn = () => {

    const {data: session} = useSession();

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center"
            }}
        >
            <h1>{session ? "Thank you for logging in" : "Please log in"}</h1>
            <Login />
        </Box>
    );
}

export default SignIn;