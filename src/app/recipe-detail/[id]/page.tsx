export default async function RecipeDetailPage({
  params,
}: {
  params: Promise<{ id: number }>;
}) {
  const { id } = await params;

  return (
    <div>
      <p>{id}</p>
    </div>
  );
}
