
let buttonNumber: HTMLCollectionOf<HTMLButtonElement> = document.getElementsByClassName("buttonNumber") as HTMLCollectionOf<HTMLButtonElement>;
let input : HTMLInputElement = document.getElementById('output') as HTMLInputElement;
let buttonOperande :HTMLCollectionOf<HTMLButtonElement> = document.getElementsByClassName("operande") as HTMLCollectionOf<HTMLButtonElement>;
let buttonEgal: HTMLButtonElement = document.getElementById('calcul') as HTMLButtonElement;
let buttonPoint: HTMLButtonElement = document.getElementById('comma')as HTMLButtonElement;

for(let i = 0; i < buttonNumber.length; i++) {
    buttonNumber[i].addEventListener('click', function () {
        let value: string = this.innerText;
        if(value.length > 0 ) {
            const result: number = parseInt(value);
            input.innerHTML += result.toString();
        }
    });
}

for(let i = 0; i < buttonOperande.length; i++) {
    buttonOperande[i].addEventListener('click', function () {
        input.innerHTML += this.innerText;
    });
}

buttonEgal.addEventListener('click', function () {
    input.innerHTML = eval(input.innerHTML);
});

buttonPoint.addEventListener('click', function () {
    let dataPoint = buttonPoint.innerHTML;
    input.innerHTML += dataPoint;
});