# Calculadora de fajas transportadoras

Herramienta web de predimensionamiento de fajas para caliza, cemento, clínker, arcilla, óxido de hierro, aserrín, biomasa, yeso, carbón, coque y arena.

Abre `index.html` en el navegador; no necesita instalación.

## Qué calcula
- **Capacidad y ancho**: sección de carga según DIN 22101 (ancho útil b = 0.9·B − 0.05, estaciones de 3 rodillos ISO 1537) con reducción por inclinación. Muestra el ancho mínimo para el llenado de diseño.
- **Potencia**: método C·f de ISO 5048 / DIN 22101 (F_H, F_N, F_St), más faldones y raspadores. Motor derrateado ≈1 %/100 m sobre 1000 m s. n. m. y redondeado al siguiente estándar IEC.
- **Tensiones**: T₂ mínima por adherencia (Euler) y por flecha, T₁, resistencia requerida en N/mm, clase EP sugerida y contrapeso.
- **Verificaciones**: inclinación máxima del material, velocidad recomendada, tamaño de terrón, faja regenerativa y nota para L < 80 m.

## Validación
`node test/test.mjs` compara la calculadora con el script `calc_transporte.py` (método C·f). Caso de referencia: 250 t/h, 2 m/s, L 120 m, H 15 m, B 800, q_B 12.8 kg/m, f 0.023, 3800 m → F_U 8.518 kN, 26.3 kW.

## Limitaciones
Es predimensionamiento. Las propiedades de los materiales son valores típicos de referencia: confirma la densidad aparente con laboratorio. Para fajas largas, con curvas verticales o tramos descendentes, haz el cálculo detallado por tramos o con el proveedor.

Darwin Santamaría Calderón
