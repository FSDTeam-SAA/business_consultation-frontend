import ProtectedRoute from "@/components/Auth/ProtectedRoute";
import Footer from "@/components/footer";
import Navbar from "@/components/navar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ProtectedRoute>
      <>
      
      <Navbar />
        {children}  
      <Footer />
      </>          
     </ProtectedRoute>
  );
}
