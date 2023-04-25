import { useState } from 'react';

function App() {

    return (
        <div className="flex flex-col h-screen">
            <header className="bg-blue-500 text-white p-8">
                <h1 className="text-2xl font-bold">Header</h1>
            </header>
            <main className="flex-1 p-4">
                <div className="container mx-auto">
                    Test
                </div>
                <h2 className="text-lg font-bold">Content goes here</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.</p>
            </main>
            <footer className="bg-blue-500 text-white p-4">
                <h3 className="text-xl font-bold">Footer</h3>
            </footer>
        </div>
    );
};



export default App;
