import { Button } from "@/components/ui/button";
import { Bell } from "lucide-react";

export default function NotificationPage() {
  // Sample data
  const notifications = [
    {
      id: 1,
      title: "Subscription renewal successful",
      message: "Your subscription has been successfully renewed",
      date: "Feb 25, 2023 - 9:15 AM",
      icon: "S",
    },
    {
      id: 2,
      title: "Payment method expired",
      message:
        "Your payment method has expired. Please update it to avoid interruptions.",
      date: "Feb 25, 2023 - 9:12 AM",
      icon: "P",
    },
    {
      id: 3,
      title: "Your Custom Code",
      message: "Your custom code is 15241",
      date: "Feb 25, 2023 - 9:10 AM",
      icon: "C",
    },
    {
      id: 4,
      title: "Payment method expired",
      message:
        "Your payment method has expired. Please update it to avoid interruptions.",
      date: "Feb 25, 2023 - 9:07 AM",
      icon: "P",
    },
    {
      id: 5,
      title: "Subscription renewal successful",
      message: "Your subscription has been successfully renewed",
      date: "Feb 25, 2023 - 9:05 AM",
      icon: "S",
    },
    {
      id: 6,
      title: "Subscription renewal successful",
      message: "Your subscription has been successfully renewed",
      date: "Feb 25, 2023 - 9:01 AM",
      icon: "S",
    },
    {
      id: 7,
      title: "Payment method expired",
      message:
        "Your payment method has expired. Please update it to avoid interruptions.",
      date: "Feb 25, 2023 - 8:55 AM",
      icon: "P",
    },
  ];

  return (
    <div>
      <h1 className="mb-6 border-b border-[#CECECE] pb-4 text-2xl font-bold">
        Notifications
      </h1>
      <div className="space-y-4">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className="flex items-start justify-between border-b p-4"
          >
            <div className="flex gap-4">
              <div className="flex h-[38px] w-[38px] items-center justify-center rounded-full bg-[#282828]">
                <Bell className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="text-[18px] font-[500] text-[#000000]">
                  {notification.title}
                </h3>
                <p className="text-[16px] text-[#595959]">
                  {notification.message}
                </p>
              </div>
            </div>
            <div className="flex flex-col items-end gap-2">
              <span className="text-xs text-muted-foreground">
                {notification.date}
              </span>
              <Button
                variant="ghost"
                className="h-6 p-2 text-[16px] font-[500] text-red-500 hover:bg-red-50 hover:text-red-700"
              >
                Delete
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
