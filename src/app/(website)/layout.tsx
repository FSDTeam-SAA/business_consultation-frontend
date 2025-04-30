import Footer from "@/components/footer";
import Navbar from "@/components/navar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <div> 
      <Navbar />
        {children}  
      <Footer />
      </div>          
  );
}
