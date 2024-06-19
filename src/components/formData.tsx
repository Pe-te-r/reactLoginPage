import InputDiv  from "./input"
import "./formdata.scss"

const FormData=()=>{
    const submited=(e:any)=>{
        e.preventDefault()
        alert("form submitted")
    }

    return(
        <>
            <h3 className="heading">Great to have you back</h3>
            <form className="form" onSubmit={submited}>
                <InputDiv tag ="username" type="text" />
                <InputDiv tag ="password" type="password" />
                <button type="submit">submit</button>
            </form>
        </>
    )
}

export default FormData