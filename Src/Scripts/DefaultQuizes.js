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
    // Quiz 1
setQuest(
    "¿Qué se entiende por 'actividad física' según la Organización Mundial de la Salud (OMS)?",
    "Todos los movimientos que forman parte de la vida diaria, incluyendo trabajo, recreación, ejercicios y deportes.",
    ["Solo los ejercicios estructurados y planificados.", "Movimientos que requieren un gasto energético superior al 50% del máximo.", "Actividades que solo se realizan en gimnasios o centros deportivos."],
    "ef", //NO CAMBIAR
    1, //NO CAMBIAR
    "La actividad física incluye cualquier movimiento que realizamos en nuestra vida diaria, no solo el ejercicio estructurado.",
    true //NO CAMBIAR
);

// Quiz 2
setQuest(
    "¿Cuál es una de las principales dificultades para evaluar la actividad física?",
    "La falta de métodos estandarizados para medir y tratar estadísticamente la información.",
    ["La falta de interés de las personas en realizar actividad física.", "La imposibilidad de medir el gasto energético en reposo.", "La falta de tecnología para medir la frecuencia cardíaca."],
    "ef", //NO CAMBIAR
    1, //NO CAMBIAR
    "Evaluar la actividad física es complicado debido a la falta de métodos estandarizados y consistentes.",
    true //NO CAMBIAR
);

// Quiz 3
setQuest(
    "¿Qué enfermedades están asociadas con la inactividad física?",
    "Enfermedades cardiovasculares, diabetes y obesidad.",
    ["Enfermedades infecciosas como la gripe.", "Enfermedades respiratorias como el asma.", "Enfermedades dermatológicas como la psoriasis."],
    "ef", //NO CAMBIAR
    1, //NO CAMBIAR
    "La inactividad física está relacionada con enfermedades crónicas como problemas cardíacos, diabetes y obesidad.",
    true //NO CAMBIAR
);

// Quiz 4
setQuest(
    "¿Qué se entiende por un entorno 'obesogénico'?",
    "Un entorno que promueve el sedentarismo y el consumo excesivo de calorías.",
    ["Un entorno que fomenta la actividad física intensa.", "Un entorno con acceso limitado a alimentos.", "Un entorno que solo permite el consumo de alimentos orgánicos."],
    "ef", //NO CAMBIAR
    1, //NO CAMBIAR
    "Un entorno obesogénico es aquel que facilita el sedentarismo y el consumo de alimentos altos en calorías.",
    true //NO CAMBIAR
);

// Quiz 5
setQuest(
    "¿Cómo beneficia la actividad física a las personas con diabetes tipo II?",
    "Aumenta la sensibilidad de los receptores a la insulina y mejora la composición corporal.",
    ["Reduce la necesidad de medicamentos de forma inmediata.", "Elimina por completo la necesidad de insulina.", "Aumenta la producción de insulina en el páncreas."],
    "ef", //NO CAMBIAR
    1, //NO CAMBIAR
    "La actividad física mejora la sensibilidad a la insulina y ayuda a controlar los niveles de glucosa en sangre.",
    true //NO CAMBIAR
);

// Quiz 6
setQuest(
    "¿Qué efecto tiene la actividad física en pacientes con hipertensión?",
    "Disminuye la presión arterial sistólica y diastólica.",
    ["Aumenta la presión arterial durante el ejercicio.", "No tiene ningún efecto sobre la presión arterial.", "Solo reduce la presión arterial en personas jóvenes."],
    "ef", //NO CAMBIAR
    1, //NO CAMBIAR
    "La actividad física regular ayuda a reducir la presión arterial en pacientes con hipertensión.",
    true //NO CAMBIAR
);

// Quiz 7
setQuest(
    "¿Qué tipo de cáncer se ha demostrado que puede reducirse con la actividad física?",
    "Cáncer de colon.",
    ["Cáncer de piel.", "Cáncer de pulmón.", "Cáncer de hígado."],
    "ef", //NO CAMBIAR
    1, //NO CAMBIAR
    "La actividad física reduce el riesgo de cáncer de colon debido a sus efectos en el metabolismo y la digestión.",
    true //NO CAMBIAR
);

