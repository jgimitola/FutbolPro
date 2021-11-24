/* eslint-disable-next-line */
export interface CardProps {
  text: string;
  imageUrl: string;
  href: string;
  mode?: string;
}

export interface Country {
  name: string;
  code: string;
  flag: string;
}

export interface Team {
  id: number;
  name: string;
  logo: string;
}

export interface Player {
  id: number;
  name: string;
  photo: string;
}
