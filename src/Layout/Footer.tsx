import React from 'react';

const Footer: React.FC = () => {
    const date = new Date();

    return (
        <footer className="p-8 bg-slate-900 text-white">
            <div className="container mx-auto text-center">
                <div>
                    <h4 className="font-bold">Mohammad Arafat Zaman</h4>
                    &copy;
                    <span className="ml-1">
                        {date.getFullYear().toString()}
                    </span>
                </div>
                    
            </div>
        </footer>
    )
};

export default Footer;