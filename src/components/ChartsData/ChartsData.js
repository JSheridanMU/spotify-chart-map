import React from "react";
import "./ChartsData.css";
import IconButton from "@material-ui/core/IconButton";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { grey } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: grey[50],
    },
  },
});

export default function ChartsData(chart, handleTrackChange, _token) {
  if (chart) {
    return chart.map((entry) => {
      return (
        <tr key={entry.position}>
          <td>
            {_token ? (
              <div className="play-button">
                <div className="play-button--off">{chart.indexOf(entry) + 1}</div>
                <div className="play-button--on">
                  <ThemeProvider theme={theme}>
                    <IconButton
                      color="primary"
                      onClick={() => {
                        handleTrackChange(entry.spotify_id);
                      }}
                    >
                      <PlayArrowIcon />
                    </IconButton>
                  </ThemeProvider>
                </div>
              </div>
            ) : (
              chart.indexOf(entry) + 1
            )}
          </td>
          <td>{entry["track name"] + " by " + entry.artist}</td>
          <td>{entry.streams}</td>
        </tr>
      );
    });
  } else {
    return (
      <tr>
        <td>!!!</td>
        <td>Loading</td>
        <td>!!!</td>
      </tr>
    );
  }
}
