import { NextRequest, NextResponse } from "next/server";
import { verifyOtp } from "@/lib/otp-store";

export async function POST(req: NextRequest) {
    try {
        const { email, otp } = await req.json();

        if (!email || !otp) {
            return NextResponse.json(
                { verified: false, error: "Email and OTP are required." },
                { status: 400 }
            );
        }

        const result = verifyOtp(email, otp);

        return NextResponse.json({
            verified: result.valid,
            error: result.error || undefined,
        });
    } catch (error) {
        console.error("Verify OTP error:", error);
        return NextResponse.json(
            { verified: false, error: "Verification failed. Please try again." },
            { status: 500 }
        );
    }
}
