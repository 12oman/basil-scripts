#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";

function setup() {
  var myText = "Waveform Text is Fun! But did you forget to select some text?";
  var tf;

  var selection = b.selection();

  if (selection && selection.constructor.name === "TextFrame" && selection.contents.length > 0) {
    tf = selection;
  } else {
    tf = b.text(myText, 50, 50, 500, 300); // create a new text frame with default text
  }

  var lines = b.lines(tf);

  for (var l = 0; l < lines.length; l++) {
    var chars = b.characters(lines[l]);
    for (var i = 0; i < chars.length; i++) {
      var charObj = chars[i];
      var shiftAmount = 20 * Math.sin(b.radians(i * 15));
      b.typo(charObj, 'baselineShift', shiftAmount);
    }
  }
}

b.go();
