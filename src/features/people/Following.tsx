import AllUsers from "@/features/people/AllUsers";

export default function Following() {
  return (
    <AllUsers
      endpoint="/collection/list/followed-users"
      emptyOnNotFound
      emptyTitle="No followed users"
      emptyDescription="Follow people to see them here."
    />
  );
}
