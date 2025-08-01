declare const mailSender: ({ email, name, location, startDateTime, endDateTime, phone, }: {
    email: string;
    name: string;
    location?: string;
    startDateTime: string;
    endDateTime: string;
    phone: string;
}) => Promise<{
    success: boolean;
    message: string;
}>;
export default mailSender;
