import React, { ReactElement } from "react";
import MapGL, {
  Marker,
  NavigationControl,
  Popup,
  StaticMap,
} from "react-map-gl";
import ProjectsData from "./../../../data/ProjectsData.json";
import styles from "./Replication.module.scss";

interface Props {}

function Replication({}: Props): ReactElement {
  let timer: NodeJS.Timeout;
  const [viewport, setViewPort] = React.useState({
    width: 600,
    height: 600,
    latitude: 22.594,
    longitude: 80.112,
    zoom: 3.6,
  });
  const [popupData, setPopupData] = React.useState({ show: false });

  const _onViewportChange = (view: any) => setViewPort({ ...view });

  return (
    <div>
      <section
      id=""
        className="services-section py-5 py-md-0 mt-60"
        style={{ minHeight: "100vh" }}
      >
        <div className="section-title text-center mb-0">
          <h3
            style={{
              fontFamily: "Caveat, cursive",
              fontWeight: "bolder",
              letterSpacing: 1.3,
              fontSize: "36px",
            }}
          >
            Our Experience
          </h3>{" "}
          <h2> Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium facere vitae repellat rem, nulla libero. Quis deserunt fugiat provident voluptatibus explicabo perferendis impedit! Accusamus at nobis reprehenderit culpa sint cum?</h2>{" "}
          
          <br />
        </div>

        <div className={"row justify-content-center"}>
          <MapGL
            {...viewport}
            mapStyle="mapbox://styles/mapbox/light-v10"
            mapboxApiAccessToken={process.env.MAPBOXGL_ACCESS_TOKEN}
            onViewportChange={_onViewportChange}
            scrollZoom={false}
            dragPan={false}
            dragRotate={false}
            doubleClickZoom={false}
            touchZoom={false}
            touchRotate={false}
          >
            {ProjectsData.map((project: any) => {
              return (
                <Marker
                  latitude={project.lat}
                  longitude={project.lon}
                  offsetLeft={5}
                  offsetTop={-16}
                  style={{ left: "28px" }}
                  role="button"
                  tabIndex={0}
                >
                  <div
                    className={styles.marker}
                    onMouseOver={() => {
                      timer = setTimeout(() => {
                        setPopupData({
                          show: true,
                          lat: project.lat,
                          long: project.lon,
                          project: project,
                        });
                      }, 300);
                    }}
                    onMouseLeave={() => {
                      clearTimeout(timer);
                    }}
                    // onClick={() => {
                    //   setPopupData({
                    //     show: true,
                    //     lat: project.lat,
                    //     long: project.lon,
                    //     project: project,
                    //   });
                    // }}
                    // onBlur={() => {
                    //   setPopupData({ ...popupData, show: false });
                    // }}
                  />
                </Marker>
              );
            })}
            {popupData.show && (
              <Popup
                latitude={popupData.project.lat}
                longitude={popupData.project.lon}
                closeButton={false}
                closeOnClick={false}
                onClose={() => setPopupData({ ...popupData, show: false })}
                anchor="bottom"
                dynamicPosition={false}
                offsetTop={-40}
                tipSize={0}
                onMouseLeave={() => {
                  if (!open) {
                    setTimeout(() => {
                      setPopupData({ ...popupData, show: false });
                    }, 300);
                  }
                }}
              >
                <div>{popupData.project.name}</div>
              </Popup>
            )}
          </MapGL>
        </div>
      </section>
    </div>
  );
}

export default Replication;
