import React from 'react';
import '../index.css';

import Card from '../components/Card';

import virtM from '../assets/images/vm-screenshot.PNG';
import ProfilePic from '../assets/images/picture-of-me.JPG';
import justMyType from '../assets/images/justMY.png';
import kitchenbud from '../assets/images/kitchen-buddy.JPG';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [                {
                    id: 3,
                    title: 'Kitchen-buddy',
                    subTitle: 'My last group project with the laserBeans',
                    imgSrc: kitchenbud, 
                    link: 'https://kitchen-buddy.herokuapp.com/',
                    selected: false
                }
,
                {
                    id: 1,
                    title: 'Just My Type',
                    subTitle: 'Be a better typer',
                    imgSrc: justMyType,
                    link: 'https://stark-depths-18071.herokuapp.com/',
                    selected: false
                },
                {
                    id: 2,
                    title: 'virtM',
                    subTitle: 'My very first group project with the laserBeans',
                    imgSrc: virtM,
                    link: 'https://rm-evans.github.io/Virtual-Museum/',
                    selected: false
                },                {
                    id: 0,
                    title: 'Amado-bot',
                    subTitle: 'Checkout my github',
                    imgSrc: ProfilePic ,
                    link: 'https://github.com/Amado-bot',
                    selected: false,
                }

            ]
        }
    }


    handleCardClick = (id, card) => {

        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }


    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }


    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-around " >
                    {this.makeItems(this.state.items )}
                </Row>
            </Container>
        );
    }

}

export default Carousel;