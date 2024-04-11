class DatabaseAdapter {
    private static instance: DatabaseAdapter | null;

    private constructor(  ) {}

    static getInstance(): DatabaseAdapter | null {
        if ( !DatabaseAdapter.instance ) {
            console.log('Generating new instance of database adapter.');
            this.instance = new DatabaseAdapter();
            return DatabaseAdapter.instance;
        }
        else {
            console.log('Taking an existent instance.');
            return DatabaseAdapter.instance;
        }
    }
    
    query( query: string ): void {
        console.log(query);
    }

    deleteInstance(): void {
        DatabaseAdapter.instance = null;
    }
}

//main

//Generates a new instance
let dbAdapter1 = DatabaseAdapter.getInstance();

//Use the previous instance created
let dbAdapter2 = DatabaseAdapter.getInstance();
dbAdapter1?.deleteInstance();

//Generates a new instance
let dbAdapter3 = DatabaseAdapter.getInstance();