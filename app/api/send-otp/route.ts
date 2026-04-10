import { NextRequest, NextResponse } from "next/server";
import { generateOtp, storeOtp } from "@/lib/otp-store";
import { sendOtpEmail } from "@/lib/mailer";

export async function POST(req: NextRequest) {
    try {
        const { email } = await req.json();

        if (!email || typeof email !== "string") {
            return NextResponse.json(
                { success: false, error: "Email is required." },
                { status: 400 }
            );
        }

        const otp = generateOtp();
        storeOtp(email, otp);

        await sendOtpEmail(email, otp);

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Send OTP error:", error);
        return NextResponse.json(
            { success: false, error: "Failed to send OTP. Please try again." },
            { status: 500 }
        );
    }
}
