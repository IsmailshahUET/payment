import React, { useState } from 'react';
import { CardElement, useElements, useStripe, } from '@stripe/react-stripe-js';
import axios from "axios";


const CARD_OPTIONS = {
    iconStyle: "solid",
    style: {
        base: {
            iconColor: "blue",
            color: "white",
            fontSize: "16px",
        },
        invalid: {
            iconColor: "red",
            color: "red"
        }
    }
}

export default function PaymentForm() {
    const [success, setSuccess] = useState(false)
    const stripe = useState()
    const elements = useElements()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const { error, PaymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement)
        })

        if (!error) {
            try {
                const { id } = PaymentMethod
                const response = await axios.post("http://localhost:3000/", {
                    amount: 1000,
                    id
                })

                if (response.data.success) {
                    console.log("Successful payment")
                    setSuccess(true)
                }

            } catch (error) {
                console.log("Error", error)
            }
        } else {
            console.log(error.message)
        }
    }

    return (

        <>
            {!success ?
                <form onSubmit={handleSubmit}>
                    <fieldset className='FormGroup'>
                        <div className='FormRow'>
                            <CardElement options={CARD_OPTIONS} />
                        </div>
                    </fieldset>
                    <button>Pay</button>
                </form>
                :
                <div>
                    <h2>You just bought a sweet</h2>
                </div>
            }

        </>
    )
}
