import { css } from 'styled-components';

export const color = {
	neuteral: {
		w0: '#FFFFFF',
		w1: '#FCFCFC',
		w2: '#F4F4F4',
		w3: '#EFEFEF',
		b4: '#6F767E',
		b5: '#33383F',
		b6: '#272B30',
		b7: '#1A1D1F',
		b8: '#111315',
		shades: {
			'01-50%': 'rgba(252, 252, 252, 0.5)',
			'04-75%': 'rgba(154, 159, 165, 1)',
			'04-50%': 'rgba(111, 118, 126, 1)',
			'04-40%': 'rgba(111, 118, 126, 0.4)',
			'08-50%': 'rgba(17, 19, 21, 0.5)',
		},
	},
	primary: {
		blue: 'rgba(42, 133, 255, 1)',
		green: 'rgba(131, 191, 110, 1)',
		red: 'rgba(255, 106, 85, 1)',
		purple: 'rgba(142, 89, 255, 1)',
	},
	secondary: {
		orange: 'rgba(255, 188, 153, 1)',
		purple: 'rgba(202, 189, 255, 1)',
		blue: 'rgba(177, 229, 252, 1)',
		yelow: 'rgba(255, 216, 141, 1)',
		pink: 'rgba(255, 216, 211, 1)',
		green: 'rgba(181, 228, 202, 1)',
		lightGreen: 'rgba(255, 216, 211, 1)',
	},
};
export const font = {
	style: {
		h1: css`
			font-weight: 600;
			font-size: 64px;
			line-height: 64px;
			letter-spacing: -0.03em;
		`,
		h2: css`
			font-weight: 600;
			font-size: 48px;
			line-height: 48px;
			letter-spacing: -0.03em;
		`,
		h3: css`
			font-weight: 600;
			font-size: 40px;
			line-height: 48px;
			letter-spacing: -0.02em;
		`,
		h4: css`
			font-weight: 600;
			font-size: 32px;
			line-height: 48px;
			letter-spacing: -0.03em;
		`,
		titleMobile: css`
			font-weight: 600;
			font-size: 18px;
			line-height: 32px;
			letter-spacing: -0.02em;
		`,
		titleSemibold: css`
			font-weight: 600;
			font-size: 20px;
			line-height: 32px;
			letter-spacing: -0.02em;
		`,
		titleMedium: css`
			font-weight: 500;
			font-size: 20px;
			line-height: 32px;
			letter-spacing: -0.02em;
		`,
		baseSemibold: css`
			font-weight: 600;
			font-size: 15px;
			line-height: 24px;
			letter-spacing: -0.01em;
		`,
		baseBold: css`
			font-weight: 700;
			font-size: 15px;
			line-height: 24px;
			letter-spacing: -0.01em;
		`,
		base: css`
			font-weight: 600;
			font-size: 14px;
			line-height: 24px;
			letter-spacing: -0.01em;
		`,
		bodyMedium: css`
			font-weight: 500;
			font-size: 15px;
			line-height: 24px;
			letter-spacing: -0.015em;
		`,
		bodySemibold1: css`
			font-weight: 600;
			font-size: 15px;
			line-height: 24px;
			letter-spacing: -0.01em;
		`,
		bodySemibold2: css`
			font-weight: 600;
			font-size: 14px;
			line-height: 24px;
			letter-spacing: -0.01em;
		`,
		caption1: css`
			font-weight: 600;
			font-size: 13px;
			line-height: 16px;
			letter-spacing: -0.01em;
		`,
		caption2: css`
			font-weight: 700;
			font-size: 12px;
			line-height: 16px;
			letter-spacing: -0.01em;
		`,
		captionMedium1: css`
			font-weight: 500;
			font-size: 13px;
			line-height: 16px;
			letter-spacing: -0.01em;
		`,

		captionMedium2: css`
			font-weight: 500;
			font-size: 12px;
			line-height: 12px;
			letter-spacing: -0.01em;
		`,
		button1: css`
			font-weight: 700;
			font-size: 15px;
			line-height: 24px;
			letter-spacing: -0.01em;
		`,
		button2: css`
			font-weight: 700;
			font-size: 13px;
			line-height: 24px;
			letter-spacing: -0.01em;
		`,
	},
};
export const mixin = {
	boxShadow(stroke: number, color = 'rgba(111, 118, 126, 0.4)') {
		return `box-shadow: 0 0 0 ${stroke}px ${color} inset;`;
	},
};
