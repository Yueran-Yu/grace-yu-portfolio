import styled from 'styled-components';

export const SwitchButtonContainer = styled.div`
  .toggle {
    height: 24px;
    width: 46px;
    border-radius: 50px;
    margin: auto;
    background-image: linear-gradient(aqua, skyblue);
    position: relative;
    cursor: pointer;
  }

  .toggle.night {
    background-image: linear-gradient(midnightblue, rebeccapurple);
  }

  .notch {
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background: yellow;
    position: absolute;
    top: 2px;
    left: 2px;
    box-shadow: 0 0 2px yellow;
    z-index: 1;
    transition: all 0.3s ease;
  }

  .notch > .crater {
    background: burlywood;
    border-radius: 50%;
    position: absolute;
    opacity: 0;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.4) inset;
  }

  .night .crater {
    opacity: 0.4;
  }

  .crater:nth-child(1) {
    left: 3px;
    top: 4px;
    height: 2px;
    width: 4px;
    transform: rotate(-45deg);
  }

  .crater:nth-child(2) {
    left: 7px;
    top: 9px;
    height: 2px;
    width: 4px;
    transform: rotate(30deg);
  }

  .crater:nth-child(3) {
    right: 0;
    top: 4px;
    height: 5px;
    width: 10px;
    transform: rotate(45deg);
  }

  .night > .notch {
    background: whitesmoke;
    box-shadow: 0 0 3px whitesmoke;
    transform: translateX(22px);
  }

  .shape {
    position: absolute;
    background: whitesmoke;
    border-radius: 50%;
    transition: all 0.3s ease;
  }

  .shape.sm {
    height: 2px;
    width: 10px;
    top: 50%;
    left: 70%;
  }

  .shape.md {
    height: 3px;
    width: 13px;
    top: 25%;
    left: 35%;
    z-index: 2;
  }

  .shape.lg {
    height: 2px;
    width: 12px;
    bottom: 5px;
    left: 45%;
  }

  .night .shape {
    background: lightgray;
    box-shadow: 0 0 3px 1px violet;
  }

  .night .shape.sm {
    height: 2px;
    width: 2px;
    transform: translate(-25px, 0);
  }

  .night .shape.sm:first-of-type {
    transform: translate(-14px, -3px);
  }

  .night .shape.md {
    height: 5px;
    width: 5px;
    transform: translate(-6px, -2px);
  }

  .night .shape.lg {
    height: 3px;
    width: 3px;
    transform: translate(-5px, 0);
  }
`


