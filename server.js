import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import Stripe from 'stripe';

dotenv.config();

const app = express();
const stripe = new Stripe(process.env.STRIPE_SECRET);

// Middleware
app.use(cors());
app.use(express.json());

// Test route
app.get("/api/health", (req, res) => {
  res.json({ status: "Backend running 🚀" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

app.post("/create-checkout-session", async(req, res) => {
    const {products} = req.body;

    const lineItems = [];
    products.forEach((product) => (
        lineItems.push({
            price_data: {
                currency: "usd",
                product_data: {
                    name:product.name,
                    images: product.image
                },
                unit_amount: 900
            },
            quantity: 1
        })
    ));

    const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: lineItems,
        mode: "payment",
        success_url: "http://localhost:5173/Hair-Shop/checkout/?p=1",
        cancel_url: "http://localhost:5173/Hair-Shop/checkout/?p=0"
    });

    res.json({url:session.url})
})