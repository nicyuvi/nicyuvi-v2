// @ts-nocheck
// ! might need DOTENV npm package to use process.env
var nodemailer = require('nodemailer')
//-----------------------------------------------------------------------------
//subject, customerEmail, otpText
export async function sendMail() {
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'nickyuvienco@gmail.com',
      pass: 'wzjy glib axgt gckp', // DONT COMMIT THIS
    },
  })

  // var mailOptions = {
  //   from: customerEmail,
  //   to: 'nickyuvienco@gmail.com',
  //   subject: subject,
  //   text: otpText,
  // }

  const info = await transporter.sendMail({
    from: 'customer email here',
    to: 'nickyuvienco@gmail.com', // personal email static for now
    subject: 'Email subject',
    text: 'email body', // plain text body
  })

  console.log('Message sent: %s', info.messageId)
  // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>

  //  transporter.sendMail(mailOptions, function (error, info) {
  //   if (error) {
  //     throw new Error(error)
  //   } else {
  //     console.log('Email Sent')
  //     return true
  //   }
  // })
}
