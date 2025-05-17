"use client";

import type React from "react";
import { useState, useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { useAuth } from "@/hooks/useAuth";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import ChangePasswordForm from "@/components/Auth/ChangePasswordForm";

const accountFormSchema = z.object({
  fullName: z
    .string()
    .min(2, { message: "Full name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z
    .string()
    .min(10, { message: "Phone number must be at least 10 characters." }),
  address: z
    .string()
    .min(5, { message: "Address must be at least 5 characters." }),
  about: z.string().optional(),
});

type AccountFormValues = z.infer<typeof accountFormSchema>;

export default function PersonalInformationPage() {
  const { user } = useAuth();
  const queryClient = useQueryClient();

  const [token, setToken] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  useEffect(() => {
    const storedToken = sessionStorage.getItem("authToken");
    const lstoredToken = localStorage.getItem("authToken");
    if (storedToken) {
      setToken(storedToken);
    } else setToken(lstoredToken);
  }, []);

  const form = useForm<AccountFormValues>({
    resolver: zodResolver(accountFormSchema),
    defaultValues: {
      fullName: user?.fullName || "",
      email: user?.email || "",
      phone: user?.phoneNumber || "",
      address: user?.address || "",
      about: user?.about || "",
    },
  });

  useEffect(() => {
    if (user) {
      form.reset({
        fullName: user.fullName || "",
        email: user.email || "",
        phone: user.phoneNumber || "",
        address: user.address || "",
        about: user.about || "",
      });
    }
  }, [form, user]);

  const updateProfileMutation = useMutation({
    mutationFn: async (data: AccountFormValues) => {
      if (token === null) throw new Error("Token not available");
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/user/profile`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            fullName: data.fullName,
            email: data.email,
            phoneNumber: data.phone,
            address: data.address,
            about: data.about,
          }),
        },
      );
      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || "Failed to update profile");
      }

      return res.json();
    },
    onSuccess: () => {
      toast.success("Your profile has been updated successfully.");
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
    onError: () => {
      toast.error("Failed to update profile");
    },
  });

  const uploadImageMutation = useMutation({
    mutationFn: async () => {
      if (!selectedImage || token === null) {
        throw new Error("Image or token not available");
      }
      const formData = new FormData();
      formData.append("profileImage", selectedImage);

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/user/profile/image`,
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formData,
        },
      );

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || "Failed to upload image");
      }

      return res.json();
    },
    onSuccess: (success) => {
      toast.success(success.message || "Your profile image has been updated successfully.");
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
    onError: (errr) => {
      console.log(errr);
      toast.error(errr.message || "Failed to upload image");
    },
  });

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedImage(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const onSubmit = (data: AccountFormValues) => {
    updateProfileMutation.mutate(data);
  };

  return (
    <div>
      <h1 className="mb-6 border-b border-[#CECECE] pb-4 text-2xl font-bold">
        Account Settings
      </h1>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="mb-7 space-y-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-[1fr_200px]">
            <div className="space-y-6">
              {/* Full name */}
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input className="py-6" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* Email */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email address</FormLabel>
                    <FormControl>
                      <Input className="py-6" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* Phone */}
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <Input className="py-6" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* Address */}
              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Address</FormLabel>
                    <FormControl>
                      <Input className="py-6" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* About */}
              <FormField
                control={form.control}
                name="about"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>About</FormLabel>
                    <FormControl>
                      <Textarea rows={3} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" disabled={updateProfileMutation.isPaused} className="bg-green-500 hover:bg-green-600">
                {updateProfileMutation.isPending ? "Saving..." : "Save Changes"}
              </Button>
            </div>

            {/* Avatar section */}
            <div className="flex flex-col items-center gap-4">
              <label htmlFor="image" className="cursor-pointer">
                <Avatar className="h-24 w-24 border-4 border-green-500">
                  <AvatarImage
                    src={
                      previewUrl ||
                      user?.profileImage ||
                      "/placeholder.svg?height=96&width=96"
                    }
                    alt="Profile"
                  />
                  <AvatarFallback>
                    {user?.fullName?.charAt(0) || "U"}
                  </AvatarFallback>
                </Avatar>
              </label>
              <input
                type="file"
                id="image"
                hidden
                onChange={handleImageChange}
                accept="image/*"
              />
              {selectedImage && (
                <Button
                  type="button"
                  className="w-full bg-green-500 hover:bg-green-600"
                  onClick={() => uploadImageMutation.mutate()}
                  disabled={uploadImageMutation.isPending}
                >
                  {uploadImageMutation.isPending
                    ? "Uploading..."
                    : "Upload Now"}
                </Button>
              )}
            </div>
          </div>
        </form>
      </Form>

      {/* Password section is modular now */}
      <ChangePasswordForm />
    </div>
  );
}
