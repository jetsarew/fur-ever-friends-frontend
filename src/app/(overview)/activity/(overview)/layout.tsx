import BackButton from "@/components/Button/BackButton";
import Footer from "@/components/Footer/Footer";

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
            <Footer />
        </div>
    </div>
  );
}
