const nodemailer = require("nodemailer");

async function emailV(email, code) {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "hamza.mern2201@gmail.com", // generated ethereal user
      pass: "xjumqxsauwywubdp", // generated ethereal password
    },
  });

  let info = await transporter.sendMail({
    from: '"Test Mail 👻"', // sender address
    to: email, // list of receivers
    subject: "Hello ✔", // Subject line
    // plain text body
    html: `<button>${code}</button>`, // html body
  });
}

module.exports = emailV;
