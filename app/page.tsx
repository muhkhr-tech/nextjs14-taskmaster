import Link from "next/link";

export default function Home() {

  return (
    <div className="grid grid-cols-3 gap-4 justify-center items-center h-screen sm:h-96">
      <Link href={"/projects?status=todo"}>
        <div className="rounded-md shadow-md border border-purple-300 shadow-purple-300 p-4">
          DO
        </div>
      </Link>
      <Link href={"/projects?status=inprogress"}>
        <div className="rounded-md shadow-md border border-yellow-300 shadow-yellow-300 p-4">
          DOING
        </div></Link>
      <Link href={"/projects?status=completed"}>
        <div className="rounded-md shadow-md border border-green-300 shadow-green-300 p-4">
          DONE
        </div></Link>
    </div>
  );
}
