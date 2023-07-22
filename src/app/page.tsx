import { Search } from "@/components/record/search.component";
import { Records } from "@/components/record/record.component";

export default function Home() {
  return (
    <>
      <div className="space-y-5">
        <Search />
        <Records />
      </div>
    </>
  );
}
