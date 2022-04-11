import { Button } from 'component/UI/button';
import { ButtonWithIcon } from 'component/UI/button/withIcon/buttonWithIcon';
import styles from './home.module.scss';

const Home = (): JSX.Element => (
	<div className={styles.Home}>
		<p>Home Component</p>
		<Button types="primary" icon="grid" iconSize={24}>
			qwe
		</Button>
		<ButtonWithIcon
			types="secondary"
			icon="grid"
			iconSize={24}
		></ButtonWithIcon>
	</div>
);

export default Home;
