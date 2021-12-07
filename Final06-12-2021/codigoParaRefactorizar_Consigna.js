var figuras = [
    {tipo: 'cuadrado', lado: 15, unidad: 'cms'},
    {tipo: 'rectangulo', ladoA: 12, ladoB: 5, unidad: 'cms'},
    {tipo: 'circulo', diametro: 0.20, unidad: 'mts'}
];

calcularArea(figuras);
calcularPerimetro(figuras);
console.log(figuras);
mostrarValores(figuras, 'mts');

mostrarValores(figuras, 'cms');

function calcularArea(figuras) {
    for(i=0; i<figuras.length;i++) {
        if(figuras[i].tipo == 'cuadrado'){
            figuras[i].area = figuras[i].lado * figuras[i].lado;
        }
        if(figuras[i].tipo == 'rectangulo'){
            figuras[i].area = figuras[i].ladoA * figuras[i].ladoB;
        }
        if(figuras[i].tipo == 'circulo'){
            let radio = figuras[i].diametro/2.0;
            figuras[i].area =  Math.PI * radio * radio;
        }
    }
}

function calcularPerimetro() {
    for(i=0; i<figuras.length;i++) {
        if(figuras[i].tipo == 'cuadrado'){
            figuras[i].perimetro = figuras[i].lado * 4;
        }
        if(figuras[i].tipo == 'rectangulo'){
            figuras[i].perimetro = figuras[i].ladoA * 2 + figuras[i].ladoB * 2;
        }
        if(figuras[i].tipo == 'circulo'){
            let radio = figuras[i].diametro/2.0;
            figuras[i].perimetro =  2 * Math.PI * radio ;
        }
    }
}

function mostrarValores(figuras, unidad) {
    for(i=0; i<figuras.length;i++) {
        if(figuras[i].tipo == 'cuadrado'){
            if(figuras[i].unidad==unidad) {
                // do nothing
                console.log(figuras[i].tipo + " area: " + figuras[i].area + " " + figuras[i].unidad + "2 perimetro: " + figuras[i].perimetro + " " + figuras[i].unidad )
            }
            if(figuras[i].unidad=='mts' && unidad=='cms') {
                console.log(figuras[i].tipo + " area: " + figuras[i].area * 10000 + " cms2 perimetro: " + figuras[i].perimetro * 100 + " cms" )
            }
            if(figuras[i].unidad=='cms' && unidad=='mts') {
                console.log(figuras[i].tipo + " area: " + figuras[i].area / 10000 + " mts2 perimetro: " + figuras[i].perimetro / 100 + " mts" )
            }
        }
        if(figuras[i].tipo == 'rectangulo'){
            if(figuras[i].unidad==unidad) {
                // do nothing
                console.log(figuras[i].tipo + " area: " + figuras[i].area + " " + figuras[i].unidad + "2 perimetro: " + figuras[i].perimetro + " " + figuras[i].unidad )
            }
            if(figuras[i].unidad=='mts' && unidad=='cms') {
                console.log(figuras[i].tipo + " area: " + figuras[i].area * 10000 + " cms2 perimetro: " + figuras[i].perimetro * 100 + " cms" )
            }
            if(figuras[i].unidad=='cms' && unidad=='mts') {
                console.log(figuras[i].tipo + " area: " + figuras[i].area / 10000 + " mts2 perimetro: " + figuras[i].perimetro / 100 + " mts" )
            }
        }
        if(figuras[i].tipo == 'circulo'){
            if(figuras[i].unidad==unidad) {
                // do nothing
                console.log(figuras[i].tipo + " area: " + figuras[i].area + " " + figuras[i].unidad + "2 perimetro: " + figuras[i].perimetro + " " + figuras[i].unidad )
            }
            if(figuras[i].unidad=='mts' && unidad=='cms') {
                console.log(figuras[i].tipo + " area: " + figuras[i].area * 10000 + " cms2 perimetro: " + figuras[i].perimetro * 100 + " cms" )
            }
            if(figuras[i].unidad=='cms' && unidad=='mts') {
                console.log(figuras[i].tipo + " area: " + figuras[i].area / 10000 + " mts2 perimetro: " + figuras[i].perimetro / 100 + " mts" )
            }
        }
    }
} 