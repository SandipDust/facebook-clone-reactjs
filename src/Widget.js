import React from 'react';
import "./Widget.css";

function Widget() {
    return (
        <div className="widget">
              <iframe 
   
                title="This is a unique title"
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Freact&tabs=timeline&width=300&height=1500&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="300" 
                height="100%" 
                style={{border:"none" , overflow:"hidden" }}
                scrolling="no" 
                frameBorder="0"
                

                allow="encrypted-media"
                >

                </iframe>
            
        </div>
    )
}

export default Widget;
