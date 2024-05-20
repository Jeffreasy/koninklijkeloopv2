import * as Sentry from '@sentry/nextjs';

export async function GET(request) {
  Sentry.captureMessage('Sentry Example API Route Hit');
  return new Response('Sentry example API route', { status: 200 });
}
