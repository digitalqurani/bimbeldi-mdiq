// Redirect otomatis ke domain resmi
if (window.location.hostname === "bimbeldi-mdiq-two.vercel.app") {
  window.location.replace("https://bimbeldi.mdiq.biz.id" + window.location.pathname);
}
import React from "react";
const WHATSAPP_NUMBER = "6285782475242";
const WHATSAPP_MESSAGE = encodeURIComponent("Assalamu'alaikum, saya ingin daftar program belajar di MDIQ.");
const WA_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

function Nav(){ 
  return (
    <nav className="bg-white/80 backdrop-blur sticky top-0 z-40">
      <div className="max-w-5xl mx-auto flex items-center justify-between p-4">
        <div className="flex items-center gap-3">
          <img src="/assets/MDQ.png" alt="MDQ" className="w-12 h-12"/>
          <div>
            <div className="font-bold text-teal-700">Madrasah Diniyah IT & Qur'an</div>
            <div className="text-xs text-gray-500">MDIQ</div>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-6">
          <a href="#home" className="hover:text-teal-600">Home</a>
          <a href="#program" className="hover:text-teal-600">Program</a>
          <a href="#daftar" className="hover:text-teal-600">Daftar</a>
          <a href="#kontak" className="hover:text-teal-600">Kontak</a>
          <a href={WA_LINK} target="_blank" rel="noreferrer" className="bg-green-600 text-white px-4 py-2 rounded">Daftar Sekarang</a>
        </div>
      </div>
    </nav>
  )
}

function Hero(){
  return (
    <section id="home" className="min-h-[60vh] flex items-center">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center p-6">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-teal-800">Madrasah Diniyah IT & Qur'an (MDIQ)</h1>
          <p className="mt-4 text-gray-700 text-lg">Belajar Qur'an, IT & Ilmu Diniyah untuk Semua Usia — Anak, Remaja, hingga Orang Tua.</p>
          <div className="mt-6 flex gap-3">
            <a href="#daftar" className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-3 rounded shadow">Daftar Sekarang</a>
            <a href={WA_LINK} target="_blank" rel="noreferrer" className="bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded shadow">Chat WhatsApp</a>
          </div>
        </div>
        <div className="bg-teal-50 rounded-lg p-6">
          <h3 className="font-bold text-teal-700">Program Unggulan</h3>
          <ul className="mt-3 space-y-2 text-gray-700">
            <li>📖 Tahsin Al-Qur'an</li>
            <li>🔈 Tartil & Tahfidz</li>
            <li>🗣️ Bahasa Arab & Inggris</li>
            <li>🔢 Calistung (Baca-Tulis-Hitung)</li>
            <li>💻 IT & Literasi Digital</li>
            <li>👪 Program Keluarga Muslim Produktif</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

function Programs(){
  const items = [
    {title:"Tahsin Al-Qur'an", desc:"Perbaikan bacaan, tajwid & makhraj."},
    {title:"Tartil & Tahfidz", desc:"Latihan baca & hafalan juz."},
    {title:"Bahasa Arab & Inggris", desc:"Percakapan & keterampilan bahasa."},
    {title:"Calistung", desc:"Baca-tulis-hitung untuk anak."},
    {title:"IT & Literasi Digital", desc:"Dasar IT untuk generasi muda."},
    {title:"Program Keluarga", desc:"Kelas keluarga & parenting islami."},
  ];
  return (
    <section id="program" className="py-10 bg-gradient-to-b from-teal-100 to-white">
      <div className="max-w-5xl mx-auto p-6">
        <h2 className="text-3xl font-bold text-teal-800">Program Kami</h2>
        <p className="mt-2 text-gray-600">Private offline — Guru datang ke rumah atau murid datang ke kantor.</p>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((it,idx)=>(
            <div key={idx} className="bg-white rounded-lg p-4 shadow">
              <h3 className="font-semibold text-teal-700">{it.title}</h3>
              <p className="text-gray-600 mt-2">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Daftar(){
  const handleSubmit = (e)=>{
    e.preventDefault();
    const fd = new FormData(e.target);
    const name = fd.get("name")||"-";
    const age = fd.get("age")||"-";
    const program = fd.get("program")||"-";
    const phone = fd.get("phone")||"-";
    const msg = encodeURIComponent(`Assalamu'alaikum, saya ingin daftar:\nNama: ${name}\nUsia: ${age}\nProgram: ${program}\nHP: ${phone}`);
    window.open(`https://wa.me/6285782475242?text=${msg}`, "_blank");
  }
  return (
    <section id="daftar" className="py-10">
      <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow">
        <h2 className="text-2xl font-bold text-teal-800">Form Pendaftaran</h2>
        <p className="text-gray-600 mt-2">Isi data singkat, tim kami akan menghubungi via WhatsApp.</p>
        <form onSubmit={handleSubmit} className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
          <input name="name" required placeholder="Nama lengkap" className="p-3 border rounded"/>
          <input name="age" placeholder="Usia" className="p-3 border rounded"/>
          <select name="program" className="p-3 border rounded">
            <option>Tahsin Al-Qur'an</option>
            <option>Tartil & Tahfidz</option>
            <option>Bahasa Arab & Inggris</option>
            <option>Calistung</option>
            <option>IT & Literasi Digital</option>
            <option>Program Keluarga</option>
          </select>
          <input name="phone" required placeholder="No. WhatsApp" className="p-3 border rounded"/>
          <div className="md:col-span-2 flex gap-3">
            <button className="bg-green-600 text-white px-4 py-2 rounded">Kirim ke WhatsApp</button>
            <a href={WA_LINK} target="_blank" rel="noreferrer" className="bg-gray-200 px-4 py-2 rounded">Chat Sekarang</a>
          </div>
        </form>
      </div>
    </section>
  )
}

function Kontak(){
  return (
    <section id="kontak" className="py-10 bg-teal-50">
      <div className="max-w-5xl mx-auto p-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-xl font-bold text-teal-700">Kontak & Lokasi</h3>
          <p className="text-gray-600 mt-2">Jl. Pendidikan No. 17, Hikam, Kabupaten Malang</p>
          <p className="text-gray-600">Jam: Senin - Sabtu | Menyesuaikan</p>
          <p className="text-gray-600 mt-2">Email: info@mdiq.biz.id</p>
          <p className="text-gray-600 mt-2">WhatsApp: +62 857-8247-5242</p>
        </div>
        <div className="flex items-center gap-4">
          <img src="/assets/MDIQ_WhatsApp_QR.png" alt="QR" className="w-36 h-36 bg-white p-2 rounded"/>
          <div>
            <p className="text-sm text-gray-600">Scan untuk chat WhatsApp</p>
            <p className="font-semibold">Madrasah Diniyah IT & Qur'an</p>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer(){
  return (
    <footer className="bg-teal-800 text-white mt-8">
      <div className="max-w-5xl mx-auto p-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/assets/MDQ.png" alt="MDQ" className="w-12 h-12"/>
          <div>
            <div className="font-bold">Madrasah Diniyah IT & Qur'an</div>
            <div className="text-sm">© 2025 MDIQ</div>
          </div>
        </div>
        <div>
          <p className="text-sm">Belajar Bahasa Arab Al Qur'an & IT dengan Semangat Digital Qurani</p>
        </div>
      </div>
    </footer>
  )
}

export default function App(){
  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-200 to-white text-gray-900">
      <Nav />
      <main>
        <Hero />
        <Programs />
        <Daftar />
        <Kontak />
      </main>
      <Footer />
    </div>
  )
}
