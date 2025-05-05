import { AlarmClock, Share2Icon, Star } from "lucide-react";
import Image from "next/image";
import { Button } from "../../ui/button";
import EasyBet from "./easyBetModal";



// type props = {
//     id: number;
//     playing: ({
//         player?: string | undefined;
//         image: StaticImageData;

//     }
//     )[];
//     category: {
//         name: string,
//         image: StaticImageData,
//     };
//     endTime: number;
// }




const MatchCard = ({ id ,style,  playing, category }) => {
    return (
        <div style={{...style, marginRight:"0px", gap:"0px", padding:"0px", columnGap:"0px", width:'70%' , maxWidth:"350px", marginBottom:'20px',}} className="rder">

        <div  className="border md:max-w-[350px] w-[100%]  md:h-[430px] p-2 rounded-lg">
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


            <div className="border flex flex-col justify-end mt-10 mb-5 rounded-2xl  h w-full">


                {/* <div className={`flex ${playing.length > 1 ? " " : ""} border justify-between px-7  font-semibold text-xl`}>
                    <span>{playing.home.name}</span>
                    <span>{playing.away.name}</span>
                    
                    </div> */}

                <div className=" w-[97%] h-[80%] rounded-3xl mx-auto flex justify-center space-x-4 items-center mb-3.5">

                    {category.name === "football" ? (
                        <>
                        <div className="flex gap-x-16 justify-center">


                            <div className="w-[40%]  flex flex-col items-center">
                                <h1 className=" pt-5 font-semibold ">{playing.home.name}</h1>
                                

                                <Image height={100} width={100}   src={playing.home.logo} alt="player 1 image" className="object-cover my-10 " />
                                
                            </div>


                            <span className="font-semibold text-xl border h-full my-auto">VS</span>

                           
                            <div className="w-[40%]  flex flex-col items-center">
                                <h1 className=" pt-5 font-semibold ">{playing.away.name}</h1>
                                

                                <Image height={100} width={100}   src={playing.away.logo} alt="player 1 image" className="object-cover my-10 " />
                                
                            </div>

                        </div>
                        </>
                    ) : (
                        <div className=" border- border-pink-700 h-full w-full">
                            <Image src={playing[0]?.image} width={1} height={1} className="object-cover rounded-3xl w-fill  h-full" alt="match image" />

                        </div>
                    )}

                </div>
            </div>


            <div className="flex items-center mb-4">

                <div className="flex gap-2">
                    {
                        <>

                            <EasyBet id={id}/>
                        </>
                    }
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
                    </div>
    );
}

export default MatchCard;