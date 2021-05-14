
const nodemailer = require("nodemailer");
const Message = require("../model/message");

exports.sendMessage = async (req, res, next) => {
    let subject = req.body.subject;
    let to = req.body.email;
    let message = req.body.message;
    let phone = req.body.phone;
    let name = req.body.name;
    console.log("sending mail ............................................")
  
    let msg = new Message({
      subject: subject,
      to: to,
      message: message,
      phone: phone,
      name: name,
    });
  
    try {
      let result = await msg.save();
      if (result == null) {
        return res.status(400).json({
          messege: "email not sent",
          status: false,
        });
      }
  
      let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "techenovators@gmail.com",
          pass: "Mohan@123",
        },
      });
  
      transporter.sendMail(
        {
          to: to,
          from: "girindramohan0@gmail.com",
          subject: subject,
          text: message,
          html: `<p>${message}</p>`,
        },
        (err, info) => {
          if (err) {
            return res.status(400).json({
              messege: "email not sent",
              status: false,
            });
          } else {
            return res.status(200).json({
              messege: "email sent",
              status: true,
            });
          }
        }
      );
    } catch (error) {
      console.log(error);
      return res.status(400).json({
        messege: "email not sent",
        status: false,
      });
    }
  };
  