import { NextRequest, NextResponse } from "next/server";
import { isEmailVerified, consumeVerification } from "@/lib/otp-store";
import { sendApplicationEmail } from "@/lib/mailer";

export async function POST(req: NextRequest) {
    try {
        const formData = await req.formData();

        const role = formData.get("role") as string;
        const phone = formData.get("phone") as string;
        const email = formData.get("email") as string;
        const resume = formData.get("resume") as File | null;

        if (!role || !phone || !email) {
            return NextResponse.json(
                { success: false, error: "Role, phone, and email are required." },
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

        // Process resume file if provided
        let resumeBuffer: Buffer | null = null;
        let resumeName: string | null = null;
        if (resume && resume.size > 0) {
            const arrayBuffer = await resume.arrayBuffer();
            resumeBuffer = Buffer.from(arrayBuffer);
            resumeName = resume.name;
        }

        // Send application email
        await sendApplicationEmail(role, phone, email, resumeBuffer, resumeName);

        // Consume the verification so it can't be reused
        consumeVerification(email);

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Apply error:", error);
        return NextResponse.json(
            { success: false, error: "Failed to submit application. Please try again." },
            { status: 500 }
        );
    }
}
