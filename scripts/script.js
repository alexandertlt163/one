let q = document.getElementById('out');
let a = document.getElementsByClassName('dvid1');
function b1(){
    let w = document.createElement('div');
    w.className = 'dvid1';
    q.appendChild(w);
}

function  b2(){
    a[0].remove();
}

function  b3(){
    q.innerHTML = '';
}

function b4() {
    for (let  i = 0; i < a.length; i++) {
        let w = document.createElement('div');
        w.className = 'dvid2';
        a[i].appendChild(w);
    }
}

function b5() {
    for (let  i = 0; i < a.length; i++) {
        a[i].lastChild.remove();
    }
}

function b6() {
    for (let  i = 0; i < a.length; i++) {
        a[i].innerHTML = '';
    }
}

function b7() {
    let n = document.getElementById('i1').value;
    let m = document.getElementById('i2').value;

    for(let f=0;f<n;f++) {
        let w = document.createElement('div');
        w.className = 'dvid1';
        q.appendChild(w);
    }
    for ( let l=0;l<m;l++){
        for (let  i = 0; i < a.length; i++) {
                let w = document.createElement('div');
                w.className = 'dvid2';
                a[i].appendChild(w);
        }
    }
}