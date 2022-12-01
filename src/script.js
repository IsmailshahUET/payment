const API_ENDPOINT = 'http://localhost:3000/';

export const stripePaymentMethodHandler = async (data, cb)=>{
    const {amount, result} = data;
    if (result.error){
        cb(result);
    }else{
        const paymentResponse = await stripePayment({
            payment_method_id: result.paymentMethod.id,
            name: result.paymentMethod.billing_details.name,
            email: result.paymentMethod.billing.details.email,
            amount: amount
        });
        console.log(paymentResponse);
        cb(paymentResponse);
    }
}
const stripePayment = async data =>{
    const res = await fetch(`${API_ENDPOINT}/pay`,{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data),
    })
    return await res.json();
}