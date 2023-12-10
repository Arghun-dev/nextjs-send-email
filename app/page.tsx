import GithubAccessTokenEmail from "@/components/email-template";
import { Resend } from "resend";

export default async function Home() {
  async function send() {
    "use server";

    const resend = new Resend();

    const { data } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: ["arghun.developer@gmail.com"],
      subject: "First Resend Email",
      react: GithubAccessTokenEmail({ username: "Sara" }),
    });

    console.log(data);
  }

  return (
    <form action={send}>
      <button
        type="submit"
        className="bg-gray-300 p-2 rounded-md cursor-pointer m-4"
      >
        Send Email
      </button>
    </form>
  );
}
