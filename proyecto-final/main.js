//Contador de votos

let candidato1 ='pedro';
let candidato2 ='juan';
let candidato3 ='luis';



function elegirCandidato(candidato1,candidato2,candidato3) {
    let votos1= 0;
    let votos2= 0;
    let votos3= 0;
    let personas=parseInt(prompt("Cuantas personas van a votar"));
    for (let i = 0; i <= personas; i++) {
        let opcion=prompt("Ingrese el nombre del candidato que quiere votar(Pedro, Juan o Luis)").toLowerCase();
        switch(opcion){
            case 'pedro': votos1++;
            break;
            case 'juan': votos2++;
            break;
            case 'luis': votos3++;
            break;
            default: alert("Opcion invalida.");
        }

    }
    alert("El candidato Pedro tiene "+votos1,"votos");
    alert("El candidato Juan tiene "+votos2,"votos");
    alert("El candidato Luis tiene "+votos3,"votos");

}
elegirCandidato(candidato1,candidato2,candidato3)



