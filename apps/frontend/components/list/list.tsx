import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface ListProps {
  children: any;
}

const StyledList = styled.ul`
  width: clamp(426px, 70%, 700px);
  height: 90%;
  margin: 1rem auto;

  @media (max-width: 425px) {
    width: 100%;
  }
`;

export function List(props: ListProps) {
  return <StyledList>{props.children}</StyledList>;
}

export default List;
