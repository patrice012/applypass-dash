"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Search } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ReactNode } from "react";

const FormSchema = z.object({
  search: z.string().min(2, {
    message: "Search terms must be at least 2 characters.",
  }),
});

export function SearchInputForm({
  formLabel,
  formDescription,
  onSubmit,
}: {
  formLabel?: ReactNode;
  formDescription?: ReactNode;
  onSubmit: (value: string) => void;
}) {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      search: "",
    },
  });

  function _onSubmit(data: z.infer<typeof FormSchema>) {
    onSubmit(data.search);
    form.reset();
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(_onSubmit)}
        className="w-full space-y-6"
      >
        <FormField
          control={form.control}
          name="search"
          render={({ field }) => (
            <FormItem>
              {formLabel ? formLabel : null}
              <FormControl className="w-full">
                <div className="relative w-full">
                  <Input
                    {...field}
                    placeholder="Search other company"
                    className="text-[1rem] pl-10 w-full bg-[#FBFAF8] outline-none border border-solid border-neutral-300 focus:border-neutral-300 focus:border-transparent focus:outline-none focus:ring-0 focus-visible:border-neutral-300 focus-visible:border-transparent focus-visible:outline-none focus-visible:ring-0"
                  />
                  <Search
                    size={17}
                    className="absolute top-4 left-3 text-[#8f8f8f]"
                  />
                </div>
              </FormControl>
              {formDescription ? formDescription : null}
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}
