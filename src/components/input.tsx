import './input.scss'

interface ProfileCardProps {
    tag: string;
    type: string;
  }
  
const InputDiv: React.FC<ProfileCardProps>=({tag,type})=>{
    return(
        <>
            <div className="inputGroup">
                <label htmlFor={tag}>
                    <span>{tag}</span>
                    <input name={tag} type={type} />
                </label>
            </div>
        </>
    )
}

export default InputDiv