import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
    },
});

export async function sendOtpEmail(to: string, otp: string) {
    await transporter.sendMail({
        from: `"CFF Careers" <${process.env.GMAIL_USER}>`,
        to,
        subject: "Your CFF Application OTP",
        html: `
            <div style="font-family: Arial, sans-serif; max-width: 480px; margin: 0 auto; padding: 32px; background: #111; color: #fff; border-radius: 16px;">
                <h2 style="margin: 0 0 8px; color: #FFC300; font-size: 22px;">CFF – Email Verification</h2>
                <p style="margin: 0 0 24px; color: #999; font-size: 14px;">Use the OTP below to verify your application.</p>
                <div style="background: #222; border: 1px solid #333; border-radius: 12px; padding: 20px; text-align: center; letter-spacing: 8px; font-size: 32px; font-weight: bold; color: #FFC300;">
                    ${otp}
                </div>
                <p style="margin: 24px 0 0; color: #666; font-size: 12px;">This code expires in 5 minutes. If you didn't request this, please ignore.</p>
            </div>
        `,
    });
}

export async function sendApplicationEmail(
    role: string,
    phone: string,
    email: string,
    resumeBuffer?: Buffer | null,
    resumeName?: string | null
) {
    const attachments: nodemailer.SendMailOptions["attachments"] = [];
    if (resumeBuffer && resumeName) {
        attachments.push({
            filename: resumeName,
            content: resumeBuffer,
        });
    }

    await transporter.sendMail({
        from: `"CFF Careers" <${process.env.GMAIL_USER}>`,
        to: process.env.GMAIL_USER,
        subject: `CFF Application - ${role}`,
        text: [
            `Role: ${role}`,
            ``,
            `Contact Details:`,
            `Mobile: ${phone}`,
            `Email: ${email}`,
            ``,
            resumeName ? `Resume: ${resumeName} (attached)` : `Resume: Not provided`,
        ].join("\n"),
        attachments,
    });
}

export async function sendFranchiseInquiryEmail(
    name: string,
    location: string,
    phone: string,
    email: string,
    investmentCapacity: string,
    experience: string
) {
    await transporter.sendMail({
        from: `"CFF Franchise" <${process.env.GMAIL_USER}>`,
        to: process.env.GMAIL_USER,
        subject: "CFF Franchise Inquiry",
        text: [
            `Name: ${name}`,
            `Location: ${location || "Not provided"}`,
            ``,
            `Contact Details:`,
            `Phone: ${phone}`,
            `Email: ${email}`,
            ``,
            `Investment Capacity: ${investmentCapacity || "Not specified"}`,
            ``,
            `Current Experience:`,
            experience || "Not provided",
        ].join("\n"),
    });
}
