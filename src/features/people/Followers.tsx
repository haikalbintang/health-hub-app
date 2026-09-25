import AllUsers from "@/features/people/AllUsers";

export default function Followers() {
  return (
    <AllUsers
      endpoint="/collection/list/user-followers"
      emptyOnNotFound
      emptyTitle="No followers yet"
      emptyDescription="People who follow you will appear here."
    />
  );
}
