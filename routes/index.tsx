import { Head } from "$fresh/runtime.ts";
import { Handlers, PageProps } from "$fresh/server.ts";
import Posts from "@/components/Posts.tsx";

export interface IPOST {
  userId: number;
  id: number;
  title: string;
  body: string;
}
export const handler: Handlers<IPOST[] | null> = {
  async GET(_, ctx) {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();

    /**@error return null */
    if (!data) return ctx.render(null);

    return ctx.render(data);
  },
};

export default function Home(props: PageProps<IPOST[] | null>) {
  console.log(props);
  return (
    <>
      <Head>
        <title>Fresh</title>
      </Head>
      <div>
        <Posts data={props.data} />
      </div>
    </>
  );
}
