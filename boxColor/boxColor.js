var colors = [
               '#C94C24', //orange
               '#268BD2', //blue
               '#C4226F', //pink
               '#859835', // lime
               '#6D73C2', // purple
               '#37A198', // green
               '#DA3637', //red
               '#F0AD4E' //yellow
             ];

function makeBoxes(n){
  let currColor = 0;
  let myElement;
  let myNode = document.querySelector(".boxes");

  for (let i=0;i<n;i++){
    myElement = document.createElement('div');
    myElement.className ='box';
    myElement.style = 'background-color:' + colors[currColor];
    myNode.appendChild(myElement);

    if (currColor === colors.length-1){
      currColor=0;
    } else {
      currColor++;
    }
  }

}

makeBoxes(10);