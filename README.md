# AI Skill Library para Visual Studio Code

Una extensión para gestionar y usar "skills" (instrucciones predefinidas) con modelos de IA desde VS Code.

**Objetivo:** mantener la documentación mínima y automatizable para evitar actualizaciones manuales frecuentes. Usa el `package.json` y los `releases` como fuente de la verdad para versiones y notas de publicación.

## Quick Start

- **Requisitos:** Node.js (>=18), npm, Visual Studio Code (>=1.90).
- **Instalar dependencias:**

```bash
npm install
```

- **Construir (producción):**

```bash
npm run compile
```

- **Empaquetar (.vsix):**

```bash
npm run vsce:package
# o alternativamente
npx @vscode/vsce package --allow-missing-repository
```

- **Instalar localmente:**

```bash
code --install-extension ai-skill-library-<version>.vsix
```

Si el comando `code` no está disponible, abre VS Code y usa "Install from VSIX..." desde el menú de extensiones o copia manualmente la carpeta descomprimida a tu directorio de extensiones (`%USERPROFILE%\.vscode\extensions` en Windows).

## Desarrollo

- Ejecuta en modo watch durante el desarrollo:

```bash
npm run watch
```

- Para verificar tipos y lint antes de publicar:

```bash
npm run check-types
npm run lint
```

## Empaquetado y Publicación

- Asegúrate de que `package.json` contiene `publisher` y metadatos correctos.
- Publicar con `vsce` (requiere PAT para el Marketplace):

```bash
npm install -g @vscode/vsce
vsce package
vsce publish
```

- Recomendación: usa GitHub Actions para automatizar el build y la publicación al crear un release — así no tendrás que editar el README en cada versión.

## Buenas prácticas para evitar actualizaciones constantes

- Mantén la información variable (versiones, notas de cambio) en `package.json` y en los releases de GitHub.
- Publica notas de cambio en GitHub Releases en lugar de editar el README.
- Automatiza el empaquetado y publicación con una acción CI que corra `npm run vsce:package` y suba el artefacto o publique el paquete.

## Troubleshooting rápido

- Error de TypeScript sobre `baseUrl` o `ignoreDeprecations`: evita usar `baseUrl` si no es necesario; para proyectos con bundlers considera:

```json
{
	"compilerOptions": {
		"module": "esnext",
		"moduleResolution": "bundler",
		"target": "es2022"
	}
}
```

- Si `vsce package` falla por el icono, verifica que la ruta en `package.json` exista y que `.vscodeignore` incluya una excepción para el icono.

## Contribuir

- Abrir issues o PRs.
- Mantén los tests (si existen) y el lint limpios.

## Licencia

Consulta el archivo `LICENSE` del proyecto.

---

