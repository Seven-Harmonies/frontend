const readline = require('readline');

class Eveniment {
    constructor(nume, dataIncepere, dataFinal, asociatie, locatie, categorie) {
        this.nume = nume;
        this.dataIncepere = this.formatDate(dataIncepere);
        this.dataFinal = this.formatDate(dataFinal);
        this.asociatie = asociatie;
        this.locatie = locatie;
        this.categorie = categorie;
    }

    formatDate(dateString) {
        const [day, month, year] = dateString.split('-');
        return new Date(`${year}-${month}-${day}`);
    }

    contineData(dataCautata) {
        const anCautat = dataCautata.getFullYear();
        const lunaCautata = dataCautata.getMonth();
        const ziCautata = dataCautata.getDate();
    
        const anIncepere = this.dataIncepere.getFullYear();
        const lunaIncepere = this.dataIncepere.getMonth();
        const ziIncepere = this.dataIncepere.getDate();
    
        const anFinal = this.dataFinal.getFullYear();
        const lunaFinal = this.dataFinal.getMonth();
        const ziFinal = this.dataFinal.getDate();
    
        const inceputInclusiv = anCautat >= anIncepere && lunaCautata >= lunaIncepere && ziCautata >= ziIncepere;
        const sfarsitInclusiv = anCautat <= anFinal && lunaCautata <= lunaFinal && ziCautata <= ziFinal;
    
        return inceputInclusiv && sfarsitInclusiv;
    }
}

class CautaFiltreazaEvenimente {
    constructor() {
        this.evenimente = [
            new Eveniment("Electric", "01-01-2023", "10-01-2023", "Asociatie1", "Locatie1", "Categorie1"),
            new Eveniment("Untold Elec", "12-01-2023", "20-01-2023", "Asociatie2", "Locatie2", "Categorie2"),
        ];
    }

    cauta(nume) {
        const results = [];

        for (const eveniment of this.evenimente) {
            if (eveniment.nume.toLowerCase().includes(nume.toLowerCase())) {
                results.push(eveniment);
            }
        }

        return results;
    }

    filtreaza(dataCautata, asociatie, locatie, categorie) {
        const results = [];

        for (const eveniment of this.evenimente) {
            let match = true;

            if (dataCautata !== null) {
                try {
                    const [day, month, year] = dataCautata.split('-');
                    const dataCautataDate = new Date(`${year}-${month}-${day}`);
                    dataCautataDate.setHours(0, 0, 0, 0);

                    if (!eveniment.contineData(dataCautataDate)) {
                        match = false;
                    }
                } catch (e) {
                    console.log("Eroare la parsarea datei: " + e.message);
                    match = false;
                }
            }

            if (asociatie !== null && !eveniment.asociatie.toLowerCase().includes(asociatie.toLowerCase())) {
                match = false;
            }

            if (locatie !== null && !eveniment.locatie.toLowerCase().includes(locatie.toLowerCase())) {
                match = false;
            }

            if (categorie !== null && !eveniment.categorie.toLowerCase().includes(categorie.toLowerCase())) {
                match = false;
            }

            if (match) {
                results.push(eveniment);
            }
        }

        return results;
    }
}

function afiseazaRezultate(titlu, rezultate) {
    console.log(titlu);
    if (rezultate.length === 0) {
        console.log("Nu s-au găsit rezultate pentru criteriile specificate.");
    } else {
        for (const eveniment of rezultate) {
            const formattedDataIncepere = eveniment.dataIncepere.toLocaleDateString('en-GB');
            const formattedDataFinal = eveniment.dataFinal.toLocaleDateString('en-GB');

            console.log("Nume: " + eveniment.nume +
                ", Data Incepere: " + formattedDataIncepere +
                ", Data Final: " + formattedDataFinal +
                ", Asociatie: " + eveniment.asociatie +
                ", Locatie: " + eveniment.locatie +
                ", Categorie: " + eveniment.categorie);
        }
    }
}

const managerEvenimente = new CautaFiltreazaEvenimente();
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

(async () => {
    try {
        const criteriuCautare = await new Promise(resolve => rl.question("Introduceți criteriul de căutare (nume): ", resolve));
        const rezultateCautare = managerEvenimente.cauta(criteriuCautare);

        afiseazaRezultate("Rezultatele căutării:", rezultateCautare);

        const criteriiFiltrare = await new Promise(resolve => rl.question("Introduceți criteriile de filtrare (data, asociatie, locatie, categorie): ", resolve));
        const criteriiValide = new Set(["data", "asociatie", "locatie", "categorie"]);

        if (!criteriiValide.has((criteriiFiltrare || '').toLowerCase())) {
            throw new Error("Criteriu de filtrare invalid.");
        }

        const valoare = await new Promise(resolve => rl.question("Introduceți valoarea pentru filtrare: ", resolve));

        const rezultateFiltrare = managerEvenimente.filtreaza(
            (criteriiFiltrare || '').toLowerCase() === "data" ? valoare : null,
            (criteriiFiltrare || '').toLowerCase() === "asociatie" ? valoare : null,
            (criteriiFiltrare || '').toLowerCase() === "locatie" ? valoare : null,
            (criteriiFiltrare || '').toLowerCase() === "categorie" ? valoare : null
        );

        afiseazaRezultate("Rezultatele filtrării:", rezultateFiltrare);
    } catch (e) {
        console.log(e.message);
    } finally {
        // Inchide interfața readline
        rl.close();
    }
})();