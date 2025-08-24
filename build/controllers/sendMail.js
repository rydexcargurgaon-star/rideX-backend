import { sendLog } from "../features/sendLog.js";
import mailSender from "../features/mailTransporter.js";
import { TryCatch } from "../middleware/error.js";
// Adjust the path as needed
export const sendMail = TryCatch(async (req, res) => {
    const { email = "", name = "", startDateTime, endDateTime, phone } = req.body;
    // Basic validation
    if (!phone) {
        return sendLog({ message: "Phone number is required" }, res, 400);
    }
    const result = await mailSender({
        name,
        email,
        startDateTime,
        endDateTime,
        phone,
    });
    if (result?.success) {
        return sendLog({ message: "Mail sent successfully" }, res);
    }
    else {
        return sendLog({ message: "Mail not sent" }, res, 400);
    }
});
