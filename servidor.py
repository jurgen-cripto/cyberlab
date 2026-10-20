from http.server import BaseHTTPRequestHandler, HTTPServer
from pathlib import Path
import os

BASE_DIR = Path(__file__).resolve().parent
WEB_DIR = BASE_DIR / "web"

HOST = "0.0.0.0"
PORT = int(os.environ.get("PORT", 8080))


class Servidor(BaseHTTPRequestHandler):

    def send_file(self, file_path, content_type):
        try:
            data = file_path.read_bytes()

            self.send_response(200)
            self.send_header("Content-Type", content_type)
            self.send_header("Content-Length", str(len(data)))
            self.end_headers()

            self.wfile.write(data)

        except FileNotFoundError:
            self.send_error(404, "Recurso no encontrado")

    def do_GET(self):

        if self.path in ("/", "/index.html"):
            self.send_file(
                WEB_DIR / "index.html",
                "text/html; charset=utf-8"
            )

        elif self.path == "/style.css":
            self.send_file(
                WEB_DIR / "style.css",
                "text/css; charset=utf-8"
            )

        elif self.path == "/script.js":
            self.send_file(
                WEB_DIR / "script.js",
                "application/javascript; charset=utf-8"
            )

        elif self.path == "/robots.txt":
            self.send_file(
                BASE_DIR / "robots.txt",
                "text/plain; charset=utf-8"
            )

        elif self.path == "/sitemap.xml":
            self.send_file(
                BASE_DIR / "sitemap.xml",
                "application/xml; charset=utf-8"
            )

        else:
            self.send_error(404, "Recurso no encontrado")


if __name__ == "__main__":

    print()
    print("======================================")
    print("        CYBERLAB SERVER")
    print("======================================")
    print()
    print("Servidor iniciado correctamente.")
    print(f"Host: {HOST}")
    print(f"Puerto: {PORT}")
    print()
    print("Pulsa CTRL+C para detener el servidor.")
    print()

    servidor = HTTPServer((HOST, PORT), Servidor)
    servidor.serve_forever()
