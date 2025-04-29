type Props = React.PropsWithChildren

const HomeLayout = ({children}:Props) => {
    return ( 
        <div>
            {children}
        </div>
     );
}
 
export default HomeLayout;