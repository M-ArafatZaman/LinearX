import React from 'react';
import Logo from '../assets/linearx-logo.svg';

const Header: React.FC = () => {

    return (
        <header className="p-6 bg-slate-200 text-gray-800">
            <div className="flex flex-row w-full items-center relative">
                <img src={Logo} style={{
                    maxHeight: "50px",
                    objectFit: "contain"
                }} />
                <h1 className="text-2xl font-bold ml-2">LinearX</h1>
            </div>
        </header>
    )
};

export default Header;