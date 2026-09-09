import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ maxWidth: '600px', margin: '50px auto', padding: '20px', textAlign: 'center' }}>
      <h1 style={{ color: '#1e293b' }}>نظام تسجيل المخالفات السلوكية</h1>
      <p style={{ color: '#64748b' }}>مدرسة مسعى</p>
      
      <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', marginTop: '30px' }}>
        <Link href="/add-violation" style={{ padding: '12px 20px', background: '#2563eb', color: '#fff', borderRadius: '8px', textDecoration: 'none' }}>
          ➕ تسجيل مخالفة جديدة
        </Link>
        <Link href="/violations" style={{ padding: '12px 20px', background: '#475569', color: '#fff', borderRadius: '8px', textDecoration: 'none' }}>
          📋 عرض سجل المخالفات
        </Link>
      </div>
    </div>
  );
}
