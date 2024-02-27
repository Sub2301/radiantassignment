import React from 'react';

function SignUp() {
  return (
    <div className='w-full max-w-[1024px] sm:mx-auto sm:flex sm:justify-between sm:items-center sm:py-4 md:py-4  lg:py-4'>
      <div className='sm:w-[398px] md:w-[450px] lg:w-[500px]'>
        <p className='text-[32px] text-[#5C6874] sm:text-2xl md:text-3xl lg:text-4xl'>
          Sign up and get exclusive special deals
        </p>
      </div>
      <div className='flex items-center mt-4 sm:mt-0'>
        <input
          type='search'
          className='h-[52px] sm:w-[300px] md:w-[350px] lg:w-[400px] px-4 rounded-l-lg focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-2'
        />
        <button className='h-[52px] sm:h-[48px] md:h-[52px] lg:h-[56px] w-[97px] sm:w-[120px] md:w-[140px] lg:w-[160px] bg-[#1B88F4] rounded-r-lg text-[#FFFFFF]'>
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default SignUp;
