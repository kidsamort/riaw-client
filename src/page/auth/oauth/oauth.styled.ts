import styled, { css } from 'styled-components';
import { EmptyProps } from './empty.props';

const styles = css<EmptyProps>``;

export const EmptyWrapperStyled = styled.div<EmptyProps>`
  ${styles}
`;
