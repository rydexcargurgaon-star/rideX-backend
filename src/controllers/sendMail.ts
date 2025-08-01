import { Request, Response } from "express";
import { TryCatch } from "../middleware/error.js";
import mailSender from "../features/mailTransporter.js";
import { sendLog } from "../features/sendLog.js";

export const sendMail = TryCatch(
  async (
    req: Request<
      {},
      {},
      {
        email: string;
        name: string;
        location?: string;
        startDateTime: string;
        endDateTime: string;
        phone: string;
      }
    >,
    res: Response
  ) => {
    const { email, name, endDateTime, startDateTime, location, phone } = req.body;
    console.log(req.body);
    

    const result = await mailSender({
      email,
      name,
      location,
      startDateTime,
      endDateTime,
      phone,
    });

    if (result.success === true) {
      return sendLog({ message: "mail sent successfully" }, res);
    } else {
      return sendLog({ message: "mail not sent" }, res, 400);
    }
  }
);
