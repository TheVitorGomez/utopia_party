import { motion } from 'framer-motion'
import Logo from '../../assets/logo.png'

import './styles.css'

export default function Home() {
    return (
        <div className={'container'}>
            <>
                <span />
            </>
            <div className={'party-name'}>
                <img src={Logo} alt='UTOPIA PARTY' />
                <div className={'party-info'}>
                    <span />
                    <h2>09 DE JULHO | 19 HORAS</h2>
                    <span />
                </div>
            </div>

            <div className={'tickets'}>
                <button type='button'>
                    INGRESSOS PARA O PRIMEIRO LOTE DISPONÍVEL
                </button>
            </div>
        </div>
    )
}
