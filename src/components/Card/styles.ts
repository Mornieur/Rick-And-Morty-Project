import { styled } from 'styled-components';

interface CardProps {
  typeColor: IColors;
}

export type IColors = 'Dead' | 'Alive' | 'unknown';

type IStatusColors = { [Key in IColors]: string };

const statusColors: IStatusColors = {
  Dead: '#C63800',
  Alive: '#439DFD',
  unknown: '#F5F0F6',
};

export const View = styled.div`
  padding-top: 1.5rem;
  max-width: 430px;
  width: 100%;
  height: 235px;
  transition: transform 0.3s ease-out;

  &:hover {
    transform: translateY(-10px);
  }
`;

export const Container = styled.div`
  border-radius: 1rem;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  background-color: #8cc084;
  height: 100%;
  gap: 1rem;
  cursor: pointer;
`;

export const DataCharacter = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  position: relative;
`;

export const DataPerson = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1rem;
  width: 100%;
  padding: 1.7rem 0.5rem 0.5rem 0.5rem;
  height: 100%;
`;

export const CharacterImage = styled.img`
  object-fit: contain;
  border-radius: 50%;
  transform: translateY(-27px);
  box-shadow: 7px 15px 15px 1px #4b4b53;
`;

export const Name = styled.p`
  font-size: 1rem;
  display: flex;
  text-align: center;
  background-color: #f5f0f6;
  border-radius: 7px;
  padding: 0.5rem;
  font-size: 1rem;
  font-weight: 600;
  color: #5d595e;
  position: absolute;
  bottom: 0.3rem;
`;

export const Status = styled.p<CardProps>`
  padding: 0.7rem 2rem;
  display: flex;
  justify-content: center;
  text-align: center;
  background-color: ${({ typeColor }) => statusColors[typeColor]};
  border-radius: 7px;
  font-weight: 600;
  font-size: 1rem;
  color: ${({ typeColor }) =>
    typeColor === 'unknown' ? '#000000' : '#ffffff'};
`;

export const Dimension = styled.p`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  text-align: center;
  padding: 0.7rem 0.5rem;
  border-radius: 5px;
  background-color: #c5dbcd;
  color: #009f81;
  font-weight: 600;
  width: 100%;
`;
