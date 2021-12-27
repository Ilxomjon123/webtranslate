function toLatin(msg) {
  let answer = "",
    a = {};
  switch (msg[0]) {
    case "Е":
      msg = msg.replace("Е", "Ye");
      break;
    case "е":
      msg = msg.replace("е", "ye");
      break;
  }
  msg = msg.replaceAll(" е", " ye");

  a["Ў"] = "O'";
  a["ў"] = "o'";
  a["Ғ"] = "G'";
  a["ғ"] = "g'";
  a["Ё"] = "Yo";
  a["Й"] = "Y";
  a["Ц"] = "S";
  a["У"] = "U";
  a["К"] = "K";
  a["Е"] = "Ye";
  a["Н"] = "N";
  a["Г"] = "G";
  a["Ш"] = "Sh";
  a["Щ"] = "Sh";
  a["З"] = "Z";
  a["Х"] = "X";
  a["Ҳ"] = "H";
  a["Ъ"] = "'";
  a["ё"] = "yo";
  a["й"] = "y";
  a["ц"] = "s";
  a["у"] = "u";
  a["к"] = "k";
  a["е"] = "e";
  a[" е"] = " ye";
  a["н"] = "n";
  a["г"] = "g";
  a["ш"] = "sh";
  a["щ"] = "sh";
  a["з"] = "z";
  a["ҳ"] = "h";
  a["х"] = "x";
  a["ъ"] = "'";
  a["Ф"] = "F";
  a["Ы"] = "I";
  a["В"] = "V";
  a["А"] = "a";
  a["П"] = "P";
  a["Р"] = "R";
  a["О"] = "O";
  a["Л"] = "L";
  a["Д"] = "D";
  a["Ж"] = "J";
  a["Э"] = "E";
  a["ф"] = "f";
  a["ы"] = "i";
  a["в"] = "v";
  a["а"] = "a";
  a["п"] = "p";
  a["р"] = "r";
  a["о"] = "o";
  a["л"] = "l";
  a["д"] = "d";
  a["ж"] = "j";
  a["э"] = "e";
  a["Я"] = "Ya";
  a["Ч"] = "Ch";
  a["С"] = "S";
  a["М"] = "M";
  a["И"] = "I";
  a["Т"] = "T";
  a["Ь"] = "'";
  a["Б"] = "B";
  a["Ю"] = "Yu";
  a["я"] = "ya";
  a["ч"] = "ch";
  a["с"] = "s";
  a["м"] = "m";
  a["и"] = "i";
  a["т"] = "t";
  a["ъ"] = "'";
  a["б"] = "b";
  a["ю"] = "yu";

  for (let i in msg) {
    if (msg.hasOwnProperty(i)) {
      if (a[msg[i]] === undefined) {
        answer += msg[i];
      } else {
        answer += a[msg[i]];
      }
    }
  }
  return answer;
}
function toCryllic(msg) {
  let answer = "",
    answer1 = "",
    a = {},
    b = {};
  msg = msg.replaceAll("ʻ", "'");
  msg = msg.replaceAll("`", "'");
  msg = msg.replaceAll("ʼ", "'");
  msg = msg.replaceAll("O'", "Ў");
  msg = msg.replaceAll("o'", "ў");
  msg = msg.replaceAll("G'", "Ғ");
  msg = msg.replaceAll("g'", "ғ");
  switch (msg[0]) {
    case "E":
      msg = msg.replace("E", "Э");
      break;
    case "e":
      msg = msg.replace("e", "э");
      break;
  }
  msg = msg.replaceAll(" e", " э");
  a["Yo"] = "Ё";
  a["yo"] = "ё";
  a["Ye"] = "Е";
  a["TS"] = "Ц";
  a["Q"] = "Қ";
  a["Sh"] = "Ш";
  a["SH"] = "Ш";
  a["ts"] = "ц";
  a["ye"] = "е";
  a["sh"] = "ш";
  a["Ya"] = "Я";
  a["CH"] = "Ч";
  a["Ch"] = "Ч";
  a["Yu"] = "Ю";
  a["ya"] = "я";
  a["ch"] = "ч";
  a["yu"] = "ю";

  // for (let i in msg) {
  //   if (msg.hasOwnProperty(i)) {
  //     if (a[msg[i]] === undefined) {
  //       answer1 += msg[i];
  //     } else {
  //       answer1 += a[msg[i]];
  //     }
  //   }
  //   return i;
  // }
  Object.entries(a).forEach((entry) => {
    const [key, value] = entry;
    msg = msg.replaceAll(key, value);
  });

  a["q"] = "қ";
  a["'"] = "ъ";
  a["ʻ"] = "ъ";
  a["Y"] = "Й";
  a["U"] = "У";
  a["K"] = "К";
  a["N"] = "Н";
  a["G"] = "Г";
  a["Z"] = "З";
  a["X"] = "Х";
  a["H"] = "Ҳ";
  a["yo"] = "ё";
  a["y"] = "й";
  a["u"] = "у";
  a["k"] = "к";
  a["n"] = "н";
  a["g"] = "г";
  a["z"] = "з";
  a["h"] = "ҳ";
  a["x"] = "х";
  a["F"] = "Ф";
  a["I"] = "Ы";
  a["V"] = "В";
  a["a"] = "А";
  a["P"] = "П";
  a["R"] = "Р";
  a["O"] = "О";
  a["L"] = "Л";
  a["D"] = "Д";
  a["J"] = "Ж";
  a["E"] = "Э";
  a["f"] = "ф";
  a["i"] = "ы";
  a["v"] = "в";
  a["a"] = "а";
  a["p"] = "п";
  a["r"] = "р";
  a["o"] = "о";
  a["l"] = "л";
  a["d"] = "д";
  a["j"] = "ж";
  a["e"] = "е";
  a["S"] = "С";
  a["M"] = "М";
  a["I"] = "И";
  a["T"] = "Т";
  a["B"] = "Б";
  a["s"] = "с";
  a["m"] = "м";
  a["i"] = "и";
  a["t"] = "т";
  a["b"] = "б";

  b["O'"] = "Ў";
  b["o'"] = "ў";
  b["G'"] = "Ғ";
  b["g'"] = "ғ";

  for (let i in msg) {
    if (msg.hasOwnProperty(i)) {
      if (a[msg[i]] === undefined) {
        answer += msg[i];
      } else {
        answer += a[msg[i]];
      }
    }
  }
  return answer;
}

export { toLatin, toCryllic };
