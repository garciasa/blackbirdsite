import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.EMAIL_API_KEY);
const EMAIL_TO = process.env.EMAIL_TO;
const EMAIL_FROM = process.env.EMAIL_FROM;

async function sendEmail(req, res) {
  try {
    await sendgrid.send({
      to: EMAIL_TO,
      from: EMAIL_FROM, 
      subject: `Contact from BlackBird Cultur Lab Webpage`,
      html: `
      <div>
        Name: ${req.body.name}<br/>
        Email: ${req.body.email}<br/>
        Message: ${req.body.message}<br/>
      </div>`,
    });
  } catch (error) {
    // console.log(error);
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: "" });
}

export default sendEmail;

