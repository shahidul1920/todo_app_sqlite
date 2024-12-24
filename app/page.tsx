import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center justify-center w-full h-[80vh] bg-gray-100">
      <div className="content max-w-[800px] text-start mx-auto p-6 py-[4rem] bg-white shadow-lg rounded-lg">
        <h1 className="text-3xl font-extrabold text-[50px] leading-[60px] tracking-wide capitalize text-center mb-6">Increase your productivity to the max level</h1>
        <div className="buttons flex items-center justify-center gap-4 mt-6">
          <Link href="/todos">
            <p className="py-3 px-6 bg-blue-500 text-white rounded-full font-medium hover:bg-blue-600 transition duration-300">Add Todo</p>
          </Link>
          <Link href="/">
            <p className="py-3 px-6 bg-green-500 text-white rounded-full font-medium hover:bg-green-600 transition duration-300">Buy a Productive</p>
          </Link>
        </div>
      </div>
    </div>
  )
}