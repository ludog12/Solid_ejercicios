class Producto {
    constructor(
        private nombre: string,
        private precio: number
    ) {}

    getNombre(): string {
        return this.nombre;
    }

    getPrecio(): number {
        return this.precio;
    }
}

class AplicadorDescuento {
    aplicarDescuento(producto: Producto, descuento: number): number {
        return producto.getPrecio() - descuento;
    }
}
