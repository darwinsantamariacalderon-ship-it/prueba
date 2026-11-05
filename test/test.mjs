import fs from 'fs';
import assert from 'assert';
const html = fs.readFileSync(new URL('../index.html', import.meta.url), 'utf8');
const js = html.match(/<script id="calc">([\s\S]*?)<\/script>/)[1];
const { calcular, seccion } = new Function(js + '; return { calcular, seccion };')();
const base = { rho: 1400, theta: 20, incmax: 18, vmax: 3, lump: 100, Q: 250, v: 2, L: 120, H: 15, alt: 3800, fillmax: 0.85,
  B: 800, lam: 35, qbm2: 16, ao: 1.2, qro: null, qru: null, f: 0.023, nscr: 0, lsk: 0, eta: 0.9, mu: 0.35, arc: 200, sf: 10, sag: 0.01 };
const near = (a, b, tol, msg) => assert.ok(Math.abs(a - b) <= tol, `${msg}: ${a} vs ${b}`);
let r = calcular(base);
near(r.FU / 1000, 8.518, 0.001, 'F_U caso 1');
near(r.Palt, 26.3, 0.05, 'Potencia a 3800 m');
near(r.T2euler / 1000, 3.560, 0.001, 'T2 Euler');
r = calcular({ ...base, Q: 20, v: 1.5, L: 40, H: 6, B: 650, f: 0.02, rho: 210 });
near(r.FU / 1000, 1.002, 0.001, 'F_U aserrín');
near(seccion(800, 35, 20, 0).A, 0.0691, 0.0005, 'Sección B800/35°/20°');
assert.ok(calcular({ ...base, H: -15 }).FU < 0, 'Faja descendente regenerativa');
console.log('OK: todas las pruebas pasan');
