let btnRef = document.getElementById('btn');

btnRef.addEventListener('click', (event) => {
    let inputRef = document.getElementById('input').value;
    let result = document.getElementById('result');
    event.preventDefault()

    if(inputRef < 0) {
        alert("Please insert positive number");
    }

    else if(inputRef === 0) {
        result.textContent = "0";
    }

    else if(inputRef === "") {
        alert("Please insert number")
    }

    else{
        let fact = 1;
        for(i=1; i<=inputRef; i++) {
            fact *= i;
        }
        result.textContent = fact;
    }
})