import styles from './Loader.module.css'

function Loader() {
  return <div className={styles.loader}><img src="/Loading.gif" alt="Loading" /></div>
}

export default Loader
