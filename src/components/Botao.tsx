interface BotaoProps {
    cor?: "green" | "gray" | "blue";
    className?: string;
    children: any;
    onClick?:()=>void
}

export default function Botao(props: BotaoProps) {
    function selecionaCor(){
        let color = "";
        if (props.cor == null) {
            color = "from-gray-400 to-gray-700";
        } else if (props.cor == "blue") {
            color = "from-blue-400 to-blue-700";
        } else {
            color = "from-green-400 to-green-700";
        }
        return color
}
    const cor = selecionaCor()
    return (
        <button
            onClick={props.onClick}
            className={`
        bg-gradient-to-r ${cor}
        text-white px-4 py-2 rounded-md
        ${props.className}
        `}
        >
            {props.children}
        </button>
    );
}
