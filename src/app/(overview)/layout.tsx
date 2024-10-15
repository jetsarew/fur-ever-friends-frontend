import NavBar from "@/components/NavBar/NavBar";

export default function Layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <div className="w-full">
            <NavBar />
            {children}
      </div>
    );
  }
  