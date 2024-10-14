import AuthNavBar from "@/components/NavBar/AuthNavBar";
import Link from "next/link";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col w-[506px] gap-[32px] items-center mx-auto -mt-9 pb-[64px]">
      <h1 className="text-header">Create your account</h1>
      <AuthNavBar />
      {children}
      <div className="flex flex-row items-baseline gap-2">
        <p className="text-small text-soft-gray">Already have an account?</p>
        <Link
          href={"/auth/login"}
          className="text-body-bold text-bright-blue underline"
        >
          Log in
        </Link>
      </div>
    </div>
  );
}
