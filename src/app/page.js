import Image from "next/image";
import Details from "./components/Details";

export default function Home() {
  return (
    <div className="h-screen bg-black"  >
       <h1 className='flex justify-center text-xl text-white pt-20 lg:pt-32 font-bold'> Guest's Feedback</h1>
      <Details />
    </div>
  );
}
