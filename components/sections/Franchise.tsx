"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const OPEN_ROLES = ["Kiosk Managers", "QSR Staff", "Culinary Experts"];

type FormStatus = "idle" | "sending-otp" | "otp-sent" | "verifying" | "submitting" | "success" | "error";

// ─── Reusable OTP hook ───
function useOtpFlow() {
    const [showOtpModal, setShowOtpModal] = useState(false);
    const [otpDigits, setOtpDigits] = useState(["", "", "", "", "", ""]);
    const otpInputRefs = useRef<(HTMLInputElement | null)[]>([]);
    const [otpTimer, setOtpTimer] = useState(0);
    const [formStatus, setFormStatus] = useState<FormStatus>("idle");
    const [statusMessage, setStatusMessage] = useState("");
    const [validationError, setValidationError] = useState("");

    useEffect(() => {
        if (otpTimer <= 0) return;
        const interval = setInterval(() => setOtpTimer((t) => t - 1), 1000);
        return () => clearInterval(interval);
    }, [otpTimer]);

    const handleOtpChange = useCallback((index: number, value: string) => {
        if (!/^\d*$/.test(value)) return;
        setOtpDigits(prev => {
            const newDigits = [...prev];
            newDigits[index] = value.slice(-1);
            return newDigits;
        });
        if (value && index < 5) otpInputRefs.current[index + 1]?.focus();
    }, []);

    const handleOtpKeyDown = useCallback((index: number, e: React.KeyboardEvent) => {
        if (e.key === "Backspace") {
            setOtpDigits(prev => {
                if (!prev[index] && index > 0) {
                    otpInputRefs.current[index - 1]?.focus();
                }
                return prev;
            });
        }
    }, []);

    const handleOtpPaste = useCallback((e: React.ClipboardEvent) => {
        e.preventDefault();
        const pasted = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, 6);
        setOtpDigits(() => {
            const newDigits = ["", "", "", "", "", ""];
            for (let i = 0; i < pasted.length; i++) newDigits[i] = pasted[i];
            return newDigits;
        });
        const nextEmpty = pasted.length < 6 ? pasted.length : 5;
        otpInputRefs.current[nextEmpty]?.focus();
    }, []);

    const sendOtp = useCallback(async (email: string) => {
        setFormStatus("sending-otp");
        setStatusMessage("");
        try {
            const res = await fetch("/api/send-otp", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email }),
            });
            const data = await res.json();
            if (data.success) {
                setFormStatus("otp-sent");
                setShowOtpModal(true);
                setOtpDigits(["", "", "", "", "", ""]);
                setOtpTimer(300);
                setTimeout(() => otpInputRefs.current[0]?.focus(), 100);
                return true;
            } else {
                setFormStatus("error");
                setStatusMessage(data.error || "Failed to send OTP.");
                return false;
            }
        } catch {
            setFormStatus("error");
            setStatusMessage("Network error. Please try again.");
            return false;
        }
    }, []);

    const verifyOtp = useCallback(async (email: string): Promise<boolean> => {
        const otp = otpDigits.join("");
        if (otp.length !== 6) {
            setStatusMessage("Please enter the full 6-digit OTP.");
            return false;
        }
        setFormStatus("verifying");
        setStatusMessage("");
        try {
            const res = await fetch("/api/verify-otp", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, otp }),
            });
            const data = await res.json();
            if (data.verified) return true;
            setFormStatus("otp-sent");
            setStatusMessage(data.error || "Invalid OTP.");
            return false;
        } catch {
            setFormStatus("otp-sent");
            setStatusMessage("Network error. Please try again.");
            return false;
        }
    }, [otpDigits]);

    const resetFlow = useCallback(() => {
        setShowOtpModal(false);
        setOtpDigits(["", "", "", "", "", ""]);
        setOtpTimer(0);
        setFormStatus("idle");
        setStatusMessage("");
        setValidationError("");
    }, []);

    const formatTime = (s: number) => `${Math.floor(s / 60)}:${(s % 60).toString().padStart(2, "0")}`;

    const isSubmitting = formStatus === "sending-otp" || formStatus === "verifying" || formStatus === "submitting";

    return {
        showOtpModal, setShowOtpModal,
        otpDigits, otpInputRefs,
        otpTimer, setOtpTimer,
        formStatus, setFormStatus,
        statusMessage, setStatusMessage,
        validationError, setValidationError,
        handleOtpChange, handleOtpKeyDown, handleOtpPaste,
        sendOtp, verifyOtp, resetFlow,
        formatTime, isSubmitting,
    };
}

