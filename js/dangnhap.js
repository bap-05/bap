const ky = document.getElementById('ch');
const dn = document.getElementById('qua');
const ql = document.getElementById('luilai');

    ky.onclick = function(){
        const k =document.getElementById('dangKy')
        k.classList.add('len');
        console.log(k.classList);
    };

    dn.onclick = function(){
        const n =document.getElementById('dangKy')
        n.classList.remove('len');
        console.log(n.classList);
    };

    ql.onclick = function(){
        const q =document.getElementById('dangKy')
        q.classList.remove('len');
        console.log(q.classList);
    };
const dk = document.getElementById("dangKy");
const namedk = document.getElementById("username");
const emaildk = document.getElementById("email");
const passworddk = document.getElementById("password");
const repassworddk = document.getElementById("repassword");
const eroll =   document.getElementById("eroll");
dk.addEventListener("submit", function(e){
    e.preventDefault();
    let uselc = JSON.parse(localStorage.getItem("uses")) || [];
    if(passworddk.value === repassworddk.value){
        eroll.style.display = "none";
    }else{
        eroll.style.display = "block";
    }
    const kk = uselc.find((user) => user.email === emaildk.value);
    if(kk){
        alert("Email đã được đăng kí !!")
        p.classList.add('len');
    }else{
        if(namedk.value && emaildk.value && passworddk.value && repassworddk.value && passworddk.value === repassworddk.value){
            const user ={
                userid : Math.ceil(Math.random() * 100000000),
                name: namedk.value,
                email: emaildk.value,
                password: passworddk.value,
            };
            uselc.push(user);
            localStorage.setItem("uses",JSON.stringify(uselc));
            alert("dang ky thanh cong")
            dk.classList.remove('len');
        }
    }
});

const formdn = document.getElementById("formDn");
const emaildn = document.getElementById("em");
const mkdn = document.getElementById("mk");
const loi = document.getElementById("loi");
//lắng nghe sự kiện submit form đăng nhập tài khoản
formdn.addEventListener("submit", function(e){
    //ngăn chặn sự kiện load lạitrang
    e.preventDefault(); 
    //lấy dữ liệu từ local về
    let uselrc = JSON.parse(localStorage.getItem("uses"))||[];
    //Tìm kiếm email và mật khẩu người dùng có trên local?
    const tk = uselrc.find((user) => user.email === emaildn.value && user.password === mkdn.value);
    if (!tk){
        loi.style.display = "block";
    }else{
        loi.style.display = "none";
        window.location.href = "../index.html";
        localStorage.setItem("userdn", JSON.stringify(tk));
        console.log("userdn");
    }
});