import connectDB from "@/middlewares/db";
import Newsletter from "@/models/Newsletter";

const handler = async (req, response) => {
    try {
        const existingSubscriber = await Newsletter.findOne({email: req.body.email});
        if (existingSubscriber) {
        return response.status(500).json({type: "error", message: "You are already subscribed"});

        }
        const newSubscriber = await Newsletter.create({ name: req.body.name, email: req.body.email, project: "buildspace-project"});
        
        return response.status(201).json({type: "success", message: "You have been added to the wishlist!"});
    } catch (err) {
        console.error('Error while subscribing to newsletter', err);
        return response.status(500).json({type: "error", message: "Error while adding to wish list. Please Try again"});
    }
   
}


export default connectDB(handler); 