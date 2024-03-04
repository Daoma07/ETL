const Service = require('node-windows').Service
const svc = new Service({
    name:"ELT Running",
    description: "ETL for extracting transforming and loading from defensoria_asesorias and defensoria_codigos_postales DB, reporte_consejeria DB",
    //script: "C:\\Users\\hrive\\Documents\\Universidad\\Servicio\\ETL\\api2.0\\app.js"
    script: "/app.js"
})

svc.on('install', function(){
    svc.start()
})

svc.install()