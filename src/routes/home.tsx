import React from 'react';
import Layout from '../Layout';
import LinearGPT_Showcase from '../assets/lineargpt_showcase.png'; 

const Home: React.FC = () => {
    return (
        <Layout>
            <div className="container mx-auto flex-1">
                <div className="grid sm:grid-cols-1 md:grid-cols-2">
                    {/* Image */}
                    <div className="p-3 flex justify-center align-middle">
                        <img src={LinearGPT_Showcase} style={{objectFit: "contain", width: "75%"}} />
                    </div>

                    {/* Login */}
                    <div>Test2</div>
                </div>
            </div>
        </Layout>
    )
};

export default Home;