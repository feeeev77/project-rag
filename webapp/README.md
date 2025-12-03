User mengisi pertanyaan di WebApp lokal
Pengguna mengetik pertanyaan pada form di halaman WebApp (Next.js / Node.js / Flask).

WebApp mengirim request ke Webhook n8n
Setelah button submit ditekan, WebApp mengirim data JSON (seperti { "question": "..." }) menggunakan fetch() atau axios ke endpoint Webhook n8n.

n8n menerima request dan memproses alur workflow
Webhook Node menangkap data tersebut lalu diteruskan ke OpenAI Node untuk menghasilkan jawaban dari AI.

OpenAI memproses dan memberikan respon
Node OpenAI mengembalikan jawaban berbasis prompt yang dikirim dari n8n.

n8n mengirim kembali hasil ke WebApp
Hasil AI dikirim balik ke WebApp melalui respon HTTP pada webhook (status 200 + JSON output).

WebApp menampilkan hasil ke layar
WebApp menerima hasil dan menampilkan jawaban AI di halaman UI.