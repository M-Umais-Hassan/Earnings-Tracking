import React from 'react'

// components
import PaymentListings from '../../../Components/Admin/Payments/PaymentListings'
import Nav from '../../../Components/Navbar/Nav'

const Payments = () => {
    return (
        <div>
            <Nav heading={'Admin Panel'} />
            <div className="container">
                <PaymentListings />
            </div>
        </div>
    )
}

export default Payments
