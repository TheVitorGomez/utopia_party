import { motion } from 'framer-motion'
import Logo from '../../assets/logo.png'
import Header from '../Header'

import './styles.css'

export default function Home() {
    return (
        <div className={'container'}>
            <Header />

            <div className={'party-name'}>
                <motion.img
                    animate={{ y: [0, -20, 0] }}
                    transition={{
                        type: 'spring',
                        duration: 2,
                        repeat: Infinity,
                    }}
                    src={Logo}
                    alt='UTOPIA PARTY'
                />
                <motion.div
                    animate={{ y: [20, 0], opacity: [0, 1] }}
                    className={'party-info'}
                >
                    <span />
                    <h2>09 DE JULHO | 18:00</h2>
                    <span />
                </motion.div>
            </div>

            <motion.div
                animate={{ y: [20, 0], opacity: [0, 1] }}
                transition={{ delay: 0.5 }}
                className={'tickets'}
            >
                <button type='button'>COMPRAR AGORA!</button>
                <p>Primeiro lote disponível</p>
            </motion.div>
        </div>
    )
}
