import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-screen w-screen py-2 bg-black gap-4">
      <div className="flex flex-col items-center justify-center w-full text-center">
        <h1 className="text-orange-400 text-3xl font-bold">ByteDash</h1>
        <span className="text-gray-400 text-sm">Speeding your success</span>
      </div>
      <div className="flex flex-col items-center justify-center w-full text-center">
        <span className="text-white">Cross-Platform Mobile App Design and Development</span>
        <span className="text-white">Web Design and Development</span>
      </div>
      <div className="flex flex-col items-center justify-center w-full text-center">
        <span className="text-white">Contact Us : work@bytedash.net</span>
        <span className="text-gray-500 text-xs ">Our web is coming soon.</span>
      </div>
    </main>
  );
}
