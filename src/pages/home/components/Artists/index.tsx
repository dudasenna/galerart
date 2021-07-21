import React from 'react';
import styles from './styles.module.scss';
import Carousel from 'react-elastic-carousel';
import perfil from '../../../../asserts/img/perfil.png';
import arte1 from '../../../../asserts/img/arte1.png';
import arte2 from '../../../../asserts/img/arte2.png';
import arte3 from '../../../../asserts/img/arte3.png';
import { Image } from "@chakra-ui/react";

export function Artists() {

  const renderItem = () => {
    const names = [
      'Maria Luisa',
      'Gabriel Oliveira',
      'Washington Igor',
      'Maria Luisa',
      'Gabriel Oliveira',
      'Washington Igor',
    ];
    return names.map((item: string) => (
      <div key={item} className={styles.carouselContainer}>
        <div className={styles.perfilInfo}>
          <Image
            boxSize="80px"
            objectFit="cover"
            src={perfil}
            alt="Perfil"
          />
          <article>
            <section>{item}</section>
            <section>Estilo de Arte</section>
          </article>
        </div>
        <div className={styles.images}>
        <Image
            boxSize="100px"
            objectFit="cover"
            src={arte1}
            alt="Perfil"
          />
         <Image
            boxSize="100px"
            objectFit="cover"
            src={arte2}
            alt="Perfil"
          />
          <Image
            boxSize="100px"
            objectFit="cover"
            src={arte3}
            alt="Perfil"
          />
        </div>
      </div>
    ));
  };

  return (
    <div className={styles.container}>
      <div>
        <h2>Artistas Recomendados</h2>
      </div>
      <Carousel
        className={styles.carousel}
        isRTL={false}
        disableArrowsOnEnd
        pagination={false}
        itemsToShow={3.5}
        // enableMouseSwipe={false}
        showArrows={false}
      >
        {renderItem()}
      </Carousel>
    </div>
  );
}

export default Artists;
