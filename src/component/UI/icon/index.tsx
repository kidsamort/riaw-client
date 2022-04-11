import { useTheme } from 'styled-components';
import { allIcon } from './icon';
import { IconProps } from './icon.props';
import styled from './icon.styled';

export const Icon = ({
	size,
	className,
	color,
	name,
}: IconProps): JSX.Element => {
	return (
		<>
			{name && (
				<styled.iconWraper
					className={className}
					width={size}
					height={size}
					viewBox="0 0 16 16"
					fill={color}
				>
					<path d={allIcon[name]}></path>
				</styled.iconWraper>
			)}
		</>
	);
};
