import {Serie}   from "./series.js";
import { daseries } from "./data.js";
let seriesTableBody : HTMLElement = document.getElementById("series")!;
let promedioTemporadas : HTMLElement = document.getElementById("promedioTemporadas")!;

tablaSeries(daseries);

promedioTemporadas.innerHTML =calcularPromTemp(daseries).toString();

function tablaSeries(series : Serie[]) : void {
    console.log("Imprimiendo series");
    series.forEach((serie) => {
        console.log(serie);
        let trElement: HTMLElement = document.createElement("tr");
        trElement.innerHTML =  `<td>${serie.id}</td>
                                <td>${serie.nombre}</td>
                                <td>${serie.channel}</td>
                                <td>${serie.seasons}</td>`;
        seriesTableBody.appendChild(trElement);
    })
}

function calcularPromTemp(series: Serie[]) : number {
    console.log("Calculando promedio de temporadas")
    let suma: number = 0;
    series.forEach((serie) => {
        suma += serie.seasons;
    });
    let promedio : number = suma / (series.length);
    return promedio;
}

