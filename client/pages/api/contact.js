import { MailerSend, EmailParams, Sender, Recipient } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.EMAIL_API_KEY
});

const EMAIL_TO = process.env.EMAIL_TO;
const EMAIL_FROM = process.env.EMAIL_FROM;

const sentFrom = new Sender(EMAIL_FROM, "Webpage Contact");

const recipients = [
  new Recipient(EMAIL_TO, "Webpage contact")
]


async function sendEmail(req, res) {

const emailParams = new EmailParams()
  .setFrom(sentFrom)
  .setTo(recipients)
  .setReplyTo(sentFrom)
  .setSubject('Contact from BlackBird Cultur Lab Webpage')
  .setHtml(`
      <div>
        Name: ${req.body.name}<br/>
        Email: ${req.body.email}<br/>
        Message: ${req.body.message}<br/>
      </div>
    `);


  try {

    await mailerSend.email.send(emailParams);

  } catch (error) {
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: "" });
}

export default sendEmail;

