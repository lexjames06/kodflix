import coolRunnings from '../../assets/movie covers/cool runnings.jpg';
import soulPlane from '../../assets/movie covers/soul plane.jpg';
import howHigh from '../../assets/movie covers/how high.jpg';
import boyz from '../../assets/movie covers/boyz.jpg';
import menace from '../../assets/movie covers/menace.jpg';
import friday from '../../assets/movie covers/friday.jpg';
import straight from '../../assets/movie covers/straight outta compton.jpg';
import above from '../../assets/movie covers/above the rim.jpg';
import juice from '../../assets/movie covers/juice.jpg';
import sixth from '../../assets/movie covers/the sixth man.jpg';
import dont from '../../assets/movie covers/dont be a menace.jpg';
import barber from '../../assets/movie covers/barbershop.jpg';
import coolRunningsSynopsis from '../../assets/synopsis covers/cool runnings.jpg'
import soulPlaneSynopsis from '../../assets/synopsis covers/soul plane.jpg'
import howHighSynopsis from '../../assets/synopsis covers/how high.jpg'
import boyzSynopsis from '../../assets/synopsis covers/boyz.jpg'
import menaceSynopsis from '../../assets/synopsis covers/menace.jpg'
import fridaySynopsis from '../../assets/synopsis covers/friday.jpg'
import straightSynopsis from '../../assets/synopsis covers/straight.jpg'
import aboveSynopsis from '../../assets/synopsis covers/above the rim.jpg'
import juiceSynopsis from '../../assets/synopsis covers/juice.jpg'
import sixthSynopsis from '../../assets/synopsis covers/the sixth man.jpg'
import dontSynopsis from '../../assets/synopsis covers/dont.jpg'
import barberSynopsis from '../../assets/synopsis covers/barbershop.jpg'

export default function GetCover() {
    return [
        { id: "cool-runnings", name: "Cool Runnings", year: "1993", cover: coolRunnings, synopsisCover: coolRunningsSynopsis,
            synopsis: 'When a Jamaican sprinter is disqualified from the Olympic Games, he enlists the help of a dishonored coach to start the first Jamaican Bobsled Team.' },
        { id: "soul-plane", name: "Soul Plane", year: "2004", cover: soulPlane, synopsisCover: soulPlaneSynopsis,
        synopsis: 'Things get raucously funny aboard the maiden flight of a black-owned airline, thanks to some last-minute passenger additions.' },
        { id: "how-high", name: "How High", year: "2001", cover: howHigh, synopsisCover: howHighSynopsis,
        synopsis: 'Two guys by the name of Silas and Jamal decided to one day smoke something magical, which eventually helps them to ace their college entrance exam.' },
        { id: "boyz-n-the-hood", name: "Boyz N The Hood", year: "1991", cover: boyz, synopsisCover: boyzSynopsis,
        synopsis: 'Follows the lives of three young males living in the Crenshaw ghetto of Los Angeles, dissecting questions of race, relationships, violence and future prospects.' },
        { id: "menace-ii-society", name: "Menace II Society", year: "1993", cover: menace, synopsisCover: menaceSynopsis,
        synopsis: 'A young street hustler attempts to escape the rigors and temptations of the ghetto in a quest for a better life.' },
        { id: "friday", name: "Friday", year: "1995", cover: friday, synopsisCover: fridaySynopsis,
        synopsis: 'Two homies, Smokey and Craig, smoke a dope dealer\'s weed and try to figure a way to get the $200 they owe to the dealer by 10 p.m. that same night.' },
        { id: "straight-outta-compton", name: "Straight Outta Compton", year: "2015", cover: straight, synopsisCover: straightSynopsis,
        synopsis: 'The group NWA emerges from the mean streets of Compton in Los Angeles, California, in the mid-1980s and revolutionizes Hip Hop culture with their music and tales about life in the hood.' },
        { id: "above-the-rim", name: "Above The Rim", year: "1994", cover: above, synopsisCover: aboveSynopsis,
        synopsis: 'Story of a promising high school basketball star and his relationships with two brothers, one a drug dealer and the other a former basketball star fallen on hard times and now employed as a security guard.' },
        { id: "juice", name: "Juice", year: "1992", cover: juice, synopsisCover: juiceSynopsis,
        synopsis: 'Four inner-city teenagers get caught up in the pursuit of power and happiness, which they refer to as "the juice".' },
        { id: "the-sixth-man", name: "The Sixth Man", year: "1997", cover: sixth, synopsisCover: sixthSynopsis,
        synopsis: 'Antoine and Kenny Tyler are NCAA college basketball players, and Antoine is the star of the team. Suddenly Antoine dies of a heart attack and Kenny has to fill his shoes as leader of the team. Some time later, Antoine returns as a ghost and helps Kenny in game and in life, but Kenny changes in the process and doesn\'t quite like it.' },
        { id: "dont-be-a-menace", name: "Don't Be a Menace to South Central While Drinking Your Juice in the Hood", year: "1996", cover: dont, synopsisCover: dontSynopsis,
        synopsis: 'A parody of several U.S. films about being in the \'Hood\', for instance "Boyz n the Hood", "South Central", "Menace II Society", "Higher Learning" and "Juice".' },
        { id: "barbershop", name: "Barbershop", year: "2002", cover: barber, synopsisCover: barberSynopsis,
        synopsis: 'A day in the life of a South Side Chicago barbershop.' }
    ];
}