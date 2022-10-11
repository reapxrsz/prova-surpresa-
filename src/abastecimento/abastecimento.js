import { useState, useEffect } from 'react';
import './abastecimento.scss';
import React from 'react';
import {useNavigate} from 'react-router-dom';

export default function Abastecimento(){
    const [ capac, setCapac ] = useState(0);
    const [ consumo, setConsumo ] = useState(0);
    const [ dist, setDist ] = useState(0);
    const [ Qtdparadas, setQtdparadas ] = useState(0);
    const navigate = useNavigate();

    function voltar(){
        navigate('/');
    }

    function totalParadas() {
        let total = dist / (capac * consumo);
        let resp = total;
        setQtdparadas(Math.ceil(resp));
    }

    
    useEffect(() => {
        totalParadas()
    }, [capac, consumo, dist, Qtdparadas])

    return(
        <section className='sct'>
            <div>
                <h2 className='tit'> Calcular quantidade de paradas </h2>
                <p> Informe a capacidade do tanque em litros: </p>
                <input type="number" value={capac} onChange={e => setCapac(Number(e.target.value))}/>
            
                <p> Informe o consumo por km: </p>
                <input type="number" value={cons} onChange={e => setCons(Number(e.target.value))}/>
            
                <p> Informe a distância em km: </p>
                <input type="number" value={dist} onChange={e => setDist(Number(e.target.value))}/>
            </div>

            <div>
                <button className='btt' onClick={totalParadas}> Calcular paradas </button>
            </div>

            <div>
                <h3 className='resp'> Você precisará fazer {Qtdparadas} paradas para abastecer </h3>
            </div>
        </section>
    )
}