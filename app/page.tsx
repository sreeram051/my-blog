import { Card, CardContent } from "@/components/ui/card";
import { simpleBlogCard } from "./lib/interface";
import { client, urlFor } from "./lib/sanity";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

async function getData () {
  const query = `
  *[_type == 'blog'] | order(_createdAt desc)
  {
  title,
    smallDescription,
    "currentSlug":slug.current,
    image
} `

  const data = await client.fetch(query);
  return data;
}



export default async function Home() {

  const data: simpleBlogCard[] = await getData();
  return (
   <div className="grid grid-cols-1 md:grid-cols-2 mt-5 gap-5 mb-8" >
    {data.map((post , idx) => (
      <Card key={idx}>
        <Image src={urlFor(post.image).url()}
         alt="image"
         width={500} 
         height={500}
         className="rounded-t-lg h-[300px] w-[600px] object-cover"
         />
         <CardContent className="mt-5">
          <h3 className="text-xl font-bold">{post.title}</h3>
          <p className="mt-3 line-clamp-3 dark:text-gray-400 text-gray-700">{post.smallDescription}</p>
          <Button asChild className="mt-4 w-full">
            <Link href={`/blog/${post.currentSlug}`}>Readmore</Link>
          </Button>
         </CardContent>
      </Card>
    ))}
   </div>
  );
}
