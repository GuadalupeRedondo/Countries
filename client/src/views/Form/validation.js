const validation = (form) => {
    let errors = {}

    //Name
    if(!form.name){
        errors.name = "El nombre es requerido"
    }else if(form.name.length > 10){
        errors.name = "El nombre no puede tener mas de 10 caracteres"
    }else if(form.name.startsWith(' ')){
        errors.name = "No puede empezar con espacio"
    }

    //Difficulty
    if(!form.difficulty){
        errors.difficulty = "El nombre es requerido"
    }else if(form.difficulty > 5 || form.difficulty < 1){
        errors.difficulty = "Debe tener de 1 al 5 caracteres"
    }

    //Duration
    if(!form.duration){
        errors.duration = "El nombre es requerido"
    }

    //Season
    if(!form.season){
        errors.season = "El nombre es requerido"
    }

    //Countries
    if(!form.countries.length){
        errors.countries = "El nombre es requerido"
    }

    return errors
}

export default validation