import * as z from "zod"

export const formOneSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters long"
  }).max(50),
  email: z.string().email(),
  message: z.string().min(3, {
    message: "Message must be at least 3 characters long"
  }).max(500)
})

export const formTwoSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters long"
  }).max(50),
  email: z.string().email(),
  phone: z.string().min(10),
  address: z.string().min(5, {
    message: "Must enter a valid address"
  }).max(500)
})

export const emailSchema = z.object({
  email: z.string().email(),
})