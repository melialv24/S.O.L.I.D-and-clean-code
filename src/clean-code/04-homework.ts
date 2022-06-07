(() => {


    // Resolver sin la triple condicional dentro del if
    // includes? arrays?
    function isRedFruit( fruit: string ): boolean {
        const redFruits = ['manzana', 'cereza', 'ciruela' ]
        return redFruits.includes(fruit)
    }

    // Simplificar esta función
    // switch? Object literal? validar posibles colores
    function getFruitsByColor( color: string ): string[] {

        switch (color) {
            case 'red':
                return ['manzana','fresa']
            case 'yellow':
                return ['piña','banana']
            case 'purple':
                return ['moras','uvas']
            default:
                throw Error('the color must be: red, yellow, purple');
        }
    }

    // Simplificar esta función
    let isFirstStepWorking  = true;
    let isSecondStepWorking = true;
    let isThirdStepWorking  = true;
    let isFourthStepWorking = true;

    function firstStepWorking(){

    }

    function brokenStep(stepNumber: number){
        switch (stepNumber) {
            case 1:
                return 'Fourth step broken.'
                break;
            case 2:
                return 'Fourth step broken.'
                break;
            case 3:
                return 'Fourth step broken.'
                break;
            case 4:
                return 'Fourth step broken.'
                break;
            default:
                throw Error('error');
        }
    }

    function workingSteps() {

        isFirstStepWorking ? firstStepWorking() : brokenStep(1)


        if( isFirstStepWorking === true ) {
            if( isSecondStepWorking === true ) {
                if( isThirdStepWorking === true ) {
                    if( isFourthStepWorking === true ) {
                        return 'Working properly!';
                    }
                    else {
                        return 'Fourth step broken.';
                    }
                }
                else {
                    return 'Third step broken.';
                }
            }
            else {
                return 'Second step broken.';
            }
        }
        else {
            return 'First step broken.';
        }
    }


    // isRedFruit
    console.log({ isRedFruit: isRedFruit('cereza'), fruit: 'cereza' }); // true
    console.log({ isRedFruit: isRedFruit('piña'), fruit: 'piña' }); // true

    //getFruitsByColor
    console.log({ redFruits: getFruitsByColor('red') }); // ['manzana', 'fresa']
    console.log({ yellowFruits: getFruitsByColor('yellow') }); // ['piña', 'banana']
    console.log({ purpleFruits: getFruitsByColor('purple') }); // ['moras', 'uvas']
    // console.log({ pinkFruits: getFruitsByColor('pink') }); // Error: the color must be: red, yellow, purple

    // workingSteps
    console.log({ workingSteps: workingSteps() }); // Cambiar los valores de la línea 31 y esperar los resultados


})();