import { useState } from "react"
import {OfferPopupForm, OfferPopupFormRadioButton, OfferPopupFormRadioTitle, OfferPopupFormRadioWrapper, OfferPopupFormSubmitButton, OfferPopupPaymentSelectHeader, OfferPopupWrapper} from "./styles"
import {useRouter} from "next/navigation"


const OfferPopup = ({isVisible, setVisible}) => {
  const [paymentMethodId, setPaymentMethodId] = useState(1)
  const router = useRouter()

  const paymentMethods = [
    {
      id: 1,
      img: "",
      title: "Qiwi",
      value: "qiwi"
    }
  ]


  const sendPaymentOffer = async (event) => {
    event.preventDefault() // https://forgotten-god.onrender.com
    const refreshResponse = await fetch(`${"https://forgotten-god.onrender.com"}/auth/refresh`, {method: "POST", credentials: "include"})
    const response = await fetch(`${"https://forgotten-god.onrender.com"}/store/buyProductsFromCart`, {
      method: "POST",
      body: JSON.stringify({paymentMethod: paymentMethods.find(method => method.id === paymentMethodId).value}),
      credentials: "include"
    })
    setVisible(false)
    router.push("/")
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