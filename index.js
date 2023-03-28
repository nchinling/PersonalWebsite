// function exitFunction() {
//   return "Goodbye!";
// }


writeRandomQuote = function () {
  var quotes = new Array();
  quotes[0] = "<em>Action is the real measure of intelligence.</em>";
  quotes[1] = "<em>Every goal, every action, every thought, every feeling one experiences, whether it be consciously or unconsciously known, is an attempt to increase one's level of peace of mind.</em>";
  quotes[2] = "<em>A good head and a good heart are always a formidable combination.</em>";
  quotes[3] = "<em>Doing good for others is the best way to develop one’s own character and find greater happiness for oneself.</em>";
  quotes[4] = "<em>Not to advance is to regress.</em>";
  quotes[5] = "<em>Patience is, in and of itself, a great challenge and it often holds the key to breaking through a seeming impasse.</em>";
  quotes[6] = "<em>The place where you are now is crucial. Never try to avoid that which you must do.</em>";
  quotes[7] = "<em>The reality of your future self is forged by your current action, in your behavior now.</em>";
  quotes[8] = "<em>Those who face adversity with hope and the willingness to do their best don’t consider the process painful.</em>";
  quotes[9] = "<em>Courage is the force that makes our lives brilliant.</em>";
  quotes[10] = "<em>Unless we take one step forward, we cannot take the next, much less a thousand.</em>";
  quotes[11] = "<em>Life is a never-ending struggle to grow.</em>";
  quotes[12] = "<em>A genuinely happy person is one who brings happiness to those around them.</em>";
  quotes[13] = "<em>It is impossible to build one’s own happiness on the unhappiness of others.</em>";
  quotes[14] = "<em>If you failed yesterday, strive to win today. If you were defeated today, strive to win tomorrow.</em>";
  quotes[15] = "<em>Rather than becoming discouraged, know that encountering a wall is proof of the progress that you have made so far.</em>";

  var rand = Math.floor(Math.random()*quotes.length);
  document.write(quotes[rand]);
}


  // function showDate() {
  //   var d = new Date();
  //   var curr_date = d.getDate();
  //   var curr_month = d.getMonth() + 1; //months are zero based
  //   var curr_year = d.getFullYear();
  //   document.write(curr_date + "-" + curr_month + "-" + curr_year);
  // }
