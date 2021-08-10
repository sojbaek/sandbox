import React, { useState, useEffect } from "react";
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Form, Card, Button, Breadcrumb, Alert } from 'react-bootstrap'
import LyricsWithChords from './lyricsWithChords.js'


const TransposeForm = props => {
  console.log("default key=" + props.selected)
    return (
      <form>
        <label>
          Pick your key:
          <select value={props.selected} onChange={props.onKeyChange} >
            { props.keys.reverse().map(key => {
              return(
                <option value={key} >{key}</option>
              )
            }) 
            }
          </select>
        </label>
      </form>
    );
}

function Lyrics(props) {
  return (
  <Form>
    <Form.Group>
      <Form.Label>Lyrics:</Form.Label>
      <Form.Control type="email" placeholder="Example@email.com" />
      <Form.Text className="text-muted">
      {props.text.map(line => {
        return (
          <div className="d-flex justify-content-start">{line}</div>
        )
      })}
      </Form.Text>
    </Form.Group>
  </Form>
  );
}

function App() {

  const song = {"_id":{"$oid":"5e6757f02df37f3d54ddb179"},"title":"내 마음에 비친 내 모습","artist":"유재하","lyric":["A         Bm        E7        A","","Bm7           C#m7    F#7   Bm7     E7      A","붙들 수 없는 꿈의 조각들은    하나 둘 사라져 가고","Bm7        C#m7        F#7   Bm7   E7      A","쳇바퀴 돌듯 끝이 없는 방황에   오늘도 매달려 가네","Bm7   E7   C#m   F#7  Bm7   E7  A","거짓인줄   알면서도  겉으론   감추며","Bm7   E7   C#m   F#7         Bm7           E7","한숨 섞인 말 한마디에    나만의 진실 담겨 있 는듯","A      Bm7           E7      A","이제와 뒤늦게 무엇을 더 보태려 하나","F#m         Bm   Bm7       E7","귀 기울여 듣지 않고  달리보면 그만인 것을","A        Bm7            E7       A","못 그린 내 빈곳  무엇으로 채워 지려나","F#m   Fdim     Bm7     E7     A","차라리 내 마음에 비친   내 모습 그려 가리","Bm7        C#m   F#7   Bm7   E7       A","엇갈림속의  긴잠에서 깨면  주위엔 아무도 없고","Bm7          C#m         F#7   Bm7    E7       A","묻진 않아도  나는 알고 있는 곳   그 곳에 가려고 하네","Bm7  E7   C#m   F#7  Bm7  E7    A","근심 쌓인 순간들을     힘겹게 보내며","Bm7  E7   C#m   F#7        Bm7            E7","지워 버린 그 기억들을 생각 해내곤  또 잊어 버리고","A      Bm7           E7      A","이제와 뒤늦게  무엇을 더 보태려 하나","F#m       Bm    Bm7    E7","귀기울여 듣지 않고  달리보면 그만인 것을","A      Bm7           E7      A","못그린 내 빈곳 무엇으로 채워지려나","F#m   Fdim    Bm7    E7   A","차라리 내 마음에 비친 내 모습 그려가리","","Bm   E7   C#m  F#7   Bm7   E7   A  A7","Dm   G7  Em7   A7   Dm   G7","","C      Dm7            G       Cmaj7","이제와 뒤늦게 무엇을 더 보태려 하나","Am       Dm   Dm7     G7","귀기울여 듣지 않고 달리보면 그만인 것을","Cmaj7     Dm          G7       C","못그린 내 빈곳 무엇으로 채워 지려나","Am7   Abdim    Dm7    G7   Cmaj7","차라리 내 마음의 비친 내 모습 그려가리","","D7  G7    A"],"youtube":"https://www.youtube.com/embed/yPdUVGhmXWA","genre":"발라드","user_id":"0"}
  var lyrics = song["lyric"];
  var lyricsT = new LyricsWithChords(lyrics.join('\n'))
 // var transposed = lyricsT.transpose(key)
  var tkeys = lyricsT.getTransposalKeys() 
  const [key, setKey] = React.useState(tkeys[6]);
  
  const onChangeKey = e => {
    setKey( e.target.value );
    console.log("new key=" + key )
   // setSearchCuisine(searchCuisine);
  };


  var skey = 3;

  return (
    <div className="App">
      <header className="App-header">
        Hello, World
        <TransposeForm keys={tkeys} selected={key} 
          onKeyChange={onChangeKey}>
        </TransposeForm>
        <Lyrics text={lyricsT.transpose(tkeys.indexOf(key)-6)}/>
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="20">
            hello
          </textarea>
        </div>
      </header>
    </div >
  );
}

export default App;
