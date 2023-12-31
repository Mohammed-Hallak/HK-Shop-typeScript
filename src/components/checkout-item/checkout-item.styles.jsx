import styled from 'styled-components';

export let CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`;

export let ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;

  img {
    width: 100%;
    height: 100%;
  }
`;

export let BaseSpan = styled.span`
  width: 23%;
`;

export let Quantity = styled(BaseSpan)`
  display: flex;
`;

export let Arrow = styled.div`
  cursor: pointer;
`;

export let Value = styled.span`
  margin: 0 10px;
`;

export let RemoveButton = styled.div`
  padding-left: 12px;
  cursor: pointer;
`;
