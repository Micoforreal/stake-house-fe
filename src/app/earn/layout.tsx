import HomeHeader from "@/components/shared/navigation";
import { Button } from "@/components/ui/button";
import { ListTodo, ListTodoIcon, LockIcon, ShoppingBag, Users2Icon } from "lucide-react";
import Link from "next/link";

type Props = React.PropsWithChildren<{}>

const navs = [
    { name: "Lock to Earn", link: "", icon: <LockIcon /> },
    { name: "Refer a Friend", link: "", icon: <Users2Icon /> },
    { name: "Marketplace", link: "", icon: <ShoppingBag /> },
    { name: "Task", link: "", icon: <ListTodo /> }
]

const EarnLayout = ({ children }: Props) => {
    return (
        <div>
            <HomeHeader />


            <div className="flex">
                <aside className="w-[200px] border-r bg-white flex flex-col justify-center gap-4 p-8">
                    {navs.map((item, index) => (
                        <Link className="" href={item.link}>
                            <Button className="w-32 h-16 flex flex-col" variant={"outline"} >
                                <span className="mt-3">{item.icon}</span>
                                {item.name}
                            </Button>
                        </Link>
                    ))}

                </aside>

                {children}
            </div>
        </div>
    );
}

export default EarnLayout;