import styled from "styled-components";

export let SignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  text-align: center;

  h2 {
    margin: 10px 0;
  }
`;
export let FormContainer = styled.form`
  width: 50%;
  margin: auto;

  @media (max-width: 767px) {
    width: 70%;
  }

  @media (max-width: 564px) {
    width: 90%;
  }
`;

export let ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 767px) {
    display: block;
  }
`;
