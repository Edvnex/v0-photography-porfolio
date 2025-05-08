"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormState({ name: "", email: "", message: "" })
  }

  return (
    <div className="max-w-2xl mx-auto py-12">
      <h1 className="text-4xl font-light tracking-tight mb-8">Contact</h1>

      {isSubmitted ? (
        <div className="bg-gray-50 p-8 text-center rounded-lg">
          <h2 className="text-2xl font-light mb-4">Thank you for your message</h2>
          <p className="text-gray-600 mb-6">I'll get back to you as soon as possible.</p>
          <Button onClick={() => setIsSubmitted(false)}>Send another message</Button>
        </div>
      ) : (
        <>
          <p className="text-lg text-gray-700 mb-8">
            I'd love to hear from you. Whether you're interested in working together or just want to say hello, feel
            free to reach out using the form below.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <Input id="name" name="name" value={formState.name} onChange={handleChange} required className="w-full" />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formState.email}
                onChange={handleChange}
                required
                className="w-full"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                value={formState.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full"
              />
            </div>

            <Button type="submit" disabled={isSubmitting} className="w-full sm:w-auto">
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </>
      )}
    </div>
  )
}
