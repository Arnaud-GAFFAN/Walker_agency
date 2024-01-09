import React, {useEffect} from 'react';

const DynamicText = () => {
    useEffect(() => {
        const text_container = document.getElementById("text-target");
        const array = ["clear", "simple", "smart", "strong"];
        let letterIndex = 0;
        let wordIndex = 0;

        const createLetter = () => {
            const span = document.createElement('span');
            text_container.appendChild(span);
            span.textContent = array[wordIndex][letterIndex];

            span.classList.add('letter');
            span.style.opacity = "0";
            span.style.animation = "anim 5s ease forwards"
            setTimeout(() => {

                span.remove();
            }, 2000);
        }
        const loop = () => {

            setTimeout(() => {
               if (wordIndex >= array.length){
                   wordIndex = 0;
                   letterIndex = 0;
                   loop();
               }else if (letterIndex < array[wordIndex].length){
                   createLetter();
                   letterIndex++;
                   loop();
               }else{
                   letterIndex = 0
                   wordIndex++;
                   setTimeout(loop, 2000)
               }
            }, 80)}

        loop();
        }
        , [])
    return (
            <span className={"dynamic-text"}>
                <span>Simply</span>
                <span id={"text-target"}></span>
            </span>
    );
};

export default DynamicText;