'use client'

import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { createClient, ClientConfig } from '@sanity/client';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Configuration du client Sanity
const clientConfig: ClientConfig = {
  projectId: 'shoskdel',
  dataset: 'production',
  apiVersion: '2022-03-14',
  useCdn: false, // Facultatif, à utiliser pour des données en temps réel
  token: 'skqu86fHzRu7pfoOCg9muAC8Qv9CNneWVTlcGB12kvvD52frhRiz5O0sq9vHYgXH4Zq1FjUoVhYdhqUm0yXg7MckSoDL5PSPNufJTvCJ2ecwSG7PbnaCHjvcNUJokLZiNKBmZBFrrd1urGcfgEwdUM1Cfx3UpXwod9nG5dbQhhz8HxLinnOR', // nécessaire dataset privé
  // token: process.env.SANITY_TOKEN, // Vous pouvez également utiliser des variables d'environnement
};

// Initialisation du client Sanity
const client = createClient(clientConfig);


type Inputs = {
  name: string;
  email: string,
  subject: string;
  message: string;
};

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const { name, email, subject, message } = data;
    try {
      await client.create({
        _type: 'contactMessage',
        name: name,
        email: email,
        subject: subject,
        message: message,
      });
      toast.success('Message envoyé avec succès');
    } catch (error) {
      toast.error('Erreur lors de l\'envoi du message');
    }
  };

  return (
    <section className='max-w-7x1 mx-auto pt-[150px] py-0 pb-[150px] px-0 flex flex-col items-center justify-center space-y-16 '>
      <h2 className='text-2xl uppercase tracking-[20px] text-black-500 mb-[20px]'>contact me</h2>
      <form onSubmit={handleSubmit(onSubmit)} action="" className='w-full md:w-[30%] flex flex-col justify-center items-center space-y-3 px-[10px]'>
        <input {...register("name", { required: true })} type="text" placeholder='Your name' className='w-full placeholder-[#6bebc6] border border-[#6bebc6] focus:outline-none p-2 bg-transparent rounded-lg'/>
        {errors.name && <span className='text-red-500 text-sm'>This field is required</span>}
        <input {...register("email", { required: true })} type="email" placeholder='Your mail address' className='w-full placeholder-[#6bebc6] border border-[#6bebc6] focus:outline-none p-2 bg-transparent rounded-lg'/>
        {errors.email && <span className='text-red-500 text-sm'>This field is required</span>}
        <input {...register("subject", { required: true })} type="text" placeholder='Subject' className='w-full placeholder-[#6bebc6] border border-[#6bebc6] focus:outline-none p-2 bg-transparent rounded-lg'/>
        {errors.subject && <span className='text-red-500 text-sm'>This field is required</span>}
        <textarea {...register("message", { required: true })} rows={8} placeholder='Your message' className='w-full placeholder-[#6bebc6] border border-[#6bebc6] focus:outline-none p-2 bg-transparent rounded-lg'/>
        {errors.message && <span className='text-red-500 text-sm'>This field is required</span>}
        <button type='submit' className='w-full p-3 rounded-lg font-bold text-white bg-gradient-to-r from-[#6bebc6] to-[#44af8f] hover:opacity-90'>Submit</button>
        <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" transition={Bounce} />
      </form>
    </section>
  );
};

export default Contact;
