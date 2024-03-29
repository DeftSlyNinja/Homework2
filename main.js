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
    //fruitData[] swapped and remapped to swappedFruitData[].

    let swappedFruitData = fruitData.map(function(word) {
        word = word.charAt(word.length - 1) + word.substring(1, word.length - 1) + word.charAt(0);
        return word;
    })

    //Event listener for the button that performs the section swap

    document.getElementById("swapBtn").addEventListener("click", swapSection);

    //Sets 1st section to hidden and displays the 2nd section

    function swapSection() {
        let ul = document.getElementById("swappedfruitUL");
        for (let i = 0; i < swappedFruitData.length; i++) {
            let li = document.createElement("li");
            ul.appendChild(li);
            li.innerHTML = swappedFruitData[i];
        }
        part1.style.display = "none"
        part2.style.display = "block"
    }

    generateList();
});