import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>한컴타자 다이렉트링크</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="한컴타자 다이렉트링크" />
        <p className="description">
          아래 <code>링크</code>를 클릭해 한컴타자 <code>게임과 프로그램</code>을 즐기세요!
        </p>
      </main>

      <Footer />
    </div>
  )
}
