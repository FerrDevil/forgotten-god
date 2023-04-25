import { useState } from "react"
import {OfferPopupForm, OfferPopupFormRadioButton, OfferPopupFormRadioTitle, OfferPopupFormRadioWrapper, OfferPopupFormSubmitButton, OfferPopupPaymentSelectHeader, OfferPopupWrapper} from "./offerPopup"

const OfferPopup = ({isVisible, setVisible}) => {
  const [paymentMethodId, setPaymentMethodId] = useState(1)

  const paymentMethods = [
    {
      id: 1,
      img: "",
      title: "Qiwi",
    }
  ]


  const sendPaymentOffer = (event) => {
    event.preventDefault()
    setVisible(false)
  }
  return (
    <OfferPopupWrapper $isVisible={isVisible}>
      <OfferPopupPaymentSelectHeader>Выберите способ оплаты:</OfferPopupPaymentSelectHeader>
      <OfferPopupForm>
        {paymentMethods.map((method => (
          <OfferPopupFormRadioWrapper key={method.id}>
            <OfferPopupFormRadioButton checked={method.id === paymentMethodId} onChange={() => {setPaymentMethodId(method.id)}}/>
            <OfferPopupFormRadioTitle>{method.title}</OfferPopupFormRadioTitle>
          </OfferPopupFormRadioWrapper>
        )))}
        <OfferPopupFormSubmitButton onClick={sendPaymentOffer}>Оформить заказ</OfferPopupFormSubmitButton>
      </OfferPopupForm>
    </OfferPopupWrapper>
  )
}

export default OfferPopup