import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 1rem 0.7rem;
  display: flex;
  background-color: #d9d9d9;
  border-radius: 0.7rem;
  align-items: center;
  gap: 1rem;
  max-width: 500px;
  justify-content: space-between;
  margin-bottom: 1rem;

  @media (max-width: 480px) {
    max-width: 200px;
  }
`;

export const SearchInput = styled.input`
  display: flex;
  outline: none;
  border: none;
  background-color: transparent;
  width: 100%;

  &:focus {
    outline: none;
  }

  @media (max-width: 480px) {
    width: 100%;
    font-size: 0.8rem;
    text-overflow: ellipsis;
  }
`;
