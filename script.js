const adviceText = document.getElementById("adviceText");
const copyText = document.getElementById("myInput");
var tooltip = document.getElementById("myTooltip");
const tweetAdv = document.getElementById("tweetAdvice");
let setTweet = "";

async function getAdvice() {
  try {
    const res = await fetch("https://api.adviceslip.com/advice");
    if (!res.ok) {
      throw Error(res.statusText);
    }
    const data = await res.json();
    displayAdvice(data);
  } catch (error) {
    adviceText.innerHTML = "Failed to fetch new advice";
  }
}

getAdvice();

function displayAdvice(data) {
  setTweet = data.slip.advice;
  adviceText.innerHTML = data.slip.advice;
  tooltip.innerHTML = "Copy";
}

function tweetAdvice() {
  let tweetpost = `https://twitter.com/intent/tweet?text=${setTweet}`;
  window.open(tweetpost);
}

function copyAdvice() {
  copyText.value = adviceText.innerHTML;

  copyText.select();
  document.execCommand("copy");
  tooltip.innerHTML = "Copied!";
}
