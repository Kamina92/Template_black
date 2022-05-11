let button = document.querySelector('#button');

let numberWrapper = document.querySelector('#numberWrapper');

let headTitleJs = document.querySelector('.head-title');

let content = true;

console.dir(headTitleJs);

button.addEventListener('click', ()=>{

    if(content == true){

        numberWrapper.innerHTML= `
        <div class="container pt-5">
            <div class="row justify-content-around">
                <div class="col-12 col-md-3 card-lorem f_jura text-center me-2">
                    <div><p>Lorem</p></div>
                    <div><span>12</span></div>
                </div>
                <div class="col-12 col-md-3 card-lorem f_jura text-center ms-1 me-1">
                    <div><p>Lorem</p></div>
                    <div><span>3213</span></div>
                </div>
                <div class="col-12 col-md-3 card-lorem f_jura text-center ms-1 me-1">
                    <div><p>Lorem</p></div>
                    <div><span>251</span></div>
                </div>
                <div class="col-12 col-md-3 card-lorem f_jura text-center ms-2">
                    <div><p>Lorem</p></div>
                    <div><span>93</span></div>
                </div>
            </div>
        </div>
        
        `;

        content = false;

    } else {

        numberWrapper.innerHTML = '';

        content = true;
    }


})



headTitleJs.addEventListener('click', () =>{

    headTitleJs.classList.toggle('headTitleJs');


})