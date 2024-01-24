'use client';

import React, { startTransition, useState } from 'react';
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from '../ui/textarea';
import { testEmail } from '@/actions/mailActions';
import { formOneSchema } from '@/schemas/mailSchemas';



export const FormOne = () => {
  const [success, setSuccess] = useState(true);
  const form = useForm<z.infer<typeof formOneSchema>>({
    resolver: zodResolver(formOneSchema),
    defaultValues: {
      name: "",
      email: "",
      message: ""
    }
  });

  const onSubmit = (data: z.infer<typeof formOneSchema>) => {
    startTransition(() => {
      form.reset();
      testEmail(data);
      //Logic to make sure message was sent

      setSuccess(true);
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='md:w-[50%] lg:max-w-[40%] md:mb-[-6rem] lg:mb-0 md:ml-10 mt-10 lg:mt-0 p-10 bg-[#F5f5f5] shadow-2xl'>
        <h1 className='font-bold text-xl uppercase mb-[-1rem]'>Say Something</h1>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input type="text" className='mt-8 border-2 border-[#f93946]/50 p-2 bg-[#f5f5f5] placeholder-black/75' placeholder="Your Name" {...field} />
              </FormControl>
              <FormMessage className='text-xs' />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input type="email" className='mt-6 border-2 border-[#f93946]/50 p-2 bg-[#f5f5f5] placeholder-black/75' placeholder="Your Email" {...field} />
              </FormControl>
              <FormMessage className='text-xs' />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea className='mt-6 border-2 border-[#f93946]/50 p-2 bg-[#f5f5f5] placeholder-black/75' placeholder="Your message" {...field} />
              </FormControl>
              <FormMessage className='text-xs' />
            </FormItem>
          )}
        />
        {!success && <p className='text-green-500 mt-4 mb-0'>Message sent!</p>}
        <Button className='mt-6 w-full bg-[#f93946] p-2 text-white shadow-lg'>Send</Button>
      </form>
    </Form>
  );
};

