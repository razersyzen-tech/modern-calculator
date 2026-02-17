const display = document.querySelector(".display");
const button = document.querySelectorAll("button");
const buttons = document.querySelectorAll(".buttons");
const specialChars = ["%", "*", "/", "-", "+", "="];
let output = "";
let historyDisplay = document.querySelector(".history");

// Membuat fungsi untuk menghitung berbasis tombol yanf di klik

const calculate = (btnvalue)  => {
    display.focus();
    if (btnvalue === "=" && output !== "") {
       historyDisplay.innerHTML = output;
       // Output sebuah "%" akan diubah dengan "/100" sebelum dievaluasi
       output = eval(output.replace("%", "/100"));
    } else if (btnvalue === "AC") {
        output = "";
        historyDisplay.innerHTML = "";
    } else if (btnvalue === "DEL") {
        // Tombol DEL akan menghapus karakter terakhir dari output
        output = output.toString().slice(0, -1);
    } else {
        // Output kosong atau tombol terklik adalah specialChar dia akan kembali
        if (output === "" && specialChars.includes(btnvalue)) return; {

            output += btnvalue;
        }
    }
    display.value = output;
};

// Menambahkan event listener untuk setiap tombol

for(let button of buttons) {
    button.addEventListener("click", (e) => calculate(e.target.dataset.value));
}