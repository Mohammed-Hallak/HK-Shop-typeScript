import styled from "styled-components";

export let SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justive-content: center;

  h2 {
    margin: 10px 0;
    width: 100%;
    text-align: center;
    font-size: 30px;
  }
`;
export let FormContainer = styled.form`
  width: 50%;

  @media (max-width: 991px) {
    width: 70%;
  }
  @media (max-width: 564px) {
    width: 90%;
  }
`;
// /* Meduim */