// ─── Reusable OTP Modal ───
function OtpModal({
    email, flow, onVerifySuccess, accentDark = false,
}: {
    email: string;
    flow: ReturnType<typeof useOtpFlow>;
    onVerifySuccess: () => Promise<void>;
    accentDark?: boolean;
}) {
    const handleVerify = async () => {
        const ok = await flow.verifyOtp(email);
        if (ok) await onVerifySuccess();
    };

    const handleResend = async () => {
        if (flow.otpTimer > 0) return;
        await flow.sendOtp(email);
    };

    const bgFrom = accentDark ? "from-black/20" : "from-white/10";
    const bgTo = accentDark ? "to-black/10" : "to-white/5";
    const borderColor = accentDark ? "border-black/20" : "border-white/10";
    const textColor = accentDark ? "text-black" : "text-white";
    const textMuted = accentDark ? "text-black/50" : "text-white/50";
    const textMuted2 = accentDark ? "text-black/40" : "text-white/40";
    const inputBg = accentDark ? "bg-black/5" : "bg-white/5";
    const inputBorder = accentDark ? "border-black/20" : "border-white/20";
    const closeHover = accentDark ? "hover:text-black" : "hover:text-white";
    const backdropBg = accentDark ? "bg-cff-yellow/90" : "bg-black/80";
    const accentColor = accentDark ? "text-black" : "text-cff-yellow";
    const iconBg = accentDark ? "bg-black/10" : "bg-cff-yellow/10";

    return (
        <AnimatePresence>
            {flow.showOtpModal && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 z-50 flex items-center justify-center rounded-[2rem] overflow-hidden"
                >
                    <div className={`absolute inset-0 ${backdropBg} backdrop-blur-md`} />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className={`relative z-10 w-full max-w-sm mx-4 p-8 rounded-2xl bg-gradient-to-b ${bgFrom} ${bgTo} border ${borderColor} shadow-2xl`}
                    >
                        <button
                            onClick={() => { flow.setShowOtpModal(false); flow.setFormStatus("idle"); flow.setStatusMessage(""); }}
                            className={`absolute top-4 right-4 ${textMuted2} ${closeHover} transition-colors`}
                        >
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        <div className="text-center mb-6">
                            <div className={`w-14 h-14 mx-auto mb-4 rounded-full ${iconBg} flex items-center justify-center`}>
                                <svg className={`w-7 h-7 ${accentColor}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h4 className={`${textColor} font-bold text-lg`}>Verify Your Email</h4>
                            <p className={`${textMuted} text-xs mt-1`}>
                                OTP sent to <span className={`${accentColor} font-medium`}>{email}</span>
                            </p>
                        </div>

                        <div className="flex justify-center gap-2 mb-4" onPaste={flow.handleOtpPaste}>
                            {flow.otpDigits.map((digit, i) => (
                                <input
                                    key={i}
                                    ref={(el) => { flow.otpInputRefs.current[i] = el; }}
                                    type="text"
                                    inputMode="numeric"
                                    maxLength={1}
                                    value={digit}
                                    onChange={(e) => flow.handleOtpChange(i, e.target.value)}
                                    onKeyDown={(e) => flow.handleOtpKeyDown(i, e)}
                                    className={`w-11 h-12 text-center text-lg font-bold rounded-lg ${inputBg} border ${inputBorder} ${textColor} focus:border-cff-yellow focus:outline-none focus:ring-1 focus:ring-cff-yellow/50 transition-colors`}
                                />
                            ))}
                        </div>

                        <div className="text-center mb-4">
                            {flow.otpTimer > 0 ? (
                                <span className={`${textMuted2} text-xs`}>Expires in {flow.formatTime(flow.otpTimer)}</span>
                            ) : (
                                <button onClick={handleResend} className={`${accentColor} text-xs font-medium hover:underline`}>
                                    Resend OTP
                                </button>
                            )}
                        </div>

                        <AnimatePresence>
                            {flow.statusMessage && flow.formStatus === "otp-sent" && (
                                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-red-400 text-xs text-center mb-3 font-medium">
                                    {flow.statusMessage}
                                </motion.p>
                            )}
                        </AnimatePresence>

                        <Button
                            type="button"
                            onClick={handleVerify}
                            disabled={flow.formStatus === "verifying" || flow.formStatus === "submitting"}
                            className={`w-full ${accentDark ? "bg-black text-cff-yellow hover:bg-black/90" : "bg-cff-yellow text-black hover:bg-cff-gold"} font-bold py-5 rounded-full uppercase tracking-wider text-sm disabled:opacity-50`}
                        >
                            {flow.formStatus === "verifying" ? (
                                <span className="flex items-center justify-center gap-2">
                                    <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>
                                    Verifying...
                                </span>
                            ) : flow.formStatus === "submitting" ? (
                                <span className="flex items-center justify-center gap-2">
                                    <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>
                                    Submitting...
                                </span>
                            ) : (
                                "Verify & Submit"
                            )}
                        </Button>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

// ─── Inline Status Messages ───
function StatusMessages({ flow, dark = false }: { flow: ReturnType<typeof useOtpFlow>; dark?: boolean }) {
    const successBg = dark ? "bg-emerald-600/20 border-emerald-600/30" : "bg-emerald-500/10 border-emerald-500/20";
    const errorBg = dark ? "bg-red-600/20 border-red-600/30" : "bg-red-500/10 border-red-500/20";
    const successText = dark ? "text-emerald-700" : "text-emerald-300";
    const errorText = dark ? "text-red-700" : "text-red-300";

    return (
        <AnimatePresence>
            {!flow.showOtpModal && flow.formStatus === "success" && flow.statusMessage && (
                <motion.div initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -5 }}
                    className={`flex items-center gap-2 ${successBg} border rounded-xl px-4 py-3`}>
                    <svg className="w-5 h-5 text-emerald-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className={`${successText} text-sm font-medium`}>{flow.statusMessage}</span>
                </motion.div>
            )}
            {!flow.showOtpModal && flow.formStatus === "error" && flow.statusMessage && (
                <motion.div initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -5 }}
                    className={`flex items-center gap-2 ${errorBg} border rounded-xl px-4 py-3`}>
                    <svg className="w-5 h-5 text-red-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className={`${errorText} text-sm font-medium`}>{flow.statusMessage}</span>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

// ─── Validation Error ───
function ValidationError({ message, dark = false }: { message: string; dark?: boolean }) {
    if (!message) return null;
    const textColor = dark ? "text-red-600" : "text-red-400";
    return (
        <AnimatePresence>
            <motion.div initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -5 }}
                className={`flex items-center gap-2 ${textColor} text-sm font-medium`}>
                <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {message}
            </motion.div>
        </AnimatePresence>
    );
}

// ─── Spinner ───
function Spinner() {
    return (
        <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
        </svg>
    );
}

// ═══════════════════════════════════════════
// ─── Main Component ───
// ═══════════════════════════════════════════
export default function Franchise() {
    // ── Careers (left) state ──
    const [selectedRole, setSelectedRole] = useState<string | null>(null);
    const [careerPhone, setCareerPhone] = useState("");
    const [careerEmail, setCareerEmail] = useState("");
    const [resumeFile, setResumeFile] = useState<File | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const careerOtp = useOtpFlow();

    // ── Franchise (right) state ──
    const [frName, setFrName] = useState("");
    const [frLocation, setFrLocation] = useState("");
    const [frPhone, setFrPhone] = useState("");
    const [frEmail, setFrEmail] = useState("");
    const [frInvestment, setFrInvestment] = useState("");
    const [frExperience, setFrExperience] = useState("");
    const franchiseOtp = useOtpFlow();

    // ── Careers handlers ──
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) setResumeFile(file);
    };

    const validateCareerForm = (): boolean => {
        if (!selectedRole) { careerOtp.setValidationError("Please select a role."); return false; }
        if (!careerPhone.trim()) { careerOtp.setValidationError("Mobile number is required."); return false; }
        if (!careerEmail.trim() || !/\S+@\S+\.\S+/.test(careerEmail)) { careerOtp.setValidationError("A valid email address is required."); return false; }
        careerOtp.setValidationError("");
        return true;
    };

    const handleApply = async () => {
        if (!validateCareerForm()) return;
        await careerOtp.sendOtp(careerEmail);
    };

    const submitCareerApplication = async () => {
        careerOtp.setFormStatus("submitting");
        careerOtp.setStatusMessage("");
        try {
            const formData = new FormData();
            formData.append("role", selectedRole!);
            formData.append("phone", careerPhone);
            formData.append("email", careerEmail);
            if (resumeFile) formData.append("resume", resumeFile);

            const res = await fetch("/api/apply", { method: "POST", body: formData });
            const data = await res.json();

            if (data.success) {
                careerOtp.setFormStatus("success");
                careerOtp.setStatusMessage("Application submitted successfully! We'll be in touch.");
                careerOtp.setShowOtpModal(false);
                setSelectedRole(null); setCareerPhone(""); setCareerEmail(""); setResumeFile(null);
            } else {
                careerOtp.setFormStatus("error");
                careerOtp.setStatusMessage(data.error || "Submission failed.");
                careerOtp.setShowOtpModal(false);
            }
        } catch {
            careerOtp.setFormStatus("error");
            careerOtp.setStatusMessage("Network error. Please try again.");
            careerOtp.setShowOtpModal(false);
        }
    };

    // ── Franchise handlers ──
    const validateFranchiseForm = (): boolean => {
        if (!frName.trim()) { franchiseOtp.setValidationError("Name is required."); return false; }
        if (!frPhone.trim()) { franchiseOtp.setValidationError("Phone is required."); return false; }
        if (!frEmail.trim() || !/\S+@\S+\.\S+/.test(frEmail)) { franchiseOtp.setValidationError("A valid email address is required."); return false; }
        franchiseOtp.setValidationError("");
        return true;
    };

    const handleFranchiseSubmit = async () => {
        if (!validateFranchiseForm()) return;
        await franchiseOtp.sendOtp(frEmail);
    };

    const submitFranchiseInquiry = async () => {
        franchiseOtp.setFormStatus("submitting");
        franchiseOtp.setStatusMessage("");
        try {
            const res = await fetch("/api/franchise-inquiry", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: frName,
                    location: frLocation,
                    phone: frPhone,
                    email: frEmail,
                    investmentCapacity: frInvestment,
                    experience: frExperience,
                }),
            });
            const data = await res.json();

            if (data.success) {
                franchiseOtp.setFormStatus("success");
                franchiseOtp.setStatusMessage("Inquiry submitted successfully! We'll reach out soon.");
                franchiseOtp.setShowOtpModal(false);
                setFrName(""); setFrLocation(""); setFrPhone(""); setFrEmail(""); setFrInvestment(""); setFrExperience("");
            } else {
                franchiseOtp.setFormStatus("error");
                franchiseOtp.setStatusMessage(data.error || "Submission failed.");
                franchiseOtp.setShowOtpModal(false);
            }
        } catch {
            franchiseOtp.setFormStatus("error");
            franchiseOtp.setStatusMessage("Network error. Please try again.");
            franchiseOtp.setShowOtpModal(false);
        }
    };

    return (
        <section id="careers" className="py-24 bg-cff-dark relative">
            <div className="absolute inset-0 bg-cff-pattern opacity-[0.02] pointer-events-none"></div>

            <div className="container mx-auto px-6 max-w-6xl relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4">
                        Grow <span className="text-cff-yellow">With Us</span>
                    </h2>
                    <p className="text-white/60 text-lg uppercase tracking-widest font-bold max-w-2xl mx-auto">
                        Careers and Franchise Opportunities
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 md:gap-20">

                    {/* ═══ Left: Careers ═══ */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-black p-8 md:p-12 rounded-[2rem] border-t-4 border-white/20 relative"
                    >
                        <h3 className="text-3xl font-black text-white uppercase tracking-wide mb-2">Join The Team</h3>
                        <p className="text-white/50 text-sm mb-8">Build your future with a fast-growing, premium QSR network.</p>

                        <div className="space-y-4 mb-10">
                            <h4 className="text-cff-yellow font-bold uppercase tracking-wider text-sm mb-4">Select a Role</h4>
                            <div className="flex flex-wrap gap-3">
                                {OPEN_ROLES.map((role) => (
                                    <button
                                        key={role}
                                        type="button"
                                        onClick={() => { setSelectedRole(role); careerOtp.setValidationError(""); }}
                                        className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 border ${
                                            selectedRole === role
                                                ? "bg-cff-yellow text-black border-cff-yellow shadow-[0_0_15px_rgba(255,195,0,0.3)]"
                                                : "bg-white/5 border-white/10 text-white hover:border-cff-yellow/50 hover:text-cff-yellow"
                                        }`}
                                    >
                                        {role}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-bold text-white/50 uppercase tracking-wider mb-2">Mobile Number <span className="text-cff-yellow">*</span></label>
                                    <Input type="tel" placeholder="+91 XXXXX XXXXX" value={careerPhone}
                                        onChange={(e) => { setCareerPhone(e.target.value); careerOtp.setValidationError(""); }}
                                        className="bg-white/5 border-white/10 text-white placeholder:text-white/30 rounded-xl font-medium" />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-white/50 uppercase tracking-wider mb-2">Email Address <span className="text-cff-yellow">*</span></label>
                                    <Input type="email" placeholder="your@email.com" value={careerEmail}
                                        onChange={(e) => { setCareerEmail(e.target.value); careerOtp.setValidationError(""); }}
                                        className="bg-white/5 border-white/10 text-white placeholder:text-white/30 rounded-xl font-medium" />
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-white/50 uppercase tracking-wider mb-2">Upload Resume</label>
                                <input ref={fileInputRef} type="file" accept=".pdf,.doc,.docx" onChange={handleFileChange} className="hidden" />
                                <div onClick={() => fileInputRef.current?.click()}
                                    className={`border border-dashed rounded-xl p-6 text-center cursor-pointer transition-colors bg-white/5 ${resumeFile ? "border-cff-yellow/50" : "border-white/20 hover:border-cff-yellow/50"}`}>
                                    {resumeFile ? (
                                        <div className="flex items-center justify-center gap-3">
                                            <svg className="w-5 h-5 text-cff-yellow shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                            </svg>
                                            <span className="text-cff-yellow text-sm font-medium truncate max-w-[200px]">{resumeFile.name}</span>
                                            <button type="button"
                                                onClick={(e) => { e.stopPropagation(); setResumeFile(null); if (fileInputRef.current) fileInputRef.current.value = ""; }}
                                                className="text-white/40 hover:text-red-400 transition-colors ml-1">
                                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            </button>
                                        </div>
                                    ) : (
                                        <span className="text-white/70 text-sm">Click to browse or drag file here</span>
                                    )}
                                </div>
                            </div>

                            <ValidationError message={careerOtp.validationError} />
                            <StatusMessages flow={careerOtp} />

                            <Button type="button" onClick={handleApply} disabled={careerOtp.isSubmitting}
                                className="w-full mt-4 bg-white text-black hover:bg-cff-yellow hover:text-black font-bold py-6 rounded-full uppercase tracking-wider disabled:opacity-50 disabled:cursor-not-allowed">
                                {careerOtp.formStatus === "sending-otp" ? (
                                    <span className="flex items-center gap-2"><Spinner /> Sending OTP...</span>
                                ) : careerOtp.formStatus === "success" ? "Applied ✓" : "Apply Now"}
                            </Button>
                        </form>

                        <OtpModal email={careerEmail} flow={careerOtp} onVerifySuccess={submitCareerApplication} />
                    </motion.div>

                    {/* ═══ Right: Franchise ═══ */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="bg-cff-yellow p-8 md:p-12 rounded-[2rem] shadow-[0_0_50px_rgba(255,195,0,0.15)] relative overflow-hidden"
                    >
                        <div className="absolute -bottom-10 -right-10 text-[150px] font-black text-black/5 pointer-events-none transform -rotate-12 leading-none">CFF</div>

                        <div className="relative z-10">
                            <h3 className="text-3xl font-black text-black uppercase tracking-wide mb-2">Franchise Inquiry</h3>
                            <p className="text-black/60 text-sm mb-8 font-medium">Partner with a proven model built on operational excellence.</p>

                            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-xs font-bold text-black/60 uppercase tracking-wider mb-2">Name <span className="text-red-600">*</span></label>
                                        <Input type="text" placeholder="John Doe" value={frName}
                                            onChange={(e) => { setFrName(e.target.value); franchiseOtp.setValidationError(""); }}
                                            className="bg-white/60 border-black/10 text-black placeholder:text-black/30 rounded-xl focus-visible:ring-black" />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold text-black/60 uppercase tracking-wider mb-2">Location</label>
                                        <Input type="text" placeholder="City" value={frLocation}
                                            onChange={(e) => setFrLocation(e.target.value)}
                                            className="bg-white/60 border-black/10 text-black placeholder:text-black/30 rounded-xl focus-visible:ring-black" />
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-xs font-bold text-black/60 uppercase tracking-wider mb-2">Phone <span className="text-red-600">*</span></label>
                                        <Input type="tel" placeholder="+91 XXXXX XXXXX" value={frPhone}
                                            onChange={(e) => { setFrPhone(e.target.value); franchiseOtp.setValidationError(""); }}
                                            className="bg-white/60 border-black/10 text-black placeholder:text-black/30 rounded-xl focus-visible:ring-black" />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold text-black/60 uppercase tracking-wider mb-2">Email <span className="text-red-600">*</span></label>
                                        <Input type="email" placeholder="you@email.com" value={frEmail}
                                            onChange={(e) => { setFrEmail(e.target.value); franchiseOtp.setValidationError(""); }}
                                            className="bg-white/60 border-black/10 text-black placeholder:text-black/30 rounded-xl focus-visible:ring-black" />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-xs font-bold text-black/60 uppercase tracking-wider mb-2">Investment Capacity</label>
                                    <select value={frInvestment} onChange={(e) => setFrInvestment(e.target.value)}
                                        className="flex h-10 w-full items-center justify-between rounded-xl border border-black/10 bg-white/60 px-3 py-2 text-sm ring-offset-background placeholder:text-black/30 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 text-black">
                                        <option value="">Select Range</option>
                                        <option value="₹10L - ₹25L">₹10L - ₹25L</option>
                                        <option value="₹25L - ₹50L">₹25L - ₹50L</option>
                                        <option value="₹50L+">₹50L+</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-xs font-bold text-black/60 uppercase tracking-wider mb-2">F&B Experience</label>
                                    <Textarea placeholder="Tell us briefly about your background..." value={frExperience}
                                        onChange={(e) => setFrExperience(e.target.value)}
                                        className="bg-white/60 border-black/10 text-black placeholder:text-black/30 rounded-xl resize-none h-24 focus-visible:ring-black" />
                                </div>

                                <ValidationError message={franchiseOtp.validationError} dark />
                                <StatusMessages flow={franchiseOtp} dark />

                                <Button type="button" onClick={handleFranchiseSubmit} disabled={franchiseOtp.isSubmitting}
                                    className="w-full mt-2 bg-black text-cff-yellow hover:bg-black/90 font-bold py-6 rounded-full uppercase tracking-wider disabled:opacity-50 disabled:cursor-not-allowed">
                                    {franchiseOtp.formStatus === "sending-otp" ? (
                                        <span className="flex items-center gap-2"><Spinner /> Sending OTP...</span>
                                    ) : franchiseOtp.formStatus === "success" ? "Submitted ✓" : "Submit Inquiry"}
                                </Button>
                            </form>
                        </div>

                        <OtpModal email={frEmail} flow={franchiseOtp} onVerifySuccess={submitFranchiseInquiry} accentDark />
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
