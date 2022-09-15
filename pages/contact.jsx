import React from "react";
import Navbar from "../components/Navbar";
import MainLayout from "../layouts/MainLayout";
export default function contact() {
  return (
    <MainLayout>
      <div className="vstack border-0">
        <p className="mx-auto fw-bold fs-1 ted">My contact</p>
        <p className="mx-auto fs-3">Name : Thanakit Chanlaset</p>
        <p className="mx-auto fs-3">Nickname : Best</p>
        <div></div>
        <p className="mx-auto fs-3">
          <img
            src="Facebook_Logo_(2019).png.webp"
            width="50px"
            height="50px"
            style={{ objectFit: "cover" }}
            className="rounded-circle me-2"
          />
          facebook :
          <a
            href="https://www.facebook.com/profile.php?id=100007287198334"
            target="_blank"
            rel="noreferrer"
          >
            https://www.facebook.com/Thanakit_Chanlaset
          </a>
        </p>
        <p className="mx-auto fs-3">
          <img
            src="instagram-logo-png-transparent-background-800x799.png"
            width="50px"
            height="50px"
            style={{ objectFit: "cover" }}
            className=" me-2"
          />
          Instagram : mdn.besx
        </p>
        <p className="mx-auto fs-3">
          <img
            src="LINE_logo.svg.webp"
            width="50px"
            height="50px"
            style={{ objectFit: "cover" }}
            className="rounded-circle me-2"
          />
          Line : beztt76
        </p>
        <p className="mx-auto fs-3">
          <img
            src="217887.png"
            width="50px"
            height="50px"
            style={{ objectFit: "cover" }}
            className="rounded-circle me-2"
          />
          Phone : +66-93-7836478
        </p>
        <p className="mx-auto fs-3">
          <img
            src="Microsoft_Outlook.png"
            width="50px"
            height="50px"
            style={{ objectFit: "cover" }}
            className="me-2"
          />
          Microsoft_Outlook :{" "}
          <a href="mailto:thanakit_chanlaset@cmu.ac.th" rel="noreferrer">
            Thanakit_Chanlaset@cmu.ac.th
          </a>
        </p>
        <img
          src="me1.jpg"
          width="300px"
          height="300px"
          style={{ objectFit: "cover" }}
          className="rounded-circle mx-auto"
        />
        ;
      </div>
    </MainLayout>
  );
}
