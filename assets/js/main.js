/////////////////Cerrar y abrir secciones/////////////////////////////////////////////////////////////////////////////
    const navbarHome = document.getElementById("navbarHome")
    const navbarTables = document.getElementById("navbarTables")
    const botonIngresar = document.getElementById("ingresar")
    const botonRegistrar = document.getElementById("registrar")
    const botonPagar = document.getElementById("cobrar")
    const paginaDeInicio = document.getElementById("home")
    const ingresarASitema = document.getElementById("tables")
    const registrarCliente = document.getElementById("register")
    const cobrar = document.getElementById("cobro")
    const navbHome = document.getElementById("navbHome")
    const navbIngresar = document.getElementById("navbIngresar")
    const navbCobro = document.getElementById("navbCobro")
    const navbRegister = document.getElementById("navbRegister")

    botonIngresar.addEventListener("click", () =>{
        ingresarASitema.classList.remove("hidden")
        paginaDeInicio.classList.add("hidden")
        navbarTables.classList.remove("hidden")
        navbarHome.classList.add("hidden")
    })
    botonRegistrar.addEventListener("click", () =>{
        registrarCliente.classList.remove("hidden")
        paginaDeInicio.classList.add("hidden")
        navbarTables.classList.remove("hidden")
        navbarHome.classList.add("hidden")
    })    
    botonPagar.addEventListener("click", () =>{
        cobrar.classList.remove("hidden")
        paginaDeInicio.classList.add("hidden")
        navbarTables.classList.remove("hidden")
        navbarHome.classList.add("hidden")
    })
    navbHome.addEventListener("click",() =>{
        paginaDeInicio.classList.remove("hidden")
        ingresarASitema.classList.add("hidden")
        registrarCliente.classList.add("hidden")
        cobrar.classList.add("hidden")
        navbarHome.classList.remove("hidden")
        navbarTables.classList.add("hidden")
    })
    navbIngresar.addEventListener("click",() =>{
        paginaDeInicio.classList.add("hidden")
        ingresarASitema.classList.remove("hidden")
        registrarCliente.classList.add("hidden")
        cobrar.classList.add("hidden")
        navbarTables.classList.remove("hidden")
        navbarHome.classList.add("hidden")
    })
    navbRegister.addEventListener("click",() =>{
        paginaDeInicio.classList.add("hidden")
        ingresarASitema.classList.add("hidden")
        registrarCliente.classList.remove("hidden")
        cobrar.classList.add("hidden")
        navbarTables.classList.remove("hidden")
        navbarHome.classList.add("hidden")
    })
    navbIngresar.addEventListener("click",() =>{
        paginaDeInicio.classList.add("hidden")
        ingresarASitema.classList.remove("hidden")
        registrarCliente.classList.add("hidden")
        cobrar.classList.add("hidden")
        navbarTables.classList.remove("hidden")
        navbarHome.classList.add("hidden")
    })
    navbCobro.addEventListener("click",() =>{
        paginaDeInicio.classList.add("hidden")
        ingresarASitema.classList.add("hidden")
        registrarCliente.classList.add("hidden")
        cobrar.classList.remove("hidden")
        navbarTables.classList.remove("hidden")
        navbarHome.classList.add("hidden")
    })

///////////////////////////Armar la tabla////////////////////////////////////////////////////////////////////////////////////////////////////////////
const evaluarLocalStorage = () => {
    console.log(JSON.parse(localStorage.getItem("tablaData")));
    return JSON.parse(localStorage.getItem("tablaData")) || [];
  };
  
