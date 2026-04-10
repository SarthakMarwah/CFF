// In-memory OTP store with 5-minute expiry
// Uses globalThis to survive Next.js HMR in dev mode

interface OtpEntry {
    otp: string;
    expiresAt: number;
}

// Extend globalThis type
const g = globalThis as typeof globalThis & {
    _otpStore?: Map<string, OtpEntry>;
    _verifiedEmails?: Set<string>;
};

if (!g._otpStore) g._otpStore = new Map<string, OtpEntry>();
if (!g._verifiedEmails) g._verifiedEmails = new Set<string>();

const store = g._otpStore;
const verifiedEmails = g._verifiedEmails;

export function generateOtp(): string {
    return Math.floor(100000 + Math.random() * 900000).toString();
}

export function storeOtp(email: string, otp: string) {
    store.set(email.toLowerCase(), {
        otp,
        expiresAt: Date.now() + 5 * 60 * 1000, // 5 minutes
    });
}

export function verifyOtp(email: string, otp: string): { valid: boolean; error?: string } {
    const key = email.toLowerCase();
    const entry = store.get(key);

    if (!entry) {
        return { valid: false, error: "No OTP found. Please request a new one." };
    }

    if (Date.now() > entry.expiresAt) {
        store.delete(key);
        return { valid: false, error: "OTP has expired. Please request a new one." };
    }

    if (entry.otp !== otp) {
        return { valid: false, error: "Invalid OTP. Please try again." };
    }

    // OTP is valid — clean up and mark email as verified
    store.delete(key);
    verifiedEmails.add(key);
    return { valid: true };
}

export function isEmailVerified(email: string): boolean {
    return verifiedEmails.has(email.toLowerCase());
}

export function consumeVerification(email: string) {
    verifiedEmails.delete(email.toLowerCase());
}
