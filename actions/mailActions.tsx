"use server";

import { emailSchema, formOneSchema, formTwoSchema } from "@/schemas/mailSchemas";
import * as z from "zod";
// import { NextApiRequest, NextApiResponse } from "next";
import { Resend } from 'resend';
import { EmailTemplate } from "@/components/EmailTemplate/TemplateOne";
import React from "react";
import { sendEmail } from "@/lib/mail";

const resend = new Resend(process.env.RESEND_KEY);

export async function testEmail(data: z.infer<typeof formOneSchema>) {
  console.log(data);
}

export async function sendNewsletter(data: z.infer<typeof emailSchema>) {
  console.log(data);
}

export async function sendQuote(quote: z.infer<typeof formTwoSchema>) {
  try {
    const data = await sendEmail(quote.name, quote.email, quote.phone, quote.address)
    return data
  } catch (error) {
    console.log(error)
    return error
  }
}