campos = [0, 0, 0, 0, 0, 0, 0, 0, 0];
juiz = 0;
jogadorX = 0;
jogadorO = 0;

function campo(location) {

    //Seleção de campo
    if (juiz == 0) {
        if (campos[location] == 0) {
            campos[location] = 'X';
            juiz = 1;
            document.getElementById(location).innerHTML = "X";
            document.getElementById(location).style.cursor = "not-allowed"
            document.getElementById(location).style.backgroundColor = "#E50592"
            document.getElementById("indicadorRodada").innerHTML = "Rodade de: O";
        } else {
            alert("Campo já selecionado")
        }
    } else {
        if (campos[location] == 0) {
            campos[location] = "O";
            juiz = 0;
            document.getElementById(location).innerHTML = "O";
            document.getElementById(location).style.cursor = "not-allowed"
            document.getElementById(location).style.backgroundColor = "#FFF106"
            document.getElementById("indicadorRodada").innerHTML = "Rodade de: X";
        } else {
            alert("Campo já selecionado");
        }
    }
    avaliacao();
}

function avaliacao() {
    //Avaliação X
    if (campos[0] == "X" & campos[1] == "X" & campos[2] == "X") {
        ganhador("X");
    }
    if (campos[3] == "X" & campos[4] == "X" & campos[5] === "X") {
        ganhador("X");
    }
    if (campos[6] == "X" & campos[7] == "X" & campos[8] === "X") {
        ganhador("X");
    }
    if (campos[0] == "X" & campos[3] == "X" & campos[6] === "X") {
        ganhador("X");
    }
    if (campos[1] == "X" & campos[4] == "X" & campos[7] === "X") {
        ganhador("X");
    }
    if (campos[2] == "X" & campos[5] == "X" & campos[8] === "X") {
        ganhador("X");
    }
    if (campos[0] == "X" & campos[4] == "X" & campos[8] === "X") {
        ganhador("X");
    }
    if (campos[2] == "X" & campos[4] == "X" & campos[6] === "X") {
        ganhador("X");
    }
    //Avaliação O
    if (campos[0] == "O" & campos[1] == "O" & campos[2] == "O") {
        ganhador("O");
    }
    if (campos[3] == "O" & campos[4] == "O" & campos[5] === "O") {
        ganhador("O");
    }
    if (campos[6] == "O" & campos[7] == "O" & campos[8] === "O") {
        ganhador("O");
    }
    if (campos[0] == "O" & campos[3] == "O" & campos[6] === "O") {
        ganhador("O");
    }
    if (campos[1] == "O" & campos[4] == "O" & campos[7] === "O") {
        ganhador("O");
    }
    if (campos[2] == "O" & campos[5] == "O" & campos[8] === "O") {
        ganhador("O");
    }
    if (campos[0] == "O" & campos[4] == "O" & campos[8] === "O") {
        ganhador("O");
    }
    if (campos[2] == "O" & campos[4] == "O" & campos[6] === "O") {
        ganhador("O");
    }
    //Velha
    var contador = 0;
    campos.forEach(element => {
        if (element != "") {
            contador++;
        }
    });
    if (contador == 9) {
        alert("Velha")
        campos = [0, 0, 0, 0, 0, 0, 0, 0, 0];
        for (var i = 0; i <= 9; i++) {
            document.getElementById(i).innerHTML = ""
            document.getElementById(i).style.cursor = "pointer"
            document.getElementById(i).style.backgroundColor = "#FFF"
        }
    }
}

function ganhador(event) {
    if (event == "X") {
        jogadorX++;
        campos = [0, 0, 0, 0, 0, 0, 0, 0, 0];
        document.getElementById("PlayerXVitorias").innerHTML = jogadorX
        alert("Jogarodor X pontuou");
        for (var i = 0; i <= 9; i++) {
            document.getElementById(i).innerHTML = ""
            document.getElementById(i).style.cursor = "pointer"
            document.getElementById(i).style.backgroundColor = "#FFF"
        }
    }
    if (event == "O") {
        jogadorO++;
        campos = [0, 0, 0, 0, 0, 0, 0, 0, 0];
        document.getElementById("PlayerOVitorias").innerHTML = jogadorO
        alert("Jogador O pontuou");
        for (var i = 0; i <= 9; i++) {
            document.getElementById(i).innerHTML = ""
            document.getElementById(i).style.cursor = "pointer"
            document.getElementById(i).style.backgroundColor = "#FFF"
        }
    }
}
