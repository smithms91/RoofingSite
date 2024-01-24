'use client';

import { sendQuote } from '@/actions/mailActions';
import { formTwoSchema } from '@/schemas/mailSchemas';
import { zodResolver } from '@hookform/resolvers/zod';
import React, { startTransition, useState } from 'react'
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Form, FormControl, FormField, FormItem, FormMessage } from '../ui/form';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { CircleUserRound, Mail, Phone, MapPin, Lock } from 'lucide-react';

type Props = {}

const QuoteForm = (props: Props) => {
  const [success, setSuccess] = useState(true);
  const form = useForm<z.infer<typeof formTwoSchema>>({
    resolver: zodResolver(formTwoSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      address: "",
    }
  });

  const onSubmit = (data: z.infer<typeof formTwoSchema>) => {
    startTransition(() => {
      form.reset();
      sendQuote(data);
      //Logic to make sure message was sent

      setSuccess(true);
    });
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='p-6 md:p-10 bg-[#F5f5f5] shadow-2xl basis-2/4 max-w-[420px]'>
        <h1 className='font-bold text-xl uppercase mb-[-1rem]'>Get your FREE Estimate NOW!</h1>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className='relative'>
                  <CircleUserRound size="20" className='absolute top-[25%] left-2' />
                  <Input type="text" className='mt-8 border-2 border-[#3B82F6]/50 p-2 bg-[#f5f5f5] placeholder-black/75 pl-10' placeholder="Your Name" {...field} />
                </div>
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
                <div className='relative'>
                  <Mail size="20" className='absolute top-[25%] left-2' />
                  <Input type="email" className='mt-6 border-2 border-[#3B82F6]/50 p-2 bg-[#f5f5f5] placeholder-black/75 pl-10' placeholder="Your Email" {...field} />
                </div>
              </FormControl>
              <FormMessage className='text-xs' />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className='relative'>
                  <Phone size="20" className='absolute top-[25%] left-2' />
                  <Input type="text" className='mt-6 border-2 border-[#3B82F6]/50 p-2 bg-[#f5f5f5] placeholder-black/75 pl-10' placeholder="Your Phone #" {...field} />
                </div>
              </FormControl>
              <FormMessage className='text-xs' />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className='relative'>
                  <MapPin size="20" className='absolute top-[25%] left-2' />
                  <Input type="text" className='mt-6 border-2 border-[#3B82F6]/50 p-2 bg-[#f5f5f5] placeholder-black/75 pl-10' placeholder="Your Address" {...field} />
                </div>
              </FormControl>
              <FormMessage className='text-xs' />
            </FormItem>
          )}
        />
        {!success && <p className='text-green-500 mt-4 mb-0'>Message sent!</p>}
        <Button className='mt-6 w-full bg-[#3B82F6] p-2 text-white shadow-lg'>Get My Estimate</Button>
        <p className='text-xs mt-4 text-center'>🔒You&apos;re safe with us - your information is sent securely and we never share your information. We value our customers privacy!</p>
      </form>
    </Form>
  )
}

export default QuoteForm