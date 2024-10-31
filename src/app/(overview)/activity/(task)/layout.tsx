import ActivityNavBar from "@/components/NavBar/ActivityNavBar";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-[681px] mx-auto -mt-[36px] pb-10 flex flex-col gap-6 bg-white">
        <ActivityNavBar />
        {children}
    </div>
  );
}
