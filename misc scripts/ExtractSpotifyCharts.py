from fycharts.SpotifyCharts import SpotifyCharts

api = SpotifyCharts()
api.top200Daily(output_file="output.csv", start="2017-01-01", end="2021-01-19", region=[
                "dk", "gr", "is", "ch", "it", "pl", "at", "tr", "ee", "lt", "nl", "be", "es", "hu", "lu", "no", "ro", "bg", "fi", "lv", "se", "cz", "fr", "ie", "de", "gb", "sk", "global"])
