import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

function Home() {
    const quiz =[{pergunta:'Como você lida com desafios difíceis na vida ?',resposta1:'Sigo fazendo o que é certo independentemente da opinião dos outros',resposta2:'Busco sabedoria para encontrar a melhor solução',resposta3:'Enfrento tudo com paciência, mesmo sem entender o motivo',r1:'noe',r2:'daniel',r3:'jo'},{pergunta:'Se você estivesse em um ambiente hostil, o que faria?',resposta1:'Usaria estratégia e inteligência para me manter fiel',resposta2:'Aceitaria o sofrimento e permaneceria firme.',resposta3:'Continuaria sendo justo, mesmo se estivesse sozinho.',r1:'daniel',r2:'jo',r3:'noe'},{pergunta:'Qual dessas qualidades você mais valoriza?',resposta1:'Resistência e paciência',resposta2:'Integridade e obdiência',resposta3:'Sabedoria e lealdade',r1:'jo',r2:'noe',r3:'daniel'},{pergunta:'Se você recebesse  uma ordem de Deus que parecesse impossível, como reagiria?',resposta1:'Procuraria a melhor forma de cumprir sem comprometer minha fé',resposta2:'Confiaria e suportaria as dificuldades sem reclamar',resposta3:'Obedeceria mesmo que todos zombassem de mim',r1:'daniel',r2:'jo',r3:'noe'},{pergunta:'Como você age quando precisa defender sua fé?',resposta1:'Uso a sabedoria para responder sem causar confronto desnecessário',resposta2:'Mantenho minha conduta correta, mesmo que ninguém me apoie',resposta3:'Sofro as consequências sem perder a confiança',r1:'daniel',r2:'noe',r3:'jo'},{pergunta:'Se você estivesse cercado de pessoas ruins, o que faria?',resposta1:'Continuaria firme, esperando que Deus me restaurasse',resposta2:'Usaria minha inteligência para me destacar sem comprometer minha fé',resposta3:'Me manteria fiel a Deus, mesmo se fosse o unico justo',r1:'jo',r2:'daniel',r3:'noe'},{pergunta:'Como você reage quando as pessoas ao seu redor não acreditam no que você faz?',resposta1:'Usar minha inteligência para mostrar minha fé com sabedoria',resposta2:'Permaneço firme, mesmo que isso signifique sofrer sozinho',resposta3:'Continue seguindo o caminho certo, mesmo sendo ridicularizado',r1:'daniel',r2:'jo',r3:'noe'},{pergunta:'O que mais te motiva a continuar seguindo a Deus?',resposta1:'Cumprir sua vontade, mesmo que pareça estranho para os outros',resposta2:'Saber que ele está comigo, mesmo nos momentos de dor',resposta3:'Entender seus planos e permanecer fiel em qualquer situação',r1:'noe',r2:'jo',r3:'daniel'},{pergunta:'Se você perder tudo de uma hora para outra, o que faria?',resposta1:'Aceitaria com paciência, confiando que Deus tem um propósito',resposta2:'Tentaria me adaptar á nova realidade sem comprometer meus valores',resposta3:'Buscaria recomeçar, mantendo minha fé intacta',r1:'jo',r2:'daniel',r3:'noe'},{pergunta:'Como você se sente ao ter que tomar decisões difíceis?',resposta1:'Analise bem a situação antes de agir com sabedoria',resposta2:'confio em Deus e espero que ele me sustente',resposta3:'Sigo minha conciência e obedeço, sem questionar muito',r1:'daniel',r2:'jo',r3:'noe'},{pergunta:'Se um governante proibisse a prática de sua fé, como você reagiria?',resposta1:'Manteria minha fé em segredo, mas nunca desistiria dela',resposta2:'Continuaria firme,aceitando qualquer punição',resposta3:'Encontraria uma forma sábia de continuar adorando a Deus sem me expor diretamente',r1:'noe',r2:'jo',r3:'daniel'},{pergunta:'O que você faz quando alguém próximo duvida da sua fé',resposta1:'Tento mostrar meu exemplo,independentemente do que digam',resposta2:'Converso com sabedoria para tentar explicar meu ponto de vista',resposta3:'Apenas sigo acreditando, sem discutir',r1:'noe',r2:'daniel',r3:'jo'},{pergunta:'Como você lida com momentos de incerteza sobre o futuro?',resposta1:'Sigo meu caminho sem olhar para trás',resposta2:'Peço discernimento a Deus e procuroa a melhor saída',resposta3:'Espero pacientemente que Deus resolva tudo',r1:'noe',r2:'daniel',r3:'jo'}]

    

    const [pergunta,setPergunta] =useState(quiz[0].pergunta)
    const [resposta1,setResposta1] =useState(quiz[0].resposta1)
    const [resposta2,setResposta2] =useState(quiz[0].resposta2)
    const [resposta3,setResposta3] =useState(quiz[0].resposta3)
    const [numeroPergunta,setNumeroPergunta] =useState(0)
    const [noe,setNoe] =useState(0)
    const [daniel,setDaniel] =useState(0)
    const [jo,setJo] =useState(0)
    const [continuar,setContinuar] =useState(true)
    const [resultado,setResultado] =useState(false)
    const [vencedor,setVencedor] =useState(0)
    const [camp, setCamp] =useState('')
    const [danielp,setDanielp]=useState(0)
    const [noep,setNoep] =useState(0)
    const [jop,setJop] =useState(0)

    let pessoa ={noe:noe,daniel:daniel,jo:jo}

    
    function respoder(nome){
        
        if(nome =='noe'){
            setNoe(pessoa.noe+1)
            pessoa.noe=pessoa.noe+1
        }else if(nome =='daniel'){
            setDaniel(pessoa.daniel+1)
            

        }else if(nome == 'jo'){
            setJo(pessoa.jo+1)
            pessoa.jo=pessoa.jo+1
        }
        if(numeroPergunta ==12){
            setContinuar(false)
        }else{
            setPergunta(quiz[numeroPergunta+1].pergunta)
            setResposta1(quiz[numeroPergunta+1].resposta1)
            setResposta2(quiz[numeroPergunta+1].resposta2)
            setResposta3(quiz[numeroPergunta+1].resposta3)
            setNumeroPergunta(numeroPergunta+1)

        }
       
        
        
      

    }
    function calcular(){
        let cap =noe
        let n='Noé'
        if(cap <daniel){
            cap=daniel
            n='Daniel'
        }
        if(cap<jo){
            cap=jo
            n='Jó'
        }

        if(n=='Noé'){
            if(cap==daniel){
                let ran =Math.floor(Math.random()*2)
                if(ran==0){
                    n='Daniel'
                }
            }
            if(cap==jo){
                let ran =Math.floor(Math.random()*2)
                if(ran==0){
                    n='Jó'
                }
            }
        }else if(n=='Daniel'){
            if(cap==jo){
                let ran =Math.floor(Math.random()*2)
                if(ran==0){
                    n='Jó'
                }
            }
        }
        setVencedor(cap)
        setCamp(n)
        setDanielp((daniel*100)/13)
        setJop((jo*100)/13)
        setNoep((noe*100)/13)
        setResultado(true)


    }
    function reload(){
        window.location.reload()
    }

    return(
        <div className='body'>
            <div className='top'>
                <h1>
                Quem é o Campeão 
                </h1>
                <h1>
                Que Te Representa?
                </h1>

            </div>

            <div className={continuar ? 'mid':'none'}>
                <div className='pergunta'>
                    <p>{pergunta}</p>

                </div>
                <div className='respostas' onClick={()=>respoder(quiz[numeroPergunta].r1)}> {resposta1}</div>
                <div className='respostas' onClick={()=>respoder(quiz[numeroPergunta].r2)}>  {resposta2}</div>
                <div className='respostas' onClick={()=>respoder(quiz[numeroPergunta].r3)}>  {resposta3}</div>

            </div>
            <div className={continuar ?'none':'mid'}>
                <div className={resultado ?'none':'verificar'}>
                    <p>Clique em Continuar  para descobrir o resultado!</p>
                    <button onClick={calcular}> Continuar</button>
                </div>
                <div className={resultado ?'verificar' :'none'}>
                    <div>
                    <p>O Campeão que melhor representa você é: {camp}</p>
                    <p>{noep.toFixed(2)} %Noé</p>
                    <p>{danielp.toFixed(2)} %Daniel</p>
                    <p>{jop.toFixed(2)} %Jó</p>
                    <button onClick={reload}>Voltar</button>

                    </div>
                    
                   
                    

                </div>
            </div>

            <div className='bot'>
                <div className='nome'>
                    <img className='time' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtyRM--iwzz4iOONLBLUOrKnWFD5atO6zzRw&s'></img>
                    <p>Noé</p>
                </div>
                <div className='nome'>
                    <img className='time' src='data:image/jpeg;base64,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'></img>
                    <p>Daniel</p>
                </div>
                <div className='nome'>
                    <img className='time' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVnLTeiXvt1N5lvGvUQpIRfgIi1aJChXytSA&s'></img>
                    <p>Jó</p>

                </div>
                

            </div>

           
        </div>
    );
}
export default Home;