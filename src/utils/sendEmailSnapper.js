import nodemailer from "nodemailer";

// Configure the transporter
const transporter = nodemailer.createTransport({
  service: "gmail", // or your email service
  auth: {
    user: "team.robust.dev@gmail.com",
    pass: "dmvf dwrv jhfc sfpd",
  },
});

export async function sendRegistrationEmail(to, name, subject, message) {
  const mailOptions = {
    from: `"Team Photo Op" <team.robust.dev@gmail.com>`, // sender address
    to,
    subject: "Thank You for Registering as a Snapper!", // Subject line
    text: `Hello ${name},\n\nThank you for registering as a Snapper with Photo Op! We're thrilled to have you on board and look forward to helping you capture unforgettable moments for our users. You can now explore the platform and start connecting with potential clients.\n\nBest Regards,\nThe Photo Op Team`, // plain text body
    html: `
          <div style="background-color: #101010; color:#FAFAFA; font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #FAA39E; border-radius: 10px;">
            <div style="text-align: center; margin-bottom: 20px;">
              <img src="https://i.ibb.co/Q70wxdt/logo.png" alt="Photo Op Logo" style="max-width: 100%; height: auto;" />
            </div>
            <h1 style="color: #FAFAFA; text-align: center;">Welcome to <span style="color: #DD1122;">Photo Op</span>!</h1>
            <h2 style="color: #DD1122; text-align: center;">Hello, ${name}!</h2>
            <p style="font-size: 16px; line-height: 1.5; color: #F3F3F3;">
              Thank you for registering as a Snapper on Photo Op. We're excited to have you join our community of passionate photographers. Our Team will connect you as soon as possible and we can't wait to see you capture special moments for our users. 
            </p>
            <div style="text-align: center; margin: 20px 0;">
              <a href="https://hi.photooprps.com/" style="background-color: #DD1122; color: #F3F3F3; padding: 10px 20px; text-decoration: none; border-radius: 5px; font-size: 16px;">Explore Photo Op</a>
            </div>
            <p style="font-size: 16px; line-height: 1.5; color: #F3F3F3;">
              If you have any questions or need assistance, feel free to reply to this email or contact us anytime at <a href="mailto:contact@photooprps.com" style="color: #DD1122; text-decoration: none;">contact@photooprps.com</a>.
            </p>
            <hr style="border-top: 1px solid #DD1122; background-color: #DD1122; color: #DD1122;" />
            <p style="font-size: 14px; line-height: 1.5; color: #C5C5C5;">
              Best Regards,<br/>
              The <span style="color: #DD1122;">Photo Op</span> Team
            </p>
            <p style="font-size: 12px; color: #C5C5C5; text-align: center;">
              You are receiving this email because you registered as a Snapper on our platform. Stay connected with us for updates. Reach us anytime at <a href="mailto:contact@photooprps.com" style="color: #DD1122; text-decoration: none;">contact@photooprps.com</a>.
            </p>
          </div>
        `,
  };

  try {
    return await transporter.sendMail(mailOptions);
  } catch (error) {}
}
