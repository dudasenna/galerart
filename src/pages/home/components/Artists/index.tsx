import React from "react";
import styles from "./styles.module.scss";
import Carousel from "react-elastic-carousel";
import perfil from "../../../../asserts/img/perfil.png";
import arte1 from "../../../../asserts/img/arte1.png";
import arte2 from "../../../../asserts/img/arte2.png";
import arte3 from "../../../../asserts/img/arte3.png";
import { Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";

interface ArtistProps {
  id: number;
  profile: string;
  arts: string[];
  name: string;
  artType: string;
}

const artist = [
  {
    id: 0,
    profile: perfil,
    arts: [arte1, arte2],
    name: "Mauro Andrade",
    artType: "Arte moderna",
  },
  {
    id: 1,
    profile: perfil,
    arts: [arte1, arte2],
    name: "Mauro Andrade",
    artType: "Arte moderna",
  },
];

export function Artists() {
  const renderCard = (artist: ArtistProps) => {
    return (
      <div className={styles.cardContainer}>
        <div className={styles.cardProfile}>
          <div className={styles.yellowCircle} />
          <div className={styles.redCircle} />
          <div className={styles.purpleSquare} />
          <div className={styles.profileImage}>
            <Image
              boxSize="170px"
              objectFit="cover"
              src={artist.profile}
              alt="Perfil"
            />
          </div>
        </div>{" "}
        <div>
          <Link to="/perfil"> Ir para perfil</Link>
        </div>
        <div className={styles.cardContent}>
          <p>{artist.name}</p>
          <p>{artist.artType}</p>
        </div>
      </div>
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h2>Artistas Recomendados</h2>
      </div>
      <div className={styles.content}>
        {renderCard(artist[0])}
        {renderCard(artist[1])}
      </div>
    </div>
  );
}

export default Artists;
