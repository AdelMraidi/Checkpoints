function WorkingHourMiddleware(req, res, next) {
  const currentDay = new Date().getDay();
  const currentHour = new Date().getHours();
  //lundi => vendredi and 9 => 17
  if (
    currentDay >= 1 &&
    currentDay <= 5 &&
    currentHour >= 9 &&
    currentHour <= 17
  ) {
    // a3meli l'instruction eli ba3dha
    next();
  } else {
    // a3meli console.log
    // response text
    res.send("OUT OF WORKING HOUR");
  }
}

module.exports = WorkingHourMiddleware;
