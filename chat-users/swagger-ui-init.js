window.onload = function() {
  // Build a system
  var url = window.location.search.match(/url=([^&]+)/);
  if (url && url.length > 1) {
    url = decodeURIComponent(url[1]);
  } else {
    url = window.location.origin;
  }
  var options = {
  "swaggerDoc": {
      "swagger": "2.0",
      "paths": {
        "chat/publish/message/users": {
          "post": {
            "tags": [
              "Publish"
            ],
            "summary": "Publish a new message to users.",
            "responses": {
              "503": {
                "schema": {
                  "$ref": "#/definitions/Error_503"
                },
                "description": "Service Unavailable"
              },
              "422": {
                "schema": {
                  "$ref": "#/definitions/Error_422"
                },
                "description": "Unprocessable Entity"
              },
              "404": {
                "schema": {
                  "$ref": "#/definitions/Error_404_publish_message"
                },
                "description": "Not Found"
              },
              "403": {
                "schema": {
                  "$ref": "#/definitions/Error_403_publish_message"
                },
                "description": "Forbidden"
              },
              "400": {
                "schema": {
                  "$ref": "#/definitions/Error_400_publish_message"
                },
                "description": "Bad Request"
              },
              "200": {
                "schema": {
                  "$ref": "#/definitions/publish_message"
                },
                "description": "Ok"
              }
            },
            "parameters": [
              {
                "x-example": "lic-IMK9rZycjyx06Ho3laoQPZs5l2q3b+bzqxB",
                "type": "string",
                "required": true,
                "name": "licenseKey",
                "in": "header",
                "description": "License key to be used for publishing a new message to users in a project in an account."
              },
              {
                "x-example": "SFMyNTY.g3QAAAACZAAEZGF0YXQAAAADbQAAAAlhY2NvdW50SWRtAAAAGDVmM2JhZDllMjFhMzhlNTcxZTQ2OGIxMW0AAAAIa2V5c2V0SWRtAAAAJDM5ZmJlZmRlLWY1ZGMtNGQ5YS05MjYwLTk2MTY2Mjc5MjJhYm0AAAAJcHJvamVjdElkbQAAACQ1YjY5MWY0OC1lNTZmLTQwNGMtYmIxZi1kYmQ5N2MzYjgzMDVkAAZzaWduZWRuBgDT17iKdwE.RzETsnQzB6aeQCkbL4GOKtu4HTWlgofp7xhnlv_fHFW",
                "type": "string",
                "required": true,
                "name": "appSecret",
                "in": "header",
                "description": "App secret associated with the license key used."
              },
              {
                "x-example": "SFMyNTY.g3QAAAACZAAEZGF0YW0AAAAYNWZiM2MzNWYyMWEzOGVkMjI4ZWRkOTBlZAAGc2lnbmVkbgYAoNzjr3cB.P4CAS42Iq9A6KuKBpEcVEnB86fsx3FiZTHpzFz4JM0E",
                "type": "string",
                "required": true,
                "name": "userToken",
                "in": "header",
                "description": "Token of the user who is publishing a new message to users."
              },
              {
                "schema": {
                  "$ref": "#/definitions/body_publish_message"
                },
                "required": true,
                "name": "body",
                "in": "body",
                "description": "Body parameters to publish a new message to users."
              }
            ],
            "operationId": "Isometrik.ChatUsersWeb.PublishController.publish_message",
            "description": "Publish a new message to users for a project in an account."
          }
        },
        "chat/notification/users": {
          "post": {
            "tags": [
              "Publish"
            ],
            "summary": "Send a new notification to users.",
            "responses": {
              "503": {
                "schema": {
                  "$ref": "#/definitions/Error_503"
                },
                "description": "Service Unavailable"
              },
              "422": {
                "schema": {
                  "$ref": "#/definitions/Error_422"
                },
                "description": "Unprocessable Entity"
              },
              "404": {
                "schema": {
                  "$ref": "#/definitions/Error_404_send_notification"
                },
                "description": "Not Found"
              },
              "403": {
                "schema": {
                  "$ref": "#/definitions/Error_403_send_notification"
                },
                "description": "Forbidden"
              },
              "400": {
                "schema": {
                  "$ref": "#/definitions/Error_400_send_notification"
                },
                "description": "Bad Request"
              },
              "200": {
                "schema": {
                  "$ref": "#/definitions/send_notification"
                },
                "description": "Ok"
              }
            },
            "parameters": [
              {
                "x-example": "lic-IMK9rZycjyx06Ho3laoQPZs5l2q3b+bzqxB",
                "type": "string",
                "required": true,
                "name": "licenseKey",
                "in": "header",
                "description": "License key to be used for sending a new notification to users in a project in an account."
              },
              {
                "x-example": "SFMyNTY.g3QAAAACZAAEZGF0YXQAAAADbQAAAAlhY2NvdW50SWRtAAAAGDVmM2JhZDllMjFhMzhlNTcxZTQ2OGIxMW0AAAAIa2V5c2V0SWRtAAAAJDM5ZmJlZmRlLWY1ZGMtNGQ5YS05MjYwLTk2MTY2Mjc5MjJhYm0AAAAJcHJvamVjdElkbQAAACQ1YjY5MWY0OC1lNTZmLTQwNGMtYmIxZi1kYmQ5N2MzYjgzMDVkAAZzaWduZWRuBgDT17iKdwE.RzETsnQzB6aeQCkbL4GOKtu4HTWlgofp7xhnlv_fHFW",
                "type": "string",
                "required": true,
                "name": "appSecret",
                "in": "header",
                "description": "App secret associated with the license key used."
              },
              {
                "x-example": "SFMyNTY.g3QAAAACZAAEZGF0YW0AAAAYNWZiM2MzNWYyMWEzOGVkMjI4ZWRkOTBlZAAGc2lnbmVkbgYAoNzjr3cB.P4CAS42Iq9A6KuKBpEcVEnB86fsx3FiZTHpzFz4JM0E",
                "type": "string",
                "required": true,
                "name": "userToken",
                "in": "header",
                "description": "Token of the user who is sending a new notification to users."
              },
              {
                "schema": {
                  "$ref": "#/definitions/body_send_notification"
                },
                "required": true,
                "name": "body",
                "in": "body",
                "description": "Body parameters to send a new notification to users."
              }
            ],
            "operationId": "Isometrik.ChatUsersWeb.PublishController.send_notification",
            "description": "Send a new notification to users for a project in an account."
          }
        },
        "/chat/v2/users": {
          "get": {
            "tags": [
              "User"
            ],
            "summary": "Fetch list of existing users(In alphabetical order).",
            "responses": {
              "503": {
                "schema": {
                  "$ref": "#/definitions/Error_503"
                },
                "description": "Service Unavailable"
              },
              "422": {
                "schema": {
                  "$ref": "#/definitions/Error_422"
                },
                "description": "Unprocessable Entity"
              },
              "404": {
                "schema": {
                  "$ref": "#/definitions/Error_404_fetch_users"
                },
                "description": "Not Found"
              },
              "403": {
                "schema": {
                  "$ref": "#/definitions/Error_403_user"
                },
                "description": "Forbidden"
              },
              "401": {
                "schema": {
                  "$ref": "#/definitions/Error_401_fetch_users"
                },
                "description": "Unauthorized"
              },
              "200": {
                "schema": {
                  "$ref": "#/definitions/fetch_users_v2"
                },
                "description": "Ok"
              }
            },
            "parameters": [
              {
                "x-example": "lic-IMK9rZycjyx06Ho3laoQPZs5l2q3b+bzqxB",
                "type": "string",
                "required": true,
                "name": "licenseKey",
                "in": "header",
                "description": "License key to be used for fetching the list of existing users in a project in an account."
              },
              {
                "x-example": "SFMyNTY.g3QAAAACZAAEZGF0YXQAAAADbQAAAAlhY2NvdW50SWRtAAAAGDVmM2JhZDllMjFhMzhlNTcxZTQ2OGIxMW0AAAAIa2V5c2V0SWRtAAAAJDM5ZmJlZmRlLWY1ZGMtNGQ5YS05MjYwLTk2MTY2Mjc5MjJhYm0AAAAJcHJvamVjdElkbQAAACQ1YjY5MWY0OC1lNTZmLTQwNGMtYmIxZi1kYmQ5N2MzYjgzMDVkAAZzaWduZWRuBgDT17iKdwE.RzETsnQzB6aeQCkbL4GOKtu4HTWlgofp7xhnlv_fHFW",
                "type": "string",
                "required": true,
                "name": "appSecret",
                "in": "header",
                "description": "App secret associated with the license key used."
              },
              {
                "x-example": "SFMyNTY.g3QAAAACZAAEZGF0YXQAAAADbQAAAAlhY2NvdW50SWRtAAAAGDVmM2JhZDllMjFhMzhlNTcxZTQ2OGIxMW0AAAAIa2V5c2V0SWRtAAAAJDM5ZmJlZmRlLWY1ZGMtNGQ5YS05MjYwLTk2MTY2Mjc5MjJhYm0AAAAJcHJvamVjdElkbQAAACQ1YjY5MWY0OC1lNTZmLTQwNGMtYmIxZi1kYmQ5N2MzYjgzMDVkAAZzaWduZWRuBgDT17iKdwE.RzETsnQzB6aeQCkbL4GOKtu4HTWlgofp7xhnlv_fHFW",
                "type": "string",
                "required": true,
                "name": "userSecret",
                "in": "header",
                "description": "User secret associated with the license key used."
              },
              {
                "x-example": -1,
                "type": "integer",
                "required": false,
                "name": "sort",
                "in": "query",
                "description": "Specifies the sorting criteria for the returned results.Allowed values are 1 and -1.Default is descending order, -1",
                "default": -1
              },
              {
                "x-example": 0,
                "type": "integer",
                "required": false,
                "name": "skip",
                "in": "query",
                "description": "Specifies the number of results you want to skip from the beginning. (Useful in Pagination).",
                "default": 0
              },
              {
                "x-example": 20,
                "type": "integer",
                "required": false,
                "name": "limit",
                "in": "query",
                "description": "Specifies the number of results to return.",
                "default": 20
              },
              {
                "x-example": "User name",
                "type": "string",
                "required": false,
                "name": "searchTag",
                "in": "query",
                "description": "Specifies a search tag to filter the users by username."
              }
            ],
            "operationId": "Isometrik.ChatUsersWeb.UserController.fetch_users_v2",
            "description": "Fetch list of existing users(In alphabetical order) in a project for an account."
          }
        },
        "/chat/users": {
          "get": {
            "tags": [
              "User"
            ],
            "summary": "Fetch list of existing users.",
            "responses": {
              "503": {
                "schema": {
                  "$ref": "#/definitions/Error_503"
                },
                "description": "Service Unavailable"
              },
              "422": {
                "schema": {
                  "$ref": "#/definitions/Error_422"
                },
                "description": "Unprocessable Entity"
              },
              "404": {
                "schema": {
                  "$ref": "#/definitions/Error_404_fetch_users"
                },
                "description": "Not Found"
              },
              "403": {
                "schema": {
                  "$ref": "#/definitions/Error_403_user"
                },
                "description": "Forbidden"
              },
              "401": {
                "schema": {
                  "$ref": "#/definitions/Error_401_fetch_users"
                },
                "description": "Unauthorized"
              },
              "200": {
                "schema": {
                  "$ref": "#/definitions/fetch_users"
                },
                "description": "Ok"
              }
            },
            "parameters": [
              {
                "x-example": "lic-IMK9rZycjyx06Ho3laoQPZs5l2q3b+bzqxB",
                "type": "string",
                "required": true,
                "name": "licenseKey",
                "in": "header",
                "description": "License key to be used for fetching the list of existing users in a project in an account."
              },
              {
                "x-example": "SFMyNTY.g3QAAAACZAAEZGF0YXQAAAADbQAAAAlhY2NvdW50SWRtAAAAGDVmM2JhZDllMjFhMzhlNTcxZTQ2OGIxMW0AAAAIa2V5c2V0SWRtAAAAJDM5ZmJlZmRlLWY1ZGMtNGQ5YS05MjYwLTk2MTY2Mjc5MjJhYm0AAAAJcHJvamVjdElkbQAAACQ1YjY5MWY0OC1lNTZmLTQwNGMtYmIxZi1kYmQ5N2MzYjgzMDVkAAZzaWduZWRuBgDT17iKdwE.RzETsnQzB6aeQCkbL4GOKtu4HTWlgofp7xhnlv_fHFW",
                "type": "string",
                "required": true,
                "name": "appSecret",
                "in": "header",
                "description": "App secret associated with the license key used."
              },
              {
                "x-example": "SFMyNTY.g3QAAAACZAAEZGF0YXQAAAADbQAAAAlhY2NvdW50SWRtAAAAGDVmM2JhZDllMjFhMzhlNTcxZTQ2OGIxMW0AAAAIa2V5c2V0SWRtAAAAJDM5ZmJlZmRlLWY1ZGMtNGQ5YS05MjYwLTk2MTY2Mjc5MjJhYm0AAAAJcHJvamVjdElkbQAAACQ1YjY5MWY0OC1lNTZmLTQwNGMtYmIxZi1kYmQ5N2MzYjgzMDVkAAZzaWduZWRuBgDT17iKdwE.RzETsnQzB6aeQCkbL4GOKtu4HTWlgofp7xhnlv_fHFW",
                "type": "string",
                "required": true,
                "name": "userSecret",
                "in": "header",
                "description": "User secret associated with the license key used."
              },
              {
                "x-example": "SFMyNTY.g3QAAAACZAAEZGF0YW0AAAAYNWRmMjA0YTAyMWEzOGUwNjQyZDhlZjdmZAAGc2lnbmVkbgYA2zf8-W4B.JjPZ-yqmB5T0hiKVdZNzkwvwyLk_KyfBWLfsGQZ7KFg",
                "type": "string",
                "required": false,
                "name": "pageToken",
                "in": "query",
                "description": "Page token to be used for next page of users."
              },
              {
                "x-example": 10,
                "type": "integer",
                "required": false,
                "name": "count",
                "in": "query",
                "description": "Number of users to be fetched(Maximum 20).",
                "default": 20
              },
              {
                "x-example": "User name",
                "type": "string",
                "required": false,
                "name": "searchTag",
                "in": "query",
                "description": "Specifies a search tag to filter the users by username."
              }
            ],
            "operationId": "Isometrik.ChatUsersWeb.UserController.fetch_users",
            "description": "Fetch list of existing users in a project for an account."
          }
        },
        "/chat/user/unblock": {
          "post": {
            "tags": [
              "Block"
            ],
            "summary": "Unblock a user.",
            "responses": {
              "503": {
                "schema": {
                  "$ref": "#/definitions/Error_503"
                },
                "description": "Service Unavailable"
              },
              "422": {
                "schema": {
                  "$ref": "#/definitions/Error_422"
                },
                "description": "Unprocessable Entity"
              },
              "404": {
                "schema": {
                  "$ref": "#/definitions/Error_404_unblock_user"
                },
                "description": "Not Found"
              },
              "403": {
                "schema": {
                  "$ref": "#/definitions/Error_403_unblock_user"
                },
                "description": "Forbidden"
              },
              "400": {
                "schema": {
                  "$ref": "#/definitions/Error_400_unblock_user"
                },
                "description": "Bad Request"
              },
              "200": {
                "schema": {
                  "$ref": "#/definitions/unblock_user"
                },
                "description": "Ok"
              }
            },
            "parameters": [
              {
                "x-example": "lic-IMK9rZycjyx06Ho3laoQPZs5l2q3b+bzqxB",
                "type": "string",
                "required": true,
                "name": "licenseKey",
                "in": "header",
                "description": "License key to be used for unblocking a user in a project in an account."
              },
              {
                "x-example": "SFMyNTY.g3QAAAACZAAEZGF0YXQAAAADbQAAAAlhY2NvdW50SWRtAAAAGDVmM2JhZDllMjFhMzhlNTcxZTQ2OGIxMW0AAAAIa2V5c2V0SWRtAAAAJDM5ZmJlZmRlLWY1ZGMtNGQ5YS05MjYwLTk2MTY2Mjc5MjJhYm0AAAAJcHJvamVjdElkbQAAACQ1YjY5MWY0OC1lNTZmLTQwNGMtYmIxZi1kYmQ5N2MzYjgzMDVkAAZzaWduZWRuBgDT17iKdwE.RzETsnQzB6aeQCkbL4GOKtu4HTWlgofp7xhnlv_fHFW",
                "type": "string",
                "required": true,
                "name": "appSecret",
                "in": "header",
                "description": "App secret associated with the license key used."
              },
              {
                "x-example": "SFMyNTY.g3QAAAACZAAEZGF0YW0AAAAYNWZiM2MzNWYyMWEzOGVkMjI4ZWRkOTBlZAAGc2lnbmVkbgYAoNzjr3cB.P4CAS42Iq9A6KuKBpEcVEnB86fsx3FiZTHpzFz4JM0E",
                "type": "string",
                "required": true,
                "name": "userToken",
                "in": "header",
                "description": "Token of the user who is unblocking other user."
              },
              {
                "schema": {
                  "$ref": "#/definitions/body_unblock_user"
                },
                "required": true,
                "name": "body",
                "in": "body",
                "description": "Body parameters to unblock a user."
              }
            ],
            "operationId": "Isometrik.ChatUsersWeb.BlockController.unblock_user",
            "description": "Unblock a user for a project in an account."
          }
        },
        "/chat/user/presignedurl/update": {
          "get": {
            "tags": [
              "PresignedUrl"
            ],
            "summary": "Fetch presigned url for uploading profile image of an existing user.",
            "responses": {
              "503": {
                "schema": {
                  "$ref": "#/definitions/Error_503"
                },
                "description": "Service Unavailable"
              },
              "422": {
                "schema": {
                  "$ref": "#/definitions/Error_422"
                },
                "description": "Unprocessable Entity"
              },
              "404": {
                "schema": {
                  "$ref": "#/definitions/Error_404_presignedurl_update"
                },
                "description": "Not Found"
              },
              "403": {
                "schema": {
                  "$ref": "#/definitions/Error_403_presignedurl_update"
                },
                "description": "Forbidden"
              },
              "200": {
                "schema": {
                  "$ref": "#/definitions/presigned_url_update"
                },
                "description": "Ok"
              }
            },
            "parameters": [
              {
                "x-example": "lic-IMK9rZycjyx06Ho3laoQPZs5l2q3b+bzqxB",
                "type": "string",
                "required": true,
                "name": "licenseKey",
                "in": "header",
                "description": "License key to be used to fetch presigned url for uploading profile image of an existing user in a project in an account."
              },
              {
                "x-example": "SFMyNTY.g3QAAAACZAAEZGF0YXQAAAADbQAAAAlhY2NvdW50SWRtAAAAGDVmM2JhZDllMjFhMzhlNTcxZTQ2OGIxMW0AAAAIa2V5c2V0SWRtAAAAJDM5ZmJlZmRlLWY1ZGMtNGQ5YS05MjYwLTk2MTY2Mjc5MjJhYm0AAAAJcHJvamVjdElkbQAAACQ1YjY5MWY0OC1lNTZmLTQwNGMtYmIxZi1kYmQ5N2MzYjgzMDVkAAZzaWduZWRuBgDT17iKdwE.RzETsnQzB6aeQCkbL4GOKtu4HTWlgofp7xhnlv_fHFW",
                "type": "string",
                "required": true,
                "name": "appSecret",
                "in": "header",
                "description": "App secret associated with the license key used."
              },
              {
                "x-example": "SFMyNTY.g3QAAAACZAAEZGF0YW0AAAAYNWZiM2MzNWYyMWEzOGVkMjI4ZWRkOTBlZAAGc2lnbmVkbgYAoNzjr3cB.P4CAS42Iq9A6KuKBpEcVEnB86fsx3FiZTHpzFz4JM0E",
                "type": "string",
                "required": true,
                "name": "userToken",
                "in": "header",
                "description": "Token of the user who is fetching presigned url for uploading profile image of an existing user."
              },
              {
                "x-example": "png",
                "type": "string",
                "required": true,
                "name": "mediaExtension",
                "in": "query",
                "description": "Extension of image to be uploaded as profile image of user(Without dot)."
              }
            ],
            "operationId": "Isometrik.ChatUsersWeb.PresignedUrlController.presigned_url_update",
            "description": "Fetch presigned url for uploading profile image of an existing user in a project in an account."
          }
        },
        "/chat/user/presignedurl/create": {
          "get": {
            "tags": [
              "PresignedUrl"
            ],
            "summary": "Fetch presigned url for uploading profile image of a new user.",
            "responses": {
              "503": {
                "schema": {
                  "$ref": "#/definitions/Error_503"
                },
                "description": "Service Unavailable"
              },
              "422": {
                "schema": {
                  "$ref": "#/definitions/Error_422"
                },
                "description": "Unprocessable Entity"
              },
              "404": {
                "schema": {
                  "$ref": "#/definitions/Error_404_presignedurl_create"
                },
                "description": "Not Found"
              },
              "403": {
                "schema": {
                  "$ref": "#/definitions/Error_403_presignedurl_create"
                },
                "description": "Forbidden"
              },
              "200": {
                "schema": {
                  "$ref": "#/definitions/presigned_url_create"
                },
                "description": "Ok"
              }
            },
            "parameters": [
              {
                "x-example": "lic-IMK9rZycjyx06Ho3laoQPZs5l2q3b+bzqxB",
                "type": "string",
                "required": true,
                "name": "licenseKey",
                "in": "header",
                "description": "License key to be used to fetch presigned url for uploading profile image of a new user in a project in an account."
              },
              {
                "x-example": "SFMyNTY.g3QAAAACZAAEZGF0YXQAAAADbQAAAAlhY2NvdW50SWRtAAAAGDVmM2JhZDllMjFhMzhlNTcxZTQ2OGIxMW0AAAAIa2V5c2V0SWRtAAAAJDM5ZmJlZmRlLWY1ZGMtNGQ5YS05MjYwLTk2MTY2Mjc5MjJhYm0AAAAJcHJvamVjdElkbQAAACQ1YjY5MWY0OC1lNTZmLTQwNGMtYmIxZi1kYmQ5N2MzYjgzMDVkAAZzaWduZWRuBgDT17iKdwE.RzETsnQzB6aeQCkbL4GOKtu4HTWlgofp7xhnlv_fHFW",
                "type": "string",
                "required": true,
                "name": "appSecret",
                "in": "header",
                "description": "App secret associated with the license key used."
              },
              {
                "x-example": "SFMyNTY.g3QAAAACZAAEZGF0YXQAAAADbQAAAAlhY2NvdW50SWRtAAAAGDVmM2JhZDllMjFhMzhlNTcxZTQ2OGIxMW0AAAAIa2V5c2V0SWRtAAAAJDM5ZmJlZmRlLWY1ZGMtNGQ5YS05MjYwLTk2MTY2Mjc5MjJhYm0AAAAJcHJvamVjdElkbQAAACQ1YjY5MWY0OC1lNTZmLTQwNGMtYmIxZi1kYmQ5N2MzYjgzMDVkAAZzaWduZWRuBgDT17iKdwE.RzETsnQzB6aeQCkbL4GOKtu4HTWlgofp7xhnlv_fHFW",
                "type": "string",
                "required": true,
                "name": "userSecret",
                "in": "header",
                "description": "User secret associated with the license key used."
              },
              {
                "x-example": "New Conversation",
                "type": "string",
                "required": true,
                "name": "userIdentifier",
                "in": "query",
                "description": "Identifier of the user for which to fetch presigned url."
              },
              {
                "x-example": "png",
                "type": "string",
                "required": true,
                "name": "mediaExtension",
                "in": "query",
                "description": "Extension of image to be uploaded as profile image of user(Without dot)."
              }
            ],
            "operationId": "Isometrik.ChatUsersWeb.PresignedUrlController.presigned_url_create",
            "description": "Fetch presigned url for uploading profile image of a new user in a project in an account."
          }
        },
        "/chat/user/nonblock": {
          "get": {
            "tags": [
              "Block"
            ],
            "summary": "Get non blocked users.",
            "responses": {
              "503": {
                "schema": {
                  "$ref": "#/definitions/Error_503"
                },
                "description": "Service Unavailable"
              },
              "422": {
                "schema": {
                  "$ref": "#/definitions/Error_422"
                },
                "description": "Unprocessable Entity"
              },
              "404": {
                "schema": {
                  "$ref": "#/definitions/Error_404_get_non_blocked_users"
                },
                "description": "Not Found"
              },
              "403": {
                "schema": {
                  "$ref": "#/definitions/Error_403_block_unblock_user"
                },
                "description": "Forbidden"
              },
              "200": {
                "schema": {
                  "$ref": "#/definitions/get_non_blocked_users"
                },
                "description": "Ok"
              }
            },
            "parameters": [
              {
                "x-example": "lic-IMK9rZycjyx06Ho3laoQPZs5l2q3b+bzqxB",
                "type": "string",
                "required": true,
                "name": "licenseKey",
                "in": "header",
                "description": "License key to be used for fetching non blocked users in a project in an account."
              },
              {
                "x-example": "SFMyNTY.g3QAAAACZAAEZGF0YXQAAAADbQAAAAlhY2NvdW50SWRtAAAAGDVmM2JhZDllMjFhMzhlNTcxZTQ2OGIxMW0AAAAIa2V5c2V0SWRtAAAAJDM5ZmJlZmRlLWY1ZGMtNGQ5YS05MjYwLTk2MTY2Mjc5MjJhYm0AAAAJcHJvamVjdElkbQAAACQ1YjY5MWY0OC1lNTZmLTQwNGMtYmIxZi1kYmQ5N2MzYjgzMDVkAAZzaWduZWRuBgDT17iKdwE.RzETsnQzB6aeQCkbL4GOKtu4HTWlgofp7xhnlv_fHFW",
                "type": "string",
                "required": true,
                "name": "appSecret",
                "in": "header",
                "description": "App secret associated with the license key used."
              },
              {
                "x-example": "SFMyNTY.g3QAAAACZAAEZGF0YW0AAAAYNWZiM2MzNWYyMWEzOGVkMjI4ZWRkOTBlZAAGc2lnbmVkbgYAoNzjr3cB.P4CAS42Iq9A6KuKBpEcVEnB86fsx3FiZTHpzFz4JM0E",
                "type": "string",
                "required": true,
                "name": "userToken",
                "in": "header",
                "description": "Token of the user whose non blocked users are to be fetched."
              },
              {
                "x-example": -1,
                "type": "integer",
                "required": false,
                "name": "sort",
                "in": "query",
                "description": "Specifies the sorting criteria for the returned results.Allowed values are 1 and -1.Default is descending order, -1",
                "default": -1
              },
              {
                "x-example": 0,
                "type": "integer",
                "required": false,
                "name": "skip",
                "in": "query",
                "description": "Specifies the number of results you want to skip from the beginning. (Useful in Pagination).",
                "default": 0
              },
              {
                "x-example": 20,
                "type": "integer",
                "required": false,
                "name": "limit",
                "in": "query",
                "description": "Specifies the number of results to return.",
                "default": 20
              },
              {
                "x-example": "User name",
                "type": "string",
                "required": false,
                "name": "searchTag",
                "in": "query",
                "description": "Specifies a search tag to filter the non blocked users by username."
              }
            ],
            "operationId": "Isometrik.ChatUsersWeb.BlockController.get_non_blocked_users",
            "description": "Get non blocked users in a project in an account."
          }
        },
        "/chat/user/details": {
          "get": {
            "tags": [
              "User"
            ],
            "summary": "Fetch user details for an existing user.",
            "responses": {
              "503": {
                "schema": {
                  "$ref": "#/definitions/Error_503"
                },
                "description": "Service Unavailable"
              },
              "422": {
                "schema": {
                  "$ref": "#/definitions/Error_422"
                },
                "description": "Unprocessable Entity"
              },
              "404": {
                "schema": {
                  "$ref": "#/definitions/Error_404_fetch_edit_delete_user"
                },
                "description": "Not Found"
              },
              "403": {
                "schema": {
                  "$ref": "#/definitions/Error_403_user"
                },
                "description": "Forbidden"
              },
              "200": {
                "schema": {
                  "$ref": "#/definitions/fetch_user_details"
                },
                "description": "Ok"
              }
            },
            "parameters": [
              {
                "x-example": "lic-IMK9rZycjyx06Ho3laoQPZs5l2q3b+bzqxB",
                "type": "string",
                "required": true,
                "name": "licenseKey",
                "in": "header",
                "description": "License key to be used for fetching an existing user details in a project in an account."
              },
              {
                "x-example": "SFMyNTY.g3QAAAACZAAEZGF0YXQAAAADbQAAAAlhY2NvdW50SWRtAAAAGDVmM2JhZDllMjFhMzhlNTcxZTQ2OGIxMW0AAAAIa2V5c2V0SWRtAAAAJDM5ZmJlZmRlLWY1ZGMtNGQ5YS05MjYwLTk2MTY2Mjc5MjJhYm0AAAAJcHJvamVjdElkbQAAACQ1YjY5MWY0OC1lNTZmLTQwNGMtYmIxZi1kYmQ5N2MzYjgzMDVkAAZzaWduZWRuBgDT17iKdwE.RzETsnQzB6aeQCkbL4GOKtu4HTWlgofp7xhnlv_fHFW",
                "type": "string",
                "required": true,
                "name": "appSecret",
                "in": "header",
                "description": "App secret associated with the license key used."
              },
              {
                "x-example": "SFMyNTY.g3QAAAACZAAEZGF0YW0AAAAYNWZiM2MzNWYyMWEzOGVkMjI4ZWRkOTBlZAAGc2lnbmVkbgYAoNzjr3cB.P4CAS42Iq9A6KuKBpEcVEnB86fsx3FiZTHpzFz4JM0E",
                "type": "string",
                "required": true,
                "name": "userToken",
                "in": "header",
                "description": "Token of the user whose details are to be fetched."
              }
            ],
            "operationId": "Isometrik.ChatUsersWeb.UserController.fetch_user_details",
            "description": "Fetch user details for an existing user in a project for an account."
          }
        },
        "/chat/user/credentials/decode": {
          "get": {
            "tags": [
              "User"
            ],
            "summary": "Decode project credentials for an existing project.",
            "responses": {
              "503": {
                "schema": {
                  "$ref": "#/definitions/Error_503"
                },
                "description": "Service Unavailable"
              },
              "422": {
                "schema": {
                  "$ref": "#/definitions/Error_422"
                },
                "description": "Unprocessable Entity"
              },
              "404": {
                "schema": {
                  "$ref": "#/definitions/Error_404_decode_project_credentials"
                },
                "description": "Not Found"
              },
              "403": {
                "schema": {
                  "$ref": "#/definitions/Error_403_user"
                },
                "description": "Forbidden"
              },
              "200": {
                "schema": {
                  "$ref": "#/definitions/decode_project_credentials"
                },
                "description": "Ok"
              }
            },
            "parameters": [
              {
                "x-example": "lic-IMK9rZycjyx06Ho3laoQPZs5l2q3b+bzqxB",
                "type": "string",
                "required": true,
                "name": "licenseKey",
                "in": "header",
                "description": "License key to be used for decoding credentials of a project in an account."
              },
              {
                "x-example": "SFMyNTY.g3QAAAACZAAEZGF0YXQAAAADbQAAAAlhY2NvdW50SWRtAAAAGDVmM2JhZDllMjFhMzhlNTcxZTQ2OGIxMW0AAAAIa2V5c2V0SWRtAAAAJDM5ZmJlZmRlLWY1ZGMtNGQ5YS05MjYwLTk2MTY2Mjc5MjJhYm0AAAAJcHJvamVjdElkbQAAACQ1YjY5MWY0OC1lNTZmLTQwNGMtYmIxZi1kYmQ5N2MzYjgzMDVkAAZzaWduZWRuBgDT17iKdwE.RzETsnQzB6aeQCkbL4GOKtu4HTWlgofp7xhnlv_fHFW",
                "type": "string",
                "required": true,
                "name": "appSecret",
                "in": "header",
                "description": "App secret associated with the license key used."
              }
            ],
            "operationId": "Isometrik.ChatUsersWeb.UserController.decode_project_credentials",
            "description": "Decode project credentials for an existing project in a project for an account."
          }
        },
        "/chat/user/credentials": {
          "get": {
            "tags": [
              "User"
            ],
            "summary": "Fetch user credentials for an existing user.",
            "responses": {
              "503": {
                "schema": {
                  "$ref": "#/definitions/Error_503"
                },
                "description": "Service Unavailable"
              },
              "422": {
                "schema": {
                  "$ref": "#/definitions/Error_422"
                },
                "description": "Unprocessable Entity"
              },
              "404": {
                "schema": {
                  "$ref": "#/definitions/Error_404_fetch_user_credentials"
                },
                "description": "Not Found"
              },
              "403": {
                "schema": {
                  "$ref": "#/definitions/Error_403_user"
                },
                "description": "Forbidden"
              },
              "200": {
                "schema": {
                  "$ref": "#/definitions/fetch_user_credentials"
                },
                "description": "Ok"
              }
            },
            "parameters": [
              {
                "x-example": "lic-IMK9rZycjyx06Ho3laoQPZs5l2q3b+bzqxB",
                "type": "string",
                "required": true,
                "name": "licenseKey",
                "in": "header",
                "description": "License key to be used for fetching an existing user credentials in a project in an account."
              },
              {
                "x-example": "SFMyNTY.g3QAAAACZAAEZGF0YXQAAAADbQAAAAlhY2NvdW50SWRtAAAAGDVmM2JhZDllMjFhMzhlNTcxZTQ2OGIxMW0AAAAIa2V5c2V0SWRtAAAAJDM5ZmJlZmRlLWY1ZGMtNGQ5YS05MjYwLTk2MTY2Mjc5MjJhYm0AAAAJcHJvamVjdElkbQAAACQ1YjY5MWY0OC1lNTZmLTQwNGMtYmIxZi1kYmQ5N2MzYjgzMDVkAAZzaWduZWRuBgDT17iKdwE.RzETsnQzB6aeQCkbL4GOKtu4HTWlgofp7xhnlv_fHFW",
                "type": "string",
                "required": true,
                "name": "appSecret",
                "in": "header",
                "description": "App secret associated with the license key used."
              },
              {
                "x-example": "SFMyNTY.g3QAAAACZAAEZGF0YW0AAAAYNWZiM2MzNWYyMWEzOGVkMjI4ZWRkOTBlZAAGc2lnbmVkbgYAoNzjr3cB.P4CAS42Iq9A6KuKBpEcVEnB86fsx3FiZTHpzFz4JM0E",
                "type": "string",
                "required": true,
                "name": "userToken",
                "in": "header",
                "description": "Token of the user whose credentials are to be fetched."
              }
            ],
            "operationId": "Isometrik.ChatUsersWeb.UserController.fetch_user_credentials",
            "description": "Fetch user credentials for an existing user in a project for an account."
          }
        },
        "/chat/user/block/count": {
          "get": {
            "tags": [
              "Block"
            ],
            "summary": "Get blocked users count.",
            "responses": {
              "503": {
                "schema": {
                  "$ref": "#/definitions/Error_503"
                },
                "description": "Service Unavailable"
              },
              "422": {
                "schema": {
                  "$ref": "#/definitions/Error_422"
                },
                "description": "Unprocessable Entity"
              },
              "404": {
                "schema": {
                  "$ref": "#/definitions/Error_404_get_blocked_users_count"
                },
                "description": "Not Found"
              },
              "403": {
                "schema": {
                  "$ref": "#/definitions/Error_403_block_unblock_user"
                },
                "description": "Forbidden"
              },
              "200": {
                "schema": {
                  "$ref": "#/definitions/get_blocked_users_count"
                },
                "description": "Ok"
              }
            },
            "parameters": [
              {
                "x-example": "lic-IMK9rZycjyx06Ho3laoQPZs5l2q3b+bzqxB",
                "type": "string",
                "required": true,
                "name": "licenseKey",
                "in": "header",
                "description": "License key to be used for fetching blocked users count in a project in an account."
              },
              {
                "x-example": "SFMyNTY.g3QAAAACZAAEZGF0YXQAAAADbQAAAAlhY2NvdW50SWRtAAAAGDVmM2JhZDllMjFhMzhlNTcxZTQ2OGIxMW0AAAAIa2V5c2V0SWRtAAAAJDM5ZmJlZmRlLWY1ZGMtNGQ5YS05MjYwLTk2MTY2Mjc5MjJhYm0AAAAJcHJvamVjdElkbQAAACQ1YjY5MWY0OC1lNTZmLTQwNGMtYmIxZi1kYmQ5N2MzYjgzMDVkAAZzaWduZWRuBgDT17iKdwE.RzETsnQzB6aeQCkbL4GOKtu4HTWlgofp7xhnlv_fHFW",
                "type": "string",
                "required": true,
                "name": "appSecret",
                "in": "header",
                "description": "App secret associated with the license key used."
              },
              {
                "x-example": "SFMyNTY.g3QAAAACZAAEZGF0YW0AAAAYNWZiM2MzNWYyMWEzOGVkMjI4ZWRkOTBlZAAGc2lnbmVkbgYAoNzjr3cB.P4CAS42Iq9A6KuKBpEcVEnB86fsx3FiZTHpzFz4JM0E",
                "type": "string",
                "required": true,
                "name": "userToken",
                "in": "header",
                "description": "Token of the user whose blocked users count is to be fetched."
              }
            ],
            "operationId": "Isometrik.ChatUsersWeb.BlockController.get_blocked_users_count",
            "description": "Get blocked users count in a project in an account."
          }
        },
        "/chat/user/block": {
          "post": {
            "tags": [
              "Block"
            ],
            "summary": "Block a user.",
            "responses": {
              "503": {
                "schema": {
                  "$ref": "#/definitions/Error_503"
                },
                "description": "Service Unavailable"
              },
              "422": {
                "schema": {
                  "$ref": "#/definitions/Error_422"
                },
                "description": "Unprocessable Entity"
              },
              "404": {
                "schema": {
                  "$ref": "#/definitions/Error_404_block_user"
                },
                "description": "Not Found"
              },
              "403": {
                "schema": {
                  "$ref": "#/definitions/Error_403_block_user"
                },
                "description": "Forbidden"
              },
              "400": {
                "schema": {
                  "$ref": "#/definitions/Error_400_block_user"
                },
                "description": "Bad Request"
              },
              "200": {
                "schema": {
                  "$ref": "#/definitions/block_user"
                },
                "description": "Ok"
              }
            },
            "parameters": [
              {
                "x-example": "lic-IMK9rZycjyx06Ho3laoQPZs5l2q3b+bzqxB",
                "type": "string",
                "required": true,
                "name": "licenseKey",
                "in": "header",
                "description": "License key to be used for blocking a user in a project in an account."
              },
              {
                "x-example": "SFMyNTY.g3QAAAACZAAEZGF0YXQAAAADbQAAAAlhY2NvdW50SWRtAAAAGDVmM2JhZDllMjFhMzhlNTcxZTQ2OGIxMW0AAAAIa2V5c2V0SWRtAAAAJDM5ZmJlZmRlLWY1ZGMtNGQ5YS05MjYwLTk2MTY2Mjc5MjJhYm0AAAAJcHJvamVjdElkbQAAACQ1YjY5MWY0OC1lNTZmLTQwNGMtYmIxZi1kYmQ5N2MzYjgzMDVkAAZzaWduZWRuBgDT17iKdwE.RzETsnQzB6aeQCkbL4GOKtu4HTWlgofp7xhnlv_fHFW",
                "type": "string",
                "required": true,
                "name": "appSecret",
                "in": "header",
                "description": "App secret associated with the license key used."
              },
              {
                "x-example": "SFMyNTY.g3QAAAACZAAEZGF0YW0AAAAYNWZiM2MzNWYyMWEzOGVkMjI4ZWRkOTBlZAAGc2lnbmVkbgYAoNzjr3cB.P4CAS42Iq9A6KuKBpEcVEnB86fsx3FiZTHpzFz4JM0E",
                "type": "string",
                "required": true,
                "name": "userToken",
                "in": "header",
                "description": "Token of the user who is blocking other user."
              },
              {
                "schema": {
                  "$ref": "#/definitions/body_block_user"
                },
                "required": true,
                "name": "body",
                "in": "body",
                "description": "Body parameters to block a user."
              }
            ],
            "operationId": "Isometrik.ChatUsersWeb.BlockController.block_user",
            "description": "Block a user for a project in an account."
          },
          "get": {
            "tags": [
              "Block"
            ],
            "summary": "Get blocked users.",
            "responses": {
              "503": {
                "schema": {
                  "$ref": "#/definitions/Error_503"
                },
                "description": "Service Unavailable"
              },
              "422": {
                "schema": {
                  "$ref": "#/definitions/Error_422"
                },
                "description": "Unprocessable Entity"
              },
              "404": {
                "schema": {
                  "$ref": "#/definitions/Error_404_get_blocked_users"
                },
                "description": "Not Found"
              },
              "403": {
                "schema": {
                  "$ref": "#/definitions/Error_403_block_unblock_user"
                },
                "description": "Forbidden"
              },
              "200": {
                "schema": {
                  "$ref": "#/definitions/get_blocked_users"
                },
                "description": "Ok"
              }
            },
            "parameters": [
              {
                "x-example": "lic-IMK9rZycjyx06Ho3laoQPZs5l2q3b+bzqxB",
                "type": "string",
                "required": true,
                "name": "licenseKey",
                "in": "header",
                "description": "License key to be used for fetching blocked users in a project in an account."
              },
              {
                "x-example": "SFMyNTY.g3QAAAACZAAEZGF0YXQAAAADbQAAAAlhY2NvdW50SWRtAAAAGDVmM2JhZDllMjFhMzhlNTcxZTQ2OGIxMW0AAAAIa2V5c2V0SWRtAAAAJDM5ZmJlZmRlLWY1ZGMtNGQ5YS05MjYwLTk2MTY2Mjc5MjJhYm0AAAAJcHJvamVjdElkbQAAACQ1YjY5MWY0OC1lNTZmLTQwNGMtYmIxZi1kYmQ5N2MzYjgzMDVkAAZzaWduZWRuBgDT17iKdwE.RzETsnQzB6aeQCkbL4GOKtu4HTWlgofp7xhnlv_fHFW",
                "type": "string",
                "required": true,
                "name": "appSecret",
                "in": "header",
                "description": "App secret associated with the license key used."
              },
              {
                "type": "string",
                "required": false,
                "name": "userToken",
                "in": "header",
                "description": "SFMyNTY.g3QAAAACZAAEZGF0YW0AAAAYNWZiM2MzNWYyMWEzOGVkMjI4ZWRkOTBlZAAGc2lnbmVkbgYAoNzjr3cB.P4CAS42Iq9A6KuKBpEcVEnB86fsx3FiZTHpzFz4JM0E"
              },
              {
                "x-example": 0,
                "type": "integer",
                "required": false,
                "name": "skip",
                "in": "query",
                "description": "Specifies the number of results you want to skip from the beginning. (Useful in Pagination).",
                "default": 0
              },
              {
                "x-example": 20,
                "type": "integer",
                "required": false,
                "name": "limit",
                "in": "query",
                "description": "Specifies the number of results to return.",
                "default": 20
              },
              {
                "x-example": "User name",
                "type": "string",
                "required": false,
                "name": "searchTag",
                "in": "query",
                "description": "Specifies a search tag to filter the blocked users by username."
              }
            ],
            "operationId": "Isometrik.ChatUsersWeb.BlockController.get_blocked_users",
            "description": "Get blocked users in a project in an account."
          }
        },
        "/chat/user/authenticate": {
          "post": {
            "tags": [
              "User"
            ],
            "summary": "Authenticate a user.",
            "responses": {
              "503": {
                "schema": {
                  "$ref": "#/definitions/Error_503"
                },
                "description": "Service Unavailable"
              },
              "422": {
                "schema": {
                  "$ref": "#/definitions/Error_422"
                },
                "description": "Unprocessable Entity"
              },
              "404": {
                "schema": {
                  "$ref": "#/definitions/Error_404_authenticate_user"
                },
                "description": "Not Found"
              },
              "403": {
                "schema": {
                  "$ref": "#/definitions/Error_403_user"
                },
                "description": "Forbidden"
              },
              "401": {
                "schema": {
                  "$ref": "#/definitions/Error_401_authenticate_user"
                },
                "description": "Unauthorized"
              },
              "200": {
                "schema": {
                  "$ref": "#/definitions/authenticate_user"
                },
                "description": "Ok"
              }
            },
            "parameters": [
              {
                "x-example": "lic-IMK9rZycjyx06Ho3laoQPZs5l2q3b+bzqxB",
                "type": "string",
                "required": true,
                "name": "licenseKey",
                "in": "header",
                "description": "License key to be used for authenticating user in a project in an account."
              },
              {
                "x-example": "SFMyNTY.g3QAAAACZAAEZGF0YXQAAAADbQAAAAlhY2NvdW50SWRtAAAAGDVmM2JhZDllMjFhMzhlNTcxZTQ2OGIxMW0AAAAIa2V5c2V0SWRtAAAAJDM5ZmJlZmRlLWY1ZGMtNGQ5YS05MjYwLTk2MTY2Mjc5MjJhYm0AAAAJcHJvamVjdElkbQAAACQ1YjY5MWY0OC1lNTZmLTQwNGMtYmIxZi1kYmQ5N2MzYjgzMDVkAAZzaWduZWRuBgDT17iKdwE.RzETsnQzB6aeQCkbL4GOKtu4HTWlgofp7xhnlv_fHFW",
                "type": "string",
                "required": true,
                "name": "appSecret",
                "in": "header",
                "description": "App secret associated with the license key used."
              },
              {
                "x-example": "SFMyNTY.g3QAAAACZAAEZGF0YXQAAAADbQAAAAlhY2NvdW50SWRtAAAAGDVmM2JhZDllMjFhMzhlNTcxZTQ2OGIxMW0AAAAIa2V5c2V0SWRtAAAAJDM5ZmJlZmRlLWY1ZGMtNGQ5YS05MjYwLTk2MTY2Mjc5MjJhYm0AAAAJcHJvamVjdElkbQAAACQ1YjY5MWY0OC1lNTZmLTQwNGMtYmIxZi1kYmQ5N2MzYjgzMDVkAAZzaWduZWRuBgDT17iKdwE.RzETsnQzB6aeQCkbL4GOKtu4HTWlgofp7xhnlv_fHFW",
                "type": "string",
                "required": true,
                "name": "userSecret",
                "in": "header",
                "description": "User secret associated with the license key used."
              },
              {
                "schema": {
                  "$ref": "#/definitions/body_authenticate_user"
                },
                "required": true,
                "name": "body",
                "in": "body",
                "description": "Body parameters to authenticate a user."
              }
            ],
            "operationId": "Isometrik.ChatUsersWeb.UserController.authenticate_user",
            "description": "Authenticate a user for a project in an account."
          }
        },
        "/chat/user/alert/settings": {
          "patch": {
            "tags": [
              "User"
            ],
            "summary": "Update alert settings for a user.",
            "responses": {
              "503": {
                "schema": {
                  "$ref": "#/definitions/Error_503"
                },
                "description": "Service Unavailable"
              },
              "422": {
                "schema": {
                  "$ref": "#/definitions/Error_422"
                },
                "description": "Unprocessable Entity"
              },
              "404": {
                "schema": {
                  "$ref": "#/definitions/Error_404_fetch_edit_delete_user"
                },
                "description": "Not Found"
              },
              "403": {
                "schema": {
                  "$ref": "#/definitions/Error_403_update_user_alert_settings"
                },
                "description": "Forbidden"
              },
              "200": {
                "schema": {
                  "$ref": "#/definitions/update_user_alert_settings"
                },
                "description": "Ok"
              }
            },
            "parameters": [
              {
                "x-example": "lic-IMK9rZycjyx06Ho3laoQPZs5l2q3b+bzqxB",
                "type": "string",
                "required": true,
                "name": "licenseKey",
                "in": "header",
                "description": "License key to be used for updating alert settings for a user in a project in an account."
              },
              {
                "x-example": "SFMyNTY.g3QAAAACZAAEZGF0YXQAAAADbQAAAAlhY2NvdW50SWRtAAAAGDVmM2JhZDllMjFhMzhlNTcxZTQ2OGIxMW0AAAAIa2V5c2V0SWRtAAAAJDM5ZmJlZmRlLWY1ZGMtNGQ5YS05MjYwLTk2MTY2Mjc5MjJhYm0AAAAJcHJvamVjdElkbQAAACQ1YjY5MWY0OC1lNTZmLTQwNGMtYmIxZi1kYmQ5N2MzYjgzMDVkAAZzaWduZWRuBgDT17iKdwE.RzETsnQzB6aeQCkbL4GOKtu4HTWlgofp7xhnlv_fHFW",
                "type": "string",
                "required": true,
                "name": "appSecret",
                "in": "header",
                "description": "App secret associated with the license key used."
              },
              {
                "x-example": "SFMyNTY.g3QAAAACZAAEZGF0YW0AAAAYNWZiM2MzNWYyMWEzOGVkMjI4ZWRkOTBlZAAGc2lnbmVkbgYAoNzjr3cB.P4CAS42Iq9A6KuKBpEcVEnB86fsx3FiZTHpzFz4JM0E",
                "type": "string",
                "required": true,
                "name": "userToken",
                "in": "header",
                "description": "Token of the user whose alert settings are to be updated."
              },
              {
                "schema": {
                  "$ref": "#/definitions/body_update_user_alert_settings"
                },
                "required": true,
                "name": "body",
                "in": "body",
                "description": "Body parameters to update alert settings for a user."
              }
            ],
            "operationId": "Isometrik.ChatUsersWeb.UserController.update_user_alert_settings",
            "description": "Update alert settings for a user in a project for an account."
          }
        },
        "/chat/user": {
          "post": {
            "tags": [
              "User"
            ],
            "summary": "Create a new user.",
            "responses": {
              "503": {
                "schema": {
                  "$ref": "#/definitions/Error_503"
                },
                "description": "Service Unavailable"
              },
              "422": {
                "schema": {
                  "$ref": "#/definitions/Error_422"
                },
                "description": "Unprocessable Entity"
              },
              "409": {
                "schema": {
                  "$ref": "#/definitions/Error_409_edit_create_user"
                },
                "description": "Conflict"
              },
              "404": {
                "schema": {
                  "$ref": "#/definitions/Error_404_create_user"
                },
                "description": "Not Found"
              },
              "403": {
                "schema": {
                  "$ref": "#/definitions/Error_403_create_user"
                },
                "description": "Forbidden"
              },
              "401": {
                "schema": {
                  "$ref": "#/definitions/Error_401_create_user"
                },
                "description": "Unauthorized"
              },
              "201": {
                "schema": {
                  "$ref": "#/definitions/create_user"
                },
                "description": "Created"
              }
            },
            "parameters": [
              {
                "x-example": "lic-IMK9rZycjyx06Ho3laoQPZs5l2q3b+bzqxB",
                "type": "string",
                "required": true,
                "name": "licenseKey",
                "in": "header",
                "description": "License key to be used for creating new user in a project in an account."
              },
              {
                "x-example": "SFMyNTY.g3QAAAACZAAEZGF0YXQAAAADbQAAAAlhY2NvdW50SWRtAAAAGDVmM2JhZDllMjFhMzhlNTcxZTQ2OGIxMW0AAAAIa2V5c2V0SWRtAAAAJDM5ZmJlZmRlLWY1ZGMtNGQ5YS05MjYwLTk2MTY2Mjc5MjJhYm0AAAAJcHJvamVjdElkbQAAACQ1YjY5MWY0OC1lNTZmLTQwNGMtYmIxZi1kYmQ5N2MzYjgzMDVkAAZzaWduZWRuBgDT17iKdwE.RzETsnQzB6aeQCkbL4GOKtu4HTWlgofp7xhnlv_fHFW",
                "type": "string",
                "required": true,
                "name": "appSecret",
                "in": "header",
                "description": "App secret associated with the license key used."
              },
              {
                "x-example": "SFMyNTY.g3QAAAACZAAEZGF0YXQAAAADbQAAAAlhY2NvdW50SWRtAAAAGDVmM2JhZDllMjFhMzhlNTcxZTQ2OGIxMW0AAAAIa2V5c2V0SWRtAAAAJDM5ZmJlZmRlLWY1ZGMtNGQ5YS05MjYwLTk2MTY2Mjc5MjJhYm0AAAAJcHJvamVjdElkbQAAACQ1YjY5MWY0OC1lNTZmLTQwNGMtYmIxZi1kYmQ5N2MzYjgzMDVkAAZzaWduZWRuBgDT17iKdwE.RzETsnQzB6aeQCkbL4GOKtu4HTWlgofp7xhnlv_fHFW",
                "type": "string",
                "required": true,
                "name": "userSecret",
                "in": "header",
                "description": "User secret associated with the license key used."
              },
              {
                "schema": {
                  "$ref": "#/definitions/body_create_user"
                },
                "required": true,
                "name": "body",
                "in": "body",
                "description": "Body parameters to create a new user."
              }
            ],
            "operationId": "Isometrik.ChatUsersWeb.UserController.create_user",
            "description": "Create a new user for a project in an account."
          },
          "patch": {
            "tags": [
              "User"
            ],
            "summary": "Update an existing user.",
            "responses": {
              "503": {
                "schema": {
                  "$ref": "#/definitions/Error_503"
                },
                "description": "Service Unavailable"
              },
              "422": {
                "schema": {
                  "$ref": "#/definitions/Error_422"
                },
                "description": "Unprocessable Entity"
              },
              "409": {
                "schema": {
                  "$ref": "#/definitions/Error_409_edit_create_user"
                },
                "description": "Conflict"
              },
              "404": {
                "schema": {
                  "$ref": "#/definitions/Error_404_fetch_edit_delete_user"
                },
                "description": "Not Found"
              },
              "403": {
                "schema": {
                  "$ref": "#/definitions/Error_403_edit_delete_user"
                },
                "description": "Forbidden"
              },
              "400": {
                "schema": {
                  "$ref": "#/definitions/Error_400_edit_user"
                },
                "description": "Bad Request"
              },
              "200": {
                "schema": {
                  "$ref": "#/definitions/edit_user"
                },
                "description": "Ok"
              }
            },
            "parameters": [
              {
                "x-example": "lic-IMK9rZycjyx06Ho3laoQPZs5l2q3b+bzqxB",
                "type": "string",
                "required": true,
                "name": "licenseKey",
                "in": "header",
                "description": "License key to be used for updating an existing user details in a project in an account."
              },
              {
                "x-example": "SFMyNTY.g3QAAAACZAAEZGF0YXQAAAADbQAAAAlhY2NvdW50SWRtAAAAGDVmM2JhZDllMjFhMzhlNTcxZTQ2OGIxMW0AAAAIa2V5c2V0SWRtAAAAJDM5ZmJlZmRlLWY1ZGMtNGQ5YS05MjYwLTk2MTY2Mjc5MjJhYm0AAAAJcHJvamVjdElkbQAAACQ1YjY5MWY0OC1lNTZmLTQwNGMtYmIxZi1kYmQ5N2MzYjgzMDVkAAZzaWduZWRuBgDT17iKdwE.RzETsnQzB6aeQCkbL4GOKtu4HTWlgofp7xhnlv_fHFW",
                "type": "string",
                "required": true,
                "name": "appSecret",
                "in": "header",
                "description": "App secret associated with the license key used."
              },
              {
                "x-example": "SFMyNTY.g3QAAAACZAAEZGF0YW0AAAAYNWZiM2MzNWYyMWEzOGVkMjI4ZWRkOTBlZAAGc2lnbmVkbgYAoNzjr3cB.P4CAS42Iq9A6KuKBpEcVEnB86fsx3FiZTHpzFz4JM0E",
                "type": "string",
                "required": true,
                "name": "userToken",
                "in": "header",
                "description": "Token of the user whose details are to be updated."
              },
              {
                "schema": {
                  "$ref": "#/definitions/body_edit_user"
                },
                "required": true,
                "name": "body",
                "in": "body",
                "description": "Body parameters to update an existing user."
              }
            ],
            "operationId": "Isometrik.ChatUsersWeb.UserController.edit_user",
            "description": "Update an existing user in a project for an account."
          },
          "delete": {
            "tags": [
              "User"
            ],
            "summary": "Delete an existing user.",
            "responses": {
              "503": {
                "schema": {
                  "$ref": "#/definitions/Error_503"
                },
                "description": "Service Unavailable"
              },
              "422": {
                "schema": {
                  "$ref": "#/definitions/Error_422"
                },
                "description": "Unprocessable Entity"
              },
              "404": {
                "schema": {
                  "$ref": "#/definitions/Error_404_fetch_edit_delete_user"
                },
                "description": "Not Found"
              },
              "403": {
                "schema": {
                  "$ref": "#/definitions/Error_403_edit_delete_user"
                },
                "description": "Forbidden"
              },
              "200": {
                "schema": {
                  "$ref": "#/definitions/delete_user"
                },
                "description": "Ok"
              }
            },
            "parameters": [
              {
                "x-example": "lic-IMK9rZycjyx06Ho3laoQPZs5l2q3b+bzqxB",
                "type": "string",
                "required": true,
                "name": "licenseKey",
                "in": "header",
                "description": "License key to be used for deleting an existing user in a project in an account."
              },
              {
                "x-example": "SFMyNTY.g3QAAAACZAAEZGF0YXQAAAADbQAAAAlhY2NvdW50SWRtAAAAGDVmM2JhZDllMjFhMzhlNTcxZTQ2OGIxMW0AAAAIa2V5c2V0SWRtAAAAJDM5ZmJlZmRlLWY1ZGMtNGQ5YS05MjYwLTk2MTY2Mjc5MjJhYm0AAAAJcHJvamVjdElkbQAAACQ1YjY5MWY0OC1lNTZmLTQwNGMtYmIxZi1kYmQ5N2MzYjgzMDVkAAZzaWduZWRuBgDT17iKdwE.RzETsnQzB6aeQCkbL4GOKtu4HTWlgofp7xhnlv_fHFW",
                "type": "string",
                "required": true,
                "name": "appSecret",
                "in": "header",
                "description": "App secret associated with the license key used."
              },
              {
                "x-example": "SFMyNTY.g3QAAAACZAAEZGF0YW0AAAAYNWZiM2MzNWYyMWEzOGVkMjI4ZWRkOTBlZAAGc2lnbmVkbgYAoNzjr3cB.P4CAS42Iq9A6KuKBpEcVEnB86fsx3FiZTHpzFz4JM0E",
                "type": "string",
                "required": true,
                "name": "userToken",
                "in": "header",
                "description": "Token of the user to be deleted."
              }
            ],
            "operationId": "Isometrik.ChatUsersWeb.UserController.delete_user",
            "description": "Delete an existing user in a project for an account."
          }
        }
      },
      "info": {
        "version": "1.0",
        "title": "ChatUsersWeb"
      },
      "definitions": {
        "ChatUsers": {
          "type": "array",
          "title": "Chat users fetch",
          "items": {
            "$ref": "#/definitions/ChatUser"
          },
          "description": "All users in a chat project for the given account."
        },
        "body_update_user_alert_settings": {
          "type": "object",
          "title": "Body of update user alert settings request",
          "required": [
            "clubEmailNotifications",
            "emailNotifications",
            "messageNotificationEmail"
          ],
          "properties": {
            "messageNotificationEmail": {
              "type": "string",
              "description": "Email to send the unread messages alert to."
            },
            "emailNotifications": {
              "type": "boolean",
              "description": "Whether to enable or disable email notifications for unread messages."
            },
            "clubEmailNotifications": {
              "type": "boolean",
              "description": "Whether to club unread message notifications from multiple conversations or not."
            }
          },
          "example": {
            "messageNotificationEmail": "joe@mobifyi.com",
            "emailNotifications": true,
            "clubEmailNotifications": true
          },
          "description": "Details of the user alert settings to be updated."
        },
        "Error_400_block_user": {
          "type": "object",
          "title": "Error_400_block_user",
          "required": [
            "error"
          ],
          "properties": {
            "error": {
              "type": "string",
              "description": "The message of the error raised."
            }
          },
          "description": "Not allowed to block user."
        },
        "body_send_notification": {
          "type": "object",
          "title": "Body of send a new notification to users request",
          "required": [
            "notificationBody",
            "notificationTitle",
            "userIds"
          ],
          "properties": {
            "userIds": {
              "type": "String",
              "description": "List of user ids to send the new notification to."
            },
            "payload": {
              "type": "object",
              "description": "Additional information of the notification that you can save like tags etc, if any."
            },
            "notificationTitle": {
              "type": "string",
              "description": "Title of the notification to send."
            },
            "notificationBody": {
              "type": "string",
              "description": "Body of the notification to send."
            }
          },
          "example": {
            "userIds": [
              "5d2c6a9621a38e07daaee965"
            ],
            "payload": {
              "secretMessage": true
            },
            "notificationTitle": "Iam Title",
            "notificationBody": "Iam Body"
          },
          "description": "Details of the new notification to be sent to users."
        },
        "Error_404_create_user": {
          "type": "object",
          "title": "Error_404_create_user",
          "required": [
            "errorCode",
            "error"
          ],
          "properties": {
            "errorCode": {
              "type": "integer",
              "description": "0"
            },
            "error": {
              "type": "string",
              "description": "The message of the error raised."
            }
          },
          "description": "errorCode- 0 => licenseKey not found."
        },
        "Error_400_send_notification": {
          "type": "object",
          "title": "Error_400_send_notification",
          "required": [
            "error"
          ],
          "properties": {
            "error": {
              "type": "string",
              "description": "The message of the error raised."
            }
          },
          "description": "Users not found or sender is blocked by a receipient or has blocked a receipient."
        },
        "fetch_user_details": {
          "type": "object",
          "title": "Response of fetch details for an user request",
          "required": [
            "apnsDeviceTokens",
            "clubEmailNotifications",
            "emailNotifications",
            "messageNotificationEmail",
            "rtmpIngestUrl",
            "metaData",
            "notification",
            "lastSeen",
            "online",
            "language",
            "createdAt",
            "updatedAt",
            "visibility",
            "userIdentifier",
            "userProfileImageUrl",
            "userName",
            "userId",
            "msg"
          ],
          "properties": {
            "visibility": {
              "type": "boolean",
              "description": "Whether given user is visible to all."
            },
            "userProfileImageUrl": {
              "type": "string",
              "description": "Url of the profilepic associated with the given user."
            },
            "userName": {
              "type": "string",
              "description": "Name associated with the given user."
            },
            "userIdentifier": {
              "type": "string",
              "description": "Identifier associated with the given user."
            },
            "userId": {
              "type": "string",
              "description": "Id associated with the given user."
            },
            "updatedAt": {
              "type": "integer",
              "description": "Epoch time at which user details were last updated."
            },
            "rtmpIngestUrl": {
              "type": "string",
              "description": "Unique rtmp ingest url associated with the given user."
            },
            "online": {
              "type": "boolean",
              "description": "Whether given user is online now."
            },
            "notification": {
              "type": "boolean",
              "description": "Whether notifications are allowed for given user."
            },
            "msg": {
              "type": "string",
              "description": "Message of user details being fetched successfully fetched."
            },
            "metaData": {
              "type": "object",
              "description": "Metadata associated with the given user, if any."
            },
            "messageNotificationEmail": {
              "type": "string",
              "description": "Email to send the unread messages alert to."
            },
            "lastSeen": {
              "type": "integer",
              "description": "Time at which user was last seen online.Value is -1 if user is currently online."
            },
            "language": {
              "type": "string",
              "description": "Default language of the user.By default it is english."
            },
            "emailNotifications": {
              "type": "boolean",
              "description": "Whether email notifications for unread messages are enabled or disabled."
            },
            "createdAt": {
              "type": "integer",
              "description": "Epoch time at which user was created."
            },
            "clubEmailNotifications": {
              "type": "boolean",
              "description": "Whether unread message notifications from multiple conversations are clubbed or not."
            },
            "apnsDeviceTokens": {
              "type": "array",
              "description": "Apns device token to send voip push for meetings."
            }
          },
          "example": {
            "visibility": true,
            "userProfileImageUrl": "https://d1q6f0aelx0por.cloudfront.net/product-logos/cb773227-1c2c-42a4-a527-12e6f827c1d2-elixir.png",
            "userName": "Joe",
            "userIdentifier": "joe7@mobifyi.com",
            "userId": "5d2c6a8a21a38e07dadb1808",
            "updatedAt": 1605622543358,
            "online": true,
            "notification": true,
            "msg": "User details fetched successfully.",
            "metaData": {
              "country": "India"
            },
            "messageNotificationEmail": "joe@mobifyi.com",
            "lastSeen": -1,
            "language": "en",
            "emailNotifications": true,
            "createdAt": 1605616479803,
            "clubEmailNotifications": true,
            "apnsDeviceTokens": [
              "ed6453asdad0b9weqwe7e17qqwe"
            ]
          },
          "description": "Details for an user fetched successfully."
        },
        "Error_409_edit_create_user": {
          "type": "object",
          "title": "Error_409_edit_create_user",
          "required": [
            "error"
          ],
          "properties": {
            "error": {
              "type": "string",
              "description": "The message of the error raised."
            }
          },
          "description": "Identifier already associated with another user."
        },
        "NonBlockedUsers": {
          "type": "array",
          "title": "Non-blocked users fetch",
          "items": {
            "$ref": "#/definitions/NonBlockedUser"
          },
          "description": "All non-blocked users list."
        },
        "get_non_blocked_users": {
          "type": "object",
          "title": "Response of fetch non blocked users request",
          "required": [
            "msg"
          ],
          "properties": {
            "users": {
              "$ref": "#/definitions/NonBlockedUsers"
            },
            "msg": {
              "type": "string",
              "description": "Message of list of non blocked users being fetched successfully."
            }
          },
          "example": {
            "users": [
              {
                "visibility": true,
                "userProfileImageUrl": "https://res.cloudinary.com/demo/image/upload/sample.jpg",
                "userName": "koko",
                "userIdentifier": "jojo2@lolo.com",
                "userId": "5fb4feb921a38e7b81fac663",
                "updatedAt": 1605622543358,
                "online": true,
                "notification": true,
                "metaData": {
                  "country": "India"
                },
                "lastSeen": -1,
                "language": "en",
                "createdAt": 1605616479803
              }
            ],
            "msg": "Non blocked users fetched successfully."
          },
          "description": "List of non blocked users fetched successfully."
        },
        "Error_404_get_blocked_users": {
          "type": "object",
          "title": "Error_404_get_blocked_users",
          "required": [
            "errorCode",
            "error"
          ],
          "properties": {
            "errorCode": {
              "type": "integer",
              "description": "0"
            },
            "error": {
              "type": "string",
              "description": "The message of the error raised."
            }
          },
          "description": "errorCode- 0 => licenseKey not found, 1 => User not found, 2 => Blocked users not found."
        },
        "Error_422": {
          "type": "object",
          "title": "Error_422",
          "properties": {
            "error": {
              "type": "object",
              "required": [
                "error_key"
              ],
              "properties": {
                "error_key": {
                  "type": "array",
                  "example": [
                    "The message of the first error raised.",
                    "The message of the second error raised."
                  ],
                  "description": "Array containing list of error messages."
                }
              }
            }
          },
          "description": "Unprocessable entity."
        },
        "get_blocked_users": {
          "type": "object",
          "title": "Response of fetch blocked users request",
          "required": [
            "msg"
          ],
          "properties": {
            "users": {
              "$ref": "#/definitions/BlockedUsers"
            },
            "msg": {
              "type": "string",
              "description": "Message of list of blocked users being fetched successfully."
            }
          },
          "example": {
            "users": [
              {
                "userProfileImageUrl": "https://res.cloudinary.com/demo/image/upload/sample.jpg",
                "userName": "koko",
                "userIdentifier": "jojo2@lolo.com",
                "userId": "5fb4feb921a38e7b81fac663",
                "metaData": {
                  "country": "India"
                }
              }
            ],
            "msg": "Blocked users fetched successfully."
          },
          "description": "List of blocked users fetched successfully."
        },
        "BlockedUsers": {
          "type": "array",
          "title": "Blocked users fetch",
          "items": {
            "$ref": "#/definitions/BlockedUser"
          },
          "description": "All blocked users list."
        },
        "fetch_users_v2": {
          "type": "object",
          "title": "Response of fetch list of users(In alphabetical order) request",
          "required": [
            "msg"
          ],
          "properties": {
            "users": {
              "$ref": "#/definitions/ChatUsers"
            },
            "msg": {
              "type": "string",
              "description": "Message of list of users being fetched successfully."
            }
          },
          "example": {
            "users": [
              {
                "visibility": true,
                "userProfileImageUrl": "https://d1q6f0aelx0por.cloudfront.net/product-logos/cb773227-1c2c-42a4-a527-12e6f827c1d2-elixir.png",
                "userName": "Joe",
                "userIdentifier": "joe7@mobifyi.com",
                "userId": "5d2c6a8a21a38e07dadb1808",
                "updatedAt": 1605622543358,
                "online": true,
                "notification": true,
                "metaData": {
                  "country": "India"
                },
                "messageNotificationEmail": "joe@mobifyi.com",
                "lastSeen": -1,
                "language": "en",
                "emailNotifications": true,
                "createdAt": 1605616479803,
                "clubEmailNotifications": true
              }
            ],
            "msg": "Users fetched successfully."
          },
          "description": "List of users(In alphabetical order) fetched successfully."
        },
        "Error_403_user": {
          "type": "object",
          "title": "Error_403_user",
          "required": [
            "errorCode",
            "error"
          ],
          "properties": {
            "errorCode": {
              "type": "integer",
              "description": "11"
            },
            "error": {
              "type": "string",
              "description": "The message of the error raised."
            }
          },
          "description": "errorCode- 11 => Account not verified yet, 12 => Account has been suspended, 13 => Invalid account status, 14 => Billing subscription not added, 15 => Billing subscription expired or not renewed or canceled, 16 => Invalid project status, 17 => Billing subscription expired."
        },
        "Error_403_create_user": {
          "type": "object",
          "title": "Error_403_create_user",
          "required": [
            "errorCode",
            "error"
          ],
          "properties": {
            "errorCode": {
              "type": "integer",
              "description": "0"
            },
            "error": {
              "type": "string",
              "description": "The message of the error raised."
            }
          },
          "description": "errorCode- 0 => Limit for maximum allowed users reached, 11 => Account not verified yet, 12 => Account has been suspended, 13 => Invalid account status, 14 => Billing subscription not added, 15 => Billing subscription expired or not renewed or canceled, 16 => Invalid project status, 17 => Billing subscription expired."
        },
        "Error_404_fetch_user_credentials": {
          "type": "object",
          "title": "Error_404_fetch_user_credentials",
          "required": [
            "errorCode",
            "error"
          ],
          "properties": {
            "errorCode": {
              "type": "integer",
              "description": "0"
            },
            "error": {
              "type": "string",
              "description": "The message of the error raised."
            }
          },
          "description": "errorCode- 0 => licenseKey not found."
        },
        "edit_user": {
          "type": "object",
          "title": "Response of update user details request",
          "required": [
            "msg"
          ],
          "properties": {
            "msg": {
              "type": "string",
              "description": "Message of the user details being successfully updated."
            }
          },
          "example": {
            "msg": "User details updated successfully."
          },
          "description": "Successfully updated user details."
        },
        "fetch_user_credentials": {
          "type": "object",
          "title": "Response of fetch credentials for an user request",
          "required": [
            "userId",
            "keysetId",
            "projectId",
            "accountId",
            "msg"
          ],
          "properties": {
            "userId": {
              "type": "string",
              "description": "Id associated with the given user credentials."
            },
            "projectId": {
              "type": "string",
              "description": "Project id associated with the given user credentials."
            },
            "msg": {
              "type": "string",
              "description": "Message of user credentials being fetched successfully fetched."
            },
            "keysetId": {
              "type": "string",
              "description": "Keyset id associated with the given user credentials."
            },
            "accountId": {
              "type": "string",
              "description": "Account id associated with the given user credentials."
            }
          },
          "example": {
            "userId": "521a38e07dad2c6a8a08db18",
            "projectId": "ab42c9c5-wert-erty-12b2-2eb55d2f58e9",
            "msg": "User credentials fetched successfully.",
            "keysetId": "2eb55d2f-12b2-wert-erty-ab42c9c5-58e9",
            "accountId": "5d2c6a8a21a38e07dadb1808"
          },
          "description": "Credentials for an user fetched successfully."
        },
        "body_authenticate_user": {
          "type": "object",
          "title": "Body of authenticate user request",
          "required": [
            "userIdentifier",
            "password"
          ],
          "properties": {
            "userIdentifier": {
              "type": "string",
              "description": "Unique identifier associated with the user to be authenticated."
            },
            "password": {
              "type": "string",
              "description": "Password associated with the user to be authenticated."
            }
          },
          "example": {
            "userIdentifier": "joe9@mobifyi.com",
            "password": "Joe123$"
          },
          "description": "Details of the user to be authenticated."
        },
        "Error_404_send_notification": {
          "type": "object",
          "title": "Error_404_send_notification",
          "required": [
            "errorCode",
            "error"
          ],
          "properties": {
            "errorCode": {
              "type": "integer",
              "description": "0"
            },
            "error": {
              "type": "string",
              "description": "The message of the error raised."
            }
          },
          "description": "errorCode- 0 => licenseKey not found."
        },
        "Error_404_authenticate_user": {
          "type": "object",
          "title": "Error_404_authenticate_user",
          "required": [
            "errorCode",
            "error"
          ],
          "properties": {
            "errorCode": {
              "type": "integer",
              "description": "0"
            },
            "error": {
              "type": "string",
              "description": "The message of the error raised."
            }
          },
          "description": "errorCode- 0 => licenseKey not found, 1 => User not found."
        },
        "Error_400_publish_message": {
          "type": "object",
          "title": "Error_400_publish_message",
          "required": [
            "error"
          ],
          "properties": {
            "error": {
              "type": "string",
              "description": "The message of the error raised."
            }
          },
          "description": "Users not found or publisher is blocked by a receipient or has blocked a receipient."
        },
        "Error_404_fetch_edit_delete_user": {
          "type": "object",
          "title": "Error_404_fetch_edit_delete_user",
          "required": [
            "errorCode",
            "error"
          ],
          "properties": {
            "errorCode": {
              "type": "integer",
              "description": "0"
            },
            "error": {
              "type": "string",
              "description": "The message of the error raised."
            }
          },
          "description": "errorCode- 0 => licenseKey not found, 1 => User not found."
        },
        "Error_404_presignedurl_update": {
          "type": "object",
          "title": "Error_404_presignedurl_update",
          "required": [
            "errorCode",
            "error"
          ],
          "properties": {
            "errorCode": {
              "type": "integer",
              "description": "0"
            },
            "error": {
              "type": "string",
              "description": "The message of the error raised."
            }
          },
          "description": "errorCode- 0 => licenseKey not found, 1 => User not found."
        },
        "Error_404_get_blocked_users_count": {
          "type": "object",
          "title": "Error_404_get_blocked_users_count",
          "required": [
            "errorCode",
            "error"
          ],
          "properties": {
            "errorCode": {
              "type": "integer",
              "description": "0"
            },
            "error": {
              "type": "string",
              "description": "The message of the error raised."
            }
          },
          "description": "errorCode- 0 => licenseKey not found, 1 => User not found, 2 => No blocked users."
        },
        "Error_403_block_unblock_user": {
          "type": "object",
          "title": "Error_403_block_unblock_user",
          "required": [
            "errorCode",
            "error"
          ],
          "properties": {
            "errorCode": {
              "type": "integer",
              "description": "11"
            },
            "error": {
              "type": "string",
              "description": "The message of the error raised."
            }
          },
          "description": "errorCode- 11 => Account not verified yet, 12 => Account has been suspended, 13 => Invalid account status, 14 => Billing subscription not added, 15 => Billing subscription expired or not renewed or canceled, 16 => Invalid project status, 17 => Billing subscription expired."
        },
        "presigned_url_create": {
          "type": "object",
          "title": "Response of fetch presigned url for uploading profile image of a new user request",
          "required": [
            "ttl",
            "mediaUrl",
            "presignedUrl",
            "msg"
          ],
          "properties": {
            "ttl": {
              "type": "integer",
              "description": "Number of seconds after which presigned url expires."
            },
            "presignedUrl": {
              "type": "string",
              "description": "Url to be used for uploading of media."
            },
            "msg": {
              "type": "string",
              "description": "Message of presigned url being successfully fetched."
            },
            "mediaUrl": {
              "type": "string",
              "description": "Url to be used for retrieval of uploaded media."
            }
          },
          "example": {
            "ttl": 600,
            "presignedUrl": "https://ism-attachments.s3.us-west-2.amazonaws.com/test/ELB.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIATYFARKGKM57LC3WG%2F20220704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220704T103245Z&X-Amz-Expires=300&X-Amz-Signature=c06896239eb96e8032cdb7be3de7ff1e4de60d78f5977ce681bf5ee9df5aad03&X-Amz-SignedHeaders=host",
            "msg": "Presigned url fetched successfully.",
            "mediaUrl": "http://s3.amazonaws.com/my-bucket/photos/3c55bf4c-cc9f-4ef4-bb53-f7b4190594e1.jpg"
          },
          "description": "Successfully fetched presigned url for uploading profile image of a new user."
        },
        "Error_404_block_user": {
          "type": "object",
          "title": "Error_404_block_user",
          "required": [
            "errorCode",
            "error"
          ],
          "properties": {
            "errorCode": {
              "type": "integer",
              "description": "0"
            },
            "error": {
              "type": "string",
              "description": "The message of the error raised."
            }
          },
          "description": "errorCode- 0 => licenseKey not found, 1 => Users not found."
        },
        "body_publish_message": {
          "type": "object",
          "title": "Body of publish a new message to users request",
          "required": [
            "deviceId",
            "body",
            "messageType",
            "userIds"
          ],
          "properties": {
            "userIds": {
              "type": "String",
              "description": "List of user ids to publish the new message to."
            },
            "searchableTags": {
              "type": "array",
              "description": "List containing tags by which message can be searched(Maximum 20)."
            },
            "metaData": {
              "type": "object",
              "description": "Additional information of the message that you can save like tags etc, if any."
            },
            "messageType": {
              "type": "integer",
              "description": "Type of the message to be published to users."
            },
            "deviceId": {
              "type": "string",
              "description": "Id of the device from which message was published."
            },
            "customType": {
              "type": "string",
              "description": "Custom message type, if any."
            },
            "body": {
              "type": "string",
              "description": "Body of the message published."
            }
          },
          "example": {
            "userIds": [
              "5d2c6a9621a38e07daaee965"
            ],
            "searchableTags": [
              "public"
            ],
            "metaData": {
              "secretMessage": true
            },
            "messageType": 0,
            "deviceId": "ygd8zotW7",
            "customType": "SelfDestruct",
            "body": "message body"
          },
          "description": "Details of the new message to be published to users."
        },
        "Error_403_block_user": {
          "type": "object",
          "title": "Error_403_block_user",
          "required": [
            "errorCode",
            "error"
          ],
          "properties": {
            "errorCode": {
              "type": "integer",
              "description": "0"
            },
            "error": {
              "type": "string",
              "description": "The message of the error raised."
            }
          },
          "description": "errorCode- 0 => Allowed messages limit exceeded, 1 => Allowed messages limit shall be exceeded, 11 => Account not verified yet, 12 => Account has been suspended, 13 => Invalid account status, 14 => Billing subscription not added, 15 => Billing subscription expired or not renewed or canceled, 16 => Invalid project status, 17 => Billing subscription expired."
        },
        "Error_404_get_non_blocked_users": {
          "type": "object",
          "title": "Error_404_get_non_blocked_users",
          "required": [
            "errorCode",
            "error"
          ],
          "properties": {
            "errorCode": {
              "type": "integer",
              "description": "0"
            },
            "error": {
              "type": "string",
              "description": "The message of the error raised."
            }
          },
          "description": "errorCode- 0 => licenseKey not found, 1 => User not found, 2 => Non blocked users not found."
        },
        "Error_404_presignedurl_create": {
          "type": "object",
          "title": "Error_404_presignedurl_create",
          "required": [
            "errorCode",
            "error"
          ],
          "properties": {
            "errorCode": {
              "type": "integer",
              "description": "0"
            },
            "error": {
              "type": "string",
              "description": "The message of the error raised."
            }
          },
          "description": "errorCode- 0 => licenseKey not found."
        },
        "Error_403_edit_delete_user": {
          "type": "object",
          "title": "Error_403_edit_delete_user",
          "required": [
            "errorCode",
            "error"
          ],
          "properties": {
            "errorCode": {
              "type": "integer",
              "description": "0"
            },
            "error": {
              "type": "string",
              "description": "The message of the error raised."
            }
          },
          "description": "errorCode- 0 => Allowed messages limit exceeded, 1 => Allowed messages limit shall be exceeded, 11 => Account not verified yet, 12 => Account has been suspended, 13 => Invalid account status, 14 => Billing subscription not added, 15 => Billing subscription expired or not renewed or canceled, 16 => Invalid project status, 17 => Billing subscription expired."
        },
        "get_blocked_users_count": {
          "type": "object",
          "title": "Response of fetch blocked users request",
          "required": [
            "blockedUsersCount",
            "msg"
          ],
          "properties": {
            "msg": {
              "type": "string",
              "description": "Message of blocked users count being successfully fetched."
            },
            "blockedUsersCount": {
              "type": "integer",
              "description": "Number of blocked users"
            }
          },
          "example": {
            "msg": "Blocked users count fetched successfully.",
            "blockedUsersCount": 1
          },
          "description": "Successfully fetched blocked users count."
        },
        "body_unblock_user": {
          "type": "object",
          "title": "Body of the unblock user request",
          "required": [
            "opponentId"
          ],
          "properties": {
            "opponentId": {
              "type": "string",
              "description": "Id of the user to be unblocked."
            }
          },
          "example": {
            "opponentId": "5d2c6a9621a38e07daaee965"
          },
          "description": "Details of the unblock user request."
        },
        "body_create_user": {
          "type": "object",
          "title": "Body of create new user request",
          "required": [
            "userProfileImageUrl",
            "userIdentifier",
            "userName",
            "password"
          ],
          "properties": {
            "userProfileImageUrl": {
              "type": "string",
              "description": "Url of the profile pic to be associated with the newly created user."
            },
            "userName": {
              "type": "string",
              "description": "Name to be associated with the newly created user."
            },
            "userIdentifier": {
              "type": "string",
              "description": "Identifier to be associated with the newly created user.(Must be unique for each user)"
            },
            "password": {
              "type": "string",
              "description": "Password to be associated with the newly created use(Must include at least one lowercase letter, one uppercase letter, and one digit.Must be between 6-15 characters)."
            },
            "metaData": {
              "type": "object",
              "description": "Object containing metadata for the user if any."
            },
            "messageNotificationEmail": {
              "type": "string",
              "description": "Email to send the unread messages alert to."
            },
            "emailNotifications": {
              "type": "boolean",
              "description": "Whether to enable or disable email notifications for unread messages."
            },
            "clubEmailNotifications": {
              "type": "boolean",
              "description": "Whether to club unread message notifications from multiple conversations or not."
            },
            "apnsDeviceToken": {
              "type": "string",
              "description": "Apns device token to send voip push for meetings."
            }
          },
          "example": {
            "userProfileImageUrl": "https://res.cloudinary.com/demo/image/upload/sample.jpg",
            "userName": "Joe",
            "userIdentifier": "joe9@mobifyi.com",
            "password": "Hello@123",
            "metaData": {
              "country": "India"
            },
            "messageNotificationEmail": "joe@mobifyi.com",
            "emailNotifications": true,
            "clubEmailNotifications": true,
            "apnsDeviceToken": "ed6453asdad0b9weqwe7e17qqwe"
          },
          "description": "Details of the new user to be created."
        },
        "Error_400_edit_user": {
          "type": "object",
          "title": "Error_400_edit_user",
          "required": [
            "error"
          ],
          "properties": {
            "error": {
              "type": "string",
              "description": "The message of the error raised."
            }
          },
          "description": "Atleast one of userIdentifier, userName, userProfileImageUrl or metaData should be non-empty."
        },
        "Error_403_presignedurl_update": {
          "type": "object",
          "title": "Error_403_presignedurl_update",
          "required": [
            "errorCode",
            "error"
          ],
          "properties": {
            "errorCode": {
              "type": "integer",
              "description": "0"
            },
            "error": {
              "type": "string",
              "description": "The message of the error raised."
            }
          },
          "description": "errorCode- 11 => Account not verified yet, 12 => Account has been suspended, 13 => Invalid account status, 14 => Billing subscription not added, 15 => Billing subscription expired or not renewed or canceled, 16 => Invalid project status, 17 => Billing subscription expired."
        },
        "body_edit_user": {
          "type": "object",
          "title": "Body of update user details request",
          "properties": {
            "userProfileImageUrl": {
              "type": "string",
              "description": "Url of the new profile pic to be associated with the given user."
            },
            "userName": {
              "type": "string",
              "description": "New name to be associated with the given user."
            },
            "userIdentifier": {
              "type": "string",
              "description": "New identifier to be associated with the given user."
            },
            "updateSearchableTagsForPrivateOneToOneConversationsOnly": {
              "type": "boolean",
              "description": "Whether to update searchable tags for private 1-1 conversations only or group conversations as well."
            },
            "searchableTagToRemove": {
              "type": "string",
              "description": "Old searchable tag to remove for conversations."
            },
            "searchableTagToAdd": {
              "type": "string",
              "description": "New searchable tag to add for conversations."
            },
            "notification": {
              "type": "boolean",
              "description": "Whether to enable or disable notifications."
            },
            "metaData": {
              "type": "object",
              "description": "Object containing metadata to be associated with the given user."
            },
            "apnsDeviceToken": {
              "type": "string",
              "description": "Apns device token to send voip push for meetings."
            },
            "addApnsDeviceToken": {
              "type": "boolean",
              "description": "Whether to add or remove apns device token, True- Add, False- Remove(Mandatory when apnsDeviceToken field is sent)."
            }
          },
          "example": {
            "userProfileImageUrl": "https://d1q6f0aelx0por.cloudfront.net/product-logos/cb773227-1c2c-42a4-a527-12e6f827c1d2-elixir.png",
            "userName": "Joe",
            "userIdentifier": "joe@mobifyi.com",
            "updateSearchableTagsForPrivateOneToOneConversationsOnly": true,
            "searchableTagToRemove": "Old Name",
            "searchableTagToAdd": "New Name",
            "notification": true,
            "metaData": {
              "country": "India"
            },
            "apnsDeviceToken": "ed6453asdad0b9weqwe7e17qqwe",
            "addApnsDeviceToken": true
          },
          "description": "Details of the user to be updated."
        },
        "Error_403_unblock_user": {
          "type": "object",
          "title": "Error_403_unblock_user",
          "required": [
            "errorCode",
            "error"
          ],
          "properties": {
            "errorCode": {
              "type": "integer",
              "description": "0"
            },
            "error": {
              "type": "string",
              "description": "The message of the error raised."
            }
          },
          "description": "errorCode- 0 => Allowed messages limit exceeded, 1 => Allowed messages limit shall be exceeded, 11 => Account not verified yet, 12 => Account has been suspended, 13 => Invalid account status, 14 => Billing subscription not added, 15 => Billing subscription expired or not renewed or canceled, 16 => Invalid project status, 17 => Billing subscription expired."
        },
        "Error_403_publish_message": {
          "type": "object",
          "title": "Error_403_publish_message",
          "required": [
            "errorCode",
            "error"
          ],
          "properties": {
            "errorCode": {
              "type": "integer",
              "description": "0"
            },
            "error": {
              "type": "string",
              "description": "The message of the error raised."
            }
          },
          "description": "errorCode- 11 => Account not verified yet, 12 => Account has been suspended, 13 => Invalid account status, 14 => Billing subscription not added, 15 => Billing subscription expired or not renewed or canceled, 16 => Invalid project status, 17 => Billing subscription expired."
        },
        "authenticate_user": {
          "type": "object",
          "title": "Response of authenticate a user request",
          "required": [
            "userId",
            "userToken",
            "msg"
          ],
          "properties": {
            "userToken": {
              "type": "string",
              "description": "Token identifying the authenticated user."
            },
            "userId": {
              "type": "string",
              "description": "Id of the authenticated user."
            },
            "msg": {
              "type": "string",
              "description": "Message of the user being authenticated successfully."
            }
          },
          "example": {
            "userToken": "SFMyNTY.g3QAAAACZAAEZGF0YXQAAAADbQAAAAlhY2NvdW50SWRtAAAAGDVmM2JhZDllMjFhMzhlNTcxZTQ2OGIxMW0AAAAIa2V5c2V0SWRtAAAAJDM5ZmJlZmRlLWY1ZGMtNGQ5YS05MjYwLTk2MTY2Mjc5MjJhYm0AAAAJcHJvamVjdElkbQAAACQ1YjY5MWY0OC1lNTZmLTQwNGMtYmIxZi1kYmQ5N2MzYjgzMDVkAAZzaWduZWRuBgDzwdmvdwE.rGUJlF-0FXl63ou2vs81IiprJ-3ZWzplflbrpsaRm5k",
            "userId": "5d3b12c521a38e22faee641b",
            "msg": "User authenticated successfully."
          },
          "description": "User authenticated successfully."
        },
        "Error_404_decode_project_credentials": {
          "type": "object",
          "title": "Error_404_decode_project_credentials",
          "required": [
            "errorCode",
            "error"
          ],
          "properties": {
            "errorCode": {
              "type": "integer",
              "description": "0"
            },
            "error": {
              "type": "string",
              "description": "The message of the error raised."
            }
          },
          "description": "errorCode- 0 => licenseKey not found."
        },
        "create_user": {
          "type": "object",
          "title": "Response of create new user request",
          "required": [
            "userId",
            "userToken",
            "msg"
          ],
          "properties": {
            "userToken": {
              "type": "string",
              "description": "Token identifying the given user."
            },
            "userId": {
              "type": "string",
              "description": "Id of the newly created user."
            },
            "msg": {
              "type": "string",
              "description": "Message of new user being successfully created."
            }
          },
          "example": {
            "userToken": "SFMyNTY.g3QAAAACZAAEZGF0YXQAAAADbQAAAAlhY2NvdW50SWRtAAAAGDVmM2JhZDllMjFhMzhlNTcxZTQ2OGIxMW0AAAAIa2V5c2V0SWRtAAAAJDM5ZmJlZmRlLWY1ZGMtNGQ5YS05MjYwLTk2MTY2Mjc5MjJhYm0AAAAJcHJvamVjdElkbQAAACQ1YjY5MWY0OC1lNTZmLTQwNGMtYmIxZi1kYmQ5N2MzYjgzMDVkAAZzaWduZWRuBgDzwdmvdwE.rGUJlF-0FXl63ou2vs81IiprJ-3ZWzplflbrpsaRm5k",
            "userId": "5d2c6a8a21a38e07dadb1808",
            "msg": "User created successfully."
          },
          "description": "Successfully created new user."
        },
        "fetch_users": {
          "type": "object",
          "title": "Response of fetch list of users request",
          "required": [
            "msg"
          ],
          "properties": {
            "users": {
              "$ref": "#/definitions/ChatUsers"
            },
            "pageToken": {
              "type": "string",
              "description": "Page token to be used for next page of users."
            },
            "msg": {
              "type": "string",
              "description": "Message of list of users being fetched successfully."
            }
          },
          "example": {
            "users": [
              {
                "visibility": true,
                "userProfileImageUrl": "https://d1q6f0aelx0por.cloudfront.net/product-logos/cb773227-1c2c-42a4-a527-12e6f827c1d2-elixir.png",
                "userName": "Joe",
                "userIdentifier": "joe7@mobifyi.com",
                "userId": "5d2c6a8a21a38e07dadb1808",
                "updatedAt": 1605622543358,
                "online": true,
                "notification": true,
                "metaData": {
                  "country": "India"
                },
                "messageNotificationEmail": "joe@mobifyi.com",
                "lastSeen": -1,
                "language": "en",
                "emailNotifications": true,
                "createdAt": 1605616479803,
                "clubEmailNotifications": true
              }
            ],
            "pageToken": "SFMyNTY.g3QAAAACZAAEZGF0YW0AAAAYNWRmMjA0YTAyMWEzOGUwNjQyZDhlZjdmZAAGc2lnbmVkbgYA2zf8-W4B.JjPZ-yqmB5T0hiKVdZNzkwvwyLk_KyfBWLfsGQZ7KFg",
            "msg": "Users fetched successfully."
          },
          "description": "List of users fetched successfully."
        },
        "Error_401_create_user": {
          "type": "object",
          "title": "Error_401_create_user",
          "required": [
            "error"
          ],
          "properties": {
            "error": {
              "type": "string",
              "description": "The message of the error raised."
            }
          },
          "description": "Incorrect userSecret to create user."
        },
        "unblock_user": {
          "type": "object",
          "title": "Response of unblock user request",
          "required": [
            "msg"
          ],
          "properties": {
            "msg": {
              "type": "string",
              "description": "Message of user being successfully unblocked."
            }
          },
          "example": {
            "msg": "User unblocked successfully."
          },
          "description": "Successfully unblocked user."
        },
        "delete_user": {
          "type": "object",
          "title": "Response of delete an user request",
          "required": [
            "msg"
          ],
          "properties": {
            "msg": {
              "type": "string",
              "description": "Message of the user being deleted successfully."
            }
          },
          "example": {
            "msg": "User deleted successfully."
          },
          "description": "User deleted successfully."
        },
        "Error_403_update_user_alert_settings": {
          "type": "object",
          "title": "Error_403_update_user_alert_settings",
          "required": [
            "errorCode",
            "error"
          ],
          "properties": {
            "errorCode": {
              "type": "integer",
              "description": "0"
            },
            "error": {
              "type": "string",
              "description": "The message of the error raised."
            }
          },
          "description": "errorCode- 11 => Account not verified yet, 12 => Account has been suspended, 13 => Invalid account status, 14 => Billing subscription not added, 15 => Billing subscription expired or not renewed or canceled, 16 => Invalid project status, 17 => Billing subscription expired."
        },
        "ChatUser": {
          "type": "object",
          "title": "User details in fetch chat users request",
          "required": [
            "clubEmailNotifications",
            "emailNotifications",
            "messageNotificationEmail",
            "metaData",
            "notification",
            "lastSeen",
            "online",
            "language",
            "createdAt",
            "updatedAt",
            "visibility",
            "userIdentifier",
            "userProfileImageUrl",
            "userName",
            "userId"
          ],
          "properties": {
            "visibility": {
              "type": "boolean",
              "description": "Whether given user is visible to all."
            },
            "userProfileImageUrl": {
              "type": "string",
              "description": "Url of the profilepic associated with the given user."
            },
            "userName": {
              "type": "string",
              "description": "Name associated with the given user."
            },
            "userIdentifier": {
              "type": "string",
              "description": "Identifier associated with the given user."
            },
            "userId": {
              "type": "string",
              "description": "Id associated with the given user."
            },
            "updatedAt": {
              "type": "integer",
              "description": "Epoch time at which user details were last updated."
            },
            "online": {
              "type": "boolean",
              "description": "Whether given user is online now."
            },
            "notification": {
              "type": "boolean",
              "description": "Whether notifications are allowed for given user."
            },
            "metaData": {
              "type": "object",
              "description": "Metadata associated with the given user, if any."
            },
            "messageNotificationEmail": {
              "type": "string",
              "description": "Email to send the unread messages alert to."
            },
            "lastSeen": {
              "type": "integer",
              "description": "Time at which user was last seen online.Value is -1 if user is currently online."
            },
            "language": {
              "type": "string",
              "description": "Default language of the user.By default it is english."
            },
            "emailNotifications": {
              "type": "boolean",
              "description": "Whether email notifications for unread messages are enabled or disabled."
            },
            "createdAt": {
              "type": "integer",
              "description": "Epoch time at which user was created."
            },
            "clubEmailNotifications": {
              "type": "boolean",
              "description": "Whether unread message notifications from multiple conversations are clubbed or not."
            }
          },
          "description": "Model containing details of the user in chat fetched."
        },
        "Error_403_send_notification": {
          "type": "object",
          "title": "Error_403_send_notification",
          "required": [
            "errorCode",
            "error"
          ],
          "properties": {
            "errorCode": {
              "type": "integer",
              "description": "0"
            },
            "error": {
              "type": "string",
              "description": "The message of the error raised."
            }
          },
          "description": "errorCode- 11 => Account not verified yet, 12 => Account has been suspended, 13 => Invalid account status, 14 => Billing subscription not added, 15 => Billing subscription expired or not renewed or canceled, 16 => Invalid project status, 17 => Billing subscription expired."
        },
        "publish_message": {
          "type": "object",
          "title": "Response of publish a new message to users request",
          "required": [
            "msg"
          ],
          "properties": {
            "msg": {
              "type": "string",
              "description": "Message of new message being successfully published to users."
            }
          },
          "example": {
            "msg": "Message published successfully."
          },
          "description": "Successfully published new message to users."
        },
        "presigned_url_update": {
          "type": "object",
          "title": "Response of fetch presigned url for uploading profile image of an existing user request",
          "required": [
            "ttl",
            "mediaUrl",
            "presignedUrl",
            "msg"
          ],
          "properties": {
            "ttl": {
              "type": "integer",
              "description": "Number of seconds after which presigned url expires."
            },
            "presignedUrl": {
              "type": "string",
              "description": "Url to be used for uploading of media."
            },
            "msg": {
              "type": "string",
              "description": "Message of presigned url being successfully fetched."
            },
            "mediaUrl": {
              "type": "string",
              "description": "Url to be used for retrieval of uploaded media."
            }
          },
          "example": {
            "ttl": 600,
            "presignedUrl": "https://ism-attachments.s3.us-west-2.amazonaws.com/test/ELB.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIATYFARKGKM57LC3WG%2F20220704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220704T103245Z&X-Amz-Expires=300&X-Amz-Signature=c06896239eb96e8032cdb7be3de7ff1e4de60d78f5977ce681bf5ee9df5aad03&X-Amz-SignedHeaders=host",
            "msg": "Presigned url fetched successfully.",
            "mediaUrl": "http://s3.amazonaws.com/my-bucket/photos/3c55bf4c-cc9f-4ef4-bb53-f7b4190594e1.jpg"
          },
          "description": "Successfully fetched presigned url for uploading profile image of an existing user."
        },
        "Error_503": {
          "type": "object",
          "title": "Error_503",
          "required": [
            "error"
          ],
          "properties": {
            "error": {
              "type": "string",
              "description": "The message of the error raised."
            }
          },
          "description": "Service Unavailable."
        },
        "send_notification": {
          "type": "object",
          "title": "Response of send a new notification to users request",
          "required": [
            "msg"
          ],
          "properties": {
            "msg": {
              "type": "string",
              "description": "Message of new notification being successfully sent to users."
            }
          },
          "example": {
            "msg": "Notification sent successfully."
          },
          "description": "Successfully sent new notification to users."
        },
        "Error_403_presignedurl_create": {
          "type": "object",
          "title": "Error_403_presignedurl_create",
          "required": [
            "errorCode",
            "error"
          ],
          "properties": {
            "errorCode": {
              "type": "integer",
              "description": "0"
            },
            "error": {
              "type": "string",
              "description": "The message of the error raised."
            }
          },
          "description": "errorCode- 0 => Limit of maximum allowed users reached, 11 => Account not verified yet, 12 => Account has been suspended, 13 => Invalid account status, 14 => Billing subscription not added, 15 => Billing subscription expired or not renewed or canceled, 16 => Invalid project status, 17 => Billing subscription expired."
        },
        "Error_401_fetch_users": {
          "type": "object",
          "title": "Error_401_fetch_users",
          "required": [
            "error"
          ],
          "properties": {
            "error": {
              "type": "string",
              "description": "The message of the error raised."
            }
          },
          "description": "Incorrect userSecret to fetch users."
        },
        "block_user": {
          "type": "object",
          "title": "Response of block user request",
          "required": [
            "msg"
          ],
          "properties": {
            "msg": {
              "type": "string",
              "description": "Message of user being successfully blocked."
            }
          },
          "example": {
            "msg": "User blocked successfully."
          },
          "description": "Successfully blocked user."
        },
        "body_block_user": {
          "type": "object",
          "title": "Body of the block user request",
          "required": [
            "opponentId"
          ],
          "properties": {
            "opponentId": {
              "type": "string",
              "description": "Id of the user to be blocked."
            }
          },
          "example": {
            "opponentId": "5d2c6a9621a38e07daaee965"
          },
          "description": "Details of the block user request."
        },
        "Error_404_unblock_user": {
          "type": "object",
          "title": "Error_404_unblock_user",
          "required": [
            "errorCode",
            "error"
          ],
          "properties": {
            "errorCode": {
              "type": "integer",
              "description": "0"
            },
            "error": {
              "type": "string",
              "description": "The message of the error raised."
            }
          },
          "description": "errorCode- 0 => licenseKey not found, 1 => Users not found."
        },
        "update_user_alert_settings": {
          "type": "object",
          "title": "Response of update user alert settings request",
          "required": [
            "msg"
          ],
          "properties": {
            "msg": {
              "type": "string",
              "description": "Message of the user alert settings being successfully updated."
            }
          },
          "example": {
            "msg": "User alert settings updated successfully."
          },
          "description": "Successfully updated user alert settings."
        },
        "NonBlockedUser": {
          "type": "object",
          "title": "Non-blocked user details",
          "required": [
            "metaData",
            "notification",
            "lastSeen",
            "online",
            "language",
            "createdAt",
            "updatedAt",
            "visibility",
            "userId",
            "userIdentifier",
            "userProfileImageUrl",
            "userName"
          ],
          "properties": {
            "visibility": {
              "type": "boolean",
              "description": "Whether given user is visible to all."
            },
            "userProfileImageUrl": {
              "type": "string",
              "description": "Profilepic associated with the given user."
            },
            "userName": {
              "type": "string",
              "description": "Name associated with the given user."
            },
            "userIdentifier": {
              "type": "string",
              "description": "Identifier associated with the given user."
            },
            "userId": {
              "type": "string",
              "description": "Id associated with the given user."
            },
            "updatedAt": {
              "type": "integer",
              "description": "Epoch time at which user details were last updated."
            },
            "online": {
              "type": "boolean",
              "description": "Whether given user is online now."
            },
            "notification": {
              "type": "boolean",
              "description": "Whether notifications are allowed for given user."
            },
            "metaData": {
              "type": "object",
              "description": "Metadata associated with the given user, if any."
            },
            "lastSeen": {
              "type": "integer",
              "description": "Time at which user was last seen online.Value is -1 if user is currently online."
            },
            "language": {
              "type": "string",
              "description": "Default language of the user.By default it is english."
            },
            "createdAt": {
              "type": "integer",
              "description": "Epoch time at which user was created."
            }
          },
          "description": "Model containing details of the non-blocked user fetched."
        },
        "Error_400_unblock_user": {
          "type": "object",
          "title": "Error_400_unblock_user",
          "required": [
            "error"
          ],
          "properties": {
            "error": {
              "type": "string",
              "description": "The message of the error raised."
            }
          },
          "description": "Not allowed to unblock user."
        },
        "BlockedUser": {
          "type": "object",
          "title": "Blocked user details",
          "required": [
            "metaData",
            "userId",
            "userIdentifier",
            "userProfileImageUrl",
            "userName"
          ],
          "properties": {
            "userProfileImageUrl": {
              "type": "string",
              "description": "Profilepic associated with the given user."
            },
            "userName": {
              "type": "string",
              "description": "Name associated with the given user."
            },
            "userIdentifier": {
              "type": "string",
              "description": "Identifier associated with the given user."
            },
            "userId": {
              "type": "string",
              "description": "Id associated with the given user."
            },
            "metaData": {
              "type": "object",
              "description": "Object containing metadata of the user, if any."
            }
          },
          "description": "Model containing details of the blocked user fetched."
        },
        "Error_401_authenticate_user": {
          "type": "object",
          "title": "Error_401_authenticate_user",
          "required": [
            "errorCode",
            "error"
          ],
          "properties": {
            "errorCode": {
              "type": "integer",
              "description": "0"
            },
            "error": {
              "type": "string",
              "description": "The message of the error raised."
            }
          },
          "description": "errorCode- 0 => Incorrect userIdentifier or password, 1 => Incorrect userSecret to authenticate user."
        },
        "Error_404_fetch_users": {
          "type": "object",
          "title": "Error_404_fetch_users",
          "required": [
            "errorCode",
            "error"
          ],
          "properties": {
            "errorCode": {
              "type": "integer",
              "description": "0"
            },
            "error": {
              "type": "string",
              "description": "The message of the error raised."
            }
          },
          "description": "errorCode- 0 => licenseKey not found, 1 => No users found."
        },
        "decode_project_credentials": {
          "type": "object",
          "title": "Response of decode project credentials request",
          "required": [
            "keysetId",
            "projectId",
            "accountId",
            "msg"
          ],
          "properties": {
            "projectId": {
              "type": "string",
              "description": "Project id associated with the given credentials."
            },
            "msg": {
              "type": "string",
              "description": "Message of project credentials being successfully decoded."
            },
            "keysetId": {
              "type": "string",
              "description": "keyset id associated with the given credentials."
            },
            "accountId": {
              "type": "string",
              "description": "Account id associated with the given credentials."
            }
          },
          "example": {
            "projectId": "ab42c9c5-wert-erty-12b2-2eb55d2f58e9",
            "msg": "Project credentials decoded successfully.",
            "keysetId": "2eb55d2f-12b2-wert-erty-ab42c9c5-58e9",
            "accountId": "5d2c6a8a21a38e07dadb1808"
          },
          "description": "Project credentials decoded successfully."
        },
        "Error_404_publish_message": {
          "type": "object",
          "title": "Error_404_publish_message",
          "required": [
            "errorCode",
            "error"
          ],
          "properties": {
            "errorCode": {
              "type": "integer",
              "description": "0"
            },
            "error": {
              "type": "string",
              "description": "The message of the error raised."
            }
          },
          "description": "errorCode- 0 => licenseKey not found."
        }
      }
    },
  "customOptions": {}
};
  url = options.swaggerUrl || url
  var urls = options.swaggerUrls
  var customOptions = options.customOptions
  var spec1 = options.swaggerDoc
  var swaggerOptions = {
    spec: spec1,
    url: url,
    urls: urls,
    dom_id: '#swagger-ui',
    deepLinking: true,
    presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIStandalonePreset
    ],
    plugins: [
      SwaggerUIBundle.plugins.DownloadUrl
    ],
    layout: "StandaloneLayout"
  }
  for (var attrname in customOptions) {
    swaggerOptions[attrname] = customOptions[attrname];
  }
  var ui = SwaggerUIBundle(swaggerOptions)

  if (customOptions.oauth) {
    ui.initOAuth(customOptions.oauth)
  }

  if (customOptions.authAction) {
    ui.authActions.authorize(customOptions.authAction)
  }

  window.ui = ui
}
