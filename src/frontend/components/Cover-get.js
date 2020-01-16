import React from 'react'
import coolRunnings from '../assets/movie covers/cool runnings.jpg';
import soulPlane from '../assets/movie covers/soul plane.jpg';
import howHigh from '../assets/movie covers/how high.jpg';
import boyz from '../assets/movie covers/boyz.jpg';
import menace from '../assets/movie covers/menace.jpg';
import friday from '../assets/movie covers/friday.jpg';
import straight from '../assets/movie covers/straight outta compton.jpg';
import above from '../assets/movie covers/above the rim.jpg';
import juice from '../assets/movie covers/juice.jpg';
import sixth from '../assets/movie covers/the sixth man.jpg';
import dont from '../assets/movie covers/dont be a menace.jpg';
import barber from '../assets/movie covers/barbershop.jpg';

export default function GetCover() {
    return [
        { id: "cool-runnings", name: "Cool Runnings", year: "1993", cover: coolRunnings },
        { id: "soul-plane", name: "Soul Plane", year: "2004", cover: soulPlane },
        { id: "how-high", name: "How High", year: "2001", cover: howHigh },
        { id: "boyz-n-the-hood", name: "Boyz N The Hood", year: "1991", cover: boyz },
        { id: "menace-ii-society", name: "Menace II Society", year: "1993", cover: menace },
        { id: "friday", name: "Friday", year: "1995", cover: friday },
        { id: "straight-outta-compton", name: "Straight Outta Compton", year: "2015", cover: straight },
        { id: "above-the-rim", name: "Above The Rim", year: "1994", cover: above },
        { id: "juice", name: "Juice", year: "1992", cover: juice },
        { id: "the-sixth-man", name: "The Sixth Man", year: "1997", cover: sixth },
        { id: "dont-be-a-menace", name: "Don't Be a Menace to South Central While Drinking Your Juice in the Hood", year: "1996", cover: dont },
        { id: "barbershop", name: "Barbershop", year: "2002", cover: barber }
    ];
}