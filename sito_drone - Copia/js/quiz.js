
const questions = [
    { q: "Qual è il peso massimo per droni A1?", a: "250g" },
    { q: "Chi rilascia le patenti drone in Italia?", a: "ENAC" },
    { q: "Qual è l’altezza massima consentita?", a: "120 metri" },
    { q: "Il volo A3 può avvenire sopra città?", a: "No" },
    { q: "Serve registrazione per A3?", a: "Sì" },
    { q: "I droni A3 possono pesare fino a?", a: "25kg" },
    { q: "La patente A1 richiede pratica?", a: "No" },
    { q: "Il contatto visivo è obbligatorio?", a: "Sì" },
    { q: "Quante ore dura il corso teorico?", a: "Dipende" },
    { q: "Dove si caricano i certificati?", a: "Portale ENAC" },
    { q: "La normativa è europea?", a: "Sì" },
    { q: "I droni devono avere luci?", a: "Sì, di notte" },
    { q: "Cosa significa UAV?", a: "Unmanned Aerial Vehicle" },
    { q: "A chi serve il corso A3?", a: "Professionisti" },
    { q: "Puoi volare vicino aeroporti?", a: "No" }
];

const container = document.getElementById('quiz-container');

questions.forEach((item, index) => {
    const div = document.createElement('div');
    div.innerHTML = `<p><strong>${index + 1}. ${item.q}</strong></p>
    <input type="text" id="q${index}">
    <button onclick="checkAnswer(${index}, '${item.a.toLowerCase()}')">Verifica</button>
    <p id="result${index}"></p>`;
    container.appendChild(div);
});

function checkAnswer(index, correct) {
    const userAnswer = document.getElementById('q' + index).value.toLowerCase().trim();
    const result = document.getElementById('result' + index);
    result.textContent = userAnswer === correct ? "✅ Giusto!" : "❌ Sbagliato!";
    result.style.fontWeight = "bold";
}
