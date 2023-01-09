/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/functions/db.ts":
/*!*****************************!*\
  !*** ./src/functions/db.ts ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\r\nconst { MongoClient } = __webpack_require__(/*! mongodb */ \"mongodb\");\r\n(__webpack_require__(/*! dotenv */ \"dotenv\").config)();\r\nconst mongoClusterName = process.env.MONGOCLUSTERNAME;\r\nconst mongoUser = process.env.MONGOUSER;\r\nconst mongoDbName = process.env.MONGODBNAME;\r\nconst mongoPass = process.env.MONGOPASS;\r\nconst uri = `mongodb+srv://${mongoUser}:${mongoPass}@${mongoClusterName}.49taf.mongodb.net/${mongoDbName}?retryWrites=true&w=majority`;\r\nif (!uri) {\r\n    throw new Error(\"The MONGODB_URI environment variable must be configured with the connection string \" +\r\n        \"to the database.\");\r\n}\r\nlet cachedPromise = null;\r\nmodule.exports.connectToDatabase = async function connectToDatabase() {\r\n    if (!cachedPromise) {\r\n        cachedPromise = MongoClient.connect(uri, {\r\n            useNewUrlParser: true,\r\n            useUnifiedTopology: true,\r\n        });\r\n    }\r\n    const client = await cachedPromise;\r\n    return client;\r\n};\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZnVuY3Rpb25zL2RiLnRzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBR0E7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFHQTtBQUNBO0FBRUE7QUFFQTtBQUdBO0FBR0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUVBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1uZXctc2VydmljZS8uL3NyYy9mdW5jdGlvbnMvZGIudHM/ZTE0MiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbi8vIEltcG9ydCBkZXBlbmRlbmN5LlxyXG5jb25zdCB7IE1vbmdvQ2xpZW50IH0gPSByZXF1aXJlKFwibW9uZ29kYlwiKTtcclxucmVxdWlyZSgnZG90ZW52JykuY29uZmlnKCk7XHJcbi8qKlxyXG4gKiBATk9URSA6IFRoaXMgTW9uZ29EQiBjbHVzdGVyIGlzIGZvciB0ZXN0aW5nIHB1cnBvc2VzLlxyXG4gKiBZb3UgY2FuIGVpdGhlciBjaGFuZ2UgdGhlc2UgdmFsdWVzIG9yIHVzZSB0aGlzIGluc3RhbmNlIGZvciB0ZXN0aW5nLFxyXG4gKiBJbiBwcm9kdWN0aW9uLCB0aGVzZSBAY3JlZGVudGlhbHMgYW5kIEBrZXlzIHdpbGwgYmUgc3RvcmVkIGluIGEga2V5IG1hbmFnZW1lbnQgc3lzdGVtXHJcbiAqIEBUT0RPIDogRmlsbCBpbiB5b3VyIG1vbmdvREIgY3JlZGVudGlhbHMgdXNpbmcgLmVudiBmaWxlXHJcbiAqL1xyXG5jb25zdCBtb25nb0NsdXN0ZXJOYW1lOiBzdHJpbmcgPSBwcm9jZXNzLmVudi5NT05HT0NMVVNURVJOQU1FO1xyXG5jb25zdCBtb25nb1VzZXI6IHN0cmluZyA9IHByb2Nlc3MuZW52Lk1PTkdPVVNFUjtcclxuY29uc3QgbW9uZ29EYk5hbWU6IHN0cmluZyA9IHByb2Nlc3MuZW52Lk1PTkdPREJOQU1FO1xyXG5jb25zdCBtb25nb1Bhc3M6IHN0cmluZyA9IHByb2Nlc3MuZW52Lk1PTkdPUEFTUztcclxuXHJcbi8vIENvbm5lY3Rpb24gc3RyaW5nIHRvIHRoZSBkYXRhYmFzZVxyXG5jb25zdCB1cmk6IHN0cmluZyA9IGBtb25nb2RiK3NydjovLyR7bW9uZ29Vc2VyfToke21vbmdvUGFzc31AJHttb25nb0NsdXN0ZXJOYW1lfS40OXRhZi5tb25nb2RiLm5ldC8ke21vbmdvRGJOYW1lfT9yZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHlgO1xyXG5cclxuLy8gVmFsaWRhdGUgdGhhdCB0aGUgZGF0YWJhc2UgY29ubmVjdGlvbiBzdHJpbmcgaGFzIGJlZW4gY29uZmlndXJlZC5cclxuaWYgKCF1cmkpIHtcclxuICB0aHJvdyBuZXcgRXJyb3IoXHJcbiAgICBcIlRoZSBNT05HT0RCX1VSSSBlbnZpcm9ubWVudCB2YXJpYWJsZSBtdXN0IGJlIGNvbmZpZ3VyZWQgd2l0aCB0aGUgY29ubmVjdGlvbiBzdHJpbmcgXCIgK1xyXG4gICAgICBcInRvIHRoZSBkYXRhYmFzZS5cIlxyXG4gICk7XHJcbn1cclxuXHJcbi8vIENhY2hlZCBjb25uZWN0aW9uIHByb21pc2VcclxubGV0IGNhY2hlZFByb21pc2UgPSBudWxsO1xyXG5cclxuLy8gRnVuY3Rpb24gZm9yIGNvbm5lY3RpbmcgdG8gTW9uZ29EQiwgcmV0dXJuaW5nIGEgbmV3IG9yIGNhY2hlZCBkYXRhYmFzZSBjb25uZWN0aW9uXHJcbm1vZHVsZS5leHBvcnRzLmNvbm5lY3RUb0RhdGFiYXNlID0gYXN5bmMgZnVuY3Rpb24gY29ubmVjdFRvRGF0YWJhc2UoKSB7XHJcbiAgaWYgKCFjYWNoZWRQcm9taXNlKSB7XHJcbiAgICAvLyBJZiBubyBjb25uZWN0aW9uIHByb21pc2UgaXMgY2FjaGVkLCBjcmVhdGUgYSBuZXcgb25lLiBXZSBjYWNoZSB0aGUgcHJvbWlzZSBpbnN0ZWFkXHJcbiAgICAvLyBvZiB0aGUgY29ubmVjdGlvbiBpdHNlbGYgdG8gcHJldmVudCByYWNlIGNvbmRpdGlvbnMgd2hlcmUgY29ubmVjdCBpcyBjYWxsZWQgbW9yZSB0aGFuXHJcbiAgICAvLyBvbmNlLiBUaGUgcHJvbWlzZSB3aWxsIHJlc29sdmUgb25seSBvbmNlLlxyXG4gICAgY2FjaGVkUHJvbWlzZSA9IE1vbmdvQ2xpZW50LmNvbm5lY3QodXJpLCB7XHJcbiAgICAgIHVzZU5ld1VybFBhcnNlcjogdHJ1ZSxcclxuICAgICAgdXNlVW5pZmllZFRvcG9sb2d5OiB0cnVlLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvLyBhd2FpdCBvbiB0aGUgcHJvbWlzZS4gVGhpcyByZXNvbHZlcyBvbmx5IG9uY2UuXHJcbiAgY29uc3QgY2xpZW50ID0gYXdhaXQgY2FjaGVkUHJvbWlzZTtcclxuXHJcbiAgcmV0dXJuIGNsaWVudDtcclxufTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/functions/db.ts\n");

