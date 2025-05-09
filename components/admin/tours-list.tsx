"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Edit, Trash2, Eye, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { deleteTour, getTours } from "@/app/action/tour-actions";
import { Tour } from "@/types";
import Loading from "../ui/loading";
import { useAlert } from "@/context/AlertProvider";

export default function ToursList() {
  const [tours, setTours] = useState<Tour[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [tourToDelete, setTourToDelete] = useState<string | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);

  const { showAlert } = useAlert();

  const filteredTours = tours.filter(
    (tour) =>
      tour.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tour.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleDeleteClick = (tourId: string) => {
    setTourToDelete(tourId);
    setDeleteDialogOpen(true);
  };

  const confirmDelete = async () => {
    if (!tourToDelete) return;

    setIsDeleting(true);
    try {
      // In a real app, this would call an API endpoint
      await deleteTour(tourToDelete);
      setTours(tours.filter((tour) => tour.id !== tourToDelete));
      showAlert("Tour deleted successfully.", "success");
    } catch (error) {
      showAlert("Failed to delete tour.", "error");
    } finally {
      setIsDeleting(false);
      setDeleteDialogOpen(false);
      setTourToDelete(null);
    }
  };

  useEffect(() => {
    const loadTours = async () => {
      setLoading(true);
      try {
        const data = await getTours();
        setTours(data);
      } catch (error) {
        console.error("Failed to fetch tours:", error);
      } finally {
        setLoading(false);
      }
    };

    loadTours();
  }, []);

  if (loading) return <Loading />;

  return (
    <div>
      {loading && (
        <div className="z-[99] fixed inset-0">
          <Loading />
        </div>
      )}
      <div className="flex items-center mb-6">
        <div className="relative flex-1 max-w-md">
          <Search className="top-2.5 left-2.5 absolute w-4 h-4 text-gray-500" />
          <Input
            type="search"
            placeholder="Search tours..."
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="border rounded-md">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Tour</TableHead>
              <TableHead>Slug</TableHead>
              <TableHead>Duration</TableHead>
              <TableHead>Price</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredTours.length === 0 ? (
              <TableRow>
                <TableCell
                  colSpan={5}
                  className="py-8 text-gray-500 text-center"
                >
                  No tours found. Try a different search or add a new tour.
                </TableCell>
              </TableRow>
            ) : (
              filteredTours.map((tour) => (
                <TableRow key={tour.id}>
                  <TableCell className="font-medium">
                    <div className="flex items-center gap-3">
                      <div className="relative rounded-md w-12 h-12 overflow-hidden">
                        <Image
                          src={tour.image || "/placeholder.svg"}
                          alt={tour.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <div className="font-semibold">{tour.title}</div>
                        <div className="max-w-[250px] text-gray-500 text-sm truncate">
                          {tour.description}
                        </div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>{tour.slug}</TableCell>
                  <TableCell>{tour.duration}</TableCell>
                  <TableCell>{tour.price}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button variant="ghost" size="icon" asChild>
                        <Link href={`/admin/tours/${tour.id}`}>
                          <Eye className="w-4 h-4" />
                          <span className="sr-only">View</span>
                        </Link>
                      </Button>
                      <Button variant="ghost" size="icon" asChild>
                        <Link href={`/admin/tours/${tour.id}/edit`}>
                          <Edit className="w-4 h-4" />
                          <span className="sr-only">Edit</span>
                        </Link>
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleDeleteClick(tour.id)}
                      >
                        <Trash2 className="w-4 h-4" />
                        <span className="sr-only">Delete</span>
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      <Dialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirm Deletion</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete this tour? This action cannot be
              undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setDeleteDialogOpen(false)}
              disabled={isDeleting}
            >
              Cancel
            </Button>
            <Button
              variant="destructive"
              onClick={confirmDelete}
              disabled={isDeleting}
            >
              {isDeleting ? "Deleting..." : "Delete"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
