import React, {useEffect} from 'react';

const Mouse = () => {

    useEffect(() => {
        const mouse = document.querySelector(".cursor");
        window.addEventListener('mousemove', (e) => {
            mouse.style.top = e.y + "px";
            mouse.style.left = e.x + "px";
        })

        window.document.querySelectorAll('.hover').forEach((item) => {
            item.addEventListener('mouseenter', () => {
                mouse.classList.add("hovered");
            });
            item.addEventListener('mouseleave', () => {
                mouse.style.transition = ".5s ease-out";
                mouse.classList.remove("hovered");
            })
        })

    }, []);

    return (
        <div>
           <span className="cursor"></span>
        </div>
    );
};

export default Mouse;