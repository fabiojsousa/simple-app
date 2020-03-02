import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  padding: 5px;
  margin: 0 auto;

  main {
    max-width: 800px;
    display: flex;
    justify-content: center;
    flex-direction: column;


    #stopwatch {
      color: #ffffff;
      margin-bottom: 60px;
      text-align: center;
      /* padding-left: 35px; */

      h1 {
        font-weight: 300;
        font-size: 85px;
      }
    }

    #buttons {
      display: flex;
      justify-content: space-between;
      padding: 0 25px;
      margin-top: 15px;

      div {
        display: flex;
        justify-content: center;
        align-items: center;

        button {
          width: 70px;
          height: 70px;
          border-radius: 50%;
          border: 2px solid black;
        }
      }

      div.leftButton {
        button {
          background-color: ${props => props.reseted === 'no' ? '#333333' : '#1C1C1E'};
          color: ${props => props.reseted === 'no' ? '#ffffff' : '#999999'};
          font-weight: 500;
          box-shadow: 0px 0px 0px 2px ${props => props.reseted === 'no' ? '#333333' : '#1C1C1E'} ;

          :active {
          background-color: ${props => props.reseted === 'no' ? '#1B1B1B' : '#0F0F11'};
            box-shadow: 0px 0px 0px 2px ${props => props.reseted === 'no' ? '#1B1B1B' : '#0F0F11'};
          }
        }
      }

      div.rightButton {
        button {
          background-color: ${props => props.running === 'on' ? '#330000' : '#003300'};
          color: ${props => props.running === 'on' ? '#cc6633' : '#66cc66'};
          font-weight: 500;
          box-shadow: 0px 0px 0px 2px ${props => props.running === 'on' ? '#330000' : '#003300'};
        }
      }
    }

    #laps {
      margin-top: 20px;
    }
  }
`;


