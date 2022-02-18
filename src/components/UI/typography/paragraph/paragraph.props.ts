import { ComponentPropsWithoutRef, ReactNode } from 'react';

export enum ParagraphType {
	TITLE = 'title',
	TITLE2 = 'title2',
	BASE = 'base',
	BASE2 = 'base2',
	BODY = 'body',
	BODY2 = 'body2',
	CAPTION = 'caption',
	CAPTION2 = 'caption2',
	BUTTON = 'button',
	BUTTON2 = 'button2',
}
export enum ParagraphWeight {
	MEDIUM = 500,
	SEMIBOLD = 600,
	BOLD = 700,
}

export interface ParagraphProps extends ComponentPropsWithoutRef<'p'> {
	types: ParagraphType;
	weight?: ParagraphWeight | undefined;
	children: ReactNode | undefined;
}
