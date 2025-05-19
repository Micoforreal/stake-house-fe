"use client"
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
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import MatchCard from "@/components/shared/match/matchCard";
import football from "@/assets/images/football_category_logo.png"
import { Filter } from "lucide-react";
import { API_URL } from "@/helpers/constants";
import axios from "axios";
import { useEffect, useState } from "react";
import GridLayout from "@/components/shared/gridLayout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";



const categories = [
  { name: "Sport", data: [{ id: 1, name: "football", image: "" },] },
  { name: "Games", data: [{ id: 1, name: "football", image: "" },] },
  { name: "Crypto", data: [{ id: 1, name: "football", image: "" },] },
  { name: "Event", data: [{ id: 1, name: "football", image: "" },] }

]
export default function App() {
  const [matchApiData, setMatchApiData] = useState([]);
  useEffect(() => {

    axios.get(`${API_URL}/api/match?category=football`)
      .then(function (response) {

        setMatchApiData(response.data[0].data.response)

        console.log(response.data[0].data.response)
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [])

  useEffect(() => {
    console.log(matchApiData)
  }, [matchApiData])



  const [columnCount, setColumnCount] = useState(1);





  const RenderMatch = ({ key, rowIndex, columnIndex, style }) => {
    const index = rowIndex * columnCount + columnIndex;
    const match = matchApiData[index];
    if (!match) return null;

    return (
      <MatchCard style={style} key={key} id={match?.fixture?.id | 1} playing={match.teams} category={{ name: 'football', image: football }} />

    )

  }







  return (
    <div>

      <HomeHeader />



        <div className="">

        <Tabs defaultValue="account" className="w-full transition-all  border-[#BEBFC5] mt-5">
          <TabsList className=" pb-0 bg-transparent rounded-none border-b-2 md:max-w-[450px] w-full flex ">
            <TabsTrigger className="
             data-[state=active]:text-blue 
             data-[state=active]:border-b-[2px]
             data-[state=active]:shadow-none
             data-[state=active]:rounded-none
             data-[state=active]:border-b-blue" value="account">Events</TabsTrigger>
            <TabsTrigger className=" 
            data-[state=active]:text-blue  
            data-[state=active]:border-b-[2px]
            data-[state=active]:shadow-none
            data-[state=active]:rounded-none
            data-[state=active]:border-b-blue
            " value="password">Open Bets</TabsTrigger>
          </TabsList>
          <TabsContent value="account">.</TabsContent>
          <TabsContent value="password">.</TabsContent>
        </Tabs>
            </div>

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
          {categories.map((categoires, index) => (
            <Select key={index}>
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

        <div className="flex w-[100%]  scrollbar-hide   mx-auto flex-wrap   gap-x-[calc(5%)]   gap-y-12  ">
          <GridLayout columnCount={columnCount} setColumnCount={setColumnCount} renderItem={RenderMatch} data={matchApiData} />
        </div>


      </div>
    </div>
  );
}
