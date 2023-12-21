import Button from "@mui/material/Button";
import { useSession, signIn, signOut } from "next-auth/react";

const Login = () => {
    const {data: session} = useSession();
    const userProfileImg = session?.user?.image as string;

    if (session) {
        return <>
            <Button variant='contained' color='error' onClick={() => signOut()}>Sign Out</Button>
        </>
    }

    return <>
        <h2>Please Log in</h2><br />
        <Button variant='contained' color='success' onClick={() => signIn()}>Sign In</Button>
    </>
}

export default Login;