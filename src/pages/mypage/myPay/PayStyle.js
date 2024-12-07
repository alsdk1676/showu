import styled from 'styled-components';

const S = {};

  S.Table = styled.table`
    margin-top: 40px;
    width: 800px;
    height: auto;
    
  `

  S.Thead = styled.thead`
    font-size: 16px;
    background-color: black;
    font-weight: 700;
  `

  S.Tr = styled.tr`
    & th {
      color: white;
      padding: 10px;
      text-align: left;
    }
  `

  S.Tbody = styled.tbody`
    & td {
      padding: 20px 10px 20px 10px;
    }
  `

  S.ContentTr = styled.tr`
    &:hover {
      border-left: 2px solid #ffd400;
      background-color: rgb(255, 212, 0, 0.1);
    }


    & td {
      padding: 20px 10px 20px 10px; 
    }


    & td:last-of-type {
      color: #ffd400;
    }
  `

  S.Select = styled.select`
    color: white;
    font-size: 16px;
    font-weight: 700;
    background-color: black;

    border: none;
  `
  


export default S;