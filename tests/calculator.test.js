import test from 'node:test';
import assert from 'node:assert/strict';
import { durationHours, weightedHours } from '../calculator.js';

test('Schicht am gleichen Tag', () => assert.equal(durationHours('14:00', '20:00'), 6));
test('Schicht über Mitternacht', () => assert.equal(durationHours('13:00', '01:00'), 12));
test('Beginn gleich Ende bedeutet 24 Stunden', () => assert.equal(durationHours('08:00', '08:00'), 24));
test('Belastungsfaktor', () => assert.equal(weightedHours('13:00', '01:00', 1.25), 15));
test('Ungültige Uhrzeit', () => assert.throws(() => durationHours('25:00', '01:00')));
test('Ungültiger Faktor', () => assert.throws(() => weightedHours('12:00', '13:00', 0)));
