import { useEffect, useState } from "react"
import { useSearchParams } from 'next/navigation'
import { useRouter } from "next/router"
import styles from '../styles/Counter.module.css'

export default function Counter() {

    const [number, setNumber] = useState(0);
    const searchParams = useSearchParams();
    const isUser = searchParams.get('username')
    const router = useRouter();

    useEffect(() => {
        !isUser ? router.push('/') : <></>
    }, [isUser])

    return (
        <>
        <head className={styles.welcome}>
            <div>COUNTER PAGE</div>
            <div>Welcome, {isUser}.</div>
        </head>
        <main className={styles.main}>
            <div class="num">{number}</div>
            <button className={styles.button} onClick={() => setNumber(number + 1)} id="incdec">Increment</button>
            <button className={styles.button} onClick={() => setNumber(number - 1)}>Decrement</button>     
        </main>
        </>
    )
}