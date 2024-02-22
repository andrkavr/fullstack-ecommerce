import Layout from "@/components/Layout";
import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();
  const firstname = session?.user?.name.split(" ")[0];
  console.log(session);
  return (
    <Layout>
      <div className="text-blue-900 flex justify-between">
        <h2>
          Hello, <b>{firstname}</b>{" "}
        </h2>
        <div className="flex bg-gray-300 gap-1 text-black rounded-lg p overflow-hidden">
          <img
            src={session?.user?.image}
            alt="user-profile-image"
            className="w-6 h-6"
          />
          <span className="px-2">{session?.user?.name}</span>
        </div>
      </div>
    </Layout>
  );
}
