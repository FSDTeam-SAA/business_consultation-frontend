import Link from "next/link";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Image from "next/image";

export default function PaymentSuccessPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white p-4">
      <Card className="w-full max-w-md rounded-xl border border-green-500">
        <CardHeader className="flex flex-col items-center space-y-2 pt-8">
          <div className="mb-6 flex justify-center">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <Image
                  src={"/asset/logo.png"}
                  width={500}
                  height={500}
                  alt="logo"
                  className="w-[150px]"
                />
                <p className="-ml-[30px] text-[14px] font-medium text-[#09B850]">
                  {" "}
                  Going 2{"  "}
                  <span className={"text-gray-800"}>Zero</span>
                </p>
              </Link>
              {/* <Image
              src="/asset/fomrLogo.png"
              alt="Business Consultation Logo"
              width={140}
              height={140}
              className="mr-2"
            /> */}
            </div>
          </div>
          <h3 className="mt-6 text-center text-2xl font-bold">
            Payment Successful
          </h3>
          <p className="text-center text-muted-foreground">
            Thank you for your payment. Your transaction has been completed
            successfully.
          </p>
        </CardHeader>
        <CardContent className="flex flex-col items-center pb-4">
          <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
            <CheckCircle className="h-10 w-10 text-green-500" />
          </div>
          <div className="space-y-2 text-center">
            <h4 className="text-lg font-medium">Transaction Details</h4>
            <p className="text-muted-foreground">
              A confirmation email has been sent to your registered email
              address.
            </p>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4 pb-8 pt-2">
          <div className="flex gap-3">
            <Button asChild className="w-1/2 bg-green-500 hover:bg-green-600">
              <Link href="/login">Log In</Link>
            </Button>
            <Button asChild className="w-1/2 bg-green-500 hover:bg-green-600">
              <Link href="/account/dashboard">Dashboard</Link>
            </Button>
          </div>
          {/* <p className="text-sm text-center text-muted-foreground">
            Please log in to access your account and view your purchase details.
          </p> */}
        </CardFooter>
      </Card>
    </div>
  );
}
