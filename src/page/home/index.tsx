import styles from './home.module.scss';
import { useAppDispatch, useAppSelector } from '../../hook/rtk.hook';
import { Button } from '../../component/UI/button';
import { logout } from '../../redux/action/auth.action';
import { Link } from 'react-router-dom';

const Home = (): JSX.Element => {
  const { isAuth, user, isLoading } = useAppSelector(
    (state) => state.authReducer,
  );
  const dispatch = useAppDispatch();

  return (
    <div className={styles.Home}>
      {!isLoading && (
        <>
          <h4>
            {isAuth ? `${user?.name} спасибо что с нами ` : 'зарегистрируйтесь'}
          </h4>
          <p>Home Component {process.env.REACT_APP_API_URL}</p>
          {isAuth ? (
            <Button types={'primary'} onClick={() => dispatch(logout())}>
              Выйти
            </Button>
          ) : (
            <Button types={'primary'}>
              <Link to={'auth/signin'}>Войтий</Link>
            </Button>
          )}
        </>
      )}
    </div>
  );
};

export default Home;
