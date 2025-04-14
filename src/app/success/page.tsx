import Link from "next/link"
import { CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import Image from "next/image"

export default function PaymentSuccessPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white p-4">
      <Card className="w-full max-w-md border border-green-500 rounded-xl">
        <CardHeader className="flex flex-col items-center space-y-2 pt-8">
           <div className="mb-6 flex justify-center">
                   <div className="flex items-center">
                     <Image
                       src="/asset/fomrLogo.png"
                       alt="Business Consultation Logo"
                       width={140}
                       height={140}
                       className="mr-2"
                     />
                   </div>
                 </div>
          <h3 className="text-2xl font-bold text-center mt-6">Payment Successful</h3>
          <p className="text-muted-foreground text-center">
            Thank you for your payment. Your transaction has been completed successfully.
          </p>
        </CardHeader>
        <CardContent className="flex flex-col items-center pb-4">
          <div className="flex items-center justify-center w-20 h-20 rounded-full bg-green-100 mb-4">
            <CheckCircle className="h-10 w-10 text-green-500" />
          </div>
          <div className="text-center space-y-2">
            <h4 className="text-lg font-medium">Transaction Details</h4>
            <p className="text-muted-foreground">
              A confirmation email has been sent to your registered email address.
            </p>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4 pt-2 pb-8">
          <Button asChild className="w-full bg-green-500 hover:bg-green-600">
            <Link href="/login">Log In</Link>
          </Button>
          {/* <p className="text-sm text-center text-muted-foreground">
            Please log in to access your account and view your purchase details.
          </p> */}
        </CardFooter>
      </Card>
    </div>
  )
}
