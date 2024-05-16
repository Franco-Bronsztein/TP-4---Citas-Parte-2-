import './FormCitas.css'; 
function FormCItas({setCitas,citas}) {
    const act = (e) =>
    {
        e.preventDefault();
        setCitas([...citas, {
            id: Date.now(),
            mascota: e.target.mascota.value,
            dueño : e.target.propietario.value,
            fecha : e.target.fecha.value,
            hora : e.target.hora.value,
            sintomas : e.target.sintomas.value
        }])
    }

    const mostrarConfirm = () =>
    {
        alert("Se a creado una cita nueva")
    }

    const validarDatos = () =>
    {
        
    }
    return (
        <form onSubmit={act}>
            <label>Nombre Mascota</label>
            <input type="text" name="mascota" class="u-full-width" placeholder="Nombre Mascota"></input>
            <label>Nombre Dueño</label>
            <input type="text" name="propietario" class="u-full-width" placeholder="Nombre dueño de la mascota"></input>
            <label>Fecha</label>
            <input type="date" name="fecha" class="u-full-width"></input>
            <label>hora</label><input type="time" name="hora" class="u-full-width"></input>
            <label>Sintomas</label>
            <textarea name="sintomas" class="u-full-width"></textarea>
            <button type="submit" class="u-full-width button-primary" onClick={mostrarConfirm}>Agregar Cita</button>
        </form>)
}

export default FormCItas