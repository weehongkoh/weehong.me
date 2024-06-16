export async function GET(
  _: Request,
  { params }: Readonly<{ params: { slug: string } }>
) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_DIRECTUS_URL}/items/post/${params.slug}`,
    {
      method: "GET",
      credentials: "include",
      headers: {
        Authorization: `Bearer ${process.env.DIRECTUS_TOKEN}`,
        "Content-Type": "application/json",
      },
      next: {
        revalidate: 0,
      },
    }
  );

  if (!res.ok) {
    return Response.json({ data: {} });
  }

  const { data } = await res.json();

  return Response.json({ data });
}
