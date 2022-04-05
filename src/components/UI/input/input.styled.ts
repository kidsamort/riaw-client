import { ComponentPropsWithoutRef } from 'react';
import styled from 'styled-components';
import { InputProps } from './input.props';

interface InputStyledProps extends ComponentPropsWithoutRef<'div'> {
	test: 'test';
}

export const WraperStyled = styled.div<InputStyledProps>``;
