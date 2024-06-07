var x = document.getElementById('tudo')
var n = 0;

function handleClick() {
    const nova = document.createElement('div');
    // nova.id = `div-${n}`;
    // n ++;
    nova.innerHTML = 
    `
    <section id="tabela">
    <!-- barra para incerir -->
    <form class="gf">
        <h3>lista de deveres</h3> <p class="alerta"></p>
        <div class="formulario">
            <input type="text" id="glosario" placeholder="lembrete">
            <button type="submit" class="btn">
            adicionar
            </button>
        </div>
    </form>
    <!-- lista -->
    <div class="lista-container">
        <div class="lista">
            <button type="button" class="reset-btn"></button>
        </div>
    </div>
    </section>
    `
    x.appendChild(nova)

    var form = document.querySelector ('.gf')
    form.addEventListener('submit', function(e) {
        addItem(e, nova);
    });  
}

function addItem(e, nova) {
        e.preventDefault ();
        var barra = nova.document.querySelector('.glosario')
        var lista = nova.document.querySelector('.lista')
        const value = barra.value;

        const id = new Date().getTime().toString();
        const elemento = document.createElement('article');
            //adicioando a classe 
        elemento.classList.add('itens');
        elemento.setAttributeNode('data-id', id);
        elemento.innerHTML = `
        <p class="titulo">${value}</p>
            <div class="btn-conteiner">
                <button type="button" class="excluirBtn" onclick="excluir('${id}')" >
                    <i class="fas fa-lixo"></i>
            </button>
        </div>`;
        lista.appendChild(elemento);
        barra.value = '';
    }
