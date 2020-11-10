import React from 'react';
import './Storyreel.css';
import Story from './Story';

function Storyreel() {
    return (
       <div className="storyReel">

        {/* Story */}
           <Story 
           image="https://www.fcbarcelona.com/photo-resources/2020/03/07/3dec9958-517d-491f-b355-5e69193db7cb/mini_2020-03-07-BARCELONA-R.-SOCIEDAD-74.JPG?width=1200&height=750"
           profileSrc="https://talksport.com/wp-content/uploads/sites/5/2020/10/GettyImages-1282741100.jpg?strip=all&w=960&quality=100"
           title="Lionel Messi" />

        {/* Story */}
           <Story 
           image="https://en.as.com/en/imagenes/2020/10/30/football/1604093711_824436_noticia_normal.jpg"
           profileSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Cristiano_Ronaldo_2018.jpg/220px-Cristiano_Ronaldo_2018.jpg"
           title="Cristiano Ronaldo" />

         {/* Story */}
           <Story 
           image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRbmoHlsRVB16aEjPD4H90dujdVzee6RlxFrA&usqp=CAU"
           profileSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTKnu7jRmNfwMTB1B4-Q7m9QlFvCSWROSZfxg&usqp=CAU"
           title="Robert Lewandowski" />

        {/* Story */}
           <Story 
           image="https://media2.malaymail.com/uploads/articles/2020/2020-09/James_Rodriguez_19092020.JPG"
           profileSrc="https://images.daznservices.com/di/library/GOAL/2e/86/james-rodriguez-everton-2020-21_6wlqlm929ch51khaya8g1dddc.jpg?t=-226409164&quality=100"
           title="James Rodriguez" />

        {/* Story */}
           <Story 
           image="https://i.dailymail.co.uk/1s/2020/10/31/12/35074488-0-image-a-65_1604146798283.jpg"
           profileSrc="https://images.daznservices.com/di/library/GOAL/d6/ee/paulo-dybala-juventus-2019-20_9ryptstp0mlx195v9aml83ufd.jpg?t=-1376839330&quality=100"
           title="Paulo Dybala" />
        </div>
    )
}

export default Storyreel;
