import React from 'react'
import coolRunnings from '../assets/movie covers/cool runnings.jpg';
import soulPlane from '../assets/movie covers/soul plane.jpg';
import howHigh from '../assets/movie covers/how high.jpg';
import boyz from '../assets/movie covers/boyz.jpg';
import menace from '../assets/movie covers/menace.jpg';
import friday from '../assets/movie covers/friday.jpg';

export default function GetCover(props) {
    return (
        [{id: "coolrunnings", name: "Cool Runnings", year: "1993", cover: coolRunnings},
        {id: "soulplane", name: "Soul Plane", year: "2004", cover: soulPlane},
        {id: "howhigh", name: "How High", year: "2001", cover: howHigh},
        {id: "boyznthehood", name: "Boyz N The Hood", year: "1991", cover: boyz},
        {id: "menaceiisociety", name: "Menace II Society", year: "1993", cover: menace},
        {id: "friday", name: "Friday", year: "1995", cover: friday}]
    );
}