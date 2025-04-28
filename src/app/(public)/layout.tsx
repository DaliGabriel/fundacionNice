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
      <main className="mt-16 bg-[#f2f2f2] dark:bg-[#f2f2f2]">{children}</main>
      <Footer />
    </div>
  );
}
