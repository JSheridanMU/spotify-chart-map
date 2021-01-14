from fycharts.SpotifyCharts import SpotifyCharts


api = SpotifyCharts()

api. top200Daily(output_file = "uk2.csv", start = "2017-06-01", end = "2020-12-12", region = ["gb"])