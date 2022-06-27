import StripeCheckout from 'react-stripe-checkout';

const KEY = "pk_test_51LF5zHFqqrVViJyhlrNvBcvxlJC1O2GXLXDC5cwqfGPjyHgvu51o2D89Bxzgm9pfHDyXICSSKkUzonumYkYnv0h600ZZJXwVFE"
const Pay = () => {
    const onToken = (token) => {
        console.log(token)
    }
    return (
        <div
            style={{
                height:"100vh",
                display:"flex",
                alignItems:"center",
                justifyContent:"center",
            }}
        >
            <StripeCheckout 
                name="Archive" 
                image="https://i.pinimg.com/originals/06/0c/91/060c9122ee9f5ddd780056324f06047b.jpg"
                billingAddress
                shippingAddress
                description="Your total is $20"
                amount={2000}
                token={onToken}
                stripeKey={KEY}
            >
                <button
                    style={{
                        border:"none",
                        width:120,
                        borderRadius:5,
                        padding:"20px",
                        backgroundColor:"black",
                        color:"white",
                        fontWeight:"600",
                        cursor:"pointer",
                    }}
                >
                    Pay Now
                </button>
            </StripeCheckout>
        </div>
    )
}

export default Pay;