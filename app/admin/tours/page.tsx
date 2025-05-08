"use client";

import Link from "next/link";
import { PlusCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import ToursList from "@/components/admin/tours-list";
import withAdminAuth from "@/app/hoc/withAdminAuth";


function ToursPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 mx-auto px-4 py-8 container">
        <div className="flex justify-between items-center mb-8">
          <h1 className="font-bold text-3xl">Tour Management</h1>
          <Button asChild>
            <Link href="/admin/tours/new" className="flex items-center">
              <PlusCircle className="mr-2 w-5 h-5" />
              Add New Tour
            </Link>
          </Button>
        </div>

        <ToursList />
      </main>
    </div>
  );
}

export default withAdminAuth(ToursPage);
