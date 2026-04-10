import { NextRequest, NextResponse } from "next/server";
import { isEmailVerified, consumeVerification } from "@/lib/otp-store";
import { sendFranchiseInquiryEmail } from "@/lib/mailer";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { name, location, phone, email, investmentCapacity, experience } = body;

        if (!name || !phone || !email) {
            return NextResponse.json(
                { success: false, error: "Name, phone, and email are required." },
                { status: 400 }
            );
        }

        // Check that email was verified via OTP
        if (!isEmailVerified(email)) {
            return NextResponse.json(
                { success: false, error: "Email not verified. Please verify with OTP first." },
                { status: 403 }
            );
        }

        await sendFranchiseInquiryEmail(name, location, phone, email, investmentCapacity, experience);

        // Consume the verification so it can't be reused
        consumeVerification(email);

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Franchise inquiry error:", error);
        return NextResponse.json(
            { success: false, error: "Failed to submit inquiry. Please try again." },
            { status: 500 }
        );
    }
}
