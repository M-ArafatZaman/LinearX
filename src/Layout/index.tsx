import React from 'react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({children}: LayoutProps) => {

    return (
        <div className="flex flex-col h-screen">
            <Header/>
            <main className="flex-1 p-4">
                {children}
            </main>
            <Footer/>
        </div>
    )
};

export default Layout;

