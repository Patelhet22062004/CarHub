// controllers/checkoutController.js

const { Checkout } = require('../models'); // Import your Sequelize Checkout model

// Define the controller function to handle checkout
async function checkout(req, res) {
    try {
        // Extract checkout details from the request body
        const { firstName, lastName, email, streetAddress,city,state,zipCode,country } = req.body;

        // Insert checkout details into the database using Sequelize
        const checkout = await Checkout.create({
            firstName, lastName, email, streetAddress,city,state,zipCode,country
        });

        // Send a success response
        res.status(201).json({ message: 'Checkout successful', checkout });
    } catch (error) {
        // Handle errors
        console.error('Error during checkout:', error);
        res.status(500).json({ error: 'An error occurred during checkout' });
    }
}

module.exports = { checkout };



