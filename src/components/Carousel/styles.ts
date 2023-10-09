import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const Button = styled.button`
  cursor: pointer;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  color: #fff;
`;

export const Content = styled.div`
  display: flex;
  gap: 1rem;
  width: calc(200px * 3);
  background-color: white;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  overflow: hidden;
  margin: 0 auto;

  border-top: 2px solid #fff;
  border-bottom: 2px solid #fff;
  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
`;

export const DataItems = styled.nav`
  display: flex;
  width: 100%;
  -webkit-overflow-scrolling: touch;
  aspect-ratio: 2/1;
  white-space: nowrap;
  scroll-snap-align: center;
  overflow-x: scroll;
  scroll-behavior: smooth;
  gap: 1rem;

  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

export const Slide = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-y: hidden;
  gap: 1rem;
  flex-shrink: 0;
`;
