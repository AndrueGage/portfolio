import Image from 'next/image'
 
export default function Picture() {
  return (
    <span className='flex justify-end pr-8'>
    <Image
      src="/andrue.png"
      width={250}
      height={250}
      sizes="(max-width: 768px) 100vw, 33vw"
      alt="A picture of me and my dog"
      className='border-solid border-black border-2 rounded-md object-cover'
    />
    </span>
  )
}
 