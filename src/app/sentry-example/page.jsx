'use client';

import Head from 'next/head';
import * as Sentry from '@sentry/nextjs';

export default function Page() {
  const handleClick = () => {
    Sentry.captureMessage('Sentry Example Button Clicked');
    throw new Error('This is a test error');
  };

  return (
    <div>
      <Head>
        <title>Sentry Onboarding</title>
        <meta name="description" content="Test Sentry for your Next.js app!" />
      </Head>

      <main
        style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <h1 style={{ fontSize: '4rem', margin: '14px 0' }}>
          Sentry Example
        </h1>

        <p>Get started by sending us a sample error:</p>
        <button
          type="button"
          style={{
            padding: '12px',
            cursor: 'pointer',
            backgroundColor: '#AD6CAA',
            borderRadius: '4px',
            border: 'none',
            color: 'white',
            fontSize: '14px',
            margin: '18px',
          }}
          onClick={handleClick}
        >
          Throw error!
        </button>

        <p>
          Next, look for the error on the{' '}
          <a href="https://koninklijkeloop.sentry.io/issues/?project=4507288235606096">
            Issues Page
          </a>.
        </p>
        <p style={{ marginTop: '24px' }}>
          For more information, see{' '}
          <a href="https://docs.sentry.io/platforms/javascript/guides/nextjs/">
            Sentry Next.js Guide
          </a>.
        </p>
      </main>
    </div>
  );
}
