import { daseries } from "./data.js";
var seriesTableBody = document.getElementById("series");
var promedioTemporadas = document.getElementById("promedioTemporadas");
tablaSeries(daseries);
promedioTemporadas.innerHTML = calcularPromTemp(daseries).toString();
function tablaSeries(series) {
    console.log("Imprimiendo series");
    series.forEach(function (serie) {
        console.log(serie);
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(serie.id, "</td>\n                                <td>").concat(serie.nombre, "</td>\n                                <td>").concat(serie.channel, "</td>\n                                <td>").concat(serie.seasons, "</td>");
        seriesTableBody.appendChild(trElement);
    });
}
function calcularPromTemp(series) {
    console.log("Calculando promedio de temporadas");
    var suma = 0;
    series.forEach(function (serie) {
        suma += serie.seasons;
    });
    var promedio = suma / (series.length);
    return promedio;
}
