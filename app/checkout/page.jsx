// app/checkout/page.jsx
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, Info, CreditCard, Star } from "lucide-react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { useRouter } from "next/navigation";

const CheckoutPage = () => {
  const router = useRouter(); 
  const [paymentMethod, setPaymentMethod] = useState("credit-card");
  const [saveCard, setSaveCard] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [processingMessage, setProcessingMessage] = useState("");
  
  // Form data states
  const [cardNumber, setCardNumber] = useState("");
  const [cardHolder, setCardHolder] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [cvv, setCvv] = useState("");
  
  // In a real app, this would come from the previous page or API
  const bookingDetails = {
    room: {
      id: 1,
      title: "Superior Family Room",
      location: "Hotel room in Ueno",
      rating: 4.84,
      reviews: 324,
      guests: 6,
      beds: 4,
      bedrooms: 2,
      baths: 1,
      price: 86,
      totalNights: 4,
      subtotal: 344, // 86 * 4
      discount: 87,
      serviceFee: 12,
      total: 273,
      image: "/images/room1.jpg",
    },
    dates: {
      checkin: "July 17",
      checkout: "21",
      year: "2022",
    },
    guests: 2,
  };

  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
  };

 // For handleCreditCardSubmit
const handleCreditCardSubmit = (e) => {
    e.preventDefault();
    // Simulate credit card processing
    simulatePaymentProcessing("Processing credit card payment...");
  };
  
  // For handlePayPalSubmit
  const handlePayPalSubmit = () => {
    // Simulate PayPal processing
    simulatePaymentProcessing("Redirecting to PayPal...");
  };
  
  // For handleGooglePaySubmit
  const handleGooglePaySubmit = () => {
    // Simulate Google Pay processing
    simulatePaymentProcessing("Opening Google Pay...");
  };
  
  // Update the simulatePaymentProcessing function
  const simulatePaymentProcessing = (message) => {
    setIsProcessing(true);
    setProcessingMessage(message);
    
    // Simulate API delay
    setTimeout(() => {
      setIsProcessing(false);
      setProcessingMessage("");
      // Redirect to success page
      router.push("/checkout/success");
    }, 2000);
  };
  const renderCreditCardForm = () => (
    <form onSubmit={handleCreditCardSubmit}>
      <div className="space-y-4">
        <div>
          <input
            type="text"
            placeholder="Card number"
            className="w-full p-4 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            required
          />
        </div>
        
        <div>
          <input
            type="text"
            placeholder="Card holder"
            className="w-full p-4 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            value={cardHolder}
            onChange={(e) => setCardHolder(e.target.value)}
            required
          />
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Expiration date"
            className="w-full p-4 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            value={expirationDate}
            onChange={(e) => setExpirationDate(e.target.value)}
            required
          />
          
          <input
            type="text"
            placeholder="CVV"
            className="w-full p-4 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            required
          />
        </div>
        
        <div className="flex items-center">
          <input
            type="checkbox"
            id="save-card"
            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            checked={saveCard}
            onChange={() => setSaveCard(!saveCard)}
          />
          <label htmlFor="save-card" className="ml-2 block text-sm text-gray-700">
            Save my card for future reservation
          </label>
        </div>
      </div>
      
      <hr className="border-gray-200 my-8" />
      
      <div className="mt-4">
        <p className="text-sm text-gray-600 mb-6">
          By selecting the button below, I agree to the <a href="#" className="underline">Property Rules</a>, <a href="#" className="underline">Terms and Conditions</a>, <a href="#" className="underline">Privacy Policy</a> and <a href="#" className="underline">COVID-19 Safety Requirements</a>.
        </p>
        
        <button
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-4 rounded-md font-medium disabled:opacity-70 disabled:cursor-not-allowed"
          disabled={isProcessing}
        >
          {isProcessing ? processingMessage : "Confirm and pay"}
        </button>
      </div>
    </form>
  );

  const renderPayPalOption = () => (
    <div className="mt-6">
      <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
        <div className="mb-4">
          <Image 
            src="/images/paypal-logo.png" 
            alt="PayPal Logo" 
            width={120} 
            height={30} 
            className="mx-auto"
            // Fallback if image doesn't exist
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjMyIiB2aWV3Qm94PSIwIDAgMTAwIDMyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaW5ZTWluIG1lZXQiPjxwYXRoIGZpbGw9IiMwMDMwODciIGQ9Ik0gMTIuMjM3IDIuNDQ0IEwgNC40MzcgMi40NDQgQyAzLjkzNyAyLjQ0NCAzLjQzNyAyLjg0NCAzLjMzNyAzLjM0NCBMIDAuMjM3IDIzLjM0NCBDIDAuMTM3IDIzLjc0NCAwLjQzNyAyNC4wNDQgMC44MzcgMjQuMDQ0IEwgNC41MzcgMjQuMDQ0IEMgNS4wMzcgMjQuMDQ0IDUuNTM3IDIzLjY0NCA1LjYzNyAyMy4xNDQgTCA2LjQzNyAxNy43NDQgQyA2LjUzNyAxNy4yNDQgNi45MzcgMTYuODQ0IDcuNTM3IDE2Ljg0NCBMIDKUMD0icGF5cGFsIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWluWU1pbiBtZWV0Ij48L3N2Zz4=";
            }}
          />
        </div>
        <p className="text-sm text-gray-600 mb-6">
          You'll be redirected to PayPal to complete your payment securely.
        </p>
        <button
          onClick={handlePayPalSubmit}
          className="w-full bg-[#0070BA] hover:bg-[#003087] text-white py-3 px-4 rounded-md font-medium disabled:opacity-70 disabled:cursor-not-allowed"
          disabled={isProcessing}
        >
          {isProcessing ? processingMessage : "Pay with PayPal"}
        </button>
      </div>
      
      <hr className="border-gray-200 my-8" />
      
      <p className="text-sm text-gray-600 mb-6">
        By selecting the button above, I agree to the <a href="#" className="underline">Property Rules</a>, <a href="#" className="underline">Terms and Conditions</a>, <a href="#" className="underline">Privacy Policy</a> and <a href="#" className="underline">COVID-19 Safety Requirements</a>.
      </p>
    </div>
  );

  const renderGooglePayOption = () => (
    <div className="mt-6">
      <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
        <div className="mb-4">
          <div className="h-12 bg-black rounded-md flex items-center justify-center px-6 mx-auto w-48">
          <Image 
            src="/images/Google-Pay-Logo.png" 
            alt="PayPal Logo" 
            width={120} 
            height={30} 
            className="mx-auto"
           
          />
          </div>
        </div>
        <p className="text-sm text-gray-600 mb-6">
          You'll be redirected to Google Pay to complete your payment securely.
        </p>
        <button
          onClick={handleGooglePaySubmit}
          className="w-full bg-black hover:bg-gray-800 text-white py-3 px-4 rounded-md font-medium disabled:opacity-70 disabled:cursor-not-allowed"
          disabled={isProcessing}
        >
          {isProcessing ? processingMessage : "Pay with Google Pay"}
        </button>
      </div>
      
      <hr className="border-gray-200 my-8" />
      
      <p className="text-sm text-gray-600 mb-6">
        By selecting the button above, I agree to the <a href="#" className="underline">Property Rules</a>, <a href="#" className="underline">Terms and Conditions</a>, <a href="#" className="underline">Privacy Policy</a> and <a href="#" className="underline">COVID-19 Safety Requirements</a>.
      </p>
    </div>
  );

  const renderPaymentForm = () => {
    switch (paymentMethod) {
      case "paypal":
        return renderPayPalOption();
      case "google-pay":
        return renderGooglePayOption();
      case "credit-card":
      default:
        return renderCreditCardForm();
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-4xl mx-auto">
          <Link href="/rooms/1" className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-6">
            <ChevronLeft className="h-4 w-4 mr-1" />
            <span>Back</span>
          </Link>
          
          <h1 className="text-3xl font-bold mb-8">Confirm and Pay</h1>
          
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-8">
            {/* Left Column - Payment Form */}
            <div className="lg:w-6/12">
              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Your trip</h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex justify-between items-center">
                      <h3 className="text-base font-medium">Dates</h3>
                      <button className="text-gray-500 hover:text-gray-700">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                        </svg>
                      </button>
                    </div>
                    <p className="text-gray-700">{bookingDetails.dates.checkin} - {bookingDetails.dates.checkout}</p>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex justify-between items-center">
                      <h3 className="text-base font-medium">Guests</h3>
                      <button className="text-gray-500 hover:text-gray-700">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                        </svg>
                      </button>
                    </div>
                    <p className="text-gray-700">{bookingDetails.guests} guests</p>
                  </div>
                </div>
              </section>
              
              <hr className="border-gray-200 my-8" />
              
              <section>
                <h2 className="text-xl font-semibold mb-4">Pay with</h2>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  <button
                    className={`px-4 py-2 rounded-full ${paymentMethod === 'credit-card' ? 'bg-indigo-600 text-white' : 'bg-white border border-gray-300 text-gray-700'}`}
                    onClick={() => handlePaymentMethodChange('credit-card')}
                  >
                    Credit card
                  </button>
                  <button
                    className={`px-4 py-2 rounded-full ${paymentMethod === 'paypal' ? 'bg-indigo-600 text-white' : 'bg-white border border-gray-300 text-gray-700'}`}
                    onClick={() => handlePaymentMethodChange('paypal')}
                  >
                    Paypal
                  </button>
                  <button
                    className={`px-4 py-2 rounded-full ${paymentMethod === 'google-pay' ? 'bg-indigo-600 text-white' : 'bg-white border border-gray-300 text-gray-700'}`}
                    onClick={() => handlePaymentMethodChange('google-pay')}
                  >
                    Google Pay
                  </button>
                </div>
                
                {renderPaymentForm()}
              </section>
            </div>
            
            {/* Right Column - Room Details */}
            <div className="lg:w-6/12">
              <div className="border border-gray-200 rounded-lg p-6 sticky top-24">
                <div className="flex gap-4 items-start mb-6">
                  <div className="relative h-32 w-32 rounded-lg overflow-hidden">
                    <Image
                      src={bookingDetails.room.image || "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af"}
                      alt={bookingDetails.room.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  
                  <div className="flex-1">
                    <p className="text-sm text-gray-600">{bookingDetails.room.location}</p>
                    <h3 className="text-lg font-medium">{bookingDetails.room.title}</h3>
                    <div className="mt-1 flex items-center">
                      <p className="text-sm text-gray-600">
                        {bookingDetails.room.guests} guests • {bookingDetails.room.beds} beds • {bookingDetails.room.baths} private bath
                      </p>
                    </div>
                    <div className="mt-1 flex items-center">
                      <Star className="h-4 w-4 fill-indigo-600 stroke-indigo-600" />
                      <span className="text-sm ml-1">{bookingDetails.room.rating}</span>
                      <span className="text-sm text-gray-500 ml-1">({bookingDetails.room.reviews} reviews)</span>
                    </div>
                  </div>
                </div>
                
                <hr className="border-gray-200 my-6" />
                
                <div className="mb-6">
                  <h3 className="text-lg font-medium mb-4">Price details</h3>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>${bookingDetails.room.price} x {bookingDetails.room.totalNights} nights</span>
                      <span>${bookingDetails.room.subtotal}</span>
                    </div>
                    
                    <div className="flex justify-between">
                      <span>New user discount</span>
                      <span className="text-green-600">-${bookingDetails.room.discount}</span>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <span>Service fee</span>
                        <Info className="h-4 w-4 ml-1 text-gray-400" />
                      </div>
                      <span>${bookingDetails.room.serviceFee}</span>
                    </div>
                  </div>
                </div>
                
                <hr className="border-gray-200 my-6" />
                
                <div>
                  <div className="flex justify-between items-center font-semibold">
                    <span>Total (USD)</span>
                    <span>${bookingDetails.room.total}</span>
                  </div>
                  
                  <div className="mt-4 text-sm">
                    <p className="flex items-start">
                      <span className="text-green-600 mr-1">Free cancellation until 3:00 PM on July 15, 2022.</span>
                      <button className="text-indigo-600 underline">More info</button>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CheckoutPage;