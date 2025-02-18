import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

function Home() {
    const quiz =[{pergunta:'Como você lida com desafios difíceis na vida ?',resposta1:'Sigo fazendo o que é certo independentemente da opinião dos outros',resposta2:'Busco sabedoria para encontrar a melhor solução',resposta3:'Enfrento tudo com paciência, mesmo sem entender o motivo',r1:'noe',r2:'daniel',r3:'jo'},{pergunta:'Se você estivesse em um ambiente hostil, o que faria?',resposta1:'Usaria estratégia e inteligência para me manter fiel',resposta2:'Aceitaria o sofrimento e permaneceria firme.',resposta3:'Continuaria sendo justo, mesmo se estivesse sozinho.',r1:'daniel',r2:'jo',r3:'noe'},{pergunta:'Qual dessas qualidades você mais valoriza?',resposta1:'Resistência e paciência',resposta2:'Integridade e obdiência',resposta3:'Sabedoria e lealdade',r1:'jo',r2:'noe',r3:'daniel'},{pergunta:'Se você recebesse  uma ordem de Deus que parecesse impossível, como reagiria?',resposta1:'Procuraria a melhor forma de cumprir sem comprometer minha fé',resposta2:'Confiaria e suportaria as dificuldades sem reclamar',resposta3:'Obedeceria mesmo que todos zombassem de mim',r1:'daniel',r2:'jo',r3:'noe'},{pergunta:'Como você age quando precisa defender sua fé?',resposta1:'Uso a sabedoria para responder sem causar confronto desnecessário',resposta2:'Mantenho minha conduta correta, mesmo que ninguém me apoie',resposta3:'Sofro as consequências sem perder a confiança',r1:'daniel',r2:'noe',r3:'jo'},{pergunta:'Se você estivesse cercado de pessoas ruins, o que faria?',resposta1:'Continuaria firme, esperando que Deus me restaurasse',resposta2:'Usaria minha inteligência para me destacar sem comprometer minha fé',resposta3:'Me manteria fiel a Deus, mesmo se fosse o unico justo',r1:'jo',r2:'daniel',r3:'noe'},{pergunta:'Como você reage quando as pessoas ao seu redor não acreditam no que você faz?',resposta1:'Usar minha inteligência para mostrar minha fé com sabedoria',resposta2:'Permaneço firme, mesmo que isso signifique sofrer sozinho',resposta3:'Continue seguindo o caminho certo, mesmo sendo ridicularizado',r1:'daniel',r2:'jo',r3:'noe'},{pergunta:'O que mais te motiva a continuar seguindo a Deus?',resposta1:'Cumprir sua vontade, mesmo que pareça estranho para os outros',resposta2:'Saber que ele está comigo, mesmo nos momentos de dor',resposta3:'Entender seus planos e permanecer fiel em qualquer situação',r1:'noe',r2:'jo',r3:'daniel'},{pergunta:'Se você perder tudo de uma hora para outra, o que faria?',resposta1:'Aceitaria com paciência, confiando que Deus tem um propósito',resposta2:'Tentaria me adaptar á nova realidade sem comprometer meus valores',resposta3:'Buscaria recomeçar, mantendo minha fé intacta',r1:'jo',r2:'daniel',r3:'noe'},{pergunta:'Como você se sente ao ter que tomar decisões difíceis?',resposta1:'Analise bem a situação antes de agir com sabedoria',resposta2:'confio em Deus e espero que ele me sustente',resposta3:'Sigo minha conciência e obedeço, sem questionar muito',r1:'daniel',r2:'jo',r3:'noe'},{pergunta:'Se um governante proibisse a prática de sua fé, como você reagiria?',resposta1:'Manteria minha fé em segredo, mas nunca desistiria dela',resposta2:'Continuaria firme,aceitando qualquer punição',resposta3:'Encontraria uma forma sábia de continuar adorando a Deus sem me expor diretamente',r1:'noe',r2:'jo',r3:'daniel'},{pergunta:'O que você faz quando alguém próximo duvida da sua fé',resposta1:'Tento mostrar meu exemplo,independentemente do que digam',resposta2:'Converso com sabedoria para tentar explicar meu ponto de vista',resposta3:'Apenas sigo acreditando, sem discutir',r1:'noe',r2:'daniel',r3:'jo'},{pergunta:'Como você lida com momentos de incerteza sobre o futuro?',resposta1:'Sigo meu caminho sem olhar para trás',resposta2:'Peço discernimento a Deus e procuroa a melhor saída',resposta3:'Espero pacientemente que Deus resolva tudo',r1:'noe',r2:'daniel',r3:'jo'}]

    let ConhecidoJo='Conhecido por: Sua paciência e resistência ao sofrimento'
    let HistoriaJo='História: Jó era um homem justo e fiel a Deus, mas sofreu enormes perdas—sua família, riqueza e saúde—como parte de um teste. Apesar do sofrimento, ele permaneceu fiel, e Deus o restaurou no final.'

    let ConhecidoNoe='Conhecido por: Construir a arca e sobreviver ao Dilúvio.'
    let HistoriaNoe='História: Noé foi escolhido por Deus por ser justo em meio a uma humanidade corrupta. Deus ordenou que ele construísse uma arca para salvar sua família e os animais do Dilúvio. Depois do evento, ele repovoou a Terra.'

    let ConhecidoDaniel='Conhecido por: Sua sabedoria e fidelidade a Deus em meio ao exílio na Babilônia.'
    let HistoriaDaniel='História: Daniel foi levado para a Babilônia, onde se destacou como sábio e intérprete de sonhos. Ele sobreviveu à cova dos leões por permanecer fiel a Deus, mesmo sob ameaça de morte.'

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
    const [abrir,setAbrir] =useState(false)
    const [conhecido,setConhecido] =useState('')
    const [historia,setHistoria]=useState('')

    let pessoa ={noe:noe,daniel:daniel,jo:jo}

    function abrirInf(c,h){
        setConhecido(c)
        setHistoria(h)
        setAbrir(true)
    }
    function fechar(){
        setAbrir(false)
    }

    
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
                <div className='respostas' onClick={()=>respoder(quiz[numeroPergunta].r1)}>        {resposta1}</div> 
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
                
                <div>
                    <p>Qual campeão te representa? Faça o quiz e descubra!</p>
                </div>
                <div className='bot2'>
                    <div className='nome' >
                        <img onClick={()=>abrirInf(ConhecidoNoe,HistoriaNoe)} className='time' src='noe.png'></img>
                        
                    </div>
                    <div className='nome'>
                        <img onClick={()=>abrirInf(ConhecidoDaniel,HistoriaDaniel)} className='time' src='daniel.png'></img>
                    
                    </div>
                    <div className='nome'>
                        <img onClick={()=>abrirInf(ConhecidoJo,HistoriaJo)} className='time' src='jo.png'></img>
                        

                    </div>

                </div>
               
                

            </div>
            <div onClick={fechar} className={abrir ?'capa':'none'}></div>
            <div className={abrir ?'infTime' :'none'}>
                <button onClick={fechar} className='botaoFechar'>x</button>
                <p>{conhecido}</p>
                <p>{historia}</p>
            </div>
            
        </div>
    );
}
export default Home;