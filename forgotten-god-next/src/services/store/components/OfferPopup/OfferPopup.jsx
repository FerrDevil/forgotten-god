import { useState } from "react"
import {OfferPopupForm, OfferPopupFormRadioButton, OfferPopupFormRadioTitle, OfferPopupFormRadioWrapper, OfferPopupFormSubmitButton, OfferPopupPaymentSelectHeader, OfferPopupWrapper} from "./offerPopup"

const OfferPopup = ({isVisible, setVisible}) => {
  const [paymentMethodId, setPaymentMethodId] = useState(1)

  const paymentMethods = [
    {
      id: 1,
      img: "",
      title: "Qiwi",
      value: "qiwi"
    }
  ]


  const sendPaymentOffer = async (event) => {
    event.preventDefault()
    const response = await fetch("https://forgotten-god.onrender.com/store/buyProductsFromCart", {
      method: "POST",
      body: JSON.stringify({paymentMethod: paymentMethods.find(method => method.id === paymentMethodId).value}),
      credentials: "include"
    })
    console.log(await response.json())
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