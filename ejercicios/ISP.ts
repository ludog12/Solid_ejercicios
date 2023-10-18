interface Comedor {
    comer(): void;
}

interface Volador {
    volar(): void;
}

interface Nadador {
    nadar(): void;
}

class Perro implements Comedor, Nadador {
    comer(): void {
        // Comer
    }

    nadar(): void {
        // Nadar
    }
}

class Paloma implements Comedor, Volador {
    comer(): void {
        // Comer
    }

    volar(): void {
        // Volar
    }
}