// Quiz 8
setQuest(
    "¿Qué es el síndrome metabólico?",
    "Un conjunto de factores de riesgo que incluyen obesidad, hipertensión y resistencia a la insulina.",
    ["Una enfermedad relacionada con la falta de vitaminas.", "Un trastorno genético que afecta solo a niños.", "Una condición que solo afecta a personas mayores de 60 años."],
    "ef", //NO CAMBIAR
    1, //NO CAMBIAR
    "El síndrome metabólico es un conjunto de condiciones que aumentan el riesgo de enfermedades cardíacas y diabetes.",
    true //NO CAMBIAR
);

// Quiz 9
setQuest(
    "¿Cuánta actividad física se recomienda para los adultos mayores?",
    "30 minutos diarios de actividad física moderada.",
    ["60 minutos diarios de actividad física intensa.", "15 minutos diarios de actividad física ligera.", "No se recomienda actividad física para adultos mayores."],
    "ef", //NO CAMBIAR
    1, //NO CAMBIAR
    "Los adultos mayores deben realizar al menos 30 minutos de actividad física moderada al día para mantenerse saludables.",
    true //NO CAMBIAR
);

// Quiz 10
setQuest(
    "¿Qué iniciativa se menciona en Venezuela para promover la actividad física?",
    "La creación de parques biosaludables o gimnasios al aire libre.",
    ["La prohibición de alimentos altos en calorías.", "La implementación de impuestos a los gimnasios privados.", "La creación de centros de rehabilitación para personas con obesidad."],
    "ef", //NO CAMBIAR
    1, //NO CAMBIAR
    "En Venezuela se han creado parques biosaludables para fomentar la actividad física en la población.",
    true //NO CAMBIAR
);

// Quiz 11
setQuest(
    "¿Cuál es uno de los beneficios psicológicos de la actividad física?",
    "Mejora el estado de ánimo y reduce la depresión.",
    ["Aumenta el apetito.", "Disminuye la capacidad de concentración.", "Incrementa el estrés."],
    "ef", //NO CAMBIAR
    1, //NO CAMBIAR
    "La actividad física tiene efectos positivos en la salud mental, reduciendo el estrés y mejorando el ánimo.",
    true //NO CAMBIAR
);

// Quiz 12
setQuest(
    "¿Cuánta actividad física se recomienda para niños y adolescentes?",
    "60 minutos diarios de actividad física moderada o vigorosa.",
    ["30 minutos diarios de actividad ligera.", "90 minutos diarios de actividad intensa.", "No se recomienda actividad física para niños."],
    "ef", //NO CAMBIAR
    1, //NO CAMBIAR
    "Los niños y adolescentes deben realizar al menos 60 minutos de actividad física al día para un desarrollo saludable.",
    true //NO CAMBIAR
);

// Quiz 13
setQuest(
    "¿Cuál es el mínimo de actividad física recomendada para adultos?",
    "150 minutos semanales de actividad aeróbica moderada.",
    ["60 minutos semanales de actividad intensa.", "30 minutos diarios de actividad ligera.", "No se requiere actividad física para adultos."],
    "ef", //NO CAMBIAR
    1, //NO CAMBIAR
    "Los adultos deben realizar al menos 150 minutos de actividad aeróbica moderada a la semana.",
    true //NO CAMBIAR
);

// Quiz 14
setQuest(
    "¿Qué beneficio tiene la actividad física en el envejecimiento?",
    "Retrasa el deterioro cognitivo y mejora la movilidad.",
    ["Acelera el proceso de envejecimiento.", "Disminuye la masa muscular.", "Aumenta el riesgo de caídas."],
    "ef", //NO CAMBIAR
    1, //NO CAMBIAR
    "La actividad física ayuda a mantener la movilidad y la salud mental en los adultos mayores.",
    true //NO CAMBIAR
);

// Quiz 15
setQuest(
    "¿Qué efecto tiene la actividad física en la salud mental?",
    "Reduce el estrés y la ansiedad.",
    ["Aumenta el riesgo de depresión.", "Disminuye la autoestima.", "No tiene ningún efecto en la salud mental."],
    "ef", //NO CAMBIAR
    1, //NO CAMBIAR
    "La actividad física tiene efectos positivos en la salud mental, reduciendo el estrés y la ansiedad.",
    true //NO CAMBIAR
);

