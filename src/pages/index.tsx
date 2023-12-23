import { useSession } from "next-auth/react"
// import Header from "../components/Header"
import Dashboard from "./dashboard/index"
import Login from "@/components/Login"
import React from "react"

const Home: React.FC = () => {
  const { data: session } = useSession();

  return (
    <>
      <main className={`px-[24px] max-w-[85rem] m-auto`}>
        {session && <Dashboard />}
        {!session && <Login />}
      </main>
    </>
  )
}

export default Home;