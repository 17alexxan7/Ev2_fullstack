# 🚀 Hola Mundo - React desde Cero

¡Bienvenido al mundo de React! Esta es tu guía completa para comenzar con React y testing.

## 📖 ¿Qué es React?

**React** es una biblioteca de JavaScript creada por Facebook para construir interfaces de usuario (UI) interactivas y dinámicas. React te permite:

- 🔧 **Crear componentes reutilizables**: Divide tu UI en piezas pequeñas y manejables
- ⚡ **Actualizaciones eficientes**: React actualiza solo las partes que cambian (Virtual DOM)
- 🎯 **Programación declarativa**: Describes cómo debe verse tu UI y React se encarga del resto
- 🔄 **Manejo de estado**: Controla los datos que cambian en tu aplicación

### Conceptos clave:
- **Componentes**: Bloques de construcción de tu aplicación
- **JSX**: Sintaxis que mezcla HTML y JavaScript
- **Estado (State)**: Datos que pueden cambiar con el tiempo
- **Props**: Datos que pasas entre componentes

## 🛠️ Cómo crear y ejecutar un proyecto React básico

### Paso 1: Verificar Node.js

React requiere **Node.js** para funcionar. Node.js es un entorno de ejecución de JavaScript.

#### ¿Tienes Node.js instalado?
Abre tu terminal y ejecuta:
```bash
node --version
npm --version
```

