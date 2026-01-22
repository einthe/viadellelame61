import { getISOWeek } from "date-fns";


const starting_week = 4;


const exception_weeks: { [responsibility: string]: string[][] } = {
    "floors": [
        ["Einar", "Neal"],
        ["Kaisla", "Shiori"],
        ["Zhangjia", "Andrea"]
    ],

    "waste": [
        ["Zhangjia", "Andrea"],
        ["Einar", "Neal"],
        ["Kaisla", "Shiori"]
    ],

    "kitchen": [
        ["Shiori", "Kaisla"],
        ["Zhangjia", "Andrea"],
        ["Einar", "Neal"]
    ]
};


const teams: { [responsibility: string]: string[][] } = {
    "floors": [
        ["Einar", "Neal"],
        ["Kaisla", "Room2"],
        ["Zhangjia", "Andrea"],
        ["Tristan", "Neal"],
        ["Kaisla", "Einar"],
        ["Room2", "Andrea"],
        ["Zhangjia", "Tristan"]
    ],

    "waste": [
        ["Zhangjia", "Tristan"],
        ["Einar", "Neal"],
        ["Kaisla", "Room2"],
        ["Zhangjia", "Andrea"],
        ["Tristan", "Neal"],
        ["Kaisla", "Einar"],
        ["Room2", "Andrea"]
    ],

    "kitchen": [
        ["Room2", "Andrea"],
        ["Zhangjia", "Tristan"],
        ["Einar", "Neal"],
        ["Kaisla", "Room2"],
        ["Zhangjia", "Andrea"],
        ["Tristan", "Neal"],
        ["Kaisla", "Einar"]
    ]
};


function get_current_week(): number {
    return getISOWeek(new Date());
}


export function get_team(responsibility: string): React.ReactNode{
    let week_index = (get_current_week() - starting_week) % teams[responsibility].length;
    let member1: string;
    let member2: string;

    if (week_index < 0) {
         week_index = teams[responsibility].length + week_index
    }

    if ([4, 5, 6].includes(get_current_week())) {
        [member1, member2] = exception_weeks[responsibility][week_index];
    }

    else {
        [member1, member2] = teams[responsibility][week_index];
    }

    
    return (
        <>
          <span className={member1}>{member1}</span> &{" "}
          <span className={member2}>{member2}</span>
        </>
      );
}