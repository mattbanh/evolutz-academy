const sgMail = require("@sendgrid/mail");

export default function handler(req, res) {
  const { name, email, inquiry } = req.body;
  const phone = req.body.phone ? req.body.phone : "Phone number not provided";

  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: "service@evolutz.com", // Change to your recipient
    from: "no-reply@evolutzacademy.com", // Change to your verified sender
    subject: `Consultation Request from ${name}`,
    text: inquiry,
    html: `<p>Messaged received from ${name} through your website</p><p>Email: ${email}</p><p>Phone Number: ${phone}</p><p>Message: ${inquiry}</p>`,
  };
  sgMail
    .send(msg)
    .then(() => {
      console.log("Email sent");
      res.status(200).json({
        name,
        phone,
        email,
        inquiry,
      });
    })
    .catch((error) => {
      console.error(error);
      res.status(400).send(error);
    });
}
