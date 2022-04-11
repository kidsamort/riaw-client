import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { setupStore } from 'redux/store/index.store';

import App from './component/app';

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const store = setupStore();

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById('root'),
);
