import { useTheme } from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
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
					{allIcon[name].map((icon: { path: string; fill?: string }) => {
						return (
							<path
								key={uuidv4()}
								d={String(icon.path)}
								fill={icon.fill}
							></path>
						);
					})}
				</styled.iconWraper>
			)}
		</>
	);
};
