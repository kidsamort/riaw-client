import { Meta, Story } from '@storybook/react';
import { Paragraph } from './index';
import { ParagraphProps, ParagraphType, ParagraphWeight } from './paragraph.props';

export default {
	title: 'Typography/Paragraph',
	component: Paragraph,
	parameters: {
		themes: {
			default: 'dark',
		},
	},
} as Meta;

const Template: Story<ParagraphProps> = (args) => <Paragraph {...args} />;

export const Title1Semibold = Template.bind({});

Title1Semibold.args = {
	types: ParagraphType.TITLE,
	weight: ParagraphWeight.SEMIBOLD,
	children: 'Title 1 (Semibold)',
};
export const Title1Medium = Template.bind({});

Title1Medium.args = {
	types: ParagraphType.TITLE,
	weight: ParagraphWeight.MEDIUM,
	children: 'Title 1 (Medium)',
};
export const Base1Semibold = Template.bind({});

Base1Semibold.args = {
	types: ParagraphType.BASE,
	weight: ParagraphWeight.SEMIBOLD,
	children: 'Base 1 (Semibold)',
};
export const Base1Bold = Template.bind({});

Base1Bold.args = {
	types: ParagraphType.BASE,
	weight: ParagraphWeight.BOLD,
	children: 'Base 1 (Bold)',
};
export const Base2 = Template.bind({});

Base2.args = {
	types: ParagraphType.BASE2,
	weight: ParagraphWeight.SEMIBOLD,
	children: 'Base 2',
};
export const Body1Medium = Template.bind({});

Body1Medium.args = {
	types: ParagraphType.BODY,
	weight: ParagraphWeight.MEDIUM,
	children: 'Body 1 (Medium)',
};
export const Body1Semibold = Template.bind({});

Body1Semibold.args = {
	types: ParagraphType.BODY,
	weight: ParagraphWeight.SEMIBOLD,
	children: 'Body 1 (Semibold)',
};
export const Body2Semibold = Template.bind({});

Body2Semibold.args = {
	types: ParagraphType.BODY2,
	weight: ParagraphWeight.SEMIBOLD,
	children: 'Body 2 (Semibold)',
};
export const Caption = Template.bind({});

Caption.args = {
	types: ParagraphType.CAPTION,
	weight: ParagraphWeight.SEMIBOLD,
	children: 'Caption 1',
};
export const CaptionMedium = Template.bind({});

CaptionMedium.args = {
	types: ParagraphType.CAPTION,
	weight: ParagraphWeight.MEDIUM,
	children: 'Caption 1 (Medium)',
};
export const Caption2 = Template.bind({});

Caption2.args = {
	types: ParagraphType.CAPTION2,
	weight: ParagraphWeight.BOLD,
	children: 'Caption 2',
};
export const Caption2Medium = Template.bind({});

Caption2Medium.args = {
	types: ParagraphType.CAPTION2,
	weight: ParagraphWeight.MEDIUM,
	children: 'Caption 2 (Medium)',
};
export const Button = Template.bind({});

Button.args = {
	types: ParagraphType.BUTTON,
	weight: ParagraphWeight.BOLD,
	children: 'Button 1',
};
export const Button2 = Template.bind({});
Button2.args = {
	children: 'Button 2',
};
