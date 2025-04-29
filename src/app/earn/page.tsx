import { ChevronRight } from "lucide-react";
import Image from "next/image";



const tasks = [
  { logo: "", action: "follow us on Twitter (X)" },
  { logo: "", action: "follow us on Twitter (X)" },
  { logo: "", action: "follow us on Twitter (X)" },

]

const Earn = () => {
  return (
    <>





      <main className="flex-1 p-10">
        <h2 className="text-center text-2xl font-semibold mb-8">Earn Our Token</h2>


        <div className="flex gap-4 ml-50 mb-10">
          <button className="border rounded-full px-6 py-2 text-sm">Daily</button>
          <button className="border rounded-full px-6 py-2 text-sm">Sponsor</button>
          <button className="border rounded-full px-6 py-2 text-sm">Special</button>
        </div>


        <div className="flex flex-col gap-6 items-center">
          {tasks.map((item, index) => (
            <div key={index} className="flex items-center justify-between w-full max-w-[700px] border rounded-xl px-6 py-4 shadow-sm hover:shadow-md transition">
              <div className="flex items-center gap-4">
                <Image src="./assets/images/Vector(9).svg" width={24} height={24} alt="Twitter Icon" className="w-6 h-6" />
                <p className="text-base font-medium">Follow us on Twitter</p>
              </div>
              <span className="text-xl"><ChevronRight /></span>
            </div>
          ))}
        </div>
      </main>

      {/* just testing push again */}
    </>

  );
};

export default Earn;
