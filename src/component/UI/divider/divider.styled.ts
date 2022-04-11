import styled, { css } from 'styled-components';
import { DividerProps } from './divider.props';

const styles = css<DividerProps>`
	${({ direction, size }) =>
		direction === 'horizontal'
			? css`
					width: 100%;
					height: ${size}px;
			  `
			: direction === 'vertical'
			? css`
					width: ${size}px;
					height: 100%;
			  `
			: ''};
	${({ theme }) =>
		css`
			background: ${theme.hr};
		`};
`;

const Wraper = styled.div<DividerProps>`
	transition: all 0.3s ease-in;
	${styles};
`;

export default { Wraper };
