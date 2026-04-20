'use client';

import { useState } from 'react';
import { CTAButton } from './shared';

interface ContactFormCopy {
  nameLbl: string;
  phoneLbl: string;
  emailLbl: string;
  subjectLbl: string;
  messageLbl: string;
  namePh: string;
  phonePh: string;
  emailPh: string;
  messagePh: string;
  subjects: readonly string[];
  submitBtn: string;
  successMsg: string;
  required: string;
}

interface ContactFormProps {
  copy: ContactFormCopy;
}

interface FormState {
  name: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
}

const INITIAL_FORM: FormState = {
  name: '',
  phone: '',
  email: '',
  subject: '',
  message: '',
};

export default function ContactForm({ copy }: ContactFormProps) {
  const [form, setForm] = useState<FormState>(INITIAL_FORM);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, boolean>>>({});

  const setField = (field: keyof FormState, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const validate = () => {
    const nextErrors: Partial<Record<keyof FormState, boolean>> = {};

    if (!form.name.trim()) nextErrors.name = true;
    if (!form.phone.trim()) nextErrors.phone = true;
    if (!form.subject.trim()) nextErrors.subject = true;
    if (!form.message.trim()) nextErrors.message = true;

    return nextErrors;
  };

  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate();

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    setErrors({});
    setSubmitted(true);
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
          <label htmlFor="name" style={labelStyle}>
            {copy.nameLbl}
          </label>
          <input
            id="name"
            value={form.name}
            onChange={(event) => setField('name', event.target.value)}
            placeholder={copy.namePh}
            style={inputStyle(errors.name)}
            onFocus={(event) => (event.target.style.borderColor = '#42a5f5')}
            onBlur={(event) => (event.target.style.borderColor = errors.name ? '#f44336' : '#e0e0e0')}
          />
        </div>
        <div>
          <label htmlFor="phone" style={labelStyle}>
            {copy.phoneLbl}
          </label>
          <input
            id="phone"
            value={form.phone}
            onChange={(event) => setField('phone', event.target.value)}
            placeholder={copy.phonePh}
            style={inputStyle(errors.phone)}
            onFocus={(event) => (event.target.style.borderColor = '#42a5f5')}
            onBlur={(event) => (event.target.style.borderColor = errors.phone ? '#f44336' : '#e0e0e0')}
          />
        </div>
      </div>
      <div style={{ marginBottom: 20 }}>
        <label htmlFor="email" style={labelStyle}>
          {copy.emailLbl}
        </label>
        <input
          id="email"
          type="email"
          value={form.email}
          onChange={(event) => setField('email', event.target.value)}
          placeholder={copy.emailPh}
          style={inputStyle()}
          onFocus={(event) => (event.target.style.borderColor = '#42a5f5')}
          onBlur={(event) => (event.target.style.borderColor = '#e0e0e0')}
        />
      </div>
      <div style={{ marginBottom: 20 }}>
        <label htmlFor="subject" style={labelStyle}>
          {copy.subjectLbl}
        </label>
        <select
          id="subject"
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
          value={form.message}
          onChange={(event) => setField('message', event.target.value)}
          placeholder={copy.messagePh}
          rows={5}
          style={{ ...inputStyle(errors.message), resize: 'vertical' }}
          onFocus={(event) => (event.target.style.borderColor = '#42a5f5')}
          onBlur={(event) => (event.target.style.borderColor = errors.message ? '#f44336' : '#e0e0e0')}
        />
      </div>
      <p style={{ fontFamily: 'Fredoka, sans-serif', fontSize: 13, color: '#999', marginBottom: 20 }}>{copy.required}</p>
      <CTAButton label={copy.submitBtn} onClick={() => undefined} color="#ec407a" buttonType="submit" />
    </form>
  );
}