// Quiz 16
setQuest(
    "¿Qué enfermedad crónica puede prevenirse con la actividad física?",
    "Enfermedades cardiovasculares.",
    ["Enfermedades infecciosas.", "Enfermedades autoinmunes.", "Enfermedades genéticas."],
    "ef", //NO CAMBIAR
    1, //NO CAMBIAR
    "La actividad física reduce el riesgo de enfermedades cardiovasculares.",
    true //NO CAMBIAR
);

// Quiz 17
setQuest(
    "¿Cómo ayuda la actividad física en el control de la obesidad?",
    "Aumenta el gasto energético y reduce la grasa corporal.",
    ["Disminuye el metabolismo basal.", "Aumenta el apetito.", "No tiene ningún efecto en la obesidad."],
    "ef", //NO CAMBIAR
    1, //NO CAMBIAR
    "La actividad física ayuda a quemar calorías y reducir la grasa corporal, controlando la obesidad.",
    true //NO CAMBIAR
);

// Quiz 18
setQuest(
    "¿Qué efecto tiene la actividad física en la diabetes tipo II?",
    "Mejora la sensibilidad a la insulina.",
    ["Aumenta los niveles de glucosa en sangre.", "Disminuye la producción de insulina.", "No tiene ningún efecto en la diabetes."],
    "ef", //NO CAMBIAR
    1, //NO CAMBIAR
    "La actividad física mejora la sensibilidad a la insulina, ayudando a controlar la diabetes tipo II.",
    true //NO CAMBIAR
);

// Quiz 19
setQuest(
    "¿Qué tipo de cáncer puede reducirse con la actividad física?",
    "Cáncer de mama.",
    ["Cáncer de pulmón.", "Cáncer de piel.", "Cáncer de hígado."],
    "ef", //NO CAMBIAR
    1, //NO CAMBIAR
    "La actividad física reduce el riesgo de cáncer de mama, especialmente en mujeres posmenopáusicas.",
    true //NO CAMBIAR
);

// Quiz 20
setQuest(
    "¿Qué factor del síndrome metabólico puede mejorar con la actividad física?",
    "La resistencia a la insulina.",
    ["La falta de vitaminas.", "La producción de hormonas tiroideas.", "La falta de calcio en los huesos."],
    "ef", //NO CAMBIAR
    1, //NO CAMBIAR
    "La actividad física mejora la resistencia a la insulina, un factor clave en el síndrome metabólico.",
    true //NO CAMBIAR
);

// Quiz 21
setQuest(
    "¿Qué beneficio tiene la actividad física en la salud ósea?",
    "Aumenta la densidad ósea.",
    ["Disminuye la masa ósea.", "Aumenta el riesgo de fracturas.", "No tiene ningún efecto en los huesos."],
    "ef", //NO CAMBIAR
    1, //NO CAMBIAR
    "La actividad física fortalece los huesos y aumenta su densidad, previniendo la osteoporosis.",
    true //NO CAMBIAR
);

// Quiz 22
setQuest(
    "¿Qué efecto tiene la actividad física en el corazón?",
    "Mejora la función cardíaca.",
    ["Aumenta el riesgo de infarto.", "Disminuye la circulación sanguínea.", "No tiene ningún efecto en el corazón."],
    "ef", //NO CAMBIAR
    1, //NO CAMBIAR
    "La actividad física fortalece el corazón y mejora su capacidad para bombear sangre.",
    true //NO CAMBIAR
);

// Quiz 23
setQuest(
    "¿Qué beneficio tiene la actividad física en la salud mental de los adultos mayores?",
    "Reduce el riesgo de depresión.",
    ["Aumenta el riesgo de demencia.", "Disminuye la memoria.", "No tiene ningún efecto en la salud mental."],
    "ef", //NO CAMBIAR
    1, //NO CAMBIAR
    "La actividad física ayuda a reducir el riesgo de depresión en los adultos mayores.",
    true //NO CAMBIAR
);

// Quiz 24
setQuest(
    "¿Qué beneficio tiene la actividad física en el sistema respiratorio?",
    "Mejora la capacidad pulmonar.",
    ["Disminuye la oxigenación de la sangre.", "Aumenta el riesgo de asma.", "No tiene ningún efecto en el sistema respiratorio."],
    "ef", //NO CAMBIAR
    1, //NO CAMBIAR
    "La actividad física fortalece los pulmones y mejora la capacidad respiratoria.",
    true //NO CAMBIAR
);

