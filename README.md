<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## PENDAHULUAN

NestJS adalah sebuah framework berbasis TypeScript yang digunakan untuk membangun aplikasi backend yang modular, efisien, dan fleksibel. Framework ini dirancang dengan konsep arsitektur berbasis modul, yang memungkinkan pengelolaan berbagai fitur dalam aplikasi menjadi lebih terstruktur dan terorganisir. Dalam pengembangannya, NestJS mengadopsi konsep Dependency Injection (DI), yang memungkinkan pengembang menulis kode yang lebih bersih, mudah diuji, dan mudah dipelihara. Selain itu, framework ini menyediakan fitur bawaan seperti middleware, interceptor, pipe, dan guard yang dapat digunakan untuk meningkatkan keamanan serta fleksibilitas dalam pengolahan data pada sistem backend.
NestJS juga memiliki kemampuan untuk mengintegrasikan berbagai teknologi lain seperti database, API eksternal, dan layanan real-time. Dukungan terhadap validasi data, manajemen konfigurasi, logging, serta dokumentasi API secara otomatis menjadikan NestJS sebagai pilihan yang sesuai untuk pengembangan aplikasi backend dalam skala kecil maupun besar.

## PRINSIP NEST JS

Pengembangan aplikasi menggunakan NestJS berfokus pada beberapa prinsip utama:
Modularitas Sistem dibangun dengan pendekatan berbasis modul agar dapat dikelola dan dikembangkan dengan lebih mudah.

Dependency Injection  Memungkinkan pengelolaan dependensi yang lebih efisien dan meningkatkan fleksibilitas dalam integrasi berbagai komponen.

Middleware & Guards  Mendukung sistem keamanan dan kontrol akses dengan menggunakan middleware serta mekanisme guard.

Validasi & Exception Handling Menyediakan fitur validasi data dan mekanisme penanganan kesalahan secara sistematis.

Real-time Communication  Memiliki dukungan untuk komunikasi real-time menggunakan WebSockets

Manajemen Konfigurasi  Memudahkan pengaturan parameter yang digunakan dalam aplikasi secara terpusat

Logging & Monitoring  Menyediakan mekanisme pencatatan aktivitas sistem untuk keperluan pemantauan dan debugging.

## PENGOLAHAN DATABASE
Sistem backend berfungsi sebagai pusat pemrosesan data dalam suatu aplikasi. Data yang diterima dari klien akan melalui beberapa tahapan sebelum akhirnya dikembalikan sebagai respons. Secara umum, tahapan dalam pemrosesan data pada backend dapat dijelaskan sebagai berikut:
Penerimaan Permintaan  Backend menerima permintaan dari klien melalui protokol HTTP atau WebSocket.

Validasi Data  Data yang dikirimkan oleh klien diperiksa untuk memastikan kesesuaiannya dengan aturan yang telah ditentukan .

Interaksi dengan Database  Jika diperlukan, backend akan mengambil atau menyimpan data ke dalam database.

Penyusunan Respons Hasil dari pemrosesan data akan dikemas dalam format yang sesuai dan dikirim kembali ke klien.

## MODEL KOMUNIKASI DALAM BACKEND
Backend dapat berkomunikasi dengan klien menggunakan beberapa model komunikasi, di antaranya RESTful API, GraphQL, WebSockets, dan gRPC. RESTful API adalah model komunikasi berbasis HTTP yang menggunakan metode seperti GET, POST, PUT, dan DELETE untuk mengelola data. GraphQL memungkinkan klien mengambil data sesuai dengan kebutuhan spesifik tanpa harus mengikuti struktur yang kaku seperti REST. WebSockets mendukung komunikasi dua arah yang memungkinkan transfer data secara real-time tanpa perlu melakukan permintaan HTTP berulang kali. Sementara itu, gRPC menggunakan mekanisme serialisasi berbasis Protobuf untuk mempercepat pengiriman data dan mengoptimalkan performa backend

