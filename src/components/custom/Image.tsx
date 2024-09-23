import Image from 'next/image'
 
export default function Picture() {
  return (
    <Image
      src="/andrue.png"
      width={150}
      height={100}
      alt="A picture of me and my dog"
      className='rounded-full'
    />
  )
}
 