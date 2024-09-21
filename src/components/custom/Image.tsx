import Image from 'next/image'
 
export default function Picture() {
  return (
    <Image
      src="/andrue.png"
      width={250}
      height={0}
      alt="A picture of me and my dog"
      className='border-solid border-black border-2 rounded-xl object-cover'
    />
  )
}
 