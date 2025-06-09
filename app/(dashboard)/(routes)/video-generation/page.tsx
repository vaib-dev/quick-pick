"use client";
import React, { useEffect, useState } from "react";
import * as z from "zod";
import HeadingComp from "@/components/custom/Heading";
import { Music, Video } from "lucide-react";
import { useForm } from "react-hook-form";
import { formSchema } from "./formSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import axios from "axios";
import { EmptyMusic, EmptyVideo } from "@/components/ui/emptyConversation";
import { Empty } from "@/components/custom/Empty";
import { useProModel } from "@/hooks/useProModal";
import toast from "react-hot-toast";
import Image from "next/image";

const VideoGeneration = () => {
  const router = useRouter();
  const proModal = useProModel();
  const [generatedVideos, setGeneratedVideos] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
    },
  });

  const isLoading = form.formState.isSubmitting;
  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      setGeneratedVideos("");
      const response = await axios.post("/api/video", data);
      setGeneratedVideos(response.data[0]);
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
        title="Video Generation"
        description="Type your thought and turn into video."
        Icon={Video}
        color="text-[#11235A]"
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
                  <FormItem className="col-span-12 lg:col-span-10 md:col-span-8">
                    <FormControl className="m-0 p-0">
                      <Input
                        className="border-0 outline-none focus-visible:ring-transparent focus-visible:ring-0 focus-visible:ring-offset-transparent focus-visible:ring-offset-0"
                        disabled={isLoading}
                        placeholder="An astronaut riding a horse"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                className="col-span-12 lg:col-span-2 md:col-span-4 w-full bg-[#6B240C]"
                disabled={isLoading}
              >
                Watch
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
        {setGeneratedVideos.length !> 0 && !isLoading && (
          <Empty label="Create your dream video here." Icon={EmptyVideo} />
        )}
        {generatedVideos && (
          <div className="mt-4">
            <video
              src={generatedVideos}
              className="rounded-lg shadow-md w-full aspect-video mt-8"
              controls
            ></video>
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoGeneration;
