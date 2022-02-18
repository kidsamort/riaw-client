import { ParagraphProps, ParagraphType } from './paragraph.props';
import styles from './paragraph.module.css';
import { ParagraphStyles } from './paragraph.styled';
import cn from 'classnames';

export const Paragraph = ({ types, weight, className, children }: ParagraphProps): JSX.Element => {
	return (
		<ParagraphStyles className={cn(styles.paragraph, className)} types={types} weight={weight}>
			{children}
		</ParagraphStyles>
	);
};
