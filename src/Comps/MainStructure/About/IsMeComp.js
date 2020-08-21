import React, {Component} from 'react';
import MyImage from './MyImage';
import AboutMe from './AboutmMe';

class IsMeComp extends Component{
    <MyImage imageSrc={imageSrc}/>
    <AboutMe title={title} card={card} email={email}/>
}
IsMeComp.defaultProps={
    imageSrc="D:\Studying\blog\public\gitprof.png",
    title="DailyLog",
    card="강석주, 연암공과대학교 스마트SW학과",
    email="vrimd1017@gamil.com"
}