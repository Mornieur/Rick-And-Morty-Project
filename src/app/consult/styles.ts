import { styled } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: #233329;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 2.5rem;
  flex-wrap: wrap;
  position: relative;

  @media (max-width: 1200px) {
    overflow-y: auto;
  }
`;

export const HeaderProfile = styled.header`
  display: flex;
  justify-content: flex-start;
  justify-content: space-between;
`;

export const NameBox = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 1rem 3rem;
  color: #5d595e;
  background-color: #d9d9d9;
  border-radius: 0.5rem;
  max-width: 280px;
  width: 100%;
  max-height: 4rem;
  height: 100%;
  font-weight: 600;

  @media (max-width: 480px) {
    padding: 1rem;
    max-width: 15rem;
  }
`;
export const StatusBox = styled.p`
  display: flex;
  justify-content: center;
  text-align: center;
  padding: 1rem;
  color: #fff;
  background-color: #d9d9d9;
  border-radius: 0.5rem;
  height: 3rem;
  font-weight: 600;
  max-width: 130px;
  width: 100%;
  background-color: #439dfd;
  align-self: flex-end;
`;

export const HeaderInformation = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding-bottom: 3rem;
`;

export const CharacterImage = styled.img`
  border-radius: 50%;
  transform: translateY(-60px);

  @media (max-width: 480px) {
    width: 120px;
    height: 120px;
    transform: translateY(-50px);
  }
`;

export const CharactersEpisode = styled.img`
  border-radius: 50%;

  @media (max-width: 1200px) {
    width: 100px;
    height: 100px;
  }
`;

export const Information = styled.article`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 0.7rem;
`;

export const Title = styled.h3`
  color: #fff;
  font-weight: 600;
`;

export const Description = styled.p`
  color: #fff;
  font-weight: 600;
  font-size: 1rem;
  padding: 0.5rem 2rem;
  width: 100%;
  background-color: #5d595e;
  border-radius: 0.5rem;
  display: flex;
  justify-content: space-between;
  text-align: center;
  align-items: center;
  position: relative;

  .arrowIcon {
    position: absolute;
    right: 1rem;
    cursor: pointer;

    @media (max-width: 480px) {
      position: relative;
    }
  }

  @media (max-width: 480px) {
    justify-content: space-between;
  }
`;

export const HeaderEpisodes = styled.header`
  width: 100%;
  padding: 0.5rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Episodes = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1.3rem;
  height: 100%;
  flex-grow: 1;
  overflow: auto;
  cursor: pointer;
  margin-top: 1rem;
`;

export const Characters = styled.p`
  font-size: 1rem;
  font-weight: 600;
  color: #fff;
  display: flex;
  justify-content: center;
  text-align: center;
  padding: 1rem 3rem;
  border-radius: 0.5rem;
  background-color: #009f81;

  @media (max-width: 480px) {
    padding: 1rem 1rem;
  }
`;

export const BackButton = styled.button`
  display: flex;
  justify-content: center;
  text-align: center;
  position: absolute;
  top: 1rem;
  left: 1rem;
  color: #fff;
  background-color: transparent;
  border: none;
`;
