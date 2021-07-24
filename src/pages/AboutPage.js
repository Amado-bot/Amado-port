import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';

function AboutPage(props) {

    return(
        <div>
            <Hero title={props.title} />

            <Content>
            <p>Hello my name is Amado, I am a full-stack web developer with experience in MYSQL, mongoDB, expreess.js, node.js, bootstrap, and React along with some other things.</p>

            <p>I am currently looking for a position as a full stack web developer but I am also learning about web-security to get a Pentest certifiaction.</p>

            <p>On my time off I like to play soccer, biking Through the city or watching video about programming because I never feel like I know enough.</p>

            <p>I began my programming journey in December of 2020 and in january of 2021 I enrolled in The University of Utah Coding Bootcamp.</p>

            <p>I always encourage others to code because it really encourages you to solve problems on your own and improve your their problem solving skills.</p>
            </Content>
        </div>
    );

}

export default AboutPage;