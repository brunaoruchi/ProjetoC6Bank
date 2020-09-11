import React, {useState} from 'react';
import axios from 'axios';

function Pesquisa() {
    const [campoTexto, setCampoTexto] = useState('');
    const [error, setError] = useState('');
    const [moedaNome, setMoedaNome] = useState('');
    const [moedaImg, setMoedaImg] = useState('');
    const [moedaHash, setMoedaHash] = useState('');

    async function campoTextoSubmit(e) {
        e.preventDefault();
        if(!campoTexto){
            setError('Digite a moeda desejada.');
            return;
        }

        if(campoTexto.length <= 3){
            setError('O nome da moeda tem que ser mais de 3 caracteres.');
            return;
        }
        try {
            const coin = await axios.get(`https://api.coingecko.com/api/v3/coins/${campoTexto.toLowerCase()}`);
            setMoedaNome(coin.data.name);
            setMoedaImg(coin.data.image.large);
            setMoedaHash(coin.data.hashing_algorithm);
            setError('');
        }catch{
            setError('Moeda não encontrada.');
        }
    }

    return (
        <>
            <form onSubmit={campoTextoSubmit}>
                <label htmlFor="pais">Digite o nome da moeda: </label>
                <input 
                    id="pais" 
                    type="text" 
                    value={campoTexto} 
                    placeholder="Ex.: 01coin, audax, aunit"
                    onChange={e => setCampoTexto(e.target.value)}
                />
                <button type="submit">Pesquisar</button>
            </form>
            {error&&<span className="erro-form">{error}</span>}

            {
                moedaNome && 
                <div className="campo-moeda">
                    <h2>Nome: {moedaNome}</h2><br/>
                    <img src={moedaImg} alt="Logo Moeda"/><br/>
                    <p>Algoritmo de hash: {moedaHash}</p>
                </div>
            }
        </>
    );
}

export default Pesquisa;