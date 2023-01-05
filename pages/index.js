import Styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className='index-container'>
        <div className={Styles.float_container}>
            <div className={`${ Styles.float_child} ${ Styles.left_child}`}>
            <p>WELCOME</p>
            <p className={`${Styles.dot} ${Styles.bounce}`}>.</p>
        </div>
        </div>
    </div>
  )
}
