import React from "react";
import { useTranslation } from "react-i18next";
import sourcebanner from "../components/images/sourcebanner.jpeg";
import boardmember_placeholder from "../components/images/boardmember_placeholder.png";
import nelli2022 from "../components/images/board/2022/nelli.jpg";
import alina2022 from "../components/images/board/2022/alina.jpg";
import jonna2022 from "../components/images/board/2022/jonna.jpg";
import arttu2022 from "../components/images/board/2022/arttu.jpg";
import safiul2022 from "../components/images/board/2022/safiul.jpg";
import laura2022 from "../components/images/board/2022/laura.jpg";
import toni2022 from "../components/images/board/2022/toni.jpg";
import leevi2022 from "../components/images/board/2022/leevi.jpg";
import sviat2022 from "../components/images/board/2022/sviat.jpg";
import metso2022 from "../components/images/board/2022/metso.jpg";
import alina2023 from "../components/images/board/2023/alina.jpg";
import atte2023 from "../components/images/board/2023/atte.jpg";
import juho2023 from "../components/images/board/2023/juho.jpg";
import laura2023 from "../components/images/board/2023/laura.jpg";
import sylvi2023 from "../components/images/board/2023/sylvi.jpg";
import oscar2023 from "../components/images/board/2023/oscar.jpg";
import toni2023 from "../components/images/board/2023/toni.jpg";
import sylvi2024 from "../components/images/board/2024/sylvi.jpg"
import juho2024 from "../components/images/board/2024/juho.jpg"
import juha2024 from "../components/images/board/2024/juha.jpg"
import juuso2024 from "../components/images/board/2024/juuso.jpg"
import joanne2024 from "../components/images/board/2024/joanne.jpg"
import vertti2024 from "../components/images/board/2024/vertti.jpg"
import eino2024 from "../components/images/board/2024/eino.jpg"
import eetu2024 from "../components/images/board/2024/eetu.jpg"
import antti2024 from "../components/images/board/2024/antti.jpg"
import wilhelm2024 from "../components/images/board/2024/wilhelm.jpg"
import juha2025 from "../components/images/board/2025/juha.jpg"
import eino2025 from "../components/images/board/2025/eino.jpg"
import eetu_h2025 from "../components/images/board/2025/eetu_h.jpg"
import joanne2025 from "../components/images/board/2025/joanne.jpg"
import carita2025 from "../components/images/board/2025/carita.jpg"
import eetu_r2025 from "../components/images/board/2025/eetu_r.jpg"
import riku2025 from "../components/images/board/2025/riku.jpg"
import antti2025 from "../components/images/board/2025/antti.jpg"
import eppu2025 from "../components/images/board/2025/eppu.jpg"
import otto2025 from "../components/images/board/2025/otto-oskari.jpg"