// Quiz 25
setQuest(
    "¿Qué beneficio tiene la actividad física en los músculos?",
    "Aumenta la fuerza y la resistencia muscular.",
    ["Disminuye la masa muscular.", "Aumenta el riesgo de lesiones.", "No tiene ningún efecto en los músculos."],
    "ef", //NO CAMBIAR
    1, //NO CAMBIAR
    "La actividad física fortalece los músculos y mejora su resistencia.",
    true //NO CAMBIAR
);

// Quiz 26
setQuest(
    "¿Qué beneficio tiene la actividad física en las articulaciones?",
    "Mejora la movilidad y reduce el riesgo de lesiones.",
    ["Aumenta el riesgo de artritis.", "Disminuye la flexibilidad.", "No tiene ningún efecto en las articulaciones."],
    "ef", //NO CAMBIAR
    1, //NO CAMBIAR
    "La actividad física mantiene las articulaciones flexibles y reduce el riesgo de lesiones.",
    true //NO CAMBIAR
);

// Quiz 27
setQuest(
    "¿Qué beneficio tiene la actividad física en la salud mental de los adolescentes?",
    "Reduce el estrés y la ansiedad.",
    ["Aumenta el riesgo de depresión.", "Disminuye la autoestima.", "No tiene ningún efecto en la salud mental."],
    "ef", //NO CAMBIAR
    1, //NO CAMBIAR
    "La actividad física ayuda a los adolescentes a manejar el estrés y la ansiedad.",
    true //NO CAMBIAR
);

// Quiz 28
setQuest(
    "¿Qué beneficio tiene la actividad física en la salud cardiovascular de los niños?",
    "Mejora la función cardíaca y la circulación.",
    ["Aumenta el riesgo de infarto.", "Disminuye la oxigenación de la sangre.", "No tiene ningún efecto en el corazón."],
    "ef", //NO CAMBIAR
    1, //NO CAMBIAR
    "La actividad física fortalece el corazón y mejora la circulación en los niños.",
    true //NO CAMBIAR
);

// Quiz 29
setQuest(
    "¿Qué beneficio tiene la actividad física en la salud ósea de los adultos mayores?",
    "Reduce el riesgo de osteoporosis.",
    ["Aumenta el riesgo de fracturas.", "Disminuye la densidad ósea.", "No tiene ningún efecto en los huesos."],
    "ef", //NO CAMBIAR
    1, //NO CAMBIAR
    "La actividad física ayuda a mantener la densidad ósea en los adultos mayores.",
    true //NO CAMBIAR
);

// Quiz 30
setQuest(
    "¿Qué beneficio tiene la actividad física en la salud mental de los adultos?",
    "Reduce el estrés y mejora el estado de ánimo.",
    ["Aumenta el riesgo de depresión.", "Disminuye la capacidad de concentración.", "No tiene ningún efecto en la salud mental."],
    "ef", //NO CAMBIAR
    1, //NO CAMBIAR
    "La actividad física tiene efectos positivos en la salud mental de los adultos.",
    true //NO CAMBIAR
);

// Quiz 31
setQuest(
    "¿Qué beneficio tiene la actividad física en el sistema respiratorio de los adultos mayores?",
    "Mejora la capacidad pulmonar.",
    ["Disminuye la oxigenación de la sangre.", "Aumenta el riesgo de asma.", "No tiene ningún efecto en el sistema respiratorio."],
    "ef", //NO CAMBIAR
    1, //NO CAMBIAR
    "La actividad física fortalece los pulmones y mejora la capacidad respiratoria en adultos mayores.",
    true //NO CAMBIAR
);

// Quiz 32
setQuest(
    "¿Qué beneficio tiene la actividad física en los músculos de los adultos mayores?",
    "Aumenta la fuerza y la resistencia muscular.",
    ["Disminuye la masa muscular.", "Aumenta el riesgo de lesiones.", "No tiene ningún efecto en los músculos."],
    "ef", //NO CAMBIAR
    1, //NO CAMBIAR
    "La actividad física ayuda a mantener la fuerza muscular en los adultos mayores.",
    true //NO CAMBIAR
);

