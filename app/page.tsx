import Link from 'next/link';

const features = [
  { title: '品牌战略', desc: '从定位到视觉叙事，建立可持续增长的品牌系统。' },
  { title: '全链路体验', desc: '官网、内容、活动与转化流程一体化设计。' },
  { title: '云端交付', desc: '基于 Next.js + Cloudflare，全球加速与边缘部署。' },
];

export default function HomePage() {
  return (
    <main className="page">
      <header className="hero">
        <p className="badge">TNT STUDIO</p>
        <h1>让品牌在互联网上更有爆发力</h1>
        <p className="subtitle">
          我们为科技与消费品牌打造高性能官网，兼顾品牌表达、加载速度与增长转化。
        </p>
        <div className="ctaGroup">
          <Link href="#contact" className="btn primary">立即咨询</Link>
          <Link href="#services" className="btn">查看服务</Link>
        </div>
      </header>

      <section id="services" className="section">
        <h2>我们能做什么</h2>
        <div className="grid">
          {features.map((item) => (
            <article key={item.title} className="card">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="section contact">
        <h2>准备好打造你的品牌网站了吗？</h2>
        <p>发送邮件至 hello@tnt.example，我们将在 24 小时内回复。</p>
      </section>
    </main>
  );
}
