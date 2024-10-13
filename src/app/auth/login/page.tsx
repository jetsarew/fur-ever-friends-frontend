import Link from "next/link";

export default function Login() {
  // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();

  //   const form = e.currentTarget;
  //   const email = (form.elements.namedItem("email") as HTMLInputElement).value;
  //   const password = (form.elements.namedItem("password") as HTMLInputElement)
  //     .value;

  //   console.log("Email:", email);
  //   console.log("Password:", password);
  // };
  return (
    <>
      <div className=" flex flex-col gap-[64px] mx-auto w-[506px] items-center">
        <h2 className="text-header">Welcome to Fur-ever Friends</h2>

        <div className="flex flex-col gap-6 w-[442px]">
          <div className="text-subheading2 flex flex-col gap-2 ">
            <label htmlFor="email" className="text-suheading2 text-dark-blue">
              Email
            </label>
            <input
              className="text-body py-[15px] px-[18px] border border-[#D9D9D9] rounded-lg"
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="text-subheading2 flex flex-col gap-2 ">
            <label
              htmlFor="password"
              className="text-suheading2 text-dark-blue"
            >
              Password
            </label>
            <input
              className="text-body py-[15px] px-[18px] border border-[#D9D9D9] rounded-lg"
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="mt-2 flex flex-col items-center gap-8">
            <button
              type="submit"
              className="w-full px-6 py-4 text-button text-white bg-bright-blue rounded-lg"
            >
              Log in
            </button>
            <p className="text-small text-soft-gray flex flex-row gap-2 items-baseline">
              Don’t have an account yet?{" "}
              <Link
                href="/auth/signup"
                className="text-body-bold underline text-bright-blue "
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
