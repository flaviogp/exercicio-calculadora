function Calculadora(){
    this.display = document.querySelector('.display');
    this.isSolved = false;

    this.start = () => {
        events();
        pressEnter();
    };

    const pressEnter = () => {
        this.display.addEventListener('keypress', e => {
            if(e.keycode === 13) solveAccount();
        });
    };

    const showDisplay = (el) => {
        if(this.isSolved === true && !el.classList.contains('operador')){
            clearDisplay();
        }
        this.display.value += el.innerText;
        this.display.focus();
        this.isSolved = false;
    };

    const deleteNumber = () => {
        this.display.value = this.display.value.slice(0, -1);
    };

    const clearDisplay = () => {
        this.display.value = '';
    };

    const solveAccount = () => {
        const account = this.display.value;

        try{
            this.display.value = eval(account);
        }catch(e){
            
            this.display.value = 'Conta invalida';
            setTimeout( () =>{
                clearDisplay();
            },1000)
            return;
        }

        this.isSolved = true;
    };

   const events = () => {
        document.addEventListener('click', (e) =>{
           const el = e.target;

            if(el.classList.contains('btn-number')){
                showDisplay(el);
            }
            if(el.classList.contains('btn-del')){
                deleteNumber();
            }
            if(el.classList.contains('btn-clear')){
                clearDisplay();
            }
            if(el.classList.contains('btn-eq')){
                solveAccount();
            }

        });
    };

}

const calculadora = new Calculadora();

calculadora.start();