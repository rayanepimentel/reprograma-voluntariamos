import React from 'react'
import './Sobre.css'

function Sobre() {
    return (
        <div class="container text-center" >
        <h3 id="sobre" >Sobre</h3>
        <p class="secao-sobre">Voluntariamos nasceu para
            unir o
            mundo,
            onde todo mundo pode doar um pouco do seu tempo
            e
            abraçar
            uma causa.</p>
           
             <article class="secao-about__historia">
                <h3 class="secao-about__titulo secao-about__titulo_esq">História</h3>
                <div>
                    <p>A ideia surgiu em agosto de 2012 (quando eu mudei de estado), e procurei trabalho voluntário na internet.
                    Na época encontrei poucas opções, ainda mais para concilicar com a faculdade.
                    Mas segui com meu propósito e encontrei um ação que aacontecia todos os sábados, por 01 ano.</p>
                    <p> empre que eu falava que estava em um projeto voluntário, várias pessoas diziam que tinham
                    interesse, mas não tinha tempo. Afinal, São Paulo é a cidade que não dorme rs
                    </p>
                    <p>NCom essa necessidade, nasce a ideia do Voluntariamos, onde podemos conectar pessoas que não tem tanta disponibilidade
                    para projetos que demanda muito tempo, mas que querem estarem por perto de ações que movem a cidade,
                    dedicando algumas horas, ou dias para um projeto\evento.</p>
                    
                </div>
                
                <div>
                    <p>Além de conectar pessoas com empresas\ONGS, ainda contribuimos por um mundo melhor..</p>
                </div>
                <div>
                <h3 class="secao-about__titulo secao-about__titulo_esq">Trabalho Voluntário Realizados:</h3>
                <div>
                    <p>2013, Projeto Ambiental, Jovens Sem Fronteiras</p>
                    <p>2013, Participei da Virada Sustentável </p>
                    <p>2014, Projeto Comunitário, com moradores de ruas</p>
                    <p>2018, Virada Sustentável</p>
                    <p>2014-Atual, Projeto com Gestantes.</p>
                    </div>
                </div>
            </article>
        </div>
     
        
    )
}

export default Sobre

