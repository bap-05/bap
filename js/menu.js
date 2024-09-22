var icon1 = document.getElementById('icon');
    icon1.onclick = function(){
        const x =document.getElementById('bquanh')
        setTimeout(function(){
        x.classList.add('chon');
        },150);
    };
var icon2 = document.getElementById('bo');
    icon2.onclick = function(){
        const y =document.getElementById('bquanh')
        setTimeout(function(){
            y.classList.remove('chon');
            },150);
    };
const tLoai = document.getElementById('theLoai');
    tLoai.onclick = function(){
        const z =document.getElementById('con1')
        z.classList.toggle('con3');
    };
const tAnime = document.getElementById('topAnime');
    tAnime.onclick = function(){
        const t =document.getElementById('so1')
        t.classList.toggle('so3');
        console.log(t.classList);
    };
