module.exports = (mongoose) => {
  var schema = mongoose.Schema(
    {
      descricao: String,
      published: Boolean,
    },
    { timestamps: true }
  )

  schema.method('toJSON', function () {
    const { __v, _id, ...object } = this.toObject()
    object.id = _id
    return object
  })

  return mongoose.model('Estacionamento', schema)
}
