function run(){
    let htmlCode = document.getElementById("html-code").value;
   alert(htmlCode);
    let cssCode = document.getElementById("css-code").value;
    let jsCode = document.getElementById("js-code").value;
    let output = document.getElementById("output");

    output.contentDocument.body.innerHTML = htmlCode;
}