import React from 'react';
import Layout from '../Layout';

const Home: React.FC = () => {
    return (
        <Layout>
            <div className="container mx-auto">
                <div className="grid sm:grid-cols-1 md:grid-cols-2">
                    <div>Test1</div>
                    <div>Test2</div>
                </div>
            </div>
        </Layout>
    )
};

export default Home;