// adquirindo elementos
const html = document.querySelector('html');
const btnModo = document.getElementById('btn-modo');

// define o modo escuro como padrão, caso não tenha nenhum modo definido
if (!localStorage.getItem('modo')) {
    localStorage.setItem('modo', 'escuro')
}

// adicionar o ouvidor de eventos ao bootão de troca tema
btnModo.addEventListener('click', () => {
    mudarTema();
});

// função que muda o tema
const mudarTema = () => {
    if (localStorage.getItem('modo') == 'escuro') {
        localStorage.setItem('modo', 'claro');
    } else {
        localStorage.setItem('modo', 'escuro');
    }

    // seta o tema modificado
    setTema();
};

// função para setar o tema
const setTema = () => {
    if (localStorage.getItem('modo') == 'claro') {
        html.classList.add('claro');
    } else {
        html.classList.remove('claro');
    }
};

// chama a função assim que a página é carregada
setTema();