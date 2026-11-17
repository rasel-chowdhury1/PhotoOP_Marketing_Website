import nodemailer from "nodemailer";

// Configure the transporter
const transporter = nodemailer.createTransport({
  service: "gmail", // or your email service
  auth: {
    user: "team.robust.dev@gmail.com",
    pass: "dmvf dwrv jhfc sfpd",
  },
});


export async function sendContactUserEmail(to, name) {

  const mailOptions = {
    from: `"Team Photo Op" <team.robust.dev@gmail.com>`, // sender address
    to,
    subject: "Thank You for Contacting Photo Op!", // Subject line
    text: `Hello ${name},\n\nThank you for reaching out to us at Photo Op. We appreciate your message and will get back to you shortly.\n\nBest Regards,\nThe Photo Op Team`, // plain text body
    html: `
      <div style="background-color: #101010; color:#FAFAFA; font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #FAA39E; border-radius: 10px;">
        <div style="text-align: center; margin-bottom: 20px;">
          <img src="https://i.ibb.co.com/Q70wxdt/logo.png" alt="Photo Op Logo" style="max-width: 100%; height: auto;" />
        </div>
        <h1 style="color: #FAFAFA; text-align: center;">Thank You for Contacting <span style="color: #DD1122;">Photo Op</span></h1>
        <h2 style="color: #DD1122; text-align: center;">Hello, ${name}!</h2>
        <p style="font-size: 16px; line-height: 1.5; color: #F3F3F3;">
          We appreciate you taking the time to reach out. Our team has received your message and will get back to you as soon as possible. In the meantime, feel free to explore our platform and discover how Photo Op can make your special moments unforgettable.
        </p>
        <div style="text-align: center; margin: 20px 0;">
          <a href="https://hi.photooprps.com/" style="background-color: #DD1122; color: #F3F3F3; padding: 10px 20px; text-decoration: none; border-radius: 5px; font-size: 16px;">Explore Photo Op</a>
        </div>
        <p style="font-size: 16px; line-height: 1.5; color: #F3F3F3;">
          If you have any further questions, feel free to reply to this email or contact us anytime at <a href="mailto:contact@photooprps.com" style="color: #DD1122; text-decoration: none;">contact@photooprps.com</a>.
        </p>
        <hr style="border-top: 1px solid #DD1122; background-color: #DD1122; color: #DD1122;" />
        <p style="font-size: 14px; line-height: 1.5; color: #C5C5C5;">
          Best Regards,<br/>
          The <span style="color: #DD1122;">Photo Op</span> Team
        </p>
        <p style="font-size: 12px; color: #C5C5C5; text-align: center;">
          You are receiving this email because you contacted us via our platform. Stay connected with us for updates. Reach us anytime at <a href="mailto:contact@photooprps.com" style="color: #DD1122; text-decoration: none;">contact@photooprps.com</a>.
        </p>
      </div>
    `,
  };

  try {
    return await transporter.sendMail(mailOptions);
  } catch (error) {}
}
