class ValidaForm {
    constructor(){
        this.formulario = document.querySelector('.formulario')
        this.eventos()
    }
    eventos(){
        this.formulario.addEventListener('submit', e => {
            this.handleSubmit(e)
        })
    }

    handleSubmit(e){
        e.preventDefault()
        let camposValidos = this.checaInput()
    }

    checaInput(){
        let valid = true

        for(let campo of this.formulario.querySelectorAll('.validar')){
            if(!campo.value){
                this.criaErro(campo, 'Campo nao pode ser branco')
                valid = false
            }
        }
    }

    criaErro(campo, msg){
        let div = document.createElement('div')
        div.innerHTML = msg
        div.classList.add('error')
        campo.insertAdjacentElement('afterend', div)
    }


}

let valida = new ValidaForm()