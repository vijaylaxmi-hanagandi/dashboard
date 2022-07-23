import React from 'react';
import Feature from '../../components/featureinfo/Feature';
import WidgetLG from '../../components/WidgetLg/WidgetLG';
import Widgetsmall from '../../components/Widgetsmall/Widgetsmall';
import "./home.css"

export default function Home() {
  return (
    <div className='home'>
      <Feature />
      <Widgetsmall />
      <WidgetLG />
    </div>
  );
}
