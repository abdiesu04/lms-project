import { Sidebar } from "lucide-react";
import { Children } from "react";

const DaxhBoardLayout = ({
    Children}:
    {Children: React.ReactNode}) => {
    return (
        <div className="h-full ">
            <div className="hidden md:flex h-full w-56 flex-col fixed inset-y-0 z-50">
                <h1>Dashboard</h1>
                <Sidebar/>
            </div> 

            {Children}
        </div>
    )
    }

    export default DaxhBoardLayout;