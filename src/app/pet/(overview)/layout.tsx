import BackButton from "@/components/Button/BackButton";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
        <BackButton />
        <div className="">
            {children}
        </div>
    </div>
  );
}
