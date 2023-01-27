import React from 'react';
import "./Template.css";

//투두리스트의 뼈대가 될 탬플릿

const Template = ({children, todoLength}) => {
    return (
    <div className='Template'>
        <div className='Title'> 남은 할 일 {todoLength}개</div>
        <div> {children} </div>
    </div>
    );
};

export default Template;