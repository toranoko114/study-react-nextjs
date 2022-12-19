import { useEffect} from 'react'

export const useBackGroundColerChange = () => {

    useEffect(() => {
      document.body.style.backgroundColor = 'lightblue';
      return () => {
        document.body.style.backgroundColor = '';
      };
    },[]);

  }
