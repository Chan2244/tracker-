import React, { useContext } from "react";

import { authContext } from "@/lib/store/auth-context";

import { FcGoogle } from "react-icons/fc";

function SingIn() {
    const { googleLogInHandler } = useContext(authContext);

    return (
        <main className="container max-w-2x1 px-1 mx-auto">
            <h1 className="mb-6 text-6x1 font-bold text-center">Welcome</h1>

            <div className="flex flex-col overflow-hidden shadow-md shadow-slate-500 bg-slate-800 rounded 2x1">
                <div className="h-52">
                    <img
                    className="object-cover w-full h-full"
                    src="https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg"
                    />

                    <div className="px-4 py-4">
                        <h3 className="text-2x1 text-center">Please sign in to continue</h3>

                        <button
                        onClick={googleLogInHandler}
                        className="flex self-start gap-2 p-4 mx-auto mt-6 font-medium text-while align-middle bg-gray-700 rounded-1g"
                        >
                            <FcGoogle className="text-2x1" /> Google
                        </button> 
                    </div>
                </div>
            </div>
        </main>
    );
}

export default SingIn;