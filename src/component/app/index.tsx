import { withAppLayout } from './app.layout';
import { FC } from 'react';
import { Nav } from 'component/dev/nav';

const App: FC = () => {
	return <Nav />;
};

export default withAppLayout(App);
