import { Button } from "../../ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

type props= {
    id: number;
}

const EasyBet = ({id}: props) => {
    return ( 
        
        <Dialog>
            <DialogTrigger>
                <Button className="text-[14px] bg-[#577BC1] font-normal h-8 ">
                    Easy Bet
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Are you absolutely sure?</DialogTitle>
                    <DialogDescription>
                        {id}
                        This action cannot be undone. This will permanently delete your account
                        and remove your data from our servers.
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>

     );
}
 
export default EasyBet;