/***/ }),

/***/ "./src/functions/keyStoreModule.ts":
/*!*****************************************!*\
  !*** ./src/functions/keyStoreModule.ts ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const aws = __webpack_require__(/*! aws-sdk */ \"aws-sdk\");\r\nconst ssm = new aws.SSM();\r\nmodule.exports.getAWSAccountId = async function getAWSAccountId() {\r\n    const params = {\r\n        Name: \"AccountId\",\r\n        WithDecryption: true,\r\n    };\r\n    const result = await ssm.getParameter(params).promise();\r\n    return result.Parameter.Value;\r\n};\r\nmodule.exports.getMailgunAPIKey = async function getMailgunAPIKey() {\r\n    const params = {\r\n        Name: \"MAILGUN_API_KEY\",\r\n        WithDecryption: true,\r\n    };\r\n    const result = await ssm.getParameter(params).promise();\r\n    return result.Parameter.Value;\r\n};\r\nmodule.exports.getMailgunDomain = async function getMailgunDomain() {\r\n    const params = {\r\n        Name: \"MAILGUN_DOMAIN\",\r\n        WithDecryption: true,\r\n    };\r\n    const result = await ssm.getParameter(params).promise();\r\n    return result.Parameter.Value;\r\n};\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZnVuY3Rpb25zL2tleVN0b3JlTW9kdWxlLnRzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBRUE7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1uZXctc2VydmljZS8uL3NyYy9mdW5jdGlvbnMva2V5U3RvcmVNb2R1bGUudHM/NDQyZCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBhd3MgPSByZXF1aXJlKFwiYXdzLXNka1wiKTtcclxuXHJcbmNvbnN0IHNzbSA9IG5ldyBhd3MuU1NNKCk7XHJcblxyXG5pbnRlcmZhY2UgUGFyYW1ldGVySW50ZXJmYWNlIHtcclxuICBOYW1lOiBzdHJpbmc7XHJcbiAgV2l0aERlY3J5cHRpb246IEJvb2xlYW47XHJcbn1cclxuLyoqXHJcbiAqIFRoaXMgbW9kdWxlIGNvbm5lY3RzIHRvIHN0b3JlZCBzZWNyZXRzIGFuZCBrZXlzIHVzaW5nIFBhcmFtZXRlciBTdG9yZSBwcm92aWRlZCBieSBTeXN0ZW1zIE1hbmFnZXIgaW4gQVdTLlxyXG4gKiBUaGUgbGFtYmRhIGRlY3J5cHRzIHRoZXNlIGVuY3J5cHRlZCBrZXlzIGZvciB1c2UgaW4gZnVuY3Rpb24gY2FsbHNcclxuICogQHJldHVybnMge3N0cmluZ31cclxuICovXHJcbm1vZHVsZS5leHBvcnRzLmdldEFXU0FjY291bnRJZCA9IGFzeW5jIGZ1bmN0aW9uIGdldEFXU0FjY291bnRJZCgpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gIGNvbnN0IHBhcmFtczogUGFyYW1ldGVySW50ZXJmYWNlID0ge1xyXG4gICAgTmFtZTogXCJBY2NvdW50SWRcIixcclxuICAgIFdpdGhEZWNyeXB0aW9uOiB0cnVlLFxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHNzbS5nZXRQYXJhbWV0ZXIocGFyYW1zKS5wcm9taXNlKCk7XHJcbiAgcmV0dXJuIHJlc3VsdC5QYXJhbWV0ZXIuVmFsdWU7XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cy5nZXRNYWlsZ3VuQVBJS2V5ID0gYXN5bmMgZnVuY3Rpb24gZ2V0TWFpbGd1bkFQSUtleSgpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gIGNvbnN0IHBhcmFtczogUGFyYW1ldGVySW50ZXJmYWNlID0ge1xyXG4gICAgTmFtZTogXCJNQUlMR1VOX0FQSV9LRVlcIixcclxuICAgIFdpdGhEZWNyeXB0aW9uOiB0cnVlLFxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHNzbS5nZXRQYXJhbWV0ZXIocGFyYW1zKS5wcm9taXNlKCk7XHJcbiAgcmV0dXJuIHJlc3VsdC5QYXJhbWV0ZXIuVmFsdWU7XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cy5nZXRNYWlsZ3VuRG9tYWluID0gYXN5bmMgZnVuY3Rpb24gZ2V0TWFpbGd1bkRvbWFpbigpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gIGNvbnN0IHBhcmFtczogUGFyYW1ldGVySW50ZXJmYWNlID0ge1xyXG4gICAgTmFtZTogXCJNQUlMR1VOX0RPTUFJTlwiLFxyXG4gICAgV2l0aERlY3J5cHRpb246IHRydWUsXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgc3NtLmdldFBhcmFtZXRlcihwYXJhbXMpLnByb21pc2UoKTtcclxuICByZXR1cm4gcmVzdWx0LlBhcmFtZXRlci5WYWx1ZTtcclxufTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/functions/keyStoreModule.ts\n");

