import React, {useState, useEffect, useRef} from 'react';
import Layout from '../Layout';
import plotPNG from '../assets/plot.png';
import {useTransition, useSpringRef, animated} from '@react-spring/web';
import LoginForm from './home/LoginForm';

const Home: React.FC = () => {
    const [tab, setTab] = useState<string>("login");

    const setLogin = () => {
        setTab("login");
    };

    const setSignup = () => {
        setTab("signup");
    };

    const transRef = useSpringRef();
    const transitions = useTransition(tab, {
        ref: transRef,
        keys: null,
        from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
        enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
        leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' }, 
    });

    useEffect(() => {
        transRef.start();
    }, [tab]);

    
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

                            {/* Form */}
                            <div className="my-2 mx-2 px-3 py-2 rounded-md shadow-md bg-slate-50">
                                {/* Login form */}
                                {transitions((style, i) => {
                                    return (
                                        <animated.div style={{...style}}>
                                            <LoginForm/>
                                        </animated.div>
                                    )
                                })}
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </Layout>
    )
};

export default Home;