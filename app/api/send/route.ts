import { NextResponse } from "next/server";
import { Resend } from "resend";
import { GithubAccessTokenEmail } from "@/components/email-template";

export async function GET() {
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const { data } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: ["arghun.developer@gmail.com"],
      subject: "First Resend Email",
      react: GithubAccessTokenEmail({ username: "Sara" }),
    });

    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json({ error });
  }
}
