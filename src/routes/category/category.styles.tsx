import styled from "styled-components";

export let CategoryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  row-gap: 30px;
  margin-bottom: 50px;

  @media (max-width: 991px) {
    grid-template-columns: repeat(3, minmax(250px, 1fr));
  }

  @media (max-width: 767px) {
    grid-template-columns: repeat(2, minmax(250px, 1fr));
  }
  @media (max-width: 546px) {
    grid-template-columns: repeat(1, minmax(250px, 1fr));
  }
`;
// @media (min-width:768px) {
//     .container {
//         width: 950px;

export let Title = styled.h2`
  font-size: 38px;
  margin-bottom: 25px;
  text-align: center;
`;
