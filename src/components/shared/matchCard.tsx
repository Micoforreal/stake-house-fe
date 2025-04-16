import { AlarmClock, Share2Icon, Star } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import { Button } from "../ui/button";


type props = {
    id: number;
    playing: ({
        player?: string | undefined;
        image: StaticImageData;
   
    }
    )[];
    category: {
        name: string,
        image: StaticImageData,
    };
    endTime: number;
}

const MatchCard = ({ id, playing, category, endTime }: props) => {
    return (
        <div className="border w-[350px]  p-2 rounded-lg">
            <div className="flex ">
                <div className="border rounded-full w-[30px] h-[30px] bg-red-400 ">
                    <Image alt="category image" src={category.image} />
                </div>
                <div className=" flex flex-col ms-auto items-center">
                    <div className="flex text-red-500 space-x-2">
                        <AlarmClock className="w-5 h-5" />
                        <div className="border-[1.5px] rounded-xl border-red-500 w-[80px] h-[22px] flex justify-center items-center text-red-400 text-[14px]">
                            <span>44 mins</span>
                        </div>
                    </div>
                    <span className="ms-8 text-[14px] text-red-500">Ends In</span>
                </div>
            </div>


            <div className="border flex flex-col justify-end mt-10 mb-5 rounded-2xl  h-[250px] w-full">


                <div className={`flex ${playing.length>1?" justify-between":"justify-center py-2"}   px-7  font-semibold text-xl`}>
                    <span>{playing[0]?.player}</span>
                    <span>{playing[1]?.player}</span>

                </div>

                <div className=" w-[97%] h-[80%] rounded-3xl mx-auto flex justify-center space-x-4 items-center mb-3.5">

                    {playing.length > 1 ? (
                        <>

                            <div className="w-[40%]">

                                <Image src={playing[0]?.image} alt="player 1 image" />
                            </div>


                            <span className="font-semibold text-xl">VS</span>

                            <div className="w-[40%]">

                                <Image src={playing[1]?.image} alt="player 1 image" />
                            </div>
                        </>
                    ) :(
                        <div className=" border- border-pink-700 h-full w-full">
                            <Image src={playing[0]?.image} className="object-co w-full h-full" alt="match image" />

                        </div>
                    )}

                </div>
            </div>


            <div className="flex items-center mb-4">

                <div className="flex gap-2">
                    <Button className="text-[14px] bg-[#577BC1] font-normal h-8 ">
                        Easy Bet
                    </Button>
                    <Button className="text-[14px] bg-blue font-normal h-8 ">
                        Advance Bet
                    </Button>
                </div>

                <div className="ms-auto flex gap-3.5 ">

                    <Star className="text-yellow-300 w-5 h-5" />
                    <Share2Icon className="w-5 h-5" />
                </div>

            </div>



        </div>
    );
}

export default MatchCard;