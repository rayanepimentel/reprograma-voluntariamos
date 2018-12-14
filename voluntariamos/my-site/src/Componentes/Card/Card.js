import React from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardDeck,
 CardSubtitle, CardBody, Row, Col } from 'reactstrap';
 import './Card.css';


function Cartao() {
  return (
    <Row>
    <CardDeck className='card'>
    <Col sm="3">
      <Card>
        <CardImg  src="https://pbs.twimg.com/profile_images/784516442813243392/uOXmGCOW_400x400.jpg" alt="Reprograma" />
        <CardBody>
          <CardTitle>Reprograma</CardTitle>
          <CardSubtitle>Monitora(o)</CardSubtitle>
          <CardText>Aréa: Tecnologia<br></br>
          Local: Avenida Paulista<br></br>
          Horário: 19h - 22h30<br></br>
          Dias: Conforme a demanda.<br></br>
          </CardText>
          <a href="http://reprograma.com.br" target="_blank" >
          <Button className='button'>Increva-se</Button></a>
        </CardBody>
      </Card>
      </Col>
      <Col sm="3">
      <Card>
        <CardImg  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkHQPIqlAnKZzZgk4CzlTQDJGDxvzXmxQVM9WOHfxyz5iJGTKx"alt="Virada Sustentável" />
        <CardBody>
          <CardTitle>Virada Sustentável</CardTitle>
          <CardSubtitle>Área: Ambiental</CardSubtitle>
          <CardText>Local: Vários pontos da cidade de SP<br></br>
          Horário: Escolhido na inscrição<br></br>
          Dia(s): 23 - 26 de Agosto 2019<br></br></CardText>
          <a href="https://www.viradasustentavel.org.br/conteudos/sao-paulo.html" target="_blank" >
          <Button className='button'>Increva-se</Button></a>
        </CardBody>
      </Card>
      </Col>
      <Col sm="3">
      <Card>
        <CardImg top width="100%" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAulBMVEUAAAD/KwX////tKAU2CQFqEgJ6enq3HwP7KgWWGQO1tbXZJQSlHAP09PTwKAVAQEB2dnZKSkqwsLAjIyOcGgO+vr7w8PDi4uIwCAGjo6OtHQO+IAT1KQWFhYXXJAQODg4yMjKIFwPW1tYcBQHn5+fOIwTiJgR4FAKNjY2FFgNbW1uVlZVHDAEfHx8tLS2PGAMnBgFiYmJRDgFZDwERAwHKyspZDwJiEAJRUVFKDAE9CgEqBwF9FQNsbGw7lOhtAAAEgElEQVR4nO3Za0PaPBzG4VAVUFeOAhZQkCnoQJ17xnRufv+vNUhP/5S0lEcUXvyuN4OsbXKbNoeiFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGDx5M07ruN25t63bV3yqn+QpXKqnrOP6CtVsRSPL0t3h7KibqGsXfrVBt8O5CHDliM1BvI/i86K9mjaXJ/wuJCtoo7WHKFU6n+N70RNlaBwsvxSDr78Egc0ViJcZCdcOnl3woP3JFz8gY6imn4HRYtOV6Xgc1e05NrS/sbahI473G3CQqEUVfUlKDlWr9HFVwJ2Ghe1WtEbBe331iZ0nPsdJyzcRHWNwzMugw+zuB3+I9h6CL8PPL/5L0bC1rAaqr95Hf+Q0a4TFnphXedBQZj0LG5GVbe1KFs2dHWfGgkTT92LPsR52nVCf2xZejSKx6IZJ5b2D41OtCVUAx1xvvOE5ai2S1l8LprRXrb0IdG2hhxsrAlVTQ8270r4rtki9CWs7asofJR9YW3oUN6m9oRK93PmrHjUK4VE7adRYddIGB8c6RkJ9Yk340JCVN3fqOhStqJpPHIR3bPZCfWgm3f9U45bJP++MuFX64mW3rrqGwn/RsfeBCVl41JN+83WcheyE+ox+G3zhMcpCc+tJ9ruxyiKFs8Yd7YuDG62elbr9i+hEbEfFv6x3iZK6amtbSxEE7Lu0hfL8TY5Ev60nmhPaAxAr0GZeEL/yEvc+iuw2sYJ86xqNkl4umqcmrAryoMpUY7ccjoMBpVFN3ppt6o94VSflDNgnoQ2qQl/iHL/gofGiWey8mG0zHTnnm2RYk3oL4XW7y8+KKG8oL+JSMwiM3nwfUeupq8bydGjKKf/wIV/cHVnCStxuV6bnoWdF/xrbH8X7W07hpHcHvoJ57Vi6GLa8lelTitvwO0nPDATzoLP42gf1TUboJ5aiZDx5il993SdO+CH92EY+IdS/fhjQvV27ormu+buyWJ1JfSJCcW6phsPrT1xzYq1IQ+1RvxQhiuylITTDQJuPaEcOc/Uf+FHPaeGy4GSSlMbBRmaMqErXM8b2TvDD094Jcrv1Lii9f21zPd+8PWXSlX1O3IuEjbSj95Swu/WE1MSyrlhZj1xnbnoxJQ1zUa2vC6diOKy9bzI/Uu9Xrdt8vSg408a+5dwJkqTO4mkp7Qxw4tvzU9KmP8uvZIBExuJFfW01tfiGf2TEk6OVhkJe8/LoseSuQEupNYZSJvYPj+hTY73NMm1ywr9Otiyq5jGC5v9TmjfVgpeSifq+aK2/wknqVWG7h3rbPemi9XeJ0xft8T8350Su4RvMvceJ8wTMPxhxr2NX9VUT/wite8Jj1PrMzTDHcVI//g0bYU/toXb231NeJp7uTaw/X7ouNH+fT8T3jxvUr+3GlA8mNtIKJomXxL9v4T9cWmydpJIGHjmFv9EvoApWoaiTR3G5Cv3n4eZXo0Tfef2t/85VG9bo7brtketafI1b9brYgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOyDf2SDSd7386XTAAAAAElFTkSuQmCC" alt="TEDx SP" />
        <CardBody>
          <CardTitle>TEDx - São Paulo</CardTitle>
          <CardSubtitle>Área:Tecnologia</CardSubtitle>
          <CardText>Local: Teatro São Paulo<br></br>
          Horário: 08h - 17h30<br></br>
          Dia(s): 10 de dezembro<br></br></CardText>
          <a href="https://www.ted.com" target="_blank" >
          <Button className='button'>Increva-se</Button></a>
        </CardBody>
      </Card>
      </Col>
    </CardDeck>
    
    </Row>
  );
};

export default Cartao;