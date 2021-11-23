import Link from 'next/link';

import { CardProps } from '@futbol-pro/types';
import { StyledCard, CardImage, CardText } from './styled';

export function Card(props: CardProps) {
  return (
    <StyledCard>
      <CardImage src={props.imageUrl} alt="" />
      <Link href={props.href}>
        <CardText>{props.text}</CardText>
      </Link>
    </StyledCard>
  );
}

export default Card;
