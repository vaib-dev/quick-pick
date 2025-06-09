"use client";
import React, { useEffect, useState } from "react";
import * as z from "zod";
import HeadingComp from "@/components/custom/Heading";
import { MessageCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import { formSchema } from "./formSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { ChatCompletionMessageParam } from "openai/resources/index.mjs";
import axios from "axios";
import { cn } from "@/lib/utils";
import UserAvatar from "@/components/custom/UserAvatar";
import BotAvatar from "@/components/custom/bot-avatar";
import { EmptyConversation } from "@/components/ui/emptyConversation";
import { Empty } from "@/components/custom/Empty";
import { useProModel } from "@/hooks/useProModal";
import toast from "react-hot-toast";
import Image from "next/image";

const Conversation = () => {
  const router = useRouter();
  const proModal = useProModel();
  const [generatedMessage, setGeneratedMessage] = useState<any[]>([]);
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
      const userMessage: ChatCompletionMessageParam = {
        role: "user",
        content: data.prompt,
      };
      const newMessages = [...generatedMessage, userMessage];
      const response = await axios.post("/api/conversation", {
        messages: newMessages,
      });
      setGeneratedMessage((current) => [
        ...current,
        userMessage,
        response?.data?.choices[0]?.message,
      ]);
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
        title="Conversation"
        description="One of the best conversation model."
        Icon={MessageCircle}
        color="text-green-500"
        bgColor="bg-green-500/10"
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
                        placeholder="How can I calculate the sum of two numbers?"
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
                Generate
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
        {generatedMessage.length === 0 && !isLoading && (
          <Empty
            label="Please start your conversation."
            Icon={EmptyConversation}
          />
        )}
        <div className="flex flex-col-reverse gap-y-4">
          {generatedMessage.map((generated, index) => (
            <div
              key={index}
              className={cn(
                "p-8 w-full flex items-start gap-x-8 rounded-lg",
                generated?.role === "user"
                  ? "bg-white border border-black/10"
                  : "bg-muted"
              )}
            >
              {generated?.role === "user" ? <UserAvatar /> : <BotAvatar />}
              <p className="text-sm"> {generated.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Conversation;
