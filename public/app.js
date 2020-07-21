let thumbsUpCount = 0, thumbsDownCount = 0;

function incrementThumbsUp(elThumbsUp) {
  thumbsUpCount++;
  elThumbsUp.innerText = thumbsUpCount;
}

function incrementThumbsDown(elThumbsDown) {
  thumbsDownCount++;
  elThumbsDown.innerText = thumbsDownCount;
}

const voteUp = document.getElementById('vote-up');
const thumbsUpCounter = document.getElementById('thumbs-up-count');
voteUp.addEventListener('click', () => incrementThumbsUp(thumbsUpCounter))

const voteDown = document.getElementById('vote-down');
const thumbsDownCounter = document.getElementById('thumbs-down-count');
voteDown.addEventListener('click', () => incrementThumbsDown(thumbsDownCounter))