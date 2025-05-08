"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { supabase } from "@/lib/supabaseClient";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { createTour, updateTour } from "@/app/action/tour-actions";

export default function TourForm({ tour }: { tour?: any }) {
  const router = useRouter();

  const [formData, setFormData] = useState({
    id: tour?.id || "",
    slug: tour?.slug || "",
    title: tour?.title || "",
    description: tour?.description || "",
    price: tour?.price || 0,
    rating: tour?.rating || 5,
    duration: tour?.duration || "",
    imageGallery: tour?.imageGallery || [],
    image:
      tour?.image || "/placeholder.svg?height=600&width=800&text=Tour+Image",
    distance: tour?.distance || "",
    difficulty: tour?.difficulty || "Beginner-Friendly",
    groupSize: tour?.groupSize || "",
    time: tour?.time || {
      start: "",
      end: "",
    },
    content: tour?.content || "",
  });

  const editor = useEditor({
    extensions: [StarterKit],
    content: formData.content,
    onUpdate: ({ editor }) => {
      const html = editor.getHTML();
      setFormData((prev) => ({
        ...prev,
        content: html,
      }));
    },
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      time: {
        ...prev.time,
        [name]: value,
      },
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      if (formData.id) {
        // Nếu có id, gọi updateTour
        const updatedTour = await updateTour(formData.id, formData);
        toast.success("Tour updated successfully!");
      } else {
        // Nếu không có id, gọi createTour
        const newTour = await createTour(formData);
        toast.success("Tour created successfully!");
      }

      // Sau khi thành công, quay lại trang danh sách tour
      router.push("/admin/tours");
    } catch (error) {
      toast.error((error as Error).message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="gap-4 grid grid-cols-1 md:grid-cols-2">
        <div>
          <Label htmlFor="title">Title</Label>
          <Input
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
        </div>
        <div>
          <Label htmlFor="slug">Slug</Label>
          <Input
            id="slug"
            name="slug"
            value={formData.slug}
            onChange={handleChange}
          />
        </div>
        <div>
          <Label htmlFor="price">Price</Label>
          <Input
            id="price"
            name="price"
            type="number"
            value={formData.price}
            onChange={handleChange}
          />
        </div>
        <div>
          <Label htmlFor="rating">Rating</Label>
          <Input
            id="rating"
            name="rating"
            type="number"
            step="0.1"
            value={formData.rating}
            onChange={handleChange}
          />
        </div>
        <div>
          <Label htmlFor="duration">Duration</Label>
          <Input
            id="duration"
            name="duration"
            value={formData.duration}
            onChange={handleChange}
          />
        </div>
        <div>
          <Label htmlFor="distance">Distance</Label>
          <Input
            id="distance"
            name="distance"
            value={formData.distance}
            onChange={handleChange}
          />
        </div>
        <div>
          <Label htmlFor="difficulty">Difficulty</Label>
          <Input
            id="difficulty"
            name="difficulty"
            value={formData.difficulty}
            onChange={handleChange}
          />
        </div>
        <div>
          <Label htmlFor="groupSize">Group Size</Label>
          <Input
            id="groupSize"
            name="groupSize"
            value={formData.groupSize}
            onChange={handleChange}
          />
        </div>
        <div>
          <Label htmlFor="image">Image</Label>
          <Input
            id="image"
            name="image"
            value={formData.image}
            onChange={handleChange}
          />
        </div>
        <div>
          <Label htmlFor="timeStart">Start Time</Label>
          <Input
            id="timeStart"
            name="start"
            type="time"
            value={formData.time.start}
            onChange={handleTimeChange}
          />
        </div>
        <div>
          <Label htmlFor="timeEnd">End Time</Label>
          <Input
            id="timeEnd"
            name="end"
            type="time"
            value={formData.time.end}
            onChange={handleTimeChange}
          />
        </div>
        <div>
          <div>
            <Label htmlFor="imageGallery">
              Image Gallery (comma-separated URLs)
            </Label>
            <Textarea
              id="imageGallery"
              name="imageGallery"
              value={formData.imageGallery.join(", ")}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  imageGallery: e.target.value
                    .split(",")
                    .map((url) => url.trim()),
                }))
              }
            />
          </div>
        </div>
      </div>

      <div>
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
      </div>

      <div>
        <Label htmlFor="content">Content</Label>
        <div className="p-2 border rounded">
          <EditorContent editor={editor} />
        </div>
      </div>

      <Button type="submit">Save Tour</Button>
    </form>
  );
}
