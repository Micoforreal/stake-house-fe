import HomeHeader from "@/components/shared/homeHeader";

const Earn = () => {
  return (
    <>
        <HomeHeader />
    <div className="flex">
      <aside className="w-[200px] border-r bg-white flex flex-col justify-center gap-4 p-8">
        <button className="text-left px-4 py-2 border rounded-md">Lock to Earn</button>
        <button className="text-left px-4 py-2 border rounded-md">Refer a Friend</button>
        <button className="text-left px-4 py-2 border rounded-md">Marketplace</button>
        <button className="text-left px-4 py-2 bg-[#000428] text-white rounded-md font-semibold">Tasks</button>
      </aside>

     
      <main className="flex-1 p-10">
        <h2 className="text-center text-2xl font-semibold mb-8">Earn Our Token</h2>

       
        <div className="flex gap-4 ml-50 mb-10">
          <button className="border rounded-full px-6 py-2 text-sm">Daily</button>
          <button className="border rounded-full px-6 py-2 text-sm">Sponsor</button>
          <button className="border rounded-full px-6 py-2 text-sm">Special</button>
        </div>

       
        <div className="flex flex-col gap-6 items-center">
          {[1, 2, 3].map((_, i) => (
            <div key={i} className="flex items-center justify-between w-full max-w-[700px] border rounded-xl px-6 py-4 shadow-sm hover:shadow-md transition">
              <div className="flex items-center gap-4">
                <img src="./assets/images/Vector(9).svg" alt="Twitter Icon" className="w-6 h-6" />
                <p className="text-base font-medium">Follow us on Twitter</p>
              </div>
              <span className="text-xl">{'>'}</span> 
            </div>
          ))}
        </div>
      </main>
    </div>
    {/* just testing push again */}
    </>

  );
};

export default Earn;
