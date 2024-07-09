
import connectDB from "@/middlewares/db";

const handler = async (request, response) => {
    return response.status(200).json({message: "message"})
}


export default connectDB(handler); 