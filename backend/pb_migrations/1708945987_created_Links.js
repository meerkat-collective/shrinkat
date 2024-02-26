/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "ya849dyyqqto981",
    "created": "2024-02-26 11:13:07.242Z",
    "updated": "2024-02-26 11:13:07.242Z",
    "name": "Links",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "chkntxrb",
        "name": "url",
        "type": "url",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "exceptDomains": [],
          "onlyDomains": []
        }
      },
      {
        "system": false,
        "id": "fvnbsqjc",
        "name": "shrinked",
        "type": "text",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "min": 6,
          "max": 10,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "ubhjidlk",
        "name": "createdBy",
        "type": "relation",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "_pb_users_auth_",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      },
      {
        "system": false,
        "id": "e0q7hzpz",
        "name": "clicks",
        "type": "number",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "noDecimal": false
        }
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": "@request.auth.id != \"\"",
    "updateRule": "@request.auth.id = createdBy",
    "deleteRule": "@request.auth.id = createdBy",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("ya849dyyqqto981");

  return dao.deleteCollection(collection);
})
