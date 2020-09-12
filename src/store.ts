/**
 * @author qskauffman
 * Proper store implementation that will integrate smoothly with Angular.
 * A store is simple a global object that synchronizes data across components.
 * This store implementation provides an undo feature by recording history.
 * @todo Implement redo feature by caching store data.
 */



/**
 * Optional interface list all properties that might exist on each update to store's data.
 * Supports a large quantity of properties while allowing user to just pass in small changes
 * at a time.
 */
export interface IStoreDataOptional {
    readonly name?: string;
    readonly age?: number;
    readonly toys?: string[];
}

/**
 * The required interface extends the optional interface by not allowing any optional parameters.
 */
export interface IStoreDataRequired extends IStoreDataOptional {
    readonly name: string;
    readonly age: number;
    readonly toys: string[],
}



/**
 * Store interface that declares that each store must have a data and history property.
 * History should be readonly.
 * 
 */
export interface IStore {
    data: IStoreDataRequired;
    history: IStoreDataRequired[];
}

/**
 * Want the properties to be accessed through reference, so components can access
 * without having to continuously call a function.
 * Require any updates to the store's data to be tunneled through an update() method.
 * When the store in initialized for the first and only time, the history must be set 
 * to an empty array.
 */
export class Store implements IStore {
    data: IStoreDataRequired;
    readonly history: IStoreDataRequired[];

    
    /**
     * Private constructor for Store.
     * Data must be initialized.
     * History must be initialized to empty array.
     */
    private constructor(){
        this.data = {
            name: "",
            age: 0,
            toys: [],
        }
        this.history = [];
    }

    /**
     * Private instance so that user must access through getInstance() method.
     */
    private static INSTANCE: Store;

    /**
     * Since the Store is a Singleton object, it does not have a public constructor.
     * In order to reference the store, user must call this method.
     * Because this class is static, all references to the single store will be in sync.
     */
    public static getInstance(): Store {
        if(!Store.INSTANCE){
            Store.INSTANCE = new Store();
        }
        return Store.INSTANCE;
    }

    /**
     * Update's the store's history by adding the current data to history array.
     * @todo Ensure Object.assign() provides deep copy
     */
    private updateHistory(): void {
        const dataCopy: IStoreDataRequired = Object.assign({}, this.data);
        this.history.push(dataCopy);
    }

    

    /**
     * Allows user to undo changes to the store. 
     * This will revert back to last data state.
     * User cannot undo if there is no history.
     * @todo Implement redo feature.
     */
    public undo(): void {
        if(this.history.length > 0){
            this.data = <IStoreDataRequired> this.history.pop();
        }
    }



    /**
     * User can update the history by passing in the new data.
     * User does not need to specify all properties as this supports the optional parameters.
     * Using the Object.assign method will merge current data with new data.
     * Current data will be added to history so user can undo if needed.
     * @param {IStoreDataOptional} data 
     */
    public update(data: IStoreDataOptional): void {
        this.updateHistory();
        this.data = Object.assign(this.data, data);
    }

}



/** Proof of concept below */
let storeOne = Store.getInstance();
let storeTwo = Store.getInstance();
console.log(storeTwo.data);
storeOne.update({
    name: "Forrest"
});
console.log(storeOne.data);
storeTwo.update({
    age: 1
});
console.log(storeTwo.data);
storeTwo.update({
    toys: ["Ball", "Piglet", "Raccoon"]
});


console.log(storeOne.data);
storeOne.undo();
console.log(storeTwo.data);
storeTwo.undo();
console.log(storeOne.data);
storeOne.undo();
console.log(storeTwo.data);
storeTwo.undo();
console.log(storeOne.data);
storeTwo.undo();
console.log(storeTwo.data);