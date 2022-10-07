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
          아래 <code>링크</code> 중 하나를 클릭해 한컴타자의 여러가지 <code>게임과 프로그램</code>을 즐기세요!
        </p><br/>
        <p className="description">
          <a target='_popup' href='https://tt-exam-c.malangmalang.com/typing/WebContent/?exercise=typing-writing'>한컴타자</a>
        </p><br/>
        <p className="description">
          <a target='_popup' href='https://tt-coin-c.malangmalang.com/coinpile_sample/WebContent/?channel=1'>동전쌓기</a>
        </p><br/>
        <p className="description">
          <a target='_popup' href='https://tt-mole-c.malangmalang.com/mole/WebContent/'>두더지잡기</a>
        </p><br/>
        <p className="description">
          <a target='_popup' href='https://tt-block-c.malangmalang.com/Flip01/WebContent/'>판뒤집기</a>
        </p><br/>
        
        <p className="description">
          <a target='_popup' disabled href='https://rain.malangmalang.com/'>말랑말랑 산성비</a>
        </p><br/>
      </main>

      <Footer />
    </div>
  )
}
