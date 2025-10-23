// Test más avanzado con ejemplo para enseñar diferentes conceptos
import { sumar, saludar } from './utils.js';

describe('Ejemplos para enseñanza - Patrones de testing', () => {
  
  // Test simple - concepto básico
  describe('Test básico', () => {
    it('debe demostrar un test simple', () => {
      const resultado = sumar(2, 2);
      expect(resultado).toBe(4);
    });
  });

  // Test con setup y teardown
  describe('Test con setup y teardown', () => {
    let valorTemporal;

    beforeEach(() => {
      // Setup - se ejecuta antes de cada test
      valorTemporal = 'valor inicial';
      console.log('Setup ejecutado antes del test');
    });

    afterEach(() => {
      // Teardown - se ejecuta después de cada test
      valorTemporal = null;
      console.log('Teardown ejecutado después del test');
    });

    it('debe demostrar setup y teardown', () => {
      expect(valorTemporal).toBe('valor inicial');
      valorTemporal = 'valor modificado';
      expect(valorTemporal).toBe('valor modificado');
    });

    it('debe tener setup limpio en cada test', () => {
      // Cada test empieza con el setup fresco
      expect(valorTemporal).toBe('valor inicial');
    });
  });

  // Test parametrizado - para enseñar múltiples casos
  describe('Test parametrizado', () => {
    const casos = [
      { a: 1, b: 1, esperado: 2, descripcion: 'números pequeños' },
      { a: 10, b: 5, esperado: 15, descripcion: 'números medianos' },
      { a: 100, b: 200, esperado: 300, descripcion: 'números grandes' },
      { a: -5, b: 3, esperado: -2, descripcion: 'números negativos' }
    ];

    casos.forEach(({ a, b, esperado, descripcion }) => {
      it(`debe sumar correctamente con ${descripcion}: ${a} + ${b} = ${esperado}`, () => {
        expect(sumar(a, b)).toBe(esperado);
      });
    });
  });

  // Test de comportamiento con diferentes entradas
  describe('Test de comportamiento', () => {
    it('debe manejar diferentes tipos de nombres', () => {
      // Arrange
      const casos = [
        { entrada: 'Juan', esperado: 'Hola, Juan!' },
        { entrada: '', esperado: 'Hola, mundo!' },
        { entrada: null, esperado: 'Hola, mundo!' },
        { entrada: undefined, esperado: 'Hola, mundo!' }
      ];

      // Act & Assert
      casos.forEach(({ entrada, esperado }) => {
        expect(saludar(entrada)).toBe(esperado);
      });
    });
  });

  // Test de edge cases
  describe('Test de casos límite', () => {
    it('debe manejar casos extremos en suma', () => {
      expect(sumar(0, 0)).toBe(0);
      expect(sumar(Infinity, 1)).toBe(Infinity);
      expect(sumar(-Infinity, 1)).toBe(-Infinity);
    });

    it('debe manejar valores especiales', () => {
      expect(isNaN(sumar(NaN, 1))).toBe(true);
      expect(sumar(1.1, 2.2)).toBeCloseTo(3.3, 1);
    });
  });
});

// Test para enseñar matchers de Jasmine
describe('Ejemplos de Matchers de Jasmine', () => {
  
  it('debe demostrar matchers de igualdad', () => {
    expect(5).toBe(5);                          // Igualdad estricta
    expect([1, 2, 3]).toEqual([1, 2, 3]);       // Igualdad profunda
    expect({ name: 'Juan' }).toEqual({ name: 'Juan' });
  });

  it('debe demostrar matchers de verdad', () => {
    expect(true).toBeTruthy();
    expect('hello').toBeTruthy();
    expect(1).toBeTruthy();
    
    expect(false).toBeFalsy();
    expect('').toBeFalsy();
    expect(0).toBeFalsy();
    expect(null).toBeNull();
    expect(undefined).toBeUndefined();
  });

  it('debe demostrar matchers numéricos', () => {
    expect(10).toBeGreaterThan(5);
    expect(5).toBeLessThan(10);
    expect(3.14159).toBeCloseTo(3.14, 2);
  });

  it('debe demostrar matchers de strings', () => {
    expect('Hola mundo').toContain('mundo');
    expect('test@email.com').toMatch(/\w+@\w+\.\w+/);
  });

  it('debe demostrar matchers de arrays', () => {
    expect(['a', 'b', 'c']).toContain('b');
    expect([1, 2, 3].length).toBe(3);
  });
});