import { Handlers, PageProps } from "$fresh/server.ts";

export const handler: Handlers = {
  async GET(req, ctx) {
    return await ctx.render(null);
  },
  async POST(req, ctx) {
    const form = await req.formData();
    const title = form.get("title")?.toString();
    const description = form.get("description")?.toString();

    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title,
        description,
        userId: 1,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const data = await response.json();

    /**@error return null */
    if (!data) return await ctx.render(null);

    return await ctx.render(data);
  },
};

function PagePublic(props: PageProps) {
  console.log(props.data);
  return (
    <div class="container-form">
      <form class="form-container" method="POST">
        <p class="content-title">
          <label class="title">¿Que estas sientiendo?</label>
          <input
            type="text"
            name="title"
            class="form-title"
            placeholder="Tengo Sueño..."
            autoComplete="off"
          />
        </p>
        <p class="content-description">
          <label class="description">¿que estas pensando?</label>
          <textarea
            name="description"
            class="form-description"
            rows={4}
            placeholder="Dormir en Dubai..."
            autoComplete="off"
          ></textarea>
        </p>
        <p class="content-button">
          <button type="submit">public</button>
        </p>
      </form>
    </div>
  );
}

export default PagePublic;
