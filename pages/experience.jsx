import React from "react";
import MainLayout from "../layouts/MainLayout";
export default function Experience() {
  return (
    <MainLayout>
      <div className="vstack">
        <span className="mx-auto fs-1 fw-bold ted mt-3">
          Project Experience
        </span>
        <div className="m-5 p-2 hstack gap-2 border-0">
          <img
            src="crossy.png"
            width="300"
            height="300"
            style={{ objectFit: "cover" }}
            className="rounded-circle"
          />
          <div className="vstack">
            <span className="mb-3 ms-5 fs-3 fw-bold ted">
              Scratch Game Project
            </span>
            <p className="me-2 mb-auto ms-5 fs-4">
              My role is tester mainly in this project to help developer find a
              bug and correct it, this game is about a chicken try to walk
              through the road one step you get one point. The point you get can
              exchange skins and more.
            </p>
          </div>
        </div>
        <div className="m-5 p-2 hstack gap-2 border-0">
          <img src="gameproj.png" width="300" />
          <div className="vstack">
            <span className="mb-3 ms-5 fs-2 fw-bold ted">C++ Game project</span>
            <p className="me-2 mb-auto ms-5 fs-4">
              This project is C++ project is about 2 players trying to catch
              each other it is turn-based game with many map we've done 5 map
              back then before the day teacher Karn grade us .
            </p>
          </div>
        </div>
        <div className="vstack">
          <span className="mx-auto fs-1 fw-bold ted mt-3">
            Game Competitive Experience
          </span>
        </div>
        <div className="m-5 p-2 hstack gap-2 border-0">
          <img
            src="val.png"
            width="300"
            height="300"
            style={{ objectFit: "cover" }}
            className="rounded-circle"
          />
          <div className="vstack">
            <span className="mb-3 ms-5 fs-2 fw-bold ted">
              Valorant University Tour
            </span>
            <p className="me-2 mb-auto ms-5 fs-4">
              Me and my friend was paticipated this tournament through Camt
              qualifying and play under Camt team, unfortunate we disqualify on
              play-in stage
            </p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
