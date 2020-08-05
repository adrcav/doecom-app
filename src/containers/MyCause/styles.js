import styled from 'styled-components';

export const CausePreview = styled.div`
  width: 100%;
  position: relative;
  z-index: 10;

  .CausePreview__alert {
    padding: .5rem 1rem;
    margin: 0;
    background-color: rgba(0, 0, 0, .6);
    border-radius: 4px;

    position: absolute;
    top: 7px;
    right: 7px;
    z-index: 11;

    display: flex;
    align-items: center;
    pointer-events: none;

    .CausePreview__icon {
      color: white;
      margin-right: 5px;
    }

    .CausePreview__text {
      font-size: .9rem;
      color: white;
      font-weight: 500;
      margin: 0;
    }
  }

  @media (min-width: 991px) {
    position: fixed;
    left: 10px;
    bottom: 10px;
    width: 300px;
  }

  @media (min-width: 1400px) {
    width: 400px;
  }
`;

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
