
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
      "/chat/conversation/members": {
        "put": {
          "tags": [
            "ConversationMembers"
          ],
          "summary": "Add members to a conversation.",
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
                "$ref": "#/definitions/Error_404_add_members"
              },
              "description": "Not Found"
            },
            "403": {
              "schema": {
                "$ref": "#/definitions/Error_403_add_members"
              },
              "description": "Forbidden"
            },
            "400": {
              "schema": {
                "$ref": "#/definitions/Error_400_add_members"
              },
              "description": "Bad Request"
            },
            "200": {
              "schema": {
                "$ref": "#/definitions/add_members"
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
              "description": "License key to be used for adding members to a conversation in a project in an account."
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
              "description": "Token of the user who is adding members to the conversation."
            },
            {
              "schema": {
                "$ref": "#/definitions/body_add_members"
              },
              "required": true,
              "name": "body",
              "in": "body",
              "description": "Body parameters for adding members to a conversation."
            }
          ],
          "operationId": "Isometrik.MembershipcontrolWeb.ConversationMembersController.add_members",
          "description": "Add members to a conversation in a project in an account."
        },
        "get": {
          "tags": [
            "ConversationMembers"
          ],
          "summary": "Fetch members in a conversation.",
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
                "$ref": "#/definitions/Error_404_get_conversation_members"
              },
              "description": "Not Found"
            },
            "400": {
              "schema": {
                "$ref": "#/definitions/Error_400_get_conversation_members"
              },
              "description": "Bad Request"
            },
            "200": {
              "schema": {
                "$ref": "#/definitions/get_conversation_members"
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
              "description": "License key to be used for fetching members in a conversation in a project in an account."
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
              "description": "Token of the user who is fetching members for the conversation."
            },
            {
              "x-example": "5d2c6a8a21a38e07dadb1808",
              "type": "string",
              "required": true,
              "name": "conversationId",
              "in": "query",
              "description": "Id of the conversation for which to fetch members."
            },
            {
              "x-example": 10,
              "type": "integer",
              "required": false,
              "name": "limit",
              "in": "query",
              "description": "Number of members to be fetched.Allowed values are [1,20]",
              "default": 20
            },
            {
              "x-example": 10,
              "type": "integer",
              "required": false,
              "name": "skip",
              "in": "query",
              "description": "Number of members to be skipped before fetching members(used for paging).",
              "default": 0
            }
          ],
          "operationId": "Isometrik.MembershipcontrolWeb.ConversationMembersController.get_conversation_members",
          "description": "Fetch members in a conversation in a project in an account."
        },
        "delete": {
          "tags": [
            "ConversationMembers"
          ],
          "summary": "Remove members from a conversation.",
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
                "$ref": "#/definitions/Error_404_remove_members"
              },
              "description": "Not Found"
            },
            "403": {
              "schema": {
                "$ref": "#/definitions/Error_403_remove_members"
              },
              "description": "Forbidden"
            },
            "400": {
              "schema": {
                "$ref": "#/definitions/Error_400_remove_members"
              },
              "description": "Bad Request"
            },
            "200": {
              "schema": {
                "$ref": "#/definitions/remove_members"
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
              "description": "License key to be used for removing members to a conversation in a project in an account."
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
              "description": "Token of the user who is removing members from the conversation."
            },
            {
              "x-example": "5d2c6a8a21a38e07dadb1808",
              "type": "string",
              "required": true,
              "name": "conversationId",
              "in": "query",
              "description": "Id of the conversation from which to remove members."
            },
            {
              "x-example": "5d2c6a8a21a38e07dadb1808,5fb4feb921a38e7b81fac663",
              "type": "string",
              "required": true,
              "name": "members",
              "in": "query",
              "description": "Comma seperated list of user ids to be removed from conversation."
            }
          ],
          "operationId": "Isometrik.MembershipcontrolWeb.ConversationMembersController.remove_members",
          "description": "Remove members from a conversation in a project in an account."
        }
      },
      "/chat/conversation/leave": {
        "delete": {
          "tags": [
            "ConversationJoinLeave"
          ],
          "summary": "Leave a public conversation.",
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
                "$ref": "#/definitions/Error_404_leave_conversation"
              },
              "description": "Not Found"
            },
            "403": {
              "schema": {
                "$ref": "#/definitions/Error_403_leave_conversation"
              },
              "description": "Forbidden"
            },
            "400": {
              "schema": {
                "$ref": "#/definitions/Error_400_leave_conversation"
              },
              "description": "Bad Request"
            },
            "200": {
              "schema": {
                "$ref": "#/definitions/leave_conversation"
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
              "description": "License key to be used for leaving a public conversation in a project in an account."
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
              "description": "Token of the user who is leaving the public conversation."
            },
            {
              "x-example": "5d2c6a8a21a38e07dadb1808",
              "type": "string",
              "required": true,
              "name": "conversationId",
              "in": "query",
              "description": "Id of the public conversation to be left."
            }
          ],
          "operationId": "Isometrik.MembershipcontrolWeb.ConversationJoinLeaveController.leave_conversation",
          "description": "Leave a public conversation in a project in an account."
        }
      },
      "/chat/conversation/join": {
        "put": {
          "tags": [
            "ConversationJoinLeave"
          ],
          "summary": "Join a public conversation.",
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
                "$ref": "#/definitions/Error_404_join_conversation"
              },
              "description": "Not Found"
            },
            "403": {
              "schema": {
                "$ref": "#/definitions/Error_403_join_conversation"
              },
              "description": "Forbidden"
            },
            "400": {
              "schema": {
                "$ref": "#/definitions/Error_400_join_conversation"
              },
              "description": "Bad Request"
            },
            "200": {
              "schema": {
                "$ref": "#/definitions/join_conversation"
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
              "description": "License key to be used for joining a public conversation in a project in an account."
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
              "description": "Token of the user who is joining the public conversation."
            },
            {
              "schema": {
                "$ref": "#/definitions/body_join_conversation"
              },
              "required": true,
              "name": "body",
              "in": "body",
              "description": "Body parameters for joining a public conversation."
            }
          ],
          "operationId": "Isometrik.MembershipcontrolWeb.ConversationJoinLeaveController.join_conversation",
          "description": "Join a public conversation in a project in an account."
        }
      },
      "/chat/conversation/eligible/members": {
        "get": {
          "tags": [
            "ConversationMembers"
          ],
          "summary": "Fetch eligible members to add to a conversation.",
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
                "$ref": "#/definitions/Error_404_get_conversation_eligible_members"
              },
              "description": "Not Found"
            },
            "400": {
              "schema": {
                "$ref": "#/definitions/Error_400_get_conversation_eligible_members"
              },
              "description": "Bad Request"
            },
            "200": {
              "schema": {
                "$ref": "#/definitions/get_conversation_eligible_members"
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
              "description": "License key to be used for fetching eligible members to be added to a conversation in a project in an account."
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
              "description": "Token of the user who is fetching eligible members for adding to the conversation."
            },
            {
              "x-example": "5d2c6a8a21a38e07dadb1808",
              "type": "string",
              "required": true,
              "name": "conversationId",
              "in": "query",
              "description": "Id of the conversation for which to fetch eligible members to be added."
            },
            {
              "x-example": 10,
              "type": "integer",
              "required": false,
              "name": "limit",
              "in": "query",
              "description": "Number of eligible members to be fetched.Allowed values are [1,20]",
              "default": 20
            },
            {
              "x-example": 10,
              "type": "integer",
              "required": false,
              "name": "skip",
              "in": "query",
              "description": "Number of members to be skipped before fetching eligible members(used for paging).",
              "default": 0
            }
          ],
          "operationId": "Isometrik.MembershipcontrolWeb.ConversationMembersController.get_conversation_eligible_members",
          "description": "Fetch eligible members to add to a conversation in a project in an account."
        }
      },
      "/chat/conversation/admin": {
        "put": {
          "tags": [
            "ConversationAdmin"
          ],
          "summary": "Make a member an admin.",
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
                "$ref": "#/definitions/Error_404_add_admin"
              },
              "description": "Not Found"
            },
            "403": {
              "schema": {
                "$ref": "#/definitions/Error_403_add_admin"
              },
              "description": "Forbidden"
            },
            "400": {
              "schema": {
                "$ref": "#/definitions/Error_400_add_admin"
              },
              "description": "Bad Request"
            },
            "200": {
              "schema": {
                "$ref": "#/definitions/add_admin"
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
              "description": "License key to be used for making a member admin for conversation in a project in an account."
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
              "description": "Token of the user who is making a member admin."
            },
            {
              "schema": {
                "$ref": "#/definitions/body_add_admin"
              },
              "required": true,
              "name": "body",
              "in": "body",
              "description": "Body parameters to make a member admin for conversation."
            }
          ],
          "operationId": "Isometrik.MembershipcontrolWeb.ConversationAdminController.add_admin",
          "description": "Make a member admin for conversation in a project in an account."
        },
        "delete": {
          "tags": [
            "ConversationAdmin"
          ],
          "summary": "Remove a member as admin.",
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
                "$ref": "#/definitions/Error_404_remove_admin"
              },
              "description": "Not Found"
            },
            "403": {
              "schema": {
                "$ref": "#/definitions/Error_403_remove_admin"
              },
              "description": "Forbidden"
            },
            "400": {
              "schema": {
                "$ref": "#/definitions/Error_400_remove_admin"
              },
              "description": "Bad Request"
            },
            "200": {
              "schema": {
                "$ref": "#/definitions/remove_admin"
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
              "description": "License key to be used for making a member admin for conversation in a project in an account."
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
              "description": "Token of the user who is removing a member as admin."
            },
            {
              "x-example": "5d2c6a9621a38e07daaee965",
              "type": "string",
              "required": true,
              "name": "memberId",
              "in": "query",
              "description": "Id of the user who is being removed as admin."
            },
            {
              "x-example": "5d2c6a8a21a38e07dadb1808",
              "type": "string",
              "required": true,
              "name": "conversationId",
              "in": "query",
              "description": "Id of the conversation from which to remove a member as admin."
            }
          ],
          "operationId": "Isometrik.MembershipcontrolWeb.ConversationAdminController.remove_admin",
          "description": "Remove a member as admin for conversation in a project in an account."
        }
      }
    },
    "info": {
      "version": "1.0",
      "title": "MembershipcontrolWeb"
    },
    "definitions": {
      "Error_403_add_admin": {
        "type": "object",
        "title": "Error_403_add_admin",
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
        "description": "errorCode- 0 => Allowed messages limit exceeded, 1 => Allowed messages limit shall be exceeded."
      },
      "Error_403_remove_admin": {
        "type": "object",
        "title": "Error_403_remove_admin",
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
        "description": "errorCode- 0 => Allowed messages limit exceeded, 1 => Allowed messages limit shall be exceeded."
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
      "add_admin": {
        "type": "object",
        "title": "Response of make admin request",
        "required": [
          "msg"
        ],
        "properties": {
          "msg": {
            "type": "string",
            "description": "Message of member being made admin for conversation successfully."
          }
        },
        "example": {
          "msg": "Admin added successfully."
        },
        "description": "Successfully made a member as admin for conversation."
      },
      "remove_admin": {
        "type": "object",
        "title": "Response of remove admin request",
        "required": [
          "msg"
        ],
        "properties": {
          "msg": {
            "type": "string",
            "description": "Message of member being removed as admin for conversation successfully."
          }
        },
        "example": {
          "msg": "Admin removed successfully."
        },
        "description": "Successfully removed a member as admin for conversation."
      },
      "Error_404_remove_members": {
        "type": "object",
        "title": "Error_404_remove_members",
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
      "remove_members": {
        "type": "object",
        "title": "Response of remove members request",
        "required": [
          "msg"
        ],
        "properties": {
          "msg": {
            "type": "string",
            "description": "Message of members being removed successfully."
          }
        },
        "example": {
          "msg": "Members removed successfully."
        },
        "description": "Successfully removed members to conversation."
      },
      "Error_403_add_members": {
        "type": "object",
        "title": "Error_403_add_members",
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
        "description": "errorCode- 0 => Allowed messages limit exceeded, 1 => Allowed messages limit shall be exceeded."
      },
      "Error_403_remove_members": {
        "type": "object",
        "title": "Error_403_remove_members",
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
        "description": "errorCode- 0 => Allowed messages limit exceeded, 1 => Allowed messages limit shall be exceeded."
      },
      "Error_403_leave_conversation": {
        "type": "object",
        "title": "Error_403_leave_conversation",
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
        "description": "errorCode- 0 => Allowed messages limit exceeded, 1 => Allowed messages limit shall be exceeded."
      },
      "add_members": {
        "type": "object",
        "title": "Response of add members request",
        "required": [
          "msg"
        ],
        "properties": {
          "msg": {
            "type": "string",
            "description": "Message of members being added successfully."
          }
        },
        "example": {
          "msg": "Members added successfully."
        },
        "description": "Successfully added members to conversation."
      },
      "Error_400_leave_conversation": {
        "type": "object",
        "title": "Error_400_leave_conversation",
        "required": [
          "error"
        ],
        "properties": {
          "error": {
            "type": "string",
            "description": "The message of the error raised."
          }
        },
        "description": "Conversation not found or not allowed to leave."
      },
      "Error_400_get_conversation_eligible_members": {
        "type": "object",
        "title": "Error_400_get_conversation_eligible_members",
        "required": [
          "error"
        ],
        "properties": {
          "error": {
            "type": "string",
            "description": "The message of the error raised."
          }
        },
        "description": "Conversation not found or not allowed to fetch eligible members."
      },
      "Error_400_add_admin": {
        "type": "object",
        "title": "Error_400_add_admin",
        "required": [
          "error"
        ],
        "properties": {
          "error": {
            "type": "string",
            "description": "The message of the error raised."
          }
        },
        "description": "Conversation not found or not allowed to make a member as admin for conversation."
      },
      "Member": {
        "type": "object",
        "title": "Member details",
        "required": [
          "isAdmin",
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
            "description": "Profilepic associated with the given member."
          },
          "userName": {
            "type": "string",
            "description": "Name associated with the given member."
          },
          "userIdentifier": {
            "type": "string",
            "description": "Identifier associated with the given member."
          },
          "userId": {
            "type": "string",
            "description": "Id associated with the given member."
          },
          "online": {
            "type": "boolean",
            "description": "Whether member is online now."
          },
          "metaData": {
            "type": "object",
            "description": "Object containing metadata of the member, if any."
          },
          "lastSeen": {
            "type": "integer",
            "description": "Epoch time at which member was last seen online.Value is -1 incase user is online now"
          },
          "isAdmin": {
            "type": "boolean",
            "description": "Whether member is admin of conversation."
          }
        },
        "description": "Model containing details of the member fetched."
      },
      "Error_400_join_conversation": {
        "type": "object",
        "title": "Error_400_join_conversation",
        "required": [
          "error"
        ],
        "properties": {
          "error": {
            "type": "string",
            "description": "The message of the error raised."
          }
        },
        "description": "Conversation not found or not allowed to join."
      },
      "Error_400_get_conversation_members": {
        "type": "object",
        "title": "Error_400_get_conversation_members",
        "required": [
          "error"
        ],
        "properties": {
          "error": {
            "type": "string",
            "description": "The message of the error raised."
          }
        },
        "description": "Conversation not found or not allowed to fetch members."
      },
      "body_add_members": {
        "type": "object",
        "title": "Body of the add memebers to conversation request",
        "required": [
          "members",
          "conversationId"
        ],
        "properties": {
          "members": {
            "type": "array",
            "description": "List of user ids to be added from conversation."
          },
          "conversationId": {
            "type": "String",
            "description": "Id of the conversation in which to add members."
          }
        },
        "example": {
          "members": [
            "5fb3daec21a38e73938a8d5b",
            "5fb4feb921a38e7b81fac663"
          ],
          "conversationId": "5fe0b8c921a38ec829956130"
        },
        "description": "Details of the add memebers to conversation request."
      },
      "join_conversation": {
        "type": "object",
        "title": "Response of join conversation request",
        "required": [
          "msg"
        ],
        "properties": {
          "msg": {
            "type": "string",
            "description": "Message of public conversation being joined successfully."
          }
        },
        "example": {
          "msg": "Conversation joined successfully."
        },
        "description": "Successfully joined public conversation."
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
      "EligibleMember": {
        "type": "object",
        "title": "Eligible member details",
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
            "description": "Profilepic associated with the given member."
          },
          "userName": {
            "type": "string",
            "description": "Name associated with the given member."
          },
          "userIdentifier": {
            "type": "string",
            "description": "Identifier associated with the given member."
          },
          "userId": {
            "type": "string",
            "description": "Id associated with the given member."
          },
          "online": {
            "type": "boolean",
            "description": "Whether member is online now."
          },
          "metaData": {
            "type": "object",
            "description": "Object containing metadata of the member, if any."
          },
          "lastSeen": {
            "type": "integer",
            "description": "Epoch time at which member was last seen online.Value is -1 incase user is online now"
          }
        },
        "description": "Model containing details of the eligible member fetched."
      },
      "Error_404_get_conversation_members": {
        "type": "object",
        "title": "Error_get_conversation_members",
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
      "get_conversation_members": {
        "type": "object",
        "title": "Response of fetch conversation members request",
        "required": [
          "msg"
        ],
        "properties": {
          "msg": {
            "type": "string",
            "description": "Message of conversation members being fetched successfully."
          },
          "conversationMembers": {
            "$ref": "#/definitions/Members"
          }
        },
        "example": {
          "msg": "Conversations members fetched successfully.",
          "conversationMembers": [
            {
              "userProfileImageUrl": "https://res.cloudinary.com/demo/image/upload/sample.jpg",
              "userName": "koko",
              "userIdentifier": "jojo2@lolo.com",
              "userId": "5fb4feb921a38e7b81fac663",
              "online": false,
              "metaData": {
                "country": "India"
              },
              "lastSeen": -1,
              "isAdmin": true
            }
          ]
        },
        "description": "Conversation members fetched successfully."
      },
      "get_conversation_eligible_members": {
        "type": "object",
        "title": "Response of fetch conversation members request",
        "required": [
          "msg"
        ],
        "properties": {
          "msg": {
            "type": "string",
            "description": "Message of conversation members being fetched successfully."
          },
          "conversationEligibleMembers": {
            "$ref": "#/definitions/EligibleMembers"
          }
        },
        "example": {
          "msg": "Eligible members for adding to conversation fetched successfully.",
          "conversationEligibleMembers": [
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
          ]
        },
        "description": "Conversation members fetched successfully."
      },
      "Error_404_add_admin": {
        "type": "object",
        "title": "Error_404_add_admin",
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
      "EligibleMembers": {
        "type": "array",
        "title": "Eligible members fetch",
        "items": {
          "$ref": "#/definitions/EligibleMember"
        },
        "description": "All eligible members list."
      },
      "Error_400_remove_members": {
        "type": "object",
        "title": "Error_400_remove_members",
        "required": [
          "error"
        ],
        "properties": {
          "error": {
            "type": "string",
            "description": "The message of the error raised."
          }
        },
        "description": "Conversation not found or not allowed to remove members."
      },
      "Error_404_get_conversation_eligible_members": {
        "type": "object",
        "title": "Error_get_conversation_eligible_members",
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
        "description": "errorCode- 0 => licenseKey not found, 1 => User not found, 2 => No eligible members found."
      },
      "leave_conversation": {
        "type": "object",
        "title": "Response of leave conversation request",
        "required": [
          "msg"
        ],
        "properties": {
          "msg": {
            "type": "string",
            "description": "Message of public conversation being left successfully."
          }
        },
        "example": {
          "msg": "Conversation left successfully."
        },
        "description": "Successfully left public conversation."
      },
      "Error_400_add_members": {
        "type": "object",
        "title": "Error_400_add_members",
        "required": [
          "error"
        ],
        "properties": {
          "error": {
            "type": "string",
            "description": "The message of the error raised."
          }
        },
        "description": "Conversation not found or not allowed to add members."
      },
      "Error_400_remove_admin": {
        "type": "object",
        "title": "Error_400_remove_admin",
        "required": [
          "error"
        ],
        "properties": {
          "error": {
            "type": "string",
            "description": "The message of the error raised."
          }
        },
        "description": "Conversation not found or not allowed to remove a member as admin for conversation."
      },
      "body_join_conversation": {
        "type": "object",
        "title": "Body of the join a public conversation request",
        "required": [
          "conversationId"
        ],
        "properties": {
          "conversationId": {
            "type": "String",
            "description": "Id of the public conversation to be joined."
          }
        },
        "example": {
          "conversationId": "5fe0b8c921a38ec829956130"
        },
        "description": "Details of the join a public conversation request."
      },
      "Members": {
        "type": "array",
        "title": "Members fetch",
        "items": {
          "$ref": "#/definitions/Member"
        },
        "description": "All members list."
      },
      "Error_404_leave_conversation": {
        "type": "object",
        "title": "Error_404_leave_conversation",
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
      "Error_403_join_conversation": {
        "type": "object",
        "title": "Error_403_join_conversation",
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
        "description": "errorCode- 0 => Allowed messages limit exceeded, 1 => Allowed messages limit shall be exceeded."
      },
      "Error_404_join_conversation": {
        "type": "object",
        "title": "Error_404_join_conversation",
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
      "Error_404_add_members": {
        "type": "object",
        "title": "Error_404_add_members",
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
        "description": "errorCode- 0 => licenseKey not found, 1 => Users not found or initiator is blocked."
      },
      "Error_404_remove_admin": {
        "type": "object",
        "title": "Error_404_remove_admin",
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
      "body_add_admin": {
        "type": "object",
        "title": "Body of the make a member admin for conversation request",
        "required": [
          "conversationId",
          "memberId"
        ],
        "properties": {
          "memberId": {
            "type": "String",
            "description": "Id of the user who is being made admin."
          },
          "conversationId": {
            "type": "String",
            "description": "Id of the conversation for which to make a member admin."
          }
        },
        "example": {
          "memberId": "5d2c6a8a21a38e07dadb1808",
          "conversationId": "5fe0b8c921a38ec829956130"
        },
        "description": "Details of the make a member admin for conversation request."
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