// Quiz 33
setQuest(
    "¿Qué beneficio tiene la actividad física en las articulaciones de los adultos mayores?",
    "Mejora la movilidad y reduce el riesgo de lesiones.",
    ["Aumenta el riesgo de artritis.", "Disminuye la flexibilidad.", "No tiene ningún efecto en las articulaciones."],
    "ef", //NO CAMBIAR
    1, //NO CAMBIAR
    "La actividad física mantiene las articulaciones flexibles y reduce el riesgo de lesiones en adultos mayores.",
    true //NO CAMBIAR
);

// Quiz 34
setQuest(
    "¿Qué beneficio tiene la actividad física en la salud mental de los niños?",
    "Reduce el estrés y mejora el estado de ánimo.",
    ["Aumenta el riesgo de depresión.", "Disminuye la autoestima.", "No tiene ningún efecto en la salud mental."],
    "ef", //NO CAMBIAR
    1, //NO CAMBIAR
    "La actividad física ayuda a los niños a manejar el estrés y mejorar su estado de ánimo.",
    true //NO CAMBIAR
);

// Quiz 35
setQuest(
    "¿Qué beneficio tiene la actividad física en la salud cardiovascular de los adultos?",
    "Mejora la función cardíaca y la circulación.",
    ["Aumenta el riesgo de infarto.", "Disminuye la oxigenación de la sangre.", "No tiene ningún efecto en el corazón."],
    "ef", //NO CAMBIAR
    1, //NO CAMBIAR
    "La actividad física fortalece el corazón y mejora la circulación en los adultos.",
    true //NO CAMBIAR
);

// Quiz 36
setQuest(
    "¿Qué beneficio tiene la actividad física en la salud ósea de los niños?",
    "Aumenta la densidad ósea.",
    ["Disminuye la masa ósea.", "Aumenta el riesgo de fracturas.", "No tiene ningún efecto en los huesos."],
    "ef", //NO CAMBIAR
    1, //NO CAMBIAR
    "La actividad física ayuda a fortalecer los huesos en los niños.",
    true //NO CAMBIAR
);

// Quiz 37
setQuest(
    "¿Qué beneficio tiene la actividad física en los músculos de los niños?",
    "Aumenta la fuerza y la resistencia muscular.",
    ["Disminuye la masa muscular.", "Aumenta el riesgo de lesiones.", "No tiene ningún efecto en los músculos."],
    "ef", //NO CAMBIAR
    1, //NO CAMBIAR
    "La actividad física fortalece los músculos en los niños.",
    true //NO CAMBIAR
);

// Quiz 38
setQuest(
    "¿Qué beneficio tiene la actividad física en las articulaciones de los niños?",
    "Mejora la movilidad y reduce el riesgo de lesiones.",
    ["Aumenta el riesgo de artritis.", "Disminuye la flexibilidad.", "No tiene ningún efecto en las articulaciones."],
    "ef", //NO CAMBIAR
    1, //NO CAMBIAR
    "La actividad física mantiene las articulaciones flexibles y reduce el riesgo de lesiones en los niños.",
    true //NO CAMBIAR
);

// Quiz 39
setQuest(
    "¿Qué beneficio tiene la actividad física en la salud mental de los adolescentes?",
    "Reduce el estrés y la ansiedad.",
    ["Aumenta el riesgo de depresión.", "Disminuye la autoestima.", "No tiene ningún efecto en la salud mental."],
    "ef", //NO CAMBIAR
    1, //NO CAMBIAR
    "La actividad física ayuda a los adolescentes a manejar el estrés y la ansiedad.",
    true //NO CAMBIAR
);

// Quiz 40
setQuest(
    "¿Qué beneficio tiene la actividad física en la salud cardiovascular de los adolescentes?",
    "Mejora la función cardíaca y la circulación.",
    ["Aumenta el riesgo de infarto.", "Disminuye la oxigenación de la sangre.", "No tiene ningún efecto en el corazón."],
    "ef", //NO CAMBIAR
    1, //NO CAMBIAR
    "La actividad física fortalece el corazón y mejora la circulación en los adolescentes.",
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