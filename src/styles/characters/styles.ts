import Link from 'next/link';
import { styled } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 100%;
  background-color: #233329;
  flex-direction: column;
  display: flex;
  align-items: center;
`;

export const CardLink = styled(Link)`
  max-width: 430px;
  width: 100%;
`;

export const CardsContainer = styled.div`
  padding: 1rem;
  display: flex;
  gap: 1rem;
  flex: 1;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

export const RickAndMortyLogo = styled.img`
  width: 100%;
  object-fit: contain;
  padding: 0 1rem;
`;
