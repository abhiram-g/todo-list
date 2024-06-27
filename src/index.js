import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';

import App from './App.js';

const rootElement = document.getElementById('root');
if (rootElement) {
    const root = createRoot(rootElement);
    root.render(
        <StrictMode>
            <App />
        </StrictMode>
    );
} else {
    console.error('Root element not found');
}

// ReactDOM.render(<App />, document.getElementById('root'));