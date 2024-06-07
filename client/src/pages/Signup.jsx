import { Button, Label, TextInput } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Signup() {
    return (
        <div className='min-h-screen mt-20'>
            <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5'>
                {/*left */}
                <div className='flex-1'>
                    <Link to="/" className='font-bold md:ml-2  text-4xl  dark:text-white ' >
                        <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-stone-700 to-pink-500 text-white rounded-lg' >Lexicon</span>
                        Blogs
                    </Link>
                    <p className='text-sm mt-5 md:ml-2'>This is a demo prject. You can sign up with rour email and password
                        or with google
                    </p>
                </div>
                {/*right-------- */}
                <div className='flex-1'>
                    <form className='flex flex-col gap-4'>
                        <div>
                            <Label value='Your username' />
                            <TextInput type='text' placeholder='Username' id='username' />
                        </div>
                        <div>
                            <Label value='Email' />
                            <TextInput type='text' placeholder='name@company.com' id='email' />
                        </div>
                        <div>
                            <Label value='Password' />
                            <TextInput type='text' placeholder='Password' id='password' />
                        </div>
                        <Button gradientDuoTone="purpleToPink" type='submit'>
                            Sign up
                        </Button>
                    </form>
                    <div className='flex gap-2 rext-sm mt-5'>
                        <span>Have an account?</span>
                        <Link to="/" className='text-blue-500 font-bold'>
                            Sign In
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
