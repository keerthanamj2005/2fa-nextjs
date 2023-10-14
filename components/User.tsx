import {
  logout,
  verifyIfUserIsEnrolled,
  verifyUserEmail,
} from "@/firebase/authentication";
import { User } from "@firebase/auth";
import Link from "next/link";
import { notify } from "@/utils/notify";

type Props = {
  currentUser: User | null;
};

export function UserComponent({ currentUser }: Props) {
  async function sendEmail() {
    if (currentUser) {
      const response = await verifyUserEmail(currentUser);

      if (response) {
        notify("An Email has been sent to you.");
      } else {
        notify("Something went wrong");
      }
    }
  }

  return (
    <div className="bg-white h-screen w-screen overflow-y-scroll">
      <div className="flex flex-col justify-center items-center px-12 gap-y-12 pt-5">
        <h2 className="mt-20 text-3xl text-center font-bold text-gray-800">
          Welcome to CyberSecurity Hackathon 2023.
        </h2>
        <span className="text-lg font-bold -mt-[25px]">
          Jyothy Institute of Technology.
        </span>

        {currentUser &&
          currentUser.emailVerified &&
          !verifyIfUserIsEnrolled(currentUser) && (
            <Link className="hover:text-black  text-center w-full" href="/mfa">
              <span className="bg-black text-white px-[15px] py-[10px] rounded-md">
                Activate the multifactor authentication
              </span>
            </Link>
          )}
        {currentUser &&
          !currentUser.emailVerified &&
          !verifyIfUserIsEnrolled(currentUser) && (
            <button
              onClick={sendEmail}
              className="hover:text-black underline text-center w-full"
            >
              Verify your email
            </button>
          )}
        <button
          onClick={logout}
          className="bg-black rounded-md flex h-11 items-center justify-center px-6"
        >
          <span className="relative text-base font-light text-white">
            Disconnect
          </span>
        </button>

        <hr />
        <div className="w-full px-10">
          <p className="text-xl">
            In this report, I will walk you through the process of creating a
            secure Two-Factor Authentication (2FA) website using Next.js,
            Firebase, React Toast, Phosphor React, and TypeScript. 2FA is a
            crucial security feature that enhances the protection of user
            accounts and sensitive data. By combining these technologies, we've
            built a user-friendly and secure platform.
          </p>
          <h1 className="text-3xl font-bold mt-8">Technologies Used</h1>

          <div className="mt-10 px-3">
            <span className="text-2xl font-bold mb-2">Next.js</span> <br />
            Next.js is a React framework that simplifies server-side rendering
            and provides an excellent development experience. We've leveraged it
            for creating a responsive and fast web application.
            <br />
          </div>
          <div className="mt-10 px-3">
            <span className="text-2xl font-bold mb-2">Firebase</span> <br />
            Firebase offers a suite of cloud-based tools for building web and
            mobile applications. We've used Firebase for user authentication,
            real-time database, and hosting to ensure our site is reliable and
            secure.
          </div>
          <div className="mt-10 px-3">
            <span className="text-2xl font-bold mb-2">React Toast</span> <br />
            React Toast is a library for displaying user-friendly notifications.
            We've implemented it to provide informative feedback to our users
            during the 2FA setup and login process.
          </div>
          <div className="mt-10 px-3">
            <span className="text-2xl font-bold mb-2">Phosphor Icons</span>{" "}
            <br />
            Phosphor Icons offers a beautiful set of open-source icons. We've
            integrated Phosphor React to enhance the visual appeal of our site.
          </div>
          <div className="mt-10 px-3">
            <span className="text-2xl font-bold mb-2">Typescript</span> <br />
            TypeScript is a statically typed superset of JavaScript. We used it
            to write clean, maintainable code and catch errors during
            development.
          </div>
          <div className="mt-10 px-3">
            <span className="text-2xl font-bold mb-2">React Toast</span> <br />
            React Toast is a library for displaying user-friendly notifications.
            We've implemented it to provide informative feedback to our users
            during the 2FA setup and login process.
          </div>
        </div>
      </div>
    </div>
  );
}
