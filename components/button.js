import componentStyles from '../styles/components.module.css'

export default function Button(props){
    const {
        name,
        bgcolor,
        color
    }=props
    return(
        <button style={{backgroundColor:`${bgcolor}`,color:`${color}`,border:`1px solid ${bgcolor}`}} className={componentStyles.buttonL}>{name}</button>
    )
}