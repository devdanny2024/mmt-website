'use client';

import { useState, type FormEvent } from 'react';
import { brand } from '@/lib/site';

type Status = 'idle' | 'submitting' | 'success' | 'error';

export function LeadForm({
  variant = 'contact',
  submitLabel = 'Send',
}: {
  variant?: 'join' | 'contact';
  submitLabel?: string;
}) {
  const [status, setStatus] = useState<Status>('idle');
  const messageLabel = variant === 'join' ? 'What does your company offer?' : 'How can we help?';
  const messagePlaceholder =
    variant === 'join'
      ? 'Tell us about your company — products, services, or capabilities you bring to the network.'
      : 'Describe the problem you need solved, or the contract you are preparing for.';

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('submitting');
    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: data.get('name'),
      phone: data.get('phone'),
      email: data.get('email'),
      company: data.get('company'),
      message: data.get('message'),
      variant,
    };
    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (res.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div className="rounded-2xl border border-accent/40 bg-surface p-8 text-center">
        <p className="mb-2 font-display text-2xl font-bold">Thank you — we&apos;ve got it.</p>
        <p className="text-muted-foreground">
          Our team will reach out shortly. {variant === 'join' ? 'Welcome to the network.' : ''}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border border-border bg-surface p-7 sm:p-8">
      <div className="grid gap-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label className="label" htmlFor="name">
              Full name
            </label>
            <input id="name" name="name" required className="field" placeholder="Your name" />
          </div>
          <div>
            <label className="label" htmlFor="phone">
              Phone
            </label>
            <input id="phone" name="phone" required className="field" placeholder="+234 ..." />
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label className="label" htmlFor="email">
              Email
            </label>
            <input id="email" name="email" type="email" required className="field" placeholder="you@company.com" />
          </div>
          <div>
            <label className="label" htmlFor="company">
              Company
            </label>
            <input id="company" name="company" className="field" placeholder="Company name" />
          </div>
        </div>

        <div>
          <label className="label" htmlFor="message">
            {messageLabel}
          </label>
          <textarea
            id="message"
            name="message"
            required
            className="field min-h-32 resize-y"
            placeholder={messagePlaceholder}
          />
        </div>

        <button type="submit" disabled={status === 'submitting'} className="btn-primary w-full sm:w-auto">
          {status === 'submitting' ? 'Sending…' : submitLabel}
        </button>

        {status === 'error' && (
          <p className="text-sm text-accent">Something went wrong. Please try again or email us at {brand.email}.</p>
        )}
      </div>
    </form>
  );
}
