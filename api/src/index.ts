// Importa los modelos de las bases de datos de origen y destino
import { PersonaOrigen } from "./models/personaOrigen";
import { PersonaDestino } from "./models/personaDestino";


async function realizarETL(): Promise<void> {
  try {

    PersonaOrigen.sync();
    PersonaDestino.sync();
    const datosOrigen = await PersonaOrigen.findAll();
    console.log(datosOrigen);

    for (const datoOrigen of datosOrigen) {

      const registroExistente = await PersonaDestino.findOne({
        where: { nombre: datoOrigen.nombre },
      });

      if (registroExistente) {

        await PersonaDestino.update(
          {
            telefono: datoOrigen.telefono,
          },
          { where: { nombre: datoOrigen.nombre } }
        );
      } else {

        await PersonaDestino.create({
          nombre: datoOrigen.nombre,
          telefono: datoOrigen.telefono,
        });
      }
    }

    console.log("Proceso de ETL completado correctamente.");
  } catch (error) {
    console.error("Error durante el proceso de ETL:");
  }
}

realizarETL();