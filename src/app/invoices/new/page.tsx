import { sql } from 'drizzle-orm';

import { db } from '@/db';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";


export default async function Home() {
const results = await db.execute(sql`SELECT current_database()`);
  return (
    <main className="flex flex-col h-full justify-center items-center text-center gap-6 max-w-5xl mx-auto py-6">
      <div className="flex justify-center items-center w-full px-4">
        <h1 className="text-5xl font-bold text-gray-800">Create Invoice</h1>
      </div>

      <form className="flex flex-col gap-4 w-full max-w-md bg-white p-6 shadow-md rounded-md">
        <div>
          <Label
            htmlFor="billingName"
            className="block text-left text-sm font-medium text-gray-700"
          >
            Billing Name
          </Label>
          <Input
            id="billingName"
            type="text"
            placeholder="Enter billing name"
            className="mt-1"
          />
        </div>

        <div>
          <Label
            htmlFor="billingEmail"
            className="block text-left text-sm font-medium text-gray-700"
          >
            Billing Email
          </Label>
          <Input
            id="billingEmail"
            type="email"
            placeholder="Enter billing email"
            className="mt-1"
          />
        </div>

        <div>
          <Label
            htmlFor="value"
            className="block text-left text-sm font-medium text-gray-700"
          >
            Value
          </Label>
          <Input
            id="value"
            type="number"
            placeholder="Enter invoice value"
            className="mt-1"
          />
        </div>

        <div>
          <Label
            htmlFor="description"
            className="block text-left text-sm font-medium text-gray-700"
          >
            Description
          </Label>
          <Textarea
            id="description"
            placeholder="Enter description"
            className="mt-1"
          />
        </div>

        <Button type="submit" className="w-full bg-gray-800 text-white mt-4">
          Submit
        </Button>
      </form>
    </main>
  );
}