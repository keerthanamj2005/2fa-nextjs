import Link from "next/link";
import { GithubLogo, YoutubeLogo } from "phosphor-react";

export default function Home() {
  return (
    <div className="flex flex-col gap-y-6 h-screen md:w-screen px-5 sm:px-20 lg:px-80 py-24 bg-gray-900 text-white">
      <header className="flex justify-between mb-40">
        <p className="text-3xl font-bold">Code Crafters</p>
        <nav className="flex gap-x-8">
          <Link className="hover:underline " href="/login">
            Login
          </Link>
          <Link className="" href="/sign-up">
            <span className="px-[10px] py-[5px] bg-white text-black rounded-lg hover:underline  ">
              Sign Up
            </span>
          </Link>
        </nav>
      </header>
      <h1 className="text-3xl">
        Double the Security: Two-Factor Authentication (2FA)
      </h1>
      <p>
        In an age where digital security is paramount, Two-Factor Authentication
        (2FA) emerges as a simple yet powerful solution. By adding an extra
        layer of protection beyond just passwords, 2FA ensures that accessing
        your accounts requires not just something you know (your password) but
        also something you have (like your mobile device). This additional step
        drastically enhances the security of your online presence, providing
        peace of mind in an increasingly interconnected world.
      </p>
      <p>You can find the project on Github</p>
      <Link
        className="flex items-center gap-x-4 hover:underline text-base"
        href="https://github.com/ShekMak/firebase-mfa"
      >
        <GithubLogo weight="fill" width={26} height={26} />
        <span>Github Link</span>
      </Link>
    </div>
  );
}
