'use client';

import { useState } from 'react';
import { useApp } from '../../lib/AppContext';
import { T } from '../../lib/translations';
import { PageHeader, CTAButton } from '../shared';

export default function ContactPage() {
  const { lang } = useApp();
  const t = T[lang].contact;
  const [form, setForm] = useState({ name: '', phone: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, boolean>>({});

  const set = (k: string, v: string) => setForm(f => ({ ...f, [k]: v }));

  const validate = () => {
    const e: Record<string, boolean> = {};
    if (!form.name.trim()) e.name = true;
    if (!form.phone.trim()) e.phone = true;
    if (!form.subject) e.subject = true;
    if (!form.message.trim()) e.message = true;
    return e;
  };

  const submit = (ev: React.FormEvent) => {
    ev.preventDefault();
    const e = validate();
    if (Object.keys(e).length) { setErrors(e); return; }
    setSubmitted(true);
  };

  const inputStyle = (err?: boolean): React.CSSProperties => ({
    width: '100%', padding: '13px 16px', borderRadius: 12, border: `2px solid ${err ? '#f44336' : '#e0e0e0'}`,
    fontFamily: 'Fredoka, sans-serif', fontSize: 16, outline: 'none', boxSizing: 'border-box',
    transition: 'border-color 0.2s', background: 'white'
  });

  const labelStyle: React.CSSProperties = { fontFamily: 'Fredoka, sans-serif', fontSize: 15, color: '#555', display: 'block', marginBottom: 6, fontWeight: 500 };

  if (submitted) return (
    <div>
      <PageHeader title={t.title} subtitle={t.subtitle} color="#00bcd4" emoji="📬" />
      <div style={{ textAlign: 'center', padding: '80px 24px' }}>
        <div style={{ fontSize: 80, marginBottom: 24 }}>🎵</div>
        <h2 style={{ fontFamily: "'Bubblegum Sans', cursive", fontSize: 36, color: '#333', marginBottom: 16 }}>{t.successMsg}</h2>
      </div>
    </div>
  );

  return (
    <div>
      <PageHeader title={t.title} subtitle={t.subtitle} color="#00bcd4" emoji="📬" />
      <div style={{ maxWidth: 680, margin: '0 auto', padding: '64px 24px' }}>
        <form onSubmit={submit} noValidate>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20, marginBottom: 20 }}>
            <div>
              <label style={labelStyle}>{t.nameLbl}</label>
              <input value={form.name} onChange={e => set('name', e.target.value)} placeholder={t.namePh}
                style={inputStyle(errors.name)}
                onFocus={e => (e.target.style.borderColor = '#42a5f5')}
                onBlur={e => (e.target.style.borderColor = errors.name ? '#f44336' : '#e0e0e0')}
              />
            </div>
            <div>
              <label style={labelStyle}>{t.phoneLbl}</label>
              <input value={form.phone} onChange={e => set('phone', e.target.value)} placeholder={t.phonePh}
                style={inputStyle(errors.phone)}
                onFocus={e => (e.target.style.borderColor = '#42a5f5')}
                onBlur={e => (e.target.style.borderColor = errors.phone ? '#f44336' : '#e0e0e0')}
              />
            </div>
          </div>
          <div style={{ marginBottom: 20 }}>
            <label style={labelStyle}>{t.emailLbl}</label>
            <input type="email" value={form.email} onChange={e => set('email', e.target.value)} placeholder={t.emailPh}
              style={inputStyle()}
              onFocus={e => (e.target.style.borderColor = '#42a5f5')}
              onBlur={e => (e.target.style.borderColor = '#e0e0e0')}
            />
          </div>
          <div style={{ marginBottom: 20 }}>
            <label style={labelStyle}>{t.subjectLbl}</label>
            <select value={form.subject} onChange={e => set('subject', e.target.value)}
              style={{ ...inputStyle(errors.subject), appearance: 'none', cursor: 'pointer' }}>
              <option value="">—</option>
              {t.subjects.map((s, i) => <option key={i} value={s}>{s}</option>)}
            </select>
          </div>
          <div style={{ marginBottom: 28 }}>
            <label style={labelStyle}>{t.messageLbl}</label>
            <textarea value={form.message} onChange={e => set('message', e.target.value)} placeholder={t.messagePh}
              rows={5} style={{ ...inputStyle(errors.message), resize: 'vertical' }}
              onFocus={e => (e.target.style.borderColor = '#42a5f5')}
              onBlur={e => (e.target.style.borderColor = errors.message ? '#f44336' : '#e0e0e0')}
            />
          </div>
          <p style={{ fontFamily: 'Fredoka, sans-serif', fontSize: 13, color: '#999', marginBottom: 20 }}>{t.required}</p>
          <CTAButton label={t.submitBtn} onClick={() => {}} color="#ec407a" />
        </form>
      </div>
    </div>
  );
}
