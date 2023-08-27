import React, {useState, forwardRef} from 'react';

const SignupForm = forwardRef<HTMLDivElement>((props, ref: React.ForwardedRef<HTMLDivElement>) => {

    return (
        <div className="absolute w-full" ref={ref}>
            Signup form
        </div>
    )
});

export default SignupForm;