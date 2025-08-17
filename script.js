const WEB_APP_URL = 'https://script.google.com/macros/s/AKfycbw5P_Bdq9TGdRG6gQbLMbIDKcTRHUbITedIS191u3qP84vzlvAVdP-sumSnHwx2ey4t8g/exec'; // ضع هنا رابط الـ Web app من Apps Script
const SECRET_TOKEN = 'public1';    // نفس التوكن اللي حطيت في السكريبت

async function sendData(ev) {
  ev.preventDefault();

  const formData = new FormData();
  formData.append("name", document.getElementById('name').value);
  formData.append("email", document.getElementById('email').value);
  formData.append("message", document.getElementById('message').value);
  formData.append("token", SECRET_TOKEN);
  formData.append("source", "github_pages");

  try {
    const res = await fetch(WEB_APP_URL, {
      method: "POST",
      body: formData
    });

    const data = await res.json();
    document.getElementById('status').innerText = JSON.stringify(data);
  } catch (err) {
    document.getElementById('status').innerText = 'حدث خطأ: ' + err;
    console.error(err);
  }
}

document.getElementById('myForm').addEventListener('submit', sendData);
