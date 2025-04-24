import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col w-full">
      <Navbar />
      <main className="mt-16 bg-[#e6e6e6] dark:bg-[#e6e6e6]">{children}</main>
      <Footer />
    </div>
  );
}
