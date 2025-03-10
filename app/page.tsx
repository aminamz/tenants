import { headers } from "next/headers";

export default async function Home() {
  const header = await headers();
  const hostName = header.get("host");
  return <p>HostName : {hostName}</p>;
}
