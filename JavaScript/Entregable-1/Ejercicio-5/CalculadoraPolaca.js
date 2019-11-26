"use strict";

class CalculatorPolish {
    constructor() {
        this.stack = [];
        this.isOperable = false;
    }

    display(digit) {
        let display = document.getElementById("pantalla");
        if (display.value === '0') {
            display.value = digit;
        } else {
            display.value += digit;
        }
    }

    operationAdd(operation) {
        if (this.isOperable === true && this.stack.length === 2) {
            const left = this.stack.pop();
            const right = this.stack.pop();
            const result = eval(right + operation + left);
            this.stack.push(result);
            document.getElementById("resultado").value = result;
            this.isOperable = false;
        } else {
            alert('A DONDE VASS');
        }
    }

    operationAddNumber(number) {
        if (Number.isNaN(number) || this.isOperable) {
            alert('no es un digito jose LUISSSS');
        } else {
            this.stack.push(number);
            if (this.stack.length === 2) {
                this.isOperable = true;
            }
        }
    }

    enter() {
        const value = document.getElementById("pantalla").value;
        this.operationAddNumber(value);
        document.getElementById("pantalla").value = 0;
    }

    trigonometry(operator) {
        let result = 0;
        if (this.stack.length >= 1) {
            switch (operator) {
                case 'sin':
                    result = Math.sin(this.stack.pop());
                    break;
                case 'cos':
                    result = Math.cos(this.stack.pop());
                    break;
                case 'tan':
                    result = Math.tan(this.stack.pop());
                    break;
                default:
                    result = 0;
            }
            document.getElementById("resultado").value = result;
            this.stack.push(result);
            document.getElementById("pantalla").value = 0;
        } else {
            alert('Operación no definida')
        }
    }

    clean() {
        this.stack = [];
        document.getElementById("pantalla").value = 0;
        document.getElementById("resultado").value = 0;
    }
}

let calculator = new CalculatorPolish();