import { FaFacebook, FaGoogle } from "react-icons/fa";

interface SignupProps {
    onLogin: () => void;
}


const Signup = ({ onLogin }: SignupProps) => {
    return (
        <div className="flex flex-col gap-6 p-10">
            <div>
                <h1 className="text-2xl font-semibold">Sign Up</h1>
                <p className="font-mono">Create your account!</p>
            </div>

            <form className="space-y-4">
                <input className="border p-2 rounded-md w-full" placeholder="Name" />
                <input className="border p-2 rounded-md w-full" placeholder="Email" />
                <input className="border p-2 rounded-md w-full" placeholder="Password" />
                <button className="bg-blue-500 text-white py-2 rounded-md w-full">
                    Sign Up
                </button>
            </form>

            <p className="mt-4 text-center">
                Don't have an account?{" "}
                <button
                    type="button"
                    onClick={onLogin}
                    className="text-blue-500 cursor-pointer"
                >
                    Login
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
    );
};

export default Signup;
