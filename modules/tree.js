export const makeNode = (value, leftChild, rightChild) => {
    let node = {
        name: value,
        leftChild: leftChild,
        rightChild: rightChild,
    }

    return node
}

export const printBranches = (tree) => {
    console.log(tree.name)
    if (tree.leftChild) {
        printBranches(tree.leftChild)
    }
    if (tree.rightChild) {
        printBranches(tree.rightChild)
    }
}



export const printLevels = (tree) => {

    let d = 1

    for (let i = 1; i <= height(tree); i++){

    }

    console.log(tree.name)

    if (tree.leftChild) {
        console.log(tree.leftChild.name)
    }

    if (tree.rightChild) {
        console.log(tree.rightChild.name)
    }

}

const printLevel = () =>
{

}

const height = (tree) => {

    if (tree.leftChild && tree.rightChild === null){
        return 0 
    }
    else {
        return 
    }





}