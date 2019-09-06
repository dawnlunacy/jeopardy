import $ from 'jquery';

const domUpdates = {

  transitionToFirstRound() {
    $('.splash-container').fadeOut(2000);
    $('.round-one').fadeIn(8000).prop('hidden', false)
  },

  populateBoard(categories, clues) {

    for (let i = 0; i < 4; i++) {
      // let bob = `.grid-container .grid-item:nth-child(${i})`
      let kim = `.grid-item:nth-child(${i + 1})`;
      $(kim).text(categories[i].name);
    }
    
    let sortedClues = clues.sort((a,b) => {
      return a.pointValue - b.pointValue;
    });
    console.log("SortedClues", sortedClues)

    for (let i = 0; i < 16; i++) {
      // let bob = `.grid-container .grid-item:nth-child(${i})`
      let kimbo = `.grid-item:nth-child(${i + 5})`;
      $(kimbo).text(sortedClues[i].pointValue);
    }
  }
 
};

export default domUpdates;

// for (let i = 0; i < 4; i++) {
//     let bob = `.grid-container .grid-item:nth-child(${i})`
//   $(bob).text(categories[i - 1].name);
  
// }