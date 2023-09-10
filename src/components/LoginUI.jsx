"use client"
import React, { useState } from 'react'
const LoginUI = ({ handleLogin }) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    console.log(username, password)
    return (
        <div className='flex flex-col self-center gap-4 min-w-[300px]'>
            <h3 className='text-2xl font-bold mb-10 text-center'> Login to SocialDoze </h3>
            <input onChange={(e) => setUsername(e.target.value)} className='px-3 py-2 rounded-md text-black placeholder:text-black' type="text" placeholder='username' />
            <input onChange={(e) => setPassword(e.target.value)} className='px-3 py-2 rounded-md text-black placeholder:text-black' type="password" placeholder='password' />
            <button className='w-full bg-white text-black rounded-md p-2 mt-6' onClick={() => handleLogin(username, password)}>
                Login
            </button>
        </div>
    )
}

export default LoginUI