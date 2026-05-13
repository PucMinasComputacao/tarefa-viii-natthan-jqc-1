// ======================================================
// B.1. DEFINIÇÃO DOS DADOS (JSON)
// ======================================================

const catalogo = [
    {
        id: 1,
        titulo: "Interestelar",
        tipo: "filme",
        ano: 2014,
        generos: ["ficção científica", "drama"],
        nota: 9.5,
        assistido: true
    },
    {
        id: 2,
        titulo: "Breaking Bad",
        tipo: "serie",
        ano: 2008,
        generos: ["drama", "crime"],
        nota: 9.7,
        assistido: true
    },
    {
        id: 3,
        titulo: "Avatar",
        tipo: "filme",
        ano: 2009,
        generos: ["ação"],
        nota: 7.8,
        assistido: false
    },
    {
        id: 4,
        titulo: "Dark",
        tipo: "serie",
        ano: 2017,
        generos: ["ficção científica", "mistério"],
        nota: 8.9,
        assistido: true
    },
    {
        id: 5,
        titulo: "O Senhor dos Anéis",
        tipo: "filme",
        ano: 2001,
        generos: ["aventura", "fantasia"],
        nota: 9.2,
        assistido: false
    },
    {
        id: 6,
        titulo: "Friends",
        tipo: "serie",
        ano: 1994,
        generos: ["comédia"],
        nota: 8.7,
        assistido: true
    }
];


// ======================================================
// B.2. ACESSO E LEITURA DOS DADOS
// ======================================================

console.log("CATÁLOGO COMPLETO:");
console.log(catalogo);

// Título do primeiro item
console.log("Título do primeiro item:");
console.log(catalogo[0].titulo);

// Ano do último item
console.log("Ano do último item:");
console.log(catalogo[catalogo.length - 1].ano);

// Segundo gênero do terceiro item
console.log("Segundo gênero do terceiro item:");

if (catalogo[2].generos.length > 1) {
    console.log(catalogo[2].generos[1]);
} else {
    console.log("O terceiro item possui apenas 1 gênero.");
}


// ======================================================
// B.3.A. LISTAGEM COM forEach
// ======================================================

console.log("LISTAGEM DE TÍTULOS:");

catalogo.forEach(item => {
    console.log(`- [${item.tipo}] ${item.titulo} (${item.ano})`);
});


// ======================================================
// B.3.B. TRANSFORMAÇÃO COM map
// ======================================================

const titulosEmCaixaAlta = catalogo.map(item => item.titulo.toUpperCase());

console.log("TÍTULOS EM CAIXA ALTA:");
console.log(titulosEmCaixaAlta);


// ======================================================
// B.3.C. SELEÇÃO COM filter
// ======================================================

const naoAssistidos = catalogo.filter(item => item.assistido === false);

console.log("QUANTIDADE DE NÃO ASSISTIDOS:");
console.log(naoAssistidos.length);


// ======================================================
// B.3.D. BUSCA COM find
// ======================================================

const itemNotaAlta = catalogo.find(item => item.nota >= 9);

console.log("PRIMEIRO ITEM COM NOTA >= 9:");

if (itemNotaAlta) {
    console.log(`${itemNotaAlta.titulo} - Nota: ${itemNotaAlta.nota}`);
} else {
    console.log("Nenhum item com nota maior ou igual a 9 encontrado.");
}


// ======================================================
// B.3.E. AGREGAÇÃO COM reduce
// ======================================================

// Média geral
const somaNotas = catalogo.reduce((acumulador, item) => {
    return acumulador + item.nota;
}, 0);

const mediaGeral = somaNotas / catalogo.length;

// Média assistidos
const assistidos = catalogo.filter(item => item.assistido);

const somaAssistidos = assistidos.reduce((acumulador, item) => {
    return acumulador + item.nota;
}, 0);

const mediaAssistidos = somaAssistidos / assistidos.length;

console.log("MÉDIAS:");
console.log(`Média geral: ${mediaGeral.toFixed(2)}`);
console.log(`Média assistidos: ${mediaAssistidos.toFixed(2)}`);


// ======================================================
// B.3.F. CHECAGENS COM some e every
// ======================================================

// Existe item antes de 2000?
const existeAntes2000 = catalogo.some(item => item.ano < 2000);

// Todos têm pelo menos 1 gênero?
const todosTemGenero = catalogo.every(item => item.generos.length > 0);

console.log("CHECAGENS:");
console.log(`Existe item antes de 2000? ${existeAntes2000}`);
console.log(`Todos possuem ao menos 1 gênero? ${todosTemGenero}`);


// ======================================================
// B.4. SAÍDA NA TELA (DOM)
// ======================================================

const output = document.getElementById("output");

// Quantidade de filmes e séries
const quantidadeFilmes = catalogo.filter(item => item.tipo === "filme").length;
const quantidadeSeries = catalogo.filter(item => item.tipo === "serie").length;

// Ranking top 3
const ranking = [...catalogo]
    .sort((a, b) => b.nota - a.nota)
    .slice(0, 3);

output.innerHTML = `
    <h2>Resumo do Catálogo</h2>

    <p><strong>Total de itens:</strong> ${catalogo.length}</p>

    <p><strong>Quantidade de filmes:</strong> ${quantidadeFilmes}</p>

    <p><strong>Quantidade de séries:</strong> ${quantidadeSeries}</p>

    <p><strong>Quantidade de não assistidos:</strong> ${naoAssistidos.length}</p>

    <p><strong>Média geral das notas:</strong> ${mediaGeral.toFixed(2)}</p>

    <h3>Top 3 Maiores Notas</h3>

    <ol>
        ${ranking.map(item => `
            <li>${item.titulo} - Nota ${item.nota}</li>
        `).join("")}
    </ol>
`;