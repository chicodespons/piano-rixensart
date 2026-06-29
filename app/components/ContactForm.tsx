'use client';

import { useState } from 'react';
import { CTAButton } from './shared';

interface ContactFormCopy {
  firstNameLbl: string;
  lastNameLbl: string;
  phoneLbl: string;
  emailLbl: string;
  subjectLbl: string;
  messageLbl: string;
  firstNamePh: string;
  lastNamePh: string;
  phonePh: string;
  emailPh: string;
  messagePh: string;
  subjects: readonly string[];
  submitBtn: string;
  successMsg: string;
  required: string;
  sendErrorMsg: string;
}

interface ContactFormProps {
  copy: ContactFormCopy;
}

interface FormState {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
}

const INITIAL_FORM: FormState = {
  firstName: '',
  lastName: '',
  phone: '',
  email: '',
  subject: '',
  message: '',
};

export default function ContactForm({ copy }: ContactFormProps) {
  const [form, setForm] = useState<FormState>(INITIAL_FORM);
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, boolean>>>({});

  const setField = (field: keyof FormState, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const validate = () => {
    const nextErrors: Partial<Record<keyof FormState, boolean>> = {};

    if (!form.firstName.trim()) nextErrors.firstName = true;
    if (!form.lastName.trim()) nextErrors.lastName = true;
    if (!form.phone.trim()) nextErrors.phone = true;
    if (!form.subject.trim()) nextErrors.subject = true;
    if (!form.message.trim()) nextErrors.message = true;

    return nextErrors;
  };

  const submit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate();

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    setErrors({});
    setSendError(false);
    setSending(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error('Request failed');
      }

      setSubmitted(true);
    } catch {
      setSendError(true);
    } finally {
      setSending(false);
    }
  };

  const inputStyle = (hasError = false): React.CSSProperties => ({
    width: '100%',
    padding: '13px 16px',
    borderRadius: 12,
    border: `2px solid ${hasError ? '#f44336' : '#e0e0e0'}`,
    fontFamily: 'Fredoka, sans-serif',
    fontSize: 16,
    outline: 'none',
    boxSizing: 'border-box',
    transition: 'border-color 0.2s',
    background: 'white',
  });

  const labelStyle: React.CSSProperties = {
    fontFamily: 'Fredoka, sans-serif',
    fontSize: 15,
    color: '#555',
    display: 'block',
    marginBottom: 6,
    fontWeight: 500,
  };

  if (submitted) {
    return (
      <div style={{ textAlign: 'center', padding: '80px 24px' }}>
        <div style={{ fontSize: 80, marginBottom: 24 }}>🎵</div>
        <h2
          style={{
            fontFamily: "'Bubblegum Sans', cursive",
            fontSize: 36,
            color: '#333',
            marginBottom: 16,
          }}
        >
          {copy.successMsg}
        </h2>
      </div>
    );
  }

  return (
    <div>
      <form onSubmit={submit} noValidate>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: 20,
            marginBottom: 20,
          }}
        >
          <div>
            <label htmlFor="firstName" style={labelStyle}>
              {copy.firstNameLbl}
            </label>
            <input
              id="firstName"
              name="firstName"
              autoComplete="given-name"
              value={form.firstName}
              onChange={(event) => setField('firstName', event.target.value)}
              placeholder={copy.firstNamePh}
              style={inputStyle(errors.firstName)}
              onFocus={(event) => (event.target.style.borderColor = '#42a5f5')}
              onBlur={(event) => (event.target.style.borderColor = errors.firstName ? '#f44336' : '#e0e0e0')}
            />
          </div>
          <div>
            <label htmlFor="lastName" style={labelStyle}>
              {copy.lastNameLbl}
            </label>
            <input
              id="lastName"
              name="lastName"
              autoComplete="family-name"
              value={form.lastName}
              onChange={(event) => setField('lastName', event.target.value)}
              placeholder={copy.lastNamePh}
              style={inputStyle(errors.lastName)}
              onFocus={(event) => (event.target.style.borderColor = '#42a5f5')}
              onBlur={(event) => (event.target.style.borderColor = errors.lastName ? '#f44336' : '#e0e0e0')}
            />
          </div>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: 20,
            marginBottom: 20,
          }}
        >
          <div>
            <label htmlFor="phone" style={labelStyle}>
              {copy.phoneLbl}
            </label>
            <input
              id="phone"
              name="phone"
              autoComplete="tel"
              value={form.phone}
              onChange={(event) => setField('phone', event.target.value)}
              placeholder={copy.phonePh}
              style={inputStyle(errors.phone)}
              onFocus={(event) => (event.target.style.borderColor = '#42a5f5')}
              onBlur={(event) => (event.target.style.borderColor = errors.phone ? '#f44336' : '#e0e0e0')}
            />
          </div>
          <div>
            <label htmlFor="email" style={labelStyle}>
              {copy.emailLbl}
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              value={form.email}
              onChange={(event) => setField('email', event.target.value)}
              placeholder={copy.emailPh}
              style={inputStyle()}
              onFocus={(event) => (event.target.style.borderColor = '#42a5f5')}
              onBlur={(event) => (event.target.style.borderColor = '#e0e0e0')}
            />
          </div>
        </div>

        <div style={{ marginBottom: 20 }}>
          <label htmlFor="subject" style={labelStyle}>
            {copy.subjectLbl}
          </label>
          <select
            id="subject"
            name="subject"
            value={form.subject}
            onChange={(event) => setField('subject', event.target.value)}
            style={{ ...inputStyle(errors.subject), appearance: 'none', cursor: 'pointer' }}
          >
            <option value="">—</option>
            {copy.subjects.map((subject) => (
              <option key={subject} value={subject}>
                {subject}
              </option>
            ))}
          </select>
        </div>

        <div style={{ marginBottom: 28 }}>
          <label htmlFor="message" style={labelStyle}>
            {copy.messageLbl}
          </label>
          <textarea
            id="message"
            name="message"
            value={form.message}
            onChange={(event) => setField('message', event.target.value)}
            placeholder={copy.messagePh}
            rows={5}
            style={{ ...inputStyle(errors.message), resize: 'vertical' }}
            onFocus={(event) => (event.target.style.borderColor = '#42a5f5')}
            onBlur={(event) => (event.target.style.borderColor = errors.message ? '#f44336' : '#e0e0e0')}
          />
        </div>

        {sendError ? (
          <p
            style={{
              fontFamily: 'Fredoka, sans-serif',
              fontSize: 15,
              color: '#c62828',
              background: '#ffebee',
              borderRadius: 12,
              padding: '12px 16px',
              marginBottom: 20,
            }}
          >
            {copy.sendErrorMsg}
          </p>
        ) : null}

        <p style={{ fontFamily: 'Fredoka, sans-serif', fontSize: 13, color: '#999', marginBottom: 20 }}>
          {copy.required}
        </p>

        <CTAButton
          label={sending ? '…' : copy.submitBtn}
          onClick={() => undefined}
          color="#ec407a"
          buttonType="submit"
        />
      </form>
    </div>
  );
}