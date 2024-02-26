/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ya849dyyqqto981")

  collection.name = "links"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ya849dyyqqto981")

  collection.name = "Links"

  return dao.saveCollection(collection)
})
