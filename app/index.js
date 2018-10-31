import clock from "clock";
import document from "document";
import { preferences } from "user-settings";
import * as util from "../common/utils";

// Update the clock every minute
clock.granularity = "minutes";

// Get a handle on the <text> element
const clockface = document.getElementById("clock");
console.log(clockface.text)

// Update the <text> element every tick with the current time
clock.ontick = (evt) => {
  let today = evt.date;
  let hours = today.getHours();
  if (preferences.clockDisplay === "12h") {
    // 12h format
    hours = hours % 12 || 12;
  } else {
    // 24h format
    hours = util.zeroPad(hours);
  }
  let mins = util.zeroPad(today.getMinutes());
  clockface.text = `${hours}:${mins}`;
}

const temperature = document.getElementById("temperature");
const condition = document.getElementById("condition");
const location = document.getElementById("location");

temperature.text = '10°C';
condition.text = 'Clear Sky';
location.text = 'Maurepas';

const activity0 = document.getElementById("activity0-txt");
const activity1 = document.getElementById("activity1-txt");
const activity2 = document.getElementById("activity2-txt");

activity0.text = '0';
activity1.text = '0';
activity2.text = '0';
