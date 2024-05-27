import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import './i18n';
import { HelmetProvider } from 'react-helmet-async';
import { AuthProvider } from "./hooks/useAuth";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<React.Suspense fallback='Loading'>
			<HelmetProvider>
				<BrowserRouter>
					<AuthProvider>
						<App />
					</AuthProvider>
				</BrowserRouter>
			</HelmetProvider>
		</React.Suspense>
	</React.StrictMode>
);
