import BackButton from "@/components/Button/BackButton";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
        <BackButton />
        <div className="pt-9">
            {children}
        </div>
    </div>
  );
}
