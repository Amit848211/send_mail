const nodemailer =require("nodemailer")


const sendMail = async (req,res)=>{

  const {name,email,message}=req.body;
  console.log(name,email,message);
    let testAccount =await nodemailer.createTestAccount()


    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        secure: false, // Use `true` for port 465, `false` for all other ports
          auth: {
            user: 'davonte44@ethereal.email',
            pass: 'PkMrBG8tqrdDtQcHxS'
          }
          
        });


        const info = await  transporter.sendMail({
            from: '${email} <maddison53@ethereal.email>', // sender address
            to: "bar@example.com, baz@example.com", // list of receivers
            subject:  message, // Subject line
            text:name, // plain text body
            html: "<b>Hello world?</b>", // html body
          
          });
          console.log("Message sent :%s",info.messageId);
         res.json(info)
}


module.exports = sendMail;