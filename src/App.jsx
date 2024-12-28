import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [title, setTitle] = useState([
    "남자 코트 추천",
    "강남 우동 맛집",
    "파이썬 독학",
  ]);
  const [likes, setLikes] = useState([0, 0, 0]);
  const [modal, setModal] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="container">
      <div className="black-nav">
        <h4>React Blog</h4>
      </div>

      {title.map((element, index) => (
        <div className="list" key={element}>
          <h4
            onClick={() => {
              setModal(!modal);
              setModalTitle(element);
            }}
          >
            {element}{" "}
            <span
              onClick={(event) => {
                event.stopPropagation();
                let copy = [...likes];
                copy[index]++;
                setLikes(copy);
              }}
            >
              👍
            </span>{" "}
            {likes[index]}
          </h4>
          <p>2월 17일 발행</p>
          <button
            onClick={() => {
              let temp1 = [...title];
              let temp2 = [...likes];

              temp1.splice(index, 1);
              temp2.splice(index, 1);
              setTitle(temp1);
              setLikes(temp2);
            }}
          >
            삭제
          </button>
        </div>
      ))}
      <div>
        <input
          type="text"
          onChange={(event) => {
            setInputValue(event.target.value);
          }}
        />
        <button
          onClick={() => {
            setTitle([...title, inputValue]);
            setLikes([...likes, 0]);
          }}
        >
          글 발행
        </button>
      </div>
      {modal && <Modal title={modalTitle} setTitle={setTitle} />}
      <Modal2 />
    </div>
  );
};

const Modal = ({ title, setTitle }) => {
  return (
    <div className="modal">
      <h4>{title}</h4>
      <p>날짜</p>
      <p>상세 내용</p>
      <button
        onClick={() => {
          let copy = [...title];

          copy[0] = "여자 코트 추천";
          setTitle(copy);
        }}
      >
        글 수정
      </button>
    </div>
  );
};

class Modal2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "kim",
      age: 20,
    };
  }
  render() {
    return (
      <div>
        여기는 클래스 컴포넌트 {this.state.age}
        <button
          onClick={() => {
            this.setState({ age: 21 });
          }}
        >
          버튼
        </button>
      </div>
    );
  }
}

export default App;
