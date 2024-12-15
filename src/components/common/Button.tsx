
type ButtonType = {
    Text:string,
    Style?:string,
    onClick?:() => void,
}

const Button : React.FC<ButtonType> = ({Text,Style,onClick}) => {
  return (
    <div onClick={onClick} className={`text-white text-[15px] text-center my-auto font-[400] p-[8px] px-[20px] rounded-[5px] cursor-pointer hover:shadow-lg z-10 ${Style}`} style={{"background": "linear-gradient(to right, #272727 , #2C2C2C)"}}>
        {Text}
    </div>
  )
}

export default Button