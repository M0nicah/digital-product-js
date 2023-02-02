const btn = document.getElementById('downloadBtn');
btn.addEventListener("click" , ()=>{
    console.log("hello")
    const link = document.createElement('a');
    link.href = "./index.html";
    link.download = "index.html";
    link.click();

});

// const printBtn = document.getElementById("printBtn");
//   printBtn.addEventListener("click", function() {
//     window.print();
//   });