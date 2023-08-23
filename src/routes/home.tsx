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

                            {/* Form */}
                            <div className="my-2 mx-2 px-3 py-2 rounded-md shadow-md bg-slate-50">
                                {/* Login form */}
                                <form className="block">
                                    {/* Username */}
                                    <div className="w-full">
                                        <div className="my-1 relative rounded-md shadow-md">
                                            <input
                                            type="text"
                                            id="username"
                                            name="username"
                                            className="focus:border-none block w-full border-gray-300 rounded-md border-none px-3 py-2"
                                            placeholder="Username or Email"
                                            />
                                        </div>
                                    </div>
                                    {/* Password */}
                                    <div className="w-full">
                                        <div className="my-1 relative rounded-md shadow-md">
                                            <input
                                            type="password"
                                            id="password"
                                            name="password"
                                            className="focus:border-none block w-full border-gray-300 rounded-md border-none px-3 py-2"
                                            placeholder="Password"
                                            />
                                        </div>
                                    </div>
                                    {/* Login submit button */}
                                    <button type="button" className="uppercase cursor-pointer font-bold rounded-md shadow-lg px-3 py-2 bg-green-600 text-white transition-all hover:bg-green-700 hover:shadow-2xl active:bg-green-200 text-center w-full my-2" >Login</button>
                                </form>
                                {/* Or use google signup button */}
                                <div className="text-sm text-gray-500 my-1 flex flex-row items-center">
                                    <hr className="flex-1" />
                                    <span className="mx-2 inline-block">or</span>
                                    <hr className="flex-1" />
                                </div>
                                {/* Google sign in button */}
                                <div>
                                <div id="g_id_onload"
                                    data-client_id="626851283273-hgd1l8f503r8dqvu5hde5mmhe3iamjbo.apps.googleusercontent.com"
                                    data-context="signin"
                                    data-ux_mode="popup"
                                    data-login_uri="http://localhost:5173/app"
                                    data-nonce=""
                                    data-auto_prompt="false">
                                </div>

                                <div className="g_id_signin"
                                    data-type="standard"
                                    data-shape="rectangular"
                                    data-theme="outline"
                                    data-text="continue_with"
                                    data-size="large"
                                    data-logo_alignment="left">
                                </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </Layout>
    )
};

export default Home;