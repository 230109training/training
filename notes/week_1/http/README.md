# HTTP

HTTP stands for (HyperText Transfer Protocol) and it is the protocol from transmitting data over the internet.
It is the foundation of the World Wide Web, and is used in essentailly all web applications to transfer data between
a client (typically a web browser) to a server.

## Overview

- HTTP is a request-response protocol. This means that a client sends a request to a server, and the server sends a response back to the client
- HTTP is based on a client-server archietecture. This means the client intiates requests and servers process those requests and return a response
- HTTP uses a set of predefined methods (also known as verbs) to indicate their desired action to be performed on a specific resource, most common ones being GET, POST, PUT, and DELETE
- HTTP uses a simple, text-based format for sending and receiving data. This is easy to implement and debug, but also relatively limited in terms of the types of data it can transfer
- HTTP can operate over different types of connection, the most common being TCP (Transmission Control Protocol)
- HTTP is stateless, which means that each request is independent of each other and the server does not maintain any information about the client across requests

## Importance

- HTTP is the most widely used protocol on the internet, used in nearly all web applications and APIs
- It's simple, flexible, well documented protocol that is supported by nearly all modern web browsers (if not all) and servers
- It is also supported by a wide range of libraries on different platforms and languages, which continues to make it relevant in any web development

## Structure

A HTTP Request consists of request line, headers, and an optional message body.

The request line includes the request method (e.g. GET, POST, etc), the requested resource URL, and teh HTTP protocol version.

Headers contain additional information about the request, such as the client's preferred language or the types of content that can be sent in the response.

The message body, if present, contains data that is sent in the request, such as the ocntents of an HTML form.

A HTTP response also consists of a status line, headers, and an optional message body.

The status line includes the HTTP protocol version, a status code (e.g. 200 ok, 404 not found), and a brief status message.

Headers contain additional information about the response, such as the content-type and the length of the message body.

The message body, if present, contains the data that the server has sent, like a web page with html.


