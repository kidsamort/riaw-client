import styled, { css } from 'styled-components';
import { LoaderProps } from './loader.props';

const styles = css<LoaderProps>``;

const Wraper = styled.div<LoaderProps>`
  ${styles}
`;

export default { Wraper };
