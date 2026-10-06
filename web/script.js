/* LOGIN */

function login() {

    const user =
        document.getElementById("username").value;

    const pass =
        document.getElementById("password").value;

    const error =
        document.getElementById("loginError");


    /*
       Credenciales DEMO.

       Este login es solamente visual.
       No protege información real.
    */

    if (
        user === "admin" &&
        pass === "cyberlab"
    ) {

        document
        .getElementById("login")
        .classList.add("hidden");

        document
        .getElementById("dashboard")
        .classList.remove("hidden");

        startTerminal();

    } else {

        error.textContent =
        "ACCESO DENEGADO // Usuario o contraseña incorrectos";

    }

}


/* TERMINAL ANIMATION */

function startTerminal() {

    const terminal =
        document.getElementById("terminalText");

    const lines = [

        "[+] Inicializando CyberLab...",

        "[+] Comprobando entorno educativo...",

        "[+] Cargando módulos...",

        "[+] Verificando laboratorio local...",

        "[+] Sistema preparado.",

        "",

        "root@cyberlab:~$ whoami",

        "student",

        "root@cyberlab:~$ status",

        "LAB STATUS: ONLINE",

        "root@cyberlab:~$ echo \"Learn. Practice. Secure.\"",

        "Learn. Practice. Secure."

    ];


    terminal.textContent = "";

    let i = 0;


    function nextLine() {

        if (i < lines.length) {

            terminal.textContent +=
                lines[i] + "\n";

            i++;

            setTimeout(nextLine, 350);

        }

    }


    nextLine();

}


/* SHOW DASHBOARD */

function showDashboard() {

    document
    .getElementById("content")
    .classList.add("hidden");

    document
    .getElementById("dashboard")
    .classList.remove("hidden");

}


/* OPEN MODULE */

