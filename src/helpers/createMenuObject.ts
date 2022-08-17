
//Type que determina o que pode na função que cria os objetos.
type menuOptions = ''| 'all' | 'dog'| 'cat' | 'fish'


/*Função para retornar o objecto de acordo com o parametro passado
Exemplo: createmenuObject('dog') vai retornar
 Objeto {
    all: false,
    dog: true,
    cat: false,
    fish: false
}

essa função serve pra diminuir a quantidade de linhas necessarias no pageController. 
*/
export const createMenuObject = (activeMenu: menuOptions) => {
    let returnObject = {
        all: false,
        dog: false,
        cat: false,
        fish: false
    }

    if (activeMenu !== ''){
        returnObject[activeMenu] = true;
    }

    return returnObject

}