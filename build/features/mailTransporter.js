import nodemailer from "nodemailer";
const mailSender = async ({ email, name, location, startDateTime, endDateTime, phone, }) => {
    try {
        const transport = nodemailer.createTransport({
            service: "gmail",
            secure: true,
            port: 465,
            auth: {
                user: "rydexcargurgaon@gmail.com",
                pass: "gine facw gych ppgv",
            },
        });
        const html = `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="UTF-8" />
          <title>Ride Booking Inquiry</title>
          <style>
            body {
              font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
              background-color: #fff8f2;
              padding: 20px;
            }
            .container {
              max-width: 600px;
              margin: auto;
              background-color: #ffffff;
              border-radius: 8px;
              padding: 30px;
              border: 1px solid #ffb877;
              box-shadow: 0 4px 10px rgba(255, 153, 0, 0.1);
            }
            .header {
              font-size: 24px;
              font-weight: bold;
              color: #ff6600;
              margin-bottom: 24px;
              text-align: center;
            }
            .field {
              margin-bottom: 16px;
            }
            .label {
              font-weight: bold;
              color: #ff6600;
              font-size: 15px;
            }
            .value {
              margin-top: 4px;
              color: #333333;
              font-size: 15px;
            }
            .footer {
              margin-top: 30px;
              font-size: 12px;
              color: #999999;
              text-align: center;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">New Ride Booking Inquiry</div>

            <div class="field">
              <div class="label">Name:</div>
              <div class="value">${name}</div>
            </div>

            <div class="field">
              <div class="label">Email:</div>
              <div class="value">${email}</div>
            </div>

            <div class="field">
              <div class="label">Phone Number:</div>
              <div class="value">${phone}</div>
            </div>

            <div class="field">
              <div class="label">Start Date:</div>
              <div class="value">${startDateTime}</div>
            </div>

            <div class="field">
              <div class="label">End Date:</div>
              <div class="value">${endDateTime}</div>
            </div>

            <div class="field">
              <div class="label">Location:</div>
              <div class="value">${location}</div>
            </div>

            <div class="footer">
              Submitted via the Ride Booking Website Contact Form
            </div>
          </div>
        </body>
        </html>`;
        const mailOptions = {
            from: "rydexcargurgaon@gmail.com",
            to: "rydexcargurgaon@gmail.com",
            subject: "New Contact",
            html,
        };
        await transport.sendMail(mailOptions);
        return {
            success: true,
            message: "Email sent successfully",
        };
    }
    catch (error) {
        return {
            success: false,
            message: "Error in sending email",
        };
    }
};
export default mailSender;
