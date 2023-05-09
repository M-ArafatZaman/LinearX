import React from 'react';

interface BorderProps {
    children: React.ReactNode | undefined;
}

const VectorBorder: React.FC<BorderProps> = ({children}: BorderProps) => {

    return (
        <>
        <div className="self-stretch border-l-2 border-t-2 border-b-2 border-gray-500 my-3" style={{width: 5}} />
        <div className="px-4 flex flex-col">
            {children}
        </div>
        <div className="self-stretch border-r-2 border-t-2 border-b-2 border-gray-500 my-3" style={{width: 5}} />
        </>
        
    )
};

export default VectorBorder;
