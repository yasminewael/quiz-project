import React from 'react';
import {useEffect} from "react";
export default function Progress(props) {

useEffect(() => {
    const progress = document.getElementById('progress');
                    displayProgress(progress)


  })
  
    const displayProgress = (progress) => {
            let calcProgress = Math.floor((props.score / props.questionCount)*100);
            progress.textContent = calcProgress + '%'
if(calcProgress <= 5){
    progress.style.width = '1%';

}
            if(calcProgress <= 35 && calcProgress > 5){
    progress.style.width = '30%';
}if(calcProgress <= 55 && calcProgress > 35){
    progress.style.width = '50%';

}if(calcProgress <= 75 && calcProgress > 55){
    progress.style.width = '75%'
}if(calcProgress <= 95 && calcProgress > 75){
    progress.style.width = '90%'
}if(calcProgress <= 100 && calcProgress > 55){
    progress.style.width = '100%'
}

  }


    return (
    <div id="progress"></div>



    )
}

