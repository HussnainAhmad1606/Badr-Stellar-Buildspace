import connectDB from "@/middlewares/db";
import Newsletter from "@/models/Newsletter";
const nodemailer = require('nodemailer');
const handler = async (req, response) => {
    try {
        const existingSubscriber = await Newsletter.findOne({email: req.body.email});
        if (existingSubscriber) {
        return response.status(500).json({type: "error", message: "You are already subscribed"});

        }
        const newSubscriber = await Newsletter.create({ name: req.body.name, email: req.body.email, project: "buildspace-project"});


        try {
            var transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                  user: process.env.NODEMAILER_EMAIL,
                  pass: process.env.EMAIL_PASSWORD
                }
              });
              
              var mailOptions = {
                from: process.env.NODEMAILER_EMAIL,
                to: 'hussnainahmad1606@gmail.com',
                subject: `New Subscriber - Buildspace`,
                html: `
                <p>Hi, you got a new Subscriber</p>
                <p>Name: ${req.body.name}</p>
                <p>Email: ${req.body.email}</p>
                `
                
              };
              
              transporter.sendMail(mailOptions, function(error, info){
                if (error) {
                  console.log(error);
                } else {
                  console.log('Email sent: ' + info.response);
                }
              });
             
        
             
        
             
          } catch (err) {
              console.error('Error while sending mail', err);
              
          }
        
        return response.status(201).json({type: "success", message: "You have been added to the wishlist!"});
    } catch (err) {
        console.error('Error while subscribing to newsletter', err);
        return response.status(500).json({type: "error", message: "Error while adding to wish list. Please Try again"});
    }
   
}


export default connectDB(handler); 