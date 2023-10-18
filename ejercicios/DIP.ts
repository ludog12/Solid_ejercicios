interface Database {
    query(query: string): any[];
}

class MySQL implements Database {
    private connection: any;

    constructor() {
        // Conexión a MySQL
    }

    public query(query: string): any[] {
        // Ejecutar query
        return [];
    }
}

class ProductService {
    constructor(private db: Database) {}

    public save(product: any): void {
        // Guardar producto
        this.db.query('...');
    }
}
