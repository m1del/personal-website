import React from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import balls from '../assets/balls.png';
import Card from './Card.js';
import './Carousel.scss';


//TODO FIXME


function Carousel(props) {

    const slides = [1,2,3,4,5,6,7,8,9,10,11,12];

    const cards = [
      {title:'peepeepoopoo',
      stack: 'stack some money',
      img: {balls},
        desc: 'Whatever the mind of man can conceive and believe, it can achieve.',
      author: 'Napoleon Hill'},
      {title:'peepeepoopoo',
      stack: 'stack some money',
      img: {balls},
        desc: 'Whatever the mind of man can conceive and believe, it can achieve.',
      author: 'Napoleon Hill'},
      {title:'peepeepoopoo',
      stack: 'stack some money',
      img: {balls},
        desc: 'Whatever the mind of man can conceive and believe, it can achieve.',
      author: 'Napoleon Hill'},
    ];


    const slideLeft = () => {
      let slider = document.getElementById('slider');
      slider.scrollLeft = slider.scrollLeft - 500;
    }

    const slideRight = () => {
      let slider = document.getElementById('slider');
      slider.scrollLeft = slider.scrollLeft + 500;
    }
    
  return (
    <div id='carousel-container'>
      <MdChevronLeft size={50} className='icon-left' onClick={slideLeft}/>
      <div id='slider'>
        {
            slides.map((slide, index) => {
                return (
                    <div className='slider-card'>

                      <Card 
                      title='penis'
                      stack='i suck balls'
                      img={balls}
                      desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
                      ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
                      in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
                      occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim 
                      id est laborum.'
                      />

                    </div>
                )
            })
        }     
      </div>
      <MdChevronRight size={50} className='icon-right' onClick={slideRight}/>
    </div>
  )
}

export default Carousel
