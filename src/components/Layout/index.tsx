import React, { ReactNode } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { useRouter } from "next/router";

interface LayoutProps {
    children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    const router = useRouter();
    const route = router.pathname;

    console.log(route);

    return (
        <>
            {route !== "/" && <Navbar />}
            <main>{children}</main>
            <Footer />
        </>
    );
};

export default Layout;
