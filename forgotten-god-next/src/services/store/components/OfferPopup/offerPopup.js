import styled from "styled-components";

export const OfferPopupWrapper = styled.div`
  opacity: ${props => props.$isVisible? 1 : 0};
  pointer-events: ${props => props.$isVisible? "all" : "none"};
  user-select: ${props => props.$isVisible? "all" : "none"};
  transition: opacity 1s;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 10px;
  color: #ccc;
  width: 60%;
  display: flex;
  flex-direction: column;
  gap: 50px;
  background-color: #242424;
  border-radius: 10px;

`
export const OfferPopupPaymentSelectHeader = styled.h2`
  font-size: 28px;
  margin-left: 20px;
`
export const OfferPopupForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 30px;
`
export const OfferPopupFormRadioWrapper = styled.label`
  display: flex;
  gap: 30px;
`
export const OfferPopupFormRadioButton = styled.input.attrs(props => ({
  type: "radio"
}))`
`

export const OfferPopupFormRadioTitle = styled.span`
  font-size: 20px;
`

export const OfferPopupFormSubmitButton = styled.button`
  all: unset;
  font-size: 20px;
  color: #ccc;
  border: 1px solid transparent;
  border-radius: 3px;
  padding: 2px 30px;
  width: auto;
  height: 50px;
  text-align: center;
  text-transform: uppercase;
  background-color: #780c0c;
  transition: border-color, color, background-color 0.3s ease-in-out ;
  cursor: pointer;

  &:hover, &:focus-visible{
      border-color: #780c0c;
      color: #780c0c; 
      background-color: #bbb;
  }
`


