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
          "/chat/reaction": {
            "post": {
              "tags": [
                "Reaction"
              ],
              "summary": "Add reaction for a message in a conversation.",
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
                    "$ref": "#/definitions/Error_404_add_reaction"
                  },
                  "description": "Not Found"
                },
                "403": {
                  "schema": {
                    "$ref": "#/definitions/Error_403_reactions"
                  },
                  "description": "Forbidden"
                },
                "400": {
                  "schema": {
                    "$ref": "#/definitions/Error_400_add_reaction"
                  },
                  "description": "Bad Request"
                },
                "200": {
                  "schema": {
                    "$ref": "#/definitions/add_reaction"
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
                  "description": "License key to be used to add reaction for a message in a conversation in a project in an account."
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
                  "description": "Token of the user who is adding a reaction for a message."
                },
                {
                  "schema": {
                    "$ref": "#/definitions/body_add_reaction"
                  },
                  "required": true,
                  "name": "body",
                  "in": "body",
                  "description": "Body parameters for adding reaction for a message in a conversation."
                }
              ],
              "operationId": "Isometrik.ChatMessagesWeb.ReactionController.add_reaction",
              "description": "Add reaction for a message in a conversation in a project in an account."
            }
          },
          "/chat/messages/user": {
            "get": {
              "tags": [
                "Message"
              ],
              "summary": "Get messages for a user(sent or received).",
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
                    "$ref": "#/definitions/Error_404_fetch_user_messages"
                  },
                  "description": "Not Found"
                },
                "403": {
                  "schema": {
                    "$ref": "#/definitions/Error_403_fetch_user_messages"
                  },
                  "description": "Forbidden"
                },
                "200": {
                  "schema": {
                    "$ref": "#/definitions/fetch_user_messages"
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
                  "description": "License key to be used for fetching user messages(sent or received) in a project in an account."
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
                  "description": "Token of the user who is fetching messages."
                },
                {
                  "x-example": "5fce0ddc21a38e3f7e4b7098,5fce0d0f21a38e3f7ed60347,5fce0c5721a38e3f7e0f880b",
                  "type": "string",
                  "required": false,
                  "name": "ids",
                  "in": "query",
                  "description": "Comma seperated list containing ids of messages to be fetched."
                },
                {
                  "x-example": "0,1,2",
                  "type": "string",
                  "required": false,
                  "name": "messageTypes",
                  "in": "query",
                  "description": "Comma seperated list containing values of message types of messages to be fetched."
                },
                {
                  "x-example": "Custom type A, Custom type B",
                  "type": "string",
                  "required": false,
                  "name": "customTypes",
                  "in": "query",
                  "description": "Comma seperated list containing values of custom types of messages to be fetched."
                },
                {
                  "x-example": "1,2",
                  "type": "string",
                  "required": false,
                  "name": "attachmentTypes",
                  "in": "query",
                  "description": "Comma seperated list containing values of attachment types of messages to be fetched."
                },
                {
                  "x-example": true,
                  "type": "boolean",
                  "required": false,
                  "name": "showInConversation",
                  "in": "query",
                  "description": "Whether to fetch messages with showInConversation tag value as true or false."
                },
                {
                  "x-example": "5fb3c35f21a38ed228edd90e,5d2c6a9621a38e07daaee965",
                  "type": "string",
                  "required": false,
                  "name": "senderIds",
                  "in": "query",
                  "description": "Comma seperated list containing values of senderIds of messages to be fetched."
                },
                {
                  "x-example": "5fca3acf21a38e2eb61f5be0",
                  "type": "string",
                  "required": false,
                  "name": "parentMessageId",
                  "in": "query",
                  "description": "Id of the parent message of the messages to be fetched."
                },
                {
                  "x-example": 1608894475800,
                  "type": "integer",
                  "required": false,
                  "name": "lastMessageTimestamp",
                  "in": "query",
                  "description": "Messages sent after the given timestamp to be fetched."
                },
                {
                  "x-example": false,
                  "type": "boolean",
                  "required": false,
                  "name": "conversationStatusMessage",
                  "in": "query",
                  "description": "Whether to fetch messages of type conversation status or not."
                },
                {
                  "x-example": "Product name",
                  "type": "string",
                  "required": false,
                  "name": "searchTag",
                  "in": "query",
                  "description": "Specifies a search tag to filter the user messages."
                },
                {
                  "x-example": true,
                  "type": "boolean",
                  "required": false,
                  "name": "fetchConversationDetails",
                  "in": "query",
                  "description": "Whether to fetch conversation details for messages."
                },
                {
                  "x-example": true,
                  "type": "boolean",
                  "required": false,
                  "name": "deliveredToMe",
                  "in": "query",
                  "description": "Whether to fetch messages which have already been delivered to me."
                },
                {
                  "x-example": true,
                  "type": "boolean",
                  "required": false,
                  "name": "senderIdsExclusive",
                  "in": "query",
                  "description": "Whether to include or exclude the senders from list of senderIds."
                },
                {
                  "x-example": 10,
                  "type": "integer",
                  "required": false,
                  "name": "limit",
                  "in": "query",
                  "description": "Number of messages to be fetched.Allowed values are [1,20]",
                  "default": 20
                },
                {
                  "x-example": 10,
                  "type": "integer",
                  "required": false,
                  "name": "skip",
                  "in": "query",
                  "description": "Number of messages to be skipped before fetching messages(used for paging).",
                  "default": 0
                },
                {
                  "x-example": -1,
                  "type": "integer",
                  "required": false,
                  "name": "sort",
                  "in": "query",
                  "description": "Specifies the sorting criteria for the returned results.Allowed values are 1 and -1.Default is descending order, -1",
                  "default": -1
                }
              ],
              "operationId": "Isometrik.ChatMessagesWeb.MessageController.fetch_user_messages",
              "description": "Get messages for a user(sent or received) in a project in an account."
            }
          },
          "/chat/messages/presignedurls": {
            "post": {
              "tags": [
                "PresignedUrls"
              ],
              "summary": "Fetch presigned urls for attachments in a conversation.",
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
                    "$ref": "#/definitions/Error_404_presignedurls"
                  },
                  "description": "Not Found"
                },
                "403": {
                  "schema": {
                    "$ref": "#/definitions/Error_403_presignedurls"
                  },
                  "description": "Forbidden"
                },
                "400": {
                  "schema": {
                    "$ref": "#/definitions/Error_400_presignedurls"
                  },
                  "description": "Bad Request"
                },
                "200": {
                  "schema": {
                    "$ref": "#/definitions/presigned_urls"
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
                  "description": "License key to be used to fetch presigned urls for attachments in a conversation in a project in an account."
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
                  "description": "Token of the user who is fetching presigned urls for attachments."
                },
                {
                  "schema": {
                    "$ref": "#/definitions/body_presigned_urls"
                  },
                  "required": true,
                  "name": "body",
                  "in": "body",
                  "description": "Body parameters for fetching presigned urls for attachments in a conversation."
                }
              ],
              "operationId": "Isometrik.ChatMessagesWeb.PresignedUrlsController.presigned_urls",
              "description": "Fetch presigned urls for attachments in a conversation in a project in an account."
            }
          },
          "/chat/messages/mentioned": {
            "get": {
              "tags": [
                "Message"
              ],
              "summary": "Get mentioned messages for a user.",
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
                    "$ref": "#/definitions/Error_404_fetch_mentioned_messages"
                  },
                  "description": "Not Found"
                },
                "403": {
                  "schema": {
                    "$ref": "#/definitions/Error_403_fetch_mentioned_messages"
                  },
                  "description": "Forbidden"
                },
                "200": {
                  "schema": {
                    "$ref": "#/definitions/fetch_mentioned_messages"
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
                  "description": "License key to be used for fetching mentioned messages for a user in a project in an account."
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
                  "description": "Token of the user who is fetching messages in a conversation."
                },
                {
                  "x-example": "5fce0ddc21a38e3f7e4b7098,5fce0d0f21a38e3f7ed60347,5fce0c5721a38e3f7e0f880b",
                  "type": "string",
                  "required": false,
                  "name": "ids",
                  "in": "query",
                  "description": "Comma seperated list containing ids of messages to be fetched."
                },
                {
                  "x-example": "0,1,2",
                  "type": "string",
                  "required": false,
                  "name": "messageTypes",
                  "in": "query",
                  "description": "Comma seperated list containing values of message types of messages to be fetched."
                },
                {
                  "x-example": "Custom type A, Custom type B",
                  "type": "string",
                  "required": false,
                  "name": "customTypes",
                  "in": "query",
                  "description": "Comma seperated list containing values of custom types of messages to be fetched."
                },
                {
                  "x-example": "1,2",
                  "type": "string",
                  "required": false,
                  "name": "attachmentTypes",
                  "in": "query",
                  "description": "Comma seperated list containing values of attachment types of messages to be fetched."
                },
                {
                  "x-example": true,
                  "type": "boolean",
                  "required": false,
                  "name": "showInConversation",
                  "in": "query",
                  "description": "Whether to fetch messages with showInConversation tag value as true or false."
                },
                {
                  "x-example": "5fb3c35f21a38ed228edd90e,5d2c6a9621a38e07daaee965",
                  "type": "string",
                  "required": false,
                  "name": "senderIds",
                  "in": "query",
                  "description": "Comma seperated list containing values of senderIds of messages to be fetched."
                },
                {
                  "x-example": "5fca3acf21a38e2eb61f5be0",
                  "type": "string",
                  "required": false,
                  "name": "parentMessageId",
                  "in": "query",
                  "description": "Id of the parent message of the messages to be fetched."
                },
                {
                  "x-example": 1608894475800,
                  "type": "integer",
                  "required": false,
                  "name": "lastMessageTimestamp",
                  "in": "query",
                  "description": "Messages sent after the given timestamp to be fetched."
                },
                {
                  "x-example": "Product name",
                  "type": "string",
                  "required": false,
                  "name": "searchTag",
                  "in": "query",
                  "description": "Specifies a search tag to filter the mentioned messages."
                },
                {
                  "x-example": true,
                  "type": "boolean",
                  "required": false,
                  "name": "deliveredToMe",
                  "in": "query",
                  "description": "Whether to fetch messages which have already been delivered to me."
                },
                {
                  "x-example": true,
                  "type": "boolean",
                  "required": false,
                  "name": "senderIdsExclusive",
                  "in": "query",
                  "description": "Whether to include or exclude the senders from list of senderIds."
                },
                {
                  "x-example": 10,
                  "type": "integer",
                  "required": false,
                  "name": "limit",
                  "in": "query",
                  "description": "Number of messages to be fetched.Allowed values are [1,20]",
                  "default": 20
                },
                {
                  "x-example": 10,
                  "type": "integer",
                  "required": false,
                  "name": "skip",
                  "in": "query",
                  "description": "Number of messages to be skipped before fetching messages(used for paging).",
                  "default": 0
                },
                {
                  "x-example": -1,
                  "type": "integer",
                  "required": false,
                  "name": "sort",
                  "in": "query",
                  "description": "Specifies the sorting criteria for the returned results.Allowed values are 1 and -1.Default is descending order, -1",
                  "default": -1
                }
              ],
              "operationId": "Isometrik.ChatMessagesWeb.MessageController.fetch_mentioned_messages",
              "description": "Get messages in which user has been mentioned in a project in an account."
            }
          },
          "/chat/messages/count": {
            "get": {
              "tags": [
                "Message"
              ],
              "summary": "Get messages count in conversation.",
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
                    "$ref": "#/definitions/Error_404_fetch_messages_count"
                  },
                  "description": "Not Found"
                },
                "403": {
                  "schema": {
                    "$ref": "#/definitions/Error_403_fetch_messages_count"
                  },
                  "description": "Forbidden"
                },
                "400": {
                  "schema": {
                    "$ref": "#/definitions/Error_400_fetch_messages_count"
                  },
                  "description": "Bad Request"
                },
                "200": {
                  "schema": {
                    "$ref": "#/definitions/fetch_messages_count"
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
                  "description": "License key to be used for fetching messages count in a conversation in a project in an account."
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
                  "description": "Token of the user who is fetching count of messages in a conversation."
                },
                {
                  "x-example": "5d2c6a9621a38e07daaee965",
                  "type": "string",
                  "required": true,
                  "name": "converationId",
                  "in": "query",
                  "description": "Id of the conversation whose count of messages are to be fetched."
                },
                {
                  "x-example": "5fce0ddc21a38e3f7e4b7098,5fce0d0f21a38e3f7ed60347,5fce0c5721a38e3f7e0f880b",
                  "type": "string",
                  "required": false,
                  "name": "ids",
                  "in": "query",
                  "description": "Comma seperated list containing ids of messages to be fetched."
                },
                {
                  "x-example": "0,1,2",
                  "type": "string",
                  "required": false,
                  "name": "messageTypes",
                  "in": "query",
                  "description": "Comma seperated list containing values of message types of messages to be fetched."
                },
                {
                  "x-example": "Custom type A, Custom type B",
                  "type": "string",
                  "required": false,
                  "name": "customTypes",
                  "in": "query",
                  "description": "Comma seperated list containing values of custom types of messages to be fetched."
                },
                {
                  "x-example": "1,2",
                  "type": "string",
                  "required": false,
                  "name": "attachmentTypes",
                  "in": "query",
                  "description": "Comma seperated list containing values of attachment types of messages to be fetched."
                },
                {
                  "x-example": true,
                  "type": "boolean",
                  "required": false,
                  "name": "showInConversation",
                  "in": "query",
                  "description": "Whether to fetch messages with showInConversation tag value as true or false."
                },
                {
                  "x-example": "5fb3c35f21a38ed228edd90e,5d2c6a9621a38e07daaee965",
                  "type": "string",
                  "required": false,
                  "name": "senderIds",
                  "in": "query",
                  "description": "Comma seperated list containing values of senderIds of messages to be fetched."
                },
                {
                  "x-example": "5fca3acf21a38e2eb61f5be0",
                  "type": "string",
                  "required": false,
                  "name": "parentMessageId",
                  "in": "query",
                  "description": "Id of the parent message of the messages to be fetched."
                },
                {
                  "x-example": 1608894475800,
                  "type": "integer",
                  "required": false,
                  "name": "lastMessageTimestamp",
                  "in": "query",
                  "description": "Messages sent after the given timestamp to be fetched."
                },
                {
                  "x-example": false,
                  "type": "boolean",
                  "required": false,
                  "name": "conversationStatusMessage",
                  "in": "query",
                  "description": "Whether to fetch messages of type conversation status or not."
                },
                {
                  "x-example": true,
                  "type": "boolean",
                  "required": false,
                  "name": "senderIdsExclusive",
                  "in": "query",
                  "description": "Whether to include or exclude the senders from list of senderIds."
                }
              ],
              "operationId": "Isometrik.ChatMessagesWeb.MessageController.fetch_messages_count",
              "description": "Get messages count in conversation in a project in an account."
            }
          },
          "/chat/messages": {
            "get": {
              "tags": [
                "Message"
              ],
              "summary": "Get messages in conversation.",
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
                    "$ref": "#/definitions/Error_404_fetch_messages"
                  },
                  "description": "Not Found"
                },
                "403": {
                  "schema": {
                    "$ref": "#/definitions/Error_403_fetch_messages"
                  },
                  "description": "Forbidden"
                },
                "400": {
                  "schema": {
                    "$ref": "#/definitions/Error_400_fetch_messages"
                  },
                  "description": "Bad Request"
                },
                "200": {
                  "schema": {
                    "$ref": "#/definitions/fetch_messages"
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
                  "description": "License key to be used for fetching messages in a conversation in a project in an account."
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
                  "description": "Token of the user who is fetching messages in a conversation."
                },
                {
                  "x-example": "5d2c6a9621a38e07daaee965",
                  "type": "string",
                  "required": true,
                  "name": "converationId",
                  "in": "query",
                  "description": "Id of the conversation whose messages are to be fetched."
                },
                {
                  "x-example": "5fce0ddc21a38e3f7e4b7098,5fce0d0f21a38e3f7ed60347,5fce0c5721a38e3f7e0f880b",
                  "type": "string",
                  "required": false,
                  "name": "ids",
                  "in": "query",
                  "description": "Comma seperated list containing ids of messages to be fetched."
                },
                {
                  "x-example": "0,1,2",
                  "type": "string",
                  "required": false,
                  "name": "messageTypes",
                  "in": "query",
                  "description": "Comma seperated list containing values of message types of messages to be fetched."
                },
                {
                  "x-example": "Custom type A, Custom type B",
                  "type": "string",
                  "required": false,
                  "name": "customTypes",
                  "in": "query",
                  "description": "Comma seperated list containing values of custom types of messages to be fetched."
                },
                {
                  "x-example": "1,2",
                  "type": "string",
                  "required": false,
                  "name": "attachmentTypes",
                  "in": "query",
                  "description": "Comma seperated list containing values of attachment types of messages to be fetched."
                },
                {
                  "x-example": true,
                  "type": "boolean",
                  "required": false,
                  "name": "showInConversation",
                  "in": "query",
                  "description": "Whether to fetch messages with showInConversation tag value as true or false."
                },
                {
                  "x-example": "5fb3c35f21a38ed228edd90e,5d2c6a9621a38e07daaee965",
                  "type": "string",
                  "required": false,
                  "name": "senderIds",
                  "in": "query",
                  "description": "Comma seperated list containing values of senderIds of messages to be fetched."
                },
                {
                  "x-example": "5fca3acf21a38e2eb61f5be0",
                  "type": "string",
                  "required": false,
                  "name": "parentMessageId",
                  "in": "query",
                  "description": "Id of the parent message of the messages to be fetched."
                },
                {
                  "x-example": 1608894475800,
                  "type": "integer",
                  "required": false,
                  "name": "lastMessageTimestamp",
                  "in": "query",
                  "description": "Messages sent after the given timestamp to be fetched."
                },
                {
                  "x-example": false,
                  "type": "boolean",
                  "required": false,
                  "name": "conversationStatusMessage",
                  "in": "query",
                  "description": "Whether to fetch messages of type conversation status or not."
                },
                {
                  "x-example": "Product name",
                  "type": "string",
                  "required": false,
                  "name": "searchTag",
                  "in": "query",
                  "description": "Specifies a search tag to filter the messages in conversation."
                },
                {
                  "x-example": true,
                  "type": "boolean",
                  "required": false,
                  "name": "deliveredToMe",
                  "in": "query",
                  "description": "Whether to fetch messages which have already been delivered to me."
                },
                {
                  "x-example": true,
                  "type": "boolean",
                  "required": false,
                  "name": "senderIdsExclusive",
                  "in": "query",
                  "description": "Whether to include or exclude the senders from list of senderIds."
                },
                {
                  "x-example": 10,
                  "type": "integer",
                  "required": false,
                  "name": "limit",
                  "in": "query",
                  "description": "Number of messages to be fetched.Allowed values are [1,20]",
                  "default": 20
                },
                {
                  "x-example": 10,
                  "type": "integer",
                  "required": false,
                  "name": "skip",
                  "in": "query",
                  "description": "Number of messages to be skipped before fetching messages(used for paging).",
                  "default": 0
                },
                {
                  "x-example": -1,
                  "type": "integer",
                  "required": false,
                  "name": "sort",
                  "in": "query",
                  "description": "Specifies the sorting criteria for the returned results.Allowed values are 1 and -1.Default is descending order, -1",
                  "default": -1
                }
              ],
              "operationId": "Isometrik.ChatMessagesWeb.MessageController.fetch_messages",
              "description": "Get messages in conversation in a project in an account."
            }
          },
          "/chat/message/{reactionType}": {
            "get": {
              "tags": [
                "Reaction"
              ],
              "summary": "Fetch reactions of a reaction type for a message in a conversation.",
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
                    "$ref": "#/definitions/Error_404_fetch_reactions"
                  },
                  "description": "Not Found"
                },
                "403": {
                  "schema": {
                    "$ref": "#/definitions/Error_403_reactions"
                  },
                  "description": "Forbidden"
                },
                "400": {
                  "schema": {
                    "$ref": "#/definitions/Error_400_fetch_reactions"
                  },
                  "description": "Bad Request"
                },
                "200": {
                  "schema": {
                    "$ref": "#/definitions/fetch_reactions"
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
                  "description": "License key to be used to fetch reactions of a reaction type for a message in a conversation in a project in an account."
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
                  "description": "Token of the user who is fetching the reactions for a message."
                },
                {
                  "x-example": "5fe0b8c921a38ec829956130",
                  "type": "string",
                  "required": true,
                  "name": "conversationId",
                  "in": "query",
                  "description": "Id of the conversation containing message to fetch reactions for."
                },
                {
                  "x-example": "5ffc63cd21a38e05e48616dd",
                  "type": "string",
                  "required": true,
                  "name": "messageId",
                  "in": "query",
                  "description": "If of the message to fetch reactions for."
                },
                {
                  "x-example": "yes",
                  "type": "string",
                  "required": true,
                  "name": "reactionType",
                  "in": "path",
                  "description": "Type of reactions to be fetched.Allowed values are- {yes, surprised, crying_with_laughter,crying,heart,sarcastic,rock,facepal,star,no,BOWING\n                                      party, high_five,talking_too_much,dancing}"
                },
                {
                  "x-example": 10,
                  "type": "integer",
                  "required": false,
                  "name": "limit",
                  "in": "query",
                  "description": "Number of users(with given reaction type) to be fetched.Allowed values are [1,20]",
                  "default": 20
                },
                {
                  "x-example": 10,
                  "type": "integer",
                  "required": false,
                  "name": "skip",
                  "in": "query",
                  "description": "Number of users(with given reaction type) to be skipped before fetching users(used for paging).",
                  "default": 0
                }
              ],
              "operationId": "Isometrik.ChatMessagesWeb.ReactionController.fetch_reactions",
              "description": "Fetch reactions of a reaction type for a message in a conversation in a project in an account."
            },
            "delete": {
              "tags": [
                "Reaction"
              ],
              "summary": "Remove reaction of a reaction type for a message in a conversation.",
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
                    "$ref": "#/definitions/Error_404_remove_reaction"
                  },
                  "description": "Not Found"
                },
                "403": {
                  "schema": {
                    "$ref": "#/definitions/Error_403_reactions"
                  },
                  "description": "Forbidden"
                },
                "400": {
                  "schema": {
                    "$ref": "#/definitions/Error_400_remove_reaction"
                  },
                  "description": "Bad Request"
                },
                "200": {
                  "schema": {
                    "$ref": "#/definitions/remove_reaction"
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
                  "description": "License key to be used to remove reaction of a reaction type for a message in a conversation in a project in an account."
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
                  "description": "Token of the user who is removing a reaction for a message."
                },
                {
                  "x-example": "5fe0b8c921a38ec829956130",
                  "type": "string",
                  "required": true,
                  "name": "conversationId",
                  "in": "query",
                  "description": "Id of the conversation containing message to remove reaction for."
                },
                {
                  "x-example": "5ffc63cd21a38e05e48616dd",
                  "type": "string",
                  "required": true,
                  "name": "messageId",
                  "in": "query",
                  "description": "If of the message to remove reaction for."
                },
                {
                  "x-example": "yes",
                  "type": "string",
                  "required": true,
                  "name": "reactionType",
                  "in": "path",
                  "description": "Type of reaction to be removed.Allowed values are- {yes, surprised, crying_with_laughter,crying,heart,sarcastic,rock,facepal,star,no,BOWING\n                                      party, high_five,talking_too_much,dancing}"
                }
              ],
              "operationId": "Isometrik.ChatMessagesWeb.ReactionController.remove_reaction",
              "description": "Remove reaction of a reaction type for a message in a conversation in a project in an account."
            }
          },
          "/chat/message": {
            "post": {
              "tags": [
                "Message"
              ],
              "summary": "Send a message.",
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
                    "$ref": "#/definitions/Error_404_send_message"
                  },
                  "description": "Not Found"
                },
                "403": {
                  "schema": {
                    "$ref": "#/definitions/Error_403_send_message"
                  },
                  "description": "Forbidden"
                },
                "400": {
                  "schema": {
                    "$ref": "#/definitions/Error_400_send_message"
                  },
                  "description": "Bad Request"
                },
                "200": {
                  "schema": {
                    "$ref": "#/definitions/send_message"
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
                  "description": "License key to be used for sending a message to a conversation in a project in an account."
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
                  "description": "Token of the user user who is sending message."
                },
                {
                  "schema": {
                    "$ref": "#/definitions/body_send_message"
                  },
                  "required": true,
                  "name": "body",
                  "in": "body",
                  "description": "Body parameters to send a message to a conversation."
                }
              ],
              "operationId": "Isometrik.ChatMessagesWeb.MessageController.send_message",
              "description": "Send a message to a conversation in a project in an account."
            },
            "patch": {
              "tags": [
                "Message"
              ],
              "summary": "Update details(searchableTags or body or customType or metadata) of a message.",
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
                    "$ref": "#/definitions/Error_404_update_message"
                  },
                  "description": "Not Found"
                },
                "403": {
                  "schema": {
                    "$ref": "#/definitions/Error_403_update_message"
                  },
                  "description": "Forbidden"
                },
                "400": {
                  "schema": {
                    "$ref": "#/definitions/Error_400_update_message"
                  },
                  "description": "Bad Request"
                },
                "200": {
                  "schema": {
                    "$ref": "#/definitions/update_message"
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
                  "description": "License key to be used for updating details(searchableTags or body or customType or metadata) of a message in a project in an account."
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
                  "description": "Token of the user who is updating details(searchableTags or body or customType or metadata) of message."
                },
                {
                  "schema": {
                    "$ref": "#/definitions/body_update_message"
                  },
                  "required": true,
                  "name": "body",
                  "in": "body",
                  "description": "Body parameters for updating details(searchableTags or body or customType or metadata) of a message."
                }
              ],
              "operationId": "Isometrik.ChatMessagesWeb.MessageController.update_message",
              "description": "Update details(searchableTags or body or customType or metadata) of a message in a project in an account."
            }
          }
        },
        "info": {
          "version": "1.0",
          "title": "ChatMessagesWeb"
        },
        "definitions": {
          "FetchMentionedUsers": {
            "type": "array",
            "title": "Mentioned users",
            "items": {
              "$ref": "#/definitions/FetchMentionedUser"
            },
            "description": "All mentioned users fetched for a message."
          },
          "Error_404_send_message": {
            "type": "object",
            "title": "Error_404_send_message",
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
            "description": "errorCode- 0 => licenseKey not found, 1 => Parent message not found(incase of reply message), 2 => Mentioned users or sender not found."
          },
          "FetchMentionedUser": {
            "type": "object",
            "title": "Mentioned user details",
            "required": [
              "metaData",
              "lastSeen",
              "online",
              "userIdentifier",
              "userProfileImageUrl",
              "userName",
              "userId",
              "wordCount",
              "order"
            ],
            "properties": {
              "wordCount": {
                "type": "integer",
                "description": "Mentioned user's name word count."
              },
              "userProfileImageUrl": {
                "type": "string",
                "description": "Profilepic associated with the mentioned user."
              },
              "userName": {
                "type": "string",
                "description": "Name associated with the mentioned user."
              },
              "userIdentifier": {
                "type": "string",
                "description": "Identifier associated with the mentioned user."
              },
              "userId": {
                "type": "string",
                "description": "User ID of mentioned user."
              },
              "order": {
                "type": "integer",
                "description": "Mention user's order in the message in reference to another mentioned user."
              },
              "online": {
                "type": "boolean",
                "description": "Whether mentioned user is online now."
              },
              "metaData": {
                "type": "object",
                "description": "Object containing metadata of the mentioned user, if any."
              },
              "lastSeen": {
                "type": "integer",
                "description": "Epoch time at which mentioned user was last seen online.Value is -1 incase user is online now"
              }
            },
            "description": "Model containing details of the mentioned user."
          },
          "Error_403_fetch_mentioned_messages": {
            "type": "object",
            "title": "Error_403_fetch_mentioned_messages",
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
          "Error_404_update_message": {
            "type": "object",
            "title": "Error_404_update_message",
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
          "MentionedOrUserMessage": {
            "type": "object",
            "title": "Mentioned or user message details",
            "required": [
              "readByAll",
              "deliveredToAll",
              "searchableTags",
              "conversationImageUrl",
              "conversationTitle",
              "privateOneToOne",
              "sentAt",
              "messageId"
            ],
            "properties": {
              "updatedAt": {
                "type": "integer",
                "description": "Epoch time at which message was last updated at."
              },
              "showInConversation": {
                "type": "boolean",
                "description": "Whether the message needs to be show in conversation."
              },
              "sentAt": {
                "type": "integer",
                "description": "Epoch time at which message was sent at."
              },
              "senderInfo": {
                "$ref": "#/definitions/User"
              },
              "senderId": {
                "type": "string",
                "description": "Id of the user who sent message."
              },
              "searchableTags": {
                "type": "array",
                "description": "List containing tags by which message can be searched."
              },
              "readByAll": {
                "type": "boolean",
                "description": "Whether given message is read by all conversation members or not."
              },
              "readBy": {
                "$ref": "#/definitions/DeliveryReadDetails"
              },
              "reactions": {
                "type": "object",
                "description": "Object containing info of rections added for the message."
              },
              "privateOneToOne": {
                "type": "boolean",
                "description": "Whether given conversation is private one to one."
              },
              "parentMessageId": {
                "type": "string",
                "description": "Id of the message for which to send reply(Mandatory for reply messages)."
              },
              "opponentDetails": {
                "$ref": "#/definitions/Opponent"
              },
              "metaData": {
                "type": "object",
                "description": "Additional information of the message that you can save like tags etc, if any."
              },
              "messageType": {
                "type": "integer",
                "description": "Type of message-possible values are 0(normal)/1(forwarded)."
              },
              "messageId": {
                "type": "string",
                "description": "Id of the message fetched."
              },
              "mentionedUsers": {
                "$ref": "#/definitions/FetchMentionedUsers"
              },
              "events": {
                "$ref": "#/definitions/Events"
              },
              "encrypted": {
                "type": "boolean",
                "description": "Whether the message is encrypted."
              },
              "deliveryReadEventsEnabled": {
                "type": "boolean",
                "description": "Whether message delivery/read events are enabled or not for conversation."
              },
              "deliveredToAll": {
                "type": "boolean",
                "description": "Whether given message is delivered to all conversation members or not."
              },
              "deliveredTo": {
                "$ref": "#/definitions/DeliveryReadDetails"
              },
              "customType": {
                "type": "string",
                "description": "Custom message type, if any."
              },
              "conversationTitle": {
                "type": "string",
                "description": "Title of conversation.null for private one-one conversations."
              },
              "conversationImageUrl": {
                "type": "string",
                "description": "Cover image url of conversation.null for private one-one conversations."
              },
              "conversationId": {
                "type": "string",
                "description": "Id of the conversation in which message was sent."
              },
              "body": {
                "type": "string",
                "description": "Body of the message fetched."
              },
              "attachments": {
                "$ref": "#/definitions/Attachments"
              }
            },
            "description": "Model containing details of the mentioned or user message fetched."
          },
          "Error_403_fetch_messages": {
            "type": "object",
            "title": "Error_403_fetch_messages",
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
          "Error_403_presignedurls": {
            "type": "object",
            "title": "Error_403_presignedurls",
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
            "description": "errorCode- 0 => Limit of maximum allowed messages reached, 11 => Account not verified yet, 12 => Account has been suspended, 13 => Invalid account status, 14 => Billing subscription not added, 15 => Billing subscription expired or not renewed or canceled, 16 => Invalid project status, 17 => Billing subscription expired."
          },
          "Message": {
            "type": "object",
            "title": "Message details",
            "required": [
              "readByAll",
              "deliveredToAll",
              "searchableTags",
              "sentAt",
              "messageId"
            ],
            "properties": {
              "updatedAt": {
                "type": "integer",
                "description": "Epoch time at which message was last updated at."
              },
              "showInConversation": {
                "type": "boolean",
                "description": "Whether the message needs to be show in conversation."
              },
              "sentAt": {
                "type": "integer",
                "description": "Epoch time at which message was sent at."
              },
              "senderInfo": {
                "$ref": "#/definitions/User"
              },
              "senderId": {
                "type": "string",
                "description": "Id of the user who sent message."
              },
              "searchableTags": {
                "type": "array",
                "description": "List containing tags by which message can be searched."
              },
              "readByAll": {
                "type": "boolean",
                "description": "Whether given message is read by all conversation members or not."
              },
              "readBy": {
                "$ref": "#/definitions/DeliveryReadDetails"
              },
              "reactions": {
                "type": "object",
                "description": "Object containing info of rections added for the message."
              },
              "parentMessageId": {
                "type": "string",
                "description": "Id of the message for which to send reply(Mandatory for reply messages)."
              },
              "metaData": {
                "type": "object",
                "description": "Additional information of the message that you can save like tags etc, if any."
              },
              "messageType": {
                "type": "integer",
                "description": "Type of message-possible values are 0(normal)/1(forwarded)."
              },
              "messageId": {
                "type": "string",
                "description": "Id of the message fetched."
              },
              "mentionedUsers": {
                "$ref": "#/definitions/FetchMentionedUsers"
              },
              "events": {
                "$ref": "#/definitions/Events"
              },
              "encrypted": {
                "type": "boolean",
                "description": "Whether the message is encrypted."
              },
              "deliveryReadEventsEnabled": {
                "type": "boolean",
                "description": "Whether message delivery/read events are enabled or not for conversation."
              },
              "deliveredToAll": {
                "type": "boolean",
                "description": "Whether given message is delivered to all conversation members or not."
              },
              "deliveredTo": {
                "$ref": "#/definitions/DeliveryReadDetails"
              },
              "customType": {
                "type": "string",
                "description": "Custom message type, if any."
              },
              "conversationId": {
                "type": "string",
                "description": "Id of the conversation in which message was sent."
              },
              "body": {
                "type": "string",
                "description": "Body of the message fetched."
              },
              "attachments": {
                "$ref": "#/definitions/Attachments"
              }
            },
            "description": "Model containing details of the message fetched."
          },
          "body_send_message": {
            "type": "object",
            "title": "Body of the send message request",
            "required": [
              "deviceId",
              "conversationId",
              "encrypted",
              "showInConversation",
              "body",
              "messageType"
            ],
            "properties": {
              "showInConversation": {
                "type": "boolean",
                "description": "Whether the message needs to be show in conversation."
              },
              "searchableTags": {
                "type": "array",
                "description": "List containing tags by which message can be searched(Maximum 20)."
              },
              "parentMessageId": {
                "type": "string",
                "description": "Id of the message for which to send reply(Mandatory for reply messages)."
              },
              "notificationTitle": {
                "type": "string",
                "description": "User defined notification title, if any."
              },
              "notificationBody": {
                "type": "string",
                "description": "User defined notification body, if any."
              },
              "metaData": {
                "type": "object",
                "description": "Additional information of the message that you can save like tags etc, if any."
              },
              "messageType": {
                "type": "integer",
                "description": "Type of message-allowed values are 0(normal)/1(forwarded)/2(reply)/3(admin)."
              },
              "mentionedUsers": {
                "$ref": "#/definitions/MentionedUsers"
              },
              "events": {
                "$ref": "#/definitions/Events"
              },
              "encrypted": {
                "type": "boolean",
                "description": "Whether the message is encrypted."
              },
              "deviceId": {
                "type": "string",
                "description": "Id of the device from which message was sent."
              },
              "customType": {
                "type": "string",
                "description": "Custom message type, if any."
              },
              "conversationId": {
                "type": "string",
                "description": "Id of the conversation in which to send the message."
              },
              "body": {
                "type": "string",
                "description": "Body of the message sent."
              },
              "attachments": {
                "$ref": "#/definitions/Attachments"
              }
            },
            "example": {
              "showInConversation": true,
              "searchableTags": [
                "public"
              ],
              "notificationTitle": "Notification Title",
              "notificationBody": "Notification body",
              "metaData": {
                "secretMessage": true
              },
              "messageType": 0,
              "mentionedUsers": [
                {
                  "wordCount": 2,
                  "userId": "5fb3daec21a38e73938a8d5b",
                  "order": 1
                }
              ],
              "events": {
                "updateUnreadCount": false,
                "sendPushNotification": true
              },
              "encrypted": true,
              "deviceId": "ygd8zotW7",
              "customType": "SelfDestruct",
              "conversationId": "6017d0da21a38e3440b3cb9c",
              "body": "message body",
              "attachments": [
                {
                  "thumbnailUrl": "https://sample-file-url/media/1576213941566-unnamed-thumbnail.png",
                  "size": 95860,
                  "name": "unnamed.jpg",
                  "mimeType": "image/jpeg",
                  "mediaUrl": "https://sample-file-url/1576213941566-unnamed.jpg",
                  "mediaId": "5df31dba3a22d30037d62066",
                  "extension": "jpg",
                  "attachmentType": 0
                }
              ]
            },
            "description": "Details of the send message request."
          },
          "Error_404_fetch_reactions": {
            "type": "object",
            "title": "Error_404_fetch_reactions",
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
            "description": "errorCode- 0 => licenseKey not found, 1 => Message not found, 2 => Reactions not found."
          },
          "Error_400_update_message": {
            "type": "object",
            "title": "Error_400_update_message",
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
            "description": "errorCode- 0 => Atleast one of body, searchableTags, metaData, customType should be non-null, 1 => Conversation not found or not allowed to update message, 2 => Message not found or not allowed to update message."
          },
          "Error_404_remove_reaction": {
            "type": "object",
            "title": "Error_404_remove_reaction",
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
            "description": "errorCode- 0 => licenseKey not found, 1 => Message not found or not allowed to remove reaction."
          },
          "remove_reaction": {
            "type": "object",
            "title": "Response of remove reaction for a message in conversation request",
            "required": [
              "reactionsCount",
              "msg"
            ],
            "properties": {
              "reactionsCount": {
                "type": "integer",
                "description": "Number of reactions of given type for message."
              },
              "msg": {
                "type": "string",
                "description": "Message of reaction being successfully removed for a message."
              }
            },
            "example": {
              "reactionsCount": 0,
              "msg": "Reaction removed successfully."
            },
            "description": "Successfully removed reaction for a message in conversation."
          },
          "Attachment": {
            "type": "object",
            "title": "Attachment details",
            "required": [
              "mediaType",
              "nameWithExtension",
              "mediaId"
            ],
            "properties": {
              "nameWithExtension": {
                "type": "string",
                "description": "Name of the media(with extension appended)."
              },
              "mediaType": {
                "type": "integer",
                "description": "Media attachment type.Supported value 0 to 3, 0-Image, 1-Video, 2-Audio, 3-File."
              },
              "mediaId": {
                "type": "string",
                "description": "Unique identifier of the attachment media."
              }
            },
            "description": "Model containing details of the attachment."
          },
          "DeliveryReadDetails": {
            "type": "array",
            "title": "Message delivery/read details",
            "items": {
              "$ref": "#/definitions/DeliveryReadDetail"
            },
            "description": "All delivery/read details to/by users for a message."
          },
          "Messages": {
            "type": "array",
            "title": "Messages fetch",
            "items": {
              "$ref": "#/definitions/Message"
            },
            "description": "All messages list."
          },
          "body_add_reaction": {
            "type": "object",
            "title": "Body of the add reaction for a message request",
            "required": [
              "reactionType",
              "messageId",
              "conversationId"
            ],
            "properties": {
              "reactionType": {
                "type": "string",
                "description": "Type of reaction to be added.Allowed values are- {yes, surprised, crying_with_laughter,crying,heart,sarcastic,rock,facepal,star,no,BOWING\n                                      party, high_five,talking_too_much,dancing}"
              },
              "messageId": {
                "type": "string",
                "description": "If of the message to add reaction for."
              },
              "conversationId": {
                "type": "string",
                "description": "Id of the conversation containing message to add reaction for."
              }
            },
            "example": {
              "reactionType": "yes",
              "messageId": "5ffc63cd21a38e05e48616dd",
              "conversationId": "5fe0b8c921a38ec829956130"
            },
            "description": "Details of the add reaction for a message request."
          },
          "MentionedUsers": {
            "type": "array",
            "title": "Mentioned users",
            "items": {
              "$ref": "#/definitions/MentionedUser"
            },
            "description": "All mentioned users for a message."
          },
          "Error_400_fetch_messages": {
            "type": "object",
            "title": "Error_400_fetch_messages",
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
            "description": "Conversation not found or not allowed to fetch messages."
          },
          "Error_404_fetch_messages_count": {
            "type": "object",
            "title": "Error_404_fetch_messages_count",
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
            "description": "errorCode- 0 => licenseKey not found, 1 => Messages not found."
          },
          "Error_403_send_message": {
            "type": "object",
            "title": "Error_403_send_message",
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
            "description": "errorCode- 0 => Allowed messages limit exceeded, 1 => Allowed messages limit shall be exceeded, 2 => Message sender has been blocked by receiver, 11 => Account not verified yet, 12 => Account has been suspended, 13 => Invalid account status, 14 => Billing subscription not added, 15 => Billing subscription expired or not renewed or canceled, 16 => Invalid project status, 17 => Billing subscription expired."
          },
          "Error_404_fetch_messages": {
            "type": "object",
            "title": "Error_404_fetch_messages",
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
            "description": "errorCode- 0 => licenseKey not found, 1 => Messages not found."
          },
          "body_presigned_urls": {
            "type": "object",
            "title": "Body of the fetch presigned urls for attachments request",
            "required": [
              "conversationId"
            ],
            "properties": {
              "conversationId": {
                "type": "string",
                "description": "Id of the conversation for which to fetch presigned urls for attachments."
              },
              "attachments": {
                "$ref": "#/definitions/Attachments"
              }
            },
            "example": {
              "conversationId": "5fe0b8c921a38ec829956130",
              "attachments": [
                {
                  "nameWithExtension": "unnamed.jpg",
                  "mediaType": 0,
                  "mediaId": "5df31dba3a22d30037d62066"
                }
              ]
            },
            "description": "Details of the fetching presigned urls for attachments request."
          },
          "Error_403_update_message": {
            "type": "object",
            "title": "Error_403_update_message",
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
          "presigned_urls": {
            "type": "object",
            "title": "Response of fetch presigned urls for attachments in conversation request",
            "required": [
              "msg"
            ],
            "properties": {
              "presignedUrls": {
                "$ref": "#/definitions/PresignedUrls"
              },
              "msg": {
                "type": "string",
                "description": "Message of presigned urls being successfully fetched."
              }
            },
            "example": {
              "presignedUrls": [
                {
                  "ttl": 600,
                  "thumbnailUrl": "http://s3.amazonaws.com/my-bucket/photos/f7b4190594e1-3c55bf4c-cc9f-4ef4-bb53.jpg",
                  "thumbnailPresignedUrl": "https://ism-attachments.s3.us-west-2.amazonaws.com/Thumbnail/ELB.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIATYFARKGKM57LC3WG%2F20220704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220704T103245Z&X-Amz-Expires=300&X-Amz-Signature=c06896239eb96e8032cdb7be3de7ff1e4de60d78f5977ce681bf5ee9df5aad03&X-Amz-SignedHeaders=host",
                  "mediaUrl": "http://s3.amazonaws.com/my-bucket/photos/3c55bf4c-cc9f-4ef4-bb53-f7b4190594e1.jpg",
                  "mediaPresignedUrl": "https://ism-attachments.s3.us-west-2.amazonaws.com/test/ELB.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIATYFARKGKM57LC3WG%2F20220704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220704T103245Z&X-Amz-Expires=300&X-Amz-Signature=c06896239eb96e8032cdb7be3de7ff1e4de60d78f5977ce681bf5ee9df5aad03&X-Amz-SignedHeaders=host",
                  "mediaId": "5df31dba3a22d30037d62066"
                }
              ],
              "msg": "Presigned urls fetched successfully."
            },
            "description": "Successfully fetched presigned urls for attachments in conversation."
          },
          "Error_400_fetch_messages_count": {
            "type": "object",
            "title": "Error_400_fetch_messages_count",
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
            "description": "Conversation not found or not allowed to fetch messages count."
          },
          "Events": {
            "type": "object",
            "title": "Message events details",
            "required": [
              "updateUnreadCount",
              "sendPushNotification"
            ],
            "properties": {
              "updateUnreadCount": {
                "type": "boolean",
                "description": "Whether to update unread messages count."
              },
              "sendPushNotification": {
                "type": "boolean",
                "description": "Whether to send push notification."
              }
            },
            "description": "Model containing details of the message events."
          },
          "update_message": {
            "type": "object",
            "title": "Response of update message(searchableTags or body or customType or metadata) request",
            "required": [
              "msg"
            ],
            "properties": {
              "msg": {
                "type": "string",
                "description": "Message of message details(searchableTags or body or customType or metadata) being successfully updated."
              }
            },
            "example": {
              "msg": "Message updated successfully."
            },
            "description": "Successfully updated message details(searchableTags or body or customType or metadata)."
          },
          "fetch_mentioned_messages": {
            "type": "object",
            "title": "Response of fetch mentioned messages of a user request",
            "required": [
              "msg"
            ],
            "properties": {
              "msg": {
                "type": "string",
                "description": "Message of messages in which user has been mentioned being fetched successfully."
              },
              "messages": {
                "$ref": "#/definitions/MentionedOrUserMessages"
              }
            },
            "example": {
              "msg": "Mentioned messages fetched successfully.",
              "messages": [
                {
                  "updatedAt": 1611845768666,
                  "showInConversation": true,
                  "sentAt": 1611845768666,
                  "senderInfo": {
                    "userProfileImageUrl": "https://trace.isometrik.io/public1/img/grafana_icon.svg",
                    "userName": "koko112",
                    "userIdentifier": "jojo19@lolo.com",
                    "userId": "5fb3c35f21a38ed228edd90e",
                    "online": false,
                    "metaData": {},
                    "lastSeen": -1
                  },
                  "searchableTags": [
                    "Title",
                    "Product Name",
                    "Order Id"
                  ],
                  "readByAll": true,
                  "readBy": [
                    {
                      "userId": "5fb3daec21a38e73938a8d5b",
                      "timestamp": 1611927387458
                    },
                    {
                      "userId": "5fb4feb921a38e7b81fac663",
                      "timestamp": 1611927524069
                    }
                  ],
                  "reactions": {
                    "yes": [
                      "5fb3c35f21a38ed228edd90e"
                    ],
                    "no": [
                      "5fb3c35f21a38ed228edd90e"
                    ]
                  },
                  "privateOneToOne": false,
                  "opponentDetails": {
                    "userProfileImageUrl": "https://trace.isometrik.io/public1/img/grafana_icon.svg",
                    "userName": "koko112",
                    "userIdentifier": "jojo19@lolo.com",
                    "userId": "5fb3c35f21a38ed228edd90e",
                    "online": false,
                    "metaData": {},
                    "lastSeen": -1
                  },
                  "metaData": {
                    "type": "Test Message"
                  },
                  "messageType": 0,
                  "messageId": "6012d08821a38e18be4d90ed",
                  "events": {
                    "updateUnreadCount": false,
                    "sendPushNotification": true
                  },
                  "encrypted": true,
                  "deliveryReadEventsEnabled": false,
                  "deliveredToAll": true,
                  "deliveredTo": [
                    {
                      "userId": "5fb3daec21a38e73938a8d5b",
                      "timestamp": 1611927387458
                    },
                    {
                      "userId": "5fb4feb921a38e7b81fac663",
                      "timestamp": 1611927524069
                    }
                  ],
                  "customType": "custom message type",
                  "conversationTitle": "Title of conversation",
                  "conversationImageUrl": "https://images.isometrik.io/public1/img/image.png",
                  "conversationId": "5ffdb03c21a38e01364f3495",
                  "body": "message body",
                  "attachments": [
                    {
                      "thumbnailUrl": "https://sample-file-url/media/1576213941566-unnamed-thumbnail.png",
                      "size": 95860,
                      "name": "unnamed.jpg",
                      "mimeType": "image/jpeg",
                      "mediaUrl": "https://sample-file-url/1576213941566-unnamed.jpg",
                      "mediaId": "5df31dba3a22d30037d62066",
                      "extension": "jpg",
                      "attachmentType": 0
                    }
                  ]
                }
              ]
            },
            "description": "Messages in which user has been mentioned fetched successfully."
          },
          "fetch_user_messages": {
            "type": "object",
            "title": "Response of fetch user messages in request",
            "required": [
              "msg"
            ],
            "properties": {
              "msg": {
                "type": "string",
                "description": "Message of messages for user being fetched successfully."
              },
              "messages": {
                "$ref": "#/definitions/Messages"
              }
            },
            "example": {
              "msg": "User messages fetched successfully.",
              "messages": [
                {
                  "updatedAt": 1611845768666,
                  "showInConversation": true,
                  "sentAt": 1611845768666,
                  "senderInfo": {
                    "userProfileImageUrl": "https://trace.isometrik.io/public1/img/grafana_icon.svg",
                    "userName": "koko112",
                    "userIdentifier": "jojo19@lolo.com",
                    "userId": "5fb3c35f21a38ed228edd90e",
                    "online": false,
                    "metaData": {},
                    "lastSeen": -1
                  },
                  "searchableTags": [
                    "Title",
                    "Product Name",
                    "Order Id"
                  ],
                  "readBy": [
                    {
                      "userId": "5fb3daec21a38e73938a8d5b",
                      "timestamp": 1611927387458
                    },
                    {
                      "userId": "5fb4feb921a38e7b81fac663",
                      "timestamp": 1611927524069
                    }
                  ],
                  "reactions": {
                    "yes": [
                      "5fb3c35f21a38ed228edd90e"
                    ],
                    "no": [
                      "5fb3c35f21a38ed228edd90e"
                    ]
                  },
                  "privateOneToOne": false,
                  "metaData": {
                    "type": "Test Message"
                  },
                  "messageType": 0,
                  "messageId": "6012d08821a38e18be4d90ed",
                  "events": {
                    "updateUnreadCount": false,
                    "sendPushNotification": true
                  },
                  "encrypted": true,
                  "deliveredTo": [
                    {
                      "userId": "5fb3daec21a38e73938a8d5b",
                      "timestamp": 1611927387458
                    },
                    {
                      "userId": "5fb4feb921a38e7b81fac663",
                      "timestamp": 1611927524069
                    }
                  ],
                  "customType": "custom message type",
                  "conversationTitle": "Title of conversation",
                  "conversationImageUrl": "https://images.isometrik.io/public1/img/image.png",
                  "conversationId": "5ffdb03c21a38e01364f3495",
                  "body": "message body",
                  "attachments": [
                    {
                      "thumbnailUrl": "https://sample-file-url/media/1576213941566-unnamed-thumbnail.png",
                      "size": 95860,
                      "name": "unnamed.jpg",
                      "mimeType": "image/jpeg",
                      "mediaUrl": "https://sample-file-url/1576213941566-unnamed.jpg",
                      "mediaId": "5df31dba3a22d30037d62066",
                      "extension": "jpg",
                      "attachmentType": 0
                    }
                  ]
                },
                {
                  "sentAt": "Epoch time at which user was blocked",
                  "opponentProfileImageUrl": "Url of the profile pic of the user who is blocked",
                  "opponentName": "Name of the user who is blocked",
                  "opponentIdentifier": "Identifier of the user who is blocked",
                  "opponentId": "Id of the user who is blocked.",
                  "initiatorProfileImageUrl": "Url of the profile pic of the user who is blocking",
                  "initiatorName": "Name of the user who is blocking",
                  "initiatorIdentifier": "Identifier of the user who is blocking",
                  "initiatorId": "Id of the user who is blocking.",
                  "conversationStatusMessage": true,
                  "action": "userBlock"
                },
                {
                  "sentAt": "Epoch time at which user was unblocked",
                  "opponentProfileImageUrl": "Url of the profile pic of the user who is unblocked",
                  "opponentName": "Name of the user who is unblocked",
                  "opponentIdentifier": "Identifier of the user who is unblocked",
                  "opponentId": "Id of the user who is unblocked.",
                  "initiatorProfileImageUrl": "Url of the profile pic of the user who is unblocking",
                  "initiatorName": "Name of the user who is unblocking",
                  "initiatorIdentifier": "Identifier of the user who is unblocking",
                  "initiatorId": "Id of the user who is unblocking.",
                  "conversationStatusMessage": true,
                  "action": "userUnblock"
                },
                {
                  "sentAt": "Epoch time at which user was blocked",
                  "opponentProfileImageUrl": "Url of the profile pic of the user who is blocked",
                  "opponentName": "Name of the user who is blocked",
                  "opponentIdentifier": "Identifier of the user who is blocked",
                  "opponentId": "Id of the user who is blocked.",
                  "initiatorProfileImageUrl": "Url of the profile pic of the user who is blocking",
                  "initiatorName": "Name of the user who is blocking",
                  "initiatorIdentifier": "Identifier of the user who is blocking",
                  "initiatorId": "Id of the user who is blocking.",
                  "conversationStatusMessage": true,
                  "conversationId": "Id of private 1-1 conversation between initiator and opponent.",
                  "action": "userBlockConversation"
                },
                {
                  "sentAt": "Epoch time at which user was unblocked",
                  "opponentProfileImageUrl": "Url of the profile pic of the user who is unblocked",
                  "opponentName": "Name of the user who is unblocked",
                  "opponentIdentifier": "Identifier of the user who is unblocked",
                  "opponentId": "Id of the user who is unblocked.",
                  "initiatorProfileImageUrl": "Url of the profile pic of the user who is unblocking",
                  "initiatorName": "Name of the user who is unblocking",
                  "initiatorIdentifier": "Identifier of the user who is unblocking",
                  "initiatorId": "Id of the user who is unblocking.",
                  "conversationStatusMessage": true,
                  "conversationId": "Id of private 1-1 conversation between initiator and opponent.",
                  "action": "userUnblockConversation"
                },
                {
                  "userProfileImageUrl": "Url of the profile pic of the user if updated(optional)",
                  "userName": "Name of the user if updated(optional)",
                  "userIdentifier": "Identifier of the user if updated(optional)",
                  "userId": "Id of the user who is updated.",
                  "sentAt": "Epoch time at which user was updated",
                  "notification": "Notification setting of the user if updated(optional)",
                  "metaData": "Metadata of the user if updated(optional)",
                  "conversationStatusMessage": true,
                  "action": "userUpdate"
                },
                {
                  "userId": "Id of the user who is deleted.",
                  "sentAt": "Epoch time at which user was deleted",
                  "conversationStatusMessage": true,
                  "action": "userDelete"
                },
                {
                  "sentAt": "Epoch time at which admin was made.",
                  "memberProfileImageUrl": "Url of the profile pic of the user who was made admin.",
                  "memberName": "Name of the user who was made admin.",
                  "memberIdentifier": "Identifier of the user who was made admin.",
                  "memberId": "Id of the user who was made admin",
                  "initiatorProfileImageUrl": "Url of the profile pic of the user who made admin.",
                  "initiatorName": "Name of the user who made admin.",
                  "initiatorIdentifier": "Identifier of the user who made admin.",
                  "initiatorId": "Id of the user who made admin.",
                  "conversationStatusMessage": true,
                  "conversationId": "Id of the conversation for which admin was added.",
                  "action": "addAdmin"
                },
                {
                  "sentAt": "Epoch time at which admin was removed.",
                  "memberProfileImageUrl": "Url of the profile pic of the user who was removed as admin.",
                  "memberName": "Name of the user who was removed as admin.",
                  "memberIdentifier": "Identifier of the user who was removed as admin.",
                  "memberId": "Id of the user who was removed as admin",
                  "initiatorProfileImageUrl": "Url of the profile pic of the user who removed admin.",
                  "initiatorName": "Name of the user who removed admin.",
                  "initiatorIdentifier": "Identifier of the user who removed admin.",
                  "initiatorId": "Id of the user who removed admin.",
                  "conversationStatusMessage": true,
                  "conversationId": "Id of the conversation for which admin was removed.",
                  "action": "removeAdmin"
                },
                {
                  "userId": "Id of the user who deleted the conversation locally.",
                  "sentAt": "Epoch time at which conversation was deleted locally.",
                  "conversationStatusMessage": true,
                  "conversationId": "Id of the conversation which was deleted locally.",
                  "action": "deleteConversationLocally"
                },
                {
                  "userId": "Id of the user who cleared the conversation.",
                  "sentAt": "Epoch time at which conversation was cleared.",
                  "conversationStatusMessage": true,
                  "conversationId": "Id of the conversation which was cleared.",
                  "action": "clearConversation"
                },
                {
                  "userProfileImageUrl": "Url of the profile pic of the user who joined.",
                  "userName": "Name of the user who joined.",
                  "userIdentifier": "Identifier of the user who joined.",
                  "userId": "Id of the user who joined.",
                  "sentAt": "Epoch time at which user joined.",
                  "conversationStatusMessage": true,
                  "conversationId": "Id of the conversation where user joined as member.",
                  "action": "memberJoin"
                },
                {
                  "userProfileImageUrl": "Url of the profile pic of the user who left.",
                  "userName": "Name of the user who left.",
                  "userIdentifier": "Identifier of the user who left.",
                  "userId": "Id of the user who left.",
                  "sentAt": "Epoch time at which user left.",
                  "conversationStatusMessage": true,
                  "conversationId": "Id of the conversation where user who left as member.",
                  "action": "memberLeave"
                },
                {
                  "userProfileImageUrl": "Url of the profile pic of the user who added members.",
                  "userName": "Name of the user who added members.",
                  "userIdentifier": "Identifier of the user who added members.",
                  "userId": "Id of the user who added members.",
                  "sentAt": "Epoch time at which members were added.",
                  "members": "List of members added to conversation.",
                  "conversationStatusMessage": true,
                  "conversationId": "Conversation to which members were added.",
                  "action": "membersAdd"
                },
                {
                  "userProfileImageUrl": "Url of the profile pic of the user who removed members.",
                  "userName": "Name of the user who removed members.",
                  "userIdentifier": "Identifier of the user who removed members.",
                  "userId": "Id of the user who removed members.",
                  "sentAt": "Epoch time at which members were removed.",
                  "members": "List of members removed from conversation.",
                  "conversationStatusMessage": true,
                  "conversationId": "Conversation from which members were removed.",
                  "action": "membersRemove"
                },
                {
                  "userProfileImageUrl": "Url of the profile pic of the user who updated config.",
                  "userName": "Name of the user who updated settings.",
                  "userIdentifier": "Identifier of the user who updated settings.",
                  "userId": "Id of the user who updated settings.",
                  "sentAt": "Epoch time at which settings was updated.",
                  "conversationStatusMessage": true,
                  "conversationId": "Id of the conversation whose settings were updated.",
                  "config": "Updated settings of conversation",
                  "action": "conversationSettingsUpdated"
                },
                {
                  "userProfileImageUrl": "Url of the profile pic of the user who updated conversation image.",
                  "userName": "Name of the user who updated conversation image.",
                  "userIdentifier": "Identifier of the user who updated conversation image.",
                  "userId": "Id of the user who updated conversation image.",
                  "sentAt": "Epoch time at which conversation image was updated.",
                  "conversationStatusMessage": true,
                  "conversationImageUrl": "Url of the updated image of conversation",
                  "conversationId": "Id of the conversation whose image were updated.",
                  "action": "conversationImageUpdated"
                },
                {
                  "userProfileImageUrl": "Url of the profile pic of the user who updated conversation title.",
                  "userName": "Name of the user who updated conversation title.",
                  "userIdentifier": "Identifier of the user who updated conversation title.",
                  "userId": "Id of the user who updated conversation title.",
                  "sentAt": "Epoch time at which conversation title was updated.",
                  "conversationTitle": "Updated title of conversation",
                  "conversationStatusMessage": true,
                  "conversationId": "Id of the conversation whose title were updated.",
                  "action": "conversationTitleUpdated"
                },
                {
                  "userProfileImageUrl": "Url of the profile pic of the user who updated details.",
                  "userName": "Name of the user who updated details.",
                  "userIdentifier": "Identifier of the user who updated details.",
                  "userId": "Id of the user who updated details.",
                  "sentAt": "Epoch time at which details were updated.",
                  "details": "Updated details of conversation",
                  "conversationStatusMessage": true,
                  "conversationId": "Id of the conversation whose details were updated.",
                  "action": "conversationDetailsUpdated"
                },
                {
                  "userProfileImageUrl": "Url of the profile pic of the user who deleted messages locally.",
                  "userName": "Name of the user who deleted messages locally.",
                  "userIdentifier": "Identifier of the user who deleted messages locally.",
                  "userId": "Id of the user who deleted messages locally.",
                  "sentAt": "Epoch time at which messages were deleted locally.",
                  "messageIds": "List of the message ids that were deleted locally.",
                  "conversationStatusMessage": true,
                  "conversationId": "Id of the conversation containing the messages that were deleted locally.",
                  "action": "messagesDeleteLocal"
                },
                {
                  "userProfileImageUrl": "Url of the profile pic of the user who deleted messages for everyone.",
                  "userName": "Name of the user who deleted messages for everyone.",
                  "userIdentifier": "Identifier of the user who deleted messages for everyone.",
                  "userId": "Id of the user who deleted messages for everyone.",
                  "sentAt": "Epoch time at which messages were deleted for everyone.",
                  "messageIds": "List of the message ids that were deleted for everyone.",
                  "conversationStatusMessage": true,
                  "conversationId": "Id of the conversation containing the messages that were deleted for everyone.",
                  "action": "messagesDeleteForAll"
                },
                {
                  "userProfileImageUrl": "Url of the profile pic of the user who marked messages as read.",
                  "userName": "Name of the user who marked messages as read.",
                  "userIdentifier": "Identifier of the user who marked messages as read.",
                  "userId": "Id of the user who marked messages as read.",
                  "sentAt": "Epoch time at which messages were marked as read.",
                  "numberOfMessages": "Number of messages that were marked as read.",
                  "lastReadAt": "Epoch time upto which, messages sent were marked as read.",
                  "conversationStatusMessage": true,
                  "conversationId": "Id of the conversation containing the messages that were marked as read.",
                  "action": "multipleMessagesRead"
                },
                {
                  "userProfileImageUrl": "Url of the profile pic of the user who added reaction.",
                  "userName": "Name of the user who added reaction.",
                  "userIdentifier": "Identifier of the user who added reaction.",
                  "userId": "Id of the user who added reaction.",
                  "sentAt": "Epoch time at which reaction was added.",
                  "reactionType": "Type of reaction that was added.",
                  "messageId": "Id of the message for which reaction was added.",
                  "conversationStatusMessage": true,
                  "conversationId": "Id of the conversation containing the message for which reaction was added.",
                  "action": "reactionAdd"
                },
                {
                  "userProfileImageUrl": "Url of the profile pic of the user who removed reaction.",
                  "userName": "Name of the user who removed reaction.",
                  "userIdentifier": "Identifier of the user who removed reaction.",
                  "userId": "Id of the user who removed reaction.",
                  "sentAt": "Epoch time at which reaction was removed.",
                  "reactionType": "Type of reaction that was removed.",
                  "messageId": "Id of the message for which reaction was removed.",
                  "conversationStatusMessage": true,
                  "conversationId": "Id of the conversation containing the message for which reaction was removed.",
                  "action": "reactionRemove"
                },
                {
                  "userProfileImageUrl": "Url of the profile pic of the user who created conversation.",
                  "userName": "Name of the user who created conversation.",
                  "userIdentifier": "Identifier of the user who created conversation.",
                  "userId": "Id of he user who created conversation.",
                  "sentAt": "Epoch time at which conversation was created.",
                  "conversationStatusMessage": true,
                  "conversationId": "Id of the newly created conversation.",
                  "conversationDetails": "Object containing details of newly created conversation.",
                  "action": "conversationCreated"
                }
              ]
            },
            "description": "Messages for user fetched successfully."
          },
          "Attachments": {
            "type": "array",
            "title": "Attachments to fetch presigned urls for",
            "items": {
              "$ref": "#/definitions/Attachment"
            },
            "description": "All attachments to fetch presigned urls for."
          },
          "add_reaction": {
            "type": "object",
            "title": "Response of add reaction for a message in conversation request",
            "required": [
              "reactionsCount",
              "msg"
            ],
            "properties": {
              "reactionsCount": {
                "type": "integer",
                "description": "Number of reactions of given type for message."
              },
              "msg": {
                "type": "string",
                "description": "Message of reaction being successfully added for a message."
              }
            },
            "example": {
              "reactionsCount": 1,
              "msg": "Reaction added successfully."
            },
            "description": "Successfully added reaction for a message in conversation."
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
          "Error_404_fetch_mentioned_messages": {
            "type": "object",
            "title": "Error_404_fetch_mentioned_messages",
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
            "description": "errorCode- 0 => licenseKey not found, 1 => Mentioned messages not found."
          },
          "Reaction": {
            "type": "object",
            "title": "User details",
            "required": [
              "metaData",
              "lastSeen",
              "online",
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
              "online": {
                "type": "boolean",
                "description": "Whether user is online now."
              },
              "metaData": {
                "type": "object",
                "description": "Object containing metadata of the user, if any."
              },
              "lastSeen": {
                "type": "integer",
                "description": "Epoch time at which user was last seen online.Value is -1 incase user is online now"
              }
            },
            "description": "Model containing details of the user fetched."
          },
          "Error_403_fetch_user_messages": {
            "type": "object",
            "title": "Error_403_fetch_user_messages",
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
          "body_update_message": {
            "type": "object",
            "title": "Body of the update message details(searchableTags or body or customType or metadata) request",
            "required": [
              "messageId",
              "conversationId"
            ],
            "properties": {
              "searchableTags": {
                "type": "array",
                "description": "List containing tags by which message can be searched(Maximum 20)."
              },
              "metaData": {
                "type": "object",
                "description": "Metadata of the message to be updated, if any."
              },
              "messageId": {
                "type": "string",
                "description": "Id of the message to update details(searchableTags or body or customType or metadata) of."
              },
              "customType": {
                "type": "string",
                "description": "Custom type of the message to be updated, if any."
              },
              "conversationId": {
                "type": "string",
                "description": "Id of the conversation containing message to update details(searchableTags or body or customType or metadata) of."
              },
              "body": {
                "type": "string",
                "description": "Body of the message to be updated, if any."
              }
            },
            "example": {
              "searchableTags": [
                "Title",
                "Product Name",
                "Order Id"
              ],
              "metaData": {
                "country": "India"
              },
              "messageId": "5df31dba3a22d30037d62066",
              "customType": "Secret Chat",
              "conversationId": "5fe0b8c921a38ec829956130",
              "body": "New Message"
            },
            "description": "Details of the update message details(searchableTags or body or customType or metadata) request."
          },
          "PresignedUrl": {
            "type": "object",
            "title": "Presigned url details",
            "required": [
              "thumbnailUrl",
              "thumbnailPresignedUrl",
              "ttl",
              "mediaUrl",
              "mediaPresignedUrl",
              "mediaId"
            ],
            "properties": {
              "ttl": {
                "type": "integer",
                "description": "Number of seconds after which presigned url expires."
              },
              "thumbnailUrl": {
                "type": "string",
                "description": "Url to be used for retrieval of uploaded media thumbnail."
              },
              "thumbnailPresignedUrl": {
                "type": "string",
                "description": "Presigned url to be used for uploading of media thumbnail."
              },
              "mediaUrl": {
                "type": "string",
                "description": "Url to be used for retrieval of uploaded media."
              },
              "mediaPresignedUrl": {
                "type": "string",
                "description": "Presigned url to be used for uploading of media."
              },
              "mediaId": {
                "type": "string",
                "description": "Unique identifier of the attachment media."
              }
            },
            "description": "Model containing details of the presigned url."
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
          "fetch_messages": {
            "type": "object",
            "title": "Response of fetch messages in conversation request",
            "required": [
              "msg"
            ],
            "properties": {
              "msg": {
                "type": "string",
                "description": "Message of messages in conversation being fetched successfully."
              },
              "messages": {
                "$ref": "#/definitions/Messages"
              }
            },
            "example": {
              "msg": "Messages fetched successfully.",
              "messages": [
                {
                  "updatedAt": 1611845768666,
                  "showInConversation": true,
                  "sentAt": 1611845768666,
                  "senderInfo": {
                    "userProfileImageUrl": "https://trace.isometrik.io/public1/img/grafana_icon.svg",
                    "userName": "koko112",
                    "userIdentifier": "jojo19@lolo.com",
                    "userId": "5fb3c35f21a38ed228edd90e",
                    "online": false,
                    "metaData": {},
                    "lastSeen": -1
                  },
                  "searchableTags": [
                    "Title",
                    "Product Name",
                    "Order Id"
                  ],
                  "readByAll": true,
                  "readBy": [
                    {
                      "userId": "5fb3daec21a38e73938a8d5b",
                      "timestamp": 1611927387458
                    },
                    {
                      "userId": "5fb4feb921a38e7b81fac663",
                      "timestamp": 1611927524069
                    }
                  ],
                  "reactions": {
                    "yes": [
                      "5fb3c35f21a38ed228edd90e"
                    ],
                    "no": [
                      "5fb3c35f21a38ed228edd90e"
                    ]
                  },
                  "metaData": {
                    "type": "Test Message"
                  },
                  "messageType": 0,
                  "messageId": "6012d08821a38e18be4d90ed",
                  "events": {
                    "updateUnreadCount": false,
                    "sendPushNotification": true
                  },
                  "encrypted": true,
                  "deliveryReadEventsEnabled": false,
                  "deliveredToAll": true,
                  "deliveredTo": [
                    {
                      "userId": "5fb3daec21a38e73938a8d5b",
                      "timestamp": 1611927387458
                    },
                    {
                      "userId": "5fb4feb921a38e7b81fac663",
                      "timestamp": 1611927524069
                    }
                  ],
                  "customType": "custom message type",
                  "conversationId": "5ffdb03c21a38e01364f3495",
                  "body": "message body",
                  "attachments": [
                    {
                      "thumbnailUrl": "https://sample-file-url/media/1576213941566-unnamed-thumbnail.png",
                      "size": 95860,
                      "name": "unnamed.jpg",
                      "mimeType": "image/jpeg",
                      "mediaUrl": "https://sample-file-url/1576213941566-unnamed.jpg",
                      "mediaId": "5df31dba3a22d30037d62066",
                      "extension": "jpg",
                      "attachmentType": 0
                    }
                  ]
                },
                {
                  "sentAt": "Epoch time at which admin was made.",
                  "memberProfileImageUrl": "Url of the profile pic of the user who was made admin.",
                  "memberName": "Name of the user who was made admin.",
                  "memberIdentifier": "Identifier of the user who was made admin.",
                  "memberId": "Id of the user who was made admin",
                  "initiatorProfileImageUrl": "Url of the profile pic of the user who made admin.",
                  "initiatorName": "Name of the user who made admin.",
                  "initiatorIdentifier": "Identifier of the user who made admin.",
                  "initiatorId": "Id of the user who made admin.",
                  "conversationStatusMessage": true,
                  "conversationId": "Id of the conversation for which admin was added.",
                  "action": "addAdmin"
                },
                {
                  "sentAt": "Epoch time at which admin was removed.",
                  "memberProfileImageUrl": "Url of the profile pic of the user who was removed as admin.",
                  "memberName": "Name of the user who was removed as admin.",
                  "memberIdentifier": "Identifier of the user who was removed as admin.",
                  "memberId": "Id of the user who was removed as admin",
                  "initiatorProfileImageUrl": "Url of the profile pic of the user who removed admin.",
                  "initiatorName": "Name of the user who removed admin.",
                  "initiatorIdentifier": "Identifier of the user who removed admin.",
                  "initiatorId": "Id of the user who removed admin.",
                  "conversationStatusMessage": true,
                  "conversationId": "Id of the conversation for which admin was removed.",
                  "action": "removeAdmin"
                },
                {
                  "userId": "Id of the user who deleted the conversation locally.",
                  "sentAt": "Epoch time at which conversation was deleted locally.",
                  "conversationStatusMessage": true,
                  "conversationId": "Id of the conversation which was deleted locally.",
                  "action": "deleteConversationLocally"
                },
                {
                  "userId": "Id of the user who cleared the conversation.",
                  "sentAt": "Epoch time at which conversation was cleared.",
                  "conversationStatusMessage": true,
                  "conversationId": "Id of the conversation which was cleared.",
                  "action": "clearConversation"
                },
                {
                  "userProfileImageUrl": "Url of the profile pic of the user who joined.",
                  "userName": "Name of the user who joined.",
                  "userIdentifier": "Identifier of the user who joined.",
                  "userId": "Id of the user who joined.",
                  "sentAt": "Epoch time at which user joined.",
                  "conversationStatusMessage": true,
                  "conversationId": "Id of the conversation where user joined as member.",
                  "action": "memberJoin"
                },
                {
                  "userProfileImageUrl": "Url of the profile pic of the user who left.",
                  "userName": "Name of the user who left.",
                  "userIdentifier": "Identifier of the user who left.",
                  "userId": "Id of the user who left.",
                  "sentAt": "Epoch time at which user left.",
                  "conversationStatusMessage": true,
                  "conversationId": "Id of the conversation where user who left as member.",
                  "action": "memberLeave"
                },
                {
                  "userProfileImageUrl": "Url of the profile pic of the user who added members.",
                  "userName": "Name of the user who added members.",
                  "userIdentifier": "Identifier of the user who added members.",
                  "userId": "Id of the user who added members.",
                  "sentAt": "Epoch time at which members were added.",
                  "members": "List of members added to conversation.",
                  "conversationStatusMessage": true,
                  "conversationId": "Conversation to which members were added.",
                  "action": "membersAdd"
                },
                {
                  "userProfileImageUrl": "Url of the profile pic of the user who removed members.",
                  "userName": "Name of the user who removed members.",
                  "userIdentifier": "Identifier of the user who removed members.",
                  "userId": "Id of the user who removed members.",
                  "sentAt": "Epoch time at which members were removed.",
                  "members": "List of members removed from conversation.",
                  "conversationStatusMessage": true,
                  "conversationId": "Conversation from which members were removed.",
                  "action": "membersRemove"
                },
                {
                  "userProfileImageUrl": "Url of the profile pic of the user who updated config.",
                  "userName": "Name of the user who updated settings.",
                  "userIdentifier": "Identifier of the user who updated settings.",
                  "userId": "Id of the user who updated settings.",
                  "sentAt": "Epoch time at which settings was updated.",
                  "conversationStatusMessage": true,
                  "conversationId": "Id of the conversation whose settings were updated.",
                  "config": "Updated settings of conversation",
                  "action": "conversationSettingsUpdated"
                },
                {
                  "userProfileImageUrl": "Url of the profile pic of the user who updated conversation image.",
                  "userName": "Name of the user who updated conversation image.",
                  "userIdentifier": "Identifier of the user who updated conversation image.",
                  "userId": "Id of the user who updated conversation image.",
                  "sentAt": "Epoch time at which conversation image was updated.",
                  "conversationStatusMessage": true,
                  "conversationImageUrl": "Url of the updated image of conversation",
                  "conversationId": "Id of the conversation whose image were updated.",
                  "action": "conversationImageUpdated"
                },
                {
                  "userProfileImageUrl": "Url of the profile pic of the user who updated conversation title.",
                  "userName": "Name of the user who updated conversation title.",
                  "userIdentifier": "Identifier of the user who updated conversation title.",
                  "userId": "Id of the user who updated conversation title.",
                  "sentAt": "Epoch time at which conversation title was updated.",
                  "conversationTitle": "Updated title of conversation",
                  "conversationStatusMessage": true,
                  "conversationId": "Id of the conversation whose title were updated.",
                  "action": "conversationTitleUpdated"
                },
                {
                  "userProfileImageUrl": "Url of the profile pic of the user who updated details.",
                  "userName": "Name of the user who updated details.",
                  "userIdentifier": "Identifier of the user who updated details.",
                  "userId": "Id of the user who updated details.",
                  "sentAt": "Epoch time at which details were updated.",
                  "details": "Updated details of conversation",
                  "conversationStatusMessage": true,
                  "conversationId": "Id of the conversation whose details were updated.",
                  "action": "conversationDetailsUpdated"
                },
                {
                  "userProfileImageUrl": "Url of the profile pic of the user who deleted messages locally.",
                  "userName": "Name of the user who deleted messages locally.",
                  "userIdentifier": "Identifier of the user who deleted messages locally.",
                  "userId": "Id of the user who deleted messages locally.",
                  "sentAt": "Epoch time at which messages were deleted locally.",
                  "messageIds": "List of the message ids that were deleted locally.",
                  "conversationStatusMessage": true,
                  "conversationId": "Id of the conversation containing the messages that were deleted locally.",
                  "action": "messagesDeleteLocal"
                },
                {
                  "userProfileImageUrl": "Url of the profile pic of the user who deleted messages for everyone.",
                  "userName": "Name of the user who deleted messages for everyone.",
                  "userIdentifier": "Identifier of the user who deleted messages for everyone.",
                  "userId": "Id of the user who deleted messages for everyone.",
                  "sentAt": "Epoch time at which messages were deleted for everyone.",
                  "messageIds": "List of the message ids that were deleted for everyone.",
                  "conversationStatusMessage": true,
                  "conversationId": "Id of the conversation containing the messages that were deleted for everyone.",
                  "action": "messagesDeleteForAll"
                },
                {
                  "userProfileImageUrl": "Url of the profile pic of the user who added reaction.",
                  "userName": "Name of the user who added reaction.",
                  "userIdentifier": "Identifier of the user who added reaction.",
                  "userId": "Id of the user who added reaction.",
                  "sentAt": "Epoch time at which reaction was added.",
                  "reactionType": "Type of reaction that was added.",
                  "messageId": "Id of the message for which reaction was added.",
                  "conversationStatusMessage": true,
                  "conversationId": "Id of the conversation containing the message for which reaction was added.",
                  "action": "reactionAdd"
                },
                {
                  "userProfileImageUrl": "Url of the profile pic of the user who removed reaction.",
                  "userName": "Name of the user who removed reaction.",
                  "userIdentifier": "Identifier of the user who removed reaction.",
                  "userId": "Id of the user who removed reaction.",
                  "sentAt": "Epoch time at which reaction was removed.",
                  "reactionType": "Type of reaction that was removed.",
                  "messageId": "Id of the message for which reaction was removed.",
                  "conversationStatusMessage": true,
                  "conversationId": "Id of the conversation containing the message for which reaction was removed.",
                  "action": "reactionRemove"
                },
                {
                  "userProfileImageUrl": "Url of the profile pic of the user who created conversation.",
                  "userName": "Name of the user who created conversation.",
                  "userIdentifier": "Identifier of the user who created conversation.",
                  "userId": "Id of he user who created conversation.",
                  "sentAt": "Epoch time at which conversation was created.",
                  "conversationStatusMessage": true,
                  "conversationId": "Id of the newly created conversation.",
                  "conversationDetails": "Object containing details of newly created conversation.",
                  "action": "conversationCreated"
                },
                {
                  "sentAt": "Epoch time at which user was blocked",
                  "opponentProfileImageUrl": "Url of the profile pic of the user who is blocked",
                  "opponentName": "Name of the user who is blocked",
                  "opponentIdentifier": "Identifier of the user who is blocked",
                  "opponentId": "Id of the user who is blocked.",
                  "messagingDisabled": "Whether messaging is disabled in one-one conversation.",
                  "initiatorProfileImageUrl": "Url of the profile pic of the user who is blocking",
                  "initiatorName": "Name of the user who is blocking",
                  "initiatorIdentifier": "Identifier of the user who is blocking",
                  "initiatorId": "Id of the user who is blocking.",
                  "conversationStatusMessage": true,
                  "conversationId": "Id of private 1-1 conversation between initiator and opponent.",
                  "action": "userBlockConversation"
                },
                {
                  "sentAt": "Epoch time at which user was unblocked",
                  "opponentProfileImageUrl": "Url of the profile pic of the user who is unblocked",
                  "opponentName": "Name of the user who is unblocked",
                  "opponentIdentifier": "Identifier of the user who is unblocked",
                  "opponentId": "Id of the user who is unblocked.",
                  "messagingDisabled": "Whether messaging is disabled in one-one conversation.",
                  "initiatorProfileImageUrl": "Url of the profile pic of the user who is unblocking",
                  "initiatorName": "Name of the user who is unblocking",
                  "initiatorIdentifier": "Identifier of the user who is unblocking",
                  "initiatorId": "Id of the user who is unblocking.",
                  "conversationStatusMessage": true,
                  "conversationId": "Id of private 1-1 conversation between initiator and opponent.",
                  "action": "userUnblockConversation"
                }
              ]
            },
            "description": "Messages in conversation fetched successfully."
          },
          "Error_400_presignedurls": {
            "type": "object",
            "title": "Error_400_presignedurls",
            "required": [
              "error"
            ],
            "properties": {
              "error": {
                "type": "string",
                "description": "The message of the error raised."
              }
            },
            "description": "Conversation not found or not allowed to fetch presigned urls."
          },
          "Error_404_presignedurls": {
            "type": "object",
            "title": "Error_404_presignedurls",
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
          "MentionedOrUserMessages": {
            "type": "array",
            "title": "Mentioned or user messages fetch",
            "items": {
              "$ref": "#/definitions/MentionedOrUserMessage"
            },
            "description": "All mentioned or user messages list."
          },
          "Reactions": {
            "type": "array",
            "title": "User with a reaction fetch",
            "items": {
              "$ref": "#/definitions/Reaction"
            },
            "description": "All users with given reaction list."
          },
          "User": {
            "type": "object",
            "title": "Message sender details",
            "required": [
              "metaData",
              "lastSeen",
              "online",
              "userId",
              "userIdentifier",
              "userProfileImageUrl",
              "userName"
            ],
            "properties": {
              "userProfileImageUrl": {
                "type": "string",
                "description": "Profilepic associated with the message sender."
              },
              "userName": {
                "type": "string",
                "description": "Name associated with the message sender."
              },
              "userIdentifier": {
                "type": "string",
                "description": "Identifier associated with the message sender."
              },
              "userId": {
                "type": "string",
                "description": "Id associated with the message sender."
              },
              "online": {
                "type": "boolean",
                "description": "Whether message sender is online now."
              },
              "metaData": {
                "type": "object",
                "description": "Object containing metadata of the message sender, if any."
              },
              "lastSeen": {
                "type": "integer",
                "description": "Epoch time at which message sender was last seen online.Value is -1 incase user is online now"
              }
            },
            "description": "Model containing details of the message sender."
          },
          "fetch_messages_count": {
            "type": "object",
            "title": "Response of fetch unread messages count in conversation request",
            "required": [
              "messagesCount",
              "msg"
            ],
            "properties": {
              "msg": {
                "type": "string",
                "description": "Message of messages count in conversation being fetched successfully."
              },
              "messagesCount": {
                "type": "integer",
                "description": "Number of messages in conversation."
              }
            },
            "example": {
              "msg": "Messages count in conversation fetched successfully.",
              "messagesCount": 2
            },
            "description": "Unread messages count in conversation fetched successfully."
          },
          "Error_403_reactions": {
            "type": "object",
            "title": "Error_403_reactions",
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
          "DeliveryReadDetail": {
            "type": "object",
            "title": "Message delivery/read status details",
            "required": [
              "timestamp",
              "userId"
            ],
            "properties": {
              "userId": {
                "type": "string",
                "description": "Id of the user to/by whom message was delivered/read."
              },
              "timestamp": {
                "type": "string",
                "description": "Epoch time at which message was delivered/read to/by user."
              }
            },
            "description": "Model containing details of the message delivery/read."
          },
          "Error_403_fetch_messages_count": {
            "type": "object",
            "title": "Error_403_fetch_messages_count",
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
          "Error_400_add_reaction": {
            "type": "object",
            "title": "Error_400_add_reactions",
            "required": [
              "error"
            ],
            "properties": {
              "error": {
                "type": "string",
                "description": "The message of the error raised."
              }
            },
            "description": "Conversation not found or not allowed to add reaction."
          },
          "send_message": {
            "type": "object",
            "title": "Response of send message request",
            "required": [
              "messageId",
              "msg"
            ],
            "properties": {
              "msg": {
                "type": "string",
                "description": "Details of message successfully sent to conversation."
              },
              "messageId": {
                "type": "string",
                "description": "Id of the message sent to the conversation."
              }
            },
            "example": {
              "msg": "Message sent successfully.",
              "messageId": "5ffd543621a38e11ed4e32e4"
            },
            "description": "Successfully sent message."
          },
          "Error_404_fetch_user_messages": {
            "type": "object",
            "title": "Error_404_fetch_user_messages",
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
            "description": "errorCode- 0 => licenseKey not found, 1 => Messages for user not found."
          },
          "Error_400_send_message": {
            "type": "object",
            "title": "Error_400_send_message",
            "required": [
              "error"
            ],
            "properties": {
              "error": {
                "type": "string",
                "description": "The message of the error raised."
              }
            },
            "description": "Conversations not found or not allowed to send message."
          },
          "Error_400_remove_reaction": {
            "type": "object",
            "title": "Error_400_remove_reaction",
            "required": [
              "error"
            ],
            "properties": {
              "error": {
                "type": "string",
                "description": "The message of the error raised."
              }
            },
            "description": "Conversation not found or not allowed to remove reaction."
          },
          "Error_400_fetch_reactions": {
            "type": "object",
            "title": "Error_400_fetch_reactions",
            "required": [
              "error"
            ],
            "properties": {
              "error": {
                "type": "string",
                "description": "The message of the error raised."
              }
            },
            "description": "Conversation not found or not allowed to fetch reactions."
          },
          "Error_404_add_reaction": {
            "type": "object",
            "title": "Error_404_add_reactions",
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
            "description": "errorCode- 0 => licenseKey not found, 1 => Message not found or not allowed to add reaction."
          },
          "MentionedUser": {
            "type": "object",
            "title": "Mentioned user details",
            "required": [
              "userId",
              "wordCount",
              "order"
            ],
            "properties": {
              "wordCount": {
                "type": "integer",
                "description": "Mentioned user's name word count."
              },
              "userId": {
                "type": "string",
                "description": "User ID of mentioned user."
              },
              "order": {
                "type": "integer",
                "description": "Mention user's order in the message in reference to another mentioned user."
              }
            },
            "description": "Model containing details of the mentioned user."
          },
          "PresignedUrls": {
            "type": "array",
            "title": "Presigned urls fetched for attachments",
            "items": {
              "$ref": "#/definitions/PresignedUrl"
            },
            "description": "All presigned urls fetched for attachments."
          },
          "Opponent": {
            "type": "object",
            "title": "Opponent details",
            "required": [
              "metaData",
              "lastSeen",
              "online",
              "userId",
              "userIdentifier",
              "userProfileImageUrl",
              "userName"
            ],
            "properties": {
              "userProfileImageUrl": {
                "type": "string",
                "description": "Profilepic associated with the given opponent."
              },
              "userName": {
                "type": "string",
                "description": "Name associated with the given opponent."
              },
              "userIdentifier": {
                "type": "string",
                "description": "Identifier associated with the given opponent."
              },
              "userId": {
                "type": "string",
                "description": "Id associated with the given opponent."
              },
              "online": {
                "type": "boolean",
                "description": "Whether opponent is online now."
              },
              "metaData": {
                "type": "object",
                "description": "Object containing metadata of the opponent, if any."
              },
              "lastSeen": {
                "type": "integer",
                "description": "Epoch time at which opponent was last seen online.Value is -1 incase user is online now"
              }
            },
            "description": "Model containing details of the opponent for the private 1-1 conversation."
          },
          "fetch_reactions": {
            "type": "object",
            "title": "Response of fetch reactions for a message request",
            "required": [
              "msg"
            ],
            "properties": {
              "reactions": {
                "$ref": "#/definitions/Reactions"
              },
              "msg": {
                "type": "string",
                "description": "Message of users with given reaction type for message being fetched successfully."
              }
            },
            "example": {
              "reactions": [
                {
                  "userProfileImageUrl": "https://res.cloudinary.com/demo/image/upload/sample.jpg",
                  "userName": "koko",
                  "userIdentifier": "jojo2@lolo.com",
                  "userId": "5fb4feb921a38e7b81fac663",
                  "online": false,
                  "metaData": {
                    "country": "India"
                  },
                  "lastSeen": -1
                }
              ],
              "msg": "Reactions fetched successfully."
            },
            "description": "Reactions for a message fetched successfully."
          }
        },
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
