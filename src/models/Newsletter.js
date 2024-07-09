import mongoose from 'mongoose';
const { Schema } = mongoose;

const newsletterSchema =  new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    project: {
        type: String,
    }
});
mongoose.models = {}

export default mongoose.model('Newsletter', newsletterSchema);
