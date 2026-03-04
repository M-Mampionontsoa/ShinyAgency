import { MotionCard } from "../features/Card.jsx";
import styled from "styled-components";
import Header from "../features/Header.jsx";
import { Loader } from "../utils/Atoms.jsx";
import Footer from "../features/Footer.jsx";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import Modal from "../features/Modal.jsx";

const CardsContainer = styled.div`
  display: grid;
  position: relative;
  z-index: 1;
  gap: 24px;
  grid-template-rows: 350px 350px;
  grid-template-columns: repeat(2, 1fr);
  margin-left: 15vw;
  margin-top: 10vh;
`;

const H1 = styled.h1`
  font-family: Trebuchet MS;
  font-weight: 700;
  font-size: 30px;
  leading-trim: NONE;
  line-height: 133%;
  letter-spacing: 0%;
  text-align: center;
  color: #2f2e41;
`;

const P = styled.p`
  font-family: Trebuchet MS;
  font-weight: 700;
  font-size: 20px;
  leading-trim: NONE;
  line-height: 133%;
  letter-spacing: 0%;
  text-align: center;
  color: #8186a0;
`;

async function fetchData() {
  try {
    const response = await fetch("http://localhost:8000/freelances/");
    return response.json();
  } catch (e) {
    throw new Error(e.message);
  }
}

function Freelances() {
  const { data, isPending, isFetching, error } = useQuery({
    queryKey: ["profile"],
    queryFn: fetchData,
  });
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [modalAction, setModalAction] = useState("");

  const handleCardClick = (profile) => {
    if (selectedProfile === profile.name) {
      setModalAction("supprimé");
    } else {
      setModalAction("ajouté");
    }
    setSelectedProfile(profile);
  };

  const closeModal = () => {
    setSelectedProfile(null);
  };

  return (
    <div>
      <Header />
      <H1>Trouvez votre Prestataire</H1>
      <P>Chez Shiny nous réunissons les meilleurs profils pour vous.</P>

      {selectedProfile && (
        <Modal
          action={modalAction}
          profile={selectedProfile}
          onClose={closeModal}
        />
      )}

      {isPending ? (
        <Loader data-testid="loader" />
      ) : error ? (
        <div>Error loading data</div>
      ) : (
        <CardsContainer>
          {data.freelancersList.map((profile, index) => (
            <MotionCard
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, x: 20 }}
              transition={{ duration: 2 }}
              key={`${profile.name}-${index}`}
              label={profile.job}
              title={profile.name}
              picture={profile.picture}
              onClickCard={() => handleCardClick(profile)}
            />
          ))}
        </CardsContainer>
      )}
      <Footer />
    </div>
  );
}

export default Freelances;
