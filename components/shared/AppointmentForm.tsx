'use client'

import { useState } from 'react'
import { serviceCategories } from '@/lib/services'

type FormData = {
  firstName: string
  lastName: string
  phone: string
  email: string
  service: string
  isNewPatient: string
  preferredDate: string
  message: string
}

const initialForm: FormData = {
  firstName: '',
  lastName: '',
  phone: '',
  email: '',
  service: '',
  isNewPatient: 'yes',
  preferredDate: '',
  message: '',
}

export default function AppointmentForm({ className = '' }: { className?: string }) {
  const [form, setForm] = useState<FormData>(initialForm)
  const [errors, setErrors] = useState<Partial<FormData>>({})
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {}
    if (!form.firstName.trim()) newErrors.firstName = 'First name is required'
    if (!form.lastName.trim()) newErrors.lastName = 'Last name is required'
    if (!form.phone.trim()) newErrors.phone = 'Phone number is required'
    if (!form.email.trim()) newErrors.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = 'Please enter a valid email'
    if (!form.service) newErrors.service = 'Please select a service'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setLoading(true)
    // TODO: wire up to real backend — options:
    // 1. POST to /api/contact (create app/api/contact/route.ts, use nodemailer or Resend)
    // 2. POST to a GHL (GoHighLevel) webhook URL
    // 3. POST to Formspree / EmailJS for zero-backend setup
    await new Promise((res) => setTimeout(res, 1200)) // simulated delay
    setLoading(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className={`flex flex-col items-center text-center py-16 px-8 ${className}`}>
        <div className="w-16 h-16 rounded-full bg-sage-100 flex items-center justify-center mb-6">
          <CheckIcon />
        </div>
        <h3 className="font-display text-3xl font-semibold text-charcoal mb-3">
          Request Received!
        </h3>
        <p className="text-charcoal-400 leading-relaxed max-w-md mb-6">
          Thank you for reaching out. A member of our team will contact you within one business day to confirm your appointment. If this is urgent, please call us directly.
        </p>
        <a href="tel:+15868008770" className="btn-primary">
          Call (586) 800-8770
        </a>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className={`space-y-6 ${className}`}
      aria-label="Appointment request form"
    >
      {/* Name row */}
      <div className="grid sm:grid-cols-2 gap-4">
        <Field
          label="First Name"
          name="firstName"
          type="text"
          value={form.firstName}
          onChange={handleChange}
          error={errors.firstName}
          required
          autoComplete="given-name"
        />
        <Field
          label="Last Name"
          name="lastName"
          type="text"
          value={form.lastName}
          onChange={handleChange}
          error={errors.lastName}
          required
          autoComplete="family-name"
        />
      </div>

      {/* Contact row */}
      <div className="grid sm:grid-cols-2 gap-4">
        <Field
          label="Phone Number"
          name="phone"
          type="tel"
          value={form.phone}
          onChange={handleChange}
          error={errors.phone}
          required
          autoComplete="tel"
          placeholder="(586) 555-0100"
        />
        <Field
          label="Email Address"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          error={errors.email}
          required
          autoComplete="email"
          placeholder="you@example.com"
        />
      </div>

      {/* Service */}
      <div>
        <label htmlFor="service" className="form-label">
          Service Requested <span className="text-brass" aria-hidden="true">*</span>
        </label>
        <select
          id="service"
          name="service"
          value={form.service}
          onChange={handleChange}
          required
          aria-describedby={errors.service ? 'service-error' : undefined}
          className={`form-input ${errors.service ? 'border-red-400' : ''}`}
        >
          <option value="">Select a service…</option>
          {serviceCategories.map((cat) => (
            <optgroup key={cat.id} label={cat.name}>
              {cat.services.map((svc) => (
                <option key={svc.id} value={svc.id}>
                  {svc.name}
                </option>
              ))}
            </optgroup>
          ))}
          <option value="other">Other / Not Sure</option>
        </select>
        {errors.service && (
          <p id="service-error" className="form-error" role="alert">
            {errors.service}
          </p>
        )}
      </div>

      {/* New patient + preferred date */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <p className="form-label" id="new-patient-label">
            Are you a new patient?
          </p>
          <div
            className="flex gap-4 mt-2"
            role="radiogroup"
            aria-labelledby="new-patient-label"
          >
            {['yes', 'no'].map((val) => (
              <label key={val} className="flex items-center gap-2 cursor-pointer group">
                <input
                  type="radio"
                  name="isNewPatient"
                  value={val}
                  checked={form.isNewPatient === val}
                  onChange={handleChange}
                  className="w-4 h-4 accent-brass cursor-pointer"
                />
                <span className="text-sm text-charcoal capitalize group-hover:text-brass transition-colors">
                  {val === 'yes' ? 'Yes, new patient' : 'Existing patient'}
                </span>
              </label>
            ))}
          </div>
        </div>
        <Field
          label="Preferred Date (optional)"
          name="preferredDate"
          type="date"
          value={form.preferredDate}
          onChange={handleChange}
        />
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="form-label">
          Additional Notes (optional)
        </label>
        <textarea
          id="message"
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={4}
          placeholder="Anything we should know before your visit — insurance, concerns, a specific question…"
          className="form-input resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="btn-primary w-full justify-center disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {loading ? (
          <>
            <Spinner />
            Sending…
          </>
        ) : (
          <>
            Request Appointment
            <ArrowIcon />
          </>
        )}
      </button>

      <p className="text-xs text-charcoal-400 text-center leading-relaxed">
        We will respond within one business day. For same-day or urgent appointments, please call{' '}
        <a href="tel:+15868008770" className="text-brass hover:underline">
          (586) 800-8770
        </a>{' '}
        directly.
      </p>
    </form>
  )
}

type FieldProps = {
  label: string
  name: string
  type: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  error?: string
  required?: boolean
  autoComplete?: string
  placeholder?: string
}

function Field({
  label,
  name,
  type,
  value,
  onChange,
  error,
  required,
  autoComplete,
  placeholder,
}: FieldProps) {
  const errorId = error ? `${name}-error` : undefined
  return (
    <div>
      <label htmlFor={name} className="form-label">
        {label}
        {required && (
          <span className="text-brass ml-0.5" aria-hidden="true">
            *
          </span>
        )}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        autoComplete={autoComplete}
        placeholder={placeholder}
        aria-describedby={errorId}
        aria-invalid={!!error}
        className={`form-input ${error ? 'border-red-400' : ''}`}
      />
      {error && (
        <p id={errorId} className="form-error" role="alert">
          {error}
        </p>
      )}
    </div>
  )
}

function CheckIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-sage-500" aria-hidden="true">
      <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function Spinner() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="animate-spin" aria-hidden="true">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeOpacity="0.25" />
      <path d="M12 2a10 10 0 0 1 10 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  )
}
