"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { contactFormSchema } from "../schemas/contact-form"; 
import { useState } from "react";
import styles from '../styles/styles.module.scss';

import { Button } from "../components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../components/ui/form";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import ContactSocialMedia from "../components/ContactSocialMedia";

const sendForm = async (values) => {
  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(values)
});
const data = await response.json();
return data;
}

const ContactForm=()=> {
  const [successMessage, setSuccessMessage] = useState('');
  const form = useForm({
  resolver: zodResolver(contactFormSchema),
  defaultValues: {
    username: '', 
    email: '',    
    text: '',     
  },
});

  const onSubmit = async (data) => {
    try{
      const result = await sendForm(data);
      console.log('Se envió el mensaje', result);
      setSuccessMessage('Gracias por contactarnos, te responderemos pronto 🐾')
      form.reset(); 
    }catch(error)
    {
      console.error('Ocurrió un error al enviar tu mensaje', error);
    }
  };

  return (
    <>
    <div className="flex flex-col lg:flex-row min-h-screen h-full">
    <div className="flex flex-col justify-center items-center flex-1 bg-orange-50">
      <h1 className="text-6xl py-10 text-center text-primary-red-light font-bebas font-extrabold ">
        ¿Necesitas ayuda? 
      </h1>
      <h2 className="font-bebas text-xl text-center px-10 text-orange-light">Podemos responder tus dudas sobre algún producto o consultas de atención al cliente, escríbenos!</h2>
      

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col items-center justify-center space-y-8 pt-20 pb-10 "
        >
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Nombres"
                    {...field}
                    className="border-primary-red-light border-2"
                  />
                </FormControl>
                <FormMessage>
                  {form.formState.errors.username?.message}
                </FormMessage>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Correo electrónico"
                    {...field}
                    className="border-primary-red-light border-2"
                  />
                </FormControl>
                <FormMessage>
                  {form.formState.errors.email?.message}
                </FormMessage>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="text"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    placeholder="Tu mensaje"
                    {...field}
                    className="border-primary-red-light border-2 bg-orange-50"
                  />
                </FormControl>
                <FormMessage>
                  {form.formState.errors.text?.message}
                </FormMessage>
              </FormItem>
            )}
          />
          <Button className="font-bebas" type="submit">Contactar</Button>
        </form>
      {successMessage && (
        <p className="text-blue-500 text-center font-bold text-2xl font-bebas pb-10">{successMessage }</p> 
      )}
      </Form>
      </div>
      <div className={`flex-1 bg-cover bg-center min-h-96 ${styles.bgContact}`}>
  <div className={`mx-auto flex h-full text-center justify-center items-center flex-col ${styles.content}`}>
    <p className="text-5xl font-pacifico text-grey-light py-10">
      Síguenos en nuestras redes sociales
    </p>
    <ContactSocialMedia />
  </div>
</div>
</div>
    </>
  );
}

export default ContactForm;
