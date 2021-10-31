import componentStyles from '../styles/components.module.css'

export default function InputBox(props){
    const {
        placeHolder
    } = props
    return(
        <input type="text" placeholder={placeHolder} className={componentStyles.inputTextL}/>
    )
}