/***/ }),

/***/ "./src/functions/webhook/handler.ts":
/*!******************************************!*\
  !*** ./src/functions/webhook/handler.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"main\": () => (/* binding */ main)\n/* harmony export */ });\n/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source-map-support/register */ \"source-map-support/register\");\n/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _libs_apiGateway__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @libs/apiGateway */ \"./src/libs/apiGateway.ts\");\n\r\n\r\nconst { connectToDatabase } = __webpack_require__(/*! ../db */ \"./src/functions/db.ts\");\r\nconst AWS = __webpack_require__(/*! aws-sdk */ \"aws-sdk\");\r\nconst { getAWSAccountId } = __webpack_require__(/*! ../keyStoreModule */ \"./src/functions/keyStoreModule.ts\");\r\nconst crypto = __webpack_require__(/*! crypto */ \"crypto\");\r\nconst sns = new AWS.SNS();\r\nconst { getMailgunAPIKey } = __webpack_require__(/*! ../keyStoreModule */ \"./src/functions/keyStoreModule.ts\");\r\nconst verify = ({ signingKey, timestamp, token, signature, }) => {\r\n    const encodedToken = crypto\r\n        .createHmac(\"sha256\", signingKey)\r\n        .update(timestamp.concat(token))\r\n        .digest(\"hex\");\r\n    return encodedToken === signature;\r\n};\r\nconst webhook = async (event, _context) => {\r\n    let body = JSON.parse(event.body);\r\n    let message;\r\n    const apiKey = await getMailgunAPIKey();\r\n    const signingKey = apiKey;\r\n    const client = await connectToDatabase();\r\n    try {\r\n        const { timestamp, token, signature, } = body.signature;\r\n        const verifyEvent = verify({\r\n            signingKey,\r\n            timestamp,\r\n            token,\r\n            signature,\r\n        });\r\n        if (!verifyEvent) {\r\n            console.log(\"Could not verify this request is from mailgun\");\r\n            return _libs_apiGateway__WEBPACK_IMPORTED_MODULE_1__.formatJSONResponse._400({\r\n                message: \"Could not verify this request is from mailgun\",\r\n            });\r\n        }\r\n    }\r\n    catch (error) {\r\n        console.log(error.message, error.stack);\r\n        if (error instanceof TypeError) {\r\n            return _libs_apiGateway__WEBPACK_IMPORTED_MODULE_1__.formatJSONResponse._400({\r\n                message: \"Could not verify this request is from mailgun\",\r\n            });\r\n        }\r\n        return _libs_apiGateway__WEBPACK_IMPORTED_MODULE_1__.formatJSONResponse._400({ message: \"Request not permitted\" });\r\n    }\r\n    const accountId = await getAWSAccountId();\r\n    const payload = {\r\n        Provider: \"Mailgun\",\r\n        timestamp: body.signature.timestamp || \"No time stamp\",\r\n        type: `Email ${body[\"event-data\"].event}` || \"delivered status unknown\",\r\n    };\r\n    const params = {\r\n        Message: JSON.stringify(payload),\r\n        TopicArn: `arn:aws:sns:us-east-1:${accountId}:emailStatuses`,\r\n    };\r\n    try {\r\n        sns.publish(params).promise();\r\n        console.log(\"push sent\");\r\n        console.log(payload);\r\n        message = \"Success\";\r\n        const mailgunEvents = client\r\n            .db(\"email-tracker\")\r\n            .collection(\"mailgun-events\");\r\n        let dbOperation = await mailgunEvents.insertOne(body);\r\n        if (dbOperation) {\r\n            console.log(\"Mailgun event stored in database\");\r\n        }\r\n        return _libs_apiGateway__WEBPACK_IMPORTED_MODULE_1__.formatJSONResponse._200({ message: message });\r\n    }\r\n    catch (error) {\r\n        console.log(error.message);\r\n        message = \"Error occured\";\r\n        return _libs_apiGateway__WEBPACK_IMPORTED_MODULE_1__.formatJSONResponse._400({ message: message });\r\n    }\r\n};\r\nconst main = webhook;\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZnVuY3Rpb25zL3dlYmhvb2svaGFuZGxlci50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQTtBQVNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQW1CQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVlBO0FBSUE7QUFDQTtBQUVBO0FBQ0E7QUFHQTtBQUdBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktbmV3LXNlcnZpY2UvLi9zcmMvZnVuY3Rpb25zL3dlYmhvb2svaGFuZGxlci50cz84M2VlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcInNvdXJjZS1tYXAtc3VwcG9ydC9yZWdpc3RlclwiO1xyXG5pbXBvcnQgeyBmb3JtYXRKU09OUmVzcG9uc2UgfSBmcm9tIFwiQGxpYnMvYXBpR2F0ZXdheVwiO1xyXG5pbXBvcnQge1xyXG4gIEFQSUdhdGV3YXlQcm94eUhhbmRsZXIsXHJcbiAgQVBJR2F0ZXdheVByb3h5RXZlbnQsXHJcbiAgQ29udGV4dCxcclxuICBBUElHYXRld2F5UHJveHlSZXN1bHQsXHJcbn0gZnJvbSBcImF3cy1sYW1iZGFcIjtcclxuXHJcbi8vaW1wb3J0IGRiIGNvbm5lY3Rpb25cclxuY29uc3QgeyBjb25uZWN0VG9EYXRhYmFzZSB9ID0gcmVxdWlyZShcIi4uL2RiXCIpO1xyXG5cclxuY29uc3QgQVdTID0gcmVxdWlyZShcImF3cy1zZGtcIik7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgaW1wb3J0L25vLWV4dHJhbmVvdXMtZGVwZW5kZW5jaWVzXHJcbmNvbnN0IHsgZ2V0QVdTQWNjb3VudElkIH0gPSByZXF1aXJlKFwiLi4va2V5U3RvcmVNb2R1bGVcIik7XHJcbmNvbnN0IGNyeXB0byA9IHJlcXVpcmUoXCJjcnlwdG9cIik7XHJcbmNvbnN0IHNucyA9IG5ldyBBV1MuU05TKCk7XHJcblxyXG5jb25zdCB7IGdldE1haWxndW5BUElLZXkgfSA9IHJlcXVpcmUoXCIuLi9rZXlTdG9yZU1vZHVsZVwiKTtcclxuXHJcbmludGVyZmFjZSBTbnNQYXJhbWV0ZXIge1xyXG4gIE1lc3NhZ2U6IHN0cmluZztcclxuICBTdWJqZWN0Pzogc3RyaW5nO1xyXG4gIFRvcGljQXJuOiBzdHJpbmc7XHJcbn1cclxuXHJcbmludGVyZmFjZSBQYXlsb2FkIHtcclxuICBQcm92aWRlcjogc3RyaW5nO1xyXG4gIHRpbWVzdGFtcDogc3RyaW5nIHwgbnVtYmVyO1xyXG4gIHR5cGU6IHN0cmluZztcclxufVxyXG5cclxuLyoqXHJcbiAqICBUaGUgaGFuZGxlciBmdW5jdGlvbiB0byB2ZXJpZnkgdGhlIG1haWxndW4gd2ViaG9vayByZXF1ZXN0IHNpZ25hdHVyZS5cclxuICogQHBhcmFtIHBhcmFtMFxyXG4gKiBAcmV0dXJuc1xyXG4gKi9cclxuY29uc3QgdmVyaWZ5ID0gKHtcclxuICBzaWduaW5nS2V5LFxyXG4gIHRpbWVzdGFtcCxcclxuICB0b2tlbixcclxuICBzaWduYXR1cmUsXHJcbn06IHtcclxuICBzaWduaW5nS2V5OiBzdHJpbmc7XHJcbiAgdGltZXN0YW1wOiBzdHJpbmc7XHJcbiAgdG9rZW46IHN0cmluZztcclxuICBzaWduYXR1cmU6IHN0cmluZztcclxufSk6IEJvb2xlYW4gPT4ge1xyXG4gIGNvbnN0IGVuY29kZWRUb2tlbiA9IGNyeXB0b1xyXG4gICAgLmNyZWF0ZUhtYWMoXCJzaGEyNTZcIiwgc2lnbmluZ0tleSlcclxuICAgIC51cGRhdGUodGltZXN0YW1wLmNvbmNhdCh0b2tlbikpXHJcbiAgICAuZGlnZXN0KFwiaGV4XCIpO1xyXG4gIHJldHVybiBlbmNvZGVkVG9rZW4gPT09IHNpZ25hdHVyZTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBMYW1iZGEgZnVuY3Rpb24gdGhhdCBhY2NlcHRzIHRoZSBlbWFpbCBzdGF0dXMgZXZlbnQgZnJvbSBNYWlsZ3VuLiBUcmFuc2Zvcm1zXHJcbiAqIHRoZSBldmVudCBpbnRvIGEgSlNPTiBzdHJpbmcgYW5kIHNlbmRzIGl0IHRvIHRoZSBTTlMgdG9waWMuIEEgY29weSBvZiB0aGVcclxuICogZXZlbnQgaXMgdGhlbiBzdG9yZWQgaW4gdGhlIGRhdGFiYXNlLlxyXG4gKlxyXG4gKiBAcGFyYW0gZXZlbnRcclxuICogQHBhcmFtIF9jb250ZXh0XHJcbiAqIEByZXR1cm5zXHJcbiAqL1xyXG5cclxuY29uc3Qgd2ViaG9vazogQVBJR2F0ZXdheVByb3h5SGFuZGxlciA9IGFzeW5jIChcclxuICBldmVudDogQVBJR2F0ZXdheVByb3h5RXZlbnQsXHJcbiAgX2NvbnRleHQ6IENvbnRleHRcclxuKTogUHJvbWlzZTxBUElHYXRld2F5UHJveHlSZXN1bHQ+ID0+IHtcclxuICBsZXQgYm9keSA9IEpTT04ucGFyc2UoZXZlbnQuYm9keSk7XHJcbiAgbGV0IG1lc3NhZ2U6IHN0cmluZztcclxuXHJcbiAgY29uc3QgYXBpS2V5OiBzdHJpbmcgPSBhd2FpdCBnZXRNYWlsZ3VuQVBJS2V5KCk7XHJcbiAgY29uc3Qgc2lnbmluZ0tleSA9IGFwaUtleTtcclxuXHJcbiAgLy8gR2V0IGEgTW9uZ29EQkNsaWVudC5cclxuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjb25uZWN0VG9EYXRhYmFzZSgpO1xyXG5cclxuICAvL1ZlcmlmeSBpZiB0aGUgcmVxdWVzdCBpcyBmcm9tIE1haWxndW5cclxuICB0cnkge1xyXG4gICAgY29uc3Qge1xyXG4gICAgICB0aW1lc3RhbXAsXHJcbiAgICAgIHRva2VuLFxyXG4gICAgICBzaWduYXR1cmUsXHJcbiAgICB9OiB7IHRpbWVzdGFtcDogc3RyaW5nOyB0b2tlbjogc3RyaW5nOyBzaWduYXR1cmU6IHN0cmluZyB9ID0gYm9keS5zaWduYXR1cmU7XHJcbiAgICBjb25zdCB2ZXJpZnlFdmVudDogQm9vbGVhbiA9IHZlcmlmeSh7XHJcbiAgICAgIHNpZ25pbmdLZXksXHJcbiAgICAgIHRpbWVzdGFtcCxcclxuICAgICAgdG9rZW4sXHJcbiAgICAgIHNpZ25hdHVyZSxcclxuICAgIH0pO1xyXG5cclxuICAgIGlmICghdmVyaWZ5RXZlbnQpIHtcclxuICAgICAgY29uc29sZS5sb2coXCJDb3VsZCBub3QgdmVyaWZ5IHRoaXMgcmVxdWVzdCBpcyBmcm9tIG1haWxndW5cIik7XHJcbiAgICAgIHJldHVybiBmb3JtYXRKU09OUmVzcG9uc2UuXzQwMCh7XHJcbiAgICAgICAgbWVzc2FnZTogXCJDb3VsZCBub3QgdmVyaWZ5IHRoaXMgcmVxdWVzdCBpcyBmcm9tIG1haWxndW5cIixcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUubG9nKGVycm9yLm1lc3NhZ2UsIGVycm9yLnN0YWNrKTtcclxuICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIFR5cGVFcnJvcikge1xyXG4gICAgICAvLyBUeXBlRXJyb3I6IENhbm5vdCByZWFkIHByb3BlcnR5ICdzaWduYXR1cmUnIG9mIHVuZGVmaW5lZCBpcyB0aHJvd24gd2hlblxyXG4gICAgICAvLyB0aGUgcmVxdWVzdCBpcyBub3QgZnJvbSBtYWlsZ3VuIG9yIHRoZSBzaWduYXR1cmUgaXMgbm90IHZhbGlkLlxyXG4gICAgICByZXR1cm4gZm9ybWF0SlNPTlJlc3BvbnNlLl80MDAoe1xyXG4gICAgICAgIG1lc3NhZ2U6IFwiQ291bGQgbm90IHZlcmlmeSB0aGlzIHJlcXVlc3QgaXMgZnJvbSBtYWlsZ3VuXCIsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZvcm1hdEpTT05SZXNwb25zZS5fNDAwKHsgbWVzc2FnZTogXCJSZXF1ZXN0IG5vdCBwZXJtaXR0ZWRcIiB9KTtcclxuICB9XHJcblxyXG4gIC8vIEdldCBBV1MgYWNjb3VudCBJRCBmcm9tIHNzbSBwYXJhbWV0ZXIgc3RvcmUgYW5kIHNldCBpdCBhcyBhIHZhcmlhYmxlXHJcbiAgY29uc3QgYWNjb3VudElkOiBzdHJpbmcgPSBhd2FpdCBnZXRBV1NBY2NvdW50SWQoKTtcclxuXHJcbiAgLy8gVmFsaWRhdGUgcGF5bG9hZCB1c2luZyB0aGUgTWFpbGd1biBwYXlsb2FkIHNjaGVtYVxyXG4gIGNvbnN0IHBheWxvYWQ6IFBheWxvYWQgPSB7XHJcbiAgICBQcm92aWRlcjogXCJNYWlsZ3VuXCIsXHJcbiAgICB0aW1lc3RhbXA6IGJvZHkuc2lnbmF0dXJlLnRpbWVzdGFtcCB8fCBcIk5vIHRpbWUgc3RhbXBcIixcclxuICAgIHR5cGU6IGBFbWFpbCAke2JvZHlbXCJldmVudC1kYXRhXCJdLmV2ZW50fWAgfHwgXCJkZWxpdmVyZWQgc3RhdHVzIHVua25vd25cIixcclxuICB9O1xyXG5cclxuICAvLyBWYWxpZGF0ZSBTTlMgcGFyYW1ldGVyIHRvIGJlIHNlbnQgdXNpbmcgaW50ZXJmYWNlIHR5cGluZ1xyXG4gIGNvbnN0IHBhcmFtczogU25zUGFyYW1ldGVyID0ge1xyXG4gICAgTWVzc2FnZTogSlNPTi5zdHJpbmdpZnkocGF5bG9hZCksXHJcbiAgICBUb3BpY0FybjogYGFybjphd3M6c25zOnVzLWVhc3QtMToke2FjY291bnRJZH06ZW1haWxTdGF0dXNlc2AsXHJcbiAgfTtcclxuXHJcbiAgLy8gU2VuZCB0aGUgbWVzc2FnZSB0byBTTlNcclxuICB0cnkge1xyXG4gICAgc25zLnB1Ymxpc2gocGFyYW1zKS5wcm9taXNlKCk7XHJcbiAgICBjb25zb2xlLmxvZyhcInB1c2ggc2VudFwiKTtcclxuICAgIGNvbnNvbGUubG9nKHBheWxvYWQpO1xyXG4gICAgbWVzc2FnZSA9IFwiU3VjY2Vzc1wiO1xyXG5cclxuICAgIC8vIFN0b3JlIHRoZSBldmVudCBpbiB0aGUgZGF0YWJhc2VcclxuICAgIGNvbnN0IG1haWxndW5FdmVudHMgPSBjbGllbnRcclxuICAgICAgLmRiKFwiZW1haWwtdHJhY2tlclwiKVxyXG4gICAgICAuY29sbGVjdGlvbihcIm1haWxndW4tZXZlbnRzXCIpO1xyXG4gICAgLy8gSW5zZXJ0IHRoZSBldmVudCBpbnRvIHRoZSBkYXRhYmFzZVxyXG4gICAgbGV0IGRiT3BlcmF0aW9uID0gYXdhaXQgbWFpbGd1bkV2ZW50cy5pbnNlcnRPbmUoYm9keSk7XHJcbiAgICBpZiAoZGJPcGVyYXRpb24pIHtcclxuICAgICAgY29uc29sZS5sb2coXCJNYWlsZ3VuIGV2ZW50IHN0b3JlZCBpbiBkYXRhYmFzZVwiKTtcclxuICAgIH1cclxuICAgIHJldHVybiBmb3JtYXRKU09OUmVzcG9uc2UuXzIwMCh7IG1lc3NhZ2U6IG1lc3NhZ2UgfSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIC8vIElmIHRoZSBtZXNzYWdlIGZhaWxzIHRvIHNlbmQsIGxvZyB0aGUgZXJyb3JcclxuICAgIGNvbnNvbGUubG9nKGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgbWVzc2FnZSA9IFwiRXJyb3Igb2NjdXJlZFwiO1xyXG4gICAgcmV0dXJuIGZvcm1hdEpTT05SZXNwb25zZS5fNDAwKHsgbWVzc2FnZTogbWVzc2FnZSB9KTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgbWFpbiA9IHdlYmhvb2s7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/functions/webhook/handler.ts\n");

