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


let userdn = JSON.parse(localStorage.getItem("userdn"));
const userlogin =document.getElementById("userdn");
const ten =document.getElementById("ten");
const dnhap = document.getElementById("dangnhap");
const thoat = document.getElementById("thoat");
const ca = document.getElementById("canhan")
 
 if(userdn){
    ten.innerHTML = userdn.name;
    userlogin.style.display = "flex";
    dnhap.style.display = "none";
 }else{
    userlogin.innerHTML = "";
 };
 userlogin.onclick = function(){
    ca.classList.toggle('capnhat');

 };
 thoat.onclick = function(){
    userlogin.style.display = "none";
    ca.classList.remove('capnhat');
    dnhap.style.display = "flex";
    localStorage.removeItem("userdn");
 };
    const lef = document.getElementById("lef");
    const rig = document.getElementById("rig");
    const ngan = document.getElementById("ngan");
    const anh = document.getElementsByClassName("gioiTh")
    const y = anh.length
    var z = anh[0]
    widths = z.getBoundingClientRect().width
    console.log(widths);
    let a = 0;
    console.log(typeof(a)) 
   rig.addEventListener(`click`,() => {
    if(a==y-1){
        a=0;
        ngan.style.marginLeft="0"
    }else{
        a++;
        let s=widths *-1*a;
        console.log(s)
        ngan.style.marginLeft=`${s}px`;
        ngan.style.transition ="1s"
        
    }
   
   })
   lef.addEventListener(`click`,() => {
    if(a==0){
        a=y-1;
        let s=widths *-1*a;
        ngan.style.marginLeft=`${s}px`;
        ngan.style.transition ="1s"
        
    }else{
        a--;
        let s=widths *-1*a;
        ngan.style.marginLeft=`${s}px`;
        ngan.style.transition ="1s"
        
    }
   
   });
const tv = document.getElementById("tv");
const ht = document.getElementById("ht");
const series = document.getElementById("series");
const hottuan = document.getElementById("hottuan");
const th = document.getElementById("thanhngang");
tv.onclick =function(){
    series.style.display ="inline";
    hottuan.style.display ="none";
    series.style.transition="1s";
    series.style.left="0";
    th.style.left = "150px"
    th.style.transition= "0.5s"
}
ht.onclick =function(){
    series.style.display ="none";
    hottuan.style.display ="block";
    series.style.transition="1s";
    series.style.left="-100%";
    th.style.left = "25px"
    th.style.transition= "0.5s"
}


