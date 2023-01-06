import Styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className='container !max-w-none'>
        <div className='sub-container'>
            <div className={`${ Styles.float_child} ${ Styles.left_child}`}>
            <p>WELCOME</p>
            <p className='dot bounce'>.</p>
        </div>
        </div>
    </div>
  )
}
