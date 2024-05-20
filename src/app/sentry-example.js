'use client';
import * as Sentry from '@sentry/nextjs';

const SentryExample = () => {
    const handleClick = () => {
        try {
            throw new Error('This is a test error');
        } catch (error) {
            Sentry.captureException(error);
        }
    };

    return (
        <div>
            <h1>Sentry Example</h1>
            <button onClick={handleClick}>Trigger Error</button>
        </div>
    );
};

export default SentryExample;
