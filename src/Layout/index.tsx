import React from 'react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({children}: LayoutProps) => {

    return (
        <div className="flex flex-col">
            <main className="flex-1 p-4">
                {children}
            </main>
        </div>
    )
};

export default Layout;

