function translateDays(dayEn){
  var portugueseDay = {
    Mon: "segunda",
    Tue: "terça",
    Wed: "quarta",
    Thu: "quinta",
    Fri: "sexta",
    Sat: "sábado",
    Sun: "domingo"
  } 
  return portugueseDay[dayEn];
}

module.exports = { translateDays }