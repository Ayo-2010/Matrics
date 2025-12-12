
let input = document.getElementsByTagName("input")
let Matrics1 = document.querySelector(".Matrics1")
let Matrics2 = document.querySelector(".Matrics2")
let body = document.querySelector("body")
// console.log(Matrics1);

// btn.addEventListener("click" , ()=>{
//     let a = input[0].value*input[3].value
//     let b = input[1].value*input[2].value
    
//     h2.innerHTML = `${a} and ${b}`
// })
Matrics1.addEventListener("click", ()=>{

    body.outerHTML = ` <h1>2 x 2 Matrics</h1>
        <section>
            <div>
                <div>
                    <input  type="number" >
                </div>
                <div>
                    <input  type="number" >
                </div>
            </div>
            <div>
                <div>
                    <input  type="number" >
                </div>
                <div>
                        <input  type="number" >
                </div>
            </div>
        </section>
        <h2></h2>
        <br>
        <div class="btnc">
            <button class="submit">Solve</button>
        </div>
        <script src="index.js"></script> `
        let btn = document.querySelector(".submit")
        let h2 = document.querySelector("h2")
        btn.addEventListener("click" , ()=>{
            let a = input[0].value*input[3].value
            let b = input[1].value*input[2].value
            
            h2.innerHTML = `${a - b}`
        })
        console.log(body);
})
Matrics2.addEventListener("click", ()=>{

    body.outerHTML = ` <h1>3 x 3 Matrics</h1>
        <section>
            <div>
                <div>
                    <input  type="number" >
                </div>
                <div>
                    <input  type="number" >
                </div>
                <div>
                    <input  type="number" >
                </div>
            </div>
            <div>
                <div>
                    <input  type="number" >
                </div>
                <div>
                        <input  type="number" >
                </div>
                <div>
                    <input  type="number" >
                </div>
            </div>
            <div>
            <div>
                <input  type="number" >
            </div>
            <div>
                    <input  type="number" >
            </div>
            <div>
                <input  type="number" >
            </div>
        </div>
        </section>
        <h2></h2>
        <br>
        <div class="btnd">
            <button class="submit1">Solve</button>
        </div>
        <script src="index.js"></script> `
        let btn1 = document.querySelector(".submit1")
        let h2 = document.querySelector("h2")
        btn1.addEventListener("click" , ()=>{
            let a = Number(input[1].value)*Number(input[5].value)
            let b = Number(input[2].value)*Number(input[4].value)
            let c = (a - b) * Number(input[6].value)
            let d = Number(input[4].value)*Number(input[8].value)
            let e = Number(input[5].value)*Number(input[7].value)
            let f = (d - e) * Number(input[0].value)
            let g = Number(input[1].value)*Number(input[8].value)
            let h = Number(input[2].value)*Number(input[7].value)
            let i = (g - h) * Number(input[3].value)
            let j = (c) + (f) + (-i)

            
            h2.innerHTML = `${j}`
        })
        // console.log(body);
})