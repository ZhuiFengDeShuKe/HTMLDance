let danceHtml = document.querySelector('#danceHtml');
let danceStyle = document.querySelector('#danceStyle');
let danceContent = 
`
/*
骑着我心爱的小摩托，它永远不会堵车

画个太极八卦图
Step 1.画个大框框
**/
#taiJi {
    border: 1px solid gray;
  }

/* Step 2.框框切成圆 */
#taiJi {
    border-radius: 50%;
}

/* Step 3.一半刷白，一半刷黑 */
#taiJi {
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
    border: none;
}

/* Step 4.阴阳相融 */
#taiJi::before {
    border-radius: 50%;
    background: white;
}

#taiJi::after {
    border-radius: 50%;
    background: black;
}

/* Step 5.太极点睛 */
#taiJi::before {
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 15%, rgba(255,255,255,1) 15%, rgba(255,255,255,1) 100%);
}

#taiJi::after {
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 15%, rgba(0,0,0,1) 15%, rgba(0,0,0,1) 100%);
}
`;
let danceContentShow = '';

let index = 0;
let refresh = () => {
    setTimeout(() => {
        if (index < danceContent.length) {
            if (danceContent[index] === '\n') {
                danceContentShow += '<br>';
            } else if (danceContent[index] === ' ') {
                danceContentShow += '&nbsp';
            } else {
                danceContentShow += danceContent[index];
            }
            index++;
            danceHtml.innerHTML = danceContentShow;
            danceStyle.innerHTML = danceContent.substring(0, index);
            window.scrollTo(0, 99999);
            danceHtml.scrollTo(0, 99999);
            refresh();
        }
    }, 20);
}

refresh();