const guardarTablaEnLocalStorage = (tablaData) => {
    localStorage.setItem("tablaData", JSON.stringify(tablaData));
  };
  const registros = JSON.parse(localStorage.getItem("tablaData")) || [];

  document.getElementById("nuevoCliente").addEventListener("submit", (e) => {
    e.preventDefault();
    const ingresarASitema = document.getElementById("tables")
    const registrarCliente = document.getElementById("register")
    const nombre = document.getElementById("nombreCliente").value;
    const dni = document.getElementById("dniCliente").value;
    const telefono = document.getElementById("telefonoCliente").value;
    const dias = document.getElementById("diasCliente").value;
    const horario = document.getElementById("horarioCliente").value;
    const pago = document.getElementById("pagoCliente").value;
    const fecha = document.getElementById("fechaForm").value;

    if (nombre === '') {
        document.getElementById("error-nombre").classList.remove("hidden");
      }
    if (dni === '') {
        document.getElementById("error-dni").classList.remove("hidden");
    }
    if (telefono === '') {
        document.getElementById("error-telefono").classList.remove("hidden");
    }
    if (dias === '') {
        document.getElementById("error-dias").classList.remove("hidden");
    }
    if (horario === '') {
        document.getElementById("error-horario").classList.remove("hidden");
    }
    if(fecha === ''){
      document.getElementById("error-fecha").classList.remove("hidden");
    }
    if (nombre === '' || dni === '' || telefono === '' 
      || dias === '' || horario === '' || fecha === '') {
        return; // Detener la ejecución de la función
    }
    
      document.getElementById("error-nombre").classList.add("hidden");
      document.getElementById("error-dni").classList.add("hidden");
      document.getElementById("error-telefono").classList.add("hidden");
      document.getElementById("error-dias").classList.add("hidden");
      document.getElementById("error-horario").classList.add("hidden");
      document.getElementById("error-pago").classList.add("hidden");
      document.getElementById("error-fecha").classList.add("hidden");
      const registro ={
        id: uuidv4(),
        nombre: nombre,
        dni: dni,
        telefono: telefono,
        dias: dias,
        horario: horario,
        pago: pago,
        fecha: fecha
      }
      let tablaData = evaluarLocalStorage();
      tablaData.push(registro)

      localStorage.setItem("tablaData", JSON.stringify(tablaData));
      generarTabla();
      ingresarASitema.classList.remove("hidden")
      registrarCliente.classList.add("hidden")
      document.getElementById("nuevoCliente").reset();
})

const generarTabla = () =>{
    const tableBody = document.getElementById("tbody-clientes")
    tableBody.innerHTML = ""
    const registros = evaluarLocalStorage();
    if (registros){
    registros.forEach(registro => {
        tableBody.innerHTML += `
          <tr class="border border-slate-400 border-white">
              <td class="text-center text-white">${
                registro.nombre
              }</td>
              <td class="text-center text-white">${
                registro.dni
              }</td>
              <td class="text-center text-white">${(
                registro.telefono
              )}</td>
              <td class="text-center text-white">${registro.dias}</td>
              <td class="text-center text-white">${registro.horario}</td>
    
              <td class="text-center text-white" >${registro.pago}</td>
              <td class="text-center text-white" >${registro.fecha}</td>
              <td class="text-[#64c27b] flex justify-center gap-2 text-xs lg:text-base"> 
                <button class="" id="${registro.id}"><i class="fi fi-sr-edit-alt"></i>
                </button>
                <button class="" id="${registro.id}"><i class="fi fi-sr-trash"></i>
                </button>
              </td>
          </tr>
        `
    });}
}
document.addEventListener("DOMContentLoaded", function() {
    generarTabla();
  });


  document.getElementById("agregarCobro").addEventListener("click", () => {
    const ingresarASitema = document.getElementById("tables")
    const cobrar = document.getElementById("cobro")
    const dniCobro = document.getElementById("dniCobro").value;
    const fechaCobro = document.getElementById("fechaCobro").value;
    const montoCobro = document.getElementById("montoCobro").value;

    // Validar que se ingresen todos los campos necesarios
    if (dniCobro === '' || fechaCobro === '' || montoCobro === '') {
        alert("Por favor complete todos los campos.");
        return;
    }

    // Buscar el registro correspondiente al DNI ingresado
    const registros = evaluarLocalStorage();
    const registroEncontrado = registros.find(registro => registro.dni === dniCobro);

    if (!registroEncontrado) {
        alert("No se encontró ningún cliente con el DNI ingresado.");
        return;
    }

    // Actualizar la fecha y el monto en el registro encontrado
    registroEncontrado.fecha = fechaCobro;
    registroEncontrado.pago = montoCobro;

    // Guardar los cambios en el almacenamiento local
    guardarTablaEnLocalStorage(registros);

    // Regenerar la tabla con los datos actualizados
    generarTabla();

    // Limpiar los campos del formulario de cobro
    document.getElementById("dniCobro").value = '';
    document.getElementById("fechaCobro").value = '';
    document.getElementById("montoCobro").value = '';

    // alert("El pago se registró correctamente.");
    cobrar.classList.add("hidden")
    ingresarASitema.classList.remove("hidden")
});

  // onclick="mostrarModalEliminar('${
  //   registro.id
  // }')"
