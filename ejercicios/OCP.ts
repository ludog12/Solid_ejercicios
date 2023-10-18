namespace Productos {
    export interface DescuentoStrategy {
        aplicarDescuento(precio: number): number;
    }

    export class DescuentoNormal implements DescuentoStrategy {
        aplicarDescuento(precio: number): number {
            return precio;
        }
    }

    export class DescuentoEspecial implements DescuentoStrategy {
        aplicarDescuento(precio: number): number {
            return precio * 0.8; 
        }
    }

    export class Producto {
        private descuento: DescuentoStrategy;

        constructor(
            private nombre: string,
            private precio: number,
            descuento: DescuentoStrategy = new DescuentoNormal()
        ) {
            this.descuento = descuento;
        }

        getNombre(): string {
            return this.nombre;
        }

        getPrecio(): number {
            return this.descuento.aplicarDescuento(this.precio);
        }

        setDescuento(descuento: DescuentoStrategy): void {
            this.descuento = descuento;
        }
    }
}

const productoNormal = new Productos.Producto("Producto Normal", 100);
const productoConDescuento = new Productos.Producto("Producto con Descuento", 100, new Productos.DescuentoEspecial());

console.log(productoNormal.getPrecio()); //
