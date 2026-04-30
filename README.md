# Parcial-Angular-MISW4104

Este repositorio contiene la solución del parcial de Angular para el curso **"Conceptos básicos de ingeniería de software para la web"**. El proyecto consiste en un Dashboard de GitHub que permite la visualización de usuarios y repositorios, implementando buenas prácticas de desarrollo, modularización y navegación mediante rutas hijas.

## 🚀 Características

- **Listado de Usuarios:** Visualización de perfiles de usuario.
- **Listado de Repositorios:** Exploración de repositorios con navegación detallada.
- **Vistas de Detalle:** Implementación de rutas hijas para mostrar información específica sin perder el contexto de la lista.
- **Modularización:** Organización del código en módulos funcionales (`UsersModule`, `RepositoriesModule`).

## 🛠️ Tecnologías Utilizadas

- **Angular** (v19+)
- **TypeScript**
- **Bootstrap** (para estilos base)
- **CSS3** (estilos personalizados y layouts sticky)
- **Karma/Jasmine** (para pruebas unitarias)

## 📋 Prerrequisitos

Asegúrate de tener instalados los siguientes componentes antes de comenzar:

- Node.js (Versión LTS recomendada)
- Angular CLI instalada de forma global:
  ```bash
  npm install -g @angular/cli
  ```

## ⚙️ Instalación y Ejecución

Sigue estos pasos para clonar el proyecto y ejecutarlo en tu entorno local:

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/EduardVillamilUA/Parcial-Angular-MISW4104.git
   cd Parcial-Angular-MISW4104/github_dashboard
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   ```

3. **Iniciar el servidor de desarrollo:**
   ```bash
   ng serve
   ```

4. **Acceder a la aplicación:**
   Abre tu navegador en `http://localhost:4200`. La aplicación redireccionará automáticamente a la sección de usuarios.

## 📂 Estructura de Rutas Principales

- `/users`: Módulo de gestión de usuarios.
- `/repositories`: Módulo de repositorios.
  - `/repositories/:id`: Vista de detalle de un repositorio específico (Ruta hija).
