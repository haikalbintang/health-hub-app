import AllUsers from "@/features/people/AllUsers";

export default function Chefs() {
  return (
    <AllUsers
      endpoint="/users/chefs"
      emptyTitle="No chefs found"
      emptyDescription="Check back later to discover new chefs."
    />
  );
}