function openModule(module) {

    document
    .getElementById("dashboard")
    .classList.add("hidden");

    document
    .getElementById("content")
    .classList.remove("hidden");


    const page =
        document.getElementById("contentPage");


    const modules = {


/* LINUX */

linux: `

<h1>🧑‍💻 Linux Fundamentals</h1>

<p>
Linux es uno de los sistemas operativos
más utilizados en administración de servidores,
desarrollo y ciberseguridad.
</p>

<h2>01 // Navegación</h2>

<p>
Aprende a moverte por el sistema de archivos.
</p>

<div class="code">
pwd
ls
ls -la
cd /tmp
cd ..
</div>

<h2>02 // Crear archivos y carpetas</h2>

<div class="code">
mkdir laboratorio
cd laboratorio
touch notas.txt
ls -la
</div>

<h2>03 // Procesos</h2>

<div class="code">
ps
ps aux
top
</div>

<h2>04 // Permisos</h2>

<div class="code">
ls -l
chmod 600 archivo.txt
</div>

<div class="warning">
Practica estos comandos únicamente
en sistemas propios o laboratorios autorizados.
</div>

`,


/* NETWORK */

network: `

<h1>🌐 Network Security</h1>

<p>
La seguridad de redes comienza entendiendo
cómo se comunican los dispositivos.
</p>

<h2>01 // Dirección IP</h2>

<div class="code">
ip addr
</div>

<p>
Muestra las interfaces de red y sus
direcciones configuradas.
</p>

<h2>02 // Conectividad</h2>

<div class="code">
ping 127.0.0.1
</div>

<p>
127.0.0.1 representa el propio dispositivo.
</p>

<h2>03 // Puertos locales</h2>

<div class="code">
ss -tuln
</div>

<p>
Permite observar servicios escuchando
en el sistema local.
</p>

<h2>04 // DNS</h2>

<div class="code">
dig example.com
</div>

<div class="info">
Estos comandos son útiles para aprender
diagnóstico y administración de redes.
</div>

`,


/* WEB */

web: `

<h1>🛡️ Web Security</h1>

<p>
La seguridad web consiste en comprender
cómo funcionan las aplicaciones y cómo
protegerlas frente a entradas maliciosas.
</p>

<h2>01 // HTTP</h2>

<p>
HTTP permite que un navegador y un servidor
intercambien solicitudes y respuestas.
</p>

<h2>02 // Conceptos importantes</h2>

<ul>

<li>Autenticación</li>

<li>Autorización</li>

<li>Sesiones</li>

<li>Cookies</li>

<li>Validación de entradas</li>

<li>Control de acceso</li>

<li>Protección de datos</li>

</ul>

<h2>03 // OWASP</h2>

<p>
OWASP mantiene recursos educativos sobre
seguridad de aplicaciones web.
</p>

<h2>04 // Laboratorio seguro</h2>

<p>
Puedes crear aplicaciones vulnerables
intencionalmente dentro de tu propio
entorno para aprender a identificarlas
y corregirlas.
</p>

<div class="warning">
Nunca pruebes vulnerabilidades contra
sistemas sin autorización.
</div>

`,


/* PYTHON */

python: `

<h1>🐍 Python Security</h1>

<p>
Python permite crear herramientas de
automatización, análisis y administración.
</p>

<h2>01 // Variables</h2>

<div class="code">
nombre = "CyberLab"
nivel = 1

print(nombre)
print(nivel)
</div>

<h2>02 // Bucles</h2>

<div class="code">
for numero in range(5):
    print(numero)
</div>

<h2>03 // Funciones</h2>

<div class="code">
def mensaje():
    print("Laboratorio activo")

mensaje()
</div>

<h2>04 // Automatización</h2>

<p>
Una aplicación defensiva puede automatizar
tareas repetitivas como revisar archivos,
procesar logs o comprobar configuraciones.
</p>

<div class="info">
Primero aprende Python básico y después
avanza hacia automatización de seguridad.
</div>

`,


/* TERMINAL */

terminal: `

<h1>💻 Terminal Lab</h1>

<p>
Esta sección contiene comandos básicos
para practicar en Termux o Linux.
</p>

<h2>Comandos esenciales</h2>

<div class="code">
pwd
ls
cd
mkdir
touch
cat
cp
mv
rm
clear
</div>

<h2>Información del sistema</h2>

<div class="code">
uname -a
whoami
id
uptime
</div>

<h2>Red</h2>

<div class="code">
ip addr
ss -tuln
ping 127.0.0.1
</div>

<div class="warning">
Antes de ejecutar comandos destructivos,
comprende exactamente qué hacen.
</div>

`,


/* LABS */

labs: `

<h1>🧪 Laboratorios</h1>

<p>
Los laboratorios son entornos controlados
para practicar conceptos de seguridad.
</p>

<h2>LAB 01 // Linux</h2>

<p>
Crea una carpeta llamada laboratorio
y dentro crea tres archivos.
</p>

<div class="code">
mkdir laboratorio
cd laboratorio
touch uno.txt
touch dos.txt
touch tres.txt
ls -la
</div>

<h2>LAB 02 // Procesos</h2>

<p>
Identifica los procesos que se ejecutan
en tu propio dispositivo.
</p>

<div class="code">
ps
</div>

<h2>LAB 03 // Red local</h2>

<p>
Comprueba la interfaz de red del dispositivo.
</p>

<div class="code">
ip addr
</div>

<div class="info">
Todos estos ejercicios están pensados
para tu propio entorno de laboratorio.
</div>

`,


/* PROGRESS */

progress: `

<h1>📊 Progreso</h1>

<div class="progress-box">

<h3>Linux Fundamentals</h3>

<p>70%</p>

<div class="progress-bar">

<div
class="progress-fill"
style="width:70%"
></div>

</div>

</div>


<div class="progress-box">

<h3>Network Security</h3>

<p>45%</p>

<div class="progress-bar">

<div
class="progress-fill"
style="width:45%"
></div>

</div>

</div>


<div class="progress-box">

<h3>Web Security</h3>

<p>30%</p>

<div class="progress-bar">

<div
class="progress-fill"
style="width:30%"
></div>

</div>

</div>


<div class="progress-box">

<h3>Python Security</h3>

<p>25%</p>

<div class="progress-bar">

<div
class="progress-fill"
style="width:25%"
></div>

</div>

</div>


<h2>
Objetivo
</h2>

<p>
Completar los fundamentos antes de avanzar
hacia laboratorios más complejos.
</p>

`,


/* RESOURCES */

resources: `

<h1>📚 Recursos</h1>

<h2>Linux</h2>

<ul>

<li>Terminal Linux</li>

<li>Permisos</li>

<li>Procesos</li>

<li>Sistema de archivos</li>

</ul>

<h2>Networking</h2>

<ul>

<li>TCP/IP</li>

<li>DNS</li>

<li>HTTP/HTTPS</li>

<li>Puertos</li>

<li>Direcciones IP</li>

</ul>

<h2>Web Security</h2>

<ul>

<li>Autenticación</li>

<li>Sesiones</li>

<li>Validación</li>

<li>Control de acceso</li>

</ul>

<h2>Programación</h2>

<ul>

<li>Python</li>

<li>JavaScript</li>

<li>HTML</li>

<li>CSS</li>

</ul>

<div class="info">
La mejor forma de aprender seguridad
es practicar en entornos autorizados.
</div>

`,


/* ABOUT */

about: `

<h1>ℹ️ CyberLab</h1>

<p>
CyberLab es una interfaz educativa local
creada para estudiar fundamentos de
Linux, redes, programación y seguridad.
</p>

<h2>Objetivo</h2>

<p>
Crear un entorno sencillo donde puedas
organizar tus estudios de ciberseguridad.
</p>

<h2>Modo de uso</h2>

<div class="code">
python3 servidor.py
</div>

<p>
Después abre:
</p>

<div class="code">
http://127.0.0.1:8080
</div>

<h2>Seguridad</h2>

<p>
Esta página utiliza un login ficticio
y no debe utilizarse para almacenar
contraseñas reales.
</p>

<div class="warning">
Utiliza tus conocimientos únicamente
en sistemas propios o con autorización.
</div>

`

    };


    page.innerHTML =
        modules[module] ||
        "<h1>Módulo no encontrado</h1>";

}
