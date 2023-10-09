import styled from 'styled-components';

interface ModalInformationStyles {
  isModalOpen: boolean;
}

export const ModalInformation = styled.div<ModalInformationStyles>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 9999;
  padding: 1rem;
`;

export const EpisodeContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  justify-content: space-evenly;
`;

export const Info = styled.p`
  font-size: 1rem;
  font-weight: 600;
  color: #fff;
  display: flex;
  justify-content: center;
  text-align: center;
  padding: 1rem 3rem;
  border-radius: 0.5rem;
  background-color: #009f81;
`;

export const CharactersEpisode = styled.img`
  border-radius: 50%;

  @media (max-width: 768px) {
    width: 100px;
    height: 100px;
  }
`;
