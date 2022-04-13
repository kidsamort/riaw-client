import { withAppLayout } from './app.layout';
import { FC } from 'react';
import { Nav } from 'component/dev/nav';
import { Icon } from 'component/UI/icon';
import { ThemeButton } from 'component/UI/button/withIcon/buttonWithIcon.styled';
import useTheme from 'hook/theme.hook';
import { toggleTheme } from './theme/theme';
import { useAppDispatch } from 'hook/rtk.hook';

const App: FC = () => {
	const { nowTheme, setTheme } = useTheme();
	const dispath = useAppDispatch();
	return (
		<ThemeButton
			nowTheme={nowTheme}
			onClick={() => toggleTheme(nowTheme, setTheme, dispath)}
		>
			<Icon name="moonFill" size={24} />
		</ThemeButton>
	);
};

export default withAppLayout(App);
