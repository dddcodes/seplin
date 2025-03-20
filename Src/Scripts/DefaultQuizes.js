let defaultQuests = [];
function setQuest(
    question = "QUIZ", 
    answer = "ANSWER", 
    incorrectAnswer = Array, 
    cat1 = string,
    cat2 = Boolean, 
    ex = string,
    LS = false){

    let newQuestInfo = {
        question: question, 
        answer: answer,
        incorrectAnswer: incorrectAnswer, 
        cat1: cat1,
        cat2: parseInt(cat2),
        ex: ex,
        default: LS
    };

    switch (LS) {
        case true: 
            defaultQuests.push(newQuestInfo)
            break;
    
        default:
            questList.push(newQuestInfo);
            saveQuestsData();
            break;
    }

    console.log("NUEVO QUIZ CREADO");
};

/*
    setQuest(
        "PREGUNTA",
        "RESPUESTA",
        ["opcion incorrecta 1", "opcion incorrecta 2", "opcion incorrecta 3"],
        "ef", //NO CAMBIAR
        1, //NO CAMBIAR
        "EXPLICACION CORTA",
        true //NO CAMBIAR
    );
*/
LS_createItem('quests',()=>{
    setQuest(
        "¿Cuál es la principal razón por la que la actividad física es importante para la salud?",
        "Previene enfermedades y mejora la calidad de vida.",
        ["Solo ayuda a perder peso.", "Reduce el cansancio pero no afecta la salud.", "Hace que la gente coma menos."],
        "ef", //NO CAMBIAR
        1, //NO CAMBIAR
        "La AF previene enfermedades cardiovasculares, metabólicas y mejora el bienestar general.",
        true //NO CAMBIAR
    );
    
    setQuest(
        "¿Qué organización ha demostrado que la inactividad física aumenta la morbilidad?",
        "OMS (Organización Mundial de la Salud).",
        ["ONU.", "NASA.", "UNESCO."],
        "ef", //NO CAMBIAR
        1, //NO CAMBIAR
        "La OMS ha realizado estudios y campañas para promover la AF a nivel mundial.",
        true //NO CAMBIAR
    );
    
    setQuest(
        "¿Cuál es una dificultad común al medir la actividad física?",
        "Es difícil medir con precisión la intensidad y frecuencia.",
        ["No existen métodos para medir la actividad física.", "Todas las personas hacen la misma cantidad de ejercicio.", "Solo se puede medir en niños y jóvenes."],
        "ef", //NO CAMBIAR
        1, //NO CAMBIAR
        "Métodos como encuestas y cuestionarios tienen limitaciones en la precisión de los datos.",
        true //NO CAMBIAR
    );
    
    setQuest(
        "¿Cuál es una causa principal de la obesidad?",
        "Falta de actividad física y alimentación inadecuada.",
        ["Exceso de proteínas en la dieta.", "Dormir demasiado.", "Hacer ejercicio en exceso."],
        "ef", //NO CAMBIAR
        1, //NO CAMBIAR
        "La obesidad ocurre cuando el consumo calórico supera el gasto energético.",
        true //NO CAMBIAR
    );
    
    setQuest(
        "¿Cómo ayuda la actividad física a prevenir la diabetes?",
        "Mejora la sensibilidad a la insulina y regula la glucosa.",
        ["Hace que las personas dejen de comer dulces.", "Reduce la presión arterial pero no afecta la glucosa.", "Solo ayuda si se combina con una dieta extrema."],
        "ef", //NO CAMBIAR
        1, //NO CAMBIAR
        "La AF permite que la glucosa se utilice de manera eficiente, reduciendo el riesgo de diabetes tipo II.",
        true //NO CAMBIAR
    );
    
    setQuest(
        "¿Cuál es un beneficio de la actividad física en el sistema cardiovascular?",
        "Reduce la presión arterial y mejora la circulación.",
        ["Hace que el corazón trabaje menos.", "Solo afecta a personas mayores.", "Disminuye la cantidad de sangre en el cuerpo."],
        "ef", //NO CAMBIAR
        1, //NO CAMBIAR
        "El ejercicio fortalece el corazón y reduce el riesgo de enfermedades cardiovasculares.",
        true //NO CAMBIAR
    );
    
    setQuest(
        "¿Qué tipo de cáncer puede reducirse con actividad física?",
        "Cáncer de colon y mama.",
        ["Cáncer de piel y de ojos.", "Cáncer de garganta y nariz.", "Cáncer de huesos y médula espinal."],
        "ef", //NO CAMBIAR
        1, //NO CAMBIAR
        "La AF regula hormonas y mejora funciones inmunológicas, reduciendo ciertos tipos de cáncer.",
        true //NO CAMBIAR
    );
    
    setQuest(
        "¿Cómo influye la actividad física en el síndrome metabólico?",
        "Reduce riesgos cardiovasculares y mejora el metabolismo.",
        ["Solo afecta a personas mayores de 50 años.", "No tiene impacto en el metabolismo.", "Hace que la gente deje de sentir hambre."],
        "ef", //NO CAMBIAR
        1, //NO CAMBIAR
        "La AF ayuda a controlar peso, colesterol, glucosa y presión arterial, reduciendo el riesgo de este síndrome.",
        true //NO CAMBIAR
    );
    
    setQuest(
        "¿Cuánto ejercicio se recomienda para niños y adolescentes?",
        "60 minutos diarios.",
        ["10 minutos diarios.", "3 horas diarias.", "Solo cuando jueguen deportes."],
        "ef", //NO CAMBIAR
        1, //NO CAMBIAR
        "La OMS recomienda 60 min diarios de actividad moderada o intensa en este grupo.",
        true //NO CAMBIAR
    );
    
    setQuest(
        "¿Cuántos minutos de actividad física moderada necesitan los adultos semanalmente?",
        "150 minutos.",
        ["300 minutos.", "50 minutos.", "No hay recomendación."],
        "ef", //NO CAMBIAR
        1, //NO CAMBIAR
        "La OMS sugiere 150 min de AF moderada o 75 min intensa cada semana para la salud.",
        true //NO CAMBIAR
    );
    
    setQuest(
        "¿Por qué es importante que los adultos mayores hagan ejercicio?",
        "Mantiene movilidad, reduce caídas y previene deterioro cognitivo.",
        ["Solo ayuda a bajar de peso.", "No tiene impacto en la salud después de los 65 años.", "Deben evitar la AF para no lesionarse."],
        "ef", //NO CAMBIAR
        1, //NO CAMBIAR
        "El ejercicio mejora la movilidad, el equilibrio y la salud mental en adultos mayores.",
        true //NO CAMBIAR
    );
    
    setQuest(
        "¿Qué país tiene el mayor problema de sobrepeso en el mundo?",
        "México.",
        ["Argentina.", "Venezuela.", "Brasil."],
        "ef", //NO CAMBIAR
        1, //NO CAMBIAR
        "Según la OCDE, México es el país con más sobrepeso y el segundo en obesidad.",
        true //NO CAMBIAR
    );
    
    setQuest(
        "¿Qué porcentaje de la población argentina tiene baja actividad física?",
        "46%.",
        ["20%.", "70%.", "10%."],
        "ef", //NO CAMBIAR
        1, //NO CAMBIAR
        "Encuestas nacionales muestran que casi la mitad de la población en Argentina es inactiva.",
        true //NO CAMBIAR
    );
    
    setQuest(
        "¿Qué problema de salud se ha identificado en Venezuela debido al sedentarismo?",
        "Alto índice de obesidad y enfermedades cardiovasculares.",
        ["Pérdida de masa muscular extrema.", "Falta de acceso a tecnología.", "Problemas respiratorios."],
        "ef", //NO CAMBIAR
        1, //NO CAMBIAR
        "El sedentarismo en Venezuela está relacionado con enfermedades metabólicas y cardiovasculares.",
        true //NO CAMBIAR
    );
    
});
questList = localStorage.getItem("quests");
questList = JSON.parse(questList);
for (let i = 0; i < defaultQuests.length; i++) {
    const element = defaultQuests[i];
    questList.push(element);
}
saveQuestsData();
console.log(questList);