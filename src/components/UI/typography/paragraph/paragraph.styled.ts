import styled, { css } from 'styled-components';
import { base1S, inter } from 'styles/globals.styled';
import { ParagraphProps, ParagraphType } from './paragraph.props';

export const ParagraphStyles = styled.p<ParagraphProps>`
	font-weight: ${({ weight = 600 }) => weight};
	${({ types }) =>
		types == ParagraphType.TITLE
			? css`
					font-size: 20px;
					line-height: 32px;
					letter-spacing: -0.02em;
			  `
			: types == ParagraphType.TITLE2
			? css`
					font-size: 18px;
					line-height: 24px;
					letter-spacing: -0.02em;
			  `
			: types == ParagraphType.BASE
			? css`
					font-size: 15px;
					line-height: 24px;
			  `
			: types == ParagraphType.BASE2
			? css`
					font-size: 14px;
					line-height: 24px;
			  `
			: types == ParagraphType.BODY
			? css`
					font-size: 15px;
					line-height: 24px;
					letter-spacing: -0.015em;
			  `
			: types == ParagraphType.BODY2
			? css`
					font-size: 14px;
					line-height: 24px;
			  `
			: types == ParagraphType.CAPTION
			? css`
					font-size: 13px;
					line-height: 16px;
			  `
			: types == ParagraphType.CAPTION2
			? css`
					font-size: 12px;
					line-height: 16px;
			  `
			: types == ParagraphType.BUTTON
			? css`
					font-size: 15px;
					line-height: 24px;
			  `
			: css`
					font-size: 13px;
					line-height: 24px;
			  `};
`;
