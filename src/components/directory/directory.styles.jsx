import styled from "styled-components";

export let DirectoryContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (max-width: 991px) {
    display: grid;
    grid-template-columns: repeat(2, minmax(350px, 1fr));
    gap: 20px;
  }
  @media (max-width: 767px) {
    grid-template-columns: repeat(1, minmax(350px, 1fr));
  }
`;
