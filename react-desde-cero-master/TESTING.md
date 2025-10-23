# Testing con Jasmine + Karma

## 📋 Configuración realizada

### Dependencias instaladas:
- `karma` - Test runner
- `karma-jasmine` - Adaptador de Jasmine para Karma
- `karma-chrome-launcher` - Launcher para Chrome
- `karma-webpack` - Integración con Webpack
- `karma-sourcemap-loader` - Soporte para source maps
- `jasmine-core` - Framework de testing Jasmine
- `@babel/core`, `@babel/preset-env`, `@babel/preset-react` - Transpilación de JSX
- `babel-loader`, `style-loader`, `css-loader` - Loaders para Webpack

### Archivos de configuración:
- `karma.conf.js` - Configuración de Karma
- `.babelrc` - Configuración de Babel para JSX

## 🚀 Cómo ejecutar los tests

### Modo desarrollo (con watch):
```bash
npm run test:karma
```

### Modo CI (ejecutar una vez):
```bash
npm run test:karma:single
```

## 📁 Estructura de archivos de test

```
src/
├── utils.js          # Funciones a testear
└── utils.spec.js     # Tests con Jasmine
```

## 📝 Ejemplo básico de test con Jasmine

```javascript
// utils.spec.js
import { sumar } from './utils.js';

describe('Funciones matemáticas', () => {
  describe('sumar', () => {
    it('debe sumar dos números correctamente', () => {
      expect(sumar(2, 3)).toBe(5);
    });

    it('debe manejar números negativos', () => {
      expect(sumar(-2, 3)).toBe(1);
    });
  });
});
```

## 🔍 Matchers principales de Jasmine

```javascript
// Igualdad
expect(valor).toBe(esperado);           // Igualdad estricta (===)
expect(objeto).toEqual(esperado);       // Igualdad profunda

// Veracidad
expect(valor).toBeTruthy();             // Valores truthy
expect(valor).toBeFalsy();              // Valores falsy
expect(valor).toBeNull();               // null
expect(valor).toBeUndefined();          // undefined

// Números
expect(numero).toBeGreaterThan(5);      // Mayor que
expect(numero).toBeLessThan(10);        // Menor que
expect(numero).toBeCloseTo(3.14, 2);    // Aproximadamente igual

// Strings
expect(string).toContain('substring');   // Contiene substring
expect(string).toMatch(/regex/);        // Coincide con regex

// Arrays
expect(array).toContain(elemento);      // Contiene elemento

// Excepciones
expect(() => {
  funcionQueLanzaError();
}).toThrow('mensaje de error');
```

## 📊 Estructura de test recomendada

```javascript
describe('Componente o módulo principal', () => {
  
  // Setup global si es necesario
  beforeEach(() => {
    // Configuración antes de cada test
  });

  afterEach(() => {
    // Limpieza después de cada test
  });

  describe('función específica', () => {
    it('debe hacer algo específico', () => {
      // Arrange (preparar)
      const input = 'valor de entrada';
      
      // Act (actuar)
      const result = funcionATestear(input);
      
      // Assert (verificar)
      expect(result).toBe('resultado esperado');
    });

    it('debe manejar casos edge', () => {
      // Test para casos límite
    });
  });
});
```

## 🎯 Consejos para testing efectivo

1. **Nombres descriptivos**: Los `describe` e `it` deben explicar claramente qué se está testeando
2. **Un concepto por test**: Cada `it` debe verificar una sola cosa
3. **AAA Pattern**: Arrange, Act, Assert
4. **Tests independientes**: Cada test debe poder ejecutarse solo
5. **Casos edge**: Testea casos límite y errores

## 🔧 Comandos útiles

```bash
# Ejecutar tests en modo watch
npm run test:karma

# Ejecutar tests una sola vez
npm run test:karma:single

# Ver todos los archivos de test
find src -name "*.spec.js" -o -name "*.test.js"
```

## 📚 Recursos adicionales

- [Documentación de Jasmine](https://jasmine.github.io/)
- [Documentación de Karma](https://karma-runner.github.io/)
- [Guía de testing en React](https://testing-library.com/docs/react-testing-library/intro/)