import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function SubscriptionPage() {
  // Sample data
  const subscriptions = [
    {
      type: "Basic",
      renewalDate: "8 Sep, 2020",
      expiredDate: "10 Nov, 2020",
      total: "$125.00",
      status: "Expired",
    },
    {
      type: "Basic",
      renewalDate: "8 Sep, 2020",
      expiredDate: "10 Nov, 2020",
      total: "$125.00",
      status: "Disabled",
    },
    {
      type: "Basic",
      renewalDate: "8 Sep, 2020",
      expiredDate: "10 Nov, 2020",
      total: "$125.00",
      status: "Active",
    },
    {
      type: "Basic",
      renewalDate: "8 Sep, 2020",
      expiredDate: "10 Nov, 2020",
      total: "$125.00",
      status: "Expired",
    },
    {
      type: "Basic",
      renewalDate: "8 Sep, 2020",
      expiredDate: "10 Nov, 2020",
      total: "$125.00",
      status: "Active",
    },
    {
      type: "Basic",
      renewalDate: "8 Sep, 2020",
      expiredDate: "10 Nov, 2020",
      total: "$125.00",
      status: "Disabled",
    },
    {
      type: "Basic",
      renewalDate: "8 Sep, 2020",
      expiredDate: "10 Nov, 2020",
      total: "$125.00",
      status: "Active",
    },
    {
      type: "Basic",
      renewalDate: "8 Sep, 2020",
      expiredDate: "10 Nov, 2020",
      total: "$125.00",
      status: "Active",
    },
    {
      type: "Basic",
      renewalDate: "8 Sep, 2020",
      expiredDate: "10 Nov, 2020",
      total: "$125.00",
      status: "Active",
    },
    {
      type: "Basic",
      renewalDate: "8 Sep, 2020",
      expiredDate: "10 Nov, 2020",
      total: "$125.00",
      status: "Active",
    },
  ];

  return (
    <div>
      <h1 className="mb-6 border-b border-[#CECECE] pb-4 text-2xl font-bold">
        View Current Plan
      </h1>
      <div className="rounded-md bg-muted/50">
        <Table>
          <TableHeader className="h-[70px] bg-[#CECECECC]">
            <TableRow>
              <TableHead className="pl-[30px] text-[16px] font-[600] text-[#000000]">
                Type
              </TableHead>
              <TableHead className="text-[16px] font-[600] text-[#000000]">
                Renewal Date
              </TableHead>
              <TableHead className="text-[16px] font-[600] text-[#000000]">
                Expired Date
              </TableHead>
              <TableHead className="text-[16px] font-[600] text-[#000000]">
                Total
              </TableHead>
              <TableHead className="text-[16px] font-[600] text-[#000000]">
                Status
              </TableHead>
              <TableHead className="text-[16px] font-[600] text-[#000000]">
                Action
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {subscriptions.map((subscription, index) => (
              <TableRow key={index}>
                <TableCell>
                  <Badge className="flex h-[30px] w-[87px] items-center justify-center bg-green-500 text-[12px] hover:bg-green-600">
                    {subscription.type}
                  </Badge>
                </TableCell>
                <TableCell>{subscription.renewalDate}</TableCell>
                <TableCell>{subscription.expiredDate}</TableCell>
                <TableCell>{subscription.total}</TableCell>
                <TableCell>{subscription.status}</TableCell>
                <TableCell>
                  <Button
                    variant="ghost"
                    className="h-6 p-2 text-[16px] font-[500] text-red-500 hover:bg-red-50 hover:text-red-700"
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
