var quotes = [
  {
    quote:
      "This is the real secret of life -- to be completely engaged with what you are doing in the here and now. And instead of calling it work, realize it is play.",

    attr: "Alan Watts"
  },
  {
    quote:
      "The only thing that is ultimately real about your journey is the step that you are taking at this moment. Thats all there ever is.",

    attr: "Eckhart Tolle"
  },
  {
    quote: "Wherever you are, be there totally.",

    attr: "Eckhart Tolle"
  },
  {
    quote:
      "I’m here to tell you that the path to peace is right there, when you want to get away",

    attr: "Pema Chödrön"
  },
  {
    quote:
      "When you are present, you can allow the mind to be as it is without getting entangled in it.",

    attr: "Eckhart Tolle"
  },
  {
    quote:
      "If you miss the present moment, you miss your appointment with life. That is very serious!",

    attr: "Thich Nhat Hanh"
  },
  {
    quote:
      "Practice is this life, and realization is this life, and this life is revealed right here and now.",

    attr: "Maezumi Roshi"
  },
  {
    quote:
      "If you want to change the world, start with the next person who comes to you in need.",

    attr: "B. D. Schiers"
  },
  {
    quote:
      "My experience is that the teachers we need most are the people were living with right now.",

    attr: "Byron Katie"
  },
  {
    quote:
      "Guilt, regret, resentment, sadness & all forms of nonforgiveness are caused by too much past & not enough presence.",

    attr: "Eckhart Tolle"
  },
  {
    quote:
      "Throughout this life, you can never be certain of living long enough to take another breath.",

    attr: "Huang Po"
  }
];

const buttonCycle = document.getElementById("cycle");
const buttonTweet = document.getElementById("tweet");

let quoteIndex = 0;
const getQuoteIndex = () => {
  let index = Math.floor(Math.random() * quotes.length);
  if (index === quoteIndex) {
    return getQuoteIndex();
  }
  quoteIndex = index;
  return index;
};

const changeQuote = () => {
  const quotearr = quotes[getQuoteIndex()];
  document.getElementById("quote").innerHTML = quotearr.quote;
  document.getElementById("cite").innerHTML = "-" + quotearr.attr;
};

window.onload = function() {
  changeQuote();
};
