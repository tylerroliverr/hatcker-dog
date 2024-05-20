import Link from "next/link";
import localFont from 'next/font/local';

const myFont = localFont({ src: '/ByteBounce.woff' });

export default function Home() {
  return (
    <main className={myFont.className}>

      <div className="header">
        <div className="logo">
          <h1>HATCKER DOG - $HDOG</h1>
        </div>
        <div className="links">
          <Link href="https://t.me/+BDAF1HXGM8U0N2Y9">
            <p>TELEGRAM for $HDOG</p>
          </Link>
          <Link href="https://x.com/hackerdog_coin">
            <p>TWITTER/X for $HDOG</p>
          </Link>
        </div>
      </div>
      <div className="lore">
          <p>
          I am hatcker dog. Me and my friends are hatckers! WOOF!
          <br></br>
          Calling all DEGENS! U are early to the first major hatcker dog team. We will hatck the main frame and shoot to the moon!
          </p>
        </div>
      <div className="hero">
        <div className="item">
          <img src="/main.png"></img>
          <p>$HDOG</p>
        </div>
        <div className="item">
          <img src="/dog2.png"></img>
          <p>woof</p>
        </div>
        <div className="item">
          <img src="/dog3.png"></img>
          <p>woof, woof $100000 woof??</p>
        </div>
        <div className="item">
          <img src="/dog4.png"></img>
          <p>ahhh woof woof woof!!</p>
        </div>
        <div className="item">
          <img src="/dog5.png"></img>
          <p>$HDOG?? WOOF!!!!!!</p>
        </div>
        <div className="item">
          <img src="/dog6.png"></img>
          <p>WOOF WOOF!!!!!!!!!!!</p>
        </div>
        <div className="item">
          <img src="/dog7.png"></img>
          <p>WOOOOOOOF (MOOOON)!</p>
        </div>
        <div className="item">
          <img src="/dog8.png"></img>
          <p>woof. hatcker woof</p>
        </div>
      </div>
      <div className="end">
        <p>omg, pls i really need to buy $HDOG rn...</p>
        <br></br>
        <Link href="https://pump.fun/AvKo6C5PfDzPMWLvNpJA5AbmqnYQFu1s9ZHLZ9gcMA3g">BUY</Link>
        <br></br>
      </div>
    </main>
  );
}
