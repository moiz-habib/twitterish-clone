"use client";

import { InputSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ButtonWithIcon } from "./button-icon";
import {createTweets}  from "@/actions/writeTweet";

export const InputWithButton = () => {
  const form = useForm<z.infer<typeof InputSchema>>({
    resolver: zodResolver(InputSchema),
    defaultValues: {
      tweet: "",
    },
  });
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof InputSchema>) {
    // console.log(values)
    createTweets(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex gap-3">
        <FormField
          control={form.control}
          name="tweet"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  className="w-[500px]"
                  type=""
                  placeholder="tweet"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <ButtonWithIcon />
      </form>
    </Form>
  );
};
// function createTweet(values: { tweet: string }) {
//   throw new Error("Function not implemented.");
// }
