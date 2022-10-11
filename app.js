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

            myResult(input)
            
        }, 4000);

    }



})


const showLoader = ()=>{

    document.getElementById('gif').style.display = 'block'

}

const hideLoader = ()=>{

    document.getElementById('gif').style.display = 'none'

}

const myResult = (input)=>{
    // let text = document.getElementById('result')
    // text.innerHTML = 'Development in progress!'


    const qrcode = new QRCode(document.getElementById("result"), {
        text: input,
        width: 250,
        height: 250,
        colorDark : "#000000",
        colorLight : "#ffffff",
        
    });
}
