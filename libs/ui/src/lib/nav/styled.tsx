import styled from '@emotion/styled';

export const StyledNav = styled.nav`
  display: flex;
  justify-content: center;

  position: sticky;
  top: 0;

  background-color: #383838;
`;

export const StyledUl = styled.ul`
  height: 2.5rem;
  width: clamp(320px, 70%, 1300px);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 0 1rem;

  font-size: 1.3rem;

  a {
    color: white;
    text-decoration: none;
  }
`;
