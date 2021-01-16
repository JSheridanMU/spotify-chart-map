import json

with open('spotifychartsdatabase-default-rtdb-export.txt', encoding="utf8") as json_file:
    data = json.load(json_file)
    for p in data:
        if p != None:
            if len(p['date']) == 2 or p['date'] == 'global':
                temp = p['date']
                p['date'] = p['region']
                p['region'] = temp
    
    with open('spotify-charts.txt', 'w') as outfile:
        json.dump(data, outfile)