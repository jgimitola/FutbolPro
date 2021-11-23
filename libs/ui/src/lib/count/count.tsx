import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface CountProps {
  current: number;
}

export const StyledCount = styled.p`
  text-align: center;
  margin-top: 0.8rem;
`;

export function Count(props: CountProps) {
  return (
    <StyledCount>
      Se están mostrando <strong>{props.current}</strong> items
    </StyledCount>
  );
}

export default Count;
