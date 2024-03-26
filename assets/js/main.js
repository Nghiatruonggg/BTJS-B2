// BT1: 
let num = (a) => {

    if (a % 3 == 0 && a % 5 == 0) {
        console.log("FizzBuzz");
    } else if (a % 3 == 0) {
        console.log("Fizz");
    } else if (a % 5 == 0) {
        console.log("Buzz");
    } else {
        console.log("Khong chia duoc");
    }
    
}

console.log(num(15));


// BT2:
// Vi du la em muon ghi cho cai else if co nghiem la x = ket qua nhung ma e bi bao loi a
let ptb1 = (a,b) => {

    if (a == 0 && b == 0) {
        console.log("Phuong trinh vo so nghiem");
    } else if (a == 0 & b != 0) {
        console.log("Phuong trinh vo nghiem");
    } else if (a != 0 && b == 0) {
        console.log(0);
    } else {
        console.log((-b/a));
    }
} 

ptb1(3,4);

// BT3:
let ptb2 = (a,b,c) => {

    if (a == 0 && b == 0 && c == 0) {
        console.log("Phuong trinh vo so nghiem");
    } else if (a == 0 && b != 0 && c == 0 ) {
        console.log(0);
    } else if (a == 0 && b == 0 && c != 0) {
        console.log("Phuong trinh vo nghiem");
    } else if (a == 0 && b != 0 && c != 0) {
        console.log((c/b));
    } else if (a != 0) {
        let d = b*b - 4*a*c;
        if (d < 0) {
            console.log("Phuong trinh vo nghiem");
        } else if (d == 0) {
            console.log(-b/(2*a))
        } else if(d > 0) {
            let x1 = (-b - Math.sqrt(d))/(2*a);
            let x2 = (-b + Math.sqrt(d))/(2*a);
            console.log(x1);
            console.log(x2);
        }
}
}

ptb2(1,2,0);

// BT4:
let bmi = (a,b) => {
    let canNang = a;
    let chieuCao = b;
    return ((a)/(b*b));
}

console.log(bmi(68,1.65));

// BT5:
let f = (a) => {
    let doC = a;
    return((a)*9/5+32);
}

console.log(f(32));
