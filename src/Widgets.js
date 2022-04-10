import React from 'react';
import './Widgets.css';
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function Widgets() {
    const newsArticle = (heading, subtitle) => (
        <div className='widgets__article'>
            <div className="widgets__articleLeft">
                <FiberManualRecordIcon/>
            </div>
            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
        
    )
  return (
    <div className='widgets'>
        <div className="widgets__header">
            <h2>LinkedIn News</h2>
            <InfoIcon/>
        </div>

        {newsArticle("Armageddon is back", "Top news - 9099 readers")}
        {newsArticle("Coronavirus: India updates", "Top news - 8800 readers")}
        {newsArticle("Nifty Bank to breach 40k", "Top news - 7998 readers")}
        {newsArticle("Stock Futures Up as Investors Evaluate Fed’s Stance to Tackle Inflation", "Top news - 4562 readers")}
        {newsArticle("FM Nirmala Sitharaman to meet PSBs' heads on Apr 23 to nudge them for credit expansion", "Top news - 6546 readers")}
        {newsArticle("Russia-Ukraine Crisis LIVE | Dozens of Ukrainians found in grave near Kyiv", "Top news - 1560 readers")}
        {newsArticle("Top selling cars in India in March 2022", "Top news - 786 readers")}
    </div>
  );
}

export default Widgets