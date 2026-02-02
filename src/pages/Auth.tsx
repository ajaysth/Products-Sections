import { useState } from 'react';
import bgImage from '../assets/bgimg.jpg';
import Login from '../components/auth/Login';
import Signup from '../components/auth/Signup';



const Auth = () => {
    const [isSignup, setIsSignup] = useState(false);

    return (
        <>
            <div className="min-h-screen w-full flex items-center justify-center">

                <div className='wrapper grid lg:grid-cols-2 rounded-2xl w-full max-w-4xl min-h-130 shadow-2xl overflow-hidden bg-gray-100'>
                    {/* left section */}
                    <div className="relative overflow-hidden">
                        <div
                            className={`absolute inset-0 transition-all duration-500 ease-in-out
              ${isSignup ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"}`}
                        >
                            <Signup onLogin={() => setIsSignup(false)} />
                        </div>

                        <div
                            className={`absolute inset-0 transition-all duration-500 ease-in-out
              ${isSignup ? "translate-x-full opacity-0" : "translate-x-0 opacity-100"}`}
                        >
                            <Login onSignup={() => setIsSignup(true)} />
                        </div>
                    </div>

                    {/* right section */}
                    <div className='hidden lg:block'>

                        <img src={bgImage} alt="Background" className='w-full h-full object-cover' />


                    </div>
                </div>
            </div>
        </>
    )
}

export default Auth