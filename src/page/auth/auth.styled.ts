import styled from 'styled-components';
import { color, font } from 'style/helpers.styled';
import { Button } from 'component/UI/button';

const Auth = styled.div<{ form: string | undefined }>`
  padding: 24px;
  display: grid;
  grid-template-rows: auto 1fr;
  height: 100vh;
  a {
    ${font.style.caption1}
  }
`;

const Span = styled.span`
  padding-right: 6px;
  color: ${color.neuteral.b4};
`;

const ButtonHover = styled(Button)`
  &:hover {
    box-shadow: 0 0 0 2px ${color.primary.green} inset;
  }
`;

const AuthSocial = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  gap: 8px;
`;

const Block = styled.div`
  display: grid;
  gap: 20px;
`;
const Input = styled.form`
  display: grid;
  gap: 12px;
`;

const Body = styled.div`
  display: grid;
  align-content: center;
  gap: 32px;
`;
export default {
  Auth,
  Span,
  Body,
  Block,
  Input,
  ButtonHover,
  AuthSocial,
};