## KEAMANAN DALAM BACKEND
Keamanan merupakan aspek yang sangat penting dalam pengembangan backend. Beberapa strategi yang umum digunakan untuk meningkatkan keamanan backend antara lain autentikasi dan otorisasi, enkripsi data, firewall API, rate limiting, serta keamanan basis data. Autentikasi dan otorisasi dapat diterapkan menggunakan metode seperti OAuth, JWT, atau sesi berbasis token untuk mengamankan akses pengguna. Enkripsi data menggunakan algoritma seperti AES atau RSA untuk melindungi informasi sensitif. Firewall API berfungsi untuk mencegah akses tidak sah dan serangan brute-force dengan membatasi akses API. Rate limiting digunakan untuk membatasi jumlah permintaan dalam jangka waktu tertentu guna mencegah penyalahgunaan sistem. Selain itu, keamanan basis data diterapkan dengan menerapkan prinsip akses minimal serta mengenkripsi data untuk mencegah kebocoran informasi.

## CARA MENJALANKAN PROJECTNYA 
$ npm run start:dev
$ yang di mana bertujuan untuk menjalankan project dalam mode pengembangan

## FUNGSI SETIAP FILE YANG ADA PARA PROJECT
### FILE :
app.controller.spec.ts - File ini merupakan file pengujian (test) untuk app.controller.ts, biasanya menggunakan Jest untuk memastikan controller berfungsi dengan baik.

app.controller.ts - File ini menangani request HTTP yang masuk dan mengarahkannya ke app.service.ts untuk pemrosesan lebih lanjut.

app.module.ts - Modul utama dalam NestJS yang berfungsi untuk mengimpor dan mengatur modul lain agar aplikasi dapat berjalan.

app.service.ts - Berisi logika bisnis utama yang digunakan oleh app.controller.ts untuk memproses data atau menjalankan fungsi tertentu.

auth.guard.ts - Guard yang digunakan untuk menangani autentikasi dan otorisasi, memastikan bahwa hanya pengguna dengan akses tertentu yang bisa mengakses route tertentu.

auth.module.ts - Modul yang menangani autentikasi, seperti login, registrasi, dan validasi token JWT.

main.ts - Entry point aplikasi yang menginisialisasi NestJS, biasanya dengan fungsi bootstrap(), dan mengatur konfigurasi utama seperti middleware atau global pipe.

prisma.service.ts - Service yang berfungsi sebagai layer untuk berinteraksi dengan database menggunakan Prisma ORM.

user.decorator.ts - Sebuah dekorator custom yang biasanya digunakan untuk mempermudah akses informasi pengguna dari request tanpa harus menulis ulang kode berulang kali.

### FOLDER :
chat - berisi Tugas project di mana membuat sebuah aplikasi web chat sederhana menggunakan websocket. Biasanya berisi seperti controller, service, dan entitas yang menangani komunikasi antar pengguna.

dto - Folder ini berisi Data Transfer Objects (DTO), yaitu class yang digunakan untuk memvalidasi dan mentransformasi data sebelum diproses lebih lanjut dalam service atau controller.

entity - Berisi entitas yang merepresentasikan tabel dalam database. Biasanya digunakan bersama dengan ORM seperti Prisma atau TypeORM.

profile - Kemungkinan besar folder ini digunakan untuk fitur terkait profil pengguna, seperti pengelolaan data user.

shared - Folder ini biasanya berisi layanan atau fungsi yang bisa digunakan di berbagai bagian aplikasi, seperti helper, middleware, atau utilitas.

## KESIMPULAN
NestJS adalah framework backend berbasis TypeScript yang menyediakan arsitektur modular, sistem pengelolaan dependensi yang kuat, serta dukungan untuk komunikasi real-time. Dengan konsep arsitektur yang fleksibel dan pendekatan yang mengutamakan modularitas, NestJS menjadi solusi yang tepat untuk membangun aplikasi backend yang dapat dikembangkan dengan mudah dan dapat menangani berbagai kebutuhan sistem, termasuk pengolahan data, autentikasi pengguna, dan komunikasi real-time. Dalam penerapannya, konsep Dependency Injection, Middleware, Guards, Validasi, Exception Handling, serta Microservices menjadi aspek penting yang memungkinkan aplikasi backend untuk lebih efisien, aman, dan mudah dikembangkan dalam skala besar. Selain itu, penerapan standar keamanan seperti autentikasi, enkripsi data, serta mekanisme pemantauan sistem berperan dalam menjaga keandalan dan performa aplikasi backend dalam lingkungan produksi.
