import image from '../assets/bgtwo.jpg'
import {Link} from 'react-router-dom'

const input = [
  {
    label: 'Email',
    inputType: 'email',
    placeholder: 'vistadream@gmail.com',
  },
  {
    label: 'Password',
    inputType: 'password',
    placeholder: 'Password',
  },
]

const LoginPage = () => {
  return (
    <section
      id="loginpage"
      className="h-screen relative flex left-0 top-0 items-center">

      <img src={image}
        className='hidden md:flex object-cover w-full h-full relative inset-0'
      />

      <div className='absolute flex flex-col h-full right-0 px-15 py-10 bg-white items-center justify-center leading-5'>
        <div className='flex flex-col gap-3.5 mb-8 items-center'>
          <span className='font-orbitron font-extrabold text-[1.3rem] tracking-normal uppercase'>Log Your Account</span>
          <span className='font-mono font-bold text- text-[0.6rem] tracking-widest'>Build Your Dream With US</span>
        </div>

        <div className='flex flex-col gap-5 w-full mb-10'>
          {input.map((items, index) => (
            <div
              key={index}
              className='gap-5'>
              <span className='flex font-mono mb-2 text-[0.95rem] px-1'>{items.label}</span>
              <input
                type={items.inputType}
                placeholder={items.placeholder}
                className='grid text-[0.9rem] font-sans px-2 py-2 border rounded-md w-80' />
            </div>
          ))}
        </div>

        <p className='px-8 py-2.5 rounded-xl bg-blue-700 text-[0.9rem] font-mono tracking-wide text-(--text) cursor-pointer hover:px-9 mb-8'>
          Submit
        </p>

        <span className='flex gap-2 font-dm-sans text-[0.9rem]'>
          Don't Have an Account
          <Link to='/register' className='text-blue-500 underline'>Register</Link>
        </span>

        <div className='flex'>

        </div>

      </div>

    </section>
  )
}

export default LoginPage
