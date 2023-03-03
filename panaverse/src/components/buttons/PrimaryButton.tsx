import Link from "next/link"

export default function PrimaryButton({labelName,link}:any) {
  return (
    <div className="bg-[#11AD8E] text-black  h-[48px] text-[18px] font-bold rounded-lg hover:bg-transparent
     hover:text-[#11AD8E] border-4 border-[#11AD8E] hover:border-[#11AD8E]">
        <Link href={link}>
        <button className="mx-[24px] my-[10px]">
            {labelName}
        </button>
        </Link>
    </div>
  )
}
