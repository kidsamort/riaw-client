import styled, { css } from 'styled-components';
import { EmptyProps } from './empty.props';

const styles = css<EmptyProps>``;

const Wraper = styled.div<EmptyProps>`
  ${styles}
`;

export default { Wraper };
