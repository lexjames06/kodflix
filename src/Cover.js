import React from 'react'
import Movie from './Movie.js'
import coolRunnings from './movie covers/cool runnings.jpg';
import soulPlane from './movie covers/soul plane.jpg';
import howHigh from './movie covers/how high.jpg';
import boyz from './movie covers/boyz.jpg';
import menace from './movie covers/menace.jpg';
import friday from './movie covers/friday.jpg';

export default function Cover(props) {
    return (
        <div>
            <div className='movie-rows'>
                <Movie name="Cool Runnings" year="1993" cover={coolRunnings} id="coolrunnings"/>
                <Movie name='Soul Plane' year='2004' cover={soulPlane} id="soulplane" />
                <Movie name='How High' year='2001' cover={howHigh} id="howhigh" />
                <Movie name='Boyz N The Hood' year='1991'cover={boyz} id="boyznthehood" />
                <Movie name='Menace II Society' year='1993' cover={menace} id="menaceiisociety" />
                <Movie name='Friday' year='1995' cover={friday} id="friday" />
            </div>
        </div>
    );
}