const Board = () => {
  const { t } = useTranslation();
   const board2025 = {
    board: [
      {
        name: "Juha Hautakangas",
        role: t("roles.chairperson"),
        image: juha2025,
      },
      {
        name: "Otto-Oskari Suuronen",
        role: t("roles.viceChairperson"),
        image: otto2025,
      },
      {
        name: "Eino Palomäki",
        role: t("roles.treasurer"),
        image: eino2025,
      },
      {
        name: "Eetu Heikkinen",
        role: t("roles.eventsCoordinator"),
        image: eetu_h2025,
      },
      {
        name: "Joanne Hoikka",
        role: t("roles.leisureCoordinator"),
        image: joanne2025,
      },
      {
        name: "Carita Lindfors",
        role: t("roles.secretary"),
        image: carita2025,
      },
      {
        name: "Eetu Reijasto",
        role: t("roles.membershipAndClubroomCoordinator"),
        image: eetu_r2025,
      },
      {
        name: "Riku Hakamäki",
        role: t("roles.externalRelationsCoordinator"),
        image: riku2025,
      },
      {
        name: "Antti Venetjoki",
        role: t("roles.kopo"),
        image: antti2025,
      },
      {
        name: "Eppu Melto",
        role: t("roles.webmaster"),
        image: eppu2025,
      }
    ],
    staff: [
      { name: "Patrik Verho", role: t("roles.officer") },
      { name: "Eemeli Ranta", role: t("roles.officer") },
      { name: "Atte Hyväri", role: t("roles.officer") },
      { name: "Leimu Raittinen", role: t("roles.officer") },
      { name: "Emmi Luokkakallio", role: t("roles.officer") },
      { name: "Joona Räsänen", role: t("roles.officer") },
      { name: "Roope Aalto", role: t("roles.officer") },
      { name: "Juho Sulkonen", role: t("roles.officer") },
      { name: "Paula Karhi", role: t("roles.officer") },
    ],
  }; 


  const board2024 = {
    board: [
      {
        name: "Sylvi Kokko",
        role: t("roles.chairperson"),
        image: sylvi2024,
      },
      {
        name: "Juho Mäkitalo",
        role: t("roles.viceChairperson"),
        image: juho2024,
      },
      {
        name: "Vertti Salo",
        role: t("roles.treasurer"),
        image: vertti2024,
      },
      {
        name: "Antti Venetjoki",
        role: t("roles.eventsCoordinator"),
        image: antti2024,
      },
      {
        name: "Juha Hautakangas",
        role: t("roles.leisureCoordinator"),
        image: juha2024,
      },
      {
        name: "Juuso Alanko",
        role: t("roles.secretary"),
        image: juuso2024,
      },
      {
        name: "Joanne Hoikka",
        role: t("roles.membershipAndClubroomCoordinator"),
        image: joanne2024,
      },
      {
        name: "Eino Palomäki",
        role: t("roles.externalRelationsCoordinator"),
        image: eino2024,
      },
      {
        name: "Eetu Reijasto",
        role: t("roles.kopo"),
        image: eetu2024,
      },
      {
        name: "Wilhelm Nilsson",
        role: t("roles.webmaster"),
        image: wilhelm2024,
      }
    ],
    staff: [
      { name: "Leo Liikka", role: "TiTeLAN" },
      { name: "Leevi Villa", role: "TiTeLAN" },
      { name: "Toni Rantanen", role: t("roles.officer") },
      { name: "Henna Kumpumäki", role: t("roles.officer") },
      { name: "Lassi Esama", role: t("roles.officer") },
      { name: "Lassi Keijonen", role: t("roles.officer") },
    ],
  };
  const board2023 = {
    board: [
      {
        name: "Toni Rantanen",
        role: t("roles.chairperson"),
        image: toni2023,
      },
      {
        name: "Leevi Immonen",
        role: t("roles.viceChairperson"),
        image: leevi2022,
      },
      {
        name: "Atte Kaartosalmi",
        role: t("roles.treasurer"),
        image: atte2023,
      },
      {
        name: "Juho Mäkitalo",
        role: t("roles.eventsCoordinator"),
        image: juho2023,
      },
      {
        name: "Arttu Uuranmäki",
        role: t("roles.leisureCoordinator"),
        image: arttu2022,
      },
      {
        name: "Laura Tiihonen",
        role: t("roles.secretary"),
        image: laura2023,
      },
      {
        name: "Sylvi Kokko",
        role: t("roles.membershipAndClubroomCoordinator"),
        image: sylvi2023,
      },
      {
        name: "Alina Kauppila",
        role: t("roles.externalRelationsCoordinator"),
        image: alina2023,
      },
      {
        name: "Oscar Hero",
        role: t("roles.internationalStudentsCoordinator"),
        image: oscar2023,
      },
      {
        name: "Sviatoslav Vasev",
        role: t("roles.webmaster"),
        image: sviat2022,
      },
    ],
    staff: [
      { name: "Safiul Alam", role: "Web Junior" },
      { name: "Nelli Niinivaara", role: "IoT-Seminaari" },
      { name: "Mikko Wrightson", role: "IoT-Seminaari" },
      { name: "Johanna Huttunen", role: "IoT-Seminaari" },
      { name: "Leo Liikka", role: "TiTeLAN" },
      { name: "Marko Metsola", role: "TiTeLAN" },
      { name: "Sinimaarit Mustonen", role: "TiTeLAN" },
      { name: "Aino Syrjälä", role: "IO-Virta" },
      { name: "Juho Mäkitalo", role: "IO-Virta" },
      { name: "Juuso Alanko", role: "IO-Virta" },
      { name: "Johanna Huttunen", role: "IO-Virta" },
    ],
  };
  const board2022 = {
    board: [
      {
        name: "Nelli Niinivaara",
        role: t("roles.chairperson"),
        image: nelli2022,
      },
      {
        name: "Alina Kauppila",
        role: t("roles.viceChairperson"),
        image: alina2022,
      },
      {
        name: "Jonna Sorsa",
        role: t("roles.treasurer"),
        image: jonna2022,
      },
      {
        name: "Arttu Uuranmäki",
        role: t("roles.eventsCoordinator"),
        image: arttu2022,
      },
      {
        name: "Safiul Alam",
        role: t("roles.leisureCoordinator"),
        image: safiul2022,
      },
      {
        name: "Laura Tiihonen",
        role: t("roles.secretary"),
        image: laura2022,
      },
      {
        name: "Toni Rantanen",
        role: t("roles.membershipAndClubroomCoordinator"),
        image: toni2022,
      },
      {
        name: "Leevi Immonen",
        role: t("roles.externalRelationsCoordinator"),
        image: leevi2022,
      },
      {
        name: "Sviatoslav Vasev",
        role: t("roles.internationalStudentsCoordinator"),
        image: sviat2022,
      },
      {
        name: "Marko Metsola",
        role: t("roles.webmaster"),
        image: metso2022,
      },
    ],
    staff: [
      { name: "Miika Lahti", role: "IoT-Seminaari" },
      { name: "Tuomas Väkiparta", role: "IoT-Seminaari" },
      { name: "Mikko Wrightson", role: "TiTeLAN" },
      { name: "Juho Mäkitalo", role: "TiTeLAN" },
      { name: "Esa Parkkila", role: "TiTeLAN" },
      { name: "Anmol Arora", role: "IO-Virta" },
      { name: "Juho Mäkitalo", role: "IO-Virta" },
      { name: "Juuso Alanko", role: "IO-Virta" },
    ],
  };
  const board2021 = {
    board: [
      { name: "Mikko Wrightson", role: t("roles.chairperson") },
      { name: "Artturi Koutonen", role: t("roles.viceChairperson") },
      { name: "Jonna Sorsa", role: t("roles.treasurer") },
      { name: "Joonas Korpela", role: t("roles.eventsCoordinator") },
      { name: "Toni Rantanen", role: t("roles.leisureCoordinator") },
      { name: "Nelli Niinivaara", role: t("roles.secretary") },
      {
        name: "Veera Selin",
        role: t("roles.membershipAndClubroomCoordinator"),
      },
      { name: "Tomi Minkkinen", role: t("roles.externalRelationsCoordinator") },
      {
        name: "Aaro Toivonen",
        role: t("roles.internationalStudentsCoordinator"),
      },
    ],
    staff: [{ name: "Janne Vanhanen", role: "Web Junior ja IO-virta" }],
  };
  return (
    <div>
      <div className="page">
        <div className="page-banner-container">
          <div className="page-banner filter">
            <img className="bannerImage" src={sourcebanner} alt=""></img>
          </div>
          <h1 class="page-title">{t("boardMembers")}</h1>
        </div>
        <div class="page-text">
          <br />
          <br />
          <div className="current-board-container">
            {board2025.board.map((member) => (
              <div className="boardmember">
                  <img src={member.image} alt=""></img>
                <p className="boardmember-name">{member.name}</p>
                <i className="boardrole">//{member.role}</i>
              </div>
            ))}
          </div>
          <div className="helpers-container">
            <h2>{t("officers")}</h2>
            {board2025.staff.map((member) => (
              <div className="helper">
                <p>
                  <b>{member.name}:</b>
                </p>
                <p>{member.role}</p>
              </div>
            ))}
          </div>
          <br />
          <p>{t("newBoardDescription")}</p>

          <br />
          <br />
          <h1>{t("pastBoards")}</h1>
          <div className="boards-container">
           <h2>2024</h2>
            <div className="board-container">
              {board2024.board.map((member) => (
                <div className="old-boardmember">
                  <img src={member.image} alt=""></img>
                  <p className="boardmember-name">{member.name}</p>
                  <i className="boardrole">//{member.role}</i>
                </div>
              ))}
            </div>
            <br />

            <p>
              <b>{t("officers")}</b>
            </p>
            {board2024.staff.map((member) => (
              <p>
                <b>{member.role}:</b> {member.name}
              </p>
            ))} 
          <h2>2023</h2>
            <div className="board-container">
              {board2023.board.map((member) => (
                <div className="old-boardmember">
                  <img src={member.image} alt=""></img>
                  <p className="boardmember-name">{member.name}</p>
                  <i className="boardrole">//{member.role}</i>
                </div>
              ))}
            </div>
            <br />

            <p>
              <b>{t("officers")}</b>
            </p>
            {board2023.staff.map((member) => (
              <p>
                <b>{member.role}:</b> {member.name}
              </p>
            ))}
            <h2>2022</h2>
            <div className="board-container">
              {board2022.board.map((member) => (
                <div className="old-boardmember">
                  <img src={member.image} alt=""></img>
                  <p className="boardmember-name">{member.name}</p>
                  <i className="boardrole">//{member.role}</i>
                </div>
              ))}
            </div>
            <br />

            <p>
              <b>{t("officers")}</b>
            </p>
            {board2022.staff.map((member) => (
              <p>
                <b>{member.role}:</b> {member.name}
              </p>
            ))}

            <h2>2021</h2>
            {board2021.board.map((member) => (
              <p>
                <b>{member.role}:</b> {member.name}
              </p>
            ))}
            <br />
            <p>
              <b>{t("officers")}</b>
            </p>
            {board2021.staff.map((member) => (
              <p>
                <b>{member.role}:</b> {member.name}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Board;
