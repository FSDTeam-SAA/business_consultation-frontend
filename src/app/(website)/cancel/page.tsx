// app/payment/cancel/page.tsx
import Link from "next/link";
import { Button } from "@/components/ui/button"; // Assuming you're using ShadCN UI

export default function PaymentCancelPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center bg-white">
      <h1 className="text-3xl font-bold text-red-600 mb-4">Payment Cancelled</h1>
      <p className="text-gray-600 mb-6">
        Your payment was not completed. You can try again or go back to the homepage.
      </p>
      <div className="flex gap-4">
        <Link href="/checkout">
          <Button variant="outline">Try Again</Button>
        </Link>
        <Link href="/">
          <Button>Go to Home</Button>
        </Link>
      </div>
    </div>
  );
}