#### ❌ Si no tienes Node.js:
1. Ve a [https://nodejs.org/](https://nodejs.org/)
2. Descarga la versión **LTS** (Long Term Support)
3. Instala siguiendo el asistente
4. Reinicia tu terminal
5. Verifica la instalación con `node --version`

### Paso 2: Crear un proyecto React

```bash
# Crear un nuevo proyecto React
npx create-react-app mi-primer-proyecto

# Entrar al directorio del proyecto
cd mi-primer-proyecto

# Iniciar el servidor de desarrollo
npm start
```

### Paso 3: ¡Tu primera aplicación!

Tu aplicación se abrirá automáticamente en: `http://localhost:3000`

## 📁 Estructura de archivos React

```
mi-proyecto-react/
├── public/
│   ├── index.html      # ← Página HTML principal
│   └── manifest.json   # ← Configuración de la app
├── src/
│   ├── App.js          # ← ✏️ EDITA AQUÍ: Componente principal
│   ├── App.css         # ← ✏️ EDITA AQUÍ: Estilos del componente
│   ├── index.js        # ← Punto de entrada de React
│   └── index.css       # ← Estilos globales
├── package.json        # ← Dependencias y scripts
└── README.md          # ← Documentación
```

### 🎯 Archivos principales para editar:

#### `src/App.js` - Tu componente principal
```javascript
import React, { useState } from 'react';
import './App.css';

function App() {
  const [mensaje, setMensaje] = useState('¡Hola React!');

  return (
    <div className="App">
      <h1>{mensaje}</h1>
      <button onClick={() => setMensaje('¡React es genial!')}>
        Cambiar mensaje
      </button>
    </div>
  );
}

export default App;
```

#### `src/App.css` - Estilos de tu componente
```css
.App {
  text-align: center;
  padding: 20px;
}

h1 {
  color: #61dafb;
  font-size: 2rem;
}

button {
  background-color: #61dafb;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}
```

## 🧪 ¿Qué es Testing? Jasmine y Karma

### ¿Por qué hacer testing?
- ✅ **Verificar que tu código funciona** correctamente
- 🐛 **Encontrar errores** antes de que los usuarios los vean
- 🔒 **Mantener la calidad** mientras añades nuevas funciones
- 📚 **Documentar** cómo debe comportarse tu código

### 🔍 ¿Qué es Jasmine?

**Jasmine** es un framework de testing para JavaScript que te permite:

- ✏️ **Escribir tests claros** con sintaxis en inglés
- 🎯 **Verificar resultados** con "matchers"
- 📋 **Organizar tests** en grupos lógicos
- 🔄 **Configurar y limpiar** datos para cada test

#### Ejemplo básico de Jasmine:
```javascript
describe('Calculadora', () => {
  it('debe sumar dos números correctamente', () => {
    expect(sumar(2, 3)).toBe(5);
  });

  it('debe manejar números negativos', () => {
    expect(sumar(-1, 1)).toBe(0);
  });
});
```

### ⚙️ ¿Qué es Karma?

**Karma** es un test runner que:

- 🌐 **Ejecuta tests en navegadores reales** (Chrome, Firefox, etc.)
- 👀 **Observa cambios** en tus archivos y re-ejecuta tests automáticamente
- 📊 **Genera reportes** de cobertura y resultados
- 🔧 **Integra con herramientas** como Webpack, Babel, etc.

#### ¿Por qué Karma + Jasmine?
- **Jasmine**: Escribe los tests
- **Karma**: Ejecuta los tests en navegadores

## 🚀 Cómo ejecutar los tests

### Comandos disponibles:

```bash
# Ejecutar tests UNA VEZ (para CI/CD)
npm run test:karma:single

# Ejecutar tests en MODO WATCH (desarrollo)
npm run test:karma

# Ver tests de React (incluidos por defecto)
npm test
```

### 📁 Dónde escribir y editar tests:

```
src/
├── utils.js                    # ← ✏️ EDITA: Funciones a testear
├── utils.spec.js              # ← ✏️ EDITA: Tests de utils
├── ejemplos-teaching.spec.js   # ← ✏️ EDITA: Ejemplos educativos
└── App.test.js                # ← Tests de componentes React
```

### 🎯 Ejemplo de archivo de test:

#### `src/mi-funcion.js` (función a testear):
```javascript
export const saludar = (nombre) => {
  if (!nombre) return 'Hola, mundo!';
  return `Hola, ${nombre}!`;
};
```

#### `src/mi-funcion.spec.js` (test):
```javascript
import { saludar } from './mi-funcion.js';

describe('Función saludar', () => {
  it('debe saludar con nombre específico', () => {
    expect(saludar('Juan')).toBe('Hola, Juan!');
  });

  it('debe saludar genéricamente sin nombre', () => {
    expect(saludar()).toBe('Hola, mundo!');
  });
});
```

## 📝 Archivos de configuración principales

### `karma.conf.js` - ✏️ Configuración de Karma
```javascript
module.exports = function(config) {
  config.set({
    frameworks: ['jasmine'],
    files: ['src/**/*.spec.js'],
    browsers: ['Chrome'],
    // ... más configuración
  });
};
```

### `package.json` - ✏️ Scripts y dependencias
```json
{
  "scripts": {
    "start": "react-scripts start",
    "test:karma": "karma start",
    "test:karma:single": "karma start --single-run"
  }
}
```

### `.babelrc` - ✏️ Configuración de Babel (para JSX)
```json
{
  "presets": [
    "@babel/preset-env",
    ["@babel/preset-react", { "runtime": "automatic" }]
  ]
}
```

## 🎓 Flujo de trabajo recomendado

### Para desarrollo con React:
1. **Edita** `src/App.js` para cambiar tu componente
2. **Edita** `src/App.css` para cambiar estilos
3. **Ejecuta** `npm start` para ver cambios en vivo
4. **Abre** `http://localhost:3000` en tu navegador

### Para testing:
1. **Crea** funciones en `src/mi-archivo.js`
2. **Escribe tests** en `src/mi-archivo.spec.js`
3. **Ejecuta** `npm run test:karma:single` para verificar
4. **Usa** `npm run test:karma` para desarrollo continuo

## 🎯 Matchers principales de Jasmine

```javascript
// Igualdad
expect(valor).toBe(5);                    // Igualdad exacta
expect(objeto).toEqual({name: 'Juan'});   // Igualdad profunda

// Verdad/Falsedad
expect(valor).toBeTruthy();               // Es verdadero
expect(valor).toBeFalsy();                // Es falso
expect(valor).toBeNull();                 // Es null
expect(valor).toBeUndefined();            // Es undefined

// Números
expect(10).toBeGreaterThan(5);            // Mayor que
expect(5).toBeLessThan(10);               // Menor que
expect(3.14).toBeCloseTo(3.1, 1);         // Aproximadamente igual

// Strings
expect('Hola mundo').toContain('mundo');   // Contiene substring
expect('test@email.com').toMatch(/\w+@/);  // Coincide con regex

// Arrays
expect(['a', 'b']).toContain('a');        // Contiene elemento

// Errores
expect(() => {
  throw new Error('Ups!');
}).toThrow('Ups!');                       // Lanza error específico
```

## 🚀 ¡Comienza ahora!

1. **Verifica Node.js**: `node --version`
2. **Si no lo tienes**: Descarga de [nodejs.org](https://nodejs.org/)
3. **Crea tu proyecto**: `npx create-react-app mi-app`
4. **Entra al directorio**: `cd mi-app`
5. **Inicia la aplicación**: `npm start`
6. **Ejecuta los tests**: `npm run test:karma:single`

## 📚 Recursos adicionales

- [Documentación oficial de React](https://react.dev/)
- [Guía de Jasmine](https://jasmine.github.io/)
- [Documentación de Karma](https://karma-runner.github.io/)
- [Node.js Download](https://nodejs.org/)

---

¡Feliz coding! 🎉 React es súper divertido una vez que entiendes los conceptos básicos.