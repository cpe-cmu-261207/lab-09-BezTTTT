import React from "react";
import Navbar from "../components/Navbar";
import MainLayout from "../layouts/MainLayout";

export default function home() {
  return (
    <MainLayout>
      <div>
        <div class="vstack p-5">
          <div class="mx-auto d-block">
            <img
              src="me2.jpg"
              width="300"
              height="300"
              style={{ objectFit: "cover" }}
              className="rounded-5"
            />
          </div>
        </div>
        <div className="vstack">
          <span className="mx-auto fs-1 fw-bold">Thanakit Chanlaset</span>
          <span className="mx-auto fs-5 fw-italic">
            Hello, my name is Thanakit Chanlaset. My nickname is Best, i'm
            stuyding Computer Engineering at Chiang Mai University <br />
            I graduate from yupparaj wittayalai school. I'm interested in
            programming and coding i hope i will learn alot about programming
            <br />
            from this class
          </span>
          <span className="p-5 mx-auto fs-1 fw-bold ted">My skills</span>
        </div>
        <div className="m-5 p-2 hstack gap-2 border-0">
          <img
            src="code.jpg"
            width="300"
            height="300"
            style={{ objectFit: "cover" }}
            className="rounded-circle"
          />
          <div className="vstack">
            <span className="mb-3 ms-5 fs-3 fw-bold ted">Programming</span>
            <p className="me-2 mb-auto ms-5 fs-4">
              Programming is fun for me and i'm looking forward to learn more
              about it. Now i can program with only C++ and studying Java and
              Html language.
            </p>
          </div>
        </div>
        <div className="m-5 p-2 hstack gap-2 border-0">
          <img
            src="editing.webp"
            width="300"
            height="300"
            style={{ objectFit: "cover" }}
            className="rounded-circle"
          />
          <div className="vstack">
            <span className="mb-3 ms-5 fs-2 fw-bold ted">Editing video</span>
            <p className="me-2 mb-auto ms-5 fs-4">
              I used to editing video for my classmate when i was in
              high-school, i can use premiere pro, windows-pair video editing
              program. those program are a little bit hard but it's fun
            </p>
          </div>
        </div>
        <div class="m-5 p-2 hstack gap-2 border-0">
          <img
            src="sketchup.jpg"
            width="300"
            height="300"
            style={{ objectFit: "cover" }}
            className="rounded-circle"
          />
          <div class="vstack">
            <span class="mb-3 ms-5 fs-3 fw-bold ted">Sketch Up</span>
            <p class="me-2 mb-auto ms-5 fs-4">
              I learned this from high-school also, i was struggle a bit when i
              starting. Now i can use Sketch up to build a house or even a
              bigger building.
            </p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
