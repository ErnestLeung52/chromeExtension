// array to contain images of Regis

const regisArray = [
  'https://pbs.twimg.com/media/FNdUBCoVIAAtw_3?format=png&name=small',
  'https://pbs.twimg.com/media/FNdT-SzVUAceo4b?format=png&name=small',
  'https://pbs.twimg.com/media/FNdT2pFVcAI2wj2?format=png&name=small',
  'https://pbs.twimg.com/media/FNdT0RWVIAAwTEd?format=png&name=small',
  'https://pbs.twimg.com/media/FNdTtokVcAA8tUY?format=png&name=small',
];
// variable to store the image tags on the current page
const pageImages = document.getElementsByTagName('img');

// create a sum to store the total Regis Coins earned
// sum will be calculated by adding each photos width

// iterate through the length of how many images are on the current page
for (let i = 0; i < pageImages.length; i++) {
  // generate one of the photos from regisArray randomly
  const regisPhoto = Math.floor(Math.random() * regisArray.length);
  //reassign the current images src to the regius URL
  pageImages[i].src = regisArray[regisPhoto];
}

// change the values elements with id: photoSwap and coinsTotal
photosChanged = document.getElementById('photoSwap');
console.log(photosChanged);

// photosChanged.innerText = pageImages.length;

// Get PhotoWidth
console.log(pageImages[0].clientWidth);

// Bark when click

const audioUrl = 'https://freewavesamples.com/files/Dog-Bark.wav';

// Detect all click events on the document
document.addEventListener('click', function (event) {
  new Audio(audioUrl).play();
});

// Detect all keys fire
// document.addEventListener('keyup', function (event) {
//   new Audio(audioUrl).play();
// });
