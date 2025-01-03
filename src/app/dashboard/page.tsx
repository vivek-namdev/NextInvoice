import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { CirclePlus } from "lucide-react";
import Link from "next/link"; // Make sure to import Link if using Next.js

export default function Home() {
  return (
    <main className="flex flex-col h-full justify-center items-center text-center gap-6 max-w-5xl mx-auto py-6">
      <div className="flex justify-between items-center w-full px-4">
        <h1 className="text-5xl font-bold text-gray-800">Invoices</h1>
        <Link href="/invoices/new">
          <Button variant="outline" className="flex items-center gap-2">
            <CirclePlus className="h-4 w-4" />
            Create Invoice
          </Button>
        </Link>
      </div>
      
      <Table className="bg-white shadow-md rounded-lg overflow-hidden w-full mt-6">
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow className="border-b">
            <TableHead className="w-[120px] text-left">Date</TableHead>
            <TableHead className="text-left">Customer</TableHead>
            <TableHead className="text-left">Email</TableHead>
            <TableHead className="text-left">Status</TableHead>
            <TableHead className="text-right">Value</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow className="border-b">
            <TableCell className="font-medium">03/01/2025</TableCell>
            <TableCell>Vivek Namdev</TableCell>
            <TableCell>viveknamdev897@gmail.com</TableCell>
            <TableCell>
              <Badge className="bg-blue-500 text-white p-2 rounded-md">Open</Badge>
            </TableCell>
            <TableCell className="text-right">$250.00</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </main>
  );
}