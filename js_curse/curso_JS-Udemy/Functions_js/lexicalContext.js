const value = 'Global'

function myFunction(){
    // const value = 'Local'

    console.log(value)
}

function execute(){
    const value = 'Local'

    myFunction()
}

execute()