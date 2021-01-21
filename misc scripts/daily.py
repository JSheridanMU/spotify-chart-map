from firebase import firebase
from datetime import datetime, timedelta
import csv
from fycharts.SpotifyCharts import SpotifyCharts
import time

# get date
date = datetime.now() - timedelta(10)
date = date.strftime('%Y-%m-%d')

# write chart to csv
api = SpotifyCharts()
api.top200Daily(output_file="temp.csv", start=date, end=date, region=["global"])
time.sleep(5)

# write to db from csv
fb = firebase.FirebaseApplication(
    'https://spotifychartsdatabase-default-rtdb.firebaseio.com/', None)
with open('temp.csv', encoding="utf8") as f:
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
            result = fb.post('/2021', data)

# clear csv file
f = open("temp.csv", "w+")
f.close()
