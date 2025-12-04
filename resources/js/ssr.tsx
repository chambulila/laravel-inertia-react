import { createInertiaApp } from '@inertiajs/react';
import createServer from '@inertiajs/react/server';
import ReactDOMServer from 'react-dom/server';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createServer((page) =>
    createInertiaApp({
        page,
        render: ReactDOMServer.renderToString,
        title: (title) => (title ? `${title} - ${appName}` : appName),
        resolve: (name) => {
            const pages = import.meta.glob('./pages/**/*.{tsx,jsx}', {
                eager: true,
            });
            return (
                pages[`./pages/${name}.tsx`] || pages[`./pages/${name}.jsx`]
            );
        },
        setup: ({ App, props }) => {
            return <App {...props} />;
        },
    }),
);
