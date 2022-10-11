import styles from '../styles/components/Icon.module.css'

export default function Icon({children, size, offset}){
    
    const style = {
        fontSize: size,
        lineHeight: size
    }

    return(
        <span className={`${styles.icon} ${offset > 50 ? styles.icon_reduce : ''}`} style={style}>{children}</span>
    )
}