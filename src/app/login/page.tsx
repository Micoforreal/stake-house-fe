import React from 'react';

const icon = [
    {logo:"",action:"Sign in with Google"},  
  ]




const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-full max-w-md px-6 py-10">
        <h1 className="text-center text-2xl font-semibold mb-30">Welcome to Stake House</h1>

        <div className="flex item-center justify-around mb-15 rounded-full bg-[#0009575E]
">
          <button className="px-10 py-2 rounded-full bg-[#000957] text-white font-medium mr-12">Login</button>
          <button className="px-6 py-2 rounded-full text-white font-medium">Register</button>
        </div>

        <form className="space-y-6">
          <div>
            <label className="block mb-1 text-sm">Username/Email</label>
            <input
              type="text"
              placeholder="Enter your email or username"
              className="w-full px-4 py-2 border rounded-full text-sm outline-none focus:ring focus:ring-blue-300"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm">Password</label>
            <div className="relative">
              <input
                type="password"
                placeholder="Enter your Password"
                className="w-full px-4 py-2 border rounded-full text-sm outline-none focus:ring focus:ring-blue-300"
              />
            </div>
          </div>

          <div className="flex justify-between items-center text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="text-black" />
              Remember me
            </label>
            <a href="#" className="text-black">Forgot Password?</a>
          </div>

          <button type="submit" className="w-50 mx-auto flex item-center justify-center bg-[#000957] text-white py-2 rounded-full mb-15">
            Login
          </button>
        </form>

        <div className="text-center my-6 text-sm text-gray-500">or continue with</div>

        <div className="flex justify-center gap-4">
          <button className="bg-[#577BC1] border px-4 py-2 rounded-[10px] text-sm text-white flex items-center gap-2">
            <img src="" alt="Google" className="w-4 h-4" />
            Sign in with Google
          </button>
          <button className="bg-[#000957] text-white px-4 py-2 rounded-[10px] text-sm">
            Wallet Connect
          </button>
        </div>
      </div>
    </div>
  );
};

// i could not add the password icon and google icon, i tried looking through the earn corrections you did but i couldn't figure it out.
export default Login;
