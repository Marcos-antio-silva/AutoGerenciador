var x = document.getElementById('tudo')

function handleClick() {
    const nova = document.createElement('div')
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
}