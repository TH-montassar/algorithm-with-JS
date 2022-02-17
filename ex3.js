const time12h = "10:00 AM";

const [time, modifier] = time12h.split(" ");

let [hours, minutes] = time.split(":");
if (modifier === "PM") {
  console.log("just AM pls");
} else {
  if (hours === "12") {
    hours = "00";
  }

  if (modifier === "AM") {
    hours = parseInt(hours) + 12;
  }
  console.log(`${hours}:${minutes} PM`);
}
