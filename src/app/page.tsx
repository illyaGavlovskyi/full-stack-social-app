import CreatePost from "@/components/CreatePost";
import { currentUser } from "@clerk/nextjs/server";

export default async function Home() {
  const user = await currentUser();
  return (
    <div className = "grid grid-cols-1 lg:grid-cols-10 gap-6">
      <div className = "lg:col-span-6">
        { user ? <CreatePost /> : null}
      </div>
      <div className = "lg:blok lg:col-span-4 sticky top-20">
        <WhoToFollow />
      </div>
    </div>
  );
}