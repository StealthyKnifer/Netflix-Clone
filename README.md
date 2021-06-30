# chs73


[contributors-shield]: https://img.shields.io/github/contributors/jdmedlock/chs73.svg?style=for-the-badge
[contributors-url]: https://github.com/jdmedlock/chs73/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/jdmedlock/chs73.svg?style=for-the-badge
[forks-url]: https://github.com/jdmedlock/chs73/network/members
[stars-shield]: https://img.shields.io/github/stars/jdmedlock/chs73.svg?style=for-the-badge
[stars-url]: https://github.com/jdmedlock/chs73/stargazers
[issues-shield]: https://img.shields.io/github/issues/jdmedlock/chs73.svg?style=for-the-badge
[issues-url]: https://github.com/jdmedlock/chs73/issues

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
## Table of Contents

* [Overview](#overview)
* [Application Architecture](#application-architecture)
* [Installation & Configuration](#installation-configuration)
* [Release History](#release-history)
* [License](#license)

## Overview

CHS73 is the frontend application for the Central High School Class of 1973
reunion website. The goal of the website is to generate anticipation among
alumni, inform them about reunion news and upcoming events, and to periodically
poll members for their opinions.

## Application Architecture

The application consists of a web frontend (this repo) and a backend 
application server located in this [repo](https://github.com/jdmedlock/chs73be).

### FE

The frontend is built using these libraries, services, and tools:

| Dependency  | Description                 |
|-------------|-----------------------------|
| Svelte      | Frontend framework          |
| Sapper      | Web application framework   |
| Cloudinary  | Photo management service    |
| TailwindCSS | Utility-first CSS framework |
| Netlify     | Website host                |

Note that since Sveltekit 1.0 is still in beta at the time of this writing,
we are intentionally relying on Sapper. Once Sveltekit reaches a stable
release consideration will be given to migrating to it.

### BE

The following backend services are invoked using a REST API:

| Route   | Description                                       |
|---------|---------------------------------------------------|
| wakeup  | Wakes up the backend when the first FE page loads |
| message | Send an message entered by the user via an email to the reunion organizer |
## Installation & Configuration

1. Clone or fork this repo using git. Don't forget that to create a runnable application you'll also need the backend.

2. `npm install`

3. To run the app locally enter `npm run dev`

4. Open a new browser window and navigate to the URL `http://localhost:3000`. This assumes that you haven't changed the default port number.

### Environment variables

The following environment variables must be set up for the app to run properly:

| Key             | Value                                |
|-----------------|--------------------------------------|
| BE_URL          | http://localhost:3100                |
| CLOUDINARY_URL  | cloudinary://<api-key>:<api-secret>  |
| CLOUDINARY_NAME | <your 9-character unique cloud name> |

## Release History

You can find what changed, when in the [release history](./docs/RELEASE_HISTORY.md)

## License

Copyright 2021 <COPYRIGHT Jim D. Medlock>

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.

2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

3. Neither the name of the copyright holder nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
