// MD - 메인페이지 스타일
import styled, { css } from "styled-components";

const S = {};

const flexStyle = css`
  display: flex;
  align-items: center;
`

  S.MainWrapper = styled.div`
    background-color: #000;
    display: flex;
    flex-direction: column;
  `

  S.MdTitle = styled.div`
    ${flexStyle}
    flex-direction: column;
    
    & .md-title {
        font-weight: bold;
        font-size: 30px;
        text-align: center;
        margin-top : 50px;
        color: #ffd400; 
      }
      
    & .icon1 {
        margin-top: 5px;
        color: #ffd400;
        font-size: 20px;
      }

      path {
        color: #ffd400;
      }
    `

  S.BestWrapper = styled.div`
    margin: 0 auto;
  
  `
  S.BestTitle = styled.div`

    & .best-title {
        font-size: 30px;
        font-weight: bold;
        color : #fff;
      }
  `

  S.BestItems = styled.div`
    display: grid;
    grid-template-columns: auto 1fr auto; 
    align-items: center;
    margin-top: 30px;
    column-gap: 20px; 
  `

  S.LeftIconWrapper = styled.div`
    font-size: 40px;
    cursor: pointer;
    justify-self: end;
    margin-right: 10px;
  `

  S.RightIconWrapper = styled.div`
    font-size: 40px;
    cursor: pointer;
    justify-self: start;
    margin-left: 10px;
  `

  S.BestListWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr); 
    grid-gap: 50px;
    justify-items: center;
    width: 1090px; 
  `

  S.Best = styled.div`

    & .best-name {
        font-size: 16px;
        margin-top: 5px;
    }

    & .best-price {
        font-size: 18px;
        font-weight: bold;
        margin-top: 5px;
    }

    & .image {
      width: 300px;
      height: 300px;
    }
  `

  S.CategoryButton = styled.div` // 상단 버튼들
    display: flex;
    justify-content: space-between;
    padding: 10px 20px;
    width: 1140px;
    margin: 50px auto 0;
    
    div { // 버튼 간격
      display: flex;
      gap: 8px; 
      margin-left: 20px;
    }

    button { // 버튼 스타일
      border-radius: 30px;
      padding: 10px 15px;
      background-color: black;
      color: ${({ theme }) => theme.PALLETE.white};
      border: 1px solid #ffd400;
      cursor: pointer;
    
      &:hover { // 버튼 호버
        background-color: #ffd400;
        color: ${({ theme }) => theme.PALLETE.black};
      }
    }
  `

  S.MdWrapper = styled.div`
    margin-top: 30px;
    margin-left: 20px;

    & .md-list {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 50px;
        width: 1090px;
        margin: 0 auto;
      }
    `

  S.Md = styled.image`
  
    & img {
        width: 300px;
        height: 300px;
      }

    & .md-name {
        font-size: 16px;
        margin-top: 5px;
    }

    & .md-price {
        font-size: 18px;
        font-weight: bold;
        margin-top: 5px;
    }
  `

  S.ButtonWrapper = styled.div `
    display: flex;
    justify-content: center;
    margin: 100px auto;
  
    & button {
      width: 280px;
      height: 55px;
      border: none;
      border-radius: 50px;
      background-color: #fff;
      color: #000;
      font-size: 20px;
      font-weight: bold;
      text-align: center;
      margin: 0;
      position: relative;
  
      &:hover {
        background-color: #ffd400;
      }
    }

      & .icon2 {
        position: absolute;
        bottom: 20px;
        right: 40px;
      }

      path {
        color : #000;
      }

      svg {
        width: 16px;
        height: 16px;
      }
  `
  
export default S;

