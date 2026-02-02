import { FaFacebook, FaGoogle } from 'react-icons/fa'

interface LoginProps {
    onSignup: () => void;
}

const Login = ({ onSignup }: LoginProps) => {
    return (
        <>
            <div className='flex flex-col  gap-6 p-10'>
                <div>
                    <h1 className='text-2xl font-semibold'>Login</h1>
                    <p className='font-mono'>Login to your account!</p>
                </div>
                <div className=''>
                    <form className="space-y-4" action="">
                        <div className='flex flex-col gap-2'>
                            <label htmlFor="email" className="font-light">Email Address</label>
                            <input id="email" type="email" placeholder="Enter email Address" className="border border-gray-300 rounded-md p-2 w-full" />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label htmlFor="password" className="font-light">Password</label>
                            <input id="password" type="password" placeholder="Enter password" className="border  border-gray-300 rounded-md p-2 w-full" />
                        </div>
                        <div className='flex justify-between'>
                            <div className='flex '>
                                <input type="checkbox" id="remember" className="mr-2" />
                                <label htmlFor="remember" className="">Remember me</label>
                            </div>
                            <a href="#" className="ml-4 text-blue-500">Forgot Password?</a>
                        </div>
                        <div>
                            <button className="bg-blue-500 text-white px-4 py-2 rounded-md w-full cursor-pointer hover:bg-blue-600 transition duration-600">Login</button>
                        </div>


                    </form>
                    {/* sign up link */}
                    <p className="mt-4 text-center">
                        Don't have an account?{" "}
                        <button
                            type="button"
                            onClick={onSignup} // ✅ now works
                            className="text-blue-500 cursor-pointer"
                        >
                            Sign Up
                        </button>
                    </p>
                    <div className="flex items-center gap-4 my-4">
                        <div className="flex-1 h-px bg-gray-300"></div>
                        <span className="text-sm text-gray-500 whitespace-nowrap">
                            or
                        </span>
                        <div className="flex-1 h-px bg-gray-300"></div>
                    </div>
                    {/* social login buttons */}
                    <div className="flex flex-col lg:flex-row gap-4">
                        <button className="border border-gray-300 cursor-pointer rounded-md px-4 py-2 w-full flex items-center justify-center gap-2 hover:bg-gray-100 transition duration-600">
                            <FaGoogle />
                            Google
                        </button>
                        <button className="border border-gray-300 cursor-pointer rounded-md px-4 py-2 w-full flex items-center justify-center gap-2 hover:bg-gray-100 transition duration-600">
                            <FaFacebook />
                            Facebook
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login