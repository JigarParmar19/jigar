// Get the buttons and counters
const likeBtn = document.getElementById('like-btn');
const likeCount = document.getElementById('like-count');
const followBtn = document.getElementById('follow-btn');
const followTooltip = document.getElementById('follow-tooltip');
const shareBtn = document.getElementById('share-btn');

// Initialize local storage
let likes = localStorage.getItem('likes') ? parseInt(localStorage.getItem('likes')) : 0;
let follows = localStorage.getItem('follows') ? parseInt(localStorage.getItem('follows')) : 0;
let shares = localStorage.getItem('shares') ? parseInt(localStorage.getItem('shares')) : 0;

// Update the counters
likeCount.textContent = likes;
followTooltip.textContent = follows + 'k';
shareBtn.textContent = 'Share (' + shares + ')';

// Add event listeners
likeBtn.addEventListener('click', (e) => {
  e.preventDefault(); // prevent default button behavior
  likes++;
  localStorage.setItem('likes', likes);
  likeCount.textContent = likes;
});

followBtn.addEventListener('click', () => {
  follows++;
  localStorage.setItem('follows', follows);
  followTooltip.textContent = follows + 'k';
});

shareBtn.addEventListener('click', () => {
  shares++;
  localStorage.setItem('shares', shares);
  shareBtn.textContent = 'Share (' + shares + ')';
});