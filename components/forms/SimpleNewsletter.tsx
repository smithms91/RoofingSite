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
import { sendNewsletter } from '@/actions/mailActions';
import { emailSchema } from '@/schemas/mailSchemas';
import { ArrowRight } from 'lucide-react';



export const SimpleNewsletter = () => {
  const [success, setSuccess] = useState(true);
  const form = useForm<z.infer<typeof emailSchema>>({
    resolver: zodResolver(emailSchema),
    defaultValues: {
      email: "",
    }
  });

  const onSubmit = (data: z.infer<typeof emailSchema>) => {
    startTransition(() => {
      form.reset();
      sendNewsletter(data);
      //Logic to make sure message was sent

      setSuccess(true);
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='flex items-center h-full bg-[#07384A] pr-40'>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input type="email" className='bg-[#07384A] focus:outline-none focus:border-none border-0 w-[600px] text-xl text-white placeholder:text-white/65 placeholder:text-sm pl-20' placeholder="Please enter your email address" {...field} />
              </FormControl>
              <FormMessage className='text-xs pl-20' />
            </FormItem>
          )}
        />
        {/* {!success && <p className='text-green-500 mt-4 mb-0'>Message sent!</p>} */}
        <Button className='bg-[#07384A] text-4xl'><ArrowRight /></Button>
      </form>
    </Form>
  );
};

