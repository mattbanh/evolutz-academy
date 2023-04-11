// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const sgMail = require("@sendgrid/mail");

export default function handler(req, res) {
  const { name, email, inquiry } = req.body;
  // sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  // const msg = {
  //   to: "mattbanh92@gmail.com", // Change to your recipient
  //   from: "mattbanh92@gmail.com", // Change to your verified sender
  //   subject: `Consultation Request from ${name} ${email}`,
  //   text: inquiry,
  //   html: `<p>${inquiry}</p>`,
  // };
  // sgMail
  //   .send(msg)
  //   .then(() => {
  //     console.log("Email sent");
  //   })
  //   .catch((error) => {
  //     console.error(error);
  //   });

  res.status(200).json({
    name,
    email,
    inquiry,
  });
}
