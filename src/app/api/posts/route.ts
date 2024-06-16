export async function GET() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_DIRECTUS_URL}/items/post`,
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
    return Response.json({ data: [] });
  }

  const { data } = await res.json();

  return Response.json({ data });
}
