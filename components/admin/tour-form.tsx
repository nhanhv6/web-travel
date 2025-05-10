"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { createTour, updateTour } from "@/app/action/tour-actions";
import { omit } from "lodash";
import { useAlert } from "@/context/AlertProvider";
import { supabase } from "@/lib/supabaseClient";

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

  const { showAlert } = useAlert();

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
        await updateTour(formData.id, formData);
      } else {
        await createTour(omit(formData, "id"));
      }

      showAlert(
        `"${formData.id ? "Tour  Updated" : "Create the Tour"}"  successfully.`,
        "success"
      );

      setTimeout(() => {
        router.push("/admin/tours");
      }, 2000);
    } catch (error) {
      const message = (error as Error).message;
      showAlert(message, "error");
    }
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const fileExt = file.name.split(".").pop();
    const fileName = `${Date.now()}.${fileExt}`;
    const filePath = `public/${fileName}`;

    const { data, error } = await supabase.storage
      .from("tour-images")
      .upload(filePath, file);

    if (error) {
      console.error("Upload error:", error.message);
      return;
    }

    const { data: urlData } = supabase.storage
      .from("tour-images")
      .getPublicUrl(filePath);

    if (urlData?.publicUrl) {
      setFormData((prev) => ({
        ...prev,
        image: urlData.publicUrl,
      }));
    }
  };

  const handleImageGalleryUpload = async (file: File, index: number) => {
    const fileExt = file.name.split(".").pop();
    const fileName = `${Date.now()}-${index}.${fileExt}`;
    const filePath = `public/gallery/${fileName}`;

    const { error } = await supabase.storage
      .from("tour-images")
      .upload(filePath, file);

    if (error) {
      console.error("Upload failed:", error.message);
      return;
    }

    const { data } = supabase.storage
      .from("tour-images")
      .getPublicUrl(filePath);

    if (data?.publicUrl) {
      const newGallery = [...formData.imageGallery];
      newGallery[index] = data.publicUrl;
      setFormData((prev) => ({
        ...prev,
        imageGallery: newGallery,
      }));
    }
  };

  return (
    <>
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
        </div>

        <div>
          <Label htmlFor="image">Image</Label>
          <Input
            id="image"
            name="image"
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
          />
          {formData.image && (
            <img
              src={formData.image}
              alt="Tour thumbnail"
              className="shadow mt-2 rounded w-full max-w-xs h-auto"
            />
          )}
        </div>

        <div>
          <Label>Image Gallery</Label>
          <div className="space-y-2">
            {formData.imageGallery.map((url: string, index: number) => (
              <div key={index} className="flex items-center gap-2">
                <Input
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                      handleImageGalleryUpload(file, index);
                    }
                  }}
                />
                {url && (
                  <Input
                    value={url}
                    readOnly
                    className="cursor-pointer"
                    onClick={() => window.open(url, "_blank")}
                  />
                )}
                <Button
                  type="button"
                  variant="destructive"
                  size="icon"
                  onClick={() => {
                    const newGallery = [...formData.imageGallery];
                    newGallery.splice(index, 1);
                    setFormData((prev) => ({
                      ...prev,
                      imageGallery: newGallery,
                    }));
                  }}
                >
                  ✕
                </Button>
              </div>
            ))}
            <Button
              type="button"
              onClick={() =>
                setFormData((prev) => ({
                  ...prev,
                  imageGallery: [...prev.imageGallery, ""],
                }))
              }
            >
              + Add Image URL
            </Button>
          </div>

          <div className="flex flex-wrap gap-2 mt-4">
            {formData.imageGallery.map(
              (url: string, index: number) =>
                url && (
                  <img
                    key={index}
                    src={url}
                    alt={`Gallery ${index + 1}`}
                    className="shadow rounded w-24 h-24 object-cover"
                  />
                )
            )}
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
    </>
  );
}
