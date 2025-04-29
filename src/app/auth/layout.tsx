import { PropsWithChildren } from "react";

type Props = PropsWithChildren

const AuthLayout = ({children}:Props) => {
    return ( 
        <div className="my-32">
            {children}
        </div>
     );
}
 
export default AuthLayout;