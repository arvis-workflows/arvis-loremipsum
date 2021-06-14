'use strict';

const arvish = require('arvish');
const lorem = require('lorem-ipsum');

function generateSentenceOutput(count) {
  return {
    title: count > 1 ? `${count} Sentences` : 'Sentence',
    subtitle: 'Press enter to copy',
    arg: lorem({
      units: 'sentences',
      count,
      sentenceLowerBound: 5,
      sentenceUpperBound: 15
    })
  };
}

function generateParagraphOutput(count) {
  return {
    title: count > 1 ? `${count} Paragraphs` : 'Paragraph',
    subtitle: 'Press enter to copy',
    arg: lorem({
      units: 'paragraphs',
      count,
      paragraphLowerBound: 5,
      paragraphUpperBound: 15
    })
  };
}

const count = parseInt(arvish.input, 10) || 1;

arvish.output([
  generateParagraphOutput(count),
  generateSentenceOutput(count)
]);
