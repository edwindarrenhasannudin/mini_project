import HeroBanner from "@/components/HeroBanner";

export default function Home() {
  return (
    <main>
      <HeroBanner />
      <section id="portfolio" style={{ padding: '20px', margin: '20px 0' }}>
        <h2>Portofolio</h2>
        <ul style={{
            listStyle: 'none',
            padding: '0',
            margin: '0',
            display: 'grid',
            gap: '15px',
            fontSize: '1rem',
          }}>
          <li style={{
              backgroundColor: 'white',
              padding: '20px',
              borderRadius: '8px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            }}>
            <strong style={{
                color: '#0070f3',
                fontSize: '1.2rem',
                fontWeight: 'bold',
              }}>
                Asisten Tutorial:
                </strong> Membantu mahasiswa memahami konsep abstrak dan logika pemrograman.
          </li>
          <li style={{
              backgroundColor: 'white',
              padding: '20px',
              borderRadius: '8px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            }}>
            <strong style={{
                color: '#0070f3',
                fontSize: '1.2rem',
                fontWeight: 'bold',
              }}>
                Penelitian:
                </strong> Pengembangan web untuk klinik bersalin dengan metode UCD.
          </li>
          <li style={{
              backgroundColor: 'white',
              padding: '20px',
              borderRadius: '8px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            }}>
            <strong style={{
                color: '#0070f3',
                fontSize: '1.2rem',
                fontWeight: 'bold',
              }}>
                Proyek:
                </strong> Membuat website pemasaran kuliner, sistem distribusi, dan pengembangan kemasan produk.
          </li>
          <li style={{
              backgroundColor: 'white',
              padding: '20px',
              borderRadius: '8px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            }}>
            <strong style={{
                color: '#0070f3',
                fontSize: '1.2rem',
                fontWeight: 'bold',
              }}>
                Game Development:
                </strong> Membuat game <strong>Nitro ITERA Racing</strong>, sebuah game balapan berbasis web yang dirancang untuk meningkatkan minat mahasiswa terhadap pemrograman game dan simulasi.
          </li>
        </ul>
      </section>
    </main>
  );
}
