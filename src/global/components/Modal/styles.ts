import styled from 'styled-components';

interface ModalStyles {
  maxWidth: string;
  backgroundColor: string;
}

export const Container = styled.div<ModalStyles>`
  width: 100%;
  max-width: ${({ maxWidth }) => maxWidth || '500px'};
  height: 100%;
  padding: 2rem;
  margin: 1rem;
  display: flex;
  flex-direction: column;
  border-radius: 1rem;
  background-color: ${({ backgroundColor }) => backgroundColor};
  z-index: 999;
  position: relative;

  @media (max-width: 1200px) {
    padding: 1rem;
    margin: 0.5rem;
    max-width: 90%;
    height: auto;
  }

  @media (max-width: 480px) {
    max-width: 100%;
  }
`;

export const CloseButton = styled.button`
  cursor: pointer;
  position: absolute;
  right: 1rem;
  top: 1rem;
  color: #fff;
  background-color: transparent;
  border: none;

  @media (max-width: 768px) {
    right: 0.5rem;
    top: 0.5rem;
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    svg: 0.5rem;
  }
`;
