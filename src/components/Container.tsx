import { ReactNode } from "react"

type Props = {
    children: ReactNode
}

export function Container ({ children }: Props) {
    return (
        <div className="px-[5%] sm:px-[7%] lg:px-[12%] xl-[12%]">
            {children}
        </div>
    )
}