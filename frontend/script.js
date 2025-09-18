document.addEventListener("submit", async (e) => {
e.preventDefault()
    const nombre = document.getElementById("nombre").value
    const tipo = document.getElementById("tipo").value
    if(!nombre || !tipo){
        alert("Por favor complete todos los campos.")
        return
    }
    
    try{
        const res = await fetch("http://localhost:3000/api/mascotas/",{
            method:"POST", 
            headers:{
                "Content-Type": "application/json",
            },
            body: JSON.stringify({nombre,tipo})
        })

        if(!res.ok){
            const error = await res.json()
            alert("Error:"+ (error.error || "Algo salio mal"))
            return
        }
        const nuevaMascota = await res.json()
        console.log("Mascota creada: ", nuevaMascota)

        //limpio el form
        document.getElementById("formMascotas").reset()

    }catch(err){
        alert("Error al cargar la mascota: " + err.message)
    }
})