////////////////////Obtener la Fecha actual///////////////////////////////////////////////////////////////////////////
  function actualizarFecha() {
    // Obtener la fecha de hoy
    const fechaHoy = new Date();
    
    // Obtener el año, mes y día por separado
    const year = fechaHoy.getFullYear();
    const month = fechaHoy.getMonth() + 1; // Los meses van de 0 a 11
    const day = fechaHoy.getDate();
    
    // Formatear la fecha como YYYY-MM-DD
    const fechaFormateada = `${year}-${month < 10 ? '0' : ''}${month}-${day < 10 ? '0' : ''}${day}`;
    
    // Guardar la fecha en localStorage
    localStorage.setItem('fechaActualizacion', fechaFormateada);
  }
  
  function obtenerFechaActualizacion() {
    // Obtener la fecha guardada en localStorage
    const fechaGuardada = localStorage.getItem('fechaActualizacion');
    
    // Si no hay fecha guardada, o si la fecha guardada es diferente a la de hoy, actualizarla
    if (!fechaGuardada || fechaGuardada !== obtenerFechaHoy()) {
      actualizarFecha();
    }
    
    // Devolver la fecha actualizada
    return localStorage.getItem('fechaActualizacion');
  }
  
  function obtenerFechaHoy() {
    // Obtener la fecha de hoy
    const fechaHoy = new Date();
    
    // Obtener el año, mes y día por separado
    const year = fechaHoy.getFullYear();
    const month = fechaHoy.getMonth() + 1; // Los meses van de 0 a 11
    const day = fechaHoy.getDate();
    
    // Formatear la fecha como YYYY-MM-DD
    return `${year}-${month < 10 ? '0' : ''}${month}-${day < 10 ? '0' : ''}${day}`;
  }

////////////////////////Campana de notificaciones/////////////////////////////////////////////////////////////////////
  const toggleButton = document.getElementById("toggleButton");
  const content = document.querySelector(".content");
  
  toggleButton.addEventListener("click", () => {
    content.classList.toggle("active");
  });


//////////////////////////////////Notificaciones//////////////////////////////////////////////////////////////////////

  const nuevaNotificacion = () => {
  // Limpiar notificaciones anteriores
    const notificaciones = document.getElementById("clienteNotificado");
    notificaciones.innerHTML =`<div class="flex flex-col items-center justify-center mt-0 pb-9">
    <p class="text-[#bcf7a4] text-2xl font-bold pt-8">Notificaciones</p>
  </div>`;

    const fechaActual = new Date();
    const fechasClientes = [];
    const registros = evaluarLocalStorage();

    registros.forEach(registro => {
      fechasClientes.push({
          fecha: new Date(registro.fecha),
          nombre: registro.nombre,
          dni: registro.dni
      });
    });

    fechasClientes.forEach(fechaCliente => {
      const fechaVencimiento = new Date(fechaCliente.fecha);
      fechaVencimiento.setDate(fechaVencimiento.getDate() + 30);

      // Comparar la fecha del vencimiento con la fecha actual
      if (fechaVencimiento.getTime() <= fechaActual.getTime()) {
        notificaciones.innerHTML += `
        <div class="flex flex-col items-center justify-center mt-0">
    <p class="text-[#bcf7a4] text-xl font-bold ">Cuota a vencer para ${fechaCliente.nombre} ${fechaCliente.dni}</p>
  </div>`
      }
    });
  };

  document.addEventListener("DOMContentLoaded", () => {
    nuevaNotificacion();
  });