# Kameng Kriti API

### Documentation

---

Frontend specific endpoints.

## 1. Authentication and Authorization

---

> **`Create User`**

Create new user

| POST | /api/auth/ |
| --- | --- |
| Body | email |

Request body

```json
{
	"email":"emailhere",
}
```

Response

```json
{
	"error": false,
	"accountCreated": true,
	"token": "63dbeeb69fe3ba1f6c973189"
}
```

---

> **`Login User`**

Sends back access_token

---

| POST | /api/auth/login |
| --- | --- |
| Body | token, otp |

Request body

```json
{
	"token":"63dbeeb69fe3ba1f6c973189",
	"otp":3456
}
```

Response

```json
{
	"access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjNiZmZlM2E1ZTU5ZmQyMTI5ZmExZDg5IiwiaWF0IjoxNjc0OTk4Mzg3LCJleHAiOjE2NzUwMDE5ODd9.WZdXdeI9j2F9LYMTJZjpm-hlnMILheRG0gTQo63wmlk"
}
```

---

> **`Generate OTP`**



| POST | /api/auth/generateotp |
| --- | --- |
| Body | email |

Request body

```json
{
	"email":"emailhere"
}
```

Response

```json
{
	"message": "OTP Sent",
	"token": "63e132d1b3ec7680ef4deb8b"
}
```

---

**For protected routes, add the Authorization `header` to your request.**

```json
"Authorization": Token <access_token-here>
```

In case of invalid or expired access_token, api responds with **status code `403`**.

Common error responses

```json
//When you provide no or invalid format of access_token
//STATUS CODE 403
{
	"error": true,
	"message": "Invalid token"
}
```

```json
//When you provide exipred access_token
//STATUS CODE 403
{
	"error": true,
	"message": "Not Authenticated"
}
```
