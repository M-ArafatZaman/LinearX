import React from 'react';
import Layout from '../Layout';
import LinearGPT_Showcase from '../assets/lineargpt_showcase.png';
import plotPNG from '../assets/plot.png';

const Home: React.FC = () => {
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
                                <a className="uppercase cursor-pointer font-bold rounded-md shadow-lg px-3 py-2 bg-blue-400 text-white transition-all hover:bg-blue-500 hover:shadow-2xl active:bg-blue-200 mb-2 text-center flex-1 mr-1">Login</a>
                                <a className="uppercase cursor-pointer font-bold rounded-md shadow-lg px-3 py-2 bg-blue-400 text-white transition-all hover:bg-blue-500 hover:shadow-2xl active:bg-blue-200 mb-2 text-center flex-1 ml-1">SIGN UP</a>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </Layout>
    )
};

export default Home;