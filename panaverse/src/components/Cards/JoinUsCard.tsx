import Image from "next/image";


export default function JoinUsCard({title, img}:any) {
  return (
    <div className="bg-gray-900 h-[240px] w-[280px] rounded-lg">
        <div className="text-[32px] text-center px-11">{title}</div>
        <div className="px-[108px] mt-[8px]"><Image alt={title} src={img}/></div>
    </div>
  )
}
