import { styled } from 'styled-components';

export const Container = styled.div`
  position: absolute;
  max-width: 50rem;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem;

  p {
    color: #fff;
    font-size: 1rem;
    font-weight: 600;

    @media (max-width: 400px) {
      font-size: 0.8rem;
    }
  }

  top: 50%;
  transform: translate(-50%, -50%);
  left: 50%;
`;

export const HomeButton = styled.button`
  display: flex;
  justify-content: center;
  text-align: center;
  border-radius: 0.5rem;
  padding: 0.5rem;
  border: none;
  max-width: 300px;
  width: 100%;
  font-size: 1rem;
  font-weight: 600;
  background-color: #97ce4c;
  color: #fff;
`;

export const ErrorImage = styled.img`
  max-width: 60rem;
  width: 100%;
  object-fit: contain;

  @media (max-width: 810px) {
    size: 10rem;
  }
`;
