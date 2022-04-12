import { NavProps } from './nav.props';
import { WraperStyled } from './nav.styled';
import useTheme from 'hook/theme.hook';
import { Link } from 'react-router-dom';
import { toggleTheme } from 'component/app/theme/theme';
import { useAppDispatch } from 'hook/rtk.hook';

export const Nav = ({ className, children }: NavProps): JSX.Element => {
	const { nowTheme, setTheme } = useTheme();
	const dispath = useAppDispatch();

	return (
		<WraperStyled className={className}>
			<ul>
				<li>
					<h4>dev tool 0.1</h4>
				</li>
				<li>
					<Link to="/auth">auth</Link>
				</li>
				<li>
					<Link to="/auth/signin">signin</Link>
				</li>
				<li>
					<Link to="/auth/signup">signup</Link>
				</li>
				<li>
					<Link to="/">home</Link>
				</li>
				<li>
					<Link to="/error">err</Link>
				</li>
				<li>
					<Link to="/private">private</Link>
				</li>
				<li>theme {nowTheme?.toString()}</li>
				<li>
					<button onClick={() => toggleTheme(nowTheme, setTheme, dispath)}>
						{nowTheme === 'dark' ? (
							<span aria-label="Light mode" role="img">
								🌞
							</span>
						) : (
							<span aria-label="Dark mode" role="img">
								🌜
							</span>
						)}
					</button>
				</li>
			</ul>
		</WraperStyled>
	);
};
