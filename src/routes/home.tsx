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
                    <div className="p-3 flex justify-center align-middle">
                        Login/Register
                    </div>
                </div>
            </div>
        </Layout>
    )
};

export default Home;