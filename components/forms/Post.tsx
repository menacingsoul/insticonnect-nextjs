"use client"

import * as z from "zod";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { usePathname, useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { isBase64Image } from "@/lib/utils";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

import { useUploadThing } from "@/lib/uploadthing";
import { updateUser } from "@/lib/actions/user.actions";
import { PostValidation } from "@/lib/validations/post";
interface Props {
  post: {
    id: string;
    accountId: string;
    description: string;
    image: string;
  };
  userId: string;
}


 

function Post({post}:Props)
{
  const [files,setFiles] = useState<File[]>([]);
  const {startUpload} = useUploadThing("media");
  const router = useRouter();
  const pathname = usePathname();
    

 

  const form = useForm<z.infer<typeof PostValidation>>({
    resolver: zodResolver(PostValidation),
    defaultValues: {
      photo: post?.image ? post.image : "",
      description: post?.description? post.description : "",
    },
  });
  const onSubmit = async () => {
   
    };


    return(
        <Form {...form}>
        <form
          className='mt-10 flex flex-col justify-start gap-10'
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <FormField
            control={form.control}
            name='description'
            render={({ field }) => (
              <FormItem className='flex w-full flex-col gap-3'>
                <FormLabel className='text-base-semibold text-light-2'>
                  Content
                </FormLabel>
                <FormControl className='no-focus border border-dark-4 bg-dark-3 text-light-1'>
                  <Textarea rows={15} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
  
          <Button type='submit' className='bg-primary-500'>
            Create Post
          </Button>
        </form>
      </Form>
    )
}
export default Post;