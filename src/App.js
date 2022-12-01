// // import './App.css';


// // import StripeContainer from './components/StripeContainer';
// // import React, { useState } from 'react';

// // function App() {

// //   const [showItem, setShowItem] = useState(false)

// //   return (
// //     <div className='App'>
// //       <h1>The Testing Stripe</h1>
// //       {showItem ? <StripeContainer /> : <><h3>$20.00</h3>
// //       <button onClick={() => setShowItem(true)}>Purchase</button></>}

// //     </div>
// //   );
// // }

// // export default App;


// import React, { useState } from 'react';
// // import ".style.css";
// import { Elements } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";
// import CheckoutForm from "./CheckoutForm";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './script';

// const stripePromise = loadStripe("pk_test_51L1SAQGDqg8YJV6UOs6uIGrgsMK1T2CNVjZSBjRyNw9Tdcwm2rDd5kbXAKpyRTY7QyrgvAmfkRRrQ5uYRHqDxA6c00sL9L8lx6");

// const successMesage = () => {
//   return (
//     <div className='success-msg'>
//       <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-check2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
//         <path fill-rule="evenodd" d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
//       </svg>
//       <div className='title'>Payment Successful</div>
//     </div>
//   )
// }

// function cart() {
//   return (
//     <>
//       <h4 className="d-flex justify-content-between align-items-center mb-3">
//         <span className="text-muted">Your cart</span>
//         <span className="badge bg-secondary badge-pill">3</span>
//       </h4>
//       <ul className="list-group mb-3">
//         <li className="list-group-item d-flex justify-content-between lh-condensed">
//           <div>
//             <h6 className="my-0">Product name</h6>
//             <small className="text-muted">Brief description</small>
//           </div>
//           <span className="text-muted">$1200</span>
//         </li>
//         <li className="list-group-item d-flex justify-content-between lh-condensed">
//           <div>
//             <h6 className="my-0">Second product</h6>
//             <small className="text-muted">Brief description</small>
//           </div>
//           <span className="text-muted">$800</span>
//         </li>
//         <li className="list-group-item d-flex justify-content-between lh-condensed">
//           <div>
//             <h6 className="my-0">Third item</h6>
//             <small className="text-muted">Brief description</small>
//           </div>
//           <span className="text-muted">$500</span>
//         </li>
//         <li className="list-group-item d-flex justify-content-between bg-light">
//           <div className="text-success">
//             <h6 className="my-0">Promo code</h6>
//             <small>EXAMPLECODE</small>
//           </div>
//           <span className="text-success">$500</span>
//         </li>
//         <li className="list-group-item d-flex justify-content-between">
//           <span>Total (USD)</span>
//           <strong>$2000</strong>
//         </li>
//       </ul>
//     </>
//   );
// }

// function App() {
//   const [paymentCompleted, setPaymentCompleted] = useState(false);

//   return (
//     <div className='container'>
//       <div className='py-5 text-center'>
//         <h4>Strip Integration </h4>
//       </div>
//       <div className='row s-box'>
//         {paymentCompleted ? successMesage() : <>
//           <div className='col-md-5 order-md-2 mb-4'>
//             {cart()}
//           </div>
//           <div className='col-md-7 order-md-1'>
//             <Elements stripe={stripePromise}>
//               <CheckoutForm amount={3000} setPaymentCompleted={setPaymentCompleted} />
//             </Elements>
//           </div>
//         </>
//         }
//       </div>
//     </div>
//   );
// }

// export default App;