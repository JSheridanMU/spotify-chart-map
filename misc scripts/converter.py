from datetime import date, timedelta
import json
import csv

start_date = date(2017, 1, 1)   
end_date = date(2017, 12, 31)
delta = end_date - start_date 
dates_dict = {}

for i in range(delta.days + 1):
    day = start_date + timedelta(days=i)
    day = day.strftime('%Y-%m-%d')
    dates_dict.update({
        day: []
    })

with open('output.csv', encoding="utf8") as f:
    csv_reader = csv.reader(f, delimiter=',')

    for row in csv_reader:
        if len(row) > 0 and row[4] != 'date':
            data = {
                "position": row[0],
                "track name": row[1],
                "artist": row[2],
                "streams": row[3],
                "date": row[4],
                "region": row[5],
                "spotify_id": row[6]
            }
            if row[4] in dates_dict:
                if(int(row[0]) < 51):
                    dates_dict[row[4]].append(data)

with open('2017.json', 'w', encoding="utf8") as f:
    json.dump(dates_dict, f, indent=2)
