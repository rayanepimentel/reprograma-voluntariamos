import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';
import './Carousel.css'


const items = [
  {
    src: 'https://image.freepik.com/vetores-gratis/personagens-de-pessoas-segurando-a-ilustracao-de-formas-de-coracao_53876-32595.jpg',
    altText: 'Voluntariamos',
    caption: 'Sao Paulo',
    header: 'Slide 1 '
  },
  {
    src: 'https://image.freepik.com/vetores-gratis/ilustracao-de-diverso-pessoas-segurando-coracoes_53876-26716.jpg',
    altText: 'Slide 2',
    caption: 'Slide 2',
    header: 'Slide 2 Header'
  },
  {
    src: 'https://image.freepik.com/vetores-gratis/personagens-de-pessoas-segurando-a-ilustracao-do-icone-de-paz_53876-43072.jpg',
    altText: 'Slide 3',
    caption: 'Slide 3',
    header: 'Slide 3 Header'
  }
];

const Carousel = () => <UncontrolledCarousel items={items} />;

export default Carousel;