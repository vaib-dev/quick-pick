"use client";
import React, { useEffect, useState } from "react";
import * as z from "zod";
import HeadingComp from "@/components/custom/Heading";
import { Download, ImageIcon, MessageCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import axios from "axios";
import { amountOptions, formSchema, resolutionOptions } from "./formSchema";
import { Empty } from "@/components/custom/Empty";
import { EmptyImage } from "@/components/ui/emptyConversation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardFooter } from "@/components/ui/card";
import Image from "next/image";
import { useProModel } from "@/hooks/useProModal";
import toast from "react-hot-toast";

const ImageGeneration = () => {
  const router = useRouter();
  const proModal = useProModel();
  const [images, setImages] = useState<any[]>([]);
  const [error, setError] = useState<boolean>(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
      amount: "1",
      resolution: "512x512",
    },
  });

  const isLoading = form.formState.isSubmitting;
  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      setImages([]);
      const response = await axios.post("/api/image", data);
      const urls = response?.data?.map((image: { url: string }) => image.url);
      setImages(urls);
      form.reset();
    } catch (error: any) {
      if (error?.response?.status === 403) {
        proModal.onOpenPro();
      } else {
        toast.error("Something went wrong. Please try again later.");
      }
    } finally {
      router.refresh();
    }
  };
  useEffect(() => {
    if (form.formState.errors.prompt) {
      setError(!error);
    }
  }, [form.formState.errors, error]);
  return (
    <div>
      <HeadingComp
        title="Image Generator"
        description="Generate images from text."
        Icon={ImageIcon}
        color="text-[#FF004D]"
        bgColor="bg-black/10"
      />
      <div className="px-4 py-6 mt-4 bg-white rounded-lg shadow-md">
        <div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="rounded-lg border w-full px-3 py-3 md:px-6 focus-within:shadow-sm grid grid-cols-12 gap-2"
            >
              <FormField
                name="prompt"
                render={({ field }) => (
                  <FormItem className="col-span-12 lg:col-span-3 md:col-span-12">
                    <FormControl className="m-0 p-0">
                      <Input
                        className="border-0 outline-none focus-visible:ring-transparent focus-visible:ring-0 focus-visible:ring-offset-transparent focus-visible:ring-offset-0"
                        disabled={isLoading}
                        placeholder="Person sitting on a chair"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="amount"
                render={({ field }) => (
                  <FormItem className="col-span-12 lg:col-span-2 md:col-span-3">
                    <Select
                      disabled={isLoading}
                      onValueChange={field.onChange}
                      value={field.value}
                      defaultValue={field.value}
                    >
                      <FormControl className="m-0 p-4">
                        <SelectTrigger>
                          <SelectValue defaultValue={field.value} />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {amountOptions.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="resolution"
                render={({ field }) => (
                  <FormItem className="col-span-12 lg:col-span-2 md:col-span-3">
                    <Select
                      disabled={isLoading}
                      onValueChange={field.onChange}
                      value={field.value}
                      defaultValue={field.value}
                    >
                      <FormControl className="m-0 p-4">
                        <SelectTrigger>
                          <SelectValue defaultValue={field.value} />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {resolutionOptions.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                className="col-span-12 lg:col-span-2 md:col-span-6 w-full bg-[#6B240C]"
                disabled={isLoading}
              >
                Show Images
              </Button>
            </form>
            {form.formState.errors.prompt && error && (
              <p className="ml-2 text-[12px] text-red-500 p-1">
                {form.formState.errors.prompt.message}
              </p>
            )}
          </Form>
        </div>
      </div>
      <div className="mt-4">
        {isLoading && (
          <div className="flex items-center mt-10 justify-center">
            <div className="relative flex justify-center items-center">
              <div className="absolute animate-spin rounded-full h-24 w-24 border-t-4 border-b-4 border-[#111827]"></div>
              <Image
                src="/avatar-thinking.svg"
                fill
                className="rounded-full h-20 w-16"
                alt=""
              />
            </div>
          </div>
        )}
        {images.length === 0 && !isLoading && (
          <Empty label="Generate your first image." Icon={EmptyImage} />
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-8">
          {images.map((src, index) => (
            <Card key={index} className="rounded-lg overflow-hidden">
              <div className="relative aspect-square">
                <Image src={src} alt="image" fill />
              </div>
              <CardFooter className="p-2">
                <Button
                  variant={"secondary"}
                  className="w-full"
                  onClick={() => window.open(src)}
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageGeneration;
