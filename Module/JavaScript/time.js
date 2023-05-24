export default function setTime() {
  let date = new Date();
  let day = date.getDay();
  let dates = date.getDate();
  let month = date.getMonth();
  let year = date.getFullYear();
  
  let days = ["minggu", "senin", "selasa", "rabu", "kamis", "jumat", "sabtu"];
  let months = ["januari", "februari", "maret", "april", "mei", "juni", "juli", "agustus", "september", "oktober", "november", "desember"];
  
  let setTime = document.getElementById('time');
  time.innerHTML = `${days[day]}, ${dates} ${months[month]} ${year}`;
}