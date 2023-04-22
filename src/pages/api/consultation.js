const sgMail = require("@sendgrid/mail");

export default function handler(req, res) {
  const { name, email, inquiry } = req.body;
  const phone = req.body.phone ? req.body.phone : "Phone number not provided";

  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: "service@evolutz.com", // Change to your recipient
    from: "service@evolutz.com", // Change to your verified sender
    subject: `Consultation Request from ${name} ${email} ${phone}`,
    text: inquiry,
    html: `<p>${inquiry}</p>`,
  };
  sgMail
    .send(msg)
    .then(() => {
      console.log("Email sent");
    })
    .catch((error) => {
      console.error(error);
    });

  res.status(200).json({
    name,
    phone,
    email,
    inquiry,
  });
}
