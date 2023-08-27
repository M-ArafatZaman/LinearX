import React, {useEffect, forwardRef} from 'react';

const LoginForm = forwardRef<HTMLDivElement>((props, ref: React.ForwardedRef<HTMLDivElement>) => {

    // Load google sign in button
    useEffect(() => {
        const googleSignInButton = document.getElementById("google-sign-in-button");
        // @ts-ignore
        if (googleSignInButton !== null && typeof google !== "undefined") {
            // @ts-ignore
            google.accounts.id.initialize({
                client_id: "626851283273-hgd1l8f503r8dqvu5hde5mmhe3iamjbo.apps.googleusercontent.com",
                callback: (resp: any) => {console.log(resp)}
            });
            // @ts-ignore
            google.accounts.id.renderButton(
                googleSignInButton,
                {
                    theme: "outline",
                    size: "large",
                    text: "continue_with",
                    type: "standard",
                    width: "400",
                    logo_alignment: "center"
                }
            );
        }

    }, []);
    

    return (
        <div className="absolute w-full" ref={ref}>
            <form className="block" id="login-form">
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
                <div id="google-sign-in-button"></div>
            </div>
        </div>
    )
});

export default LoginForm;