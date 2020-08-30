import styled from 'styled-components';
import { rgba } from 'polished';

export const Container = styled.div`
  width: 100%;
  padding-top: 57.53%;
  position: relative;
  overflow: hidden;
  border-radius: 7px;
  background-color: #eaeaea;
  box-shadow: 0 -10px 5px -5px ${rgba('#E3E3E3', 0.3)};
  transition: all .3s ease-in-out;

  &:after {
    content: "";
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url('${props => props.image}');
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    transition: all .25s ease-in-out;
    transition-timing-function: cubic-bezier(.57,.21,.69,1.25);
  }

  .cause-data {
    width: 100%;
    padding: 20px 15px 15px;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 11;
    background: rgb(0, 0, 0);
    background: linear-gradient(0deg, rgba(0, 0, 0, .65) 0%, rgba(0, 0, 0, 0) 100%);
    display: flex;
    align-items: center;
    transition: all .3s ease-in-out;

    .cause-avatar {
      width: 30px;
      height: 30px;
      background-color: #eaeaea;
      border-radius: 50%;
      border: 2px solid white;
      margin-right: 7px;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
    }

    .cause-name {
      margin: 0;
      color: white;
      font-weight: 500;
      flex: 1;
      word-break: break-all;

      display: flex;
      align-items: center;
    }
  }

  &:hover {
    box-shadow: 0 -10px 5px -5px ${rgba('#E3E3E3', 0.4)};

    &:after {
      transform: scale(1.05);
    }

    .cause-data {
      background: linear-gradient(0deg, rgba(0, 0, 0, .7) 0%, rgba(0, 0, 0, 0) 100%);
    }
  }
`;
