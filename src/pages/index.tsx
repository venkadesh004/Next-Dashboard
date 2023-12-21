import { useSession } from "next-auth/react"
// import Header from "../components/Header"
import SideMenu from "../components/SideMenu"
import Dashboard from "./dashboard/index"
import Login from "@/components/Login"
import Head from 'next/head';
import React from "react"

const Home: React.FC = () => {
  const { data: session } = useSession();

  return (
    <>
      <Head>
        <title>Data Dashboard</title>
        <meta name="description" content="Data Dashboard" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`px-[24px] max-w-[85rem] m-auto`}>
        {
          session && (
            <>
              <SideMenu />
              <Dashboard />
            </>
          )
        }
        <Login />
      </main>
    </>
  )
}

export default Home;