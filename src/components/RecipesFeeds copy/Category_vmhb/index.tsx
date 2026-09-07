import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Category_vmhb() {
  return (
    <div className="flex justify-center items-center">
      <div className="flex justify-center items-center w-1/2 border-2 border-slate-800">
        <Card className="border-4 border-slate-800">
          <CardHeader>
            <CardTitle>Nasi Goreng Spesial</CardTitle>
            <CardDescription>Recipe by: Imanda</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
