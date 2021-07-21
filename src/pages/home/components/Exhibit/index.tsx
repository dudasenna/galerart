import React from 'react';
import styles from './styles.module.scss';
import Carousel from 'react-elastic-carousel';
import arte1 from '../../../../asserts/img/arte1.png';
import arte2 from '../../../../asserts/img/arte2.png';
import arte3 from '../../../../asserts/img/arte3.png';
import { Image } from '@chakra-ui/react';
import { Rating } from '@material-ui/lab';

export function Exhibit() {
  const renderItem = () => {
    const images = [arte1, arte2, arte3, arte1, arte2, arte3];
    return images.map((item: any) => (
      <div key={item} className={styles.carouselContainer}>
        <Image
          boxSize='150px'
          objectFit='cover'
          src={item}
          alt='Imagem da exposição'
        />
        <article>
          <section>Nome</section>
          <section>06/06/2023</section>
          <section>R$30,00</section>
        </article>
        <article>
          <section>Galeria X</section>
          <section>Estilo de arte</section>
          <section>
            <p>Nota do Público</p>
            <Rating readOnly value={4.3} precision={0.1} />
          </section>
        </article>
      </div>
    ));
  };

  return (
    <div className={styles.container}>
      <div>
        <h2>Exposições para você</h2>
      </div>
      <Carousel
        className={styles.carousel}
        isRTL={false}
        disableArrowsOnEnd
        pagination={false}
        itemsToShow={2.8}
        // enableMouseSwipe={false}
        showArrows={false}
      >
        {renderItem()}
      </Carousel>
    </div>
  );
}

export default Exhibit;
