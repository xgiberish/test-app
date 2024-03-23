import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Dashboard from "@/pages/dashboard";
import Header from '@/pages/components/Header';
import SideMenu from "@/pages/components/SideMenu";

export default function Home() {
    return (
        <>
            <Head>
                <title>Data Dashboard</title>
                <meta name="description" content="Data Dashboard" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <main className={styles.main}>
                <h1>Test</h1>
                <Header />
                <SideMenu />
                <Dashboard />
            </main>
        </>
    )
}