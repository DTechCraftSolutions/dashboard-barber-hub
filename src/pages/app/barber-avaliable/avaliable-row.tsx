import { ReactNode } from "react"

interface Props {
    children?: ReactNode
    className?: string
}



export function AvaliableContent({children, className}: Props){
    return (
        <div className={`${className} flex items-center gap-3`}>
            {children && children || null}
        </div>
    )
}

export function AvaliableRatio({children}: Props){
    return (
        <div>
            {children && children || null}
        </div>
    )
}

export function AvaliableTime({children, className}: Props){
    return (
        <div className={`${className} flex items-center gap-3`}>
            {children && children || null}
        </div>
    )
} 

export function AvaliablActions({children}: Props){
    return (
        <div className="ml-4">
            {children && children || null}
        </div>
    )
}