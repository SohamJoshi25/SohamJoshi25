
type ButtonType = {
    Text:string,
    Style?:string,
    onClick?:()=>void,
    href?:string
}

const Button : React.FC<ButtonType> = ({Text,Style,onClick,href}) => {
  return (
    <a href={href} onClick={onClick} target='_blank' rel='noopener noreferrer' className={`text-[#D4D4D4] hover:text-white lg:text-[15px] md:text-[12px] text-[10px] text-center my-auto font-[400] lg:p-[8px] lg:px-[20px] md:px-[16px] py-[6px] px-[14px]  rounded-[5px] cursor-pointer hover:bg-black hover:shadow-xl z-10 bg-gradient-to-r from-[#272727] to-[#2C2C2C] ${Style || ""}`}>
        {Text}
    </a>
  )
}

export default Button