const calculos = document.getElementById('calculos');
const calculo = document.getElementById('calculo');

let valor = '';
let operador = '';
let ValorOperando = null;

let botao = document.querySelectorAll('.botao');

botao.forEach(x =>{
    x.addEventListener('click', ()=>{
        let value = x.textContent;

        if(!isNaN(value) || value === '.'){
            valor += value;
            calculo.textContent = valor;
        } else if (value === 'C'){
            calculo.textContent = '';
            calculos.textContent = '';
            valor = '';
            operador = '';
            ValorOperando = null;
        } else if (value === '='){
            if(ValorOperando !== null && operador !== '' && valor !== ''){
                let secondOperand = parseFloat(valor);
                let result;
                switch (operador){
                    case '+':
                        result = ValorOperando + secondOperand;
                        break;
                    case '-':
                        result = ValorOperando - secondOperand;
                        break;
                    case '/':
                        result = ValorOperando / secondOperand;
                        break;
                    case '*':
                        result = ValorOperando * secondOperand;
                        break;
                    
                }
                calculo.textContent = result

                calculos.textContent += `${ValorOperando} ${operador} ${secondOperand} = ${result}\n`;
                
                valor = '';
                operador = '';
                ValorOperando = null;
            } else {
                if(valor !== ''){
                    ValorOperando = parseFloat(valor);

                    operador = value;
                    valor = '';
                }
            }
        } else {
            operador = value;
            ValorOperando = parseFloat(valor);
            valor = '';
        }
    })
})