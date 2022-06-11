(()=>{

    //* Aplicar el principio de responsabilidad única
    //* Priorizar la composición frente a la herencia

    type HtmlType = 'input'|'select'|'textarea'|'radio';

    class HtmlElement {
        constructor(
            public id: string,
            public type: HtmlType,
        ) {}
    }

    class InputAttributes {
        constructor(
            public value: string,
            public placeholder: string
        ) {}
    }

    class InputEvents {
        setFocus() {};
        getValue() {};
        isActive() {};
        removeValue() {};
    }

    interface InputInterface {
        id: string,
        value: string,
        placeholder: string
    }

    class InputElement {
        public HtmlElement: HtmlElement
        public InputAttributes: InputAttributes
        public InputEvents: InputEvents

        constructor({
            value, placeholder, id
        }: InputInterface){
            this.HtmlElement = new HtmlElement(id, 'input')
            this.InputAttributes = new InputAttributes( value, placeholder)
            this.InputEvents = new InputEvents()
        }
    }
    //? Idea para la nueva clase InputElement


    const nameField = new InputElement({value: 'Fernando', placeholder: 'Enter first name', id:'txtName'});

    console.log({ nameField });

})()