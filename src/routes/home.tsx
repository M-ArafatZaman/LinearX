import React, {useState} from 'react';
import Layout from '../Layout';
import LinearGPT_Showcase from '../assets/lineargpt_showcase.png';
import plotPNG from '../assets/plot.png';

const Home: React.FC = () => {
    const [tab, setTab] = useState<string>("login");

    const setLogin = () => {
        setTab("login");
    };

    const setSignup = () => {
        setTab("signup");
    }
    
    return (
        <Layout>
            <div className="container mx-auto flex-1">
                <div className="grid sm:grid-cols-1 md:grid-cols-2">
                    {/* Image */}
                    <div className="p-3 flex justify-center align-middle">
                        <img src={plotPNG} style={{objectFit: "contain"}} />
                    </div>

                    {/* Login */}
                    <div className="p-3 flex justify-center items-center">
                        <div className="w-3/4">
                            {/* Login and sign up buttons / TABS */}
                            <div className="flex flex-row">
                                {/* Login button */}
                                <a data-tab={tab} className="uppercase cursor-pointer font-bold rounded-md shadow-lg px-3 py-2 data-[tab=login]:bg-blue-400 data-[tab=login]:text-white transition-all data-[tab=login]:hover:bg-blue-500 hover:shadow-2xl data-[tab=login]:active:bg-blue-200 mb-2 text-center text-slate-700 flex-1 mx-1" onClick={setLogin}>Login</a>
                                {/* Sign up button */}
                                <a data-tab={tab} className="uppercase cursor-pointer font-bold rounded-md shadow-lg px-3 py-2 data-[tab=signup]:bg-blue-400 data-[tab=signup]:text-white transition-all data-[tab=signup]:hover:bg-blue-500 hover:shadow-2xl data-[tab=signup]:active:bg-blue-200 mb-2 text-center text-slate-700 flex-1 mx-1" onClick={setSignup}>Sign up</a>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </Layout>
    )
};

export default Home;