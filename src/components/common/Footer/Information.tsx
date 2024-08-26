interface SitesProps {
    text: string,
}

export const Information = ({ text }: SitesProps) => {
    return(
        <div className="pl-7 hover:opacity-60">
            {text}
        </div>
    )
}