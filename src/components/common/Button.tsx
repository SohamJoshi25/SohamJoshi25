
type ButtonType = {
    Text:string,
    Style?:string,
    onClick?:() => void,
}

const Button : React.FC<ButtonType> = ({Text,Style,onClick}) => {
  return (
    <div onClick={onClick} className={`text-white lg:text-[15px] md:text-[12px] text-[10px] text-center my-auto font-[400] lg:p-[8px] lg:px-[20px] md:p-[6px] md:px-[15px] p-[4px] px-[10px]  rounded-[5px] cursor-pointer hover:bg-black hover:shadow-xl z-10 ${Style}`} style={{"background": "linear-gradient(to right, #272727 , #2C2C2C)"}}>
        {Text}
    </div>
  )
}

export default Button