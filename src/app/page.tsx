import Image from "next/image";
import Home from "./home/page";
import HomeHeader from "@/components/shared/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import MatchCard from "@/components/shared/match/matchCard";
import manUImage from "@/assets/images/manchester_united_logo.png";
import manCityImage from "@/assets/images/Manchester_City_logo.png"
import football from "@/assets/images/football_category_logo.png"
import fifaMatch from "@/assets/images/fifaMatch.png"
import { Clock6, Clock6Icon, Filter } from "lucide-react";




const categories = [
  { name: "Sport", data: [{ id: 1, name: "football", image: "" },] },
  { name: "Games", data: [{ id: 1, name: "football", image: "" },] },
  { name: "Crypto", data: [{ id: 1, name: "football", image: "" },] },
  { name: "Event", data: [{ id: 1, name: "football", image: "" },] }

]


const matchData = [
  {
    id: 1,
    playing: [
      { player: 'Man United', image: manUImage },
      { player: "Man City", image: manCityImage }
    ],
    // easyBetPredictions:[],
    category: { name: 'football', image: football },
    endTime: Date.now()
  },

  {
    id: 2,
    playing: [
      { player: 'Man United', image: manUImage },
      { player: "Man City", image: manCityImage }
    ],
    // easyBetPredictions:[],
    category: { name: 'football', image: football },
    endTime: Date.now()
  },

  {
    id: 2,
    playing: [
      { player: 'Man United', image: manUImage },
      { player: "Man City", image: manCityImage }
    ],
    // easyBetPredictions:[],
    category: { name: 'football', image: football },
    endTime: Date.now()
  },

  {
    id: 4,
    playing: [
      { player: 'GamerHub Fifa 21 tournament ', image: fifaMatch },
    ],
    // easyBetPredictions:[],
    category: { name: 'football', image: football },
    endTime: Date.now()
  }

]

export default function App() {
  return (
    <div>

      <HomeHeader />


      <div className="px-4 flex flex-col md:flex-row pt-7 pb-3">

        {/* payout button */}
        <div className="rounded-[10px] flex justify-center items-center bg-yellow w-[120px] py-1 px-[4.2rem] ">
          <div className=" flex items-center justify-center  space-x-4">
            <span className="text-[18px]">payroll</span>
            <div className="bg-blue rounded-full flex  text-white w-5 h-5 justify-center items-center">
              <span>1</span>
            </div>
          </div>

        </div>


        {/* categoires */}

        <div className="flex md:ms-auto my-5 md:my-0 space-x-7 overflow-auto " style={{
    scrollbarWidth: "none", /* Firefox */
    msOverflowStyle: "none", /* IE 10+ */
  }}>
          {categories.map((categoires) => (
            <Select>
              <SelectTrigger className=" ps-6 data-[placeholder]:text-blue data-[size=default]:h-[30px] scrollbar-hide  border border-blue  w-[120px] text-center   text-blue">
                <SelectValue className="ms-2" placeholder={categoires.name} />
              </SelectTrigger>
              <SelectContent>
                {categoires.data.map((item) => (
                  <SelectItem key={item.id} value={item.name}>
                    {item.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          ))}
        </div>

      </div>


      <div className="flex justify-end  me-7   mb-4">
        <DropdownMenu>
          <DropdownMenuTrigger className="flex gap-1 items-center">
            <Filter className="h-5 w-5" />


            <span className="font-medium text-[18px]">Filter</span>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="rounded-xl space-y-1">
            <DropdownMenuItem>My Prediction</DropdownMenuItem>
            <DropdownMenuItem>Ended Event</DropdownMenuItem>
            <DropdownMenuItem>Active Event</DropdownMenuItem>
            <DropdownMenuItem>Favorite</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>


      {/* matches */}
      <div className=" w-[100v mx-auto border-pink-500">

        <div className="flex w-[95%] b  mx-auto flex-wrap   gap-x-[calc(5%)]   gap-y-12  ">
          {matchData.map((match) => (

            <>
              <MatchCard id={match.id} playing={match.playing} category={match.category} endTime={match.endTime} />
            </>
          ))}
        </div>


      </div>
    </div>
  );
}