/***/ }),

/***/ "./src/libs/apiGateway.ts":
/*!********************************!*\
  !*** ./src/libs/apiGateway.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"formatJSONResponse\": () => (/* binding */ formatJSONResponse)\n/* harmony export */ });\nconst formatJSONResponse = {\r\n    _200: (body) => {\r\n        return {\r\n            statusCode: 200,\r\n            body: JSON.stringify(body, null, 2),\r\n        };\r\n    },\r\n    _400: (body) => {\r\n        return {\r\n            statusCode: 400,\r\n            body: JSON.stringify(body, null, 2),\r\n        };\r\n    },\r\n    _404: (body) => {\r\n        return {\r\n            statusCode: 404,\r\n            body: JSON.stringify(body, null, 2),\r\n        };\r\n    },\r\n};\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGlicy9hcGlHYXRld2F5LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFlQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktbmV3LXNlcnZpY2UvLi9zcmMvbGlicy9hcGlHYXRld2F5LnRzPzYyNTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUge1xyXG4gICAgQVBJR2F0ZXdheVByb3h5RXZlbnQsXHJcbiAgICBBUElHYXRld2F5UHJveHlSZXN1bHQsXHJcbiAgICBIYW5kbGVyLFxyXG4gIH0gZnJvbSBcImF3cy1sYW1iZGFcIjtcclxuICBpbXBvcnQgdHlwZSB7IEZyb21TY2hlbWEgfSBmcm9tIFwianNvbi1zY2hlbWEtdG8tdHNcIjtcclxuICBcclxuICB0eXBlIFZhbGlkYXRlZEFQSUdhdGV3YXlQcm94eUV2ZW50PFM+ID0gT21pdDxBUElHYXRld2F5UHJveHlFdmVudCwgXCJib2R5XCI+ICYge1xyXG4gICAgYm9keTogRnJvbVNjaGVtYTxTPjtcclxuICB9O1xyXG4gIGV4cG9ydCB0eXBlIFZhbGlkYXRlZEV2ZW50QVBJR2F0ZXdheVByb3h5RXZlbnQ8Uz4gPSBIYW5kbGVyPFxyXG4gICAgVmFsaWRhdGVkQVBJR2F0ZXdheVByb3h5RXZlbnQ8Uz4sXHJcbiAgICBBUElHYXRld2F5UHJveHlSZXN1bHRcclxuICA+O1xyXG4gIFxyXG4gIGV4cG9ydCBjb25zdCBmb3JtYXRKU09OUmVzcG9uc2UgPSB7XHJcbiAgICBfMjAwOiAoYm9keTogeyBba2V5OiBzdHJpbmddOiBvYmplY3QgfCBzdHJpbmcgfSkgPT4ge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHN0YXR1c0NvZGU6IDIwMCxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShib2R5LCBudWxsLCAyKSxcclxuICAgICAgfTtcclxuICAgIH0sXHJcbiAgICBfNDAwOiAoYm9keTogeyBba2V5OiBzdHJpbmddOiBvYmplY3QgfCBzdHJpbmcgfSkgPT4ge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHN0YXR1c0NvZGU6IDQwMCxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShib2R5LCBudWxsLCAyKSxcclxuICAgICAgfTtcclxuICAgIH0sXHJcbiAgICBfNDA0OiAoYm9keTogeyBba2V5OiBzdHJpbmddOiBvYmplY3QgfCBzdHJpbmcgfSkgPT4ge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHN0YXR1c0NvZGU6IDQwNCxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShib2R5LCBudWxsLCAyKSxcclxuICAgICAgfTtcclxuICAgIH0sXHJcbiAgfTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/libs/apiGateway.ts\n");

/***/ }),

/***/ "aws-sdk":
/*!**************************!*\
  !*** external "aws-sdk" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("aws-sdk");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("dotenv");

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("mongodb");

/***/ }),

/***/ "source-map-support/register":
/*!**********************************************!*\
  !*** external "source-map-support/register" ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("source-map-support/register");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/functions/webhook/handler.ts");
/******/ 	var __webpack_export_target__ = exports;
/******/ 	for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
/******/ 	if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ 	
/******/ })()
;