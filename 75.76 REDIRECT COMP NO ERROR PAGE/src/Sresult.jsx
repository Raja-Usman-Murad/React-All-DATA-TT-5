import React from 'react';
const Sresult=(props)=>{
    const imgsrc=`https://source.unsplash.com/400x400/?${props.imgp}`;
    return(
        <>
        <div className='mainIMGSEARCH'>
<img className='IMGSEARCH' src={imgsrc} />
</div>
        </>
    )
}
export default Sresult;