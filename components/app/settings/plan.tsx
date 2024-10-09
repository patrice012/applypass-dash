import { Separator } from "@/components/ui/separator";
import { MoreVertical } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Unsubscribe } from "@/components/dialogs/unsubscribe";

const invoices = [
  {
    invoice: "25/02/24",
    paymentStatus: "Plan auto-renewed successfully.",
    totalAmount: "$47.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "25/02/24",
    paymentStatus: "Plan auto-renewed successfully.",
    totalAmount: "$47.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "25/02/24",
    paymentStatus: "Plan auto-renewed successfully.",
    totalAmount: "$47.00",
    paymentMethod: "Bank Transfer",
  },
];

export default function Plan() {
  return (
    <div className="w-full flex flex-col gap-[20px] mb-[100px]">
      <div className="flex flex-col xl:flex-row w-full gap-[20px] justify-between xl:items-center">
        <div className="flex flex-col gap-[6px]">
          <span className="font-bold text-2xl">Your Plan</span>
          <span className="text-[#757F87]">
            View and edit your payment settings
          </span>
        </div>
        <Unsubscribe>
          <button className=" border font-semibold border-[#EBEEF1] px-[15px] py-[10px] rounded-[5px]">
            Unsubscribe
          </button>
        </Unsubscribe>
      </div>

      <div className="bg-[#EFF5FE] w-full flex flex-col p-[32px] gap-[20px] rounded-[10px]">
        <span className="text-[#0E1E2F] font-bold">Premium</span>
        <span className="text-[#42484D]">
          Your card will be charged $100/month after your 30-day free trial.
        </span>
        <span className="text-[#0E1E2F] font-bold text-[48px]">
          $100
          <span className="text-[#0E1E2F] text-[16px] font-normal">/month</span>
        </span>
      </div>

      <div className=" justify-between border  2xl:items-end flex flex-col 2xl:flex-row p-[20px] gap-[16px] rounded-[10px]">
        <div className="flex gap-[20px] items-center">
          <div className="flex flex-col ">
            <span className="text-[#1B1B1B] font-semibold text-[15px]">
              Saved Card
            </span>
            <div className="flex xl:gap-[20px] xl:flex-row flex-col xl:h-5 xl:items-center">
              <span >Mastercard **** 2147</span>
              <Separator orientation="vertical" className=""/>
              <span>Next billing on 03 Jan, 2025</span>
            </div>
          </div>
        </div>
        <span className="underline text-[#0E1E2F] font-medium cursor-pointer">
          Change payment method
        </span>
      </div>

      <div className="flex w-full justify-between items-center">
        <div className="flex flex-col gap-[6px]">
          <span className="font-bold text-2xl">Payment History</span>
          <span className="text-[#757F87]">View your payment history</span>
        </div>
      </div>

      <Table className="px-0">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[200px] pl-0">Date</TableHead>
            <TableHead className="pl-0">Description</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.invoice}>
              <TableCell className="font-medium pl-0">
                {invoice.invoice}
              </TableCell>
              <TableCell className="pl-0">{invoice.paymentStatus}</TableCell>
              <TableCell className="text-right pl-0">
                {invoice.totalAmount}
              </TableCell>
              <TableCell className="pr-0">
                <DropdownMenu>
                  <DropdownMenuTrigger className="px-0" asChild>
                    <Button aria-haspopup="true" size="icon" variant="ghost">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuGroup>
                      <DropdownMenuLabel className="cursor-pointer px-4 font-[500] hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-sm">
                        View
                      </DropdownMenuLabel>
                    </DropdownMenuGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
