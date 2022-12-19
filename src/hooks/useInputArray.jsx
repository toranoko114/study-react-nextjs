import { useCallback, useState } from 'react'

export const useInputArray = () => {
    const [text, setText] = useState("");
    const [array, setArray] = useState([]);

    const handleChange = useCallback((e)=>{
      if (e.target.value.length > 5){
        alert("５文字以内にしてください。");
        return;
      }
      setText(e.target.value);
    },[]);

    const handleAddArray = useCallback(()=>{
      setArray(prevArray => {
        if (prevArray.some(item => item === text)){
          alert("既に同じ要素が存在します。");
          return prevArray;
        }
        // @see - https://jsprimer.net/basic/array/#mutable-immutable
        // 破壊的メソッドを使わないようにスプレッド構文を利用する
        const newArray = [...prevArray, text];
        return newArray;
      })
    },[text])

    return {text, array, handleAddArray, handleChange};

  }
