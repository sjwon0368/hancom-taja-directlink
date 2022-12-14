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
          한컴타자가 새로워졌어요! 아래의 <code>링크</code>를 클릭해 <code>새로운 게임과 타자연습</code>을 즐기세요!
        </p>
        <p className="description">
          <a target='_blank' href='https://tt.hancomtyping.com/?t=&r='>한컴타자</a>
        </p>
        <p className="description">
          <code className='warnCode'>안내: 최신 버전의 한컴타자는 온라인 Unity플레이어로 만들어졌기 떄문에 불러오는 데 다소 시간이 걸릴 수 있습니다.</code>
        </p><br/>
        <p className="description">
          <a target='_blank' href='https://game-wcs.hancomtyping.com/?t=&r='>워드 크러시 사가</a>
        </p>
        <p className="description">
          <a target='_blank' href='https://tt-coin-c.malangmalang.com/coinpile_sample/WebContent/?channel=2'>동전쌓기 채널 2</a>
        </p>
        <p className="description">
          <a target='_blank' href='https://tt-mole-c.malangmalang.com/mole/WebContent/'>두더지잡기</a>
        </p>
        <p className="description">
          <a target='_blank' href='https://tt-block-c.malangmalang.com/Flip01/WebContent/'>판뒤집기</a>
        </p>
        <p className="description">
          <code className='warnCode'>안내: 현재 말랑말랑 산성비는 대전교육정보원에 의해 접속이 제한되었기 때문에 집에서 개인 컴퓨터로 접속해주세요!</code>
        </p><br/>
        <p className="description">
          <a target='_blank' disabled href='https://rain.malangmalang.com/'>말랑말랑 산성비</a>
        </p>
      </main>

      <Footer />
    </div>
  )
}
