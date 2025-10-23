# 📁 Guía de archivos - Proyecto React desde Cero

## 🎯 Ubicación actual del proyecto:
```
C:\Users\seba4\git\React desde cero\react-desde-cero\
```

## 📝 Archivos que PUEDES EDITAR en este proyecto:

### 🔵 **Archivos React principales:**

| Archivo | Descripción | Para qué editarlo |
|---------|-------------|-------------------|
| `src/App.js` | Componente principal | ✏️ Cambiar la interfaz principal |
| `src/App.css` | Estilos del componente | 🎨 Cambiar colores, fuentes, layout |
| `src/index.js` | Punto de entrada | ⚙️ Configuración inicial (raramente) |
| `src/index.css` | Estilos globales | 🌐 Estilos que afectan toda la app |

### 🧪 **Archivos de Testing:**

| Archivo | Descripción | Para qué editarlo |
|---------|-------------|-------------------|
| `src/utils.js` | Funciones de ejemplo | ✏️ Agregar nuevas funciones |
| `src/utils.spec.js` | Tests básicos | 🧪 Escribir tests simples |
| `src/ejemplos-teaching.spec.js` | Tests educativos | 📚 Ejemplos para aprender |
| `src/App.test.js` | Tests de React | ⚛️ Tests de componentes |

### ⚙️ **Archivos de configuración:**

| Archivo | Descripción | Cuándo editarlo |
|---------|-------------|-----------------|
| `karma.conf.js` | Configuración de Karma | 🔧 Cambiar configuración de tests |
| `.babelrc` | Configuración de Babel | 🔄 Configurar transpilación |
| `package.json` | Scripts y dependencias | 📦 Agregar dependencias o scripts |

## 🚀 Comandos para ejecutar:

### En la terminal (dentro de la carpeta del proyecto):

```bash
# REACT - Desarrollo
npm start                    # ▶️ Inicia la app React en http://localhost:3000

# TESTING - Jasmine + Karma
npm run test:karma          # 👀 Tests en modo watch (se ejecutan automáticamente)
npm run test:karma:single   # ▶️ Ejecutar tests una sola vez

# REACT - Testing integrado
npm test                    # 🧪 Tests de React con Jest

# OTROS
npm run build              # 📦 Construir para producción
npm install                # 📥 Instalar dependencias
```

## 🎯 Flujo de trabajo típico:

### 1. **Desarrollar React:**
```bash
# Terminal 1: Iniciar React
npm start
```
- Edita `src/App.js` 
- Los cambios se ven automáticamente en `http://localhost:3000`

### 2. **Escribir y ejecutar tests:**
```bash
# Terminal 2: Tests en watch mode
npm run test:karma
```
- Crea funciones en `src/mi-archivo.js`
- Escribe tests en `src/mi-archivo.spec.js`
- Los tests se ejecutan automáticamente al guardar

### 3. **Estructura recomendada para nuevos archivos:**

```
src/
├── components/           # ← Crear carpeta para componentes
│   ├── Header.js        # ← Nuevo componente
│   └── Header.spec.js   # ← Tests del componente
├── utils/               # ← Crear carpeta para utilidades
│   ├── math.js          # ← Funciones matemáticas
│   └── math.spec.js     # ← Tests de las funciones
└── pages/               # ← Crear carpeta para páginas
    ├── Home.js          # ← Página principal
    └── Home.spec.js     # ← Tests de la página
```

## 📖 Cómo editar cada tipo de archivo:

### ✏️ **Editando React (`App.js`):**
```javascript
import React, { useState } from 'react';
import './App.css';

function App() {
  const [contador, setContador] = useState(0);

  return (
    <div className="App">
      <h1>Contador: {contador}</h1>
      <button onClick={() => setContador(contador + 1)}>
        Incrementar
      </button>
    </div>
  );
}

export default App;
```

### 🎨 **Editando estilos (`App.css`):**
```css
.App {
  text-align: center;
  padding: 40px;
  background-color: #f0f2f5;
}

h1 {
  color: #1976d2;
  font-size: 2.5rem;
  margin-bottom: 20px;
}

button {
  background-color: #1976d2;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
}

button:hover {
  background-color: #1565c0;
}
```

### 🧪 **Escribiendo tests (`.spec.js`):**
```javascript
// src/mi-calculadora.js
export const sumar = (a, b) => a + b;
export const multiplicar = (a, b) => a * b;

// src/mi-calculadora.spec.js
import { sumar, multiplicar } from './mi-calculadora.js';

describe('Mi Calculadora', () => {
  describe('sumar', () => {
    it('debe sumar dos números positivos', () => {
      expect(sumar(3, 4)).toBe(7);
    });

    it('debe manejar números negativos', () => {
      expect(sumar(-2, 5)).toBe(3);
    });
  });

  describe('multiplicar', () => {
    it('debe multiplicar correctamente', () => {
      expect(multiplicar(3, 4)).toBe(12);
    });

    it('debe retornar 0 al multiplicar por 0', () => {
      expect(multiplicar(5, 0)).toBe(0);
    });
  });
});
```

## 🔍 Herramientas recomendadas:

### 📝 **Editores:**
- **Visual Studio Code** (recomendado)
- WebStorm
- Atom
- Sublime Text

### 🔌 **Extensiones VS Code útiles:**
- ES7+ React/Redux/React-Native snippets
- Auto Rename Tag
- Bracket Pair Colorizer
- Prettier - Code formatter

## ❗ Archivos que NO debes editar (generados automáticamente):

- `node_modules/` - Dependencias instaladas
- `build/` - Archivos de producción
- `public/index.html` - Solo en casos avanzados
- `.git/` - Control de versiones

---

¡Con esta guía ya sabes exactamente dónde editar cada archivo y cómo ejecutar todo! 🚀