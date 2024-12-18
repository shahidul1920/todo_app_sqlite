import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center justify-center w-[100%] h-[80dvh]">
      <div className="content max-w-[800px] text-start mx-auto">
        <h1 className="text-3xl font-extrabold text-[50px] leading-[60px] tracking-wide capitalize text-center">Increase your productibity at the max level</h1>
        <div className="buttons flex items-center justify-center gap-4 mt-[2rem]">
          <button className="py-[.7rem] px-[1.5rem] border border-black rounded-full font-medium"><Link href="/todos">Add Todo</Link></button>
          <button className="py-[.7rem] px-[1.5rem] border border-black rounded-full font-medium"><Link href="/">Buy a Dildo</Link></button>
        </div>
      </div>
    </div>
  )
}
