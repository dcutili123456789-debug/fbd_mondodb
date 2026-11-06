use("renta_videos");
print("Clientes:"); printjson(db.clientes.find({}, { _id: 0 }).toArray());
print("Disponibles:"); printjson(db.articulos.find({ disponible: true }, { _id: 0 }).toArray());
print("Rentas sin devolver:"); printjson(db.rentas.find({ devuelto: false }, { _id: 0 }).toArray());
print("Total recibido:"); printjson(db.rentas.aggregate([{ $group: { _id: null, total: { $sum: "$pago" } } }]).toArray());
