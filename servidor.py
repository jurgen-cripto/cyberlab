from http.server import BaseHTTPRequestHandler, HTTPServer
from pathlib import Path
import os

HOST = "0.0.0.0"
PORT = int(os.environ.get("PORT", 8080))

WEB_DIR = Path(__file__).parent / "web"


def read_file(filename):
    return (WEB_DIR / filename).read_text(encoding="utf-8")


class Servidor(BaseHTTPRequestHandler):

    def send_text(self, status, content, content_type="text/plain; charset=utf-8"):
        data = content.encode("utf-8")

        self.send_response(status)
        self.send_header("Content-Type", content_type)
        self.send_header("Content-Length", str(len(data)))
        self.end_headers()

        self.wfile.write(data)

    def do_GET(self):

        routes = {
            "/": ("index.html", "text/html; charset=utf-8"),
            "/index.html": ("index.html", "text/html; charset=utf-8"),
            "/style.css": ("style.css", "text/css; charset=utf-8"),
            "/script.js": ("script.js", "application/javascript; charset=utf-8"),
        }

        route = routes.get(self.path)

        if not route:
            self.send_text(404, "404 - Recurso no encontrado")
            return

        filename, content_type = route

        try:
            content = read_file(filename)

        except FileNotFoundError:
            self.send_text(500, f"Falta el archivo: {filename}")
            return

        self.send_text(200, content, content_type)


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