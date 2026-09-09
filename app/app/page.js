import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ maxWidth: '500px', margin: '50px auto', padding: '20px', textAlign: 'center', fontFamily: 'sans-serif', direction: 'rtl' }}>
      <h1 style={{ color: '#1e293b' }}>نظام تسجيل المخالفات السلوكية</h1>
      <p style={{ color: '#64748b' }}>مدرسة مسعى</p>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginTop: '30px' }}>
        <Link href="/add-violation" style={{ padding: '14px', backgroundColor: '#0070f3', color: '#fff', textDecoration: 'none', borderRadius: '8px', fontWeight: 'bold' }}>
          ➕ تسجيل مخالفة جديدة
        </Link>
        <Link href="/violations" style={{ padding: '14px', backgroundColor: '#475569', color: '#fff', textDecoration: 'none', borderRadius: '8px', fontWeight: 'bold' }}>
          📋 عرض سجل المخالفات
        </Link>
      </div>
    </div>
  );
}
