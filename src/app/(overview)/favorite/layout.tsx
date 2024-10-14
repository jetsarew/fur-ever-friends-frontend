export default function Layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <div className="w-[1154px] mx-auto -mt-[48px] flex flex-col gap-6 bg-white">
          {children}
      </div>
    );
  }
  