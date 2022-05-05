import { withAppLayout } from './app.layout';
import { FC, useEffect } from 'react';
import { Icon } from 'component/UI/icon';
import { ThemeButton } from 'component/UI/button/withIcon/buttonWithIcon.styled';
import useTheme from 'hook/theme.hook';
import { toggleTheme } from './theme/theme';
import { useAppDispatch } from 'hook/rtk.hook';
import { checkAuth } from '../../redux/action/auth.action';

const App: FC = () => {
  const { nowTheme, setTheme } = useTheme();

  const dispath = useAppDispatch();

  useEffect(() => {
    if (localStorage.getItem('token')) {
      dispath(checkAuth());
    }
  }, []);
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
