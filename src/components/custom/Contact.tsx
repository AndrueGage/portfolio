'use client';

import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { sendEmail } from '@/lib/send-email';

export type FormData = {
  name: string;
  email: string;
  message: string;
};

const Contact: FC = () => {
  const { register, handleSubmit } = useForm<FormData>();

  function onSubmit(data: FormData) {
    sendEmail(data);
  }

  return (
    <div>
      <h1 className="text-4xl lg:text-6xl mb-4 mt-8 font-extrabold" id='contact'>Contact</h1>
    
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='mb-5'>
        <label
          htmlFor='name'
          className='mb-3 block text-lg font-medium'
        >
          Full Name
        </label>
        <input
          type='text'
          placeholder='Full Name'
          className='w-80 rounded-md border border-gray-300 bg-white py-3 px-6 text-lg font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md'
          {...register('name', { required: true })}
        />
      </div>
      <div className='mb-5'>
        <label
          htmlFor='email'
          className='mb-3 block text-base font-medium'
        >
          Email Address
        </label>
        <input
          type='email'
          placeholder='example@domain.com'
          className='w-80 rounded-md border border-gray-300 bg-white py-3 px-6 text-lg font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md'
          {...register('email', { required: true })}
        />
      </div>
      <div className='mb-5'>
        <label
          htmlFor='message'
          className='mb-3 block text-lg font-medium'
        >
          Message
        </label>
        <textarea
          rows={4}
          placeholder='Type your message'
          className='w-80 resize-none rounded-md border border-gray-300 bg-white py-3 px-6 text-lg font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md'
          {...register('message', { required: true })}
        ></textarea>
      </div>
      <div>
        <button className='hover:shadow-form rounded-md bg-gradient py-3 px-8 text-lg font-semibold text-white outline-none'>
          Submit
        </button>
      </div>
    </form>
    </div>
  );
};

export default Contact;