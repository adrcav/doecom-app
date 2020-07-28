import styled from 'styled-components';

export const TermsCard = styled.div`
  width: 100%;
  max-height: 150px;
  padding: 20px;
  background-color: white;
  border-radius: 7px;
  box-shadow: 0 0 15px 1px rgba(0, 0, 0, .1);
  overflow-y: scroll;

  p {
    margin-bottom: 15px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  @media (max-width: 991px) {
    max-height: 300px;
  }
`;
