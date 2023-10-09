import styled from 'styled-components';

interface IContainer {
  background: any;
}

export const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #233329;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Container = styled.div<IContainer>`
  position: absolute;
  overflow: hidden;
  max-width: 300px;
  width: 100%;
  height: 100%;
  padding: 0;
  display: flex;
  background-color: ${({ background }) => background};

  .rick-container {
    display: flex;
    justify-content: center;

    div {
      width: 100px;
      height: 100px;
      display: flex;
      justify-content: center;
      margin: 0 auto;
      align-items: center;
      position: relative;

      img {
        object-fit: contain;
        width: 5rem;
        height: 5rem;
      }
    }
  }

  .refresh {
    padding: 10px;
    position: absolute;
    background: rgba(0, 0, 0, 0.4);
    border-radius: 10px;
    width: 20px;
    height: 20px;
    top: 10px;
    right: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  article {
    display: flex;
    justify-content: center;
    width: 100%;
    text-align: center;
    font-size: 2rem;

    display: flex;

    h4 {
      color: white;
      padding-top: 1.3rem;
    }
  }

  section {
    margin-left: -2.5rem;
    display: flex;
    justify-content: center;
    align-items: left;
    gap: 1rem;
    padding-top: 1rem;
    div {
      color: white;

      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;
export const LoadingContainer = styled.div`
  width: 600px;
  height: 400px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 4rem;
`;
