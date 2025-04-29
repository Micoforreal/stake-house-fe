import { Button } from "../../ui/button";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"



const PREDICTION = [
    'man city',
    'draw',
    'man untd'
]

type props = {
    id: number;
}

const EasyBet = ({ id }: props) => {
    return (

        <Dialog>
            <DialogTrigger>
                <Button className="text-[14px] bg-[#577BC1] font-normal h-8 ">
                    Easy Bet
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Make a prediction</DialogTitle>

                </DialogHeader>


                <div>
                    {id}
                    <ToggleGroup type="single" className="flex mx-auto my-4 gap-2">
                        {PREDICTION.map((item, i) => (
                            
                            <ToggleGroupItem key={i} value={item} className={` bg-gray-300 border rounded-md data-[state=on]:bg-blue data-[state=on]:text-white border-blue ${item === "draw" && "bg-transparent"} min-w-[100px]`}>{item === "draw" ? "X" : item}</ToggleGroupItem>

                        ))}

                    </ToggleGroup>
                </div>


                <DialogFooter className="mt-9">

                    <DialogClose>

                        <Button className="bg-amber-500 text-blue w-[70%] mx-auto">Confirm</Button>
                    </DialogClose>
                </DialogFooter>



            </DialogContent>
        </Dialog >

    );
}

export default EasyBet;