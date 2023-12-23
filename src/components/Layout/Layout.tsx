import { useSession } from 'next-auth/react';
import React from 'react';
import SideMenu from '../SideMenu';
import Head from 'next/head';
import Footer from '../Footer';

const Layout = (props: any) => {

    const { data: session } = useSession();

    return (
        <>
            <Head>
                <title>DataSoft - Data Dashboard</title>
                <meta name="description" content="Data Dashboard" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main 
                className={`max-w-[85rem] m-auto 2xl:max-w-[92rem]`}
                style={{padding: session ? "0 24px 0 80px" : "0px"}}
            >
                {session && <SideMenu />}
                {props.children}
                <Footer />
            </main>
        </>
    );
};

export default Layout;