import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface HeaderProps {
  text: String;
}

const StyledHeader = styled.h1`
  text-decoration: underline;
  text-align: center;
  margin-top: 1rem;
`;

export function Header(props: HeaderProps) {
  return <StyledHeader>{props.text}</StyledHeader>;
}

export default Header;
