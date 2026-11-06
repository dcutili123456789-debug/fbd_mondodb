use("renta_videos");
db.clientes.insertMany([
  { idCliente: 1, nombre: "Ana Pérez", telefono: "70011111" },
  { idCliente: 2, nombre: "Luis Mamani", telefono: "70022222" }
]);
db.articulos.insertMany([
  { codigo: "V001", titulo: "El Padrino", precio: 15, disponible: true },
  { codigo: "V002", titulo: "Matrix", precio: 12, disponible: true },
  { codigo: "V003", titulo: "Toy Story", precio: 18, disponible: true }
]);
db.rentas.insertMany([
  { idCliente: 1, codigo: "V001", fecha: new Date("2026-11-01"), pago: 15, devuelto: true },
  { idCliente: 2, codigo: "V002", fecha: new Date("2026-11-02"), pago: 12, devuelto: false }
]);
db.articulos.updateOne({ codigo: "V002" }, { $set: { disponible: false } });
print("Datos insertados");
