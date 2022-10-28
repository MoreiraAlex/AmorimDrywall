import styles from '../styles/components/Message.module.css'

export default function Message({children, type, visible}) {
    return (
        visible ? 
            <>
                <span className={`${styles.msg} ${styles[type]}`}>{children}</span>
            </>
        :
            null
    )
}