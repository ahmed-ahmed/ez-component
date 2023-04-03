export interface IButtonProps {
    text: string
    onClick: () => void
}

export function Button({text, onClick}: IButtonProps) {
    return <button className="button" onClick={onClick}>{text}</button>
}
