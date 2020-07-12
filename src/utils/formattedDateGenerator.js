const getFormattedDate = fullDate => {
  const months = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC"
  ];

  var date = new Date(fullDate);
  var formattedDate =
    "" +
    date.getDate() +
    "-" +
    months[date.getMonth()] +
    "-" +
    date.getFullYear();
  return formattedDate;
};

module.exports = getFormattedDate;
