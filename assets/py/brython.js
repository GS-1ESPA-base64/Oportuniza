from browser import document, alert


lista_profissoes = []  # cada item será [nome, taxa_decimal]



def adicionar_profissao(ev):
    nome = document["cadastro"].value
    taxa_digitada = document["taxaCresc"].value.strip

    if nome == "":
        alert("Digite o nome da profissão.")
        return
    
    if taxa_digitada == "":
        alert("Digite uma taxa válida.")
        return

    # valida taxa (somente números e ponto)
    entrada_valida = True
    pontos = 0

    for c in taxa_digitada:
        if c == ".":
            pontos += 1
            if pontos > 1:
                entrada_valida = False
        elif c < "0" or c > "9":
            entrada_valida = False

    if not entrada_valida:
        alert("Valor inválido. Digite apenas números e ponto.")
        return
    
    # conversão
    taxa_percentual = float(taxa_digitada)
    taxa_decimal = taxa_percentual / 100.0

    lista_profissoes.append([nome, taxa_decimal])
    alert("Profissão adicionada!")
    
    # limpar campos
    document["cadastro"].value = ""
    document["taxaCresc"].value = ""

    atualizar_lista()



def atualizar_lista():
    ul = document["profissaoList"]
    ul.clear()

    if len(lista_profissoes) == 0:
        ul <= "Nenhuma profissão cadastrada"
        return

    for nome, taxa_decimal in lista_profissoes:
        taxa_pct = taxa_decimal * 100
        ul.html += f"<li>{nome} — {taxa_pct:.2f}%<br></li>"



def filtrar(taxa_min):
    filtradas = []
    for item in lista_profissoes:
        if item[1] >= taxa_min:
            filtradas.append(item)
    return filtradas



def somar_taxas(lista_filtrada):
    total = 0
    for item in lista_filtrada:
        total += item[1]
    return total



document["profissaoList"]  # só pra garantir que o elemento existe

document["profissaoList"]  # idem

document["profissaoList"]  # sobrevivência do DOM

# botão real do HTML
document["cadastro"].blur()
document["taxaCresc"].blur()


document["cadastro"].blur()
document["taxaCresc"].blur()

# Função que será chamada no botão via onclick
def adicionarProfissao():
    adicionar_profissao(None)


document["btnAddProf"].bind("click", adicionar_profissao)
