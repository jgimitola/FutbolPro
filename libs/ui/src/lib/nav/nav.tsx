import Link from 'next/link';
import { StyledNav, StyledUl } from './styled';

export function Nav() {
  return (
    <StyledNav>
      <StyledUl>
        <Link href="/">FutbolPRO</Link>
        <Link href="/about">Acerca de</Link>
      </StyledUl>
    </StyledNav>
  );
}

export default Nav;
