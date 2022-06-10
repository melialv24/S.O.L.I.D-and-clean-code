type Size = ''|'S'|'M'|'l'

class product {
    constructor(
        public name: string = '',
        public price: number = 0,
        public size: Size = ''
    ) {}

    isProductReady(): boolean{
        for( const key in this) {
            switch( typeof this[key] ) {
                case 'string':
                    if( (<string><unknown>this[key]).length <= 0) throw Error(`${key} is empty`)
                break;
                case 'number':
                    if( <number><unknown>this[key] <= 0) throw Error (`${key} is empty`)
                break;
                default: throw Error(`${ typeof this[key]} is not valid`)
            }
        }
        return true
    }

    toString() {
        //No dry
        //if( this.name.length <= 0) throw Error('NAME IS EMPTY')
        //if(this.price <= 0 ) throw Error('PRICE IS ZERO')
        //if(this.size.length <= 0 ) throw Error('SIZE IS EMPTY') 
        
        if(!this.isProductReady) return;
        return `${this.name} (${this.price}), ${this.size}`
    }
    
}

(() => {
    const bluePants = new product('Blue large pants', 10, 'M')
    console.log(bluePants)
})