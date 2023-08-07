import styled from 'styled-components'

export const DivStyled = styled.div`
  .cycle-container {
    background-color: #fff;
    border-radius: 50%;
    width: 42px;
    height: 42px;
    margin-right: 8px;
    user-select: none;
    :hover {
      background-color: #e3e5e5;
    }
  }
  .icon-container {
    display: flex;
    justify-content: center;
    align-content: center;
    height: 100%;
    width: 100%;
    cursor: pointer;
  }
  .popup-container {
    background-color: #fff;
    border-radius: 6px;
    box-shadow: 2rem 2rem 2rem 2rem rgb(136 152 170 / 15%);
    width: ${(props) => props.width};
    position: fixed;
    margin-top: ${(props) => props.mgTop};
    margin-left: ${(props) => props.mgLeft};
    z-index: 10;
    user-select: text;
    max-height: 90%;
    min-height: 200px;
    overflow: auto;
  }
  .height90pc {
    height: 90%;
  }
  .avatar-container {
    background-color: #fff;
    :hover {
      background-color: #e3e5e5;
      border-radius: 8px;
    }
  }
  .cursor-pointer {
    cursor: pointer;
  }
  .chat-box-container {
    position: fixed;
    bottom: 0;
    right: 100px;
    width: 320px;
    height: 420px;
    background-color: #434343;
    border-radius: 10px 10px 0 0;
    z-index: 100;
  }
  .chat-box-header-container {
    height: 12%;
    width: 100%;
    background-color: #434343;
    border-radius: 10px 10px 0 0;
    display: flex;
    position: relative;
    justify-content: space-between;
    align-items: center;
  }
  .horizontal-line {
    height: 1px;
    background-color: #d9d9d9;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
  }
  .chat-box-content-container {
    position: absolute;
    top: 12%;
    width: 320px;
  }
  .chat-box-children-content-container {
    display: flex;
    justify-content: space-between;
    color: #fff;
    width: 250px;
    margin: 4px 0 0 10px;
  }
  .chat-box-content {
    padding: 8px;
    overflow: hidden;
    word-wrap: break-word;
    line-height: 1.2;
    max-width: 230px;
  }
  .input-chat-box {
    position: absolute;
    bottom: 0;
    right: 10px;
    left: 10px;
  }
`
export const SpanStyled = styled.span`
  .chat-box-text-header {
    color: #fff;
    font-size: 18px;
    font-weight: 500;
    position: absolute;
    margin: -14px 0 0 8px;
  }
  .red-circle-container {
    height: 20px;
    width: 20px;
    position: absolute;
    border-radius: 50%;
    background-color: red;
    margin: -7px 0 0 26px;
  }
  .counter-notification {
    position: absolute;
    color: #fff;
    margin: -21px 0 0 6px;
  }
`
