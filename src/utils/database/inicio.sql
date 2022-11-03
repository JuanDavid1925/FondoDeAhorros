CREATE TABLE IF NOT EXISTS usuarios(
    documento_usuario VARCHAR(32) NOT NULL,
    nombres_usuario VARCHAR(32),
    apellidos_usuario VARCHAR(32),
    contrasena_usuario VARCHAR(32),
    telefono_usuario VARCHAR(16),
    tipo_usuario VARCHAR(32),
	PRIMARY KEY (documento_usuario),
);

INSERT INTO usuarios(
	documento_usuario, 
	nombres_usuario,
    apellidos_usuario,
    contrasena_usuario,
    telefono_usuario,
    tipo_usuario
) VALUES (
	"1234567890",
	"Admin",
	"Super usuario",
	"La super contraseña",
	"3126459780",
	"Admin"
);

CREATE TABLE IF NOT EXISTS asociados(
  documento_asociado VARCHAR(32) NOT NULL,
  ciudad_asociado VARCHAR(32),
  ocupacion_asociado VARCHAR(32),
  direccion_asociado VARCHAR(32),
  cuota_manejo_pendiente_asociado INTEGER,
  cuota_fija_mensual_asociado VARCHAR(32),
  correo_asociado VARCHAR(32),
  fecha_nacimiento_asociado VARCHAR(32),
  activo_asociado VARCHAR(32),
  monto_total_asociado VARCHAR(32),
  tipo_asociado VARCHAR(32),
  PRIMARY KEY(documento_asociado),
  FOREIGN KEY(documento_asociado) REFERENCES usuarios (documento_usuario)
);

CREATE TABLE IF NOT EXISTS clientes(
  documento_cliente VARCHAR(32) NOT NULL,
  activo_cliente VARCHAR(32),
  documento_asociado_cliente VARCHAR(32),
  PRIMARY KEY(documento_cliente),
  FOREIGN KEY(documento_cliente) REFERENCES usuarios(documento_usuario)
  FOREIGN KEY(documento_asociado_cliente) REFERENCES asociados(documento_asociado)
);