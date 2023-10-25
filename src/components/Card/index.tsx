'use client';

import * as S from './styles';
import { FC } from 'react';
import { CharacterTypes } from '@/services/GET/types';
import { IColors } from './styles';
import { BiPlanet } from 'react-icons/bi';

export interface CardProps
  extends Pick<CharacterTypes, 'image' | 'name' | 'status' | 'origin' | 'id'> {}

export const Card: FC<CardProps> = ({
  image,
  name,
  status,
  origin,
  id,
}: CardProps) => {
  return (
    <S.View>
      <S.Container key={id}>
        <S.DataCharacter>
          <S.CharacterImage
            src={image}
            alt="person image"
            width={150}
            height={150}
          />
          <S.Name>{name}</S.Name>
        </S.DataCharacter>

        <S.DataPerson>
          <S.Dimension>
            <BiPlanet size={20} color="#5D595E" />
            {origin.name}
          </S.Dimension>
          <S.Status typeColor={status as IColors}>{status}</S.Status>
        </S.DataPerson>
      </S.Container>
    </S.View>
  );
};
