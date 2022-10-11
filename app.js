const form = document.getElementById('myform')
const errMsg = document.getElementById('error-msg')


form.addEventListener('submit', (e)=>{

    e.preventDefault();

    const input = document.getElementById('url').value

    if(input === ''){
        errMsg.innerText = 'Please input url'

        errMsg.classList.add('error-container')

        setTimeout(()=>{

            errMsg.remove()

        },4000)

    }else{

        showLoader();

        setTimeout(() => {

            hideLoader();

            myResult()
            
        }, 4000);

    }



})


const showLoader = ()=>{

    document.getElementById('gif').style.display = 'block'

}

const hideLoader = ()=>{

    document.getElementById('gif').style.display = 'none'

}

const myResult = ()=>{
    let text = document.getElementById('result')
    text.innerHTML = 'Development in progress!'
}


