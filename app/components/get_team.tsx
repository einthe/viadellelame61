import { getISOWeek } from "date-fns";


const starting_week = 44;


const teams: { [responsibility: string]: string[][] } = {
    "floors": [
        ["Einar", "Neal"],
        ["Yiyun", "Andrea"],
        ["Marieke", "Shiori"],
        ["Nicolo", "Einar"],
        ["Yiyun", "Neal"],
        ["Marieke", "Andrea"],
        ["Nicolo", "Shiori"]
    ],

    "waste": [
        ["Nicolo", "Shiori"],
        ["Einar", "Neal"],
        ["Yiyun", "Andrea"],
        ["Marieke", "Shiori"],
        ["Nicolo", "Einar"],
        ["Yiyun", "Neal"],
        ["Marieke", "Andrea"]
    ],

    "kitchen": [
        ["Marieke", "Andrea"],
        ["Nicolo", "Shiori"],
        ["Einar", "Neal"],
        ["Yiyun", "Andrea"],
        ["Marieke", "Shiori"],
        ["Nicolo", "Einar"],
        ["Yiyun", "Neal"]
    ]
};


function get_current_week(): number {
    return getISOWeek(new Date());
}


export function get_team_string(responsibility: string): string {
    let week_index = (get_current_week() - starting_week) % teams[responsibility].length;

    if (week_index < 0) {
         week_index = teams[responsibility].length + week_index
    }

    const [member1, member2] = teams[responsibility][week_index];
    
    return `${member1} & ${member2}`;
}