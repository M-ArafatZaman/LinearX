import React from 'react';
import Logo from '../assets/linearx-logo.svg';

const Header: React.FC = () => {

    return (
        <header className="p-6 bg-slate-200 text-gray-800">
            <div className="container mx-auto">
                <div className="flex flex-row w-full items-center relative">
                    <img src={Logo} style={{
                        maxHeight: "50px",
                        objectFit: "contain"
                    }} />
                    <h1 className="text-2xl font-bold ml-2">LinearX</h1>

                    <a className="button ml-auto cursor-pointer uppercase font-bold rounded-md shadow-lg px-3 py-2 bg-slate-700 text-white transition-all hover:bg-slate-500 hover:shadow-2xl active:bg-slate-400" href="https://github.com/M-ArafatZaman/LinearX" target="_blank"><i className="fa-brands fa-github mr-1"></i> Github</a>
                </div>
            </div>
        </header>
    )
};

export default Header;