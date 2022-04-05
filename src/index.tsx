import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

const darkTtheme = {
	mode: 'dark',
};
const lightTtheme = {
	mode: 'light',
};

ReactDOM.render(
	<React.StrictMode>
		{/* <ThemeProvider theme={theme}> */}
		<BrowserRouter>
			<App />
		</BrowserRouter>
		{/* </ThemeProvider> */}
	</React.StrictMode>,
	document.getElementById('root'),
);
