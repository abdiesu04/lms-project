import { Children } from "react";

const AuthLayout = ({
    Children}:
    {Children: React.ReactNode}) => {
    return (
        <div className="h-full flex items-center justify-center">
            {Children}
        </div>
    )
    }

    export default AuthLayout;