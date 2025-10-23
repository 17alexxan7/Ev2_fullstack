// Test con Jasmine para las funciones utilitarias
import { sumar, restar, multiplicar, dividir, saludar } from './utils.js';

describe('Funciones matemáticas', () => {
  
  describe('sumar', () => {
    it('debe sumar dos números positivos correctamente', () => {
      expect(sumar(2, 3)).toBe(5);
    });

    it('debe sumar números negativos correctamente', () => {
      expect(sumar(-2, -3)).toBe(-5);
    });

    it('debe sumar un número positivo y uno negativo', () => {
      expect(sumar(10, -3)).toBe(7);
    });

    it('debe sumar cero correctamente', () => {
      expect(sumar(5, 0)).toBe(5);
      expect(sumar(0, 5)).toBe(5);
    });
  });

  describe('restar', () => {
    it('debe restar dos números correctamente', () => {
      expect(restar(5, 3)).toBe(2);
    });

    it('debe manejar resultados negativos', () => {
      expect(restar(3, 5)).toBe(-2);
    });
  });

  describe('multiplicar', () => {
    it('debe multiplicar dos números positivos', () => {
      expect(multiplicar(3, 4)).toBe(12);
    });

    it('debe multiplicar por cero', () => {
      expect(multiplicar(5, 0)).toBe(0);
    });

    it('debe multiplicar números negativos', () => {
      expect(multiplicar(-2, 3)).toBe(-6);
      expect(multiplicar(-2, -3)).toBe(6);
    });
  });

  describe('dividir', () => {
    it('debe dividir dos números correctamente', () => {
      expect(dividir(10, 2)).toBe(5);
    });

    it('debe manejar decimales', () => {
      expect(dividir(7, 2)).toBe(3.5);
    });

    it('debe lanzar error al dividir por cero', () => {
      expect(() => {
        dividir(10, 0);
      }).toThrowError('No se puede dividir por cero');
    });
  });
});

describe('Función saludar', () => {
  it('debe saludar con un nombre específico', () => {
    expect(saludar('Juan')).toBe('Hola, Juan!');
  });

  it('debe saludar genéricamente cuando no se proporciona nombre', () => {
    expect(saludar()).toBe('Hola, mundo!');
  });

  it('debe manejar nombres vacíos', () => {
    expect(saludar('')).toBe('Hola, mundo!');
  });

  it('debe manejar null', () => {
    expect(saludar(null)).toBe('Hola, mundo!');
  });
});