import styled from "styled-components";

import { Link } from "react-router-dom";

export let CategoryPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

export let Title = styled(Link)`
  font-size: 28px;
  margin-bottom: 25px;
  cursor: pointer;
`;

export let Preview = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;

  @media (max-width: 991px) {
    grid-template-columns: repeat(3, minmax(350px, 1fr));
  }

  @media (max-width: 767px) {
    grid-template-columns: repeat(2, minmax(250px, 1fr));
  }

  @media (max-width: 564px) {
    grid-template-columns: repeat(1, minmax(250px, 1fr));
    
  }
`;
