import { useState } from 'react'

//TODO: Here \/ we will claim data from either the Database or directly from the API
export default function GetCharts(initialChart, date, country) {
    const [chart, setCharts] = useState(initialChart)

    //Send chart data here \/
    const handleDataChange = () => {
        setCharts({
           gname1: "GlobalSong1 (" + date + ")",
           gstreams1: 234346, 

           gname2: "GlobalSong2 (" + date + ")",
           gstreams2: 123443,

           gname3: "GlobalSong3 (" + date + ")",
           gstreams3: 87689,

           gname4: "GlobalSong4 (" + date + ")",
           gstreams4: 78587,

           gname5: "GlobalSong5 (" + date + ")",
           gstreams5: 78111,

           gname6: "GlobalSong6 (" + date + ")",
           gstreams6: 78007,

           gname7: "GlobalSong7 (" + date + ")",
           gstreams7: 68796,

           gname8: "GlobalSong8 (" + date + ")",
           gstreams8: 59887,

           gname9: "GlobalSong9 (" + date + ")",
           gstreams9: 30221,

           gname10: "GlobalSong10 (" + date + ")",
           gstreams10: 26789,

           cname1: country + "Song1 (" + date + ")",
           cstreams1: 190754, 

           cname2: country + "Song2 (" + date + ")",
           cstreams2: 100083,

           cname3: country + "Song3 (" + date + ")",
           cstreams3: 95249,

           cname4: country + "Song4 (" + date + ")",
           cstreams4: 92567,

           cname5: country + "Song5 (" + date + ")",
           cstreams5: 89654,

           cname6: country + "Song6 (" + date + ")",
           cstreams6: 79523,

           cname7: country + "Song7 (" + date + ")",
           cstreams7: 56732,

           cname8: country + "Song8 (" + date + ")",
           cstreams8: 35683,

           cname9: country + "Song9 (" + date + ")",
           cstreams9: 32121,

           cname10: country + "Song10 (" + date + ")",
           cstreams10: 10010
        });
    }

    return {
        chart,
        setCharts,
        handleDataChange,
    }
}