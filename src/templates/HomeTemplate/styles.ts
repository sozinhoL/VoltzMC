import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 2.5rem 2rem;
  height: 100vh;
  max-width: 992px;

  @media (max-width: 1160px) {
    margin-top: 7rem;
  }

  @media (max-width: 768px) {
    padding: 1rem;
  }

  section {
    flex: 1;
    display: grid;
    gap: 1rem;
    align-content: center;
    margin-top: 2rem;
    justify-content: center;
    text-align: center;

    @media (max-width: 960px) {
      gap: 1.5rem;
    }

    @media (max-width: 768px) {

    }
  }
`;
