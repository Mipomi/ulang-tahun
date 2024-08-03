const umur = document.getElementById("umr");
const awal = document.getElementById("awl");
const hadiah = document.getElementById("hadiah");
const tunggu = document.getElementById("wait");
const sisa = document.getElementById("sisa");
const page = document.querySelectorAll(".page");
const waktu = document.getElementById("jam");
const tanggal = document.getElementById("tanggal");
// const envelope = document.querySelector('.envelope-wrapper');

// envelope.addEventListener('click', () =>{
//     envelope.classList.toggle('flap');
// });

page.forEach((page) => {
    const frontAndBack = page.querySelectorAll(".front, .back");
    frontAndBack.forEach((frontAndBack) =>{
        frontAndBack.addEventListener('click', () =>{
            turnPage(page);
        })
    })
})

let currPage = 0;
const totalPage = 6;
function setZindex(target, zIndex){
    setTimeout(()=>{
        target.style.zIndex = zIndex;
    }, 1000);
}
function turnPage(target){
    if(target.classList.contains("turned")){
        setZindex(target, totalPage * 2 - --currPage);
    }else{
        setZindex(target, currPage++);
    }
    target.classList.toggle('turned');
    target.classList.toggle('unturned');
}

const bulan = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
const hari = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', "Jum'at", 'Sabtu'];

const today = new Date();
const day = today.getDate();
const month = today.getMonth();
const thisDay = today.getDay();
const tahun = today.getFullYear();
const tgl = hari[thisDay] + ' ' + day + ' ' + bulan[month] + ' ' + tahun;
tanggal.innerText = tgl;

function checkbirtday(){
    //untuk tangal lahir tambah 1 pada tanggal nya semisal tanggal 29 maka di tulis 30
    //untuk di buka pada tanggal 29
    const birthdate = new Date('2003-12-30');

    const timeUntilBithday = new Date(today.getFullYear(), birthdate.getMonth(), birthdate.getDate());
    
    umur.innerText = `${today.getFullYear() - birthdate.getFullYear()}`

    if(timeUntilBithday <= today){
        timeUntilBithday.setFullYear(today.getFullYear() + 1);
    }
    const timeDifference = Math.abs(timeUntilBithday - today);
    const daysLeft = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const monthsLeft = Math.floor(daysLeft / 30);

    if(daysLeft === 0){
        hadiah.style.display = "block";
        awal.style.display = "none";

        umur.innerText = `${today.getFullYear() - birthdate.getFullYear()}`;
        umur.style.color = "#074aa7"
    }else if(daysLeft <= 30){
        awal.style.display = "none";
        tunggu.style.display = "block";

        sisa.innerText = `${daysLeft} hari lagi`;
    }else{
        awal.style.display = "none";
        tunggu.style.display = "block";

        sisa.innerText = `${monthsLeft} bulan lagi`;
    }
}

function back(){
    tunggu.style.display = "none";
    awal.style.display = "block";
}

function setWaktu(){
    var date = new Date();
    var jam = date.getHours();
    var menit = date.getMinutes();
    var detik = date.getSeconds()

    jam = (jam < 10) ? "0" + jam : jam;
    menit = (menit < 10) ? "0" + menit : menit;
    detik = (detik < 10) ? "0" + detik : detik;
    
    var time = jam + ":" + menit + ":" + detik;
    waktu.innerText = time;
    setTimeout(setWaktu, 1000)
}
setWaktu();