import styles from '../styles/pages/Auth.module.css'


export default function Auth() {
  return (
    <div className={styles.container}>
        <div className={styles.content}>
            {/* <h1>Login</h1> */}
            <form>
                <label>
                    <input type='text' placeholder='Usuario' required></input>
                </label>
                <label>
                    <input type='password' placeholder='Senha' required></input>
                </label>
                <button type='submit'>login</button>
            </form>
        </div>
    </div>
  )
}