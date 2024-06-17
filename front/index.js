var x = document.getElementById('tudo')
let n = 0;

        function handleClick() {
            const nova = document.createElement('div');
            nova.id = `div-${n}`;
            n++;
            nova.innerHTML = `
            <section id="tabela">
                <!-- barra para inserir -->
                <form class="gf">
                    <h3>Lista de Deveres</h3> <p class="alerta"></p>
                    <div class="formulario">
                        <input type="text" class="glosario" placeholder="lembrete">
                        <button type="submit" class="btn">Adicionar</button>
                    </div>
                </form>
                <!-- lista -->
                <div class="lista-container">
                    <div class="lista"></div>
                </div>
            </section>
            `;
            x.appendChild(nova);

            const form = nova.querySelector('.gf');
            form.addEventListener('submit', function(e) {
                addItem(e, nova);
            });
        }

        function addItem(e, nova) {
            e.preventDefault();
            const barra = nova.querySelector('.glosario');
            const lista = nova.querySelector('.lista');
            const value = barra.value;
            if (!value) return; // Prevenir adicionar itens vazios

            const id = new Date().getTime().toString();
            const elemento = document.createElement('article');
            elemento.classList.add('itens');
            elemento.setAttribute('data-id', id);
            elemento.innerHTML = `
                <p class="titulo">${value}</p>
                <div class="btn-conteiner">
                    <button type="button" class="excluirBtn" onclick="excluir('${id}', this)">
                        <i class="fas fa-lixo"></i> Excluir
                    </button>
                </div>
            `;
            lista.appendChild(elemento);
            barra.value = ''; // Limpar o campo de entrada
        }

        function excluir(id, btn) {
            const item = btn.closest(`[data-id="${id}"]`);
            item.remove();
        }