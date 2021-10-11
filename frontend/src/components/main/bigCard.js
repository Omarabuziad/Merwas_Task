import React from 'react';

const BigCard = ({imageUrl,imagetext,title1 , title2 , title3,bought,old , newPri}) => {
	return <article className="BigCard">

         <div className="Card-div-img">
         
         <img className="BigCard-img" src={imageUrl} />
         <p className="BigCard-p">{imagetext}</p>
         
         </div>

         <div className="BigCard-Info">

             <h3 className="BigCard-Info-text1">{title1}</h3>
             <p className="BigCard-Info-text2">{title2}</p>
             <p className="BigCard-Info-text3">{title3}</p>

         </div>

         <div className="BigCard-prices">

             <p className="BigCard-prices-bought">{bought}</p>

             <div className="BigCard-price">
                 <p className="BigCard-price-old">{old}</p>
                 <span className="BigCard-price-new">
                     <p className="BigCard-price-new-from">from</p>
                     <p className="BigCard-price-new-price">{newPri}</p>
                 </span>
             </div>




         </div>
        
        



		
		
		
		
		
		</article>;
};

export default BigCard;
