from browser import document, alert, html


lista_profissoes = []   # formato: ["nome", 0.12]


def adicionar_profissao(ev):
    nome = document["cadastro"].value.strip() # .strip tira espaços em branco no início e fim
    taxa_digitada = document["taxaCresc"].value.strip()

    # valida nome
    if nome == "":
        alert("Digite o nome da profissão.")
        return

    # valida taxa
    if taxa_digitada == "":
        alert("Digite uma taxa válida.")
        return

    valido = True
    pontos = 0
    for c in taxa_digitada:
        if c == ".":
            pontos += 1
            if pontos > 1:
                valido = False
        elif c < "0" or c > "9":
            valido = False

    if not valido:
        alert("Digite apenas números e ponto.")
        return

    taxa_decimal = float(taxa_digitada) / 100.0  # transforma % em decimal

    lista_profissoes.append([nome, taxa_decimal])

    # limpa inputs
    document["cadastro"].value = ""
    document["taxaCresc"].value = ""

    # atualiza tabela principal
    atualizar_lista()

def atualizar_lista():
    area = document["profissaoList"]
    area.html = ""

    if len(lista_profissoes) == 0:
        area.html = "<p>Nenhuma profissão cadastrada.</p>"
        return

    tabela = """
    <table class='tabela-profissoes'>
        <thead>
            <tr>
                <th>Profissão</th>
                <th>Taxa (%)</th>
            </tr>
        </thead>
        <tbody>
    """

    for nome, taxa_dec in lista_profissoes:
        taxa_pct = taxa_dec * 100
        tabela += f"""
            <tr>
                <td>{nome}</td>
                <td>{taxa_pct:.2f}%</td>
            </tr>
        """

    tabela += """
        </tbody>
    </table>
    """

    area.html = tabela

def filtrar(ev):
    valor = document["filtroTaxa"].value.strip()
    resultado = document["resultadoFiltro"]
    resultado.html = ""

    if valor == "":
        alert("Digite uma taxa mínima.")
        return

    # valida número
    valido = True
    pontos = 0
    for c in valor:
        if c == ".":
            pontos += 1
            if pontos > 1:
                valido = False
        elif c < "0" or c > "9":
            valido = False

    if not valido:
        alert("Digite um valor numérico válido.")
        return

    taxa_min = float(valor) / 100.0

    filtradas = []
    for nome, taxa in lista_profissoes:
        if taxa >= taxa_min:
            filtradas.append([nome, taxa])

    mostrar_resultado(filtradas)


def calcular_crescimento_total(lista_filtrada):
    soma = 0.0
    for item in lista_filtrada:
        soma += item[1]
    return soma


def mostrar_resultado(lista):
    div = document["resultadoFiltro"]
    div.html = ""

    if len(lista) == 0:
        div.html = "<p>Nenhuma profissão atende ao filtro.</p>"
        return

    tabela = """
    <table class='tabela-profissoes'>
        <thead>
            <tr>
                <th>Profissão</th>
                <th>Taxa (%)</th>
            </tr>
        </thead>
        <tbody>
    """

    for nome, taxa in lista:
        taxa_pct = taxa * 100
        tabela += f"""
            <tr>
                <td>{nome}</td>
                <td>{taxa_pct:.2f}%</td>
            </tr>
        """

    tabela += """
        </tbody>
    </table>
    """

    div.html = tabela

    # soma total
    total = calcular_crescimento_total(lista)
    total_pct = total * 100

    div.html += f"""
        <p style="margin-top: 10px; font-weight: bold;">
            Soma total das taxas filtradas: {total_pct:.2f}%
        </p>
    """

document["btnAdicionar"].bind("click", adicionar_profissao)
document["btnFiltrar"].bind("click", filtrar)
