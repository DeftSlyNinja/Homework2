// Fruit array that will hold the user entries
let fruitData = [];

document.addEventListener("DOMContentLoaded", function (event) 
{
    //Loop that collects 3 fruit entries and assigns it to the array
    for (let i = 0; i < 3; i++) {
        fruitData[i] = prompt("Please enter fruit #" + (i+1))
        console.log("Fruit " + (i+1) + " = " + fruitData[i])
    }

    //Function that builds the list in HTML
    function generateList() {
        let ul = document.getElementById("fruitUL")
        for (let i = 0; i < fruitData.length; i++) {
            let li = document.createElement("li");
            ul.appendChild(li);
            li.innerHTML = fruitData[i];
            //Following line displays the hidden button
            swapBtn.style.display = "block";
        }
    }
    //Added array.map().
    const words = [fruitData[0],fruitData[1],fruitData[2]];
    const swappedfruitData= words.map(newArray);
    function newArray(words2){
        return words2;
    }
    //Event listener for the button that performs the section swap
    document.getElementById("swapBtn").addEventListener("click", swapSection);
    //Sets 1st section to hidden and displays the 2nd section
    function swapSection() {
        part1.style.display = "none"
        let ul = document.getElementById("swappedfruitUL")
        
        for (let i = 0; i < swappedfruitData.length; i++) {
            swappedfruitData[i]= swappedfruitData[i].charAt(swappedfruitData[i].length-1)+
            swappedfruitData[i].substring(1,swappedfruitData[i].length-1)+
            swappedfruitData[i].charAt(0);
            let li = document.createElement("li");
            ul.appendChild(li);
            li.innerHTML = swappedfruitData[i];
        }
        part2.style.display = "block"
    }

    generateList();
});
