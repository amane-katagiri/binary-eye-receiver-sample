import { Hono } from "hono";
const app = new Hono();

app
  .get("/", async (c) =>
    c.text(`${c.req.method} content: ${c.req.query("content") ?? "no content"}`)
  )
  .post(async (c) =>
    c.text(
      `${c.req.method} content: ${
        (await c.req.parseBody())["content"] ??
        (await c.req.json<{ content: string }>())["content"] ??
        "no content"
      }`
    )
  );

export default app;
